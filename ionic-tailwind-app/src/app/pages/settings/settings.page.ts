import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class.dark]="themeService.darkMode()" class="bg-white dark:bg-gray-900 transition-colors flex flex-col overflow-hidden" style="height: calc(100vh - 4rem - env(safe-area-inset-bottom))">
      <!-- Header -->
      <div class="px-4 pt-12 pb-4 flex items-center gap-4">
        <button (click)="goBack()" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 class="text-xl font-semibold text-gray-900">Cài đặt</h1>
      </div>

      <!-- Settings Sections -->
      <div class="p-4 space-y-6">
        <!-- Giao diện -->
        <div>
          <h2 class="text-sm font-medium text-gray-700 mb-3">Giao diện</h2>
          <div class="space-y-2">
            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                <span class="text-sm">Dark mode</span>
              </div>
              <button 
                (click)="toggleDarkMode()"
                class="w-12 h-7 rounded-full transition-colors relative"
                [class]="themeService.darkMode() ? 'bg-black' : 'bg-gray-200'"
              >
                <span 
                  class="absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform"
                  [class]="themeService.darkMode() ? 'translate-x-6' : 'translate-x-1'"
                ></span>
              </button>
            </div>

            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span class="text-sm">Ngôn ngữ</span>
              </div>
              <span class="text-sm text-gray-500">Tiếng Việt</span>
            </div>
          </div>
        </div>

        <!-- Thông báo -->
        <div>
          <h2 class="text-sm font-medium text-gray-700 mb-3">Thông báo</h2>
          <div class="space-y-2">
            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span class="text-sm">Nhận thông báo</span>
              </div>
              <button 
                (click)="toggleNotifications()"
                class="w-12 h-7 rounded-full transition-colors relative"
                [class]="notifications ? 'bg-black' : 'bg-gray-200'"
              >
                <span 
                  class="absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform"
                  [class]="notifications ? 'translate-x-6' : 'translate-x-1'"
                ></span>
              </button>
            </div>
          </div>
        </div>

        <!-- Hỗ trợ -->
        <div>
          <h2 class="text-sm font-medium text-gray-700 mb-3">Hỗ trợ</h2>
          <div class="space-y-2">
            <button class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-sm">Trung tâm trợ giúp</span>
              </div>
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span class="text-sm">Chính sách bảo mật</span>
              </div>
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-sm">Về ứng dụng</span>
              </div>
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- App Version -->
      <div class="text-center py-6">
        <p class="text-xs text-gray-400">Phiên bản 1.0.0</p>
      </div>
    </div>
  `
})
export class SettingsPage {
  private router = inject(Router);

  themeService = inject(ThemeService);
  notifications = true;

  goBack() {
    this.router.navigate(['/home/profile']);
  }

  toggleDarkMode() {
    this.themeService.toggle();
  }

  toggleNotifications() {
    this.notifications = !this.notifications;
  }
}
