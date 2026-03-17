import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col items-center justify-center py-12 text-center">
      <div class="w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
        <span class="text-3xl">{{icon}}</span>
      </div>
      <h3 class="text-base font-medium text-gray-900 mb-2">{{title}}</h3>
      <p class="text-sm text-gray-500 max-w-xs">{{message}}</p>
      <ng-content></ng-content>
    </div>
  `
})
export class EmptyStateComponent {
  @Input() icon = '📭';
  @Input() title = 'Không có dữ liệu';
  @Input() message = 'Không có gì ở đây cả.';
}
