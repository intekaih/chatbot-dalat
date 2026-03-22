import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center transition-opacity duration-300"
         [class.opacity-0]="isLeaving">
      <!-- Logo -->
      <div class="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-8">
        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      </div>
      
      <!-- Title -->
      <h1 class="text-3xl font-semibold text-white mb-2">Đà Lạt Travel</h1>
      <p class="text-gray-400 mb-12">Trợ lý du lịch thông minh</p>
      
      <!-- Loading Dots -->
      <div class="flex gap-2">
        <div class="w-2 h-2 bg-white rounded-full animate-bounce" style="animation-delay: 0ms;"></div>
        <div class="w-2 h-2 bg-white rounded-full animate-bounce" style="animation-delay: 150ms;"></div>
        <div class="w-2 h-2 bg-white rounded-full animate-bounce" style="animation-delay: 300ms;"></div>
      </div>
    </div>
  `
})
export class SplashPage implements OnInit {
  private router = inject(Router);

  isLeaving = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLeaving = true;
      setTimeout(() => {
        this.checkAuthAndNavigate();
      }, 300);
    }, 2000);
  }

  checkAuthAndNavigate() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    const hasPersonalized = localStorage.getItem('hasPersonalized') === 'true';

    if (isLoggedIn === 'true') {
      if (!hasPersonalized) {
        // Đã đăng nhập nhưng chưa cá nhân hóa → vào /welcome
        this.router.navigateByUrl('/welcome', { replaceUrl: true });
      } else {
        this.router.navigateByUrl('/home', { replaceUrl: true });
      }
    } else if (hasSeenOnboarding === 'true') {
      this.router.navigateByUrl('/auth', { replaceUrl: true });
    } else {
      this.router.navigateByUrl('/onboarding', { replaceUrl: true });
    }
  }
}
