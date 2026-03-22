"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_place-detail_place-detail_page_ts"],{

/***/ 5017
/*!*********************************************************!*\
  !*** ./src/app/pages/place-detail/place-detail.page.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaceDetailPage: () => (/* binding */ PlaceDetailPage)
/* harmony export */ });
/* harmony import */ var E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/browser */ 6515);
/* harmony import */ var _components_place_place_card_place_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/place/place-card/place-card.component */ 1867);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api.service */ 3366);
/* harmony import */ var _services_firestore_favorites_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/firestore-favorites.service */ 9007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2481);

var _staticBlock;









const _c0 = () => [1, 2, 3, 4, 5];
function PlaceDetailPage_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " \uD83D\uDD12 \u0110\u0103ng nh\u1EADp \u0111\u1EC3 l\u01B0u y\u00EAu th\u00EDch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function PlaceDetailPage_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.place == null ? null : ctx_r0.place.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("(", ctx_r0.place == null ? null : ctx_r0.place.reviewCount, " \u0111\u00E1nh gi\u00E1)");
  }
}
function PlaceDetailPage_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\uD83D\uDCB0 ", ctx_r0.place == null ? null : ctx_r0.place.priceRange);
  }
}
function PlaceDetailPage_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u23F0 ", ctx_r0.place == null ? null : ctx_r0.place.openingHours);
  }
}
function PlaceDetailPage_div_28_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](tag_r2);
  }
}
function PlaceDetailPage_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 33)(1, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u0110i\u1EC3m n\u1ED5i b\u1EADt");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, PlaceDetailPage_div_28_span_4_Template, 2, 1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.place == null ? null : ctx_r0.place.tags);
  }
}
function PlaceDetailPage_div_29_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r3);
  }
}
function PlaceDetailPage_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 38)(1, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Ph\u00F9 h\u1EE3p v\u1EDBi");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, PlaceDetailPage_div_29_span_4_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.place == null ? null : ctx_r0.place.suitableFor);
  }
}
function PlaceDetailPage_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 38)(1, "h3", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u0110\u1ECBa ch\u1EC9");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 42)(4, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PlaceDetailPage_div_30_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.openMaps());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " M\u1EDF Google Maps ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.place == null ? null : ctx_r0.place.address);
  }
}
function PlaceDetailPage_div_31_div_13_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", type_r5, " ");
  }
}
function PlaceDetailPage_div_31_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 50)(1, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Lo\u1EA1i xe");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ul", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, PlaceDetailPage_div_31_div_13_li_4_Template, 3, 1, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.place == null ? null : ctx_r0.place.vehicleTypes);
  }
}
function PlaceDetailPage_div_31_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 56)(1, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" \u0110\u1EB7t c\u1ECDc: ", ctx_r0.place == null ? null : ctx_r0.place.depositRequired, " ");
  }
}
function PlaceDetailPage_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 38)(1, "div", 42)(2, "div", 45)(3, "div")(4, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Gi\u00E1 thu\u00EA");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div")(9, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Gi\u1EDD m\u1EDF c\u1EEDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, PlaceDetailPage_div_31_div_13_Template, 5, 1, "div", 47)(14, PlaceDetailPage_div_31_div_14_Template, 3, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, " G\u1ECDi \u0111\u1EB7t xe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.place == null ? null : ctx_r0.place.pricePerDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.place == null ? null : ctx_r0.place.openingHours);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.place == null ? null : ctx_r0.place.vehicleTypes == null ? null : ctx_r0.place.vehicleTypes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.place == null ? null : ctx_r0.place.depositRequired);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("href", "tel:" + (ctx_r0.place == null ? null : ctx_r0.place.phoneNumber), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function PlaceDetailPage_div_32__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "svg", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](i_r6 <= ((ctx_r0.place == null ? null : ctx_r0.place.rating) || 0) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200");
  }
}
function PlaceDetailPage_div_32_div_12__svg_svg_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "svg", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r8 = ctx.$implicit;
    const review_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](i_r8 <= review_r9.rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200");
  }
}
function PlaceDetailPage_div_32_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 68)(1, "div", 69)(2, "div", 70)(3, "div", 71)(4, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div")(7, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, PlaceDetailPage_div_32_div_12__svg_svg_12_Template, 2, 2, "svg", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PlaceDetailPage_div_32_div_12_Template_button_click_15_listener() {
      const review_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.toggleHelpful(review_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "svg", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "path", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const review_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](review_r9.author.charAt(0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](review_r9.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](review_r9.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](review_r9.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](review_r9.isHelpful ? "text-black" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" H\u1EEFu \u00EDch (", review_r9.helpfulCount, ") ");
  }
}
function PlaceDetailPage_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 38)(1, "h3", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u0110\u00E1nh gi\u00E1");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 59)(4, "div", 60)(5, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, PlaceDetailPage_div_32__svg_svg_8_Template, 2, 2, "svg", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, PlaceDetailPage_div_32_div_12_Template, 19, 9, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.place == null ? null : ctx_r0.place.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.place == null ? null : ctx_r0.place.reviewCount, " \u0111\u00E1nh gi\u00E1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.reviews);
  }
}
function PlaceDetailPage_div_33_app_place_card_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-place-card", 83);
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("place", p_r10);
  }
}
function PlaceDetailPage_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 38)(1, "h3", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " \u0110\u1ECBa \u0111i\u1EC3m li\u00EAn quan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, PlaceDetailPage_div_33_app_place_card_4_Template, 1, 1, "app-place-card", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.relatedPlaces);
  }
}
class PlaceDetailPage {
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    this.route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute);
    this.apiService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService);
    this.favoritesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_firestore_favorites_service__WEBPACK_IMPORTED_MODULE_7__.FirestoreFavoritesService);
    this.reviews = [];
    this.relatedPlaces = [];
    this.isFavorite = false;
    this.isLoading = true;
    this.showLoginToast = false;
  }
  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get("slug");
    // Load all places and find current one
    this.apiService.getPlaces().subscribe({
      next: places => {
        this.place = places.find(p => p.slug === slug);
        this.relatedPlaces = places.filter(p => p.category === this.place?.category && p.id !== this.place?.id).slice(0, 3);
        this.isLoading = false;
        // Load reviews for this place
        if (this.place) {
          this.loadReviews(this.place.id);
          // Kiểm tra favorites từ Firestore
          this.favoritesService.isFavorite(this.place.id).then(isFav => {
            this.isFavorite = isFav;
          });
          // Refresh ảnh: DB chỉ có Pexels → thay bằng Gemini URL cho hero
          this.apiService.getPlaceImage(this.place.id, this.place.name, this.place.category, this.place.address, true).subscribe(res => {
            if (res.imageUrl) this.place.imageUrl = res.imageUrl;
          });
        }
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  loadReviews(placeId) {
    this.apiService.getReviews(placeId).subscribe({
      next: reviews => {
        this.reviews = reviews;
      }
    });
  }
  getCategoryLabel(category) {
    const labels = {
      signature: "⭐ Đặc Trưng (Must-visit)",
      cafe: "☕ Cafe View Đẹp",
      food: "🍜 Ẩm Thực",
      checkin: "📸 Điểm Check-in",
      nature: "🌲 Thiên Nhiên",
      homestay: "🏡 Homestay",
      rental: "🛵 Thuê Xe"
    };
    return labels[category || ""] || category || "";
  }
  getCategoryClasses(category) {
    switch (category) {
      case "signature":
        return "bg-gradient-to-r from-amber-400 to-orange-500 text-white border-transparent shadow-sm shadow-orange-500/20";
      case "cafe":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "food":
        return "bg-orange-50 text-orange-700 border-orange-200";
      case "checkin":
        return "bg-pink-50 text-pink-700 border-pink-200";
      case "nature":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "homestay":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "rental":
        return "bg-violet-50 text-violet-700 border-violet-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  }
  goBack() {
    this.router.navigate(["/home/explore"]);
  }
  toggleFavorite() {
    if (!this.place) return;
    // Guest user → hiện thông báo
    if (!this.favoritesService.isAuthenticated()) {
      this.showLoginToast = true;
      setTimeout(() => {
        this.showLoginToast = false;
      }, 2500);
      return;
    }
    this.favoritesService.toggleFavorite({
      id: this.place.id,
      name: this.place.name,
      category: this.place.category,
      imageUrl: this.place.imageUrl
    }).then(newState => {
      this.isFavorite = newState;
    });
  }
  openMaps() {
    var _this = this;
    return (0,E_chatbot_ai_ionic_tailwind_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const defaultQuery = encodeURIComponent(`${_this.place?.name} Đà Lạt`);
      const q = _this.place?.address ? encodeURIComponent(`${_this.place.name}, ${_this.place.address}`) : defaultQuery;
      // Dùng @capacitor/browser để mở Google Maps (native browser trên thiết bị)
      yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_4__.Browser.open({
        url: `https://www.google.com/maps/search/?api=1&query=${q}`,
        presentationStyle: 'popover'
      });
    })();
  }
  goToChat() {
    const prompt = `Cho tôi thông tin về ${this.place?.name}`;
    this.router.navigate(["/home/chat"], {
      state: {
        prompt
      }
    });
  }
  toggleHelpful(review) {
    review.isHelpful = !review.isHelpful;
  }
  onHeroImgError(event) {
    const img = event.target;
    img.onerror = null;
    const categoryPlaceholders = {
      signature: "https://placehold.co/1200x600/e2e8f0/64748b?text=Đặc+trưng",
      cafe: "https://placehold.co/1200x600/e2e8f0/64748b?text=Cafe",
      food: "https://placehold.co/1200x600/e2e8f0/64748b?text=Ăn+uống",
      checkin: "https://placehold.co/1200x600/e2e8f0/64748b?text=Check-in",
      nature: "https://placehold.co/1200x600/e2e8f0/64748b?text=Thiên+nhiên",
      homestay: "https://placehold.co/1200x600/e2e8f0/64748b?text=Homestay",
      rental: "https://placehold.co/1200x600/e2e8f0/64748b?text=Thuê+xe"
    };
    img.src = categoryPlaceholders[this.place?.category || ""] || "https://placehold.co/1200x600/e2e8f0/64748b?text=Đà+Lạt";
  }
  static #_ = _staticBlock = () => (this.ɵfac = function PlaceDetailPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PlaceDetailPage)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: PlaceDetailPage,
    selectors: [["app-place-detail"]],
    decls: 37,
    vars: 19,
    consts: [[1, "bg-white", "pb-24", "relative"], ["class", "fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 bg-gray-900 text-white text-sm rounded-full shadow-lg whitespace-nowrap", "style", "animation: fadeIn 0.2s ease-out", 4, "ngIf"], [1, "relative", "aspect-video", "overflow-hidden"], ["loading", "lazy", 1, "w-full", "h-full", "object-cover", 3, "error", "src", "alt"], [1, "absolute", "top-4", "left-4", "w-10", "h-10", "rounded-full", "bg-white/90", "flex", "items-center", "justify-center", "shadow-md", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-700"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "absolute", "top-4", "right-4", "flex", "gap-2"], [1, "w-10", "h-10", "rounded-full", "bg-white/90", "flex", "items-center", "justify-center", "shadow-md"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"], [1, "w-10", "h-10", "rounded-full", "bg-white/90", "flex", "items-center", "justify-center", "shadow-md", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"], [1, "px-5", "pt-6", "relative", "bg-white", "-mt-5", "rounded-t-3xl", "z-10"], [1, "inline-block", "px-3", "py-1.5", "rounded-full", "text-[11px]", "font-bold", "uppercase", "tracking-wider", "mb-3", "shadow-sm", "border", 3, "ngClass"], [1, "text-2xl", "font-semibold", "text-gray-900", "mb-2"], [1, "flex", "items-center", "gap-2", "mb-3"], ["class", "flex items-center gap-1", 4, "ngIf"], [1, "flex", "flex-wrap", "gap-2.5", "mb-5"], ["class", "px-3 py-1.5 bg-gray-50 border border-gray-100 text-gray-700 rounded-xl text-[13px] font-medium flex items-center gap-2", 4, "ngIf"], [1, "text-gray-600", "leading-relaxed", "text-[15px]", "mb-4"], [1, "text-gray-600", "leading-relaxed", "text-[15px]", "mb-6"], ["class", "mb-5", 4, "ngIf"], ["class", "mb-6", 4, "ngIf"], [1, "fixed", "bottom-16", "pb-4", "pt-3", "px-5", "left-0", "right-0", "bg-white/90", "backdrop-blur-md", "border-t", "border-gray-100/50", "z-40"], [1, "w-full", "py-4", "bg-gradient-to-r", "from-blue-600", "to-indigo-600", "shadow-[0_8px_16px_-4px_rgba(79,70,229,0.3)]", "shadow-blue-500/25", "active:scale-[0.98]", "transition-transform", "text-white", "rounded-2xl", "font-semibold", "flex", "items-center", "justify-center", "text-sm", "tracking-wide", "gap-2", 3, "click"], [1, "fixed", "top-4", "left-1/2", "-translate-x-1/2", "z-50", "px-4", "py-2.5", "bg-gray-900", "text-white", "text-sm", "rounded-full", "shadow-lg", "whitespace-nowrap", 2, "animation", "fadeIn 0.2s ease-out"], [1, "flex", "items-center", "gap-1"], ["viewBox", "0 0 20 20", 1, "w-5", "h-5", "fill-amber-400", "text-amber-400"], ["d", "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"], [1, "font-medium"], [1, "text-gray-400"], [1, "px-3", "py-1.5", "bg-gray-50", "border", "border-gray-100", "text-gray-700", "rounded-xl", "text-[13px]", "font-medium", "flex", "items-center", "gap-2"], [1, "mb-5"], [1, "text-sm", "font-bold", "text-gray-900", "mb-3"], [1, "flex", "flex-wrap", "gap-2"], ["class", "px-3.5 py-1.5 bg-blue-50/70 text-blue-600 border border-blue-100/80 rounded-xl text-[13px] font-medium tracking-wide", 4, "ngFor", "ngForOf"], [1, "px-3.5", "py-1.5", "bg-blue-50/70", "text-blue-600", "border", "border-blue-100/80", "rounded-xl", "text-[13px]", "font-medium", "tracking-wide"], [1, "mb-6"], ["class", "px-3.5 py-1.5 bg-gray-800 text-white rounded-xl text-[13px] font-medium tracking-wide shadow-sm", 4, "ngFor", "ngForOf"], [1, "px-3.5", "py-1.5", "bg-gray-800", "text-white", "rounded-xl", "text-[13px]", "font-medium", "tracking-wide", "shadow-sm"], [1, "text-sm", "font-medium", "text-gray-700", "mb-2"], [1, "border", "border-gray-200", "rounded-xl", "p-4"], [1, "text-sm", "text-gray-600", "mb-3"], [1, "w-full", "py-2", "bg-black", "text-white", "rounded-xl", "text-sm", "font-medium", 3, "click"], [1, "grid", "grid-cols-2", "gap-4", "mb-4"], [1, "text-xs", "text-gray-400", "mb-1"], ["class", "mb-4", 4, "ngIf"], ["class", "bg-blue-50 border border-blue-100 rounded-lg p-3 mb-4", 4, "ngIf"], [1, "w-full", "py-2", "bg-black", "text-white", "rounded-xl", "text-sm", "font-medium", "block", "text-center", 3, "href"], [1, "mb-4"], [1, "text-xs", "text-gray-400", "mb-2"], [1, "space-y-1"], ["class", "flex items-center gap-2 text-sm", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-2", "text-sm"], [1, "w-1.5", "h-1.5", "bg-black", "rounded-full"], [1, "bg-blue-50", "border", "border-blue-100", "rounded-lg", "p-3", "mb-4"], [1, "text-sm", "text-blue-700"], [1, "text-lg", "font-semibold", "text-gray-900", "mb-4"], [1, "flex", "items-center", "gap-4", "mb-4", "p-4", "bg-gray-50", "rounded-xl"], [1, "text-center"], [1, "text-3xl", "font-semibold"], [1, "flex", "gap-0.5", "justify-center", "my-1"], ["class", "w-4 h-4", "viewBox", "0 0 20 20", 3, "class", 4, "ngFor", "ngForOf"], [1, "text-xs", "text-gray-400"], [1, "space-y-4"], ["class", "border-b border-gray-100 pb-4", 4, "ngFor", "ngForOf"], ["viewBox", "0 0 20 20", 1, "w-4", "h-4"], [1, "border-b", "border-gray-100", "pb-4"], [1, "flex", "items-start", "justify-between", "mb-2"], [1, "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "rounded-full", "bg-gray-200", "flex", "items-center", "justify-center"], [1, "text-sm", "font-medium"], [1, "font-medium", "text-sm"], [1, "flex", "gap-0.5"], ["class", "w-3.5 h-3.5", "viewBox", "0 0 20 20", 3, "class", 4, "ngFor", "ngForOf"], [1, "text-sm", "text-gray-600", "mb-2"], [1, "text-xs", "text-gray-400", "flex", "items-center", "gap-1", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"], ["viewBox", "0 0 20 20", 1, "w-3.5", "h-3.5"], [1, "space-y-3"], ["variant", "compact", 3, "place", 4, "ngFor", "ngForOf"], ["variant", "compact", 3, "place"]],
    template: function PlaceDetailPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, PlaceDetailPage_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2)(3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("error", function PlaceDetailPage_Template_img_error_3_listener($event) {
          return ctx.onHeroImgError($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PlaceDetailPage_Template_button_click_4_listener() {
          return ctx.goBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 7)(8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PlaceDetailPage_Template_button_click_11_listener() {
          return ctx.toggleFavorite();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 13)(15, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, PlaceDetailPage_div_20_Template, 7, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, PlaceDetailPage_span_22_Template, 2, 1, "span", 19)(23, PlaceDetailPage_span_23_Template, 2, 1, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, PlaceDetailPage_div_28_Template, 5, 1, "div", 22)(29, PlaceDetailPage_div_29_Template, 5, 1, "div", 23)(30, PlaceDetailPage_div_30_Template, 8, 1, "div", 23)(31, PlaceDetailPage_div_31_Template, 17, 5, "div", 23)(32, PlaceDetailPage_div_32_Template, 13, 5, "div", 23)(33, PlaceDetailPage_div_33_Template, 5, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 24)(35, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PlaceDetailPage_Template_button_click_35_listener() {
          return ctx.goToChat();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, " \u2728 H\u1ECFi AI v\u1EC1 \u0111\u1ECBa \u0111i\u1EC3m n\u00E0y ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showLoginToast);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx.place == null ? null : ctx.place.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", ctx.place == null ? null : ctx.place.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.isFavorite ? "fill-red-500 text-red-500" : "text-gray-700");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx.getCategoryClasses(ctx.place == null ? null : ctx.place.category));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.getCategoryLabel(ctx.place == null ? null : ctx.place.category));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.place == null ? null : ctx.place.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.place == null ? null : ctx.place.rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.place == null ? null : ctx.place.priceRange);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.place == null ? null : ctx.place.openingHours);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.place == null ? null : ctx.place.shortDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.place == null ? null : ctx.place.fullDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.place == null ? null : ctx.place.tags == null ? null : ctx.place.tags.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.place == null ? null : ctx.place.suitableFor == null ? null : ctx.place.suitableFor.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.place == null ? null : ctx.place.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.place == null ? null : ctx.place.category) === "rental");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.reviews.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.relatedPlaces.length > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _components_place_place_card_place_card_component__WEBPACK_IMPORTED_MODULE_5__.PlaceCardComponent],
    encapsulation: 2
  }));
}
_staticBlock();

/***/ },

/***/ 7713
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/browser/dist/esm/definitions.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


/***/ },

/***/ 6515
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/browser/dist/esm/index.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Browser: () => (/* binding */ Browser)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 4070);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 7713);

const Browser = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Browser', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_browser_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 2281)).then(m => new m.BrowserWeb())
});



/***/ }

}]);
//# sourceMappingURL=src_app_pages_place-detail_place-detail_page_ts.js.map