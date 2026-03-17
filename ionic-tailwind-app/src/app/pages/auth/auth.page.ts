import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-white flex flex-col px-6 py-8">
      <!-- Logo -->
      <div class="flex flex-col items-center mb-8">
        <div class="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
          <svg class="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
        <h1 class="text-2xl font-semibold text-gray-900">Đà Lạt Travel AI</h1>
        <p class="text-gray-500 text-sm">Trợ lý du lịch thông minh</p>
      </div>

      <!-- Toggle Login/Register -->
      <div class="flex bg-gray-100 rounded-full p-1 mb-6">
        <button 
          (click)="isLogin = true"
          class="flex-1 py-2 rounded-full text-sm font-medium transition-colors"
          [class]="isLogin ? 'bg-white text-black shadow-sm' : 'text-gray-500'"
        >
          Đăng nhập
        </button>
        <button 
          (click)="isLogin = false"
          class="flex-1 py-2 rounded-full text-sm font-medium transition-colors"
          [class]="!isLogin ? 'bg-white text-black shadow-sm' : 'text-gray-500'"
        >
          Đăng ký
        </button>
      </div>

      <!-- Form -->
      <form (ngSubmit)="onSubmit()" class="space-y-4">
        <div>
          <div class="relative">
            <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <input 
              type="email" 
              [(ngModel)]="email" 
              name="email"
              placeholder="Email"
              class="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>
        </div>

        <div>
          <div class="relative">
            <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <input 
              [type]="showPassword ? 'text' : 'password'" 
              [(ngModel)]="password" 
              name="password"
              placeholder="Mật khẩu"
              class="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>
        </div>

        <div *ngIf="!isLogin">
          <div class="relative">
            <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <input 
              [type]="showPassword ? 'text' : 'password'" 
              [(ngModel)]="confirmPassword" 
              name="confirmPassword"
              placeholder="Xác nhận mật khẩu"
              class="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>
        </div>

        <button 
          type="submit"
          class="w-full py-3 bg-black text-white rounded-full font-medium mt-6"
        >
          {{ isLogin ? 'Đăng nhập' : 'Đăng ký' }}
        </button>
      </form>

      <!-- Divider -->
      <div class="flex items-center gap-4 my-6">
        <div class="flex-1 h-px bg-gray-200"></div>
        <span class="text-xs text-gray-400">hoặc</span>
        <div class="flex-1 h-px bg-gray-200"></div>
      </div>

      <!-- Google Button -->
      <button 
        (click)="loginWithGoogle()"
        class="w-full py-3 bg-white border border-gray-200 rounded-xl font-medium flex items-center justify-center gap-3"
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Tiếp tục với Google
      </button>

      <!-- Guest Link -->
      <div class="text-center mt-6">
        <button (click)="loginAsGuest()" class="text-sm text-gray-500">
          Tiếp tục với tư cách <span class="text-black underline">khách</span>
        </button>
      </div>
    </div>
  `
})
export class AuthPage {
  isLogin = true;
  email = '';
  password = '';
  confirmPassword = '';
  showPassword = false;

  constructor(private router: Router) {}

  onSubmit() {
    localStorage.setItem('isLoggedIn', 'true');
    const hasPersonalized = localStorage.getItem('hasPersonalized') === 'true';
    this.router.navigateByUrl(hasPersonalized ? '/home' : '/welcome', { replaceUrl: true });
  }

  loginWithGoogle() {
    localStorage.setItem('isLoggedIn', 'true');
    const hasPersonalized = localStorage.getItem('hasPersonalized') === 'true';
    this.router.navigateByUrl(hasPersonalized ? '/home' : '/welcome', { replaceUrl: true });
  }

  loginAsGuest() {
    localStorage.setItem('isLoggedIn', 'true');
    const hasPersonalized = localStorage.getItem('hasPersonalized') === 'true';
    this.router.navigateByUrl(hasPersonalized ? '/home' : '/welcome', { replaceUrl: true });
  }
}
