"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_settings_settings_page_ts"],{

/***/ 4797
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsPage: () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 5430);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/theme.service */ 487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;





class SettingsPage {
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    this.location = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location);
    this.themeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_theme_service__WEBPACK_IMPORTED_MODULE_4__.ThemeService);
    this.notifications = true;
  }
  goBack() {
    this.location.back();
  }
  toggleDarkMode() {
    this.themeService.toggle();
  }
  toggleNotifications() {
    this.notifications = !this.notifications;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function SettingsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SettingsPage)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: SettingsPage,
    selectors: [["app-settings"]],
    decls: 71,
    vars: 10,
    consts: [[1, "bg-white", "dark:bg-gray-900", "transition-colors", "flex", "flex-col", "overflow-hidden", 2, "height", "calc(100vh - 4rem - env(safe-area-inset-bottom))"], [1, "px-4", "pt-4", "pb-4", "flex", "items-center", "gap-4"], [1, "w-10", "h-10", "rounded-full", "bg-gray-50", "flex", "items-center", "justify-center", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "text-xl", "font-semibold", "text-gray-900"], [1, "p-4", "space-y-6"], [1, "text-sm", "font-medium", "text-gray-700", "mb-3"], [1, "space-y-2"], [1, "flex", "items-center", "justify-between", "p-4", "bg-gray-50", "rounded-xl"], [1, "flex", "items-center", "gap-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"], [1, "text-sm"], [1, "w-12", "h-7", "rounded-full", "transition-colors", "relative", "overflow-hidden", 3, "click"], [1, "absolute", "top-1", "left-1", "w-5", "h-5", "bg-white", "rounded-full", "shadow", "transition-transform"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"], [1, "text-sm", "text-gray-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"], [1, "w-full", "flex", "items-center", "justify-between", "p-4", "bg-gray-50", "rounded-xl"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-center", "py-6"], [1, "text-xs", "text-gray-400"]],
    template: function SettingsPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomListener"]("click", function SettingsPage_Template_button_click_2_listener() {
          return ctx.goBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "C\u00E0i \u0111\u1EB7t");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](7, "div", 6)(8, "div")(9, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Giao di\u1EC7n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](11, "div", 8)(12, "div", 9)(13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](14, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](15, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Dark mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomListener"]("click", function SettingsPage_Template_button_click_18_listener() {
          return ctx.toggleDarkMode();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](20, "div", 9)(21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](22, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](23, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](24, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Ng\u00F4n ng\u1EEF");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](26, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Ti\u1EBFng Vi\u1EC7t");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](28, "div")(29, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Th\u00F4ng b\u00E1o");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](31, "div", 8)(32, "div", 9)(33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](34, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](35, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](36, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Nh\u1EADn th\u00F4ng b\u00E1o");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](38, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomListener"]("click", function SettingsPage_Template_button_click_38_listener() {
          return ctx.toggleNotifications();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](39, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](40, "div")(41, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "H\u1ED7 tr\u1EE3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](43, "div", 8)(44, "button", 18)(45, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](46, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](47, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](48, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Trung t\u00E2m tr\u1EE3 gi\u00FAp");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](50, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](51, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](52, "button", 18)(53, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](54, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](55, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](56, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Ch\u00EDnh s\u00E1ch b\u1EA3o m\u1EADt");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](58, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](59, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](60, "button", 18)(61, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](62, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](63, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](64, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "V\u1EC1 \u1EE9ng d\u1EE5ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](66, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](67, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](68, "div", 24)(69, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "Phi\u00EAn b\u1EA3n 1.0.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("dark", ctx.themeService.darkMode());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.themeService.darkMode() ? "bg-black" : "bg-gray-200");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.themeService.darkMode() ? "translate-x-5" : "translate-x-0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.notifications ? "bg-black" : "bg-gray-200");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.notifications ? "translate-x-5" : "translate-x-0");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
    encapsulation: 2
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_pages_settings_settings_page_ts.js.map