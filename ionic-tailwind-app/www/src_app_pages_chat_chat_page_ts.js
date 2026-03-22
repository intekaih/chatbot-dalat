"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_chat_chat_page_ts"],{

/***/ 3012
/*!**********************************************************************!*\
  !*** ./src/app/components/chat/chat-bubble/chat-bubble.component.ts ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatBubbleComponent: () => (/* binding */ ChatBubbleComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;



function ChatBubbleComponent_div_0_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 6);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function ChatBubbleComponent_div_0_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.content);
  }
}
function ChatBubbleComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ChatBubbleComponent_div_0_img_2_Template, 1, 1, "img", 4)(3, ChatBubbleComponent_div_0_p_3_Template, 2, 1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.content);
  }
}
function ChatBubbleComponent_div_1_div_2_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("error", function ChatBubbleComponent_div_1_div_2_img_1_Template_img_error_0_listener($event) {
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.onImageError($event, i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const imgUrl_r4 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", imgUrl_r4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", "\u1EA2nh \u0111\u1ECBa \u0111i\u1EC3m " + (i_r3 + 1));
  }
}
function ChatBubbleComponent_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChatBubbleComponent_div_1_div_2_img_1_Template, 1, 2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.imageUrls);
  }
}
function ChatBubbleComponent_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("error", function ChatBubbleComponent_div_1_div_3_Template_img_error_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.onImageError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", "\u1EA2nh \u0111\u1ECBa \u0111i\u1EC3m");
  }
}
function ChatBubbleComponent_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 20);
  }
}
function ChatBubbleComponent_div_1_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p", 21);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r0.parseContent(ctx_r0.content), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function ChatBubbleComponent_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 22);
  }
}
function ChatBubbleComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ChatBubbleComponent_div_1_div_2_Template, 2, 1, "div", 10)(3, ChatBubbleComponent_div_1_div_3_Template, 2, 2, "div", 11)(4, ChatBubbleComponent_div_1_span_4_Template, 1, 0, "span", 12)(5, ChatBubbleComponent_div_1_p_5_Template, 1, 1, "p", 13)(6, ChatBubbleComponent_div_1_span_6_Template, 1, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.imageUrls && ctx_r0.imageUrls.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.imageUrl && (!ctx_r0.imageUrls || ctx_r0.imageUrls.length === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.streaming && !ctx_r0.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.streaming && ctx_r0.content);
  }
}
class ChatBubbleComponent {
  constructor() {
    this.role = 'user';
    this.content = '';
    this.imageUrl = null;
    this.imageUrls = []; // Multiple images from Pexels
    this.streaming = false;
  }
  parseContent(content) {
    let parsed = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    parsed = parsed.replace(/^• /gm, '<span class="pl-2">• ');
    parsed = parsed.replace(/^- /gm, '<span class="pl-2">- ');
    return parsed;
  }
  onImageError(event, index) {
    const img = event.target;
    const hasTriedOther = img.dataset['triedOther'] === 'true';
    console.warn(`🖼️ [ChatBubble] Image failed: ${img.src.substring(0, 80)}...`);
    // Strategy 1: Thử các URLs khác từ imageUrls array
    if (this.imageUrls && this.imageUrls.length > 0) {
      const triedUrls = img.dataset['triedUrls'] ? img.dataset['triedUrls'].split(',') : [];
      for (let i = 0; i < this.imageUrls.length; i++) {
        const url = this.imageUrls[i];
        if (url && url !== img.src && !triedUrls.includes(url)) {
          console.log(`  → Trying URL ${i + 1}/${this.imageUrls.length}: ${url.substring(0, 60)}...`);
          triedUrls.push(img.src);
          img.dataset['triedUrls'] = triedUrls.join(',');
          img.src = url;
          return;
        }
      }
    }
    // Final: Placeholder (tất cả URLs đều fail)
    if (!hasTriedOther) {
      img.dataset['triedOther'] = 'true';
      console.log(`  → Using placeholder (all Pexels URLs failed)`);
      img.onerror = null;
      img.src = 'https://placehold.co/600x400/e2e8f0/64748b?text=Đà+Lạt';
    }
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ChatBubbleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ChatBubbleComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ChatBubbleComponent,
    selectors: [["app-chat-bubble"]],
    inputs: {
      role: "role",
      content: "content",
      imageUrl: "imageUrl",
      imageUrls: "imageUrls",
      streaming: "streaming"
    },
    decls: 2,
    vars: 2,
    consts: [["class", "flex justify-end mb-4", 4, "ngIf"], ["class", "flex gap-3 mb-4", 4, "ngIf"], [1, "flex", "justify-end", "mb-4"], [1, "bg-black", "text-white", "rounded-2xl", "rounded-tr-sm", "px-4", "py-2.5", "max-w-[80%]", "flex", "flex-col", "gap-2"], ["alt", "\u1EA2nh \u0111\u00EDnh k\u00E8m", "class", "rounded-xl max-h-48 w-auto object-cover self-end", 3, "src", 4, "ngIf"], ["class", "text-sm whitespace-pre-wrap", 4, "ngIf"], ["alt", "\u1EA2nh \u0111\u00EDnh k\u00E8m", 1, "rounded-xl", "max-h-48", "w-auto", "object-cover", "self-end", 3, "src"], [1, "text-sm", "whitespace-pre-wrap"], [1, "flex", "gap-3", "mb-4"], [1, "bg-gray-50", "rounded-2xl", "rounded-tl-sm", "px-4", "py-2.5", "max-w-[80%]", "flex", "flex-col", "gap-2"], ["class", "grid grid-cols-2 gap-2", 4, "ngIf"], ["class", "flex flex-col gap-2", 4, "ngIf"], ["class", "inline-block w-2 h-4 bg-gray-400 rounded-sm animate-pulse align-middle", 4, "ngIf"], ["class", "text-sm text-gray-900 whitespace-pre-wrap leading-relaxed", 3, "innerHTML", 4, "ngIf"], ["class", "streaming-cursor", 4, "ngIf"], [1, "grid", "grid-cols-2", "gap-2"], ["class", "rounded-xl max-h-48 w-full object-cover", "referrerPolicy", "no-referrer", "crossorigin", "anonymous", 3, "src", "alt", "error", 4, "ngFor", "ngForOf"], ["referrerPolicy", "no-referrer", "crossorigin", "anonymous", 1, "rounded-xl", "max-h-48", "w-full", "object-cover", 3, "error", "src", "alt"], [1, "flex", "flex-col", "gap-2"], ["referrerPolicy", "no-referrer", "crossorigin", "anonymous", 1, "rounded-xl", "max-h-64", "w-full", "object-cover", 3, "error", "src", "alt"], [1, "inline-block", "w-2", "h-4", "bg-gray-400", "rounded-sm", "animate-pulse", "align-middle"], [1, "text-sm", "text-gray-900", "whitespace-pre-wrap", "leading-relaxed", 3, "innerHTML"], [1, "streaming-cursor"]],
    template: function ChatBubbleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ChatBubbleComponent_div_0_Template, 4, 2, "div", 0)(1, ChatBubbleComponent_div_1_Template, 7, 5, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.role === "user");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.role === "assistant");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf],
    styles: [".streaming-cursor[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 2px;\n  height: 1em;\n  background-color: #374151;\n  margin-left: 2px;\n  vertical-align: text-bottom;\n  animation: _ngcontent-%COMP%_blink 0.7s step-end infinite;\n}\n\n@keyframes _ngcontent-%COMP%_blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtYnViYmxlLmNvbXBvbmVudC50cyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxjaGF0Ym90JTIwYWlcXGlvbmljLXRhaWx3aW5kLWFwcFxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNoYXRcXGNoYXQtYnViYmxlXFxjaGF0LWJ1YmJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUNBQUE7QUNBTjs7QURFSTtFQUNFO0lBQVcsVUFBQTtFQ0VmO0VEREk7SUFBTSxVQUFBO0VDSVY7QUFDRiIsImZpbGUiOiJjaGF0LWJ1YmJsZS5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuc3RyZWFtaW5nLWN1cnNvciB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMnB4O1xuICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc0MTUxO1xuICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgICAgIGFuaW1hdGlvbjogYmxpbmsgMC43cyBzdGVwLWVuZCBpbmZpbml0ZTtcbiAgICB9XG4gICAgQGtleWZyYW1lcyBibGluayB7XG4gICAgICAwJSwgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbiAgICAgIDUwJSB7IG9wYWNpdHk6IDA7IH1cbiAgICB9XG4gICIsIi5zdHJlYW1pbmctY3Vyc29yIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDFlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NDE1MTtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICBhbmltYXRpb246IGJsaW5rIDAuN3Mgc3RlcC1lbmQgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICAwJSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQtYnViYmxlL2NoYXQtYnViYmxlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8uLy4uLy4uL2NoYXRib3QlMjBhaS9pb25pYy10YWlsd2luZC1hcHAvc3JjL2FwcC9jb21wb25lbnRzL2NoYXQvY2hhdC1idWJibGUvY2hhdC1idWJibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVDQUFBO0FDQU47O0FERUk7RUFDRTtJQUFXLFVBQUE7RUNFZjtFRERJO0lBQU0sVUFBQTtFQ0lWO0FBQ0Y7QURDQSw0NUNBQTQ1QyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5zdHJlYW1pbmctY3Vyc29yIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAycHg7XG4gICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzQxNTE7XG4gICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgICAgYW5pbWF0aW9uOiBibGluayAwLjdzIHN0ZXAtZW5kIGluZmluaXRlO1xuICAgIH1cbiAgICBAa2V5ZnJhbWVzIGJsaW5rIHtcbiAgICAgIDAlLCAxMDAlIHsgb3BhY2l0eTogMTsgfVxuICAgICAgNTAlIHsgb3BhY2l0eTogMDsgfVxuICAgIH1cbiAgIiwiLnN0cmVhbWluZy1jdXJzb3Ige1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogMWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc0MTUxO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gIGFuaW1hdGlvbjogYmxpbmsgMC43cyBzdGVwLWVuZCBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gIDAlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ },

/***/ 7339
/*!*****************************************!*\
  !*** ./src/app/pages/chat/chat.page.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatPage: () => (/* binding */ ChatPage)
