import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "../../services/api.service";

interface ChoiceItem {
  id: string;
  label: string;
  emoji: string;
  desc: string;
}

@Component({
  selector: "app-welcome",
  standalone: true,
  imports: [CommonModule, FormsModule],
  host: {
    style: 'display: flex; flex-direction: column; position: absolute; inset: 0; z-index: 101; background: white; contain: layout size style;'
  },
  template: `
    <div class="min-h-screen bg-white flex flex-col">
      <div class="flex items-center justify-between px-4 pt-6 pb-3">
        <button
          *ngIf="step > 0"
          (click)="goBack()"
          class="text-sm text-gray-500 flex items-center gap-1"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Quay lại
        </button>
        <p class="text-xs font-semibold uppercase tracking-wider text-gray-500">
          Bước {{ step + 1 }} / {{ steps.length }}
        </p>
        <button (click)="skip()" class="text-sm text-gray-400">Bỏ qua</button>
      </div>

      <div class="flex-1 flex flex-col px-6 pt-2 overflow-y-auto">
        <ng-container [ngSwitch]="step">
          <div *ngSwitchCase="0" class="w-full max-w-sm mx-auto space-y-6">
            <div class="text-center">
              <p class="text-sm text-gray-500">Chúng tôi gọi bạn là?</p>
              <p class="text-2xl font-semibold text-gray-900 mt-2">
                Đặt tên cho trải nghiệm
              </p>
            </div>
            <div class="flex justify-center gap-3 flex-wrap">
              <button
                *ngFor="let av of avatars"
                (click)="selectAvatar(av)"
                class="w-14 h-14 rounded-full text-3xl flex items-center justify-center transition-all duration-200"
                [class]="
                  avatar === av
                    ? 'bg-black text-white scale-110'
                    : 'bg-gray-100 hover:bg-gray-200'
                "
              >
                {{ av }}
              </button>
            </div>
            <input
              type="text"
              [(ngModel)]="name"
              placeholder="Tên hiển thị"
              class="w-full px-4 py-3 border border-gray-200 rounded-2xl bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div *ngSwitchCase="1" class="w-full max-w-sm mx-auto space-y-4">
            <p class="text-center text-lg font-semibold text-gray-900">
              Bạn thích gì? 🎯
            </p>
            <p class="text-center text-xs text-gray-500">
              Chọn nhiều cũng được!
            </p>
            <div class="grid grid-cols-2 gap-3">
              <button
                *ngFor="let pref of preferences"
                (click)="togglePreference(pref.id)"
                class="relative p-4 rounded-2xl border transition-all duration-200 text-left"
                [class]="
                  selectedPrefs.includes(pref.id)
                    ? 'border-black bg-gray-50'
                    : 'border-gray-200 hover:border-gray-300'
                "
              >
                <div class="text-2xl">{{ pref.emoji }}</div>
                <p class="text-sm font-medium mt-2">{{ pref.label }}</p>
                <p class="text-[11px] text-gray-500">{{ pref.desc }}</p>
                <span
                  *ngIf="selectedPrefs.includes(pref.id)"
                  class="absolute top-2 right-2 w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-[12px]"
                  >✓</span
                >
              </button>
            </div>
          </div>

          <div *ngSwitchCase="2" class="w-full max-w-sm mx-auto space-y-4">
            <p class="text-center text-lg font-semibold text-gray-900">
              Bạn đi cùng ai? ✈️
            </p>
            <p class="text-center text-xs text-gray-500">
              Chọn phong cách phù hợp
            </p>
            <div class="grid grid-cols-2 gap-3">
              <button
                *ngFor="let style of travelStyles"
                (click)="toggleTravelStyle(style.id)"
                class="relative p-4 rounded-2xl border transition-all duration-200 text-center"
                [class]="
                  selectedStyles.includes(style.id)
                    ? 'border-black bg-gray-50'
                    : 'border-gray-200 hover:border-gray-300'
                "
              >
                <div class="text-3xl mb-3">{{ style.emoji }}</div>
                <p class="text-sm font-medium">{{ style.label }}</p>
                <p class="text-[11px] text-gray-500">{{ style.desc }}</p>
                <span
                  *ngIf="selectedStyles.includes(style.id)"
                  class="absolute top-2 right-2 w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-[12px]"
                  >✓</span
                >
              </button>
            </div>
          </div>

          <div *ngSwitchCase="3" class="w-full max-w-sm mx-auto space-y-4">
            <p class="text-center text-lg font-semibold text-gray-900">
              Ngân sách mỗi ngày? 💸
            </p>
            <p class="text-center text-xs text-gray-500">
              Chúng tôi sẽ gợi ý phù hợp túi tiền
            </p>
            <div class="space-y-3">
              <button
                *ngFor="let budget of budgets"
                (click)="selectBudget(budget.id)"
                class="w-full flex items-center gap-3 p-4 rounded-2xl border transition-all duration-200"
                [class]="
                  selectedBudget === budget.id
                    ? 'border-black bg-gray-50'
                    : 'border-gray-200 hover:border-gray-300'
                "
              >
                <div class="text-2xl">{{ budget.emoji }}</div>
                <div class="text-left">
                  <p class="text-sm font-medium">{{ budget.label }}</p>
                  <p class="text-[11px] text-gray-500">{{ budget.desc }}</p>
                </div>
                <span
                  *ngIf="selectedBudget === budget.id"
                  class="ml-auto w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-[12px]"
                  >✓</span
                >
              </button>
            </div>
          </div>
        </ng-container>
      </div>

      <div class="flex items-center justify-center gap-2 px-4 pb-2">
        <div
          *ngFor="let _ of steps; let idx = index"
          [class]="
            idx === step
              ? 'w-8 h-2 bg-black rounded-full'
              : 'w-2 h-2 bg-gray-200 rounded-full'
          "
        ></div>
      </div>

      <div class="p-4 pb-8 space-y-3">
        <button
          (click)="next()"
          [disabled]="!canNext() || isSubmitting"
          class="w-full py-3 rounded-full font-medium transition-all duration-200 text-white flex items-center justify-center gap-2"
          [class]="
            canNext() && !isSubmitting
              ? 'bg-black hover:bg-gray-800'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          "
        >
          <svg
            *ngIf="isSubmitting"
            class="w-4 h-4 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
          {{
            isSubmitting
              ? "Đang xử lý..."
              : step === steps.length - 1
                ? "Hoàn thành"
                : "Tiếp tục"
          }}
        </button>

        <button
          *ngIf="step === 0"
          (click)="skip()"
          class="w-full py-3 rounded-full border border-gray-200 text-sm text-gray-500 hover:border-gray-300 transition-all duration-200"
        >
          Bỏ qua, vào thẳng app
        </button>
      </div>
    </div>
  `,
})
export class WelcomePage implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private apiService = inject(ApiService);

  steps = [0, 1, 2, 3];
  step = 0;
  isSubmitting = false;
  isUpdateMode = false;

  avatars = ["🧑‍💻", "👩‍🦰", "👨‍🦱", "👩‍🦳", "🧔", "👩‍🎨", "🧑‍🌾", "👨‍✈️"];
  avatar = this.avatars[0];
  name = "";

  preferences: ChoiceItem[] = [
    { id: "food", emoji: "🍜", label: "Ẩm thực", desc: "Món ngon địa phương" },
    { id: "cafe", emoji: "☕", label: "Cafe", desc: "Quán cà phê view đẹp" },
    { id: "checkin", emoji: "📸", label: "Check-in", desc: "Địa điểm sống ảo" },
    {
      id: "relax",
      emoji: "🏨",
      label: "Nghỉ dưỡng",
      desc: "Không gian thư giãn",
    },
    { id: "nature", emoji: "🌲", label: "Thiên nhiên", desc: "Rừng, thác, hồ" },
    { id: "night", emoji: "🌙", label: "Về đêm", desc: "Chợ đêm, bar, phố" },
  ];
  selectedPrefs: string[] = [];

  travelStyles: ChoiceItem[] = [
    { id: "couple", emoji: "💑", label: "Cặp đôi", desc: "Lãng mạn, thơ mộng" },
    {
      id: "friends",
      emoji: "👥",
      label: "Nhóm bạn",
      desc: "Vui vẻ, náo nhiệt",
    },
    {
      id: "family",
      emoji: "👨‍👩‍👧",
      label: "Gia đình",
      desc: "An toàn, tiện nghi",
    },
    { id: "solo", emoji: "🎒", label: "Solo", desc: "Tự do, khám phá" },
  ];
  selectedStyles: string[] = [];

  budgets: ChoiceItem[] = [
    { id: "budget", emoji: "💰", label: "Tiết kiệm", desc: "Dưới 500k/ngày" },
    { id: "mid", emoji: "💳", label: "Vừa phải", desc: "500k – 1.5tr/ngày" },
    { id: "luxury", emoji: "✨", label: "Sang trọng", desc: "Trên 1.5tr/ngày" },
  ];
  selectedBudget = "";

  ngOnInit() {
    this.initForm();
  }

  ionViewWillEnter() {
    this.initForm();
  }

  private initForm() {
    this.isUpdateMode = this.route.snapshot.queryParamMap.get("mode") === "update";

    // Reset step về 0 khi vào lại
    this.step = 0;
    this.isSubmitting = false;

    // Load data từ DB (API) trước, localStorage chỉ là cache fallback
    this.apiService.getUser().subscribe({
      next: (user) => {
        // Cache vào localStorage
        this.apiService.cacheUserToLocalStorage(user);

        // Nếu đã personalized và không phải update mode → redirect về home
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        if (user.hasPersonalized && isLoggedIn && !this.isUpdateMode) {
          this.router.navigateByUrl("/home", { replaceUrl: true });
          return;
        }

        // Nếu đang cập nhật, điền lại giá trị cũ từ DB vào form
        if (this.isUpdateMode) {
          this.name = user.name || "";
          if (user.avatar) this.avatar = user.avatar;
          this.selectedPrefs = user.preferences || [];
          this.selectedStyles = user.travelStyles || [];
          this.selectedBudget = user.budget || "";
        }
      },
    });
  }

  selectAvatar(av: string) {
    this.avatar = av;
  }

  togglePreference(id: string) {
    const current = this.selectedPrefs.indexOf(id);
    if (current > -1) {
      this.selectedPrefs.splice(current, 1);
    } else {
      this.selectedPrefs.push(id);
    }
  }

  toggleTravelStyle(id: string) {
    const current = this.selectedStyles.indexOf(id);
    if (current > -1) {
      this.selectedStyles.splice(current, 1);
    } else {
      this.selectedStyles.push(id);
    }
  }

  selectBudget(id: string) {
    this.selectedBudget = id;
  }

  canNext(): boolean {
    if (this.step === 0) return this.name.trim().length > 0;
    if (this.step === 1) return this.selectedPrefs.length > 0;
    if (this.step === 2) return this.selectedStyles.length > 0;
    return this.selectedBudget !== "";
  }

  next() {
    if (this.step < this.steps.length - 1) {
      this.step++;
    } else {
      this.complete();
    }
  }

  goBack() {
    if (this.step > 0) {
      this.step--;
    }
  }

  skip() {
    if (this.isUpdateMode) {
      // Trong update mode, bỏ qua = quay về profile (không reset data)
      this.router.navigateByUrl("/home/profile", { replaceUrl: true });
      return;
    }
    // Cache vào localStorage
    this.apiService.cacheUserToLocalStorage({
      id: "",
      name: "Khách",
      avatar: this.avatars[0],
      preferences: [],
      travelStyles: [],
      budget: "mid",
      hasPersonalized: false,
    });
    localStorage.setItem("hasSeenOnboarding", "true");
    localStorage.setItem("isLoggedIn", "true");
    this.router.navigateByUrl("/home", { replaceUrl: true });
  }

  complete() {
    if (this.isSubmitting) return;
    this.isSubmitting = true;

    const name = this.name.trim() || "Khách";
    const target = this.isUpdateMode ? "/home/profile" : "/home";

    // Gọi API lưu preferences vào DB, chờ response rồi mới navigate
    this.apiService
      .savePreferences({
        name,
        avatar: this.avatar,
        preferences: this.selectedPrefs,
        travelStyles: this.selectedStyles,
        budget: this.selectedBudget,
      })
      .subscribe({
        next: (res) => {
          // Cache DB response vào localStorage
          this.apiService.cacheUserToLocalStorage(res.user);
          localStorage.setItem("hasSeenOnboarding", "true");
          localStorage.setItem("isLoggedIn", "true");
          this.router.navigateByUrl(target, { replaceUrl: true });
        },
        error: () => {
          // Fallback: cache form data nếu API fail
          this.apiService.cacheUserToLocalStorage({
            id: "",
            name,
            avatar: this.avatar,
            preferences: this.selectedPrefs,
            travelStyles: this.selectedStyles,
            budget: this.selectedBudget,
            hasPersonalized: true,
          });
          localStorage.setItem("hasSeenOnboarding", "true");
          localStorage.setItem("isLoggedIn", "true");
          this.router.navigateByUrl(target, { replaceUrl: true });
        },
      });
  }
}
