import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-bubble',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- User Bubble -->
    <div *ngIf="role === 'user'" class="flex justify-end mb-4">
      <div class="bg-black text-white rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%] flex flex-col gap-2">
        <img
          *ngIf="imageUrl"
          [src]="imageUrl"
          alt="Ảnh đính kèm"
          class="rounded-xl max-h-48 w-auto object-cover self-end"
        />
        <p *ngIf="content" class="text-sm whitespace-pre-wrap">{{ content }}</p>
      </div>
    </div>

    <!-- Assistant Bubble -->
    <div *ngIf="role === 'assistant'" class="flex gap-3 mb-4">
      <div class="bg-gray-50 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%] flex flex-col gap-2">
        <!-- Images (khi AI trả về địa điểm) -->
        <!-- Multiple images (gallery) -->
        <div *ngIf="imageUrls && imageUrls.length > 0" class="grid grid-cols-2 gap-2">
          <img
            *ngFor="let imgUrl of imageUrls; let i = index"
            [src]="imgUrl"
            [alt]="'Ảnh địa điểm ' + (i + 1)"
            class="rounded-xl max-h-48 w-full object-cover"
            (error)="onImageError($event, i)"
            referrerPolicy="no-referrer"
            crossorigin="anonymous"
          />
        </div>
        <!-- Single image -->
        <div *ngIf="imageUrl && (!imageUrls || imageUrls.length === 0)" class="flex flex-col gap-2">
          <img
            [src]="imageUrl"
            [alt]="'Ảnh địa điểm'"
            class="rounded-xl max-h-64 w-full object-cover"
            (error)="onImageError($event)"
            referrerPolicy="no-referrer"
            crossorigin="anonymous"
          />
        </div>
        <!-- Pulse block khi bubble mới tạo, chưa có chữ -->
        <span *ngIf="streaming && !content"
              class="inline-block w-2 h-4 bg-gray-400 rounded-sm animate-pulse align-middle">
        </span>
        <!-- Nội dung AI -->
        <p *ngIf="content"
           class="text-sm text-gray-900 whitespace-pre-wrap leading-relaxed"
           [innerHTML]="parseContent(content)">
        </p>
        <!-- Con trỏ nhấp nháy khi đang stream -->
        <span *ngIf="streaming && content" class="streaming-cursor"></span>
      </div>
    </div>
  `,
  styles: [`
    .streaming-cursor {
      display: inline-block;
      width: 2px;
      height: 1em;
      background-color: #374151;
      margin-left: 2px;
      vertical-align: text-bottom;
      animation: blink 0.7s step-end infinite;
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  `]
})
export class ChatBubbleComponent {
  @Input() role: 'user' | 'assistant' = 'user';
  @Input() content = '';
  @Input() imageUrl: string | null = null;
  @Input() imageUrls: string[] = []; // Multiple images for place
  @Input() streaming = false;

  parseContent(content: string): string {
    let parsed = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    parsed = parsed.replace(/^• /gm, '<span class="pl-2">• ');
    parsed = parsed.replace(/^- /gm, '<span class="pl-2">- ');
    return parsed;
  }

  onImageError(event: Event, index?: number) {
    const img = event.target as HTMLImageElement;
    const hasTriedOther = img.dataset['triedOther'] === 'true';

    console.warn(`🖼️ [ChatBubble] Image failed: ${img.src.substring(0, 80)}...`);

    // Strategy 1: Thử các URLs khác từ imageUrls array
    if (this.imageUrls && this.imageUrls.length > 0) {
      const triedUrls: string[] = img.dataset['triedUrls']
        ? img.dataset['triedUrls'].split(',')
        : [];

      for (let i = 0; i < this.imageUrls.length; i++) {
        const url = this.imageUrls[i];
        if (url && url !== img.src && !triedUrls.includes(url)) {
          console.log(`  → Trying URL ${i + 1}/${this.imageUrls.length}: ${url.substring(0, 60)}...`);
          triedUrls.push(img.src);
          img.dataset['triedUrls'] = triedUrls.join(',');
          img.src = url;
          return;
        }
      }
    }

    // Final: Placeholder (tất cả URLs đều fail)
    if (!hasTriedOther) {
      img.dataset['triedOther'] = 'true';
      console.log(`  → Using placeholder (all image URLs failed)`);
      img.onerror = null;
      img.src = 'https://placehold.co/600x400/e2e8f0/64748b?text=Đà+Lạt';
    }
  }
}
