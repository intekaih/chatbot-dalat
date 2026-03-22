"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_onboarding_onboarding_page_ts"],{

/***/ 1921
/*!*****************************************************!*\
  !*** ./src/app/pages/onboarding/onboarding.page.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnboardingPage: () => (/* binding */ OnboardingPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;





function OnboardingPage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div");
  }
  if (rf & 2) {
    const idx_r1 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](idx_r1 === ctx_r1.currentSlide ? "w-8 h-2 bg-black rounded-full" : "w-2 h-2 bg-gray-200 rounded-full");
  }
}
class OnboardingPage {
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
    this.slides = [{
      emoji: '🌲',
      title: 'Khám phá Đà Lạt',
      description: 'Trợ lý AI giúp bạn tìm kiếm địa điểm, lên lịch trình và khám phá Đà Lạt một cách thông minh.'
    }, {
      emoji: '💬',
      title: 'Chat với AI',
      description: 'Hỏi bất cứ điều gì về du lịch Đà Lạt, AI sẽ tư vấn cho bạn ngay lập tức.'
    }, {
      emoji: '🗺️',
      title: 'Lên kế hoạch dễ dàng',
      description: 'Tạo lịch trình, theo dõi ngân sách và lưu địa điểm yêu thích chỉ trong một ứng dụng.'
    }];
    this.currentSlide = 0;
  }
  next() {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
    } else {
      this.finish();
    }
  }
  getButtonText() {
    return this.currentSlide === this.slides.length - 1 ? 'Bắt đầu' : 'Tiếp tục';
  }
  skip() {
    this.finish();
  }
  finish() {
    localStorage.setItem('hasSeenOnboarding', 'true');
    this.router.navigateByUrl('/auth', {
      replaceUrl: true
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function OnboardingPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || OnboardingPage)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: OnboardingPage,
    selectors: [["app-onboarding"]],
    decls: 17,
    vars: 5,
    consts: [[1, "min-h-screen", "bg-white", "flex", "flex-col"], [1, "flex", "justify-end", "p-4"], [1, "text-sm", "text-gray-500", 3, "click"], [1, "flex-1", "flex", "flex-col", "items-center", "justify-center", "px-6"], [1, "text-center", "w-full", "max-w-sm"], [1, "text-8xl", "mb-6"], [1, "text-2xl", "font-semibold", "text-gray-900", "mb-3"], [1, "text-gray-500"], [1, "flex", "justify-center", "gap-2", "py-6"], [3, "class", 4, "ngFor", "ngForOf"], [1, "p-4", "pb-8"], [1, "w-full", "py-3", "bg-black", "text-white", "rounded-full", "font-medium", "transition-all", "duration-300", "hover:bg-gray-800", 3, "click"]],
    template: function OnboardingPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OnboardingPage_Template_button_click_2_listener() {
          return ctx.skip();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "B\u1ECF qua");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, OnboardingPage_div_13_Template, 1, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10)(15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OnboardingPage_Template_button_click_15_listener() {
          return ctx.next();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.slides[ctx.currentSlide].emoji);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.slides[ctx.currentSlide].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.slides[ctx.currentSlide].description);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getButtonText(), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    encapsulation: 2
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_pages_onboarding_onboarding_page_ts.js.map