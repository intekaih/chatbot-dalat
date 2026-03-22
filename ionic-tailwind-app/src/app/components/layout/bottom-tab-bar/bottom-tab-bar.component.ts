import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-bottom-tab-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50" style="padding-bottom: env(safe-area-inset-bottom)">
      <div class="flex items-center justify-around h-16 px-2">
        
        <!-- Home Tab -->
        <a 
          routerLink="/home" 
          routerLinkActive="text-black" 
          [routerLinkActiveOptions]="{exact: true}"
          [class]="isActive('/home') ? 'text-black' : 'text-gray-400'"
          class="flex flex-col items-center justify-center w-16 h-full transition-colors"
        >
          <svg class="w-6 h-6" [attr.stroke-width]="isActive('/home') ? '2' : '1.5'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span class="text-xs mt-1">Trang chủ</span>
        </a>

        <!-- Explore Tab -->
        <a 
          routerLink="/home/explore" 
          routerLinkActive="text-black"
          [class]="isActive('/home/explore') || isActive('/home/place/') || isActive('/home/search') ? 'text-black' : 'text-gray-400'"
          class="flex flex-col items-center justify-center w-16 h-full transition-colors"
        >
          <svg class="w-6 h-6" [attr.stroke-width]="isActive('/home/explore') || isActive('/home/place/') || isActive('/home/search') ? '2' : '1.5'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <span class="text-xs mt-1">Khám phá</span>
        </a>

        <!-- Chat Tab -->
        <a 
          routerLink="/home/chat" 
          routerLinkActive="text-black"
          [class]="isActive('/home/chat') || isActive('/home/history') ? 'text-black' : 'text-gray-400'"
          class="flex flex-col items-center justify-center w-16 h-full transition-colors"
        >
          <svg class="w-6 h-6" [attr.stroke-width]="isActive('/home/chat') || isActive('/home/history') ? '2' : '1.5'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span class="text-xs mt-1">Chat</span>
        </a>

        <!-- Favorites Tab -->
        <a 
          routerLink="/home/favorites" 
          routerLinkActive="text-black"
          [class]="isActive('/home/favorites') ? 'text-black' : 'text-gray-400'"
          class="flex flex-col items-center justify-center w-16 h-full transition-colors"
        >
          <svg class="w-6 h-6" [attr.stroke-width]="isActive('/home/favorites') ? '2' : '1.5'" [attr.fill]="isActive('/home/favorites') ? 'currentColor' : 'none'" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span class="text-xs mt-1">Đã lưu</span>
        </a>

      </div>
    </div>
  `
})
export class BottomTabBarComponent {
  private router = inject(Router);

  isActive(path: string): boolean {
    const currentPath = this.router.url;
    if (path === '/home') {
      return currentPath === '/home';
    }
    return currentPath.startsWith(path);
  }
}