/* harmony export */ });
/* harmony import */ var E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/camera */ 2601);
/* harmony import */ var _components_chat_chat_bubble_chat_bubble_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/chat/chat-bubble/chat-bubble.component */ 3012);
/* harmony import */ var _components_place_place_card_place_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/place/place-card/place-card.component */ 1867);
/* harmony import */ var _services_ai_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/ai.service */ 1412);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/api.service */ 3366);
/* harmony import */ var _config_ai_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../config/ai.config */ 5391);
/* harmony import */ var _services_firestore_chat_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/firestore-chat.service */ 6268);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/storage.service */ 7291);
/* harmony import */ var _services_firestore_trips_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/firestore-trips.service */ 6442);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/auth */ 9082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2481);

var _staticBlock;



















const _c0 = ["messagesEnd"];
const _c1 = ["messageInput"];
const _c2 = ["cameraInput"];
const _c3 = ["galleryInput"];
const _c4 = ["menuRef"];
const _c5 = ["modelPickerRef"];
const _c6 = () => [];
function ChatPage_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 38)(1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "\uD83D\uDCCD");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 40)(4, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, "\u0110ang h\u1ECFi v\u1EC1");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ChatPage_div_17_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.contextPlace = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](10, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r2.contextPlace);
  }
}
function ChatPage_div_19_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ChatPage_div_19_button_9_Template_button_click_0_listener() {
      const prompt_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.sendQuickPrompt(prompt_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const prompt_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", prompt_r5, " ");
  }
}
function ChatPage_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 45)(1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "svg", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, "Xin ch\u00E0o! \uD83D\uDC4B");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7, "T\u00F4i c\u00F3 th\u1EC3 gi\u00FAp g\u00EC cho b\u1EA1n?");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, ChatPage_div_19_button_9_Template, 2, 1, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r2.quickPrompts);
  }
}
function ChatPage_div_20_app_chat_bubble_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-chat-bubble", 58);
  }
  if (rf & 2) {
    const msg_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("role", msg_r6.role)("content", msg_r6.content)("imageUrl", msg_r6.imageUrl ?? null)("imageUrls", msg_r6.imageUrls || _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](4, _c6));
  }
}
function ChatPage_div_20_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 59)(1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "span", 61)(3, "span", 62)(4, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
}
function ChatPage_div_20_div_3_app_place_card_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-place-card", 68);
  }
  if (rf & 2) {
    const place_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("place", place_r7);
  }
}
function ChatPage_div_20_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 64)(1, "h4", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, " \u0110\u1ECBa \u0111i\u1EC3m li\u00EAn quan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, ChatPage_div_20_div_3_app_place_card_4_Template, 1, 1, "app-place-card", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r2.relatedPlaces);
  }
}
function ChatPage_div_20_div_4__svg_svg_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "path", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function ChatPage_div_20_div_4__svg_svg_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "svg", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "path", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function ChatPage_div_20_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 69)(1, "div", 70)(2, "div", 71)(3, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, "\uD83D\uDCC5");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, "L\u01B0u l\u1ECBch tr\u00ECnh n\u00E0y?");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8, "AI v\u1EEBa g\u1EE3i \u00FD m\u1ED9t l\u1ECBch tr\u00ECnh cho b\u1EA1n. L\u01B0u l\u1EA1i \u0111\u1EC3 xem v\u00E0 ch\u1EC9nh s\u1EEDa sau!");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 75)(10, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ChatPage_div_20_div_4_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.saveTrip());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](11, ChatPage_div_20_div_4__svg_svg_11_Template, 2, 0, "svg", 77)(12, ChatPage_div_20_div_4__svg_svg_12_Template, 2, 0, "svg", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ChatPage_div_20_div_4_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.isTripResponse = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15, " B\u1ECF qua ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx_r2.isSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r2.isSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r2.isSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r2.isSaving ? "\u0110ang l\u01B0u..." : "L\u01B0u l\u1ECBch tr\u00ECnh", " ");
  }
}
function ChatPage_div_20_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 83)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r2.saveTripToast, " ");
  }
}
function ChatPage_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ChatPage_div_20_app_chat_bubble_1_Template, 1, 5, "app-chat-bubble", 53)(2, ChatPage_div_20_div_2_Template, 5, 0, "div", 54)(3, ChatPage_div_20_div_3_Template, 5, 1, "div", 55)(4, ChatPage_div_20_div_4_Template, 16, 4, "div", 56)(5, ChatPage_div_20_div_5_Template, 4, 1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "div", null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r2.messages);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r2.isTyping);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r2.isTyping && ctx_r2.relatedPlaces.length > 0 && ctx_r2.lastMessageRole === "assistant");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r2.isTyping && ctx_r2.isTripResponse && ctx_r2.lastMessageRole === "assistant");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r2.saveTripToast);
  }
}
function ChatPage_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 84)(1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ChatPage_div_23_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.previewImage = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "svg", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](5, "path", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("src", ctx_r2.previewImage, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeUrl"]);
  }
}
function ChatPage_div_30_div_32_button_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "svg", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "path", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function ChatPage_div_30_div_32_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ChatPage_div_30_div_32_button_1_Template_button_click_0_listener() {
      const model_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      ctx_r2.selectedModel = model_r13;
      ctx_r2.modelPickerOpen = false;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.menuOpen = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, ChatPage_div_30_div_32_button_1__svg_svg_2_Template, 2, 0, "svg", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 11)(4, "div", 109)(5, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const model_r13 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r2.selectedModel.id === model_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](model_r13.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](model_r13.desc);
  }
}
function ChatPage_div_30_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ChatPage_div_30_div_32_button_1_Template, 9, 3, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r2.aiModels);
  }
}
function ChatPage_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 90)(1, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ChatPage_div_30_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.takePhoto());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "svg", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "path", 94)(5, "path", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div")(7, "p", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8, "Ch\u1EE5p \u1EA3nh");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10, "M\u1EDF camera \u0111\u1EC3 ch\u1EE5p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ChatPage_div_30_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      const galleryInput_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](34);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](galleryInput_r11.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "svg", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](14, "path", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "div")(16, "p", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](17, "Th\u00EAm \u1EA3nh");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19, "Ch\u1ECDn t\u1EEB th\u01B0 vi\u1EC7n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](20, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ChatPage_div_30_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.modelPickerOpen = !ctx_r2.modelPickerOpen);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "svg", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](24, "path", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](25, "div", 11)(26, "p", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](27, "Ch\u1ECDn AI Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](28, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](30, "svg", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](31, "path", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](32, ChatPage_div_30_div_32_Template, 2, 1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r2.selectedModel.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵstyleProp"]("transform", ctx_r2.modelPickerOpen ? "rotate(90deg)" : "rotate(0deg)");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r2.modelPickerOpen);
  }
}
class ChatPage {
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    this.route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute);
    this.aiService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_ai_service__WEBPACK_IMPORTED_MODULE_11__.AIService);
    this.apiService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_api_service__WEBPACK_IMPORTED_MODULE_12__.ApiService);
    this.firestoreChat = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_firestore_chat_service__WEBPACK_IMPORTED_MODULE_14__.FirestoreChatService);
    this.storageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_storage_service__WEBPACK_IMPORTED_MODULE_15__.StorageService);
    this.firestoreTrips = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_firestore_trips_service__WEBPACK_IMPORTED_MODULE_16__.FirestoreTripsService);
    this.auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__.Auth);
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.SESSION_KEY = "chat_messages";
    this.SESSION_ID_KEY = "chat_session_id";
    this.SESSION_UID_KEY = "chat_uid";
    this.currentSessionId = null;
    this.messages = [];
    this.inputMessage = "";
    this.isTyping = false;
    this.showModelPicker = false;
    this.menuOpen = false;
    this.modelPickerOpen = false;
    this.previewImage = null;
    this.quickPrompts = ["Lịch trình 2 ngày 1 đêm", "Quán cafe đẹp", "Địa điểm hot"];
    this.relatedPlaces = [];
    this.lastMessageRole = null;
    this.isTripResponse = false;
    this.isSaving = false;
    this.saveTripToast = "";
    this.contextPlace = ""; // Name of place when navigating from place-detail
    this.shouldScrollToBottom = false;
    this.aiModels = _config_ai_config__WEBPACK_IMPORTED_MODULE_13__.AI_CONFIG.models.map((m, i) => ({
      id: m.id,
      label: m.name,
      desc: m.description,
      badge: i === 0 ? "Khuyên dùng" : ""
    }));
    this.selectedModel = this.aiModels[0];
    this.outsideClickHandler = e => {
      const target = e.target;
      const menuContains = this.menuRef?.nativeElement?.contains(target);
      const pickerContains = this.modelPickerRef?.nativeElement?.contains(target);
      if (!menuContains && !pickerContains) {
        this.menuOpen = false;
        this.showModelPicker = false;
      }
    };
    // ── Session persistence ──────────────────────────────────────────────────
    this.currentFirestoreSessionId = null;
  }
  ngOnInit() {
    // Use window.history.state — works for lazy-loaded routes where getCurrentNavigation() returns null
    const state = window.history.state || {};
    const prompt = state.prompt;
    if (prompt) {
      // Extract context place name if the prompt follows "Cho tôi thông tin về XYZ"
      const match = prompt.match(/(?:Cho tôi thông tin về|Hỏi về|Về|About)\s+(.+)/i);
      if (match) this.contextPlace = match[1].replace(/["'.]/g, '').trim();
      // Bắt đầu chat mới, xóa session cũ
      this.clearSession();
      // Điền vào ô input để user xem và tự gửi (không auto-send)
      this.inputMessage = prompt;
    } else {
      // Không có prompt → khôi phục đoạn chat trước (nếu có)
      this.restoreFromSession();
    }
    document.addEventListener("mousedown", this.outsideClickHandler);
    // Load personalised quick prompts from BE
    this.apiService.getPersonalizedData().subscribe(data => {
      if (data.quickPrompts?.length) {
        this.quickPrompts = data.quickPrompts;
      }
    });
  }
  ngAfterViewChecked() {
    // Chỉ cuộn xuống khi có tin nhắn mới (đang streaming hoặc vừa thêm tin nhắn)
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  }
  /** Đánh dấu cần cuộn xuống - gọi sau khi thêm tin nhắn */
  markForScroll() {
    this.shouldScrollToBottom = true;
  }
  ngOnDestroy() {
    document.removeEventListener("mousedown", this.outsideClickHandler);
    this.destroy$.next();
    this.destroy$.complete();
  }
  // Mở rộng session persistence: vừa dùng sessionStorage (nhanh) vừa Firestore (bền vững)
  saveToSession() {
    const uid = this.auth.currentUser?.uid;
    if (!uid) return;
    try {
      sessionStorage.setItem(this.SESSION_UID_KEY, uid);
      sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(this.messages));
    } catch {
      /* quota exceeded – silently ignore */
    }
  }
  /** Lưu message vào Firestore (async, không block UI) */
  saveMessageToFirestore(message) {
    var _this = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Tạo session Firestore nếu chưa có
        if (!_this.currentFirestoreSessionId) {
          const title = message.content.slice(0, 40) || 'Cuộc trò chuyện mới';
          _this.currentFirestoreSessionId = yield _this.firestoreChat.createSession(title);
        }
        if (_this.currentFirestoreSessionId) {
          yield _this.firestoreChat.addMessage(_this.currentFirestoreSessionId, {
            role: message.role,
            content: message.content,
            imageUrl: message.imageUrl ?? null,
            imageUrls: message.imageUrls,
            timestamp: new Date()
          });
        }
      } catch (e) {
        console.warn('Could not save message to Firestore:', e);
      }
    })();
  }
  restoreFromSession() {
    try {
      const currentUid = this.auth.currentUser?.uid ?? null;
      const savedUid = sessionStorage.getItem(this.SESSION_UID_KEY);
      if (savedUid && currentUid && savedUid !== currentUid) {
        this.clearSession();
        return;
      }
      const raw = sessionStorage.getItem(this.SESSION_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          this.messages = parsed.map(m => ({
            ...m,
            timestamp: new Date(m.timestamp)
          }));
        }
      }
      this.currentSessionId = sessionStorage.getItem(this.SESSION_ID_KEY);
    } catch {
      /* corrupted data – start fresh */
    }
  }
  clearSession() {
    try {
      sessionStorage.removeItem(this.SESSION_KEY);
      sessionStorage.removeItem(this.SESSION_ID_KEY);
      sessionStorage.removeItem(this.SESSION_UID_KEY);
    } catch {}
    this.messages = [];
    this.relatedPlaces = [];
    this.currentSessionId = null;
    this.currentFirestoreSessionId = null;
  }
  /** Nút New Chat ở header */
  startNewChat() {
    this.clearSession();
    this.inputMessage = "";
    this.previewImage = null;
    this.menuOpen = false;
    this.showModelPicker = false;
  }
  /** Nút History ở header */
  goToHistory() {
    this.router.navigate(["/home/history"]);
  }
  // ─────────────────────────────────────────────────────────────────────────
  scrollToBottom() {
    if (this.messagesEnd) {
      this.messagesEnd.nativeElement.scrollIntoView({
        behavior: "smooth"
      });
    }
  }
  onInput() {
    const el = this.messageInput.nativeElement;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 128) + "px";
  }
  onEnter(event) {
    const e = event;
    if (!e.shiftKey) {
      e.preventDefault();
      this.sendMessage();
    }
  }
  toggleModelPicker() {
    this.showModelPicker = !this.showModelPicker;
  }
  selectModel(model) {
    this.selectedModel = model;
    this.showModelPicker = false;
  }
  onImageSelect(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => this.previewImage = e.target?.result;
    reader.readAsDataURL(file);
    event.target.value = "";
    this.menuOpen = false;
    this.modelPickerOpen = false;
  }
  /** Chụp ảnh bằng Capacitor Camera (native) */
  takePhoto() {
    var _this2 = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const photo = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_8__.Camera.getPhoto({
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_8__.CameraResultType.DataUrl,
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_8__.CameraSource.Camera,
          quality: 80,
          allowEditing: false
        });
        if (photo.dataUrl) {
          _this2.previewImage = photo.dataUrl;
        }
      } catch (e) {
        // User cancelled hoặc permission denied — không báo lỗi
        console.warn('Camera cancelled or failed:', e?.message);
      }
      _this2.menuOpen = false;
      _this2.modelPickerOpen = false;
    })();
  }
  sendQuickPrompt(prompt) {
    this.inputMessage = prompt;
    this.sendMessage();
  }
  sendMessage() {
    if (!this.inputMessage.trim() && !this.previewImage) return;
    const userMessage = {
      id: Date.now().toString(),
      role: "user",
      content: this.inputMessage,
      timestamp: new Date(),
      imageUrl: this.previewImage ?? undefined
    };
    this.messages.push(userMessage);
    this.lastMessageRole = "user";
    this.markForScroll();
    const userInput = this.inputMessage;
    const imageToSend = this.previewImage ?? undefined;
    this.inputMessage = "";
    this.previewImage = null;
    this.relatedPlaces = [];
    this.isTyping = true; // Hiển thị ngay, không delay
    this.markForScroll();
    // Upload ảnh lên Firebase Storage nếu có (async, không block UI)
    if (imageToSend && imageToSend.startsWith('data:')) {
      this.storageService.uploadChatImage(imageToSend).subscribe(storageUrl => {
        // Cập nhật message đã push vào mảng với URL từ Storage
        const idx = this.messages.findIndex(m => m.id === userMessage.id);
        if (idx >= 0) this.messages[idx].imageUrl = storageUrl;
        // Lưu vào Firestore với Storage URL
        this.saveMessageToFirestore({
          role: 'user',
          content: userInput,
          imageUrl: storageUrl
        });
      });
    } else {
      // Lưu vào Firestore không có ảnh
      this.saveMessageToFirestore({
        role: 'user',
        content: userInput
      });
    }
    const historyMessages = this.messages.filter(m => m.role !== "assistant" || m.content).map(m => ({
      role: m.role,
      content: m.content
    })).slice(-10); // Giới hạn 10 messages (5 lần hỏi đáp) để giảm payload
    // Gửi tin nhắn — tạo session BE nếu chưa có (lazy creation)
    const doSend = sessionId => {
      this.aiService.chat(historyMessages, this.selectedModel.id, imageToSend, sessionId ?? undefined).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
        next: response => {
          this.isTyping = false;
          const content = response.choices[0]?.message?.content || "Xin lỗi, tôi không thể trả lời lúc này.";
          const assistantMessage = {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content,
            timestamp: new Date()
          };
          this.messages.push(assistantMessage);
          this.lastMessageRole = "assistant";
          this.isTripResponse = this.userRequestedTrip() && this.detectTripContent(content);
          this.markForScroll();
          this.saveToSession();
          this.saveMessageToFirestore({
            role: 'assistant',
            content
          });
          // Dùng suggestedPlaces trực tiếp từ /api/chat (không gọi extract-places riêng)
          const places = (response.suggestedPlaces || []).slice(0, 6);
          this.relatedPlaces = places;
          if (places.length > 0) {
            // Fetch images cho places tìm được — async, không block UI
            const imagePromises = places.slice(0, 4).map(place => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(this.apiService.getPlaceImage(place.id, place.name, place.category, place.address, true)).catch(() => null));
            Promise.all(imagePromises).then(results => {
              const imageUrls = [];
              for (const result of results) {
                if (!result) continue;
                if (result.imageUrls?.length) {
                  imageUrls.push(...result.imageUrls.slice(0, 2));
                } else if (result.imageUrl) {
                  imageUrls.push(result.imageUrl);
                }
              }
              if (imageUrls.length > 0) {
                const proxyUrls = this.apiService.getImageProxyUrls(imageUrls);
                const msgIndex = this.messages.findIndex(m => m.id === assistantMessage.id);
                if (msgIndex >= 0) {
                  if (proxyUrls.length === 1) {
                    this.messages[msgIndex].imageUrl = proxyUrls[0];
                  } else {
                    this.messages[msgIndex].imageUrls = proxyUrls;
                  }
                  this.saveToSession();
                  this.markForScroll();
                }
              }
            });
          }
        },
        error: () => {
          this.isTyping = false;
          this.messages.push({
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: "Xin lỗi, đã xảy ra lỗi khi kết nối với AI. Vui lòng thử lại sau.",
            timestamp: new Date()
          });
          this.markForScroll();
          this.saveToSession();
        }
      });
    };
    if (this.currentSessionId) {
      // Đã có session — gửi trực tiếp
      doSend(this.currentSessionId);
    } else {
      // Chưa có session — tạo mới trước, rồi gửi
      const title = userInput.slice(0, 60) || "Chat mới";
      this.apiService.createChatSession(title).subscribe({
        next: session => {
          if (session.id) {
            this.currentSessionId = session.id;
            try {
              sessionStorage.setItem(this.SESSION_ID_KEY, session.id);
            } catch {}
          }
          doSend(this.currentSessionId);
        },
        error: () => {
          // Session creation failed — vẫn gửi tin nhắn, chỉ không lưu lịch sử BE
          doSend(null);
        }
      });
    }
  }
  userRequestedTrip() {
    const lastUser = [...this.messages].reverse().find(m => m.role === 'user');
    if (!lastUser) return false;
    const lower = lastUser.content.toLowerCase();
    const tripRequests = ['lịch trình', 'kế hoạch', 'plan', 'itinerary', 'ngày đêm', 'n đêm', 'chuyến đi', 'lên kế hoạch', 'tạo lịch', 'gợi ý lịch'];
    return tripRequests.some(k => lower.includes(k));
  }
  detectTripContent(text) {
    const lower = text.toLowerCase();
    // Strong keywords that unambiguously signal an itinerary
    const strongKeywords = ['lịch trình', 'ngày 1', 'ngày 2', 'ngày 3', 'day 1', 'day 2', 'itinerary', 'kế hoạch chuyến', 'lên kế hoạch'];
    const hasStrong = strongKeywords.some(k => lower.includes(k));
    if (!hasStrong) return false;
    // Must also have at least 2 time-of-day / structure signals
    const supportingKeywords = ['buổi sáng', 'buổi chiều', 'buổi tối', 'sáng:', 'chiều:', 'tối:', '7h', '8h', '9h', '10h', '17h', '18h', '19h'];
    return supportingKeywords.filter(k => lower.includes(k)).length >= 1;
  }
  saveTrip() {
    if (this.isSaving) return;
    const lastAI = [...this.messages].reverse().find(m => m.role === 'assistant');
    const lastUser = [...this.messages].reverse().find(m => m.role === 'user');
    if (!lastAI) return;
    this.isSaving = true;
    const title = lastUser?.content?.slice(0, 60) || 'Lịch trình Đà Lạt';
    const now = new Date();
    const startDate = now.toLocaleDateString('vi-VN');
    const endDate = new Date(now.getTime() + 2 * 86400000).toLocaleDateString('vi-VN');
    const fallbackImage = 'https://placehold.co/800x450/1a1a2e/ffffff?text=Đà+Lạt';
    // Lưu ngay với fallback image (không chờ AI generate ảnh)
    this.firestoreTrips.createTrip({
      title,
      destination: 'Đà Lạt, Lâm Đồng',
      coverImage: fallbackImage,
      startDate,
      endDate,
      status: 'upcoming',
      notes: lastAI.content
    }).then(tripId => {
      this.isSaving = false;
      this.isTripResponse = false;
      this.saveTripToast = 'Đã lưu vào Lịch trình!';
      setTimeout(() => {
        this.saveTripToast = '';
        this.router.navigate(['/home/favorites'], {
          state: {
            tab: 'trips'
          }
        });
      }, 1200);
      // Background: generate cover image và update sau (không block UI)
      if (tripId) {
        const imagePrompt = `Beautiful travel photo of Da Lat Vietnam, ${title}, scenic landscape, cinematic, high quality`;
        this.apiService.generateImage(imagePrompt).subscribe({
          next: dataUrl => {
            if (dataUrl) {
              this.firestoreTrips.updateTrip(tripId, {
                coverImage: dataUrl
              });
            }
          }
        });
      }
    }).catch(() => {
      this.isSaving = false;
      this.saveTripToast = 'Không thể lưu. Thử lại sau!';
      setTimeout(() => this.saveTripToast = '', 3000);
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ChatPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ChatPage)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
    type: ChatPage,
    selectors: [["app-chat"]],
    viewQuery: function ChatPage_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c5, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.messagesEnd = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.messageInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.cameraInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.galleryInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.menuRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.modelPickerRef = _t.first);
      }
    },
    decls: 40,
    vars: 13,
    consts: [["menuRef", ""], ["cameraInput", ""], ["galleryInput", ""], ["messageInput", ""], ["messagesEnd", ""], [1, "flex", "flex-col", "h-full", "overflow-hidden"], [1, "px-4", "pb-3", "bg-white", "border-b", "border-gray-100", 2, "padding-top", "calc(env(safe-area-inset-top, 24px) + 0.75rem)"], [1, "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "rounded-full", "bg-gradient-to-br", "from-gray-900", "to-gray-800", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"], [1, "flex-1"], [1, "text-base", "font-semibold", "text-gray-900"], [1, "text-xs", "text-gray-500"], ["title", "Cu\u1ED9c tr\u00F2 chuy\u1EC7n m\u1EDBi", 1, "w-9", "h-9", "rounded-lg", "bg-gray-100", "flex", "items-center", "justify-center", "hover:bg-gray-200", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["title", "L\u1ECBch s\u1EED chat", 1, "w-9", "h-9", "rounded-lg", "bg-gray-100", "flex", "items-center", "justify-center", "hover:bg-gray-200", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], ["class", "mx-4 mt-3 mb-1 flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-xl", 4, "ngIf"], [1, "flex-1", "overflow-y-auto", "px-4", "py-6"], ["class", "flex flex-col items-center justify-center h-full", 4, "ngIf"], [4, "ngIf"], [1, "px-3", "pb-3"], [1, "bg-white", "rounded-[28px]", "shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_12px_rgba(0,0,0,0.08)]", "transition-all"], ["class", "px-3 pt-3 pb-1 flex gap-2", 4, "ngIf"], [1, "px-3", "py-2", "flex", "items-end", "gap-1", "min-h-[52px]"], [1, "relative", "flex-shrink-0"], [1, "w-9", "h-9", "rounded-full", "flex", "items-center", "justify-center", "transition-all", "mb-0.5", 3, "click", "ngClass"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "transition-transform", "duration-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], ["class", "absolute bottom-14 left-0 w-60 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden z-50 py-1", 4, "ngIf"], ["type", "file", "accept", "image/*", "capture", "environment", 1, "hidden", 3, "change"], ["type", "file", "accept", "image/*", 1, "hidden", 3, "change"], ["placeholder", "Nh\u1EADp tin nh\u1EAFn...", "rows", "1", 1, "flex-1", "bg-transparent", "text-sm", "resize-none", "outline-none", "text-gray-900", "placeholder-gray-400", "py-2", "leading-relaxed", 2, "max-height", "160px", "min-height", "36px", 3, "ngModelChange", "input", "keydown.enter", "ngModel"], ["aria-label", "G\u1EEDi tin nh\u1EAFn", 1, "w-9", "h-9", "rounded-full", "flex", "items-center", "justify-center", "flex-shrink-0", "mb-0.5", "transition-all", 3, "click", "disabled", "ngClass"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 10l7-7m0 0l7 7m-7-7v18"], [1, "mx-4", "mt-3", "mb-1", "flex", "items-center", "gap-3", "p-3", "bg-gray-50", "border", "border-gray-200", "rounded-xl"], [1, "w-9", "h-9", "rounded-xl", "bg-white", "border", "border-gray-200", "flex", "items-center", "justify-center", "flex-shrink-0", "text-base"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-medium", "text-gray-900", "truncate"], [1, "text-gray-400", "hover:text-gray-600", "p-1", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "flex", "flex-col", "items-center", "justify-center", "h-full"], [1, "w-16", "h-16", "rounded-full", "bg-gray-100", "flex", "items-center", "justify-center", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-gray-600"], [1, "text-base", "font-medium", "text-gray-900", "mb-2"], [1, "text-sm", "text-gray-500", "mb-6"], [1, "flex", "flex-wrap", "justify-center", "gap-2"], ["class", "px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm", 3, "click", 4, "ngFor", "ngForOf"], [1, "px-4", "py-2", "bg-gray-50", "border", "border-gray-200", "rounded-full", "text-sm", 3, "click"], [3, "role", "content", "imageUrl", "imageUrls", 4, "ngFor", "ngForOf"], ["class", "flex gap-3 mb-4", 4, "ngIf"], ["class", "mt-4", 4, "ngIf"], ["class", "mt-4 mb-2", 4, "ngIf"], ["class", "fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white text-sm px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-lg", 4, "ngIf"], [3, "role", "content", "imageUrl", "imageUrls"], [1, "flex", "gap-3", "mb-4"], [1, "bg-gray-50", "rounded-2xl", "rounded-tl-sm", "px-4", "py-3", "flex", "gap-1"], [1, "w-2", "h-2", "bg-gray-400", "rounded-full", "animate-bounce", 2, "animation-delay", "0ms"], [1, "w-2", "h-2", "bg-gray-400", "rounded-full", "animate-bounce", 2, "animation-delay", "150ms"], [1, "w-2", "h-2", "bg-gray-400", "rounded-full", "animate-bounce", 2, "animation-delay", "300ms"], [1, "mt-4"], [1, "text-sm", "font-medium", "text-gray-700", "mb-3"], [1, "space-y-3"], ["variant", "compact", 3, "place", 4, "ngFor", "ngForOf"], ["variant", "compact", 3, "place"], [1, "mt-4", "mb-2"], [1, "bg-gradient-to-r", "from-indigo-50", "to-blue-50", "border", "border-indigo-100", "rounded-2xl", "p-4"], [1, "flex", "items-center", "gap-2", "mb-2"], [1, "text-lg"], [1, "text-sm", "font-semibold", "text-gray-900"], [1, "text-xs", "text-gray-500", "mb-3"], [1, "flex", "gap-2"], [1, "flex-1", "py-2.5", "bg-black", "text-white", "rounded-xl", "text-sm", "font-medium", "flex", "items-center", "justify-center", "gap-2", "disabled:opacity-60", 3, "click", "disabled"], ["class", "w-4 h-4", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], ["class", "w-4 h-4 animate-spin", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "px-4", "py-2.5", "bg-white", "border", "border-gray-200", "rounded-xl", "text-sm", "text-gray-600", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "animate-spin"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "fixed", "top-16", "left-1/2", "-translate-x-1/2", "z-50", "bg-gray-900", "text-white", "text-sm", "px-4", "py-2.5", "rounded-xl", "flex", "items-center", "gap-2", "shadow-lg"], [1, "px-3", "pt-3", "pb-1", "flex", "gap-2"], [1, "relative", "w-14", "h-14", "rounded-xl", "overflow-hidden", "border", "border-gray-200", "flex-shrink-0"], ["alt", "Preview", 1, "w-full", "h-full", "object-cover", 3, "src"], [1, "absolute", "top-0.5", "right-0.5", "w-5", "h-5", "bg-black/60", "rounded-full", "flex", "items-center", "justify-center", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3", "h-3", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5", "d", "M6 18L18 6M6 6l12 12"], [1, "absolute", "bottom-14", "left-0", "w-60", "bg-white", "border", "border-gray-200", "rounded-2xl", "shadow-xl", "overflow-hidden", "z-50", "py-1"], [1, "w-full", "flex", "items-center", "gap-3", "px-4", "py-3", "hover:bg-gray-50", "transition-colors", "text-left", 3, "click"], [1, "w-8", "h-8", "rounded-full", "bg-gray-100", "flex", "items-center", "justify-center", "flex-shrink-0"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-700"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 13a3 3 0 11-6 0 3 3 0 016 0z"], [1, "text-sm", "text-gray-900"], [1, "text-xs", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "h-px", "bg-gray-100", "mx-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400", "transition-transform", "duration-200"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], ["class", "bg-gray-50 pb-1", 4, "ngIf"], [1, "bg-gray-50", "pb-1"], ["class", "w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 transition-colors text-left", 3, "click", 4, "ngFor", "ngForOf"], [1, "w-full", "flex", "items-center", "gap-3", "px-4", "py-2.5", "hover:bg-gray-100", "transition-colors", "text-left", 3, "click"], [1, "w-5", "h-5", "flex", "items-center", "justify-center", "flex-shrink-0"], ["class", "w-4 h-4 text-gray-900", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "flex", "items-center", "gap-2"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-900"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "3", "d", "M5 13l4 4L19 7"]],
    template: function ChatPage_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](5, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 11)(7, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8, " Tr\u1EE3 l\u00FD du l\u1ECBch \u0110\u00E0 L\u1EA1t ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10, "Lu\u00F4n s\u1EB5n s\u00E0ng gi\u00FAp b\u1EA1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ChatPage_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.startNewChat());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](13, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ChatPage_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.goToHistory());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](16, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](17, ChatPage_div_17_Template, 11, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](19, ChatPage_div_19_Template, 10, 1, "div", 21)(20, ChatPage_div_20_Template, 8, 5, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "div", 23)(22, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](23, ChatPage_div_23_Template, 6, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](24, "div", 26)(25, "div", 27, 0)(27, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ChatPage_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          ctx.menuOpen = !ctx.menuOpen;
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.modelPickerOpen = false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](28, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](29, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](30, ChatPage_div_30_Template, 33, 4, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](31, "input", 32, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function ChatPage_Template_input_change_31_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onImageSelect($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](33, "input", 33, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function ChatPage_Template_input_change_33_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onImageSelect($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](35, "textarea", 34, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function ChatPage_Template_textarea_ngModelChange_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx.inputMessage, $event) || (ctx.inputMessage = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("input", function ChatPage_Template_textarea_input_35_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onInput());
        })("keydown.enter", function ChatPage_Template_textarea_keydown_enter_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onEnter($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](37, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ChatPage_Template_button_click_37_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.sendMessage());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](38, "svg", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](39, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.contextPlace);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.messages.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.messages.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.previewImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", ctx.menuOpen ? "bg-gray-900 text-white" : "hover:bg-gray-100 text-gray-500");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("aria-label", ctx.menuOpen ? "\u0110\u00F3ng menu" : "Th\u00EAm \u1EA3nh ho\u1EB7c ch\u1ECDn model AI")("aria-expanded", ctx.menuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵstyleProp"]("transform", ctx.menuOpen ? "rotate(45deg)" : "rotate(0deg)");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.menuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx.inputMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx.inputMessage.trim() && !ctx.previewImage)("ngClass", ctx.inputMessage.trim() || ctx.previewImage ? "bg-black text-white" : "bg-gray-100 text-gray-400");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _components_chat_chat_bubble_chat_bubble_component__WEBPACK_IMPORTED_MODULE_9__.ChatBubbleComponent, _components_place_place_card_place_card_component__WEBPACK_IMPORTED_MODULE_10__.PlaceCardComponent],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: calc(4rem + env(safe-area-inset-bottom, 0px));\n  overflow: hidden;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQucGFnZS50cyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNoYXRib3QlMjBhaVxcaW9uaWMtdGFpbHdpbmQtYXBwXFxzcmNcXGFwcFxccGFnZXNcXGNoYXRcXGNoYXQucGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EscURBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNBUiIsImZpbGUiOiJjaGF0LnBhZ2UudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiBjYWxjKDRyZW0gKyBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSwgMHB4KSk7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgfVxuICAgICIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiBjYWxjKDRyZW0gKyBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSwgMHB4KSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDEwO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2hhdC9jaGF0LnBhZ2UudHMiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9jaGF0Ym90JTIwYWkvaW9uaWMtdGFpbHdpbmQtYXBwL3NyYy9hcHAvcGFnZXMvY2hhdC9jaGF0LnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ007RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLHFEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQVI7QURDQSxnZ0NBQWdnQyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IGNhbGMoNHJlbSArIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tLCAwcHgpKTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICB9XG4gICAgIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IGNhbGMoNHJlbSArIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tLCAwcHgpKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMTA7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ },

/***/ 1412
/*!****************************************!*\
  !*** ./src/app/services/ai.service.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIService: () => (/* binding */ AIService)
/* harmony export */ });
/* harmony import */ var E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _config_ai_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config/ai.config */ 5391);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api.service */ 3366);

