import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewChecked,
  HostListener,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ChatBubbleComponent } from "../../components/chat/chat-bubble/chat-bubble.component";
import { PlaceCardComponent } from "../../components/place/place-card/place-card.component";
import { AIService, ChatMessage as AIMessage } from "../../services/ai.service";
import { ApiService, Place } from "../../services/api.service";
import { AI_CONFIG } from "../../config/ai.config";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  placeIds?: string[];
}

interface AppAIModel {
  id: string;
  label: string;
  desc: string;
  badge: string;
}

@Component({
  selector: "app-chat",
  standalone: true,
  imports: [CommonModule, FormsModule, ChatBubbleComponent, PlaceCardComponent],
  template: `
    <div class="flex flex-col h-screen pb-16">
      <!-- Header -->
      <div class="px-4 pt-12 pb-3 bg-white border-b border-gray-100">
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center"
          >
            <svg
              class="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </div>
          <div class="flex-1">
            <h1 class="text-base font-semibold text-gray-900">
              Trợ lý du lịch Đà Lạt
            </h1>
            <p class="text-xs text-gray-500">Luôn sẵn sàng giúp bạn</p>
          </div>

          <!-- New Chat Button -->
          <button
            (click)="startNewChat()"
            title="Cuộc trò chuyện mới"
            class="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <svg
              class="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Messages Area -->
      <div class="flex-1 overflow-y-auto px-4 py-6">
        <!-- Empty State -->
        <div
          *ngIf="messages.length === 0"
          class="flex flex-col items-center justify-center h-full"
        >
          <div
            class="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4"
          >
            <svg
              class="w-8 h-8 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </div>
          <h3 class="text-base font-medium text-gray-900 mb-2">Xin chào! 👋</h3>
          <p class="text-sm text-gray-500 mb-6">Tôi có thể giúp gì cho bạn?</p>

          <div class="flex flex-wrap justify-center gap-2">
            <button
              *ngFor="let prompt of quickPrompts"
              (click)="sendQuickPrompt(prompt)"
              class="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm"
            >
              {{ prompt }}
            </button>
          </div>
        </div>

        <!-- Messages -->
        <div *ngIf="messages.length > 0">
          <app-chat-bubble
            *ngFor="let msg of messages"
            [role]="msg.role"
            [content]="msg.content"
          ></app-chat-bubble>

          <!-- Typing Indicator -->
          <div *ngIf="isTyping" class="flex gap-3 mb-4">
            <div
              class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0"
            >
              <svg
                class="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <div
              class="bg-gray-50 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1"
            >
              <span
                class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style="animation-delay: 0ms;"
              ></span>
              <span
                class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style="animation-delay: 150ms;"
              ></span>
              <span
                class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style="animation-delay: 300ms;"
              ></span>
            </div>
          </div>

          <!-- Related Places -->
          <div
            *ngIf="
              !isTyping &&
              relatedPlaces.length > 0 &&
              lastMessageRole === 'assistant'
            "
            class="mt-4"
          >
            <h4 class="text-sm font-medium text-gray-700 mb-3">
              Địa điểm liên quan
            </h4>
            <div class="space-y-3">
              <app-place-card
                *ngFor="let place of relatedPlaces"
                [place]="place"
                variant="compact"
              ></app-place-card>
            </div>
          </div>

          <div #messagesEnd></div>
        </div>
      </div>

      <!-- Image Preview -->
      <div *ngIf="previewImage" class="absolute bottom-24 left-4">
        <div class="relative inline-block">
          <img
            [src]="previewImage"
            alt="Preview"
            class="h-20 w-20 object-cover rounded-xl border border-gray-200"
          />
          <button
            (click)="previewImage = null"
            class="absolute -top-2 -right-2 w-5 h-5 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-black transition-colors"
          >
            <svg
              class="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Input Area -->
      <div class="px-4 py-3 bg-white border-t border-gray-100">
        <div class="flex items-center gap-2">
          <!-- Plus Button Wrapper -->
          <div class="relative flex-shrink-0" #menuRef>
            <button
              (click)="menuOpen = !menuOpen; modelPickerOpen = false"
              [ngClass]="
                menuOpen
                  ? 'w-10 h-10 rounded-full flex items-center justify-center transition-all bg-gray-900 text-white'
                  : 'w-10 h-10 rounded-full flex items-center justify-center transition-all bg-gray-100 text-gray-700 hover:bg-gray-200'
              "
            >
              <svg
                class="w-5 h-5 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                [style.transform]="menuOpen ? 'rotate(45deg)' : 'rotate(0deg)'"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>

            <!-- Popup Menu -->
            <div
              *ngIf="menuOpen"
              class="absolute bottom-14 left-0 w-60 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden z-50 py-1"
            >
              <!-- Camera -->
              <button
                (click)="cameraInput.click()"
                class="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
              >
                <div
                  class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-4 h-4 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-900">Chụp ảnh</p>
                  <p class="text-xs text-gray-400">Mở camera để chụp</p>
                </div>
              </button>

              <!-- Gallery -->
              <button
                (click)="galleryInput.click()"
                class="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
              >
                <div
                  class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-4 h-4 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-900">Thêm ảnh</p>
                  <p class="text-xs text-gray-400">Chọn từ thư viện</p>
                </div>
              </button>

              <!-- Divider -->
              <div class="h-px bg-gray-100 mx-4"></div>

              <!-- AI Model Picker -->
              <button
                (click)="modelPickerOpen = !modelPickerOpen"
                class="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
              >
                <div
                  class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-4 h-4 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="text-sm text-gray-900">Chọn AI Model</p>
                  <p class="text-xs text-gray-400">{{ selectedModel.label }}</p>
                </div>
                <svg
                  class="w-4 h-4 text-gray-400 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  [style.transform]="
                    modelPickerOpen ? 'rotate(90deg)' : 'rotate(0deg)'
                  "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <!-- Model List -->
              <div *ngIf="modelPickerOpen" class="bg-gray-50 pb-1">
                <button
                  *ngFor="let model of aiModels"
                  (click)="
                    selectedModel = model;
                    modelPickerOpen = false;
                    menuOpen = false
                  "
                  class="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 transition-colors text-left"
                >
                  <div
                    class="w-5 h-5 flex items-center justify-center flex-shrink-0"
                  >
                    <svg
                      *ngIf="selectedModel.id === model.id"
                      class="w-4 h-4 text-gray-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center gap-2">
                      <span class="text-sm text-gray-900">{{
                        model.label
                      }}</span>
                    </div>
                    <p class="text-xs text-gray-400">{{ model.desc }}</p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <!-- Hidden file inputs -->
          <input
            #cameraInput
            type="file"
            accept="image/*"
            capture="environment"
            class="hidden"
            (change)="onImageSelect($event)"
          />
          <input
            #galleryInput
            type="file"
            accept="image/*"
            class="hidden"
            (change)="onImageSelect($event)"
          />

          <div class="flex-1 relative">
            <textarea
              #messageInput
              [(ngModel)]="inputMessage"
              (input)="onInput()"
              (keydown.enter)="onEnter($event)"
              placeholder="Nhập tin nhắn..."
              rows="1"
              class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-3xl text-sm resize-none"
              style="max-height: 128px; min-height: 44px;"
            ></textarea>
          </div>

          <button
            (click)="sendMessage()"
            [disabled]="!inputMessage.trim() && !previewImage"
            class="w-10 h-10 rounded-full flex items-center justify-center"
            [ngClass]="
              inputMessage.trim() || previewImage
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-400'
            "
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        height: calc(100vh - 4rem - env(safe-area-inset-bottom, 0px));
      }
    `,
  ],
})
export class ChatPage implements OnInit, AfterViewChecked, OnDestroy {
  @ViewChild("messagesEnd") messagesEnd!: ElementRef;
  @ViewChild("messageInput") messageInput!: ElementRef;
  @ViewChild("cameraInput") cameraInput!: ElementRef;
  @ViewChild("galleryInput") galleryInput!: ElementRef;
  @ViewChild("menuRef") menuRef!: ElementRef;
  @ViewChild("modelPickerRef") modelPickerRef!: ElementRef;

