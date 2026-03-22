"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile_profile_page_ts"],{

/***/ 3901
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilePage: () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ 3366);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _services_firestore_trips_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/firestore-trips.service */ 6442);
/* harmony import */ var _services_firestore_chat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/firestore-chat.service */ 6268);
/* harmony import */ var _services_firestore_favorites_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/firestore-favorites.service */ 9007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;











function ProfilePage_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfilePage_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.goToWelcome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Ch\u1EC9nh s\u1EEDa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProfilePage_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "img", 34);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r1.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function ProfilePage_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"]((ctx_r1.user == null ? null : ctx_r1.user.avatar) || "\uD83E\uDDD1\u200D\uD83D\uDCBB");
  }
}
function ProfilePage_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\u2713 \u0110\u00E3 c\u00E1 nh\u00E2n h\u00F3a");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProfilePage_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Ch\u01B0a c\u00E1 nh\u00E2n h\u00F3a");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProfilePage_div_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" \uD83D\uDCB0 ", ctx_r1.getBudgetLabel(ctx_r1.user.budget), " ");
  }
}
function ProfilePage_div_13_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const style_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.getTravelStyleLabel(style_r3), " ");
  }
}
function ProfilePage_div_13_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pref_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.getPreferenceLabel(pref_r4), " ");
  }
}
function ProfilePage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfilePage_div_13_span_1_Template, 2, 1, "span", 38)(2, ProfilePage_div_13_span_2_Template, 2, 1, "span", 39)(3, ProfilePage_div_13_span_3_Template, 2, 1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.user == null ? null : ctx_r1.user.budget);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.user == null ? null : ctx_r1.user.travelStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.user == null ? null : ctx_r1.user.preferences);
  }
}
function ProfilePage_span_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.tripCount);
  }
}
function ProfilePage_span_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.chatCount);
  }
}
function ProfilePage_span_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.favoritesCount);
  }
}
class ProfilePage {
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    this.apiService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService);
    this.authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService);
    this.user = null;
    this.tripCount = 0;
    this.chatCount = 0;
    this.favoritesCount = 0;
    this.tripsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_firestore_trips_service__WEBPACK_IMPORTED_MODULE_6__.FirestoreTripsService);
    this.chatService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_firestore_chat_service__WEBPACK_IMPORTED_MODULE_7__.FirestoreChatService);
    this.favoritesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_firestore_favorites_service__WEBPACK_IMPORTED_MODULE_8__.FirestoreFavoritesService);
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef);
  }
  ngOnInit() {
    // User info: DB data ưu tiên khi đã cá nhân hóa, Firebase Auth chỉ là fallback
    this.apiService.getUser().subscribe(u => {
      const fbUser = this.authService.currentUser();
      if (fbUser && !u.hasPersonalized) {
        // Chỉ dùng Google data khi user CHƯA cá nhân hóa
        if (fbUser.photoURL) u.avatar = fbUser.photoURL;
        if (fbUser.displayName && (!u.name || u.name === 'Khách')) {
          u.name = fbUser.displayName;
        }
      }
      this.user = u;
    });
    // Counts từ Firestore — takeUntilDestroyed để tránh memory leak
    this.tripsService.getTrips().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.takeUntilDestroyed)(this.destroyRef)).subscribe(t => this.tripCount = t.length);
    this.chatService.getSessions().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.takeUntilDestroyed)(this.destroyRef)).subscribe(s => this.chatCount = s.length);
    this.favoritesService.getFavoriteIds().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.takeUntilDestroyed)(this.destroyRef)).subscribe(ids => this.favoritesCount = ids.length);
  }
  getBudgetLabel(budget) {
    const labels = {
      budget: "Tiết kiệm",
      mid: "Vừa phải",
      luxury: "Sang trọng"
    };
    return labels[budget] || budget;
  }
  getPreferenceLabel(pref) {
    const labels = {
      food: "🍜 Ẩm thực",
      cafe: "☕ Cafe",
      checkin: "📸 Check-in",
      relax: "🏨 Nghỉ dưỡng",
      nature: "🌲 Thiên nhiên",
      night: "🌙 Về đêm"
    };
    return labels[pref] || pref;
  }
  getTravelStyleLabel(style) {
    const labels = {
      couple: "💑 Cặp đôi",
      friends: "👥 Nhóm bạn",
      family: "👨‍👩‍👧 Gia đình",
      solo: "🎒 Solo"
    };
    return labels[style] || style;
  }
  goToTrips() {
    this.router.navigate(["/home/favorites"], {
      state: {
        tab: 'trips'
      }
    });
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
    this.router.navigate(["/welcome"], {
      queryParams: {
        mode: "update"
      }
    });
  }
  logout() {
    const isFirebaseUser = localStorage.getItem('isFirebaseUser');
    if (isFirebaseUser) {
      this.authService.logout();
    } else {
      // Guest user - xóa tất cả storage và về auth
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigateByUrl("/auth", {
        replaceUrl: true
      });
    }
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ProfilePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ProfilePage)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: ProfilePage,
    selectors: [["app-profile"]],
    decls: 74,
    vars: 13,
    consts: [[1, "bg-white", "flex", "flex-col", "overflow-hidden", 2, "height", "calc(100vh - 4rem - env(safe-area-inset-bottom))"], [1, "bg-gradient-to-br", "from-gray-900", "to-gray-800", "px-4", "pt-4", "pb-6", "relative"], ["class", "absolute top-12 right-4 text-xs font-medium text-white/60 bg-white/5 px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors", 3, "click", 4, "ngIf"], [1, "flex", "items-center", "gap-4"], [1, "w-16", "h-16", "rounded-full", "bg-white/10", "flex", "items-center", "justify-center", "text-3xl", "shrink-0", "overflow-hidden"], ["alt", "Avatar", "class", "w-full h-full object-cover rounded-full", 3, "src", 4, "ngIf"], [4, "ngIf"], [1, "text-xl", "font-semibold", "text-white"], [1, "text-white/60", "text-sm", "mt-0.5"], ["class", "text-green-400", 4, "ngIf"], ["class", "text-white/40", 4, "ngIf"], ["class", "mt-5 flex flex-wrap gap-2", 4, "ngIf"], [1, "grid", "grid-cols-3", "gap-px", "bg-gray-100", "border-b", "border-gray-100"], [1, "bg-white", "py-4", "text-center"], [1, "text-xl", "font-semibold", "text-gray-900"], [1, "text-xs", "text-gray-500"], [1, "p-4", "space-y-2"], [1, "w-full", "flex", "items-center", "justify-between", "p-4", "bg-gray-50", "rounded-xl", 3, "click"], [1, "flex", "items-center", "gap-3"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"], [1, "text-sm", "font-medium"], [1, "flex", "items-center", "gap-2"], ["class", "px-2 py-0.5 bg-black text-white text-xs rounded-full", 4, "ngIf"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], [1, "flex-1"], [1, "px-4", "pb-4"], [1, "w-full", "py-3", "text-red-600", "hover:bg-red-50", "rounded-xl", "font-medium", "text-sm", "border", "border-red-100", 3, "click"], [1, "absolute", "top-12", "right-4", "text-xs", "font-medium", "text-white/60", "bg-white/5", "px-3", "py-1.5", "rounded-full", "hover:bg-white/10", "transition-colors", 3, "click"], ["alt", "Avatar", 1, "w-full", "h-full", "object-cover", "rounded-full", 3, "src"], [1, "text-green-400"], [1, "text-white/40"], [1, "mt-5", "flex", "flex-wrap", "gap-2"], ["class", "px-2.5 py-1 bg-amber-500/20 border border-amber-500/30 rounded-lg text-amber-200 text-xs font-medium whitespace-nowrap", 4, "ngIf"], ["class", "px-2.5 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-lg text-emerald-200 text-xs font-medium whitespace-nowrap", 4, "ngFor", "ngForOf"], ["class", "px-2.5 py-1 bg-white/10 border border-white/10 rounded-lg text-white/80 text-xs font-medium whitespace-nowrap", 4, "ngFor", "ngForOf"], [1, "px-2.5", "py-1", "bg-amber-500/20", "border", "border-amber-500/30", "rounded-lg", "text-amber-200", "text-xs", "font-medium", "whitespace-nowrap"], [1, "px-2.5", "py-1", "bg-emerald-500/20", "border", "border-emerald-500/30", "rounded-lg", "text-emerald-200", "text-xs", "font-medium", "whitespace-nowrap"], [1, "px-2.5", "py-1", "bg-white/10", "border", "border-white/10", "rounded-lg", "text-white/80", "text-xs", "font-medium", "whitespace-nowrap"], [1, "px-2", "py-0.5", "bg-black", "text-white", "text-xs", "rounded-full"]],
    template: function ProfilePage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ProfilePage_button_2_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, ProfilePage_img_5_Template, 1, 1, "img", 5)(6, ProfilePage_span_6_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div")(8, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, ProfilePage_span_11_Template, 2, 0, "span", 9)(12, ProfilePage_span_12_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, ProfilePage_div_13_Template, 4, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "L\u1ECBch tr\u00ECnh");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 13)(21, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Cu\u1ED9c chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 13)(26, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Y\u00EAu th\u00EDch");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 16)(31, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfilePage_Template_button_click_31_listener() {
          return ctx.goToTrips();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](34, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "L\u1ECBch tr\u00ECnh c\u1EE7a t\u00F4i");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](38, ProfilePage_span_38_Template, 2, 1, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](40, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfilePage_Template_button_click_41_listener() {
          return ctx.goToHistory();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](44, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, "L\u1ECBch s\u1EED chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](48, ProfilePage_span_48_Template, 2, 1, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](50, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfilePage_Template_button_click_51_listener() {
          return ctx.goToFavorites();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](54, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, "\u0110\u1ECBa \u0111i\u1EC3m y\u00EAu th\u00EDch");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](58, ProfilePage_span_58_Template, 2, 1, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](60, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfilePage_Template_button_click_61_listener() {
          return ctx.goToSettings();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](64, "path", 28)(65, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67, "C\u00E0i \u0111\u1EB7t");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](69, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](70, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "div", 31)(72, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfilePage_Template_button_click_72_listener() {
          return ctx.logout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](73, " \u0110\u0103ng xu\u1EA5t ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.user == null ? null : ctx.user.hasPersonalized);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.user == null ? null : ctx.user.avatar) && ctx.user.avatar.startsWith("http"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !(ctx.user == null ? null : ctx.user.avatar) || !ctx.user.avatar.startsWith("http"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", (ctx.user == null ? null : ctx.user.name) || "Kh\u00E1ch", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.user == null ? null : ctx.user.hasPersonalized);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !(ctx.user == null ? null : ctx.user.hasPersonalized));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.user == null ? null : ctx.user.hasPersonalized);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.tripCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.chatCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.favoritesCount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.tripCount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.chatCount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.favoritesCount > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: [".scrollbar-hide[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\n.scrollbar-hide[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS50cyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNoYXRib3QlMjBhaVxcaW9uaWMtdGFpbHdpbmQtYXBwXFxzcmNcXGFwcFxccGFnZXNcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDTTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7QUNBUjs7QURFTTtFQUNFLGFBQUE7QUNDUiIsImZpbGUiOiJwcm9maWxlLnBhZ2UudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC5zY3JvbGxiYXItaGlkZSB7XG4gICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgICAgfVxuICAgICAgLnNjcm9sbGJhci1oaWRlOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgIiwiLnNjcm9sbGJhci1oaWRlIHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG59XG5cbi5zY3JvbGxiYXItaGlkZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2UudHMiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9jaGF0Ym90JTIwYWkvaW9uaWMtdGFpbHdpbmQtYXBwL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ007RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0FDQVI7O0FERU07RUFDRSxhQUFBO0FDQ1I7QURDQSw0MEJBQTQwQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLnNjcm9sbGJhci1oaWRlIHtcbiAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgICB9XG4gICAgICAuc2Nyb2xsYmFyLWhpZGU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAiLCIuc2Nyb2xsYmFyLWhpZGUge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbn1cblxuLnNjcm9sbGJhci1oaWRlOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ },

/***/ 9007
/*!*********************************************************!*\
  !*** ./src/app/services/firestore-favorites.service.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirestoreFavoritesService: () => (/* binding */ FirestoreFavoritesService)