var _staticBlock;






class AIService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
    this.apiService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_api_service__WEBPACK_IMPORTED_MODULE_10__.ApiService);
    this._isLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false, ...(ngDevMode ? [{
      debugName: "_isLoading"
    }] : []));
    this._currentModel = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(_config_ai_config__WEBPACK_IMPORTED_MODULE_9__.AI_CONFIG.defaultModel, ...(ngDevMode ? [{
      debugName: "_currentModel"
    }] : []));
    this.isLoading = this._isLoading.asReadonly();
    this.currentModel = this._currentModel.asReadonly();
  }
  getHeaders() {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      "Content-Type": "application/json",
      "device-id": this.apiService.getDeviceId()
    });
    if (_config_ai_config__WEBPACK_IMPORTED_MODULE_9__.AI_CONFIG.apiKey) {
      headers = headers.set("Authorization", `Bearer ${_config_ai_config__WEBPACK_IMPORTED_MODULE_9__.AI_CONFIG.apiKey}`);
    }
    return headers;
  }
  getAvailableModels() {
    return _config_ai_config__WEBPACK_IMPORTED_MODULE_9__.AI_CONFIG.models;
  }
  setCurrentModel(modelId) {
    const model = _config_ai_config__WEBPACK_IMPORTED_MODULE_9__.AI_CONFIG.models.find(m => m.id === modelId);
    if (model) {
      this._currentModel.set(modelId);
    }
  }
  /**
   * Gửi chat qua BE (server). BE proxy tới Antigravity Tools.
   * Hỗ trợ ảnh: truyền imageBase64 (phần base64 không có prefix data:image/...).
   */
  chat(messages, model, imageBase64, sessionId) {
    this._isLoading.set(true);
    const {
      message,
      history
    } = this.messagesToBeFormat(messages);
    const body = {
      message,
      history
    };
    if (imageBase64) {
      body["imageBase64"] = imageBase64.replace(/^data:image\/\w+;base64,/, "");
    }
    // Gửi model được FE chọn lên BE để BE dùng đúng model
    if (model) body["model"] = model;
    // Gửi sessionId để BE lưu lịch sử vào DB
    if (sessionId) body["sessionId"] = sessionId;
    return this.http.post(`${_config_ai_config__WEBPACK_IMPORTED_MODULE_9__.AI_CONFIG.baseUrl}/api/chat`, body, {
      headers: this.getHeaders()
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(beResponse => {
      this._isLoading.set(false);
      return {
        id: "",
        object: "chat.completion",
        created: Date.now(),
        model: model || this._currentModel(),
        choices: [{
          index: 0,
          message: {
            role: "assistant",
            content: beResponse.reply
          },
          finish_reason: "stop"
        }],
        suggestedPlaces: beResponse.suggestedPlaces || []
      };
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      this._isLoading.set(false);
      console.error("AI Chat Error:", error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  /** Trả về places đầy đủ Place data từ chat response (gọi kèm sau chat). */
  extractPlacesFromChat(reply) {
    return this.http.post(`${_config_ai_config__WEBPACK_IMPORTED_MODULE_9__.AI_CONFIG.baseUrl}/api/extract-places`, {
      reply
    }, {
      headers: this.getHeaders()
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(res => res.suggestedPlaces || []), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([])));
  }
  /** Chuyển messages (có system) sang format BE: message (cuối) + history (trước đó). */
  messagesToBeFormat(messages) {
    const withoutSystem = messages.filter(m => m.role !== "system");
    if (withoutSystem.length === 0) {
      return {
        message: "",
        history: []
      };
    }
    const last = withoutSystem[withoutSystem.length - 1];
    const history = withoutSystem.slice(0, -1).map(m => ({
      role: m.role,
      content: m.content
    }));
    return {
      message: last.role === "user" ? last.content : "",
      history
    };
  }
  /** Chat streaming qua BE: POST /api/chat/stream, nhận SSE data: { content } hoặc { done: true }. */
  streamChat(messages, model) {
    this._isLoading.set(true);
    const {
      message,
      history
    } = this.messagesToBeFormat(messages);
    const eventSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.http.post(`${_config_ai_config__WEBPACK_IMPORTED_MODULE_9__.AI_CONFIG.baseUrl}/api/chat/stream`, {
      message,
      history
    }, {
      headers: this.getHeaders(),
      responseType: "text",
      observe: "events"
    }).subscribe({
      next: event => {
        if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpEventType.DownloadProgress && event.partialText) {
          const lines = event.partialText.split("\n");
          for (const line of lines) {
            if (line.startsWith("data: ")) {
              try {
                const parsed = JSON.parse(line.slice(6));
                if (parsed.error) {
                  eventSubject.error(new Error(parsed.error));
                  return;
                }
                if (parsed.done) {
                  this._isLoading.set(false);
                  eventSubject.complete();
                } else if (parsed.content) {
                  eventSubject.next(parsed.content);
                }
              } catch {
                // bỏ qua dòng không phải JSON
              }
            }
          }
        }
      },
      error: err => {
        this._isLoading.set(false);
        eventSubject.error(err);
      },
      complete: () => {
        this._isLoading.set(false);
      }
    });
    return eventSubject.asObservable();
  }
  /** Gửi tin nhắn (gọi chat qua BE). */
  sendMessage(_x) {
    var _this = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (content, history = []) {
      const messages = [...history, {
        role: "user",
        content
      }];
      try {
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this.chat(messages));
        return response?.choices[0]?.message?.content || "Xin lỗi, tôi không thể trả lời lúc này.";
      } catch (error) {
        console.error("Send message error:", error);
        return "Đã xảy ra lỗi. Vui lòng thử lại sau.";
      }
    }).apply(this, arguments);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AIService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AIService)();
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AIService,
    factory: AIService.ɵfac,
    providedIn: "root"
  }));
}
_staticBlock();

