import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { EmptyStateComponent } from "../../components/ui/empty-state/empty-state.component";
import { FirestoreChatService, FirestoreChatSession } from "../../services/firestore-chat.service";

@Component({
  selector: "app-history",
  standalone: true,
  imports: [CommonModule, EmptyStateComponent],
  template: `
    <div class="bg-white min-h-screen pb-20">
      <!-- Header -->
      <div
        class="px-4 pt-12 pb-4 border-b border-gray-100 flex items-center justify-between"
      >
        <h1 class="text-2xl font-semibold text-gray-900">Lịch sử chat</h1>
        <button
          *ngIf="sessions.length > 0"
          (click)="clearAll()"
          class="text-sm text-gray-400"
        >
          Xóa tất cả
        </button>
      </div>

      <!-- Loading -->
      <div *ngIf="isLoading" class="p-4 space-y-2">
        <div
          *ngFor="let i of [1, 2, 3]"
          class="h-16 bg-gray-100 rounded-xl animate-pulse"
        ></div>
      </div>

      <!-- Chat Sessions -->
      <div *ngIf="!isLoading && sessions.length > 0" class="p-4">
        <div class="space-y-2">
          <article
            *ngFor="let session of sessions"
            class="relative p-4 border border-gray-100 rounded-xl"
          >
            <button
              type="button"
              class="w-full flex items-center gap-3 text-left"
              [attr.aria-label]="'Mở cuộc trò chuyện: ' + session.title"
              (click)="openChat(session)"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-medium text-gray-900 text-sm truncate">
                    {{ session.title }}
                  </h3>
                   <p class="text-xs text-gray-400">
                    {{ session.messageCount || 0 }} tin nhắn
                   </p>
                </div>
                <div class="text-right flex-shrink-0">
                  <p class="text-xs text-gray-400">
                    {{ formatDate(session.updatedAt) }}
                  </p>
                </div>
              </div>
            </button>
            <button
              type="button"
              (click)="deleteSession($event, session)"
              aria-label="Xóa cuộc trò chuyện"
              class="absolute top-2 right-2 p-2 text-gray-400 hover:text-red-500"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </article>
        </div>
      </div>

      <!-- Empty State -->
      <app-empty-state
        *ngIf="!isLoading && sessions.length === 0"
        icon="💬"
        title="Chưa có lịch sử"
        message="Bạn chưa có cuộc trò chuyện nào. Hãy bắt đầu chat với AI!"
      ></app-empty-state>
    </div>
  `,
})
export class HistoryPage implements OnInit {
  private router = inject(Router);

  sessions: FirestoreChatSession[] = [];
  isLoading = true;

  private firestoreChat = inject(FirestoreChatService);

  ngOnInit() {
    this.firestoreChat.getSessions().subscribe({
      next: (sessions) => {
        this.sessions = sessions;
        this.isLoading = false;
      },
      error: () => {
        this.sessions = [];
        this.isLoading = false;
      },
    });
  }

  openChat(session: FirestoreChatSession) {
    this.router.navigate(["/home/chat"], { state: { prompt: session.title } });
  }

  deleteSession(event: Event, session: FirestoreChatSession) {
    event.stopPropagation();
    // Xóa khỏi UI ngay để UX nhanh
    this.sessions = this.sessions.filter((s) => s.id !== session.id);
    // Xóa trên Firestore
    if (session.id) {
      this.firestoreChat.deleteSession(session.id);
    }
  }

  clearAll() {
    const toDelete = [...this.sessions];
    this.sessions = [];
    // Xóa tất cả sessions trên Firestore
    toDelete.forEach((s) => {
      if (s.id) this.firestoreChat.deleteSession(s.id);
    });
  }

  formatDate(date: Date | any): string {
    // Hỗ trợ cả Firestore Timestamp lẫn Date bình thường
    const d = date?.toDate ? date.toDate() : new Date(date);
    const now = new Date();
    const diffDays = Math.floor(
      (now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24),
    );
    if (diffDays === 0) return "Hôm nay";
    if (diffDays === 1) return "Hôm qua";
    return d.toLocaleDateString("vi-VN", { day: "numeric", month: "numeric" });
  }
}
