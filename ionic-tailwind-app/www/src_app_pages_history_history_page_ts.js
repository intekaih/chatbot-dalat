"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_history_history_page_ts"],{

/***/ 1177
/*!***********************************************!*\
  !*** ./src/app/pages/history/history.page.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistoryPage: () => (/* binding */ HistoryPage)
/* harmony export */ });
/* harmony import */ var E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular/standalone */ 7241);
/* harmony import */ var _components_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ui/empty-state/empty-state.component */ 5488);
/* harmony import */ var _services_firestore_chat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/firestore-chat.service */ 6268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2481);

var _staticBlock;









const _c0 = () => [1, 2, 3];
function HistoryPage_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HistoryPage_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.clearAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " X\u00F3a t\u1EA5t c\u1EA3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function HistoryPage_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 10);
  }
}
function HistoryPage_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HistoryPage_div_5_div_1_Template, 1, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c0));
  }
}
function HistoryPage_div_6_article_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "article", 14)(1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HistoryPage_div_6_article_2_Template_button_click_1_listener() {
      const session_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.openChat(session_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 16)(3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "svg", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 20)(7, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 23)(12, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HistoryPage_div_6_article_2_Template_button_click_14_listener($event) {
      const session_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.deleteSession($event, session_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const session_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-label", "M\u1EDF cu\u1ED9c tr\u00F2 chuy\u1EC7n: " + session_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", session_r4.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", session_r4.messageCount || 0, " tin nh\u1EAFn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.formatDate(session_r4.updatedAt), " ");
  }
}
function HistoryPage_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, HistoryPage_div_6_article_2_Template, 17, 4, "article", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.sessions);
  }
}
function HistoryPage_app_empty_state_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-empty-state", 27);
  }
}
class HistoryPage {
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
    this.alertCtrl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_ionic_angular_standalone__WEBPACK_IMPORTED_MODULE_5__.AlertController);
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DestroyRef);
    this.sessions = [];
    this.isLoading = true;
    this.firestoreChat = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_firestore_chat_service__WEBPACK_IMPORTED_MODULE_7__.FirestoreChatService);
  }
  ngOnInit() {
    this.firestoreChat.getSessions().pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.takeUntilDestroyed)(this.destroyRef)).subscribe({
      next: sessions => {
        this.sessions = sessions;
        this.isLoading = false;
      },
      error: () => {
        this.sessions = [];
        this.isLoading = false;
      }
    });
  }
  openChat(session) {
    this.router.navigate(["/home/chat"], {
      state: {
        sessionId: session.id,
        prompt: session.title
      }
    });
  }
  deleteSession(event, session) {
    event.stopPropagation();
    // Xóa khỏi UI ngay để UX nhanh
    this.sessions = this.sessions.filter(s => s.id !== session.id);
    // Xóa trên Firestore
    if (session.id) {
      this.firestoreChat.deleteSession(session.id);
    }
  }
  clearAll() {
    var _this = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertCtrl.create({
        header: "Xóa tất cả lịch sử",
        message: "Bạn có chắc muốn xóa toàn bộ lịch sử chat? Hành động này không thể hoàn tác.",
        buttons: [{
          text: "Huỷ",
          role: "cancel"
        }, {
          text: "Xóa tất cả",
          role: "destructive",
          handler: () => {
            const toDelete = [..._this.sessions];
            _this.sessions = [];
            toDelete.forEach(s => {
              if (s.id) _this.firestoreChat.deleteSession(s.id);
            });
          }
        }]
      });
      yield alert.present();
    })();
  }
  formatDate(date) {
    // Hỗ trợ cả Firestore Timestamp lẫn Date bình thường
    const d = date?.toDate ? date.toDate() : new Date(date);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return "Hôm nay";
    if (diffDays === 1) return "Hôm qua";
    return d.toLocaleDateString("vi-VN", {
      day: "numeric",
      month: "numeric"
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function HistoryPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || HistoryPage)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: HistoryPage,
    selectors: [["app-history"]],
    decls: 8,
    vars: 4,
    consts: [[1, "bg-white", "min-h-screen", 2, "padding-bottom", "calc(4rem + env(safe-area-inset-bottom))"], [1, "px-4", "pt-4", "pb-4", "border-b", "border-gray-100", "flex", "items-center", "justify-between"], [1, "text-2xl", "font-semibold", "text-gray-900"], ["class", "text-sm text-gray-400", 3, "click", 4, "ngIf"], ["class", "p-4 space-y-2", 4, "ngIf"], ["class", "p-4", 4, "ngIf"], ["icon", "\uD83D\uDCAC", "title", "Ch\u01B0a c\u00F3 l\u1ECBch s\u1EED", "message", "B\u1EA1n ch\u01B0a c\u00F3 cu\u1ED9c tr\u00F2 chuy\u1EC7n n\u00E0o. H\u00E3y b\u1EAFt \u0111\u1EA7u chat v\u1EDBi AI!", 4, "ngIf"], [1, "text-sm", "text-gray-400", 3, "click"], [1, "p-4", "space-y-2"], ["class", "h-16 bg-gray-100 rounded-xl animate-pulse", 4, "ngFor", "ngForOf"], [1, "h-16", "bg-gray-100", "rounded-xl", "animate-pulse"], [1, "p-4"], [1, "space-y-2"], ["class", "relative p-4 border border-gray-100 rounded-xl", 4, "ngFor", "ngForOf"], [1, "relative", "p-4", "border", "border-gray-100", "rounded-xl"], ["type", "button", 1, "w-full", "flex", "items-center", "gap-3", "text-left", 3, "click"], [1, "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "rounded-full", "bg-gray-100", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"], [1, "flex-1", "min-w-0"], [1, "font-medium", "text-gray-900", "text-sm", "truncate"], [1, "text-xs", "text-gray-400"], [1, "text-right", "flex-shrink-0"], ["type", "button", "aria-label", "X\u00F3a cu\u1ED9c tr\u00F2 chuy\u1EC7n", 1, "absolute", "top-2", "right-2", "p-2", "text-gray-400", "hover:text-red-500", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], ["icon", "\uD83D\uDCAC", "title", "Ch\u01B0a c\u00F3 l\u1ECBch s\u1EED", "message", "B\u1EA1n ch\u01B0a c\u00F3 cu\u1ED9c tr\u00F2 chuy\u1EC7n n\u00E0o. H\u00E3y b\u1EAFt \u0111\u1EA7u chat v\u1EDBi AI!"]],
    template: function HistoryPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "L\u1ECBch s\u1EED chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, HistoryPage_button_4_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, HistoryPage_div_5_Template, 2, 2, "div", 4)(6, HistoryPage_div_6_Template, 3, 1, "div", 5)(7, HistoryPage_app_empty_state_7_Template, 1, 0, "app-empty-state", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.sessions.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.sessions.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.sessions.length === 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _components_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_6__.EmptyStateComponent],
    encapsulation: 2
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_pages_history_history_page_ts.js.map