import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MOCK_CHAT_SESSIONS, ChatSession } from '../../data/mock-chats';
import { EmptyStateComponent } from '../../components/ui/empty-state/empty-state.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, EmptyStateComponent],
  template: `
    <div class="bg-white">
      <!-- Header -->
      <div class="px-4 pt-12 pb-4 border-b border-gray-100">
        <h1 class="text-2xl font-semibold text-gray-900">Lịch sử chat</h1>
      </div>

      <!-- Chat Sessions -->
      <div *ngIf="sessions.length > 0" class="p-4">
        <div class="space-y-2">
          <div 
            *ngFor="let session of sessions"
            class="relative p-4 border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-50"
            (click)="openChat(session)"
          >
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="font-medium text-gray-900 text-sm">{{ session.title }}</h3>
                <p class="text-xs text-gray-400">{{ session.messages.length }} tin nhắn</p>
              </div>
              <div class="text-right">
                <p class="text-xs text-gray-400">{{ formatDate(session.updatedAt) }}</p>
              </div>
            </div>
            <button 
              (click)="deleteSession($event, session)"
              class="absolute top-2 right-2 p-2 text-gray-400 hover:text-red-500"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <app-empty-state
        *ngIf="sessions.length === 0"
        icon="💬"
        title="Chưa có lịch sử"
        message="Bạn chưa có cuộc trò chuyện nào."
      ></app-empty-state>
    </div>
  `
})
export class HistoryPage implements OnInit {
  sessions: ChatSession[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.sessions = MOCK_CHAT_SESSIONS;
  }

  openChat(session: ChatSession) {
    this.router.navigate(['/home/chat'], { state: { prompt: session.title } });
  }

  deleteSession(event: Event, session: ChatSession) {
    event.stopPropagation();
    this.sessions = this.sessions.filter(s => s.id !== session.id);
  }

  formatDate(date: Date): string {
    const d = new Date(date);
    return d.toLocaleDateString('vi-VN', { day: 'numeric', month: 'numeric' });
  }
}
