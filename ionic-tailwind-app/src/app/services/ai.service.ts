import { Injectable, inject, signal } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpEventType,
  HttpEvent,
} from "@angular/common/http";
import {
  Observable,
  Subject,
  BehaviorSubject,
  firstValueFrom,
  map,
  catchError,
  throwError,
  of,
} from "rxjs";
import { AI_CONFIG, AIModel } from "../config/ai.config";
import { ApiService, Place } from "./api.service";

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
  name?: string;
}

export interface ChatCompletionRequest {
  model: string;
  messages: ChatMessage[];
  temperature?: number;
  max_tokens?: number;
  stream?: boolean;
}

export interface ChatCompletionResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }[];
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  /** Địa điểm được trích xuất từ reply bởi BE (không cần gọi thêm HTTP request) */
  suggestedPlaces?: Place[];
}

@Injectable({
  providedIn: "root",
})
export class AIService {
  private http = inject(HttpClient);
  private apiService = inject(ApiService);

  private _isLoading = signal<boolean>(false);
  private _currentModel = signal<string>(AI_CONFIG.defaultModel);

  isLoading = this._isLoading.asReadonly();
  currentModel = this._currentModel.asReadonly();

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "device-id": this.apiService.getDeviceId(),
    });
    if (AI_CONFIG.apiKey) {
      headers = headers.set("Authorization", `Bearer ${AI_CONFIG.apiKey}`);
    }
    return headers;
  }

  getAvailableModels(): AIModel[] {
    return AI_CONFIG.models;
  }

  setCurrentModel(modelId: string): void {
    const model = AI_CONFIG.models.find((m) => m.id === modelId);
    if (model) {
      this._currentModel.set(modelId);
    }
  }

  /**
   * Gửi chat qua BE (server). BE proxy tới Antigravity Tools.
   * Hỗ trợ ảnh: truyền imageBase64 (phần base64 không có prefix data:image/...).
   */
  chat(
    messages: ChatMessage[],
    model?: string,
    imageBase64?: string,
    sessionId?: string,
  ): Observable<ChatCompletionResponse> {
    this._isLoading.set(true);

    const { message, history } = this.messagesToBeFormat(messages);
    const body: Record<string, unknown> = { message, history };
    if (imageBase64) {
      body["imageBase64"] = imageBase64.replace(/^data:image\/\w+;base64,/, "");
    }
    // Gửi model được FE chọn lên BE để BE dùng đúng model
    if (model) body["model"] = model;
    // Gửi sessionId để BE lưu lịch sử vào DB
    if (sessionId) body["sessionId"] = sessionId;

    return this.http
      .post<{
        reply: string;
        suggestedPlaces: Place[];
      }>(`${AI_CONFIG.baseUrl}/api/chat`, body, { headers: this.getHeaders() })
      .pipe(
        map((beResponse) => {
          this._isLoading.set(false);
          return {
            id: "",
            object: "chat.completion",
            created: Date.now(),
            model: model || this._currentModel(),
            choices: [
              {
                index: 0,
                message: { role: "assistant", content: beResponse.reply },
                finish_reason: "stop",
              },
            ],
            suggestedPlaces: beResponse.suggestedPlaces || [],
          } as ChatCompletionResponse;
        }),
        catchError((error) => {
          this._isLoading.set(false);
          console.error("AI Chat Error:", error);
          return throwError(() => error);
        }),
      );
  }

  /** Trả về places đầy đủ Place data từ chat response (gọi kèm sau chat). */
  extractPlacesFromChat(reply: string): Observable<Place[]> {
    return this.http
      .post<{ suggestedPlaces: Place[] }>(
        `${AI_CONFIG.baseUrl}/api/extract-places`,
        { reply },
        { headers: this.getHeaders() },
      )
      .pipe(
        map((res) => res.suggestedPlaces || []),
        catchError(() => of([])),
      );
  }

  /** Chuyển messages (có system) sang format BE: message (cuối) + history (trước đó). */
  private messagesToBeFormat(messages: ChatMessage[]): {
    message: string;
    history: { role: string; content: string }[];
  } {
    const withoutSystem = messages.filter((m) => m.role !== "system");
    if (withoutSystem.length === 0) {
      return { message: "", history: [] };
    }
    const last = withoutSystem[withoutSystem.length - 1];
    const history = withoutSystem
      .slice(0, -1)
      .map((m) => ({ role: m.role, content: m.content }));
    return {
      message: last.role === "user" ? last.content : "",
      history,
    };
  }

  /** Chat streaming qua BE: POST /api/chat/stream, nhận SSE data: { content } hoặc { done: true }. */
  streamChat(messages: ChatMessage[], model?: string): Observable<string> {
    this._isLoading.set(true);
    const { message, history } = this.messagesToBeFormat(messages);

    const eventSubject = new Subject<string>();

    this.http
      .post(
        `${AI_CONFIG.baseUrl}/api/chat/stream`,
        { message, history },
        { headers: this.getHeaders(), responseType: "text", observe: "events" },
      )
      .subscribe({
        next: (event: HttpEvent<string>) => {
          if (
            event.type === HttpEventType.DownloadProgress &&
            event.partialText
          ) {
            const lines = event.partialText.split("\n");
            for (const line of lines) {
              if (line.startsWith("data: ")) {
                try {
                  const parsed = JSON.parse(line.slice(6)) as {
                    content?: string;
                    done?: boolean;
                    error?: string;
                  };
                  if (parsed.error) {
                    eventSubject.error(new Error(parsed.error));
                    return;
                  }
                  if (parsed.done) {
                    this._isLoading.set(false);
                    eventSubject.complete();
                  } else if (parsed.content) {
                    eventSubject.next(parsed.content);
                  }
                } catch {
                  // bỏ qua dòng không phải JSON
                }
              }
            }
          }
        },
        error: (err) => {
          this._isLoading.set(false);
          eventSubject.error(err);
        },
        complete: () => {
          this._isLoading.set(false);
        },
      });

    return eventSubject.asObservable();
  }

  /** Gửi tin nhắn (gọi chat qua BE). */
  async sendMessage(
    content: string,
    history: ChatMessage[] = [],
  ): Promise<string> {
    const messages: ChatMessage[] = [...history, { role: "user", content }];

    try {
      const response = await firstValueFrom(this.chat(messages));
      return (
        response?.choices[0]?.message?.content ||
        "Xin lỗi, tôi không thể trả lời lúc này."
      );
    } catch (error) {
      console.error("Send message error:", error);
      return "Đã xảy ra lỗi. Vui lòng thử lại sau.";
    }
  }
}