  private readonly SESSION_KEY = "chat_messages";
  private readonly SESSION_ID_KEY = "chat_session_id";
  private currentSessionId: string | null = null;

  messages: Message[] = [];
  inputMessage = "";
  isTyping = false;
  showModelPicker = false;
  menuOpen = false;
  modelPickerOpen = false;
  previewImage: string | null = null;
  quickPrompts = ["Lịch trình 2 ngày 1 đêm", "Quán cafe đẹp", "Địa điểm hot"];
  relatedPlaces: Place[] = [];
  lastMessageRole: "user" | "assistant" | null = null;
  allPlaces: Place[] = [];

  aiModels: AppAIModel[] = AI_CONFIG.models.map((m, i) => ({
    id: m.id,
    label: m.name,
    desc: m.description,
    badge: i === 0 ? "Khuyên dùng" : "",
  }));

  selectedModel: AppAIModel = this.aiModels[0];

  private outsideClickHandler = (e: MouseEvent) => {
    const target = e.target as Node;
    const menuContains = this.menuRef?.nativeElement?.contains(target);
    const pickerContains = this.modelPickerRef?.nativeElement?.contains(target);

    if (!menuContains && !pickerContains) {
      this.menuOpen = false;
      this.showModelPicker = false;
    }
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private aiService: AIService,
    private apiService: ApiService,
  ) {}

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    const prompt = nav?.extras?.state?.["prompt"] as string;