/***/ },

/***/ 7291
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageService: () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ 8335);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ 9082);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1318);

var _staticBlock;





class StorageService {
  constructor() {
    this.storage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.Storage);
    this.auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.Auth);
  }
  get uid() {
    return this.auth.currentUser?.uid ?? 'anonymous';
  }
  /**
   * Upload ảnh chat lên Firebase Storage
   * @param dataUrl - Base64 data URL (từ Camera hoặc FileReader)
   * @returns Observable<string> - Firebase Storage download URL
   */
  uploadChatImage(dataUrl) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable(observer => {
      // Convert base64 data URL → Blob
      const byteString = atob(dataUrl.split(',')[1]);
      const mimeString = dataUrl.split(',')[0].split(':')[1].split(';')[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([ab], {
        type: mimeString
      });
      // Upload lên Storage
      const ext = mimeString.split('/')[1] || 'jpg';
      const filename = `${Date.now()}.${ext}`;
      const storagePath = `chats/${this.uid}/${filename}`;
      const storageRef = (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(this.storage, storagePath);
      (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytes)(storageRef, blob).then(snapshot => (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(snapshot.ref)).then(url => {
        observer.next(url);
        observer.complete();
      }).catch(err => {
        console.error('StorageService.uploadChatImage error:', err);
        observer.error(err);
      });
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => {
      console.warn('Upload failed, returning original dataUrl as fallback');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(dataUrl); // Fallback: trả lại base64 nếu upload fail
    }));
  }
  /**
   * Upload avatar người dùng
   * @param file - File ảnh
   * @returns Observable<string> - Download URL
   */
  uploadAvatar(file) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable(observer => {
      const ext = file.name.split('.').pop() || 'jpg';
      const storagePath = `avatars/${this.uid}/avatar.${ext}`;
      const storageRef = (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(this.storage, storagePath);
      (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytes)(storageRef, file).then(snapshot => (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(snapshot.ref)).then(url => {
        observer.next(url);
        observer.complete();
      }).catch(err => observer.error(err));
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)('')));
  }
  /**
   * Xóa file khỏi Storage theo URL
   */
  deleteFile(downloadUrl) {
    var _this = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const storageRef = (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(_this.storage, downloadUrl);
        yield (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.deleteObject)(storageRef);
      } catch (e) {
        console.warn('StorageService.deleteFile error:', e);
      }
    })();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function StorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || StorageService)();
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: StorageService,
    factory: StorageService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 6984
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CameraDirection: () => (/* binding */ CameraDirection),
/* harmony export */   CameraResultType: () => (/* binding */ CameraResultType),
/* harmony export */   CameraSource: () => (/* binding */ CameraSource)
/* harmony export */ });
var CameraSource;
(function (CameraSource) {
  /**
   * Prompts the user to select either the photo album or take a photo.
   */
  CameraSource["Prompt"] = "PROMPT";
  /**
   * Take a new photo using the camera.
   */
  CameraSource["Camera"] = "CAMERA";
  /**
   * Pick an existing photo from the gallery or photo album.
   */
  CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
  CameraDirection["Rear"] = "REAR";
  CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
  CameraResultType["Uri"] = "uri";
  CameraResultType["Base64"] = "base64";
  CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));

