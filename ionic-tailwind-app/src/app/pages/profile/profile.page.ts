import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white">
      <!-- Profile Card -->
      <div class="bg-gradient-to-br from-gray-900 to-gray-800 px-4 pt-12 pb-8">
        <div class="flex items-center gap-4">
          <div class="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <h2 class="text-xl font-semibold text-white">Nguyễn Văn A</h2>
            <p class="text-white/60 text-sm">user@example.com</p>
            <p class="text-white/60 text-xs mt-1">Đang ở: Đà Lạt, Việt Nam</p>
          </div>
        </div>
      </div>

      <!-- Preferences -->
      <div class="px-4 py-4 border-b border-gray-100">
        <div class="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
          <span class="px-3 py-1.5 bg-gray-100 rounded-full text-sm whitespace-nowrap">Cafe</span>
          <span class="px-3 py-1.5 bg-gray-100 rounded-full text-sm whitespace-nowrap">Thiên nhiên</span>
          <span class="px-3 py-1.5 bg-gray-100 rounded-full text-sm whitespace-nowrap">Check-in</span>
          <button class="px-3 py-1.5 border border-gray-200 rounded-full text-sm whitespace-nowrap text-gray-500">+</button>
        </div>
      </div>

      <!-- Menu Items -->
      <div class="p-4 space-y-2">
        <button (click)="goToTrips()" class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div class="flex items-center gap-3">
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span class="text-sm font-medium">Lịch trình của tôi</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 bg-black text-white text-xs rounded-full">2</span>
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>

        <button (click)="goToHistory()" class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div class="flex items-center gap-3">
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span class="text-sm font-medium">Lịch sử chat</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 bg-black text-white text-xs rounded-full">2</span>
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>

        <button (click)="goToFavorites()" class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div class="flex items-center gap-3">
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span class="text-sm font-medium">Địa điểm yêu thích</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 bg-black text-white text-xs rounded-full">3</span>
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>

        <button (click)="goToSettings()" class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div class="flex items-center gap-3">
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span class="text-sm font-medium">Cài đặt</span>
          </div>
          <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- App Info -->
      <div class="px-4 py-6 text-center">
        <p class="text-xs text-gray-400">Phiên bản 1.0.0</p>
        <p class="text-xs text-gray-400">Build 2026.03.16</p>
      </div>

      <!-- Logout -->
      <div class="px-4 pb-8">
        <button (click)="logout()" class="w-full py-3 text-red-600 hover:bg-red-50 rounded-xl font-medium">
          Đăng xuất
        </button>
      </div>
    </div>
  `,
  styles: [`
    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
  `]
})
export class ProfilePage {
  constructor(private router: Router) {}

  goToTrips() {
    this.router.navigate(['/home/trips']);
  }

  goToHistory() {
    this.router.navigate(['/home/history']);
  }

  goToFavorites() {
    this.router.navigate(['/home/favorites']);
  }

  goToSettings() {
    this.router.navigate(['/home/settings']);
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('hasSeenOnboarding');
    localStorage.removeItem('hasPersonalized');
    this.router.navigateByUrl('/auth', { replaceUrl: true });
  }
}
