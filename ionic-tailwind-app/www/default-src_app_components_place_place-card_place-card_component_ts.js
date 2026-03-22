"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_place_place-card_place-card_component_ts"],{

/***/ 1867
/*!*********************************************************************!*\
  !*** ./src/app/components/place/place-card/place-card.component.ts ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaceCardComponent: () => (/* binding */ PlaceCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _services_firestore_favorites_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/firestore-favorites.service */ 9007);
var _staticBlock;






function PlaceCardComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \uD83D\uDD12 \u0110\u0103ng nh\u1EADp \u0111\u1EC3 l\u01B0u y\u00EAu th\u00EDch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PlaceCardComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.place.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", ctx_r1.place.reviewCount, ")");
  }
}
function PlaceCardComponent_div_0_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tag_r3);
  }
}
function PlaceCardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlaceCardComponent_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.navigateToPlace());
    })("keydown.enter", function PlaceCardComponent_div_0_Template_div_keydown_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.navigateToPlace());
    })("keydown.space", function PlaceCardComponent_div_0_Template_div_keydown_space_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.navigateToPlace());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PlaceCardComponent_div_0_div_1_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4)(3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("error", function PlaceCardComponent_div_0_Template_img_error_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onImgError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlaceCardComponent_div_0_Template_button_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onFavoriteClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 9)(8, "div", 10)(9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, PlaceCardComponent_div_0_div_11_Template, 7, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, PlaceCardComponent_div_0_span_17_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx_r1.place.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.showLoginToast);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.place.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx_r1.place.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx_r1.isFavorite ? "B\u1ECF y\u00EAu th\u00EDch " + ctx_r1.place.name : "Th\u00EAm v\u00E0o y\u00EAu th\u00EDch " + ctx_r1.place.name)("aria-pressed", ctx_r1.isFavorite);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r1.isFavorite ? "fill-red-500 text-red-500" : "text-gray-400");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r1.place.category === "signature" ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-sm font-medium" : "bg-gray-100 text-gray-700");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getCategoryLabel(ctx_r1.place.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.place.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.place.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.place.shortDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.place.tags);
  }
}
function PlaceCardComponent_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.place.rating);
  }
}
function PlaceCardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlaceCardComponent_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.navigateToPlace());
    })("keydown.enter", function PlaceCardComponent_div_1_Template_div_keydown_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.navigateToPlace());
    })("keydown.space", function PlaceCardComponent_div_1_Template_div_keydown_space_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.navigateToPlace());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("error", function PlaceCardComponent_div_1_Template_img_error_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onImgError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 25)(3, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, PlaceCardComponent_div_1_div_7_Template, 5, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlaceCardComponent_div_1_Template_button_click_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onFavoriteClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx_r1.place.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.place.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx_r1.place.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.place.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.place.shortDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.place.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx_r1.isFavorite ? "B\u1ECF y\u00EAu th\u00EDch " + ctx_r1.place.name : "Th\u00EAm v\u00E0o y\u00EAu th\u00EDch " + ctx_r1.place.name)("aria-pressed", ctx_r1.isFavorite);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r1.isFavorite ? "fill-red-500 text-red-500" : "text-gray-400");
  }
}
class PlaceCardComponent {
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
    this.favoritesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_firestore_favorites_service__WEBPACK_IMPORTED_MODULE_5__.FirestoreFavoritesService);
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
    this.variant = "default";
    this.isFavorite = false;
    this.favorite = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.showLoginToast = false;
  }
  ngOnInit() {
    // isFavorite được quản lý bởi parent qua [isFavorite] binding + onFavoriteClick
    // Không tự gọi Firestore ở đây để tránh stale state khi page bị cache
  }
  navigateToPlace() {
    this.router.navigate(["/home/place", this.place.slug]);
  }
  getCategoryLabel(category) {
    const labels = {
      signature: "⭐ Đặc trưng",
      cafe: "Cafe",
      food: "Ăn uống",
      checkin: "Check-in",
      nature: "Thiên nhiên",
      homestay: "Homestay",
      rental: "🛵 Thuê xe"
    };
    return labels[category] || category;
  }
  onFavoriteClick(event) {
    event.preventDefault();
    event.stopPropagation();
    // Guest user → hiện thông báo thay vì fail âm thầm
    if (!this.favoritesService.isAuthenticated()) {
      this.showLoginToast = true;
      setTimeout(() => {
        this.showLoginToast = false;
        this.cdr.markForCheck();
      }, 2500);
      this.cdr.markForCheck();
      return;
    }
    const prev = this.isFavorite;
    this.isFavorite = !prev; // optimistic: đổi màu ngay
    this.favorite.emit(this.place);
    this.favoritesService.toggleFavorite({
      id: this.place.id,
      name: this.place.name,
      category: this.place.category,
      imageUrl: this.place.imageUrl
    }).then(newState => {
      // Firestore xác nhận → cập nhật theo kết quả thực
      this.isFavorite = newState;
      this.cdr.markForCheck(); // Promise ngoài zone → trigger CD
    }).catch(() => {
      // Lỗi → rollback về trạng thái cũ
      this.isFavorite = prev;
      this.cdr.markForCheck();
    });
  }
  onImgError(event) {
    const img = event.target;
    img.onerror = null;
    img.src = this.getPlaceholder();
  }
  getPlaceholder() {
    const categoryPlaceholders = {
      signature: "https://placehold.co/800x500/e2e8f0/64748b?text=Đặc+trưng",
      cafe: "https://placehold.co/800x500/e2e8f0/64748b?text=Cafe",
      food: "https://placehold.co/800x500/e2e8f0/64748b?text=Ăn+uống",
      checkin: "https://placehold.co/800x500/e2e8f0/64748b?text=Check-in",
      nature: "https://placehold.co/800x500/e2e8f0/64748b?text=Thiên+nhiên",
      homestay: "https://placehold.co/800x500/e2e8f0/64748b?text=Homestay",
      rental: "https://placehold.co/800x500/e2e8f0/64748b?text=Thuê+xe"
    };
    return categoryPlaceholders[this.place?.category] || "https://placehold.co/800x500/e2e8f0/64748b?text=Đà+Lạt";
  }
  static #_ = _staticBlock = () => (this.ɵfac = function PlaceCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PlaceCardComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: PlaceCardComponent,
    selectors: [["app-place-card"]],
    inputs: {
      place: "place",
      variant: "variant",
      isFavorite: "isFavorite"
    },
    outputs: {
      favorite: "favorite"
    },
    decls: 2,
    vars: 2,
    consts: [["role", "link", "tabindex", "0", "class", "block rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 relative", 3, "click", "keydown.enter", "keydown.space", 4, "ngIf"], ["role", "link", "tabindex", "0", "class", "flex gap-3 p-3 rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1", 3, "click", "keydown.enter", "keydown.space", 4, "ngIf"], ["role", "link", "tabindex", "0", 1, "block", "rounded-2xl", "border", "border-gray-100", "overflow-hidden", "hover:shadow-md", "transition-shadow", "cursor-pointer", "focus:outline-none", "focus:ring-2", "focus:ring-black", "focus:ring-offset-1", "relative", 3, "click", "keydown.enter", "keydown.space"], ["class", "absolute top-2 left-1/2 -translate-x-1/2 z-20 px-4 py-2 bg-gray-900 text-white text-xs rounded-full shadow-lg whitespace-nowrap animate-fade-in", 4, "ngIf"], [1, "relative", "aspect-[19/6]", "overflow-hidden"], ["loading", "lazy", 1, "w-full", "h-full", "object-cover", 3, "error", "src", "alt"], ["type", "button", 1, "absolute", "top-3", "right-3", "w-8", "h-8", "rounded-full", "bg-white/90", "flex", "items-center", "justify-center", "shadow-sm", "hover:bg-white", "focus:outline-none", "focus:ring-2", "focus:ring-black", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"], [1, "p-4"], [1, "flex", "items-center", "gap-2", "mb-2"], [1, "px-2", "py-0.5", "rounded-full", "text-xs"], ["class", "flex items-center gap-1", 4, "ngIf"], [1, "text-base", "font-medium", "text-gray-900", "mb-1"], [1, "text-sm", "text-gray-500", "line-clamp-2", "mb-2"], [1, "flex", "flex-wrap", "gap-1"], ["class", "text-xs text-gray-400", 4, "ngFor", "ngForOf"], [1, "absolute", "top-2", "left-1/2", "-translate-x-1/2", "z-20", "px-4", "py-2", "bg-gray-900", "text-white", "text-xs", "rounded-full", "shadow-lg", "whitespace-nowrap", "animate-fade-in"], [1, "flex", "items-center", "gap-1"], ["viewBox", "0 0 20 20", "aria-hidden", "true", 1, "w-4", "h-4", "fill-amber-400", "text-amber-400"], ["d", "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"], [1, "text-sm", "font-medium"], [1, "text-xs", "text-gray-400"], ["role", "link", "tabindex", "0", 1, "flex", "gap-3", "p-3", "rounded-xl", "border", "border-gray-100", "cursor-pointer", "hover:bg-gray-50", "transition-colors", "focus:outline-none", "focus:ring-2", "focus:ring-black", "focus:ring-offset-1", 3, "click", "keydown.enter", "keydown.space"], ["loading", "lazy", 1, "w-20", "h-20", "rounded-lg", "object-cover", "flex-shrink-0", 3, "error", "src", "alt"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-medium", "text-gray-900", "mb-1", "truncate"], [1, "text-xs", "text-gray-500", "line-clamp-2", "mb-1"], ["type", "button", 1, "self-start", "w-8", "h-8", "rounded-full", "hover:bg-gray-100", "flex", "items-center", "justify-center", "flex-shrink-0", "focus:outline-none", "focus:ring-2", "focus:ring-black", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "w-4", "h-4", "transition-colors"], ["viewBox", "0 0 20 20", "aria-hidden", "true", 1, "w-3.5", "h-3.5", "fill-amber-400", "text-amber-400"], [1, "text-xs"]],
    template: function PlaceCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PlaceCardComponent_div_0_Template, 18, 15, "div", 0)(1, PlaceCardComponent_div_1_Template, 11, 10, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.variant === "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.variant === "compact");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
    styles: [".line-clamp-2[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -8px);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, 0);\n  }\n}\n.animate-fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYWNlLWNhcmQuY29tcG9uZW50LnRzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNoYXRib3QlMjBhaVxcaW9uaWMtdGFpbHdpbmQtYXBwXFxzcmNcXGFwcFxcY29tcG9uZW50c1xccGxhY2VcXHBsYWNlLWNhcmRcXHBsYWNlLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUNBTjs7QURFSTtFQUNFO0lBQU8sVUFBQTtJQUFZLGdDQUFBO0VDR3ZCO0VERkk7SUFBSyxVQUFBO0lBQVksNkJBQUE7RUNNckI7QUFDRjtBRExJO0VBQ0UsK0JBQUE7QUNPTiIsImZpbGUiOiJwbGFjZS1jYXJkLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5saW5lLWNsYW1wLTIge1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gICAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC04cHgpOyB9XG4gICAgICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApOyB9XG4gICAgfVxuICAgIC5hbmltYXRlLWZhZGUtaW4ge1xuICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMC4ycyBlYXNlLW91dDtcbiAgICB9XG4gICIsIi5saW5lLWNsYW1wLTIge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLThweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gIH1cbn1cbi5hbmltYXRlLWZhZGUtaW4ge1xuICBhbmltYXRpb246IGZhZGVJbiAwLjJzIGVhc2Utb3V0O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wbGFjZS9wbGFjZS1jYXJkL3BsYWNlLWNhcmQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy4vLi4vLi4vY2hhdGJvdCUyMGFpL2lvbmljLXRhaWx3aW5kLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvcGxhY2UvcGxhY2UtY2FyZC9wbGFjZS1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FDQU47O0FERUk7RUFDRTtJQUFPLFVBQUE7SUFBWSxnQ0FBQTtFQ0d2QjtFREZJO0lBQUssVUFBQTtJQUFZLDZCQUFBO0VDTXJCO0FBQ0Y7QURMSTtFQUNFLCtCQUFBO0FDT047QURDQSw0aERBQTRoRCIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5saW5lLWNsYW1wLTIge1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gICAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC04cHgpOyB9XG4gICAgICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApOyB9XG4gICAgfVxuICAgIC5hbmltYXRlLWZhZGUtaW4ge1xuICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMC4ycyBlYXNlLW91dDtcbiAgICB9XG4gICIsIi5saW5lLWNsYW1wLTIge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLThweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gIH1cbn1cbi5hbmltYXRlLWZhZGUtaW4ge1xuICBhbmltYXRpb246IGZhZGVJbiAwLjJzIGVhc2Utb3V0O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
//# sourceMappingURL=default-src_app_components_place_place-card_place-card_component_ts.js.map