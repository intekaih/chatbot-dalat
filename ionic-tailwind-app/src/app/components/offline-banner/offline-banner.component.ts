import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkService } from '../../services/network.service';

@Component({
    selector: 'app-offline-banner',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div
      *ngIf="!network.isOnline()"
      class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-amber-800 bg-amber-50 border-b border-amber-200"
      style="background: var(--color-warning, #f59e0b18); color: var(--color-warning, #92400e); border-color: #fcd34d;"
    >
      <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M18.364 5.636a9 9 0 010 12.728M15.536 8.464a5 5 0 010 7.072M12 12h.01
             M8.464 15.536a5 5 0 010-7.072M5.636 18.364a9 9 0 010-12.728"/>
      </svg>
      <span>Bạn đang <strong>offline</strong> — Đang hiển thị dữ liệu đã lưu</span>
    </div>
  `,
})
export class OfflineBannerComponent {
    network = inject(NetworkService);
}
