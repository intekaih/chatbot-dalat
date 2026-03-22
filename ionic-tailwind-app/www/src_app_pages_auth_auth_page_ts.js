"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_auth_page_ts"],{

/***/ 7059
/*!*****************************************!*\
  !*** ./src/app/pages/auth/auth.page.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthPage: () => (/* binding */ AuthPage)
/* harmony export */ });
/* harmony import */ var E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api.service */ 3366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2481);

var _staticBlock;









function AuthPage_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "svg", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.globalError);
  }
}
function AuthPage_p_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.emailError, " ");
  }
}
function AuthPage__svg_svg_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "svg", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "path", 43)(2, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AuthPage__svg_svg_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "svg", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AuthPage_p_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.passwordError, " ");
  }
}
function AuthPage_div_31_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.confirmError, " ");
  }
}
function AuthPage_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AuthPage_div_31_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.confirmPassword, $event) || (ctx_r0.confirmPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function AuthPage_div_31_Template_input_blur_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      ctx_r0.touchedConfirm = true;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.validateConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AuthPage_div_31_p_5_Template, 4, 1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("w-full pl-12 pr-4 py-3 bg-gray-50 border rounded-xl text-sm focus:ring-2 focus:ring-black focus:outline-none transition-colors " + (ctx_r0.confirmError && ctx_r0.touchedConfirm ? "border-red-400 bg-red-50" : "border-gray-200"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx_r0.showPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.confirmPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.confirmError && ctx_r0.touchedConfirm);
  }
}
function AuthPage__svg_svg_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "svg", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "circle", 49)(2, "path", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
class AuthPage {
  constructor() {
    this.isLogin = true;
    this.isSubmitting = false;
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
    this.showPassword = false;
    // touched flags — chỉ hiện lỗi sau khi user đã blur vào field
    this.touchedEmail = false;
    this.touchedPassword = false;
    this.touchedConfirm = false;
    this.emailError = "";
    this.passwordError = "";
    this.confirmError = "";
    this.globalError = "";
    this.EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
    this.authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService);
    this.apiService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService);
  }
  switchMode(login) {
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
  validateEmail() {
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
  validatePassword() {
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
  validateConfirm() {
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
  clearErrors() {
    this.emailError = "";
    this.passwordError = "";
    this.confirmError = "";
    this.globalError = "";
  }
  isFormValid() {
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
  onSubmit() {
    var _this = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.globalError = "";
      if (!_this.isFormValid()) return;
      _this.isSubmitting = true;
      try {
        let user = null;
        if (_this.isLogin) {
          user = yield _this.authService.login(_this.email, _this.password);
        } else {
          user = yield _this.authService.register(_this.email, _this.password, _this.email.split('@')[0]);
        }
        _this.navigateAfterAuth(user);
      } catch (error) {
        _this.isSubmitting = false;
        // Handle Firebase auth errors
        if (error.code === 'auth/invalid-email') {
          _this.emailError = 'Email không hợp lệ';
        } else if (error.code === 'auth/user-not-found') {
          _this.emailError = 'Tài khoản không tồn tại';
        } else if (error.code === 'auth/wrong-password') {
          _this.passwordError = 'Mật khẩu không đúng';
        } else if (error.code === 'auth/email-already-in-use') {
          _this.emailError = 'Email đã được sử dụng';
        } else if (error.code === 'auth/weak-password') {
          _this.passwordError = 'Mật khẩu quá yếu';
        } else {
          _this.globalError = 'Đã xảy ra lỗi. Vui lòng thử lại.';
        }
      }
    })();
  }
  loginWithGoogle() {
    var _this2 = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.globalError = "";
      _this2.isSubmitting = true;
      try {
        const user = yield _this2.authService.loginWithGoogle();
        _this2.navigateAfterAuth(user);
      } catch (error) {
        _this2.isSubmitting = false;
        console.error('[Google Login Error]', error?.code, error?.message);
        if (error.code === 'auth/popup-closed-by-user' || error.code === 'auth/cancelled-popup-request') {
          _this2.globalError = 'Cửa sổ đăng nhập đã bị đóng';
        } else if (error.code === 'auth/unauthorized-domain') {
          _this2.globalError = 'Domain chưa được cấp phép trong Firebase. Vui lòng thêm domain này vào Firebase Console → Authentication → Authorized domains.';
        } else if (error.code === 'auth/popup-blocked') {
          _this2.globalError = 'Popup bị trình duyệt chặn. Vui lòng cho phép popup và thử lại.';
        } else if (error.code === 'auth/operation-not-allowed') {
          _this2.globalError = 'Đăng nhập Google chưa được kích hoạt. Vui lòng bật trong Firebase Console.';
        } else {
          _this2.globalError = `Đã xảy ra lỗi: ${error?.code || error?.message || 'Vui lòng thử lại.'}`;
        }
      }
    })();
  }
  loginAsGuest() {
    // Guest login - sử dụng device-based auth (không dùng Firebase)
    localStorage.setItem('isGuest', 'true');
    localStorage.setItem('isLoggedIn', 'true');
    // Kiểm tra DB trước để xác định hasPersonalized
    this.apiService.getUser().subscribe({
      next: user => {
        this.apiService.cacheUserToLocalStorage(user);
        this.router.navigateByUrl(user.hasPersonalized ? '/home' : '/welcome', {
          replaceUrl: true
        });
      }
    });
  }
  navigateAfterAuth(user) {
    // Đã đăng nhập bằng Firebase - lưu thông tin
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('isFirebaseUser', 'true');
    if (user) {
      // Cache user data từ API vào localStorage
      const localPersonalized = localStorage.getItem('hasPersonalized') === 'true';
      this.apiService.cacheUserToLocalStorage({
        id: user.id || '',
        name: user.name || 'Khách',
        avatar: user.avatar || '🧑‍💻',
        preferences: user.preferences || [],
        travelStyles: user.travelStyles || [],
        budget: user.budget || 'mid',
        hasPersonalized: user.hasPersonalized || localPersonalized
      });
    }
    const hasPersonalized = localStorage.getItem('hasPersonalized') === 'true';
    this.router.navigateByUrl(hasPersonalized ? '/home' : '/welcome', {
      replaceUrl: true
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AuthPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuthPage)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: AuthPage,
    selectors: [["app-auth"]],
    decls: 52,
    vars: 22,
    consts: [[1, "min-h-screen", "bg-white", "flex", "flex-col", "px-6", "py-8"], [1, "flex", "flex-col", "items-center", "mb-8"], [1, "w-16", "h-16", "rounded-full", "bg-gray-100", "flex", "items-center", "justify-center", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"], [1, "text-2xl", "font-semibold", "text-gray-900"], [1, "text-gray-500", "text-sm"], [1, "flex", "bg-gray-100", "rounded-full", "p-1", "mb-6"], [1, "flex-1", "py-2", "rounded-full", "text-sm", "font-medium", "transition-colors", 3, "click"], ["class", "mb-4 px-4 py-3 bg-red-50 border border-red-100 rounded-xl flex items-start gap-2", 4, "ngIf"], ["novalidate", "", 1, "space-y-4", 3, "ngSubmit"], [1, "relative"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-4", "top-1/2", "-translate-y-1/2", "w-5", "h-5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], ["type", "email", "name", "email", "placeholder", "Email", "aria-label", "\u0110\u1ECBa ch\u1EC9 email", "autocomplete", "email", 3, "ngModelChange", "blur", "ngModel"], ["class", "mt-1.5 ml-1 text-xs text-red-500 flex items-center gap-1", 4, "ngIf"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"], ["name", "password", "placeholder", "M\u1EADt kh\u1EA9u", "aria-label", "M\u1EADt kh\u1EA9u", "autocomplete", "current-password", 3, "ngModelChange", "blur", "type", "ngModel"], ["type", "button", 1, "absolute", "right-4", "top-1/2", "-translate-y-1/2", "text-gray-400", "hover:text-gray-600", 3, "click"], ["class", "w-5 h-5", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], [4, "ngIf"], ["type", "submit", 1, "w-full", "py-3", "rounded-full", "font-medium", "mt-2", "flex", "items-center", "justify-center", "gap-2", "transition-colors", 3, "disabled"], ["class", "w-4 h-4 animate-spin", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "flex", "items-center", "gap-4", "my-6"], [1, "flex-1", "h-px", "bg-gray-200"], [1, "text-xs", "text-gray-400"], ["type", "button", 1, "w-full", "py-3", "bg-white", "border", "border-gray-200", "rounded-xl", "font-medium", "flex", "items-center", "justify-center", "gap-3", "hover:bg-gray-50", "transition-colors", 3, "click"], ["viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["fill", "#4285F4", "d", "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"], ["fill", "#34A853", "d", "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"], ["fill", "#FBBC05", "d", "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"], ["fill", "#EA4335", "d", "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"], [1, "text-center", "mt-4"], ["type", "button", 1, "text-sm", "text-gray-500", "hover:text-gray-700", 3, "click"], [1, "text-black", "underline"], [1, "mb-4", "px-4", "py-3", "bg-red-50", "border", "border-red-100", "rounded-xl", "flex", "items-start", "gap-2"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-red-500", "flex-shrink-0", "mt-0.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-sm", "text-red-600"], [1, "mt-1.5", "ml-1", "text-xs", "text-red-500", "flex", "items-center", "gap-1"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-3", "h-3"], ["fill-rule", "evenodd", "d", "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", "clip-rule", "evenodd"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], ["name", "confirmPassword", "placeholder", "X\u00E1c nh\u1EADn m\u1EADt kh\u1EA9u", "aria-label", "X\u00E1c nh\u1EADn m\u1EADt kh\u1EA9u", "autocomplete", "new-password", 3, "ngModelChange", "blur", "type", "ngModel"], ["fill", "none", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "animate-spin"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"]],
    template: function AuthPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\u0110\u00E0 L\u1EA1t Travel AI");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Tr\u1EE3 l\u00FD du l\u1ECBch th\u00F4ng minh");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 7)(10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AuthPage_Template_button_click_10_listener() {
          return ctx.switchMode(true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " \u0110\u0103ng nh\u1EADp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AuthPage_Template_button_click_12_listener() {
          return ctx.switchMode(false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " \u0110\u0103ng k\u00FD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, AuthPage_div_14_Template, 5, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function AuthPage_Template_form_ngSubmit_15_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div")(17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AuthPage_Template_input_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function AuthPage_Template_input_blur_20_listener() {
          ctx.touchedEmail = true;
          return ctx.validateEmail();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, AuthPage_p_21_Template, 4, 1, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div")(23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AuthPage_Template_input_ngModelChange_26_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("blur", function AuthPage_Template_input_blur_26_listener() {
          ctx.touchedPassword = true;
          return ctx.validatePassword();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AuthPage_Template_button_click_27_listener() {
          return ctx.showPassword = !ctx.showPassword;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, AuthPage__svg_svg_28_Template, 3, 0, "svg", 19)(29, AuthPage__svg_svg_29_Template, 2, 0, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, AuthPage_p_30_Template, 4, 1, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, AuthPage_div_31_Template, 6, 5, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, AuthPage__svg_svg_33_Template, 3, 0, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "ho\u1EB7c");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AuthPage_Template_button_click_40_listener() {
          return ctx.loginWithGoogle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "svg", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "path", 28)(43, "path", 29)(44, "path", 30)(45, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, " Ti\u1EBFp t\u1EE5c v\u1EDBi Google ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 32)(48, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AuthPage_Template_button_click_48_listener() {
          return ctx.loginAsGuest();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, " Ti\u1EBFp t\u1EE5c v\u1EDBi t\u01B0 c\u00E1ch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "kh\u00E1ch");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.isLogin ? "bg-white text-black shadow-sm" : "text-gray-500");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](!ctx.isLogin ? "bg-white text-black shadow-sm" : "text-gray-500");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.globalError);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("w-full pl-12 pr-4 py-3 bg-gray-50 border rounded-xl text-sm focus:ring-2 focus:ring-black focus:outline-none transition-colors " + (ctx.emailError && ctx.touchedEmail ? "border-red-400 bg-red-50" : "border-gray-200"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.emailError && ctx.touchedEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("w-full pl-12 pr-12 py-3 bg-gray-50 border rounded-xl text-sm focus:ring-2 focus:ring-black focus:outline-none transition-colors " + (ctx.passwordError && ctx.touchedPassword ? "border-red-400 bg-red-50" : "border-gray-200"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.passwordError && ctx.touchedPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.isSubmitting ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isSubmitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isSubmitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.isSubmitting ? "\u0110ang x\u1EED l\u00FD..." : ctx.isLogin ? "\u0110\u0103ng nh\u1EADp" : "\u0110\u0103ng k\u00FD", " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    encapsulation: 2
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_pages_auth_auth_page_ts.js.map