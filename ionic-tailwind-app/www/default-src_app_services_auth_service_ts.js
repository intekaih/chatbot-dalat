"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_auth_service_ts"],{

/***/ 4796
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3705);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ 9082);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ 2630);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ 1159);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ 3783);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api.service */ 3366);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/core */ 4070);

var _staticBlock;








class AuthService {
  constructor() {
    var _this = this;
    this.auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.Auth);
    this.firestore = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.Firestore);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router);
    this.apiService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_api_service__WEBPACK_IMPORTED_MODULE_9__.ApiService);
    this.injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector);
    this._currentUser = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null, ...(ngDevMode ? [{
      debugName: "_currentUser"
    }] : []));
    this._userProfile = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null, ...(ngDevMode ? [{
      debugName: "_userProfile"
    }] : []));
    this._loading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(true, ...(ngDevMode ? [{
      debugName: "_loading"
    }] : []));
    this.currentUser = this._currentUser.asReadonly();
    this.userProfile = this._userProfile.asReadonly();
    this.loading = this._loading.asReadonly();
    this.isAuthenticated = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => !!this._currentUser(), ...(ngDevMode ? [{
      debugName: "isAuthenticated"
    }] : []));
    this._initialAuthChecked = false;
    (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(this.auth, /*#__PURE__*/function () {
      var _ref = (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
        _this._currentUser.set(user);
        if (user) {
          yield _this.loadUserProfile(user.uid);
        } else {
          _this._userProfile.set(null);
          // Nếu không phải lần load đầu tiên & không phải guest & đang trong app
          // → user bị sign out (token hết hạn, revoke, sign out từ tab khác)
          if (_this._initialAuthChecked) {
            const isGuest = localStorage.getItem('isGuest') === 'true';
            if (!isGuest && localStorage.getItem('isLoggedIn') === 'true') {
              // Clear stale auth state
              localStorage.removeItem('isLoggedIn');
              localStorage.removeItem('hasPersonalized');
              localStorage.removeItem('firebase_email');
              localStorage.removeItem('isFirebaseUser');
              localStorage.removeItem('device_id');
              sessionStorage.clear();
              _this.router.navigateByUrl('/auth', {
                replaceUrl: true
              });
            }
          }
        }
        _this._initialAuthChecked = true;
        _this._loading.set(false);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    if (_capacitor_core__WEBPACK_IMPORTED_MODULE_10__.Capacitor.isNativePlatform()) {
      (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.getRedirectResult)(this.auth).then(/*#__PURE__*/function () {
        var _ref2 = (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
          if (result?.user) {
            const user = result.user;
            const userDoc = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_this.firestore, 'users', user.uid));
            if (!userDoc.exists()) {
              yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_this.firestore, 'users', user.uid), {
                uid: user.uid,
                email: user.email || '',
                displayName: user.displayName || 'User',
                photoURL: user.photoURL || '',
                preferences: [],
                createdAt: new Date(),
                updatedAt: new Date()
              });
            }
            localStorage.setItem('firebase_email', user.email || '');
            localStorage.setItem('device_id', user.uid);
            const idToken = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.getIdToken)(user);
            yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(_this.apiService.syncFirebaseUser(idToken, user.email || '', user.displayName || '', user.photoURL || ''));
          }
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }()).catch(() => {});
    }
  }
  loadUserProfile(uid) {
    var _this2 = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const userDoc = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_this2.firestore, 'users', uid));
      if (userDoc.exists()) {
        _this2._userProfile.set(userDoc.data());
      }
    })();
  }
  login(email, password) {
    var _this3 = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Lưu old device-id trước khi override (dùng để migrate guest data)
      const oldDeviceId = localStorage.getItem('device_id') || '';
      const result = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(_this3.auth, email, password);
      yield _this3.updateLastLogin(result.user.uid);
      // Lưu Firebase email và sync backend bằng ID Token
      localStorage.setItem('firebase_email', result.user.email || '');
      localStorage.setItem('device_id', result.user.uid); // Override device_id to link with backend user
      // Lấy ID Token và sync với backend
      const idToken = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.getIdToken)(result.user);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(_this3.apiService.syncFirebaseUser(idToken, result.user.email || '', result.user.displayName || '', result.user.photoURL || '', oldDeviceId));
    })();
  }
  register(email, password, displayName) {
    var _this4 = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Lưu old device-id trước khi override
      const oldDeviceId = localStorage.getItem('device_id') || '';
      const result = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.createUserWithEmailAndPassword)(_this4.auth, email, password);
      const userData = {
        uid: result.user.uid,
        email: result.user.email || email,
        displayName,
        photoURL: '',
        preferences: [],
        createdAt: new Date(),
        updatedAt: new Date()
      };
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_this4.firestore, 'users', result.user.uid), userData);
      if (result.user) {
        yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.updateProfile)(result.user, {
          displayName
        });
      }
      // Lưu Firebase email và sync với backend bằng ID Token
      localStorage.setItem('firebase_email', result.user.email || '');
      localStorage.setItem('device_id', result.user.uid); // Override device_id
      // Lấy ID Token và sync với backend
      const idToken = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.getIdToken)(result.user);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(_this4.apiService.syncFirebaseUser(idToken, result.user.email || '', displayName, '', oldDeviceId));
    })();
  }
  /** Helper: chạy Firebase SDK call trong injection context (tránh AngularFire zone warning) */
  runInCtx(fn) {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.runInInjectionContext)(this.injector, fn);
  }
  loginWithGoogle() {
    var _this5 = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const provider = new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.GoogleAuthProvider();
      // Lưu old device-id trước khi override
      const oldDeviceId = localStorage.getItem('device_id') || '';
      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_10__.Capacitor.isNativePlatform()) {
        yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithRedirect)(_this5.auth, provider);
        return null;
      }
      // Wrap TỪNG Firebase call trong injection context (context mất sau mỗi await)
      const result = yield _this5.runInCtx(() => (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(_this5.auth, provider));
      const userDoc = yield _this5.runInCtx(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_this5.firestore, 'users', result.user.uid)));
      if (!userDoc.exists()) {
        const userData = {
          uid: result.user.uid,
          email: result.user.email || '',
          displayName: result.user.displayName || 'User',
          photoURL: result.user.photoURL || '',
          preferences: [],
          createdAt: new Date(),
          updatedAt: new Date()
        };
        yield _this5.runInCtx(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_this5.firestore, 'users', result.user.uid), userData));
      }
      localStorage.setItem('firebase_email', result.user.email || '');
      localStorage.setItem('device_id', result.user.uid);
      const idToken = yield _this5.runInCtx(() => (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.getIdToken)(result.user));
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(_this5.apiService.syncFirebaseUser(idToken, result.user.email || '', result.user.displayName || '', result.user.photoURL || '', oldDeviceId));
    })();
  }
  logout() {
    var _this6 = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(_this6.auth);
      _this6._userProfile.set(null);
      // ── Auth & app state ─────────────────────────────────────────
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('hasSeenOnboarding');
      localStorage.removeItem('hasPersonalized');
      localStorage.removeItem('firebase_email');
      localStorage.removeItem('isFirebaseUser');
      localStorage.removeItem('isGuest');
      localStorage.removeItem('device_id');
      // ── Profile / preferences của user (dùng bởi ApiService & AI) ─
      localStorage.removeItem('userName');
      localStorage.removeItem('userAvatar');
      localStorage.removeItem('userPreferences');
      localStorage.removeItem('userTravelStyles');
      localStorage.removeItem('userBudget');
      // ── Xóa sessionStorage: lịch sử chat, session ID ────────────
      sessionStorage.clear();
      _this6.router.navigateByUrl('/auth', {
        replaceUrl: true
      });
    })();
  }
  updateLastLogin(uid) {
    var _this7 = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_this7.firestore, 'users', uid), {
        lastLoginAt: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.serverTimestamp)()
      }, {
        merge: true
      });
    })();
  }
  updateUserProfile(data) {
    var _this8 = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const uid = _this8._currentUser()?.uid;
      if (!uid) return;
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_this8.firestore, 'users', uid), {
        ...data,
        updatedAt: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.serverTimestamp)()
      }, {
        merge: true
      });
      yield _this8.loadUserProfile(uid);
    })();
  }
  getCurrentUserId() {
    return this._currentUser()?.uid || null;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuthService)();
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 6196
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/firstValueFrom.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firstValueFrom: () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/EmptyError */ 3335);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscriber */ 9285);


function firstValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_1__.SafeSubscriber({
      next: value => {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: () => {
        if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__.EmptyError());
        }
      }
    });
    source.subscribe(subscriber);
  });
}

/***/ }

}]);
//# sourceMappingURL=default-src_app_services_auth_service_ts.js.map