/* harmony export */ });
/* harmony import */ var E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ 1159);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ 3783);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ 9082);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 271);

var _staticBlock;





class FirestoreFavoritesService {
  constructor() {
    this.firestore = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.Firestore);
    this.auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.Auth);
    this.injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector);
  }
  get uid() {
    return this.auth.currentUser?.uid ?? null;
  }
  /** Kiểm tra user đã đăng nhập Firebase chưa (guest = false) */
  isAuthenticated() {
    return !!this.auth.currentUser;
  }
  favoritesCol(uid) {
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.firestore, `users/${uid}/favorites`);
  }
  favoriteDoc(uid, placeId) {
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(this.firestore, `users/${uid}/favorites/${placeId}`);
  }
  /** Lấy danh sách favorite place IDs realtime */
  getFavoriteIds() {
    const uid = this.uid;
    if (!uid) return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]);
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.runInInjectionContext)(this.injector, () => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collectionData)(this.favoritesCol(uid), {
      idField: 'placeId'
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(docs => docs.map(d => d.placeId)), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]))));
  }
  /** Kiểm tra 1 place có trong favorites không */
  isFavorite(placeId) {
    var _this = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const uid = _this.uid;
      if (!uid) return false;
      try {
        const snap = yield (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.runInInjectionContext)(_this.injector, () => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.getDoc)(_this.favoriteDoc(uid, placeId)));
        return snap.exists();
      } catch {
        return false;
      }
    })();
  }
  /** Thêm place vào favorites */
  addFavorite(place) {
    var _this2 = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const uid = _this2.uid;
      if (!uid) return;
      try {
        const data = {
          placeId: place.id,
          placeName: place.name || '',
          addedAt: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.serverTimestamp)()
        };
        if (place.category) data['placeCategory'] = place.category;
        if (place.imageUrl) data['placeImageUrl'] = place.imageUrl;
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)(_this2.favoriteDoc(uid, place.id), data);
      } catch (e) {
        console.error('FirestoreFavoritesService.addFavorite error:', e?.code, e?.message, e);
        throw e;
      }
    })();
  }
  /** Xóa place khỏi favorites */
  removeFavorite(placeId) {
    var _this3 = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const uid = _this3.uid;
      if (!uid) return;
      try {
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.deleteDoc)(_this3.favoriteDoc(uid, placeId));
      } catch (e) {
        console.error('FirestoreFavoritesService.removeFavorite error:', e);
        throw e;
      }
    })();
  }
  /** Toggle favorite */
  toggleFavorite(place) {
    var _this4 = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentState = yield _this4.isFavorite(place.id);
      if (currentState) {
        yield _this4.removeFavorite(place.id);
        return false;
      } else {
        yield _this4.addFavorite(place);
        return true;
      }
    })();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function FirestoreFavoritesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FirestoreFavoritesService)();
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: FirestoreFavoritesService,
    factory: FirestoreFavoritesService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_pages_profile_profile_page_ts.js.map