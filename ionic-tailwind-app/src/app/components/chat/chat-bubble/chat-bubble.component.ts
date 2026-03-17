import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-bubble',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- User Bubble -->
    <div *ngIf="role === 'user'" class="flex justify-end mb-4">
      <div class="bg-black text-white rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%]">
        <p class="text-sm whitespace-pre-wrap">{{ content }}</p>
      </div>
    </div>

    <!-- Assistant Bubble -->
    <div *ngIf="role === 'assistant'" class="flex gap-3 mb-4">
      <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      </div>
      <div class="bg-gray-50 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%]">
        <p class="text-sm text-gray-900 whitespace-pre-wrap" [innerHTML]="parseContent(content)"></p>
      </div>
    </div>
  `
})
export class ChatBubbleComponent {
  @Input() role: 'user' | 'assistant' = 'user';
  @Input() content = '';

  parseContent(content: string): string {
    let parsed = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    parsed = parsed.replace(/^• /gm, '<span class="pl-2">• ');
    parsed = parsed.replace(/^- /gm, '<span class="pl-2">- ');
    return parsed;
  }
}