    if (prompt) {
      // Có prompt mới → bắt đầu chat mới, xóa session cũ
      this.clearSession();
      this.inputMessage = prompt;
      setTimeout(() => this.sendMessage(), 100);
    } else {
      // Không có prompt → khôi phục đoạn chat trước (nếu có)
      this.restoreFromSession();
    }

    document.addEventListener("mousedown", this.outsideClickHandler);

    // Load all places for related-place matching after AI response
    this.apiService.getPlaces().subscribe((places) => {
      this.allPlaces = places;
    });

    // Load personalised quick prompts from BE
    this.apiService.getPersonalizedData().subscribe((data) => {
      if (data.quickPrompts?.length) {
        this.quickPrompts = data.quickPrompts;
      }
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  ngOnDestroy() {
    document.removeEventListener("mousedown", this.outsideClickHandler);
  }

  // ── Session persistence ──────────────────────────────────────────────────

  private saveToSession() {
    try {
      sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(this.messages));
    } catch {
      /* quota exceeded – silently ignore */
    }
  }

  private restoreFromSession() {
    try {
      const raw = sessionStorage.getItem(this.SESSION_KEY);
      if (raw) {
        const parsed: Message[] = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          this.messages = parsed.map((m) => ({
            ...m,
            timestamp: new Date(m.timestamp),
          }));
        }
      }
      // Khôi phục sessionId
      this.currentSessionId = sessionStorage.getItem(this.SESSION_ID_KEY);
    } catch {
      /* corrupted data – start fresh */
    }
  }

  private clearSession() {
    try {
      sessionStorage.removeItem(this.SESSION_KEY);
      sessionStorage.removeItem(this.SESSION_ID_KEY);
    } catch {}
    this.messages = [];
    this.relatedPlaces = [];
    this.currentSessionId = null;
  }

  /** Nút New Chat ở header */
  startNewChat() {
    this.clearSession();
    this.inputMessage = "";
    this.previewImage = null;
    this.menuOpen = false;
    this.showModelPicker = false;
  }

  // ─────────────────────────────────────────────────────────────────────────

