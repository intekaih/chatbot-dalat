"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_components_layout_main-layout_main-layout_component_ts"],{

/***/ 5028
/*!******************************************************************************!*\
  !*** ./src/app/components/layout/bottom-tab-bar/bottom-tab-bar.component.ts ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BottomTabBarComponent: () => (/* binding */ BottomTabBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;





const _c0 = () => ({
  exact: true
});
class BottomTabBarComponent {
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  }
  isActive(path) {
    const currentPath = this.router.url;
    if (path === '/home') {
      return currentPath === '/home';
    }
    return currentPath.startsWith(path);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function BottomTabBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BottomTabBarComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: BottomTabBarComponent,
    selectors: [["app-bottom-tab-bar"]],
    decls: 22,
    vars: 15,
    consts: [[1, "fixed", "bottom-0", "left-0", "right-0", "bg-white", "border-t", "border-gray-200", "z-50", 2, "padding-bottom", "env(safe-area-inset-bottom)"], [1, "flex", "items-center", "justify-around", "h-16", "px-2"], ["routerLink", "/home", "routerLinkActive", "text-black", 1, "flex", "flex-col", "items-center", "justify-center", "w-16", "h-full", "transition-colors", 3, "routerLinkActiveOptions"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"], [1, "text-xs", "mt-1"], ["routerLink", "/home/explore", "routerLinkActive", "text-black", 1, "flex", "flex-col", "items-center", "justify-center", "w-16", "h-full", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"], ["routerLink", "/home/chat", "routerLinkActive", "text-black", 1, "flex", "flex-col", "items-center", "justify-center", "w-16", "h-full", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"], ["routerLink", "/home/favorites", "routerLinkActive", "text-black", 1, "flex", "flex-col", "items-center", "justify-center", "w-16", "h-full", "transition-colors"], ["stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"]],
    template: function BottomTabBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Trang ch\u1EE7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Kh\u00E1m ph\u00E1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\u0110\u00E3 l\u01B0u");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.isActive("/home") ? "text-black" : "text-gray-400");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("stroke-width", ctx.isActive("/home") ? "2" : "1.5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.isActive("/home/explore") || ctx.isActive("/home/place/") || ctx.isActive("/home/search") ? "text-black" : "text-gray-400");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("stroke-width", ctx.isActive("/home/explore") || ctx.isActive("/home/place/") || ctx.isActive("/home/search") ? "2" : "1.5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.isActive("/home/chat") || ctx.isActive("/home/history") ? "text-black" : "text-gray-400");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("stroke-width", ctx.isActive("/home/chat") || ctx.isActive("/home/history") ? "2" : "1.5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.isActive("/home/favorites") ? "text-black" : "text-gray-400");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("stroke-width", ctx.isActive("/home/favorites") ? "2" : "1.5")("fill", ctx.isActive("/home/favorites") ? "currentColor" : "none");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
    encapsulation: 2
  }));
}
_staticBlock();

/***/ },

/***/ 1340
/*!************************************************************************!*\
  !*** ./src/app/components/layout/main-layout/main-layout.component.ts ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainLayoutComponent: () => (/* binding */ MainLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _bottom_tab_bar_bottom_tab_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bottom-tab-bar/bottom-tab-bar.component */ 5028);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/theme.service */ 487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5422);
var _staticBlock;







class MainLayoutComponent {
  constructor() {
    this.themeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_theme_service__WEBPACK_IMPORTED_MODULE_4__.ThemeService);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function MainLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MainLayoutComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: MainLayoutComponent,
    selectors: [["app-main-layout"]],
    decls: 4,
    vars: 2,
    consts: [[1, "h-dvh", "flex", "flex-col", "overflow-hidden", "bg-white", "dark:bg-gray-900", "transition-colors"], [1, "flex-1", "overflow-y-auto", "overflow-x-hidden", "pb-16", "scrollbar-hide", 2, "-ms-overflow-style", "none", "scrollbar-width", "none"]],
    template: function MainLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-bottom-tab-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("dark", ctx.themeService.darkMode());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _bottom_tab_bar_bottom_tab_bar_component__WEBPACK_IMPORTED_MODULE_3__.BottomTabBarComponent],
    styles: ["main[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tbGF5b3V0LmNvbXBvbmVudC50cyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxjaGF0Ym90JTIwYWlcXGlvbmljLXRhaWx3aW5kLWFwcFxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxheW91dFxcbWFpbi1sYXlvdXRcXG1haW4tbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGFBQUE7QUNBTiIsImZpbGUiOiJtYWluLWxheW91dC5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBtYWluOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgIiwibWFpbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy4vLi4vLi4vY2hhdGJvdCUyMGFpL2lvbmljLXRhaWx3aW5kLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGFBQUE7QUNBTjtBRENBLHdrQkFBd2tCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgbWFpbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICIsIm1haW46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_components_layout_main-layout_main-layout_component_ts.js.map