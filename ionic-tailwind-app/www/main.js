(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 92
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _components_offline_banner_offline_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/offline-banner/offline-banner.component */ 7447);
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/network.service */ 2404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






class AppComponent {
  constructor() {
    // Inject NetworkService để kích hoạt listener ngay khi app khởi động
    this._network = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_network_service__WEBPACK_IMPORTED_MODULE_3__.NetworkService);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 3,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-offline-banner")(2, "ion-router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonRouterOutlet, _components_offline_banner_offline_banner_component__WEBPACK_IMPORTED_MODULE_2__.OfflineBannerComponent],
    encapsulation: 2
  }));
}
_staticBlock();

/***/ },

/***/ 2181
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ 1620);

const routes = [
// Redirect root to splash
{
  path: '',
  redirectTo: 'splash',
  pathMatch: 'full'
},
// Routes without BottomTabBar (full screen)
{
  path: 'splash',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_splash_splash_page_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/splash/splash.page */ 9081)).then(m => m.SplashPage)
}, {
  path: 'onboarding',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_onboarding_onboarding_page_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/onboarding/onboarding.page */ 1921)).then(m => m.OnboardingPage)
}, {
  path: 'auth',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-src_app_services_auth_service_ts"), __webpack_require__.e("src_app_pages_auth_auth_page_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/auth.page */ 7059)).then(m => m.AuthPage)
}, {
  path: 'welcome',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("src_app_pages_welcome_welcome_page_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/welcome/welcome.page */ 5153)).then(m => m.WelcomePage)
},
// Routes WITH BottomTabBar - parent path: 'home' — protected by AuthGuard
{
  path: 'home',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.authGuard],
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_components_layout_main-layout_main-layout_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/layout/main-layout/main-layout.component */ 1340)).then(m => m.MainLayoutComponent),
  children: [
  // /home → HomePage
  {
    path: '',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-src_app_services_auth_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_home_home_page_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.page */ 6393)).then(m => m.HomePage)
  }, {
    path: 'explore',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_place_place-card_place-card_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_explore_explore_page_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/explore/explore.page */ 9193)).then(m => m.ExplorePage)
  }, {
    path: 'chat',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-src_app_components_place_place-card_place-card_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_chat_chat_page_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/chat/chat.page */ 7339)).then(m => m.ChatPage)
  }, {
    path: 'favorites',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_place_place-card_place-card_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_favorites_favorites_page_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/favorites/favorites.page */ 5493)).then(m => m.FavoritesPage)
  }, {
    path: 'history',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_history_history_page_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/history/history.page */ 1177)).then(m => m.HistoryPage)
  }, {
    path: 'profile',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-src_app_services_auth_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_profile_profile_page_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.page */ 3901)).then(m => m.ProfilePage)
  }, {
    path: 'settings',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_settings_settings_page_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/settings/settings.page */ 4797)).then(m => m.SettingsPage)
  }, {
    path: 'place/:slug',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("default-src_app_components_place_place-card_place-card_component_ts"), __webpack_require__.e("src_app_pages_place-detail_place-detail_page_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/place-detail/place-detail.page */ 5017)).then(m => m.PlaceDetailPage)
  }, {
    path: 'trips/:id',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_trip-detail_trip-detail_page_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/trip-detail/trip-detail.page */ 2617)).then(m => m.TripDetailPage)
  }, {
    path: 'search',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_place_place-card_place-card_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_search_search_page_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/search/search.page */ 1499)).then(m => m.SearchPage)
  }, {
    path: 'notifications',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_notifications_notifications_page_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notifications/notifications.page */ 5925)).then(m => m.NotificationsPage)
  }]
},
// Catch all
{
  path: '**',
  redirectTo: 'splash'
}];

/***/ },

/***/ 7447
/*!***********************************************************************!*\
  !*** ./src/app/components/offline-banner/offline-banner.component.ts ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OfflineBannerComponent: () => (/* binding */ OfflineBannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/network.service */ 2404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;





function OfflineBannerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "path", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "B\u1EA1n \u0111ang ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " \u2014 \u0110ang hi\u1EC3n th\u1ECB d\u1EEF li\u1EC7u \u0111\u00E3 l\u01B0u");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class OfflineBannerComponent {
  constructor() {
    this.network = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_network_service__WEBPACK_IMPORTED_MODULE_2__.NetworkService);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function OfflineBannerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || OfflineBannerComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: OfflineBannerComponent,
    selectors: [["app-offline-banner"]],
    decls: 1,
    vars: 1,
    consts: [["class", "flex items-center gap-2 px-4 py-2 text-sm font-medium text-amber-800 bg-amber-50 border-b border-amber-200", "style", "background: var(--color-warning, #f59e0b18); color: var(--color-warning, #92400e); border-color: #fcd34d;", 4, "ngIf"], [1, "flex", "items-center", "gap-2", "px-4", "py-2", "text-sm", "font-medium", "text-amber-800", "bg-amber-50", "border-b", "border-amber-200", 2, "background", "var(--color-warning, #f59e0b18)", "color", "var(--color-warning, #92400e)", "border-color", "#fcd34d"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M18.364 5.636a9 9 0 010 12.728M15.536 8.464a5 5 0 010 7.072M12 12h.01\n             M8.464 15.536a5 5 0 010-7.072M5.636 18.364a9 9 0 010-12.728"]],
    template: function OfflineBannerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, OfflineBannerComponent_div_0_Template, 8, 0, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.network.isOnline());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    encapsulation: 2
  }));
}
_staticBlock();

/***/ },

/***/ 5081
/*!************************************!*\
  !*** ./src/app/firebase.config.ts ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firebaseConfig: () => (/* binding */ firebaseConfig),
/* harmony export */   provideFirebase: () => (/* binding */ provideFirebase)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 6725);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ 2630);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ 3783);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ 7163);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 5312);





// Firebase config giờ được đọc từ environment files
// Dev:  environment.ts
// Prod: environment.prod.ts (Angular CLI tự swap khi ng build --configuration=production)
const firebaseConfig = _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase;
// Singleton Firebase app
let app;
const provideFirebase = () => {
  if (!app) {
    app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
  }
  return {
    app,
    auth: (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app),
    firestore: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app),
    storage: (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app)
  };
};

/***/ },

/***/ 1620
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authGuard: () => (/* binding */ authGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ 9082);



/**
 * Auth Guard: bảo vệ routes /home/* — chỉ cho phép user đã đăng nhập
 * (Firebase Auth hoặc Guest với localStorage).
 *
 * Logic:
 * 1. Firebase Auth user → cho phép
 * 2. Guest user (localStorage isGuest=true) → cho phép
 * 3. Chưa đăng nhập → redirect về /auth
 */
const authGuard = () => {
  const auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.Auth);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router);
  // Firebase authenticated user
  if (auth.currentUser) {
    return true;
  }
  // Guest user (localStorage-based) hoặc Firebase user chưa re-init
  const isGuest = localStorage.getItem('isGuest') === 'true';
  const isFirebaseUser = localStorage.getItem('isFirebaseUser') === 'true';
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  if ((isGuest || isFirebaseUser) && isLoggedIn) {
    return true;
  }
  // Chưa đăng nhập → redirect
  return router.createUrlTree(['/auth']);
};

/***/ },

/***/ 2404
/*!*********************************************!*\
  !*** ./src/app/services/network.service.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NetworkService: () => (/* binding */ NetworkService)
/* harmony export */ });
/* harmony import */ var E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/network */ 5477);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);

var _staticBlock;




