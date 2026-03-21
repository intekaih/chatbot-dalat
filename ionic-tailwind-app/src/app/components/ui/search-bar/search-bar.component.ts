import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="relative flex items-center bg-gray-50 border border-gray-200 rounded-full pl-10 pr-4 py-2.5 cursor-pointer"
      (click)="onClick()"
    >
      <svg 
        class="absolute left-3.5 w-5 h-5 text-gray-400" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input 
        *ngIf="!readOnly"
        type="text"
        [placeholder]="placeholder"
        [value]="value"
        (input)="onInput($event)"
        (keydown.enter)="onEnter()"
        class="w-full bg-transparent outline-none text-sm text-gray-900 placeholder-gray-400"
      />
      <span *ngIf="readOnly" class="text-sm text-gray-400">{{ placeholder }}</span>
    </div>
  `
})
export class SearchBarComponent {
  @Input() placeholder = 'Tìm kiếm...';
  @Input() value = '';
  @Input() readOnly = false;
  @Output() valueChange = new EventEmitter<string>();
  /** Emits search query when user presses Enter. Use (searchQuery) in templates. */
  @Output() searchQuery = new EventEmitter<string>();

  private router = inject(Router);

  onClick() {
    if (this.readOnly) {
      this.router.navigate(['/home/search']);
    }
  }

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.valueChange.emit(value);
  }

  onEnter() {
    this.searchQuery.emit(this.value);
  }
}
