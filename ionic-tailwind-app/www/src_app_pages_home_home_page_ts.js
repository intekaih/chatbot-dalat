"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_page_ts"],{

/***/ 7182
/*!*******************************************************************************!*\
  !*** ./src/app/components/weather/weather-widget/weather-widget.component.ts ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherWidgetComponent: () => (/* binding */ WeatherWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/weather.service */ 5858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;





const _c0 = () => [1, 2, 3, 4];
const _c1 = () => [1, 2, 3, 4, 5];
function WeatherWidgetComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 12)(2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WeatherWidgetComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 14)(2, "div", 15)(3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function WeatherWidgetComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 5)(4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, WeatherWidgetComponent_div_0_div_7_Template, 3, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, WeatherWidgetComponent_div_0_div_9_Template, 4, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c1));
  }
}
function WeatherWidgetComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "div")(3, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 19)(6, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 23)(13, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " \u0110ang d\u00F9ng d\u1EEF li\u1EC7u t\u1EA1m ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WeatherWidgetComponent_div_1_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.refresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Th\u1EED l\u1EA1i ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx_r1.weather == null ? null : ctx_r1.weather.location) || "\u0110\u00E0 L\u1EA1t", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", (ctx_r1.weather == null ? null : ctx_r1.weather.temp) ?? "--", "\u00B0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.weather == null ? null : ctx_r1.weather.condition);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r1.weather == null ? null : ctx_r1.weather.icon) ?? "\u26C5");
  }
}
function WeatherWidgetComponent_div_2_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44)(1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 47)(6, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const day_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("opacity-100", i_r5 === 0)("opacity-80", i_r5 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", day_r4.day, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", day_r4.condition);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](day_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", day_r4.high, "\u00B0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("/", day_r4.low, "\u00B0");
  }
}
function WeatherWidgetComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "div", 29)(2, "div")(3, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "path", 31)(6, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 19)(9, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 35)(16, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WeatherWidgetComponent_div_2_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.refresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "svg", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 39)(23, "div", 40)(24, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "\uD83D\uDCA7 \u0110\u1ED9 \u1EA9m");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 40)(29, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "\uD83D\uDCA8 Gi\u00F3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 40)(34, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "\uD83D\uDC41\uFE0F T\u1EA7m nh\u00ECn");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 40)(39, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "\u2600\uFE0F UV");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, WeatherWidgetComponent_div_2_div_44_Template, 10, 9, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.weather.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1.weather.temp, "\u00B0C");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.weather.condition);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" C\u1EA3m gi\u00E1c nh\u01B0 ", ctx_r1.weather.feelsLike, "\u00B0C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.weather.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.isRefreshing);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("animate-spin", ctx_r1.isRefreshing);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.updatedLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1.weather.humidity, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1.weather.wind, " km/h");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.weather.visibility);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r1.getUvClass(ctx_r1.weather.uvIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.getUvLabel(ctx_r1.weather.uvIndex), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.weather.forecast);
  }
}
class WeatherWidgetComponent {
  constructor() {
    this.weatherService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService);
    this.weather = null;
    this.isLoading = true;
    this.isRefreshing = false;
    this.hasError = false;
    this.sub = null;
    this.updateTimer = null;
  }
  ngOnInit() {
    this.loadWeather();
    // Tự động refresh mỗi 15 phút
    this.updateTimer = setInterval(() => {
      this.weatherService.clearCache();
      this.loadWeather(true);
    }, 15 * 60 * 1000);
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
    if (this.updateTimer) clearInterval(this.updateTimer);
  }
  refresh() {
    this.weatherService.clearCache();
    this.loadWeather(true);
  }
  get updatedLabel() {
    if (!this.weather?.updatedAt) return "";
    const diff = Math.floor((Date.now() - this.weather.updatedAt.getTime()) / 60_000);
    if (diff < 1) return "Vừa cập nhật";
    if (diff < 60) return `${diff} phút trước`;
    return `${Math.floor(diff / 60)}h trước`;
  }
  getUvLabel(uv) {
    if (uv <= 2) return "Thấp";
    if (uv <= 5) return "TB";
    if (uv <= 7) return "Cao";
    if (uv <= 10) return "Rất cao";
    return "Nguy hiểm";
  }
  getUvClass(uv) {
    if (uv <= 2) return "text-green-400";
    if (uv <= 5) return "text-yellow-400";
    if (uv <= 7) return "text-orange-400";
    return "text-red-400";
  }
  loadWeather(silent = false) {
    if (!silent) this.isLoading = true;else this.isRefreshing = true;
    this.sub?.unsubscribe();
    this.sub = this.weatherService.getWeather().subscribe({
      next: data => {
        this.weather = data;
        this.hasError = false;
        this.isLoading = false;
        this.isRefreshing = false;
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
        this.isRefreshing = false;
      }
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function WeatherWidgetComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || WeatherWidgetComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: WeatherWidgetComponent,
    selectors: [["app-weather-widget"]],
    decls: 3,
    vars: 3,
    consts: [["class", "bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 animate-pulse", 4, "ngIf"], ["class", "bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 text-white", 4, "ngIf"], [1, "bg-gradient-to-br", "from-gray-900", "to-gray-800", "rounded-2xl", "p-4", "animate-pulse"], [1, "flex", "items-start", "justify-between", "mb-4"], [1, "space-y-2"], [1, "h-10", "w-28", "bg-white/10", "rounded-lg"], [1, "h-4", "w-36", "bg-white/10", "rounded-lg"], [1, "w-14", "h-14", "bg-white/10", "rounded-full"], [1, "flex", "justify-between", "py-3", "border-t", "border-white/10"], ["class", "text-center space-y-1", 4, "ngFor", "ngForOf"], [1, "flex", "justify-between", "pt-3", "border-t", "border-white/10"], [1, "text-center", "space-y-1"], [1, "h-3", "w-10", "bg-white/10", "rounded", "mx-auto"], [1, "h-4", "w-8", "bg-white/10", "rounded", "mx-auto"], [1, "h-3", "w-8", "bg-white/10", "rounded", "mx-auto"], [1, "h-6", "w-6", "bg-white/10", "rounded", "mx-auto"], [1, "bg-gradient-to-br", "from-gray-900", "to-gray-800", "rounded-2xl", "p-4", "text-white"], [1, "flex", "items-center", "justify-between"], [1, "text-sm", "text-gray-400", "mb-1"], [1, "flex", "items-baseline", "gap-2"], [1, "text-4xl", "font-semibold"], [1, "text-lg", "text-gray-300"], [1, "text-5xl"], [1, "mt-3", "flex", "items-center", "justify-between"], [1, "text-xs", "text-red-400/80", "flex", "items-center", "gap-1"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3", "h-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-xs", "text-blue-400", "flex", "items-center", "gap-1", "hover:text-blue-300", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "flex", "items-start", "justify-between", "mb-1"], [1, "text-xs", "text-gray-400", "mb-1", "flex", "items-center", "gap-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "text-base", "text-gray-300"], [1, "text-sm", "text-gray-400", "mt-0.5"], [1, "flex", "flex-col", "items-end", "gap-1"], [1, "text-5xl", "leading-none"], [1, "flex", "items-center", "gap-1", "text-[10px]", "text-gray-500", "hover:text-gray-300", "transition-colors", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3", "h-3", "transition-transform"], [1, "flex", "justify-between", "py-3", "border-t", "border-white/10", "mt-3"], [1, "text-center"], [1, "text-[10px]", "text-gray-400", "mb-1"], [1, "text-sm", "font-medium"], ["class", "text-center flex-1", 3, "opacity-100", "opacity-80", 4, "ngFor", "ngForOf"], [1, "text-center", "flex-1"], [1, "text-[10px]", "text-gray-400", "mb-1", "font-medium"], [1, "text-xl", "mb-1", 3, "title"], [1, "text-[10px]"], [1, "font-semibold", "text-white"], [1, "text-gray-500"]],
    template: function WeatherWidgetComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, WeatherWidgetComponent_div_0_Template, 10, 4, "div", 0)(1, WeatherWidgetComponent_div_1_Template, 21, 4, "div", 1)(2, WeatherWidgetComponent_div_2_Template, 45, 16, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.hasError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.weather && !ctx.hasError);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    encapsulation: 2
  }));
}
_staticBlock();

