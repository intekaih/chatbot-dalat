import { Component, OnInit, DestroyRef, inject } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { ApiService, User } from "../../services/api.service";
import { AuthService } from "../../services/auth.service";
import { FirestoreTripsService } from "../../services/firestore-trips.service";
import { FirestoreChatService } from "../../services/firestore-chat.service";
import { FirestoreFavoritesService } from "../../services/firestore-favorites.service";

@Component({
  selector: "app-profile",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white flex flex-col overflow-hidden" style="height: calc(100vh - 4rem - env(safe-area-inset-bottom))">
      <!-- Profile Card -->
      <div class="bg-gradient-to-br from-gray-900 to-gray-800 px-4 pt-12 pb-6 relative">
        <button
          *ngIf="user?.hasPersonalized"
          (click)="goToWelcome()"
          class="absolute top-12 right-4 text-xs font-medium text-white/60 bg-white/5 px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors"
        >
          Chỉnh sửa
        </button>

        <div class="flex items-center gap-4">
          <div
            class="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-3xl shrink-0"
          >
            {{ user?.avatar || "🧑‍💻" }}
          </div>
          <div>
            <h2 class="text-xl font-semibold text-white">
              {{ user?.name || "Khách" }}
            </h2>
            <p class="text-white/60 text-sm mt-0.5">
              <span *ngIf="user?.hasPersonalized" class="text-green-400"
                >✓ Đã cá nhân hóa</span
              >
              <span *ngIf="!user?.hasPersonalized" class="text-white/40"
                >Chưa cá nhân hóa</span
              >
            </p>
          </div>
        </div>

        <!-- Personalization Tags (1-2 rows) -->
        <div *ngIf="user?.hasPersonalized" class="mt-5 flex flex-wrap gap-2">
          <!-- Budget -->
          <span
            *ngIf="user?.budget"
            class="px-2.5 py-1 bg-amber-500/20 border border-amber-500/30 rounded-lg text-amber-200 text-xs font-medium whitespace-nowrap"
          >
            💰 {{ getBudgetLabel(user!.budget) }}
          </span>
          
          <!-- Travel Styles -->
          <span
            *ngFor="let style of user?.travelStyles"
            class="px-2.5 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-lg text-emerald-200 text-xs font-medium whitespace-nowrap"
          >
            {{ getTravelStyleLabel(style) }}
          </span>

          <!-- Preferences -->
          <span
            *ngFor="let pref of user?.preferences"
            class="px-2.5 py-1 bg-white/10 border border-white/10 rounded-lg text-white/80 text-xs font-medium whitespace-nowrap"
          >
            {{ getPreferenceLabel(pref) }}
          </span>
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-3 gap-px bg-gray-100 border-b border-gray-100">
        <div class="bg-white py-4 text-center">
          <p class="text-xl font-semibold text-gray-900">{{ tripCount }}</p>
          <p class="text-xs text-gray-500">Lịch trình</p>
        </div>
        <div class="bg-white py-4 text-center">
          <p class="text-xl font-semibold text-gray-900">{{ chatCount }}</p>
          <p class="text-xs text-gray-500">Cuộc chat</p>
        </div>
        <div class="bg-white py-4 text-center">
          <p class="text-xl font-semibold text-gray-900">
            {{ favoritesCount }}
          </p>
          <p class="text-xs text-gray-500">Yêu thích</p>
        </div>
      </div>

      <!-- Menu Items -->
      <div class="p-4 space-y-2">
        <button
          (click)="goToTrips()"
          class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl"
        >
          <div class="flex items-center gap-3">
            <svg
              class="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <span class="text-sm font-medium">Lịch trình của tôi</span>
          </div>
          <div class="flex items-center gap-2">
            <span
              *ngIf="tripCount > 0"
              class="px-2 py-0.5 bg-black text-white text-xs rounded-full"
              >{{ tripCount }}</span
            >
            <svg
              class="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </button>

        <button
          (click)="goToHistory()"
          class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl"
        >
          <div class="flex items-center gap-3">
            <svg
              class="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span class="text-sm font-medium">Lịch sử chat</span>
          </div>
          <div class="flex items-center gap-2">
            <span
              *ngIf="chatCount > 0"
              class="px-2 py-0.5 bg-black text-white text-xs rounded-full"
              >{{ chatCount }}</span
            >
            <svg
              class="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </button>

        <button
          (click)="goToFavorites()"
          class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl"
        >
          <div class="flex items-center gap-3">
            <svg
              class="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span class="text-sm font-medium">Địa điểm yêu thích</span>
          </div>
          <div class="flex items-center gap-2">
            <span
              *ngIf="favoritesCount > 0"
              class="px-2 py-0.5 bg-black text-white text-xs rounded-full"
              >{{ favoritesCount }}</span
            >
            <svg
              class="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </button>

        <button
          (click)="goToSettings()"
          class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl"
        >
          <div class="flex items-center gap-3">
            <svg
              class="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span class="text-sm font-medium">Cài đặt</span>
          </div>
          <svg
            class="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

      </div>

      <!-- Spacer: đẩy logout xuống cuối -->
      <div class="flex-1"></div>

      <!-- Logout -->
      <div class="px-4 pb-4">
        <button
          (click)="logout()"
          class="w-full py-3 text-red-600 hover:bg-red-50 rounded-xl font-medium text-sm border border-red-100"
        >
          Đăng xuất
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
    `,
  ],
})
export class ProfilePage implements OnInit {
  private router = inject(Router);
  private apiService = inject(ApiService);
  private authService = inject(AuthService);

  user: User | null = null;
  tripCount = 0;
  chatCount = 0;
  favoritesCount = 0;

  private tripsService = inject(FirestoreTripsService);
  private chatService = inject(FirestoreChatService);
  private favoritesService = inject(FirestoreFavoritesService);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    // User info: lấy từ Firebase Auth (realtime)
    this.apiService.getUser().subscribe((u) => (this.user = u));
    // Counts từ Firestore — takeUntilDestroyed để tránh memory leak
    this.tripsService.getTrips().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((t) => (this.tripCount = t.length));
    this.chatService.getSessions().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((s) => (this.chatCount = s.length));
    this.favoritesService.getFavoriteIds().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((ids) => (this.favoritesCount = ids.length));
  }

  getBudgetLabel(budget: string): string {
    const labels: Record<string, string> = {
      budget: "Tiết kiệm",
      mid: "Vừa phải",
      luxury: "Sang trọng",
    };
    return labels[budget] || budget;
  }

  getPreferenceLabel(pref: string): string {
    const labels: Record<string, string> = {
      food: "🍜 Ẩm thực",
      cafe: "☕ Cafe",
      checkin: "📸 Check-in",
      relax: "🏨 Nghỉ dưỡng",
      nature: "🌲 Thiên nhiên",
      night: "🌙 Về đêm",
    };
    return labels[pref] || pref;
  }

  getTravelStyleLabel(style: string): string {
    const labels: Record<string, string> = {
      couple: "💑 Cặp đôi",
      friends: "👥 Nhóm bạn",
      family: "👨‍👩‍👧 Gia đình",
      solo: "🎒 Solo",
    };
    return labels[style] || style;
  }

  goToTrips() {
    this.router.navigate(["/home/trips"]);
  }
  goToHistory() {
    this.router.navigate(["/home/history"]);
  }
  goToFavorites() {
    this.router.navigate(["/home/favorites"]);
  }
  goToSettings() {
    this.router.navigate(["/home/settings"]);
  }
  goToWelcome() {
    this.router.navigate(["/welcome"], { queryParams: { mode: "update" } });
  }

  logout() {
    // Kiểm tra nếu là Firebase user thì logout khỏi Firebase
    const isFirebaseUser = localStorage.getItem('firebase_uid');
    if (isFirebaseUser) {
      this.authService.logout();
    } else {
      // Guest user - chỉ xóa localStorage
      localStorage.clear();
      this.router.navigateByUrl("/splash", { replaceUrl: true });
    }
  }
}
