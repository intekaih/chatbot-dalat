import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-chip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      [class]="active 
        ? 'bg-black text-white border-transparent' 
        : 'bg-white text-gray-600 border-gray-200'"
      class="px-3 py-1.5 rounded-full border text-sm whitespace-nowrap transition-colors flex items-center gap-1.5"
    >
      <span *ngIf="icon">{{icon}}</span>
      {{label}}
    </button>
  `
})
export class CategoryChipComponent {
  @Input() label = '';
  @Input() icon = '';
  @Input() active = false;
}