class NetworkService {
  constructor() {
    /** Signal theo dõi trạng thái online/offline */
    this.isOnline = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(true, ...(ngDevMode ? [{
      debugName: "isOnline"
    }] : []));
    /** Observable từ signal, dùng trong component/pipe */
    this.isOnline$ = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__.toObservable)(this.isOnline);
    this.listenerHandle = null;
    this.init();
  }
  init() {
    var _this = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Lấy trạng thái ban đầu
        const status = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_2__.Network.getStatus();
        _this.isOnline.set(status.connected);
        // Lắng nghe thay đổi
        _this.listenerHandle = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_2__.Network.addListener('networkStatusChange', status => {
          _this.isOnline.set(status.connected);
          if (status.connected) {
            console.log('📶 [Network] Back online');
          } else {
            console.warn('📵 [Network] Offline');
          }
        });
      } catch (e) {
        // Fallback cho browser/web: dùng navigator.onLine
        _this.isOnline.set(navigator.onLine);
        window.addEventListener('online', () => _this.isOnline.set(true));
        window.addEventListener('offline', () => _this.isOnline.set(false));
      }
    })();
  }
  getCurrentStatus() {
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const status = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_2__.Network.getStatus();
        return status;
      } catch {
        return {
          connected: navigator.onLine,
          connectionType: 'unknown'
        };
      }
    })();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function NetworkService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NetworkService)();
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: NetworkService,
    factory: NetworkService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 5312
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  apiBaseUrl: "",
  firebase: {
    apiKey: "AIzaSyDen9SILPp9WXux0ABu7NUyMcFgnpCOmyw",
    authDomain: "dalat-chatbot.firebaseapp.com",
    projectId: "dalat-chatbot",
    storageBucket: "dalat-chatbot.firebasestorage.app",
    messagingSenderId: "336020606793",
    appId: "1:336020606793:web:742c344687829d8bd81498",
    measurementId: "G-X3JZGP9LHQ"
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ },

/***/ 4429
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 2190);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular/standalone */ 7241);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/app */ 2945);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ 9082);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ 1159);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ 3783);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ 8335);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _app_app_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app/app.routes */ 2181);
/* harmony import */ var _app_firebase_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app/firebase.config */ 5081);











(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_9__.AppComponent, {
  providers: [(0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_4__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_4__.initializeApp)(_app_firebase_config__WEBPACK_IMPORTED_MODULE_11__.firebaseConfig)), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.initializeFirestore)((0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_4__.getApp)(), {
    localCache: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.persistentLocalCache)({
      tabManager: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.persistentMultipleTabManager)()
    })
  })), (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.provideAuth)(() => (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.getAuth)((0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_4__.getApp)())), (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__.provideStorage)(() => (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__.getStorage)((0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_4__.getApp)())), (0,_angular_router__WEBPACK_IMPORTED_MODULE_1__.provideRouter)(_app_app_routes__WEBPACK_IMPORTED_MODULE_10__.routes, (0,_angular_router__WEBPACK_IMPORTED_MODULE_1__.withComponentInputBinding)(), (0,_angular_router__WEBPACK_IMPORTED_MODULE_1__.withInMemoryScrolling)({
    scrollPositionRestoration: 'enabled'
  })), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.provideHttpClient)(), (0,_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_3__.provideIonicAngular)({
    mode: 'ios'
  })]
}).catch(err => console.error(err));

/***/ },

