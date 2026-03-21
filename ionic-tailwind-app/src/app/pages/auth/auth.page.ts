import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-auth",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-white flex flex-col px-6 py-8">
      <!-- Logo -->
      <div class="flex flex-col items-center mb-8">
        <div
          class="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4"
        >
          <svg
            class="w-8 h-8 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        </div>
        <h1 class="text-2xl font-semibold text-gray-900">Đà Lạt Travel AI</h1>
        <p class="text-gray-500 text-sm">Trợ lý du lịch thông minh</p>
      </div>

      <!-- Toggle Login/Register -->
      <div class="flex bg-gray-100 rounded-full p-1 mb-6">
        <button
          (click)="switchMode(true)"
          class="flex-1 py-2 rounded-full text-sm font-medium transition-colors"
          [class]="isLogin ? 'bg-white text-black shadow-sm' : 'text-gray-500'"
        >
          Đăng nhập
        </button>
        <button
          (click)="switchMode(false)"
          class="flex-1 py-2 rounded-full text-sm font-medium transition-colors"
          [class]="!isLogin ? 'bg-white text-black shadow-sm' : 'text-gray-500'"
        >
          Đăng ký
        </button>
      </div>

      <!-- Global error banner -->
      <div
        *ngIf="globalError"
        class="mb-4 px-4 py-3 bg-red-50 border border-red-100 rounded-xl flex items-start gap-2"
      >
        <svg
          class="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p class="text-sm text-red-600">{{ globalError }}</p>
      </div>

      <!-- Form -->
      <form (ngSubmit)="onSubmit()" novalidate class="space-y-4">
        <!-- Email -->
        <div>
          <div class="relative">
            <svg
              class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <input
              type="email"
              [(ngModel)]="email"
              name="email"
              placeholder="Email"
              aria-label="Địa chỉ email"
              autocomplete="email"
              (blur)="touchedEmail = true; validateEmail()"
              [class]="
                'w-full pl-12 pr-4 py-3 bg-gray-50 border rounded-xl text-sm focus:ring-2 focus:ring-black focus:outline-none transition-colors ' +
                (emailError && touchedEmail
                  ? 'border-red-400 bg-red-50'
                  : 'border-gray-200')
              "
            />
          </div>
          <p
            *ngIf="emailError && touchedEmail"
            class="mt-1.5 ml-1 text-xs text-red-500 flex items-center gap-1"
          >
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            {{ emailError }}
          </p>
        </div>

        <!-- Password -->
        <div>
          <div class="relative">
            <svg
              class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <input
              [type]="showPassword ? 'text' : 'password'"
              [(ngModel)]="password"
              name="password"
              placeholder="Mật khẩu"
              aria-label="Mật khẩu"
              autocomplete="current-password"
              (blur)="touchedPassword = true; validatePassword()"
              [class]="
                'w-full pl-12 pr-12 py-3 bg-gray-50 border rounded-xl text-sm focus:ring-2 focus:ring-black focus:outline-none transition-colors ' +
                (passwordError && touchedPassword
                  ? 'border-red-400 bg-red-50'
                  : 'border-gray-200')
              "
            />
            <button
              type="button"
              (click)="showPassword = !showPassword"
              class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg
                *ngIf="!showPassword"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <svg
                *ngIf="showPassword"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            </button>
          </div>
          <p
            *ngIf="passwordError && touchedPassword"
            class="mt-1.5 ml-1 text-xs text-red-500 flex items-center gap-1"
          >
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            {{ passwordError }}
          </p>
        </div>

        <!-- Confirm Password (Register only) -->
        <div *ngIf="!isLogin">
          <div class="relative">
            <svg
              class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <input
              [type]="showPassword ? 'text' : 'password'"
              [(ngModel)]="confirmPassword"
              name="confirmPassword"
              placeholder="Xác nhận mật khẩu"
              aria-label="Xác nhận mật khẩu"
              autocomplete="new-password"
              (blur)="touchedConfirm = true; validateConfirm()"
              [class]="
                'w-full pl-12 pr-4 py-3 bg-gray-50 border rounded-xl text-sm focus:ring-2 focus:ring-black focus:outline-none transition-colors ' +
                (confirmError && touchedConfirm
                  ? 'border-red-400 bg-red-50'
                  : 'border-gray-200')
              "
            />
          </div>
          <p
            *ngIf="confirmError && touchedConfirm"
            class="mt-1.5 ml-1 text-xs text-red-500 flex items-center gap-1"
          >
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            {{ confirmError }}
          </p>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          [disabled]="isSubmitting"
          class="w-full py-3 rounded-full font-medium mt-2 flex items-center justify-center gap-2 transition-colors"
          [class]="
            isSubmitting
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-black text-white hover:bg-gray-800'
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
            isSubmitting ? "Đang xử lý..." : isLogin ? "Đăng nhập" : "Đăng ký"
          }}
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
        type="button"
        (click)="loginWithGoogle()"
        class="w-full py-3 bg-white border border-gray-200 rounded-xl font-medium flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors"
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        Tiếp tục với Google
      </button>

      <!-- Guest Link -->
      <div class="text-center mt-4">
        <button
          type="button"
          (click)="loginAsGuest()"
          class="text-sm text-gray-500 hover:text-gray-700"
        >
          Tiếp tục với tư cách <span class="text-black underline">khách</span>
        </button>
      </div>
    </div>
  `,
})
export class AuthPage {
  isLogin = true;
  isSubmitting = false;

  email = "";
  password = "";
  confirmPassword = "";
  showPassword = false;

  // touched flags — chỉ hiện lỗi sau khi user đã blur vào field
  touchedEmail = false;
  touchedPassword = false;
  touchedConfirm = false;

  emailError = "";
  passwordError = "";
  confirmError = "";
  globalError = "";

  private readonly EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  private router = inject(Router);
  private authService = inject(AuthService);

  switchMode(login: boolean) {
    this.isLogin = login;
    this.clearErrors();
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
    this.touchedEmail = false;
    this.touchedPassword = false;
    this.touchedConfirm = false;
  }

  // ── Validators ────────────────────────────────────────────────────────────

  validateEmail(): boolean {
    if (!this.email.trim()) {
      this.emailError = "Email không được để trống";
      return false;
    }
    if (!this.EMAIL_REGEX.test(this.email.trim())) {
      this.emailError = "Email không đúng định dạng (vd: user@example.com)";
      return false;
    }
    this.emailError = "";
    return true;
  }

  validatePassword(): boolean {
    if (!this.password) {
      this.passwordError = "Mật khẩu không được để trống";
      return false;
    }
    if (this.password.length < 6) {
      this.passwordError = "Mật khẩu phải có ít nhất 6 ký tự";
      return false;
    }
    if (!this.isLogin && this.password.length > 128) {
      this.passwordError = "Mật khẩu quá dài (tối đa 128 ký tự)";
      return false;
    }
    this.passwordError = "";
    return true;
  }

  validateConfirm(): boolean {
    if (!this.isLogin) {
      if (!this.confirmPassword) {
        this.confirmError = "Vui lòng xác nhận mật khẩu";
        return false;
      }
      if (this.confirmPassword !== this.password) {
        this.confirmError = "Mật khẩu xác nhận không khớp";
        return false;
      }
    }
    this.confirmError = "";
    return true;
  }

  private clearErrors() {
    this.emailError = "";
    this.passwordError = "";
    this.confirmError = "";
    this.globalError = "";
  }

  private isFormValid(): boolean {
    // Touch all fields to show errors
    this.touchedEmail = true;
    this.touchedPassword = true;
    if (!this.isLogin) this.touchedConfirm = true;

    const emailOk = this.validateEmail();
    const passOk = this.validatePassword();
    const confirmOk = this.validateConfirm();

    return emailOk && passOk && confirmOk;
  }

  // ── Submit ────────────────────────────────────────────────────────────────

  async onSubmit() {
    this.globalError = "";
    if (!this.isFormValid()) return;

    this.isSubmitting = true;

    try {
      let user = null;
      if (this.isLogin) {
        user = await this.authService.login(this.email, this.password);
      } else {
        user = await this.authService.register(this.email, this.password, this.email.split('@')[0]);
      }
      this.navigateAfterAuth(user);
    } catch (error: any) {
      this.isSubmitting = false;
      // Handle Firebase auth errors
      if (error.code === 'auth/invalid-email') {
        this.emailError = 'Email không hợp lệ';
      } else if (error.code === 'auth/user-not-found') {
        this.emailError = 'Tài khoản không tồn tại';
      } else if (error.code === 'auth/wrong-password') {
        this.passwordError = 'Mật khẩu không đúng';
      } else if (error.code === 'auth/email-already-in-use') {
        this.emailError = 'Email đã được sử dụng';
      } else if (error.code === 'auth/weak-password') {
        this.passwordError = 'Mật khẩu quá yếu';
      } else {
        this.globalError = 'Đã xảy ra lỗi. Vui lòng thử lại.';
      }
    }
  }

  async loginWithGoogle() {
    this.globalError = "";
    this.isSubmitting = true;

    try {
      const user = await this.authService.loginWithGoogle();
      this.navigateAfterAuth(user);
    } catch (error: any) {
      this.isSubmitting = false;
      console.error('[Google Login Error]', error?.code, error?.message);
      if (error.code === 'auth/popup-closed-by-user' || error.code === 'auth/cancelled-popup-request') {
        this.globalError = 'Cửa sổ đăng nhập đã bị đóng';
      } else if (error.code === 'auth/unauthorized-domain') {
        this.globalError = 'Domain chưa được cấp phép trong Firebase. Vui lòng thêm domain này vào Firebase Console → Authentication → Authorized domains.';
      } else if (error.code === 'auth/popup-blocked') {
        this.globalError = 'Popup bị trình duyệt chặn. Vui lòng cho phép popup và thử lại.';
      } else if (error.code === 'auth/operation-not-allowed') {
        this.globalError = 'Đăng nhập Google chưa được kích hoạt. Vui lòng bật trong Firebase Console.';
      } else {
        this.globalError = `Đã xảy ra lỗi: ${error?.code || error?.message || 'Vui lòng thử lại.'}`;
      }
    }
  }

  loginAsGuest() {
    // Guest login - sử dụng device-based auth (không dùng Firebase)
    localStorage.setItem('isGuest', 'true');
    localStorage.setItem('isLoggedIn', 'true');
    const hasPersonalized = localStorage.getItem('hasPersonalized') === 'true';
    this.router.navigateByUrl(hasPersonalized ? '/home' : '/welcome', {
      replaceUrl: true,
    });
  }

  private navigateAfterAuth(user?: any) {
    // Đã đăng nhập bằng Firebase - lưu thông tin
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('isFirebaseUser', 'true');

    if (user) {
      // Nếu API trả về hasPersonalized=true → cập nhật localStorage
      // Nếu API trả về false nhưng localStorage đã là true → giữ nguyên true
      // (tránh ghi đè khi user đã cá nhân hóa nhưng chưa sync lên DB)
      const localPersonalized = localStorage.getItem('hasPersonalized') === 'true';
      if (user.hasPersonalized || localPersonalized) {
        localStorage.setItem('hasPersonalized', 'true');
      } else {
        localStorage.setItem('hasPersonalized', 'false');
      }
      if (user.name && user.name !== 'Khách') localStorage.setItem('userName', user.name);
      if (user.avatar) localStorage.setItem('userAvatar', user.avatar);
      if (user.budget) localStorage.setItem('userBudget', user.budget);
      if (user.preferences?.length) localStorage.setItem('userPreferences', JSON.stringify(user.preferences));
      if (user.travelStyles?.length) localStorage.setItem('userTravelStyles', JSON.stringify(user.travelStyles));
    }

    const hasPersonalized = localStorage.getItem('hasPersonalized') === 'true';
    this.router.navigateByUrl(hasPersonalized ? '/home' : '/welcome', {
      replaceUrl: true,
    });
  }
}