  scrollToBottom() {
    if (this.messagesEnd) {
      this.messagesEnd.nativeElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  onInput() {
    const el = this.messageInput.nativeElement;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 128) + "px";
  }

  onEnter(event: Event) {
    const e = event as KeyboardEvent;
    if (!e.shiftKey) {
      e.preventDefault();
      this.sendMessage();
    }
  }

  toggleModelPicker() {
    this.showModelPicker = !this.showModelPicker;
  }

  selectModel(model: AppAIModel) {
    this.selectedModel = model;
    this.showModelPicker = false;
  }

  onImageSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => (this.previewImage = e.target?.result as string);
    reader.readAsDataURL(file);
    (event.target as HTMLInputElement).value = "";
    this.menuOpen = false;
    this.modelPickerOpen = false;
  }

  sendQuickPrompt(prompt: string) {
    this.inputMessage = prompt;
    this.sendMessage();
  }

  sendMessage() {
    if (!this.inputMessage.trim() && !this.previewImage) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: this.inputMessage,
      timestamp: new Date(),
    };
    this.messages.push(userMessage);
    this.lastMessageRole = "user";

    const userInput = this.inputMessage;
    const imageToSend = this.previewImage ?? undefined;
    this.inputMessage = "";
    this.previewImage = null;
    this.relatedPlaces = [];

    setTimeout(() => {
      this.isTyping = true;
    }, 100);

    const historyMessages: AIMessage[] = this.messages
      .filter((m) => m.role !== "assistant" || m.content)
      .map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      }));

    // Gửi tin nhắn — tạo session BE nếu chưa có (lazy creation)
    const doSend = (sessionId: string | null) => {
      this.aiService
        .chat(
          historyMessages,
          this.selectedModel.id,
          imageToSend,
          sessionId ?? undefined,
        )
        .subscribe({
          next: (response) => {
            this.isTyping = false;
            const content =
              response.choices[0]?.message?.content ||
              "Xin lỗi, tôi không thể trả lời lúc này.";

            const assistantMessage: Message = {
              id: (Date.now() + 1).toString(),
              role: "assistant",
              content: content,
              timestamp: new Date(),
            };
            this.messages.push(assistantMessage);
            this.lastMessageRole = "assistant";
            this.saveToSession();

            // Extract related places via BE and match against local cache
            this.aiService
              .extractPlace(userInput, content)
              .subscribe((extracted) => {
                if (!extracted) {
                  this.relatedPlaces = [];
                  return;
                }
                const items = Array.isArray(extracted)
                  ? extracted
                  : [extracted];
                this.relatedPlaces = items
                  .map((ep: any) =>
                    this.allPlaces.find(
                      (p) =>
                        p.name
                          .toLowerCase()
                          .includes((ep.name || "").toLowerCase()) ||
                        (ep.name || "")
                          .toLowerCase()
                          .includes(p.name.toLowerCase()),
                    ),
                  )
                  .filter((p): p is Place => !!p)
                  .slice(0, 3);
              });
          },
          error: (error) => {
            this.isTyping = false;
            const errorMessage: Message = {
              id: (Date.now() + 1).toString(),
              role: "assistant",
              content:
                "Xin lỗi, đã xảy ra lỗi khi kết nối với AI. Vui lòng thử lại sau.",
              timestamp: new Date(),
            };
            this.messages.push(errorMessage);
            this.saveToSession();
            console.error("AI Chat Error:", error);
          },
        });
    };

    if (this.currentSessionId) {
      // Đã có session — gửi trực tiếp
      doSend(this.currentSessionId);
    } else {
      // Chưa có session — tạo mới trước, rồi gửi
      const title = userInput.slice(0, 60) || "Chat mới";
      this.apiService.createChatSession(title).subscribe({
        next: (session) => {
          if (session.id) {
            this.currentSessionId = session.id;
            try {
              sessionStorage.setItem(this.SESSION_ID_KEY, session.id);
            } catch {}
          }
          doSend(this.currentSessionId);
        },
        error: () => {
          // Session creation failed — vẫn gửi tin nhắn, chỉ không lưu lịch sử BE
          doSend(null);
        },
      });
    }
  }
}
