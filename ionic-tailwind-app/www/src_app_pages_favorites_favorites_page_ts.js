"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_favorites_favorites_page_ts"],{

/***/ 5493
/*!***************************************************!*\
  !*** ./src/app/pages/favorites/favorites.page.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FavoritesPage: () => (/* binding */ FavoritesPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6647);
/* harmony import */ var _components_place_place_card_place_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/place/place-card/place-card.component */ 1867);
/* harmony import */ var _components_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ui/empty-state/empty-state.component */ 5488);
/* harmony import */ var _services_firestore_favorites_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/firestore-favorites.service */ 9007);
/* harmony import */ var _services_firestore_trips_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/firestore-trips.service */ 6442);
/* harmony import */ var _services_firestore_places_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/firestore-places.service */ 7294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;












const _c0 = () => [1, 2, 3];
function FavoritesPage_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FavoritesPage_button_4_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.createNewTrip($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " T\u1EA1o m\u1EDBi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function FavoritesPage_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "div", 13);
  }
}
function FavoritesPage_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, FavoritesPage_div_12_div_1_Template, 1, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](1, _c0));
  }
}
function FavoritesPage_div_13_div_1_app_place_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-place-card", 19);
  }
  if (rf & 2) {
    const place_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("place", place_r3)("isFavorite", true);
  }
}
function FavoritesPage_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, FavoritesPage_div_13_div_1_app_place_card_1_Template, 1, 2, "app-place-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.favoritePlaces);
  }
}
function FavoritesPage_div_13_app_empty_state_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-empty-state", 20);
  }
}
function FavoritesPage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, FavoritesPage_div_13_div_1_Template, 2, 1, "div", 15)(2, FavoritesPage_div_13_app_empty_state_2_Template, 1, 0, "app-empty-state", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.favoritePlaces.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.favoritePlaces.length === 0);
  }
}
function FavoritesPage_div_14_div_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FavoritesPage_div_14_div_1_button_1_Template_button_click_0_listener() {
      const trip_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.goToTrip(trip_r5.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("error", function FavoritesPage_div_14_div_1_button_1_Template_img_error_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onImgError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 25)(3, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const trip_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("aria-label", "Xem l\u1ECBch tr\u00ECnh: " + trip_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", trip_r5.coverImage, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"])("alt", trip_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", trip_r5.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" ", trip_r5.startDate, " - ", trip_r5.endDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](trip_r5.status === "upcoming" ? "bg-blue-100 text-blue-700" : trip_r5.status === "completed" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", trip_r5.status === "upcoming" ? "S\u1EAFp t\u1EDBi" : trip_r5.status === "completed" ? "\u0110\u00E3 \u0111i" : "\u0110ang \u0111i", " ");
  }
}
function FavoritesPage_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, FavoritesPage_div_14_div_1_button_1_Template, 11, 9, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.trips);
  }
}
function FavoritesPage_div_14_app_empty_state_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-empty-state", 31);
  }
}
function FavoritesPage_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, FavoritesPage_div_14_div_1_Template, 2, 1, "div", 15)(2, FavoritesPage_div_14_app_empty_state_2_Template, 1, 0, "app-empty-state", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.trips.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.trips.length === 0);
  }
}
class FavoritesPage {
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
    this.firestorePlaces = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_firestore_places_service__WEBPACK_IMPORTED_MODULE_12__.FirestorePlacesService);
    this.favoritesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_firestore_favorites_service__WEBPACK_IMPORTED_MODULE_10__.FirestoreFavoritesService);
    this.tripsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_firestore_trips_service__WEBPACK_IMPORTED_MODULE_11__.FirestoreTripsService);
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DestroyRef);
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
    this.activeTab = "places";
    this.favoritePlaces = [];
    this.trips = [];
    this.isLoading = true;
  }
  ngOnInit() {
    this.checkTabState();
    // Load favorite places từ Firestore (realtime) + switchMap để không leak
    this.favoritesService.getFavoriteIds().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.takeUntilDestroyed)(this.destroyRef), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)(ids => {
      if (ids.length === 0) return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]);
      return this.firestorePlaces.getPlaces().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(places => places.filter(p => ids.includes(p.id))));
    })).subscribe({
      next: places => {
        this.favoritePlaces = places;
        this.isLoading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.isLoading = false;
        this.cdr.markForCheck();
      }
    });
    // Load trips từ Firestore (realtime)
    this.tripsService.getTrips().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.takeUntilDestroyed)(this.destroyRef)).subscribe({
      next: trips => {
        this.trips = trips;
      }
    });
  }
  createNewTrip(event) {
    event.stopPropagation();
    this.router.navigate(["/home/chat"], {
      state: {
        prompt: "Tạo lịch trình mới cho tôi ở Đà Lạt"
      }
    });
  }
  /** Kiểm tra navigation state để auto-chọn tab */
  checkTabState() {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state || window.history.state;
    if (state?.tab === 'trips') {
      this.activeTab = 'trips';
    }
  }
  ionViewWillEnter() {
    this.checkTabState();
  }
  goToTrip(tripId) {
    this.router.navigate(["/home/trips", tripId]);
  }
  onImgError(event) {
    const img = event.target;
    img.src = "https://placehold.co/400x300/e2e8f0/64748b?text=%C4%90%C3%A0+L%E1%BA%A1t";
  }
  static #_ = _staticBlock = () => (this.ɵfac = function FavoritesPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FavoritesPage)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: FavoritesPage,
    selectors: [["app-favorites"]],
    decls: 15,
    vars: 12,
    consts: [[1, "bg-white", "min-h-screen", 2, "padding-bottom", "calc(4rem + env(safe-area-inset-bottom))"], [1, "px-4", "pt-4", "pb-4", "border-b", "border-gray-100", "flex", "items-center", "justify-between"], [1, "text-2xl", "font-semibold", "text-gray-900"], ["class", "px-3 py-1.5 bg-black text-white text-sm rounded-full font-medium", 3, "click", 4, "ngIf"], [1, "relative", "border-b", "border-gray-100"], [1, "flex"], [1, "flex-1", "py-3", "text-sm", "font-medium", "text-center", "relative", 3, "click"], [1, "absolute", "bottom-0", "h-0.5", "bg-black", "rounded-full", "transition-all", "duration-300"], ["class", "p-4 space-y-4", 4, "ngIf"], ["class", "p-4", 4, "ngIf"], [1, "px-3", "py-1.5", "bg-black", "text-white", "text-sm", "rounded-full", "font-medium", 3, "click"], [1, "p-4", "space-y-4"], ["class", "h-32 bg-gray-100 rounded-2xl animate-pulse", 4, "ngFor", "ngForOf"], [1, "h-32", "bg-gray-100", "rounded-2xl", "animate-pulse"], [1, "p-4"], ["class", "space-y-4", 4, "ngIf"], ["icon", "\u2764\uFE0F", "title", "Ch\u01B0a c\u00F3 \u0111\u1ECBa \u0111i\u1EC3m y\u00EAu th\u00EDch", "message", "Nh\u1EA5n \u2764\uFE0F tr\u00EAn trang chi ti\u1EBFt \u0111\u1ECBa \u0111i\u1EC3m \u0111\u1EC3 l\u01B0u v\u00E0o \u0111\u00E2y!", 4, "ngIf"], [1, "space-y-4"], [3, "place", "isFavorite", 4, "ngFor", "ngForOf"], [3, "place", "isFavorite"], ["icon", "\u2764\uFE0F", "title", "Ch\u01B0a c\u00F3 \u0111\u1ECBa \u0111i\u1EC3m y\u00EAu th\u00EDch", "message", "Nh\u1EA5n \u2764\uFE0F tr\u00EAn trang chi ti\u1EBFt \u0111\u1ECBa \u0111i\u1EC3m \u0111\u1EC3 l\u01B0u v\u00E0o \u0111\u00E2y!"], ["icon", "\uD83D\uDDD3\uFE0F", "title", "Ch\u01B0a c\u00F3 l\u1ECBch tr\u00ECnh n\u00E0o", "message", "H\u1ECFi AI \u0111\u1EC3 t\u1EA1o l\u1ECBch tr\u00ECnh ph\u00F9 h\u1EE3p v\u1EDBi b\u1EA1n!", 4, "ngIf"], ["type", "button", "class", "w-full flex items-center gap-4 p-3 border border-gray-100 rounded-xl hover:bg-gray-50 text-left", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "w-full", "flex", "items-center", "gap-4", "p-3", "border", "border-gray-100", "rounded-xl", "hover:bg-gray-50", "text-left", 3, "click"], [1, "w-20", "h-20", "rounded-lg", "object-cover", "flex-shrink-0", 3, "error", "src", "alt"], [1, "flex-1", "min-w-0"], [1, "font-medium", "text-gray-900", "mb-1", "truncate"], [1, "text-xs", "text-gray-500", "mb-1"], [1, "inline-block", "px-2", "py-0.5", "rounded-full", "text-xs"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-400", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], ["icon", "\uD83D\uDDD3\uFE0F", "title", "Ch\u01B0a c\u00F3 l\u1ECBch tr\u00ECnh n\u00E0o", "message", "H\u1ECFi AI \u0111\u1EC3 t\u1EA1o l\u1ECBch tr\u00ECnh ph\u00F9 h\u1EE3p v\u1EDBi b\u1EA1n!"]],
    template: function FavoritesPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "\u0110\u00E3 l\u01B0u");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, FavoritesPage_button_4_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FavoritesPage_Template_button_click_7_listener() {
          return ctx.activeTab = "places";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FavoritesPage_Template_button_click_9_listener() {
          return ctx.activeTab = "trips";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, FavoritesPage_div_12_Template, 2, 2, "div", 8)(13, FavoritesPage_div_13_Template, 3, 2, "div", 9)(14, FavoritesPage_div_14_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.activeTab === "trips");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](ctx.activeTab === "places" ? "text-black" : "text-gray-400");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" \u2764\uFE0F \u0110\u1ECBa \u0111i\u1EC3m (", ctx.favoritePlaces.length, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](ctx.activeTab === "trips" ? "text-black" : "text-gray-400");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" \uD83D\uDDD3\uFE0F L\u1ECBch tr\u00ECnh (", ctx.trips.length, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](ctx.activeTab === "places" ? "left-0 w-1/2" : "left-1/2 w-1/2");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.activeTab === "places");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.activeTab === "trips");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _components_place_place_card_place_card_component__WEBPACK_IMPORTED_MODULE_8__.PlaceCardComponent, _components_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_9__.EmptyStateComponent],
    encapsulation: 2
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_pages_favorites_favorites_page_ts.js.map