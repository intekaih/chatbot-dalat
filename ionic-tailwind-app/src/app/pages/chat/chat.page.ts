import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewChecked, HostListener, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { firstValueFrom } from "rxjs";
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ChatBubbleComponent } from "../../components/chat/chat-bubble/chat-bubble.component";
import { PlaceCardComponent } from "../../components/place/place-card/place-card.component";
import { AIService, ChatMessage as AIMessage } from "../../services/ai.service";
import { ApiService, Place } from "../../services/api.service";
import { AI_CONFIG } from "../../config/ai.config";
import { FirestoreChatService } from "../../services/firestore-chat.service";
import { StorageService } from "../../services/storage.service";
import { FirestoreTripsService } from "../../services/firestore-trips.service";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  placeIds?: string[];
  imageUrl?: string | null;
  imageUrls?: string[]; // Multiple images from Pexels
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
    <div class="flex flex-col h-full overflow-hidden">
      <!-- Header -->
      <div class="px-4 pb-3 bg-white border-b border-gray-100" style="padding-top: calc(env(safe-area-inset-top, 24px) + 0.75rem)">
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

          <!-- History Button -->
          <button
            (click)="goToHistory()"
            title="Lịch sử chat"
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Context Banner: shown when coming from a place detail -->
      <div
        *ngIf="contextPlace"
        class="mx-4 mt-3 mb-1 flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-xl"
      >
        <div class="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 text-base">📍</div>
        <div class="flex-1 min-w-0">
          <p class="text-xs text-gray-500">Đang hỏi về</p>
          <p class="text-sm font-medium text-gray-900 truncate">{{ contextPlace }}</p>
        </div>
        <button (click)="contextPlace = ''" class="text-gray-400 hover:text-gray-600 p-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
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
            [imageUrl]="msg.imageUrl ?? null"
            [imageUrls]="msg.imageUrls || []"
          ></app-chat-bubble>

          <!-- Typing Indicator -->
          <div *ngIf="isTyping" class="flex gap-3 mb-4">
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

          <!-- Save Trip CTA -->
          <div
            *ngIf="!isTyping && isTripResponse && lastMessageRole === 'assistant'"
            class="mt-4 mb-2"
          >
            <div class="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 rounded-2xl p-4">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-lg">📅</span>
                <p class="text-sm font-semibold text-gray-900">Lưu lịch trình này?</p>
              </div>
              <p class="text-xs text-gray-500 mb-3">AI vừa gợi ý một lịch trình cho bạn. Lưu lại để xem và chỉnh sửa sau!</p>
              <div class="flex gap-2">
                <button
                  (click)="saveTrip()"
                  [disabled]="isSaving"
                  class="flex-1 py-2.5 bg-black text-white rounded-xl text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <svg *ngIf="!isSaving" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <svg *ngIf="isSaving" class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                  </svg>
                  {{ isSaving ? 'Đang lưu...' : 'Lưu lịch trình' }}
                </button>
                <button
                  (click)="isTripResponse = false"
                  class="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-600"
                >
                  Bỏ qua
                </button>
              </div>
            </div>
          </div>

          <!-- Toast -->
          <div
            *ngIf="saveTripToast"
            class="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white text-sm px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-lg"
          >
            <span>✅</span> {{ saveTripToast }}
          </div>

          <div #messagesEnd></div>
        </div>
      </div>




      <!-- Input Area -->
      <!-- ChatGPT-style expanding composer pill -->
      <div class="px-3 pb-3">
        <div class="bg-white rounded-[28px] shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_12px_rgba(0,0,0,0.08)] transition-all">

          <!-- Image preview row (inside pill, visible when image selected) -->
          <div *ngIf="previewImage" class="px-3 pt-3 pb-1 flex gap-2">
            <div class="relative w-14 h-14 rounded-xl overflow-hidden border border-gray-200 flex-shrink-0">
              <img [src]="previewImage" class="w-full h-full object-cover" alt="Preview" />
              <button
                (click)="previewImage = null"
                class="absolute top-0.5 right-0.5 w-5 h-5 bg-black/60 rounded-full flex items-center justify-center"
              >
                <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Textarea row -->
          <div class="px-3 py-2 flex items-end gap-1 min-h-[52px]">
            <!-- Plus / menu button -->
            <div class="relative flex-shrink-0" #menuRef>
              <button
                (click)="menuOpen = !menuOpen; modelPickerOpen = false"
                [attr.aria-label]="menuOpen ? 'Đóng menu' : 'Thêm ảnh hoặc chọn model AI'"
                [attr.aria-expanded]="menuOpen"
                class="w-9 h-9 rounded-full flex items-center justify-center transition-all mb-0.5"
                [ngClass]="menuOpen ? 'bg-gray-900 text-white' : 'hover:bg-gray-100 text-gray-500'"
              >
                <svg class="w-5 h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" [style.transform]="menuOpen ? 'rotate(45deg)' : 'rotate(0deg)'">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                </svg>
              </button>

              <!-- Popup Menu -->
              <div *ngIf="menuOpen" class="absolute bottom-14 left-0 w-60 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden z-50 py-1">
                <!-- Camera -->
                <button (click)="takePhoto()" class="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left">
                  <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div><p class="text-sm text-gray-900">Chụp ảnh</p><p class="text-xs text-gray-400">Mở camera để chụp</p></div>
                </button>

                <!-- Gallery -->
                <button (click)="galleryInput.click()" class="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left">
                  <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div><p class="text-sm text-gray-900">Thêm ảnh</p><p class="text-xs text-gray-400">Chọn từ thư viện</p></div>
                </button>

                <div class="h-px bg-gray-100 mx-4"></div>

                <!-- AI Model Picker -->
                <button (click)="modelPickerOpen = !modelPickerOpen" class="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left">
                  <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div class="flex-1"><p class="text-sm text-gray-900">Chọn AI Model</p><p class="text-xs text-gray-400">{{ selectedModel.label }}</p></div>
                  <svg class="w-4 h-4 text-gray-400 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" [style.transform]="modelPickerOpen ? 'rotate(90deg)' : 'rotate(0deg)'">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>

                <!-- Model List -->
                <div *ngIf="modelPickerOpen" class="bg-gray-50 pb-1">
                  <button
                    *ngFor="let model of aiModels"
                    (click)="selectedModel = model; modelPickerOpen = false; menuOpen = false"
                    class="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 transition-colors text-left"
                  >
                    <div class="w-5 h-5 flex items-center justify-center flex-shrink-0">
                      <svg *ngIf="selectedModel.id === model.id" class="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <div class="flex items-center gap-2"><span class="text-sm text-gray-900">{{ model.label }}</span></div>
                      <p class="text-xs text-gray-400">{{ model.desc }}</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <!-- Hidden file inputs -->
            <input #cameraInput type="file" accept="image/*" capture="environment" class="hidden" (change)="onImageSelect($event)"/>
            <input #galleryInput type="file" accept="image/*" class="hidden" (change)="onImageSelect($event)"/>

            <!-- Textarea (no border, no background — lives inside the pill) -->
            <textarea
              #messageInput
              [(ngModel)]="inputMessage"
              (input)="onInput()"
              (keydown.enter)="onEnter($event)"
              placeholder="Nhập tin nhắn..."
              rows="1"
              class="flex-1 bg-transparent text-sm resize-none outline-none text-gray-900 placeholder-gray-400 py-2 leading-relaxed"
              style="max-height: 160px; min-height: 36px;"
            ></textarea>

            <!-- Send button -->
            <button
              (click)="sendMessage()"
              [disabled]="!inputMessage.trim() && !previewImage"
              aria-label="Gửi tin nhắn"
              class="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mb-0.5 transition-all"
              [ngClass]="inputMessage.trim() || previewImage ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  
  `,
  styles: [
    `
      :host {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: calc(4rem + env(safe-area-inset-bottom, 0px));
        overflow: hidden;
        z-index: 10;
      }
    `,
  ],
})
export class ChatPage implements OnInit, AfterViewChecked, OnDestroy {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private aiService = inject(AIService);
  private apiService = inject(ApiService);
  private firestoreChat = inject(FirestoreChatService);
  private storageService = inject(StorageService);
  private firestoreTrips = inject(FirestoreTripsService);

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
  isTripResponse = false;
  isSaving = false;
  saveTripToast = "";
  contextPlace = "";  // Name of place when navigating from place-detail
  private shouldScrollToBottom = false;

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

  ngOnInit() {
    // Use window.history.state — works for lazy-loaded routes where getCurrentNavigation() returns null
    const state = (window.history.state || {}) as { prompt?: string };
    const prompt = state.prompt as string | undefined;

    if (prompt) {
      // Extract context place name if the prompt follows "Cho tôi thông tin về XYZ"
      const match = prompt.match(/(?:Cho tôi thông tin về|Hỏi về|Về|About)\s+(.+)/i);
      if (match) this.contextPlace = match[1].replace(/["'.]/g, '').trim();
      // Bắt đầu chat mới, xóa session cũ
      this.clearSession();
      // Điền vào ô input để user xem và tự gửi (không auto-send)
      this.inputMessage = prompt;
    } else {
      // Không có prompt → khôi phục đoạn chat trước (nếu có)
      this.restoreFromSession();
    }

    document.addEventListener("mousedown", this.outsideClickHandler);

    // Load personalised quick prompts from BE
    this.apiService.getPersonalizedData().subscribe((data) => {
      if (data.quickPrompts?.length) {
        this.quickPrompts = data.quickPrompts;
      }
    });
  }

  ngAfterViewChecked() {
    // Chỉ cuộn xuống khi có tin nhắn mới (đang streaming hoặc vừa thêm tin nhắn)
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  }

  /** Đánh dấu cần cuộn xuống - gọi sau khi thêm tin nhắn */
  markForScroll() {
    this.shouldScrollToBottom = true;
  }

  ngOnDestroy() {
    document.removeEventListener("mousedown", this.outsideClickHandler);
  }

  // ── Session persistence ──────────────────────────────────────────────────

  private currentFirestoreSessionId: string | null = null;

  // Mở rộng session persistence: vừa dùng sessionStorage (nhanh) vừa Firestore (bền vững)
  private saveToSession() {
    try {
      sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(this.messages));
    } catch {
      /* quota exceeded – silently ignore */
    }
  }

  /** Lưu message vào Firestore (async, không block UI) */
  private async saveMessageToFirestore(message: { role: 'user' | 'assistant'; content: string; imageUrl?: string | null; imageUrls?: string[] }) {
    try {
      // Tạo session Firestore nếu chưa có
      if (!this.currentFirestoreSessionId) {
        const title = message.content.slice(0, 40) || 'Cuộc trò chuyện mới';
        this.currentFirestoreSessionId = await this.firestoreChat.createSession(title);
      }
      if (this.currentFirestoreSessionId) {
        await this.firestoreChat.addMessage(this.currentFirestoreSessionId, {
          role: message.role,
          content: message.content,
          imageUrl: message.imageUrl ?? null,
          imageUrls: message.imageUrls,
          timestamp: new Date(),
        });
      }
    } catch (e) {
      console.warn('Could not save message to Firestore:', e);
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
    } catch { }
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

  /** Nút History ở header */
  goToHistory() {
    this.router.navigate(["/home/history"]);
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

  /** Chụp ảnh bằng Capacitor Camera (native) */
  async takePhoto() {
    try {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
        quality: 80,
        allowEditing: false,
      });
      if (photo.dataUrl) {
        this.previewImage = photo.dataUrl;
      }
    } catch (e: any) {
      // User cancelled hoặc permission denied — không báo lỗi
      console.warn('Camera cancelled or failed:', e?.message);
    }
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
      imageUrl: this.previewImage ?? undefined,
    };
    this.messages.push(userMessage);
    this.lastMessageRole = "user";
    this.markForScroll();

    const userInput = this.inputMessage;
    const imageToSend = this.previewImage ?? undefined;
    this.inputMessage = "";
    this.previewImage = null;
    this.relatedPlaces = [];
    this.isTyping = true;  // Hiển thị ngay, không delay
    this.markForScroll();

    // Upload ảnh lên Firebase Storage nếu có (async, không block UI)
    if (imageToSend && imageToSend.startsWith('data:')) {
      this.storageService.uploadChatImage(imageToSend).subscribe((storageUrl) => {
        // Cập nhật message đã push vào mảng với URL từ Storage
        const idx = this.messages.findIndex(m => m.id === userMessage.id);
        if (idx >= 0) this.messages[idx].imageUrl = storageUrl;
        // Lưu vào Firestore với Storage URL
        this.saveMessageToFirestore({ role: 'user', content: userInput, imageUrl: storageUrl });
      });
    } else {
      // Lưu vào Firestore không có ảnh
      this.saveMessageToFirestore({ role: 'user', content: userInput });
    }

    const historyMessages: AIMessage[] = this.messages
      .filter((m) => m.role !== "assistant" || m.content)
      .map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      }))
      .slice(-10); // Giới hạn 10 messages (5 lần hỏi đáp) để giảm payload

    // Gửi tin nhắn — tạo session BE nếu chưa có (lazy creation)
    const doSend = (sessionId: string | null) => {
      this.aiService
        .chat(historyMessages, this.selectedModel.id, imageToSend, sessionId ?? undefined)
        .subscribe({
          next: (response) => {
            this.isTyping = false;
            const content =
              response.choices[0]?.message?.content ||
              "Xin lỗi, tôi không thể trả lời lúc này.";
            const assistantMessage: Message = {
              id: (Date.now() + 1).toString(),
              role: "assistant",
              content,
              timestamp: new Date(),
            };
            this.messages.push(assistantMessage);
            this.lastMessageRole = "assistant";
            this.isTripResponse = this.userRequestedTrip() && this.detectTripContent(content);
            this.markForScroll();
            this.saveToSession();
            this.saveMessageToFirestore({ role: 'assistant', content });

            // Dùng suggestedPlaces trực tiếp từ /api/chat (không gọi extract-places riêng)
            const places = (response.suggestedPlaces || []).slice(0, 6);
            this.relatedPlaces = places as any;

            if (places.length > 0) {
              // Fetch images cho places tìm được — async, không block UI
              const imagePromises = places.slice(0, 4).map((place: any) =>
                firstValueFrom(
                  this.apiService.getPlaceImage(
                    place.id, place.name, place.category, place.address, true
                  )
                ).catch(() => null)
              );

              Promise.all(imagePromises).then((results) => {
                const imageUrls: string[] = [];
                for (const result of results) {
                  if (!result) continue;
                  if (result.imageUrls?.length) {
                    imageUrls.push(...result.imageUrls.slice(0, 2));
                  } else if (result.imageUrl) {
                    imageUrls.push(result.imageUrl);
                  }
                }
                if (imageUrls.length > 0) {
                  const proxyUrls = this.apiService.getImageProxyUrls(imageUrls);
                  const msgIndex = this.messages.findIndex(m => m.id === assistantMessage.id);
                  if (msgIndex >= 0) {
                    if (proxyUrls.length === 1) {
                      this.messages[msgIndex].imageUrl = proxyUrls[0];
                    } else {
                      this.messages[msgIndex].imageUrls = proxyUrls;
                    }
                    this.saveToSession();
                    this.markForScroll();
                  }
                }
              });
            }
          },
          error: () => {
            this.isTyping = false;
            this.messages.push({
              id: (Date.now() + 1).toString(),
              role: "assistant",
              content: "Xin lỗi, đã xảy ra lỗi khi kết nối với AI. Vui lòng thử lại sau.",
              timestamp: new Date(),
            });
            this.markForScroll();
            this.saveToSession();
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
            } catch { }
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
  private userRequestedTrip(): boolean {
    const lastUser = [...this.messages].reverse().find(m => m.role === 'user');
    if (!lastUser) return false;
    const lower = lastUser.content.toLowerCase();
    const tripRequests = ['lịch trình', 'kế hoạch', 'plan', 'itinerary', 'ngày đêm', 'n đêm', 'chuyến đi', 'lên kế hoạch', 'tạo lịch', 'gợi ý lịch'];
    return tripRequests.some(k => lower.includes(k));
  }

  private detectTripContent(text: string): boolean {
    const lower = text.toLowerCase();
    // Strong keywords that unambiguously signal an itinerary
    const strongKeywords = ['lịch trình', 'ngày 1', 'ngày 2', 'ngày 3', 'day 1', 'day 2', 'itinerary', 'kế hoạch chuyến', 'lên kế hoạch'];
    const hasStrong = strongKeywords.some(k => lower.includes(k));
    if (!hasStrong) return false;
    // Must also have at least 2 time-of-day / structure signals
    const supportingKeywords = ['buổi sáng', 'buổi chiều', 'buổi tối', 'sáng:', 'chiều:', 'tối:', '7h', '8h', '9h', '10h', '17h', '18h', '19h'];
    return supportingKeywords.filter(k => lower.includes(k)).length >= 1;
  }

  saveTrip() {
    if (this.isSaving) return;
    const lastAI = [...this.messages].reverse().find(m => m.role === 'assistant');
    const lastUser = [...this.messages].reverse().find(m => m.role === 'user');
    if (!lastAI) return;

    this.isSaving = true;
    const title = lastUser?.content?.slice(0, 60) || 'Lịch trình Đà Lạt';
    const now = new Date();
    const startDate = now.toLocaleDateString('vi-VN');
    const endDate = new Date(now.getTime() + 2 * 86400000).toLocaleDateString('vi-VN');
    const fallbackImage = 'https://placehold.co/800x450/1a1a2e/ffffff?text=Đà+Lạt';
    const imagePrompt = `Beautiful travel photo of Da Lat Vietnam, ${title}, scenic landscape, cinematic, high quality`;

    const doCreate = (coverImage: string) => {
      this.firestoreTrips.createTrip({
        title,
        destination: 'Đà Lạt, Lâm Đồng',
        coverImage,
        startDate,
        endDate,
        status: 'upcoming',
        notes: lastAI!.content,
      }).then((tripId) => {
        this.isSaving = false;
        this.isTripResponse = false;
        this.saveTripToast = 'Đã lưu vào Lịch trình!';
        setTimeout(() => {
          this.saveTripToast = '';
          if (tripId) {
            this.router.navigate(['/home/trips', tripId]);
          } else {
            this.router.navigate(['/home/trips']);
          }
        }, 1500);
      }).catch(() => {
        this.isSaving = false;
        this.saveTripToast = 'Không thể lưu. Thử lại sau!';
        setTimeout(() => this.saveTripToast = '', 3000);
      });
    };

    // Generate cover image first, then create trip
    this.apiService.generateImage(imagePrompt).subscribe({
      next: (dataUrl: string) => doCreate(dataUrl || fallbackImage),
      error: () => doCreate(fallbackImage),
    });
  }
}