/***/ },

/***/ 2601
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Camera: () => (/* binding */ Camera),
/* harmony export */   CameraDirection: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraDirection),
/* harmony export */   CameraResultType: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraResultType),
/* harmony export */   CameraSource: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraSource)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 4070);
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web */ 8436);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions */ 6984);


const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
  web: () => new _web__WEBPACK_IMPORTED_MODULE_1__.CameraWeb()
});



/***/ },

/***/ 8436
/*!********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/web.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Camera: () => (/* binding */ Camera),
/* harmony export */   CameraWeb: () => (/* binding */ CameraWeb)
/* harmony export */ });
/* harmony import */ var E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 4070);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions */ 6984);



class CameraWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.WebPlugin {
  getPhoto(options) {
    var _this = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(/*#__PURE__*/function () {
        var _ref = (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          if (options.webUseInput || options.source === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos) {
            _this.fileInputExperience(options, resolve, reject);
          } else if (options.source === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Prompt) {
            let actionSheet = document.querySelector('pwa-action-sheet');
            if (!actionSheet) {
              actionSheet = document.createElement('pwa-action-sheet');
              document.body.appendChild(actionSheet);
            }
            actionSheet.header = options.promptLabelHeader || 'Photo';
            actionSheet.cancelable = true;
            actionSheet.options = [{
              title: options.promptLabelPhoto || 'From Photos'
            }, {
              title: options.promptLabelPicture || 'Take Picture'
            }];
            actionSheet.addEventListener('onSelection', /*#__PURE__*/function () {
              var _ref2 = (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
                const selection = e.detail;
                if (selection === 0) {
                  _this.fileInputExperience(options, resolve, reject);
                } else {
                  _this.cameraExperience(options, resolve, reject);
                }
              });
              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }());
            actionSheet.addEventListener('onCanceled', /*#__PURE__*/(0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.CapacitorException('User cancelled photos app'));
            }));
          } else {
            _this.cameraExperience(options, resolve, reject);
          }
        });
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  pickImages(_options) {
    var _this2 = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(/*#__PURE__*/function () {
        var _ref4 = (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          _this2.multipleFileInputExperience(resolve, reject);
        });
        return function (_x4, _x5) {
          return _ref4.apply(this, arguments);
        };
      }());
    })();
  }
  cameraExperience(options, resolve, reject) {
    var _this3 = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (customElements.get('pwa-camera-modal')) {
        const cameraModal = document.createElement('pwa-camera-modal');
        cameraModal.facingMode = options.direction === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraDirection.Front ? 'user' : 'environment';
        document.body.appendChild(cameraModal);
        try {
          yield cameraModal.componentOnReady();
          cameraModal.addEventListener('onPhoto', /*#__PURE__*/function () {
            var _ref5 = (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
              const photo = e.detail;
              if (photo === null) {
                reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.CapacitorException('User cancelled photos app'));
              } else if (photo instanceof Error) {
                reject(photo);
              } else {
                resolve(yield _this3._getCameraPhoto(photo, options));
              }
              cameraModal.dismiss();
              document.body.removeChild(cameraModal);
            });
            return function (_x6) {
              return _ref5.apply(this, arguments);
            };
          }());
          cameraModal.present();
        } catch (e) {
          _this3.fileInputExperience(options, resolve, reject);
        }
      } else {
        console.error(`Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements.`);
        _this3.fileInputExperience(options, resolve, reject);
      }
    })();
  }
  fileInputExperience(options, resolve, reject) {
    let input = document.querySelector('#_capacitor-camera-input');
    const cleanup = () => {
      var _a;
      (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
    };
    if (!input) {
      input = document.createElement('input');
      input.id = '_capacitor-camera-input';
      input.type = 'file';
      input.hidden = true;
      document.body.appendChild(input);
      input.addEventListener('change', _e => {
        const file = input.files[0];
        let format = 'jpeg';
        if (file.type === 'image/png') {
          format = 'png';
        } else if (file.type === 'image/gif') {
          format = 'gif';
        }
        if (options.resultType === 'dataUrl' || options.resultType === 'base64') {
          const reader = new FileReader();
          reader.addEventListener('load', () => {
            if (options.resultType === 'dataUrl') {
              resolve({
                dataUrl: reader.result,
                format
              });
            } else if (options.resultType === 'base64') {
              const b64 = reader.result.split(',')[1];
              resolve({
                base64String: b64,
                format
              });
            }
            cleanup();
          });
          reader.readAsDataURL(file);
        } else {
          resolve({
            webPath: URL.createObjectURL(file),
            format: format
          });
          cleanup();
        }
      });
      input.addEventListener('cancel', _e => {
        reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.CapacitorException('User cancelled photos app'));
        cleanup();
      });
    }
    input.accept = 'image/*';
    input.capture = true;
    if (options.source === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos || options.source === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Prompt) {
      input.removeAttribute('capture');
    } else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraDirection.Front) {
      input.capture = 'user';
    } else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraDirection.Rear) {
      input.capture = 'environment';
    }
    input.click();
  }
  multipleFileInputExperience(resolve, reject) {
    let input = document.querySelector('#_capacitor-camera-input-multiple');
    const cleanup = () => {
      var _a;
      (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
    };
    if (!input) {
      input = document.createElement('input');
      input.id = '_capacitor-camera-input-multiple';
      input.type = 'file';
      input.hidden = true;
      input.multiple = true;
      document.body.appendChild(input);
      input.addEventListener('change', _e => {
        const photos = [];
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let i = 0; i < input.files.length; i++) {
          const file = input.files[i];
          let format = 'jpeg';
          if (file.type === 'image/png') {
            format = 'png';
          } else if (file.type === 'image/gif') {
            format = 'gif';
          }
          photos.push({
            webPath: URL.createObjectURL(file),
            format: format
          });
        }
        resolve({
          photos
        });
        cleanup();
      });
      input.addEventListener('cancel', _e => {
        reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.CapacitorException('User cancelled photos app'));
        cleanup();
      });
    }
    input.accept = 'image/*';
    input.click();
  }
  _getCameraPhoto(photo, options) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      const format = photo.type.split('/')[1];
      if (options.resultType === 'uri') {
        resolve({
          webPath: URL.createObjectURL(photo),
          format: format,
          saved: false
        });
      } else {
        reader.readAsDataURL(photo);
        reader.onloadend = () => {
          const r = reader.result;
          if (options.resultType === 'dataUrl') {
            resolve({
              dataUrl: r,
              format: format,
              saved: false
            });
          } else {
            resolve({
              base64String: r.split(',')[1],
              format: format,
              saved: false
            });
          }
        };
        reader.onerror = e => {
          reject(e);
        };
      }
    });
  }
  checkPermissions() {
    var _this4 = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (typeof navigator === 'undefined' || !navigator.permissions) {
        throw _this4.unavailable('Permissions API not available in this browser');
      }
      try {
        // https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query
        // the specific permissions that are supported varies among browsers that implement the
        // permissions API, so we need a try/catch in case 'camera' is invalid
        const permission = yield window.navigator.permissions.query({
          name: 'camera'
        });
        return {
          camera: permission.state,
          photos: 'granted'
        };
      } catch (_a) {
        throw _this4.unavailable('Camera permissions are not available in this browser');
      }
    })();
  }
  requestPermissions() {
    var _this5 = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw _this5.unimplemented('Not implemented on web.');
    })();
  }
  pickLimitedLibraryPhotos() {
    var _this6 = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw _this6.unavailable('Not implemented on web.');
    })();
  }
  getLimitedLibraryPhotos() {
    var _this7 = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw _this7.unavailable('Not implemented on web.');
    })();
  }
}
const Camera = new CameraWeb();


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
//# sourceMappingURL=src_app_pages_chat_chat_page_ts.js.map