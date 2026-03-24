import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Slide {
  emoji: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [CommonModule],
  host: {
    style: 'display: flex; flex-direction: column; position: absolute; inset: 0; background: white; contain: layout size style;'
  },
  template: `
    <div class="h-full flex flex-col">
      <div class="flex justify-end p-4" style="padding-top: max(1rem, env(safe-area-inset-top))">
        <button (click)="skip()" class="text-sm text-gray-500">Bỏ qua</button>
      </div>

      <div class="flex-1 flex flex-col items-center justify-center px-6 overflow-hidden">
        <div class="text-center w-full max-w-sm">
          <div class="text-8xl mb-6">{{ slides[currentSlide].emoji }}</div>
          <h1 class="text-2xl font-semibold text-gray-900 mb-3">{{ slides[currentSlide].title }}</h1>
          <p class="text-gray-500">{{ slides[currentSlide].description }}</p>
        </div>
      </div>

      <div class="flex justify-center gap-2 py-6">
        <div
          *ngFor="let _ of slides; let idx = index"
          [class]="idx === currentSlide ? 'w-8 h-2 bg-black rounded-full' : 'w-2 h-2 bg-gray-200 rounded-full'"
        ></div>
      </div>

      <div class="p-4" style="padding-bottom: max(2rem, env(safe-area-inset-bottom))">
        <button
          (click)="next()"
          class="w-full py-3 bg-black text-white rounded-full font-medium transition-all duration-300 hover:bg-gray-800"
        >
          {{ getButtonText() }}
        </button>
      </div>
    </div>
  `
})
export class OnboardingPage {
  private router = inject(Router);

  slides: Slide[] = [
    { emoji: '🌲', title: 'Khám phá Đà Lạt', description: 'Trợ lý AI giúp bạn tìm kiếm địa điểm, lên lịch trình và khám phá Đà Lạt một cách thông minh.' },
    { emoji: '💬', title: 'Chat với AI', description: 'Hỏi bất cứ điều gì về du lịch Đà Lạt, AI sẽ tư vấn cho bạn ngay lập tức.' },
    { emoji: '🗺️', title: 'Lên kế hoạch dễ dàng', description: 'Tạo lịch trình, theo dõi ngân sách và lưu địa điểm yêu thích chỉ trong một ứng dụng.' },
  ];

  currentSlide = 0;

  next() {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
    } else {
      this.finish();
    }
  }

  getButtonText(): string {
    return this.currentSlide === this.slides.length - 1 ? 'Bắt đầu' : 'Tiếp tục';
  }

  skip() {
    this.finish();
  }

  finish() {
    localStorage.setItem('hasSeenOnboarding', 'true');
    this.router.navigateByUrl('/auth', { replaceUrl: true });
  }
}
