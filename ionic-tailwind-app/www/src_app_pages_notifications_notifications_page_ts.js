"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_notifications_notifications_page_ts"],{

/***/ 5925
/*!***********************************************************!*\
  !*** ./src/app/pages/notifications/notifications.page.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsPage: () => (/* binding */ NotificationsPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 5430);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ 3366);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/weather.service */ 5858);
/* harmony import */ var _components_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ui/empty-state/empty-state.component */ 5488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;








function NotificationsPage_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r0.unreadCount, " ch\u01B0a \u0111\u1ECDc");
  }
}
function NotificationsPage_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NotificationsPage_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.markAllRead());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " \u0110\u1ECDc t\u1EA5t c\u1EA3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function NotificationsPage_div_11_button_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 24);
  }
}
function NotificationsPage_div_11_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NotificationsPage_div_11_button_1_Template_button_click_0_listener() {
      const notif_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.markAsRead(notif_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 17)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 18)(5, "div", 19)(6, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, NotificationsPage_div_11_button_1_span_8_Template, 1, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const notif_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](notif_r4.isRead ? "bg-white" : "bg-gray-50/80");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", (notif_r4.isRead ? "" : "Ch\u01B0a \u0111\u1ECDc: ") + notif_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](notif_r4.iconColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](notif_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](notif_r4.isRead ? "text-gray-600" : "text-gray-900");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", notif_r4.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !notif_r4.isRead);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", notif_r4.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.formatTime(notif_r4.timestamp), " ");
  }
}
function NotificationsPage_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, NotificationsPage_div_11_button_1_Template, 13, 12, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.notifications);
  }
}
function NotificationsPage_app_empty_state_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-empty-state", 25);
  }
}
class NotificationsPage {
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    this.location = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location);
    this.apiService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService);
    this.weatherService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_weather_service__WEBPACK_IMPORTED_MODULE_5__.WeatherService);
    this.notifications = [];
    this.unreadCount = 0;
    this.isLoading = true;
  }
  ngOnInit() {
    this.apiService.getNotifications().subscribe({
      next: notifs => {
        this.notifications = notifs;
        this.updateUnreadCount();
        this.isLoading = false;
        // Inject real weather data into weather-type notifications
        this.injectWeatherContent();
      },
      error: () => {
        this.notifications = [];
        this.isLoading = false;
      }
    });
  }
  injectWeatherContent() {
    const weatherNotif = this.notifications.find(n => n.type === 'weather');
    if (!weatherNotif) return;
    this.weatherService.getWeather().subscribe({
      next: w => {
        const tips = {
          '☀️': 'Tuyệt vời cho việc dạo phố và check-in ngoài trời!',
          '🌤️': 'Thời tiết dễ chịu, lý tưởng cho các hoạt động ngoài trời.',
          '⛅': 'Trời có mây nhẹ, vẫn thích hợp để khám phá Đà Lạt.',
          '☁️': 'Trời nhiều mây, nhớ mang áo khoác khi ra ngoài nhé.',
          '🌦️': 'Có thể có mưa nhỏ, nên mang theo ô hoặc áo mưa.',
          '🌧️': 'Trời mưa – chuẩn bị ô và tận hưởng cà phê trong quán nhé!',
          '⛈️': 'Mưa lớn kèm giông, hạn chế đi xa, ưu tiên các địa điểm trong nhà.',
          '🌫️': 'Sương mù dày – cẩn thận khi lái xe, tầm nhìn hạn chế.'
        };
        const tip = tips[w.icon] ?? 'Hãy lên kế hoạch phù hợp với thời tiết hôm nay!';
        weatherNotif.title = 'Thời tiết Đà Lạt hôm nay';
        weatherNotif.icon = w.icon;
        weatherNotif.content = `${w.condition} · ${w.temp}°C (Cảm giác ${w.feelsLike}°C) · Độ ẩm ${w.humidity}% · Gió ${w.wind} km/h. ${tip}`;
      }
    });
  }
  goBack() {
    this.location.back();
  }
  markAsRead(notif) {
    if (!notif.isRead) {
      notif.isRead = true;
      this.updateUnreadCount();
      // Call API to mark as read
      this.apiService.markNotificationRead(notif.id).subscribe();
    }
  }
  markAllRead() {
    this.notifications.forEach(n => {
      if (!n.isRead) {
        n.isRead = true;
        this.apiService.markNotificationRead(n.id).subscribe();
      }
    });
    this.updateUnreadCount();
  }
  updateUnreadCount() {
    this.unreadCount = this.notifications.filter(n => !n.isRead).length;
  }
  formatTime(timestamp) {
    const now = new Date();
    const diff = now.getTime() - new Date(timestamp).getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);
    if (days > 0) return `${days} ngày trước`;
    if (hours > 0) return `${hours} giờ trước`;
    return "Vừa xong";
  }
  static #_ = _staticBlock = () => (this.ɵfac = function NotificationsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NotificationsPage)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: NotificationsPage,
    selectors: [["app-notifications"]],
    decls: 13,
    vars: 4,
    consts: [[1, "bg-white", 2, "padding-bottom", "calc(4rem + env(safe-area-inset-bottom))"], [1, "px-4", "pt-4", "pb-4", "flex", "items-center", "justify-between", "border-b", "border-gray-100"], [1, "flex", "items-center", "gap-4"], [1, "w-10", "h-10", "rounded-full", "bg-gray-50", "flex", "items-center", "justify-center", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "text-xl", "font-semibold", "text-gray-900"], [1, "flex", "items-center", "gap-3"], ["class", "text-sm text-gray-500", 4, "ngIf"], ["class", "text-sm text-gray-500 underline", 3, "click", 4, "ngIf"], ["class", "p-4 space-y-2", 4, "ngIf"], ["icon", "\uD83D\uDD14", "title", "B\u1EA1n \u0111\u00E3 \u0111\u1ECDc h\u1EBFt r\u1ED3i!", "message", "Kh\u00F4ng c\u00F2n th\u00F4ng b\u00E1o n\u00E0o.", 4, "ngIf"], [1, "text-sm", "text-gray-500"], [1, "text-sm", "text-gray-500", "underline", 3, "click"], [1, "p-4", "space-y-2"], ["type", "button", "class", "w-full flex gap-3 p-4 rounded-xl transition-colors text-left", 3, "class", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "w-full", "flex", "gap-3", "p-4", "rounded-xl", "transition-colors", "text-left", 3, "click"], [1, "w-10", "h-10", "rounded-full", "flex", "items-center", "justify-center", "flex-shrink-0"], [1, "flex-1", "min-w-0"], [1, "flex", "items-start", "justify-between", "gap-2"], [1, "text-sm", "font-medium"], ["class", "w-2 h-2 bg-black rounded-full flex-shrink-0 mt-1.5", 4, "ngIf"], [1, "text-xs", "text-gray-500", "mt-1", "line-clamp-2"], [1, "text-xs", "text-gray-400", "mt-2"], [1, "w-2", "h-2", "bg-black", "rounded-full", "flex-shrink-0", "mt-1.5"], ["icon", "\uD83D\uDD14", "title", "B\u1EA1n \u0111\u00E3 \u0111\u1ECDc h\u1EBFt r\u1ED3i!", "message", "Kh\u00F4ng c\u00F2n th\u00F4ng b\u00E1o n\u00E0o."]],
    template: function NotificationsPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NotificationsPage_Template_button_click_3_listener() {
          return ctx.goBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Th\u00F4ng b\u00E1o");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, NotificationsPage_span_9_Template, 2, 1, "span", 8)(10, NotificationsPage_button_10_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, NotificationsPage_div_11_Template, 2, 1, "div", 10)(12, NotificationsPage_app_empty_state_12_Template, 1, 0, "app-empty-state", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.unreadCount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.unreadCount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.notifications.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.notifications.length === 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _components_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_6__.EmptyStateComponent],
    styles: [".line-clamp-2[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMucGFnZS50cyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNoYXRib3QlMjBhaVxcaW9uaWMtdGFpbHdpbmQtYXBwXFxzcmNcXGFwcFxccGFnZXNcXG5vdGlmaWNhdGlvbnNcXG5vdGlmaWNhdGlvbnMucGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDTTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FDQVIiLCJmaWxlIjoibm90aWZpY2F0aW9ucy5wYWdlLnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAubGluZS1jbGFtcC0yIHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAiLCIubGluZS1jbGFtcC0yIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2UudHMiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9jaGF0Ym90JTIwYWkvaW9uaWMtdGFpbHdpbmQtYXBwL3NyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ007RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ0FSO0FEQ0EsbzBCQUFvMEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC5saW5lLWNsYW1wLTIge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgICIsIi5saW5lLWNsYW1wLTIge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_pages_notifications_notifications_page_ts.js.map