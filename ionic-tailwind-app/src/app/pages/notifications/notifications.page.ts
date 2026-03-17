import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService, Notification } from '../../services/api.service';
import { EmptyStateComponent } from '../../components/ui/empty-state/empty-state.component';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, EmptyStateComponent],
  template: `
    <div class="bg-white">
      <!-- Header -->
      <div class="px-4 pt-12 pb-4 flex items-center justify-between border-b border-gray-100">
        <div class="flex items-center gap-4">
          <button (click)="goBack()" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 class="text-xl font-semibold text-gray-900">Thông báo</h1>
        </div>
        <div class="flex items-center gap-3">
          <span *ngIf="unreadCount > 0" class="text-sm text-gray-500">{{ unreadCount }} chưa đọc</span>
          <button 
            *ngIf="unreadCount > 0"
            (click)="markAllRead()"
            class="text-sm text-gray-500 underline"
          >
            Đọc tất cả
          </button>
        </div>
      </div>

      <!-- Notification List -->
      <div *ngIf="notifications.length > 0" class="p-4 space-y-2">
        <div 
          *ngFor="let notif of notifications"
          (click)="markAsRead(notif)"
          class="flex gap-3 p-4 rounded-xl cursor-pointer transition-colors"
          [class]="notif.isRead ? 'bg-white' : 'bg-gray-50/80'"
        >
          <!-- Icon Bubble -->
          <div 
            class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            [class]="notif.iconColor"
          >
            <span>{{ notif.icon }}</span>
          </div>

          <!-- Content -->
          <div class="flex-1 min-w-0">
            <div class="flex items-start justify-between gap-2">
              <h3 
                class="text-sm font-medium"
                [class]="notif.isRead ? 'text-gray-600' : 'text-gray-900'"
              >
                {{ notif.title }}
              </h3>
              <span *ngIf="!notif.isRead" class="w-2 h-2 bg-black rounded-full flex-shrink-0 mt-1.5"></span>
            </div>
            <p class="text-xs text-gray-500 mt-1 line-clamp-2">{{ notif.content }}</p>
            <p class="text-xs text-gray-400 mt-2">{{ formatTime(notif.timestamp) }}</p>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <app-empty-state
        *ngIf="notifications.length === 0"
        icon="🔔"
        title="Bạn đã đọc hết rồi!"
        message="Không còn thông báo nào."
      ></app-empty-state>
    </div>
  `,
  styles: [`
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `]
})
export class NotificationsPage implements OnInit {
  notifications: Notification[] = [];
  unreadCount = 0;
  isLoading = true;

  constructor(
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.apiService.getNotifications().subscribe({
      next: (notifs) => {
        this.notifications = notifs;
        this.updateUnreadCount();
        this.isLoading = false;
      },
      error: () => {
        this.notifications = [];
        this.isLoading = false;
      }
    });
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  markAsRead(notif: Notification) {
    if (!notif.isRead) {
      notif.isRead = true;
      this.updateUnreadCount();
      // Call API to mark as read
      this.apiService.markNotificationRead(notif.id).subscribe();
    }
  }

  markAllRead() {
    this.notifications.forEach(n => {
      if (!n.isRead) {
        n.isRead = true;
        this.apiService.markNotificationRead(n.id).subscribe();
      }
    });
    this.updateUnreadCount();
  }

  updateUnreadCount() {
    this.unreadCount = this.notifications.filter(n => !n.isRead).length;
  }

  formatTime(timestamp: Date): string {
    const now = new Date();
    const diff = now.getTime() - new Date(timestamp).getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} ngày trước`;
    if (hours > 0) return `${hours} giờ trước`;
    return 'Vừa xong';
  }
}