/***/ },

/***/ 6393
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePage: () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _components_ui_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ui/search-bar/search-bar.component */ 8750);
/* harmony import */ var _components_weather_weather_widget_weather_widget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/weather/weather-widget/weather-widget.component */ 7182);
/* harmony import */ var _services_firestore_trips_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/firestore-trips.service */ 6442);
/* harmony import */ var _services_firestore_places_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/firestore-places.service */ 7294);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/api.service */ 3366);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;












const _c0 = a0 => ["/home/place", a0];
function HomePage_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r0.unreadCount);
  }
}
function HomePage_img_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("error", function HomePage_img_13_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.userAvatar = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r0.userAvatar, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}
function HomePage_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r0.userAvatar || "\uD83D\uDC64");
  }
}
function HomePage_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 12)(1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function HomePage_div_17_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.goToTrip(ctx_r0.upcomingTrip.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 31)(4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "svg", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "path", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div")(10, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "S\u1EAFp t\u1EDBi");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("aria-label", "Xem chuy\u1EBFn \u0111i: " + ctx_r0.upcomingTrip.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r0.upcomingTrip.coverImage, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", ctx_r0.upcomingTrip.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r0.upcomingTrip.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" ", ctx_r0.upcomingTrip.startDate, " - ", ctx_r0.upcomingTrip.endDate, " ");
  }
}
function HomePage_div_33_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function HomePage_div_33_button_2_Template_button_click_0_listener() {
      const prompt_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.goToChat(prompt_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const prompt_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", prompt_r5, " ");
  }
}
function HomePage_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 38)(1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, HomePage_div_33_button_2_Template, 2, 1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.quickPrompts);
  }
}
function HomePage_div_34_a_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 51)(1, "div", 52)(2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("error", function HomePage_div_34_a_12_Template_img_error_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onPlaceImgError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "MUST VISIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 57)(9, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const place_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](6, _c0, place_r8.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", place_r8.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", place_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\u2B50 ", place_r8.rating || 4.8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](place_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](place_r8.shortDescription);
  }
}
function HomePage_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 42)(1, "div", 43)(2, "div", 32)(3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "\u2B50");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "h3", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Nh\u1EA5t \u0111\u1ECBnh ph\u1EA3i \u0111\u1EBFn");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function HomePage_div_34_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.goToExplore("signature"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Xem t\u1EA5t c\u1EA3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "svg", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, HomePage_div_34_a_12_Template, 13, 8, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.signaturePlaces);
  }
}
function HomePage_div_35_a_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 64)(1, "div", 65)(2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("error", function HomePage_div_35_a_12_Template_img_error_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onFoodImgError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 57)(7, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 70)(12, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "svg", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "path", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const food_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](8, _c0, food_r11.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", food_r11.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", food_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](food_r11.tag);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", food_r11.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", food_r11.desc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](food_r11.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](food_r11.rating);
  }
}
function HomePage_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60)(1, "div", 43)(2, "div", 32)(3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "\uD83C\uDF7D\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "h3", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "M\u00F3n ngon \u0110\u00E0 L\u1EA1t");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function HomePage_div_35_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.goToExplore("food"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Xem t\u1EA5t c\u1EA3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "svg", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, HomePage_div_35_a_12_Template, 19, 10, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.dalatFoods);
  }
}
function HomePage_div_36_a_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 78)(1, "div", 79)(2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("error", function HomePage_div_36_a_12_Template_img_error_2_listener($event) {
      const place_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onImageError($event, place_r14.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 57)(6, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const place_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](7, _c0, place_r14.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", place_r14.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", place_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" \u2B50 ", place_r14.rating || 4.5, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](place_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](place_r14.shortDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](place_r14.priceRange || "");
  }
}
function HomePage_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60)(1, "div", 43)(2, "div", 32)(3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "\u2615");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "h3", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Cafe view \u0111\u1EB9p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function HomePage_div_36_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.goToExplore("cafe"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Xem t\u1EA5t c\u1EA3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "svg", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, HomePage_div_36_a_12_Template, 12, 9, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.cafePlaces);
  }
}
function HomePage_div_37_a_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 78)(1, "div", 65)(2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("error", function HomePage_div_37_a_12_Template_img_error_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onPlaceImgError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "\uD83D\uDCF8 Check-in");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 57)(7, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 70)(12, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "svg", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "path", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const place_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](7, _c0, place_r17.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", place_r17.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", place_r17.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](place_r17.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](place_r17.shortDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](place_r17.priceRange || "Mi\u1EC5n ph\u00ED");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](place_r17.rating ?? 4.5);
  }
}
function HomePage_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60)(1, "div", 43)(2, "div", 32)(3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "\uD83D\uDCF8");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "h3", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "\u0110i\u1EC3m check-in");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function HomePage_div_37_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.goToExplore("checkin"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Xem t\u1EA5t c\u1EA3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "svg", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, HomePage_div_37_a_12_Template, 19, 9, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.checkinPlaces);
  }
}
function HomePage_div_38_a_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 78)(1, "div", 65)(2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("error", function HomePage_div_38_a_12_Template_img_error_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onPlaceImgError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "\uD83C\uDF32 Thi\u00EAn nhi\u00EAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 57)(7, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 70)(12, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "svg", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "path", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const place_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](7, _c0, place_r20.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", place_r20.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", place_r20.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](place_r20.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](place_r20.shortDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](place_r20.priceRange || "Mi\u1EC5n ph\u00ED");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](place_r20.rating ?? 4.5);
  }
}
function HomePage_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60)(1, "div", 43)(2, "div", 32)(3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "\uD83C\uDF32");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "h3", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Thi\u00EAn nhi\u00EAn \u0110\u00E0 L\u1EA1t");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function HomePage_div_38_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.goToExplore("nature"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Xem t\u1EA5t c\u1EA3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "svg", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, HomePage_div_38_a_12_Template, 19, 9, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.naturePlaces);
  }
}
function HomePage_div_39_a_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 78)(1, "div", 65)(2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("error", function HomePage_div_39_a_12_Template_img_error_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onPlaceImgError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, " \uD83C\uDFE1 Homestay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 57)(7, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 70)(12, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "svg", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "path", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const place_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](7, _c0, place_r23.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", place_r23.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", place_r23.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", place_r23.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", place_r23.shortDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](place_r23.priceRange || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](place_r23.rating ?? 4.5);
  }
}
function HomePage_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60)(1, "div", 43)(2, "div", 32)(3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "\uD83C\uDFE1");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "h3", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Homestay & Ngh\u1EC9 d\u01B0\u1EE1ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function HomePage_div_39_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.goToExplore("homestay"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Xem t\u1EA5t c\u1EA3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "svg", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, HomePage_div_39_a_12_Template, 19, 9, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.displayHomestays);
  }
}
function HomePage_div_40_a_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 78)(1, "div", 65)(2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("error", function HomePage_div_40_a_17_Template_img_error_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onPlaceImgError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, " \uD83D\uDEF5 Thu\u00EA xe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 57)(7, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 70)(12, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "svg", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "path", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const place_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](7, _c0, place_r26.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", place_r26.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", place_r26.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", place_r26.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", place_r26.shortDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](place_r26.pricePerDay || place_r26.priceRange || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](place_r26.rating ?? 4.5);
  }
}
function HomePage_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 60)(1, "div", 43)(2, "div", 32)(3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "\uD83D\uDEF5");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "h3", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Thu\u00EA xe m\u00E1y");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function HomePage_div_40_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.goToExplore("rental"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Xem t\u1EA5t c\u1EA3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "svg", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 82)(12, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "\uD83D\uDCA1");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, " \u0110\u00E0 L\u1EA1t c\u00F3 nhi\u1EC1u d\u1ED1c cao \u2014 n\u00EAn ch\u1ECDn xe c\u00F4n ho\u1EB7c tay ga m\u1EA1nh \u0111\u1EC3 di chuy\u1EC3n tho\u1EA3i m\u00E1i h\u01A1n. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, HomePage_div_40_a_17_Template, 19, 9, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.rentalPlaces);
  }
}
function HomePage_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "div", 86)(2, "div", 87)(3, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
class HomePage {
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    this.apiService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_api_service__WEBPACK_IMPORTED_MODULE_9__.ApiService);
    this.authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_10__.AuthService);
    this.quickPrompts = [];
    this.categories = [];
    this.checkinPlaces = [];
    this.naturePlaces = [];
    this.homestayPlaces = [];
    this.rentalPlaces = [];
    this.dalatFoods = [];
    this.cafePlaces = [];
    this.signaturePlaces = [];
    this.upcomingTrip = null;
    this.unreadCount = 0;
    this.selectedCategory = "";
    this.isLoading = true;
    this.userName = "";
    this.userAvatar = "";
    this.tripsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_firestore_trips_service__WEBPACK_IMPORTED_MODULE_7__.FirestoreTripsService);
    this.firestorePlaces = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_firestore_places_service__WEBPACK_IMPORTED_MODULE_8__.FirestorePlacesService);
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef);
  }
  get displayHomestays() {
    return this.homestayPlaces;
  }
  ngOnInit() {
    this.loadData();
  }
  ionViewWillEnter() {
    // Refresh notification count every time user returns to Home
    this.apiService.getNotifications().subscribe({
      next: notifications => {
        this.unreadCount = notifications.filter(n => !n.isRead).length;
      }
    });
  }
  loadData() {
    // Luôn load user từ DB (API) — DB name/avatar ưu tiên hơn Firebase Auth
    const fbUser = this.authService.currentUser();
    // Fallback ngay lập tức từ Firebase/localStorage để tránh flash trống
    if (fbUser) {
      this.userName = fbUser.displayName || localStorage.getItem('userName') || '';
      this.userAvatar = fbUser.photoURL || localStorage.getItem('userAvatar') || '🧑‍💻';
    } else {
      this.userName = localStorage.getItem('userName') || '';
      this.userAvatar = localStorage.getItem('userAvatar') || '🧑‍💻';
    }
    // API trả về DB data → ghi đè nếu user đã cá nhân hóa
    this.apiService.getUser().subscribe({
      next: user => {
        if (user.hasPersonalized) {
          // User đã cá nhân hóa: dùng tên/avatar từ DB
          if (user.name && user.name !== 'Khách') this.userName = user.name;
          if (user.avatar) this.userAvatar = user.avatar;
        } else if (user.name && user.name !== 'Khách') {
          this.userName = user.name;
          this.userAvatar = user.avatar || '🧑‍💻';
        }
      }
    });
    // Load AI-personalized data from BE - không chờ geolocation (tránh skeleton treo)
    const applyPersonalizedData = data => {
      this.quickPrompts = data.quickPrompts;
      this.categories = data.categories.filter(c => c.id !== "signature");
      this.checkinPlaces = data.places.filter(p => p.category === "checkin");
      this.naturePlaces = data.places.filter(p => p.category === "nature");
      this.homestayPlaces = data.places.filter(p => p.category === "homestay");
      this.rentalPlaces = data.places.filter(p => p.category === "rental");
      this.cafePlaces = data.places.filter(p => p.category === "cafe");
      // Signature: ưu tiên personalized, fallback lấy từ DB
      const rawSignature = data.places.filter(p => p.category === "signature");
      if (rawSignature.length > 0) {
        this.signaturePlaces = rawSignature;
      } else {
        this.apiService.getPlaces("signature").subscribe(places => {
          this.signaturePlaces = places.slice(0, 10);
          this.apiService.refreshPlaceImages(this.signaturePlaces).subscribe();
        });
      }
      // Refresh ảnh: DB chỉ có Pexels → thay bằng Gemini URL (load được ở browser)
      this.apiService.refreshPlaceImages(this.checkinPlaces).subscribe();
      this.apiService.refreshPlaceImages(this.naturePlaces).subscribe();
      this.apiService.refreshPlaceImages(this.homestayPlaces).subscribe();
      this.apiService.refreshPlaceImages(this.rentalPlaces).subscribe();
      this.apiService.refreshPlaceImages(this.cafePlaces).subscribe();
      if (rawSignature.length > 0) {
        this.apiService.refreshPlaceImages(this.signaturePlaces).subscribe();
      }
      this.dalatFoods = data.places.filter(p => p.category === "food").slice(0, 20).map(p => ({
        id: p.id,
        name: p.name,
        desc: p.shortDescription || "",
        price: p.priceRange || "Liên hệ",
        rating: p.rating || 4.5,
        tag: p.tags?.[0] || "🍜 Ẩm thực",
        image: p.imageUrl,
        slug: p.slug
      }));
      this.isLoading = false;
      // Nếu không có places (API lỗi/timeout/empty), load từ Firestore
      if (data.places.length === 0) {
        this.firestorePlaces.getCategories().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.takeUntilDestroyed)(this.destroyRef)).subscribe(cats => {
          if (this.categories.length === 0) this.categories = cats.filter(c => c.id !== "signature");
        });
        this.firestorePlaces.getPlaces('signature').pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.takeUntilDestroyed)(this.destroyRef)).subscribe(places => {
          this.signaturePlaces = places.slice(0, 10);
        });
        this.firestorePlaces.getPlaces('checkin').pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.takeUntilDestroyed)(this.destroyRef)).subscribe(places => {
          this.checkinPlaces = places.slice(0, 20);
        });
        this.firestorePlaces.getPlaces('nature').pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.takeUntilDestroyed)(this.destroyRef)).subscribe(places => {
          this.naturePlaces = places.slice(0, 10);
        });
        this.firestorePlaces.getPlaces('rental').pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.takeUntilDestroyed)(this.destroyRef)).subscribe(places => {
          this.rentalPlaces = places;
        });
        this.firestorePlaces.getPlaces('homestay').pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.takeUntilDestroyed)(this.destroyRef)).subscribe(places => {
          this.homestayPlaces = places.slice(0, 20);
        });
        this.firestorePlaces.getPlaces('food').pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.takeUntilDestroyed)(this.destroyRef)).subscribe(places => {
          this.dalatFoods = places.slice(0, 20).map(p => ({
            id: p.id,
            name: p.name,
            desc: p.shortDescription || "",
            price: p.priceRange || "Liên hệ",
            rating: p.rating || 4.5,
            tag: p.tags?.[0] || "🍜 Ẩm thực",
            image: p.imageUrl,
            slug: p.slug
          }));
        });
        this.firestorePlaces.getPlaces('cafe').pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.takeUntilDestroyed)(this.destroyRef)).subscribe(places => {
          this.cafePlaces = places.slice(0, 20);
        });
      }
    };
    const loadPersonalized = () => {
      this.apiService.getPersonalizedData().subscribe({
        next: data => applyPersonalizedData(data),
        error: () => {
          // Fallback: load từ Firestore khi getPersonalizedData fail
          this.firestorePlaces.getCategories().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.takeUntilDestroyed)(this.destroyRef)).subscribe(cats => {
            this.categories = cats;
          });
          this.firestorePlaces.getPlacesGrouped().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.takeUntilDestroyed)(this.destroyRef)).subscribe(grouped => {
            this.checkinPlaces = (grouped['checkin'] || []).slice(0, 20);
            this.naturePlaces = (grouped['nature'] || []).slice(0, 10);
            this.rentalPlaces = grouped['rental'] || [];
            this.homestayPlaces = (grouped['homestay'] || []).slice(0, 20);
            this.cafePlaces = (grouped['cafe'] || []).slice(0, 20);
            this.signaturePlaces = (grouped['signature'] || []).slice(0, 10);
            this.dalatFoods = (grouped['food'] || []).slice(0, 20).map(p => ({
              id: p.id,
              name: p.name,
              desc: p.shortDescription || "",
              price: p.priceRange || "Liên hệ",
              rating: p.rating || 4.5,
              tag: p.tags?.[0] || "🍜 Ẩm thỳc",
              image: p.imageUrl,
              slug: p.slug
            }));
            this.isLoading = false;
          });
        }
      });
    };
    loadPersonalized();
    // Load trips từ Firestore
    this.tripsService.getTrips().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_1__.takeUntilDestroyed)(this.destroyRef)).subscribe({
      next: trips => {
        this.upcomingTrip = trips.find(t => t.status === 'upcoming') || null;
      }
    });
    // Load notifications count từ BE
    this.apiService.getNotifications().subscribe({
      next: notifications => {
        this.unreadCount = notifications.filter(n => !n.isRead).length;
      }
    });
  }
  onFoodImgError(event) {
    const img = event.target;
    img.src = "https://placehold.co/400x300/e2e8f0/64748b?text=Ẩm+thực";
  }
  onPlaceImgError(event) {
    const img = event.target;
    img.onerror = null; // Prevent infinite loop
    img.src = "https://placehold.co/400x300/e2e8f0/64748b?text=Đà+Lạt";
  }
  categoryLabel(place) {
    const c = this.categories.find(x => x.id === place.category);
    return c?.label || place.category || "Địa điểm";
  }
  categoryIcon(place) {
    const c = this.categories.find(x => x.id === place.category);
    return c?.icon || "📍";
  }
  vehicleTypesLine(place) {
    return (place.vehicleTypes ?? []).join(" · ");
  }
  goToNotifications() {
    this.router.navigate(["/home/notifications"]);
  }
  goToProfile() {
    this.router.navigate(["/home/profile"]);
  }
  goToChat(prompt) {
    this.router.navigate(["/home/chat"], {
      state: {
        prompt
      }
    });
  }
  goToExplore(categoryId) {
    this.router.navigate(["/home/explore"], {
      queryParams: {
        category: categoryId
      }
    });
  }
  onImageError(event, fallbackText) {
    const img = event.target;
    const triedPexels = img.dataset['tried'];
    if (!triedPexels) {
      img.dataset['tried'] = 'pexels';
      img.src = `https://placehold.co/800x500/e2e8f0/64748b?text=${encodeURIComponent(fallbackText)}`;
      return;
    }
    img.onerror = null;
    img.src = `https://placehold.co/800x500/e2e8f0/64748b?text=${encodeURIComponent(fallbackText)}`;
  }
  goToTrip(tripId) {
    this.router.navigate(["/home/trips", tripId]);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function HomePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || HomePage)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: HomePage,
    selectors: [["app-home"]],
    decls: 42,
    vars: 15,
    consts: [[1, "bg-white", "min-h-screen", 2, "padding-bottom", "calc(4rem + env(safe-area-inset-bottom))"], [1, "px-4", "pt-4", "pb-4", "flex", "items-center", "justify-between"], [1, "text-gray-500", "text-sm"], [1, "text-xl", "font-semibold", "text-gray-900"], [1, "flex", "items-center", "gap-3"], [1, "relative", "w-10", "h-10", "rounded-full", "bg-gray-50", "flex", "items-center", "justify-center", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"], ["class", "absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-red-500 rounded-full text-white text-[10px] font-bold flex items-center justify-center px-1", 4, "ngIf"], [1, "w-10", "h-10", "rounded-full", "bg-gray-100", "flex", "items-center", "justify-center", "text-xl", "overflow-hidden", 3, "click"], ["alt", "Avatar", "class", "w-full h-full object-cover rounded-full", 3, "src", "error", 4, "ngIf"], [4, "ngIf"], [1, "px-4", "mb-6"], ["placeholder", "B\u1EA1n mu\u1ED1n \u0111i \u0111\u00E2u \u1EDF \u0110\u00E0 L\u1EA1t?", 3, "readOnly"], ["class", "px-4 mb-6", 4, "ngIf"], [1, "bg-gradient-to-br", "from-gray-900", "to-gray-800", "rounded-2xl", "p-4", "cursor-pointer", 3, "click"], [1, "flex", "items-center", "gap-3", "mb-2"], [1, "w-10", "h-10", "rounded-full", "bg-white/10", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"], [1, "text-white", "font-medium"], [1, "text-white/60", "text-sm"], [1, "text-white/80", "text-sm"], ["class", "mb-6", 4, "ngIf"], ["class", "mb-6 relative", 4, "ngIf"], ["class", "mb-5", 4, "ngIf"], ["class", "px-4 space-y-4 pb-6", 4, "ngIf"], [1, "absolute", "-top-1", "-right-1", "min-w-[18px]", "h-[18px]", "bg-red-500", "rounded-full", "text-white", "text-[10px]", "font-bold", "flex", "items-center", "justify-center", "px-1"], ["alt", "Avatar", 1, "w-full", "h-full", "object-cover", "rounded-full", 3, "error", "src"], ["type", "button", 1, "relative", "w-full", "rounded-2xl", "overflow-hidden", 3, "click"], ["loading", "lazy", 1, "w-full", "h-32", "object-cover", 3, "src", "alt"], [1, "absolute", "inset-0", "bg-black/55", "flex", "flex-col", "justify-between", "p-4"], [1, "flex", "items-center", "gap-2"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "text-white", "text-sm"], [1, "text-white/80", "text-xs"], [1, "inline-block", "mt-1", "px-2", "py-0.5", "bg-white/20", "rounded-full", "text-xs", "text-white"], [1, "mb-6"], [1, "flex", "gap-2", "overflow-x-auto", "mx-4", "pb-2", "scrollbar-hide"], ["class", "px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm whitespace-nowrap", 3, "click", 4, "ngFor", "ngForOf"], [1, "px-4", "py-2", "bg-gray-50", "border", "border-gray-200", "rounded-full", "text-sm", "whitespace-nowrap", 3, "click"], [1, "mb-6", "relative"], [1, "flex", "items-center", "justify-between", "px-4", "mb-3"], [1, "text-lg"], [1, "text-sm", "font-semibold", "bg-clip-text", "text-transparent", "bg-gradient-to-r", "from-amber-500", "to-orange-600"], [1, "text-sm", "text-amber-600", "flex", "items-center", "gap-1", "font-medium", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "flex", "gap-3", "overflow-x-auto", "mx-4", "pb-2", "scrollbar-hide"], ["class", "flex-shrink-0 w-44 bg-white border border-amber-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-amber-200 transition-all active:scale-95", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "flex-shrink-0", "w-44", "bg-white", "border", "border-amber-100", "rounded-2xl", "overflow-hidden", "shadow-sm", "hover:shadow-md", "hover:border-amber-200", "transition-all", "active:scale-95", 3, "routerLink"], [1, "relative", "h-32", "bg-gray-100"], ["loading", "lazy", 1, "w-full", "h-full", "object-cover", 3, "error", "src", "alt"], [1, "absolute", "inset-0", "bg-gradient-to-t", "from-black/50", "via-black/10", "to-transparent"], [1, "absolute", "top-2", "left-2", "bg-gradient-to-r", "from-amber-400", "to-orange-500", "text-white", "text-[10px]", "font-bold", "px-2", "py-0.5", "rounded-full", "shadow-lg", "border", "border-white/20"], [1, "absolute", "bottom-1", "right-1", "bg-black/60", "text-white", "text-[10px]", "px-1.5", "py-0.5", "rounded-full"], [1, "p-2.5"], [1, "text-xs", "font-bold", "text-gray-900", "truncate"], [1, "text-[10px]", "text-gray-500", "mt-0.5", "truncate"], [1, "mb-5"], [1, "text-sm", "font-medium", "text-gray-700"], [1, "text-sm", "text-gray-500", "flex", "items-center", "gap-1", 3, "click"], ["class", "flex-shrink-0 w-36 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-gray-200 transition-all cursor-pointer block", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "flex-shrink-0", "w-36", "bg-white", "border", "border-gray-100", "rounded-2xl", "overflow-hidden", "shadow-sm", "hover:shadow-md", "hover:border-gray-200", "transition-all", "cursor-pointer", "block", 3, "routerLink"], [1, "relative", "h-24", "overflow-hidden"], [1, "absolute", "inset-0", "bg-gradient-to-t", "from-black/30", "to-transparent"], [1, "absolute", "bottom-1.5", "left-2", "text-[10px]", "text-white/90", "font-medium"], [1, "text-xs", "font-semibold", "text-gray-900", "truncate", "leading-tight", "mb-0.5"], [1, "text-[10px]", "text-gray-400", "truncate", "mb-1.5"], [1, "flex", "items-center", "justify-between"], [1, "text-[10px]", "font-medium", "text-gray-700"], [1, "flex", "items-center", "gap-0.5"], ["viewBox", "0 0 20 20", 1, "w-2.5", "h-2.5", "fill-amber-400", "text-amber-400"], ["d", "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"], [1, "text-[10px]", "text-gray-500"], ["type", "button", 1, "text-sm", "text-gray-500", "flex", "items-center", "gap-1", 3, "click"], ["class", "flex-shrink-0 w-36 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-gray-200 transition-all active:scale-95", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "flex-shrink-0", "w-36", "bg-white", "border", "border-gray-100", "rounded-2xl", "overflow-hidden", "shadow-sm", "hover:shadow-md", "hover:border-gray-200", "transition-all", "active:scale-95", 3, "routerLink"], [1, "relative", "h-28", "bg-gray-100"], [1, "text-xs", "font-medium", "text-gray-800", "truncate"], [1, "text-[10px]", "font-medium", "text-pink-500", "mt-1"], [1, "mb-3", "mx-4", "px-3", "py-2.5", "bg-amber-50", "border", "border-amber-100", "rounded-xl", "flex", "items-start", "gap-2"], [1, "text-sm", "flex-shrink-0", "mt-0.5"], [1, "text-xs", "text-amber-800", "leading-relaxed"], [1, "px-4", "space-y-4", "pb-6"], [1, "h-8", "bg-gray-100", "rounded-xl", "animate-pulse", "w-2/3"], [1, "h-32", "bg-gray-100", "rounded-2xl", "animate-pulse"]],
    template: function HomePage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Xin ch\u00E0o! \uD83D\uDC4B");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 4)(8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function HomePage_Template_button_click_8_listener() {
          return ctx.goToNotifications();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, HomePage_span_11_Template, 2, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function HomePage_Template_button_click_12_listener() {
          return ctx.goToProfile();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, HomePage_img_13_Template, 1, 1, "img", 10)(14, HomePage_span_14_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "app-search-bar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, HomePage_div_17_Template, 14, 6, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "app-weather-widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 12)(21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function HomePage_Template_div_click_21_listener() {
          return ctx.goToChat("");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "div", 16)(23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](25, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "div")(27, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "AI Tr\u1EE3 l\u00FD du l\u1ECBch");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, "Lu\u00F4n s\u1EB5n s\u00E0ng gi\u00FAp b\u1EA1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, " Chat v\u1EDBi AI \u0111\u1EC3 l\u00EAn l\u1ECBch tr\u00ECnh, g\u1EE3i \u00FD \u0111\u1ECBa \u0111i\u1EC3m v\u00E0 nhi\u1EC1u h\u01A1n n\u1EEFa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, HomePage_div_33_Template, 3, 1, "div", 23)(34, HomePage_div_34_Template, 13, 1, "div", 24)(35, HomePage_div_35_Template, 13, 1, "div", 25)(36, HomePage_div_36_Template, 13, 1, "div", 25)(37, HomePage_div_37_Template, 13, 1, "div", 25)(38, HomePage_div_38_Template, 13, 1, "div", 25)(39, HomePage_div_39_Template, 13, 1, "div", 25)(40, HomePage_div_40_Template, 18, 1, "div", 25)(41, HomePage_div_41_Template, 4, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.userName ? "Ch\u00E0o " + ctx.userName + "!" : "H\u00F4m nay b\u1EA1n mu\u1ED1n \u0111i \u0111\u00E2u?", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.unreadCount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.userAvatar && ctx.userAvatar.startsWith("http"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.userAvatar || !ctx.userAvatar.startsWith("http"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("readOnly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.upcomingTrip);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.quickPrompts.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.signaturePlaces.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.dalatFoods.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.cafePlaces.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.checkinPlaces.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.naturePlaces.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.displayHomestays.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.rentalPlaces.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isLoading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _components_ui_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__.SearchBarComponent, _components_weather_weather_widget_weather_widget_component__WEBPACK_IMPORTED_MODULE_6__.WeatherWidgetComponent],
    styles: [".scrollbar-hide[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\n.scrollbar-hide[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS50cyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNoYXRib3QlMjBhaVxcaW9uaWMtdGFpbHdpbmQtYXBwXFxzcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUucGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDTTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7QUNBUjs7QURFTTtFQUNFLGFBQUE7QUNDUiIsImZpbGUiOiJob21lLnBhZ2UudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC5zY3JvbGxiYXItaGlkZSB7XG4gICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgICAgfVxuICAgICAgLnNjcm9sbGJhci1oaWRlOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgIiwiLnNjcm9sbGJhci1oaWRlIHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG59XG5cbi5zY3JvbGxiYXItaGlkZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2UudHMiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9jaGF0Ym90JTIwYWkvaW9uaWMtdGFpbHdpbmQtYXBwL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ007RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0FDQVI7O0FERU07RUFDRSxhQUFBO0FDQ1I7QURDQSw0ekJBQTR6QiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLnNjcm9sbGJhci1oaWRlIHtcbiAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgICB9XG4gICAgICAuc2Nyb2xsYmFyLWhpZGU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAiLCIuc2Nyb2xsYmFyLWhpZGUge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbn1cblxuLnNjcm9sbGJhci1oaWRlOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_pages_home_home_page_ts.js.map