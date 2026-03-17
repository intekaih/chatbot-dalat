import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="animate-pulse">
      <div *ngIf="type === 'card'" class="rounded-2xl border border-gray-100 overflow-hidden">
        <div class="aspect-[19/6] bg-gray-200"></div>
        <div class="p-4 space-y-3">
          <div class="h-4 bg-gray-200 rounded w-3/4"></div>
          <div class="h-3 bg-gray-200 rounded w-1/2"></div>
          <div class="h-3 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
      <div *ngIf="type === 'text'" class="space-y-2">
        <div class="h-4 bg-gray-200 rounded w-full"></div>
        <div class="h-4 bg-gray-200 rounded w-5/6"></div>
        <div class="h-4 bg-gray-200 rounded w-4/6"></div>
      </div>
      <div *ngIf="type === 'avatar'" class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-gray-200"></div>
        <div class="flex-1 space-y-2">
          <div class="h-4 bg-gray-200 rounded w-1/3"></div>
          <div class="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  `
})
export class LoadingSkeletonComponent {
  @Input() type: 'card' | 'text' | 'avatar' = 'card';
}
