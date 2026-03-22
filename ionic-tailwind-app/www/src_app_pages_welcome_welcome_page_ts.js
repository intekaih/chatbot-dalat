"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_welcome_welcome_page_ts"],{

/***/ 5153
/*!***********************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WelcomePage: () => (/* binding */ WelcomePage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ 3366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;








function WelcomePage_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function WelcomePage_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Quay l\u1EA1i ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function WelcomePage_div_9_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function WelcomePage_div_9_button_7_Template_button_click_0_listener() {
      const av_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.selectAvatar(av_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const av_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r1.avatar === av_r5 ? "bg-black text-white scale-110" : "bg-gray-100 hover:bg-gray-200");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", av_r5, " ");
  }
}
function WelcomePage_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Ch\u00FAng t\u00F4i g\u1ECDi b\u1EA1n l\u00E0?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " \u0110\u1EB7t t\u00EAn cho tr\u1EA3i nghi\u1EC7m ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, WelcomePage_div_9_button_7_Template, 2, 3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function WelcomePage_div_9_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.name, $event) || (ctx_r1.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.avatars);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.name);
  }
}
function WelcomePage_div_10_button_6_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function WelcomePage_div_10_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function WelcomePage_div_10_button_6_Template_button_click_0_listener() {
      const pref_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.togglePreference(pref_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, WelcomePage_div_10_button_6_span_7_Template, 2, 0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pref_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r1.selectedPrefs.includes(pref_r7.id) ? "border-black bg-gray-50" : "border-gray-200 hover:border-gray-300");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](pref_r7.emoji);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](pref_r7.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](pref_r7.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectedPrefs.includes(pref_r7.id));
  }
}
function WelcomePage_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26)(1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " B\u1EA1n th\u00EDch g\u00EC? \uD83C\uDFAF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Ch\u1ECDn nhi\u1EC1u c\u0169ng \u0111\u01B0\u1EE3c! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, WelcomePage_div_10_button_6_Template, 8, 6, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.preferences);
  }
}
function WelcomePage_div_11_button_6_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function WelcomePage_div_11_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function WelcomePage_div_11_button_6_Template_button_click_0_listener() {
      const style_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.toggleTravelStyle(style_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, WelcomePage_div_11_button_6_span_7_Template, 2, 0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const style_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r1.selectedStyles.includes(style_r9.id) ? "border-black bg-gray-50" : "border-gray-200 hover:border-gray-300");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](style_r9.emoji);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](style_r9.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](style_r9.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectedStyles.includes(style_r9.id));
  }
}
function WelcomePage_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26)(1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " B\u1EA1n \u0111i c\u00F9ng ai? \u2708\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Ch\u1ECDn phong c\u00E1ch ph\u00F9 h\u1EE3p ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, WelcomePage_div_11_button_6_Template, 8, 6, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.travelStyles);
  }
}
function WelcomePage_div_12_button_6_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function WelcomePage_div_12_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function WelcomePage_div_12_button_6_Template_button_click_0_listener() {
      const budget_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.selectBudget(budget_r11.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 44)(4, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, WelcomePage_div_12_button_6_span_8_Template, 2, 0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const budget_r11 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r1.selectedBudget === budget_r11.id ? "border-black bg-gray-50" : "border-gray-200 hover:border-gray-300");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](budget_r11.emoji);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](budget_r11.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](budget_r11.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectedBudget === budget_r11.id);
  }
}
function WelcomePage_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26)(1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Ng\u00E2n s\u00E1ch m\u1ED7i ng\u00E0y? \uD83D\uDCB8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Ch\u00FAng t\u00F4i s\u1EBD g\u1EE3i \u00FD ph\u00F9 h\u1EE3p t\u00FAi ti\u1EC1n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, WelcomePage_div_12_button_6_Template, 9, 6, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.budgets);
  }
}
function WelcomePage_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div");
  }
  if (rf & 2) {
    const idx_r12 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](idx_r12 === ctx_r1.step ? "w-8 h-2 bg-black rounded-full" : "w-2 h-2 bg-gray-200 rounded-full");
  }
}
function WelcomePage__svg_svg_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "svg", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "circle", 48)(2, "path", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function WelcomePage_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function WelcomePage_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.skip());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " B\u1ECF qua, v\u00E0o th\u1EB3ng app ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class WelcomePage {
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    this.route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute);
    this.apiService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService);
    this.steps = [0, 1, 2, 3];
    this.step = 0;
    this.isSubmitting = false;
    this.isUpdateMode = false;
    this.avatars = ["🧑‍💻", "👩‍🦰", "👨‍🦱", "👩‍🦳", "🧔", "👩‍🎨", "🧑‍🌾", "👨‍✈️"];
    this.avatar = this.avatars[0];
    this.name = "";
    this.preferences = [{
      id: "food",
      emoji: "🍜",
      label: "Ẩm thực",
      desc: "Món ngon địa phương"
    }, {
      id: "cafe",
      emoji: "☕",
      label: "Cafe",
      desc: "Quán cà phê view đẹp"
    }, {
      id: "checkin",
      emoji: "📸",
      label: "Check-in",
      desc: "Địa điểm sống ảo"
    }, {
      id: "relax",
      emoji: "🏨",
      label: "Nghỉ dưỡng",
      desc: "Không gian thư giãn"
    }, {
      id: "nature",
      emoji: "🌲",
      label: "Thiên nhiên",
      desc: "Rừng, thác, hồ"
    }, {
      id: "night",
      emoji: "🌙",
      label: "Về đêm",
      desc: "Chợ đêm, bar, phố"
    }];
    this.selectedPrefs = [];
    this.travelStyles = [{
      id: "couple",
      emoji: "💑",
      label: "Cặp đôi",
      desc: "Lãng mạn, thơ mộng"
    }, {
      id: "friends",
      emoji: "👥",
      label: "Nhóm bạn",
      desc: "Vui vẻ, náo nhiệt"
    }, {
      id: "family",
      emoji: "👨‍👩‍👧",
      label: "Gia đình",
      desc: "An toàn, tiện nghi"
    }, {
      id: "solo",
      emoji: "🎒",
      label: "Solo",
      desc: "Tự do, khám phá"
    }];
    this.selectedStyles = [];
    this.budgets = [{
      id: "budget",
      emoji: "💰",
      label: "Tiết kiệm",
      desc: "Dưới 500k/ngày"
    }, {
      id: "mid",
      emoji: "💳",
      label: "Vừa phải",
      desc: "500k – 1.5tr/ngày"
    }, {
      id: "luxury",
      emoji: "✨",
      label: "Sang trọng",
      desc: "Trên 1.5tr/ngày"
    }];
    this.selectedBudget = "";
  }
  ngOnInit() {
    this.initForm();
  }
  ionViewWillEnter() {
    this.initForm();
  }
  initForm() {
    this.isUpdateMode = this.route.snapshot.queryParamMap.get("mode") === "update";
    // Reset step về 0 khi vào lại
    this.step = 0;
    this.isSubmitting = false;
    // Load data từ DB (API) trước, localStorage chỉ là cache fallback
    this.apiService.getUser().subscribe({
      next: user => {
        // Cache vào localStorage
        this.apiService.cacheUserToLocalStorage(user);
        // Nếu đã personalized và không phải update mode → redirect về home
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        if (user.hasPersonalized && isLoggedIn && !this.isUpdateMode) {
          this.router.navigateByUrl("/home", {
            replaceUrl: true
          });
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
      }
    });
  }
  selectAvatar(av) {
    this.avatar = av;
  }
  togglePreference(id) {
    const current = this.selectedPrefs.indexOf(id);
    if (current > -1) {
      this.selectedPrefs.splice(current, 1);
    } else {
      this.selectedPrefs.push(id);
    }
  }
  toggleTravelStyle(id) {
    const current = this.selectedStyles.indexOf(id);
    if (current > -1) {
      this.selectedStyles.splice(current, 1);
    } else {
      this.selectedStyles.push(id);
    }
  }
  selectBudget(id) {
    this.selectedBudget = id;
  }
  canNext() {
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
      this.router.navigateByUrl("/home/profile", {
        replaceUrl: true
      });
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
      hasPersonalized: false
    });
    localStorage.setItem("hasSeenOnboarding", "true");
    localStorage.setItem("isLoggedIn", "true");
    this.router.navigateByUrl("/home", {
      replaceUrl: true
    });
  }
  complete() {
    if (this.isSubmitting) return;
    this.isSubmitting = true;
    const name = this.name.trim() || "Khách";
    const target = this.isUpdateMode ? "/home/profile" : "/home";
    // Gọi API lưu preferences vào DB, chờ response rồi mới navigate
    this.apiService.savePreferences({
      name,
      avatar: this.avatar,
      preferences: this.selectedPrefs,
      travelStyles: this.selectedStyles,
      budget: this.selectedBudget
    }).subscribe({
      next: res => {
        // Cache DB response vào localStorage
        this.apiService.cacheUserToLocalStorage(res.user);
        localStorage.setItem("hasSeenOnboarding", "true");
        localStorage.setItem("isLoggedIn", "true");
        this.router.navigateByUrl(target, {
          replaceUrl: true
        });
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
          hasPersonalized: true
        });
        localStorage.setItem("hasSeenOnboarding", "true");
        localStorage.setItem("isLoggedIn", "true");
        this.router.navigateByUrl(target, {
          replaceUrl: true
        });
      }
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function WelcomePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || WelcomePage)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: WelcomePage,
    selectors: [["app-welcome"]],
    hostAttrs: [2, "display", "flex", "flex-direction", "column", "position", "absolute", "inset", "0", "z-index", "101", "background", "white", "contain", "layout size style"],
    decls: 20,
    vars: 15,
    consts: [[1, "min-h-screen", "bg-white", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "px-4", "pt-6", "pb-3"], ["class", "text-sm text-gray-500 flex items-center gap-1", 3, "click", 4, "ngIf"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-gray-500"], [1, "text-sm", "text-gray-400", 3, "click"], [1, "flex-1", "flex", "flex-col", "px-6", "pt-2", "overflow-y-auto"], [3, "ngSwitch"], ["class", "w-full max-w-sm mx-auto space-y-6", 4, "ngSwitchCase"], ["class", "w-full max-w-sm mx-auto space-y-4", 4, "ngSwitchCase"], [1, "flex", "items-center", "justify-center", "gap-2", "px-4", "pb-2"], [3, "class", 4, "ngFor", "ngForOf"], [1, "p-4", "pb-8", "space-y-3"], [1, "w-full", "py-3", "rounded-full", "font-medium", "transition-all", "duration-200", "text-white", "flex", "items-center", "justify-center", "gap-2", 3, "click", "disabled"], ["class", "w-4 h-4 animate-spin", "fill", "none", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "w-full py-3 rounded-full border border-gray-200 text-sm text-gray-500 hover:border-gray-300 transition-all duration-200", 3, "click", 4, "ngIf"], [1, "text-sm", "text-gray-500", "flex", "items-center", "gap-1", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "w-full", "max-w-sm", "mx-auto", "space-y-6"], [1, "text-center"], [1, "text-sm", "text-gray-500"], [1, "text-2xl", "font-semibold", "text-gray-900", "mt-2"], [1, "flex", "justify-center", "gap-3", "flex-wrap"], ["class", "w-14 h-14 rounded-full text-3xl flex items-center justify-center transition-all duration-200", 3, "class", "click", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "T\u00EAn hi\u1EC3n th\u1ECB", 1, "w-full", "px-4", "py-3", "border", "border-gray-200", "rounded-2xl", "bg-gray-50", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-black", 3, "ngModelChange", "ngModel"], [1, "w-14", "h-14", "rounded-full", "text-3xl", "flex", "items-center", "justify-center", "transition-all", "duration-200", 3, "click"], [1, "w-full", "max-w-sm", "mx-auto", "space-y-4"], [1, "text-center", "text-lg", "font-semibold", "text-gray-900"], [1, "text-center", "text-xs", "text-gray-500"], [1, "grid", "grid-cols-2", "gap-3"], ["class", "relative p-4 rounded-2xl border transition-all duration-200 text-left", 3, "class", "click", 4, "ngFor", "ngForOf"], [1, "relative", "p-4", "rounded-2xl", "border", "transition-all", "duration-200", "text-left", 3, "click"], [1, "text-2xl"], [1, "text-sm", "font-medium", "mt-2"], [1, "text-[11px]", "text-gray-500"], ["class", "absolute top-2 right-2 w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-[12px]", 4, "ngIf"], [1, "absolute", "top-2", "right-2", "w-5", "h-5", "bg-black", "rounded-full", "flex", "items-center", "justify-center", "text-white", "text-[12px]"], ["class", "relative p-4 rounded-2xl border transition-all duration-200 text-center", 3, "class", "click", 4, "ngFor", "ngForOf"], [1, "relative", "p-4", "rounded-2xl", "border", "transition-all", "duration-200", "text-center", 3, "click"], [1, "text-3xl", "mb-3"], [1, "text-sm", "font-medium"], [1, "space-y-3"], ["class", "w-full flex items-center gap-3 p-4 rounded-2xl border transition-all duration-200", 3, "class", "click", 4, "ngFor", "ngForOf"], [1, "w-full", "flex", "items-center", "gap-3", "p-4", "rounded-2xl", "border", "transition-all", "duration-200", 3, "click"], [1, "text-left"], ["class", "ml-auto w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-[12px]", 4, "ngIf"], [1, "ml-auto", "w-5", "h-5", "bg-black", "rounded-full", "flex", "items-center", "justify-center", "text-white", "text-[12px]"], ["fill", "none", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "animate-spin"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "w-full", "py-3", "rounded-full", "border", "border-gray-200", "text-sm", "text-gray-500", "hover:border-gray-300", "transition-all", "duration-200", 3, "click"]],
    template: function WelcomePage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, WelcomePage_button_2_Template, 4, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function WelcomePage_Template_button_click_5_listener() {
          return ctx.skip();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "B\u1ECF qua");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, WelcomePage_div_9_Template, 9, 2, "div", 7)(10, WelcomePage_div_10_Template, 7, 1, "div", 8)(11, WelcomePage_div_11_Template, 7, 1, "div", 8)(12, WelcomePage_div_12_Template, 7, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, WelcomePage_div_14_Template, 1, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 11)(16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function WelcomePage_Template_button_click_16_listener() {
          return ctx.next();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, WelcomePage__svg_svg_17_Template, 3, 0, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, WelcomePage_button_19_Template, 2, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.step > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" B\u01B0\u1EDBc ", ctx.step + 1, " / ", ctx.steps.length, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", ctx.step);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.steps);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.canNext() && !ctx.isSubmitting ? "bg-black hover:bg-gray-800" : "bg-gray-200 text-gray-400 cursor-not-allowed");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.canNext() || ctx.isSubmitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isSubmitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.isSubmitting ? "\u0110ang x\u1EED l\u00FD..." : ctx.step === ctx.steps.length - 1 ? "Ho\u00E0n th\u00E0nh" : "Ti\u1EBFp t\u1EE5c", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.step === 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
    encapsulation: 2
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_pages_welcome_welcome_page_ts.js.map