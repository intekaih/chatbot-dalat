"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_splash_splash_page_ts"],{

/***/ 9081
/*!*********************************************!*\
  !*** ./src/app/pages/splash/splash.page.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplashPage: () => (/* binding */ SplashPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;




class SplashPage {
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
    this.isLeaving = false;
  }
  ngOnInit() {
    setTimeout(() => {
      this.isLeaving = true;
      setTimeout(() => {
        this.checkAuthAndNavigate();
      }, 300);
    }, 2000);
  }
  checkAuthAndNavigate() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    const hasPersonalized = localStorage.getItem('hasPersonalized') === 'true';
    if (isLoggedIn === 'true') {
      if (!hasPersonalized) {
        // Đã đăng nhập nhưng chưa cá nhân hóa → vào /welcome
        this.router.navigateByUrl('/welcome', {
          replaceUrl: true
        });
      } else {
        this.router.navigateByUrl('/home', {
          replaceUrl: true
        });
      }
    } else if (hasSeenOnboarding === 'true') {
      this.router.navigateByUrl('/auth', {
        replaceUrl: true
      });
    } else {
      this.router.navigateByUrl('/onboarding', {
        replaceUrl: true
      });
    }
  }
  static #_ = _staticBlock = () => (this.ɵfac = function SplashPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SplashPage)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SplashPage,
    selectors: [["app-splash"]],
    decls: 12,
    vars: 2,
    consts: [[1, "min-h-screen", "bg-gradient-to-br", "from-gray-900", "to-gray-800", "flex", "flex-col", "items-center", "justify-center", "transition-opacity", "duration-300"], [1, "w-24", "h-24", "rounded-full", "bg-white/10", "flex", "items-center", "justify-center", "mb-8"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"], [1, "text-3xl", "font-semibold", "text-white", "mb-2"], [1, "text-gray-400", "mb-12"], [1, "flex", "gap-2"], [1, "w-2", "h-2", "bg-white", "rounded-full", "animate-bounce", 2, "animation-delay", "0ms"], [1, "w-2", "h-2", "bg-white", "rounded-full", "animate-bounce", 2, "animation-delay", "150ms"], [1, "w-2", "h-2", "bg-white", "rounded-full", "animate-bounce", 2, "animation-delay", "300ms"]],
    template: function SplashPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u0110\u00E0 L\u1EA1t Travel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Tr\u1EE3 l\u00FD du l\u1ECBch th\u00F4ng minh");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElement"](9, "div", 7)(10, "div", 8)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdomElementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("opacity-0", ctx.isLeaving);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
    encapsulation: 2
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_pages_splash_splash_page_ts.js.map