/***/ 6120
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ referencedExports: ,  namespace object ***!
  \****************************************************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-accordion_2.entry.js": [
		7518,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
		]
	],
	"./ion-action-sheet.entry.js": [
		1981,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
		]
	],
	"./ion-alert.entry.js": [
		1603,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
		]
	],
	"./ion-app_8.entry.js": [
		2273,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
		]
	],
	"./ion-avatar_3.entry.js": [
		9642,
		[
			"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
		]
	],
	"./ion-back-button.entry.js": [
		2095,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
		]
	],
	"./ion-backdrop.entry.js": [
		2335,
		[
			"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
		]
	],
	"./ion-breadcrumb_2.entry.js": [
		8221,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
		]
	],
	"./ion-button_2.entry.js": [
		7184,
		[
			"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
		]
	],
	"./ion-card_5.entry.js": [
		8759,
		[
			"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
		]
	],
	"./ion-checkbox.entry.js": [
		4248,
		[
			"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
		]
	],
	"./ion-chip.entry.js": [
		2244,
		[
			"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
		]
	],
	"./ion-col_3.entry.js": [
		1769,
		[
			"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
		]
	],
	"./ion-datetime-button.entry.js": [
		2569,
		[
			"default-node_modules_ionic_core_dist_esm_data-B9iGR5YO_js",
			"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
		]
	],
	"./ion-datetime_3.entry.js": [
		6534,
		[
			"default-node_modules_ionic_core_dist_esm_data-B9iGR5YO_js",
			"common",
			"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
		]
	],
	"./ion-fab_3.entry.js": [
		5458,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
		]
	],
	"./ion-img.entry.js": [
		654,
		[
			"node_modules_ionic_core_dist_esm_ion-img_entry_js"
		]
	],
	"./ion-infinite-scroll_2.entry.js": [
		6034,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
		]
	],
	"./ion-input-otp.entry.js": [
		381,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-input-otp_entry_js"
		]
	],
	"./ion-input-password-toggle.entry.js": [
		5196,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-input-password-toggle_entry_js"
		]
	],
	"./ion-input.entry.js": [
		761,
		[
			"default-node_modules_ionic_core_dist_esm_input_utils-Bxa_DQ7-_js-node_modules_ionic_core_dist-66891c",
			"common",
			"node_modules_ionic_core_dist_esm_ion-input_entry_js"
		]
	],
	"./ion-item-option_3.entry.js": [
		6492,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
		]
	],
	"./ion-item_8.entry.js": [
		9557,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
		]
	],
	"./ion-loading.entry.js": [
		8353,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
		]
	],
	"./ion-menu_3.entry.js": [
		1024,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
		]
	],
	"./ion-modal.entry.js": [
		9160,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
		]
	],
	"./ion-nav_2.entry.js": [
		393,
		[
			"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
		]
	],
	"./ion-picker-column-option.entry.js": [
		8442,
		[
			"node_modules_ionic_core_dist_esm_ion-picker-column-option_entry_js"
		]
	],
	"./ion-picker-column.entry.js": [
		3110,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-picker-column_entry_js"
		]
	],
	"./ion-picker.entry.js": [
		5575,
		[
			"node_modules_ionic_core_dist_esm_ion-picker_entry_js"
		]
	],
	"./ion-popover.entry.js": [
		6772,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
		]
	],
	"./ion-progress-bar.entry.js": [
		4810,
		[
			"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
		]
	],
	"./ion-radio_2.entry.js": [
		4639,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
		]
	],
	"./ion-range.entry.js": [
		628,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-range_entry_js"
		]
	],
	"./ion-refresher_2.entry.js": [
		852,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
		]
	],
	"./ion-reorder_2.entry.js": [
		1479,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
		]
	],
	"./ion-ripple-effect.entry.js": [
		4065,
		[
			"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
		]
	],
	"./ion-route_4.entry.js": [
		7971,
		[
			"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
		]
	],
	"./ion-searchbar.entry.js": [
		3184,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
		]
	],
	"./ion-segment-content.entry.js": [
		4312,
		[
			"node_modules_ionic_core_dist_esm_ion-segment-content_entry_js"
		]
	],
	"./ion-segment-view.entry.js": [
		4540,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-segment-view_entry_js"
		]
	],
	"./ion-segment_2.entry.js": [
		469,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
		]
	],
	"./ion-select-modal.entry.js": [
		7101,
		[
			"node_modules_ionic_core_dist_esm_ion-select-modal_entry_js"
		]
	],
	"./ion-select_3.entry.js": [
		8471,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
		]
	],
	"./ion-spinner.entry.js": [
		388,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
		]
	],
	"./ion-split-pane.entry.js": [
		2392,
		[
			"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
		]
	],
	"./ion-tab-bar_2.entry.js": [
		6059,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
		]
	],
	"./ion-tab_2.entry.js": [
		5427,
		[
			"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
		]
	],
	"./ion-text.entry.js": [
		198,
		[
			"node_modules_ionic_core_dist_esm_ion-text_entry_js"
		]
	],
	"./ion-textarea.entry.js": [
		1735,
		[
			"default-node_modules_ionic_core_dist_esm_input_utils-Bxa_DQ7-_js-node_modules_ionic_core_dist-66891c",
			"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
		]
	],
	"./ion-toast.entry.js": [
		7510,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
		]
	],
	"./ion-toggle.entry.js": [
		5297,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
		]
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids[1].map(__webpack_require__.e)).then(() => (__webpack_require__(id)));
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 6120;
module.exports = webpackAsyncContext;

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map