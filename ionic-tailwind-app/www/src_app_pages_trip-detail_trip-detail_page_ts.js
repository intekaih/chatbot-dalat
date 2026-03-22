"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_trip-detail_trip-detail_page_ts"],{

/***/ 2617
/*!*******************************************************!*\
  !*** ./src/app/pages/trip-detail/trip-detail.page.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TripDetailPage: () => (/* binding */ TripDetailPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _services_firestore_trips_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firestore-trips.service */ 6442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






function TripDetailPage_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r0.tripNights + 1, "N", ctx_r0.tripNights, "\u0110");
  }
}
function TripDetailPage_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25)(1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\uD83D\uDCDD Ghi ch\u00FA t\u1EEB AI");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.trip == null ? null : ctx_r0.trip.notes);
  }
}
function TripDetailPage_div_29_div_1_div_16_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 55);
  }
}
function TripDetailPage_div_29_div_1_div_16_div_1_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r4.description, " ");
  }
}
function TripDetailPage_div_29_div_1_div_16_div_1_p_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, item_r4.cost, "1.0-0"), "\u0111 ");
  }
}
function TripDetailPage_div_29_div_1_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 45)(1, "div", 46)(2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TripDetailPage_div_29_div_1_div_16_div_1_div_4_Template, 1, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 49)(6, "div", 50)(7, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h4", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, TripDetailPage_div_29_div_1_div_16_div_1_p_13_Template, 2, 1, "p", 53)(14, TripDetailPage_div_29_div_1_div_16_div_1_p_14_Template, 3, 4, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const j_r5 = ctx.index;
    const day_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.getItemIcon(item_r4.type), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", j_r5 < day_r6.items.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r4.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getItemTypeLabel(item_r4.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r4.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r4.cost && item_r4.cost > 0);
  }
}
function TripDetailPage_div_29_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TripDetailPage_div_29_div_1_div_16_div_1_Template, 15, 7, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", day_r6.items);
  }
}
function TripDetailPage_div_29_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32)(1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TripDetailPage_div_29_div_1_Template_button_click_1_listener() {
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.toggleDay(i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 34)(3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 36)(6, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 34)(11, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, TripDetailPage_div_29_div_1_div_16_Template, 2, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", day_r6.dayNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Ng\u00E0y ", day_r6.dayNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](day_r6.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](13, 7, day_r6.totalCost, "1.0-0"), "\u0111");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r0.expandedDays[i_r3] ? "rotate-180" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.expandedDays[i_r3]);
  }
}
function TripDetailPage_div_29_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 57)(1, "div", 58)(2, "div", 59)(3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\uD83E\uDD16");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div")(6, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "G\u1EE3i \u00FD t\u1EEB AI");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "L\u1ECBch tr\u00ECnh do AI t\u1EA1o ra");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TripDetailPage_div_29_div_2_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.goToChat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\u270F\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " H\u1ECFi AI \u0111\u1EC3 ch\u1EC9nh s\u1EEDa l\u1ECBch tr\u00ECnh n\u00E0y ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r0.notesHtml, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
function TripDetailPage_div_29_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 65)(1, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\uD83D\uDDD3\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Ch\u01B0a c\u00F3 l\u1ECBch tr\u00ECnh. H\u1ECFi AI \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function TripDetailPage_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TripDetailPage_div_29_div_1_Template, 17, 10, "div", 29)(2, TripDetailPage_div_29_div_2_Template, 16, 1, "div", 30)(3, TripDetailPage_div_29_div_3_Template, 5, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.trip == null ? null : ctx_r0.trip.days);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((ctx_r0.trip == null ? null : ctx_r0.trip.days == null ? null : ctx_r0.trip.days.length) || 0) === 0 && (ctx_r0.trip == null ? null : ctx_r0.trip.notes));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((ctx_r0.trip == null ? null : ctx_r0.trip.days == null ? null : ctx_r0.trip.days.length) || 0) === 0 && !(ctx_r0.trip == null ? null : ctx_r0.trip.notes));
  }
}
function TripDetailPage_div_30_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34)(1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 78)(4, "div", 79)(5, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const cat_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", cat_r8.icon, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](cat_r8.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 6, cat_r8.spent, "1.0-0"), "\u0111 / ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](10, 9, cat_r8.budget, "1.0-0"), "\u0111");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", cat_r8.spent / cat_r8.budget * 100, "%");
  }
}
function TripDetailPage_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28)(1, "div", 68)(2, "div", 69)(3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u0110\u00E3 chi");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 69)(9, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Ng\u00E2n s\u00E1ch");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 74)(17, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, TripDetailPage_div_30_div_24_Template, 13, 12, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 11, ctx_r0.trip == null ? null : ctx_r0.trip.spent, "1.0-0"), "\u0111");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](13, 14, ctx_r0.trip == null ? null : ctx_r0.trip.totalBudget, "1.0-0"), "\u0111");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r0.getBudgetBarColor((ctx_r0.trip == null ? null : ctx_r0.trip.spent) || 0, (ctx_r0.trip == null ? null : ctx_r0.trip.totalBudget) || 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ((ctx_r0.trip == null ? null : ctx_r0.trip.spent) || 0) / ((ctx_r0.trip == null ? null : ctx_r0.trip.totalBudget) || 1) * 100, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](19, 17, ((ctx_r0.trip == null ? null : ctx_r0.trip.spent) || 0) / ((ctx_r0.trip == null ? null : ctx_r0.trip.totalBudget) || 1) * 100, "1.0-0"), "% \u0111\u00E3 s\u1EED d\u1EE5ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](((ctx_r0.trip == null ? null : ctx_r0.trip.spent) || 0) > ((ctx_r0.trip == null ? null : ctx_r0.trip.totalBudget) || 0) ? "text-red-600" : "text-green-600");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](22, 20, ((ctx_r0.trip == null ? null : ctx_r0.trip.totalBudget) || 0) - ((ctx_r0.trip == null ? null : ctx_r0.trip.spent) || 0), "1.0-0"), "\u0111 c\u00F2n l\u1EA1i ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.trip == null ? null : ctx_r0.trip.budgetCategories);
  }
}
class TripDetailPage {
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
    this.route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute);
    this.tripsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_firestore_trips_service__WEBPACK_IMPORTED_MODULE_3__.FirestoreTripsService);
    this.activeTab = "itinerary";
    this.expandedDays = [];
    this.notesHtml = "";
    this.tripNights = 0;
  }
  ngOnInit() {
    this.loadTrip();
  }
  ionViewWillEnter() {
    this.loadTrip();
  }
  loadTrip() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.tripsService.getTrips().subscribe({
        next: trips => {
          this.trip = trips.find(t => t.id === id);
          this.expandedDays = new Array(this.trip?.days?.length || 0).fill(true);
          if (this.trip?.notes) {
            this.notesHtml = this.renderMarkdown(this.trip.notes);
          }
          this.tripNights = Math.max(0, (this.trip?.days?.length || 1) - 1);
        }
      });
    }
  }
  goBack() {
    this.router.navigate(["/home/favorites"], {
      state: {
        tab: 'trips'
      }
    });
  }
  goToChat() {
    const prompt = `Cho tôi thông tin về chuyến đi ${this.trip?.title}`;
    this.router.navigate(["/home/chat"], {
      state: {
        prompt
      }
    });
  }
  toggleDay(index) {
    this.expandedDays[index] = !this.expandedDays[index];
  }
  getItemIcon(type) {
    const icons = {
      location: "📍",
      food: "🍜",
      transport: "🚗",
      accommodation: "🏠"
    };
    return icons[type] || "📌";
  }
  getItemTypeLabel(type) {
    const labels = {
      location: "Địa điểm",
      food: "Ẩm thực",
      transport: "Di chuyển",
      accommodation: "Lưu trú"
    };
    return labels[type] || "";
  }
  getBudgetBarColor(spent, total) {
    const percentage = spent / total;
    if (percentage >= 0.9) return "bg-red-400";
    if (percentage >= 0.7) return "bg-amber-400";
    return "bg-gray-800";
  }
  onHeroImgError(event) {
    const img = event.target;
    const title = encodeURIComponent(this.trip?.destination || 'Đà Lạt');
    img.src = `https://placehold.co/800x450/1a1a2e/ffffff?text=${title}`;
    img.onerror = null;
  }
  renderMarkdown(text) {
    return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>').replace(/^#{1,3}\s+(.+)$/gm, '<p class="font-semibold text-gray-900 mt-3 mb-1">$1</p>').replace(/^[-•]\s+(.+)$/gm, '<li class="ml-3 list-disc">$1</li>').replace(/\n/g, '<br/>');
  }
  static #_ = _staticBlock = () => (this.ɵfac = function TripDetailPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TripDetailPage)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: TripDetailPage,
    selectors: [["app-trip-detail"]],
    decls: 34,
    vars: 17,
    consts: [[1, "bg-white"], [1, "relative", "aspect-video", "overflow-hidden"], [1, "w-full", "h-full", "object-cover", 3, "error", "src", "alt"], [1, "absolute", "inset-0", "bg-gradient-to-t", "from-black/80", "via-black/40", "to-transparent"], [1, "absolute", "top-4", "left-4", "w-10", "h-10", "rounded-full", "bg-white/90", "flex", "items-center", "justify-center", "shadow-md", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-700"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 19l-7-7 7-7"], [1, "absolute", "bottom-0", "left-0", "right-0", "p-4"], [1, "text-2xl", "font-semibold", "text-white", "mb-2"], [1, "text-white/80", "text-sm", "mb-3"], [1, "px-2", "py-0.5", "rounded-full", "text-xs", "text-white"], [1, "px-4", "py-4", "border-b", "border-gray-100"], [1, "flex", "items-center", "gap-4"], [1, "flex", "items-center", "gap-2"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "text-sm", "text-gray-600"], ["class", "px-2 py-0.5 bg-gray-100 rounded-full text-xs", 4, "ngIf"], ["class", "px-4 py-3 bg-amber-50 border-b border-amber-100", 4, "ngIf"], [1, "flex", "p-1", "bg-gray-100", "rounded-2xl"], [1, "flex-1", "py-2", "rounded-xl", "text-sm", "font-medium", "transition-colors", 3, "click"], ["class", "p-4", 4, "ngIf"], [1, "fixed", "bottom-16", "left-0", "right-0", "bg-white", "border-t", "border-gray-200", "px-4", "py-3", "z-40"], [1, "w-full", "py-3", "bg-black", "text-white", "rounded-xl", "font-medium", 3, "click"], [1, "px-2", "py-0.5", "bg-gray-100", "rounded-full", "text-xs"], [1, "px-4", "py-3", "bg-amber-50", "border-b", "border-amber-100"], [1, "text-xs", "font-medium", "text-amber-700", "mb-1"], [1, "text-sm", "text-amber-800", "line-clamp-3"], [1, "p-4"], ["class", "mb-4", 4, "ngFor", "ngForOf"], ["class", "space-y-3", 4, "ngIf"], ["class", "py-12 text-center", 4, "ngIf"], [1, "mb-4"], [1, "w-full", "flex", "items-center", "justify-between", "p-3", "bg-gray-50", "rounded-xl", "mb-2", 3, "click"], [1, "flex", "items-center", "gap-3"], [1, "w-8", "h-8", "rounded-full", "bg-black", "text-white", "flex", "items-center", "justify-center", "text-sm", "font-medium"], [1, "text-left"], [1, "text-sm", "font-medium"], [1, "text-xs", "text-gray-500"], [1, "text-sm", "text-gray-500"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-400", "transition-transform"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], ["class", "space-y-3 pl-4", 4, "ngIf"], [1, "space-y-3", "pl-4"], ["class", "flex gap-3", 4, "ngFor", "ngForOf"], [1, "flex", "gap-3"], [1, "flex", "flex-col", "items-center"], [1, "w-8", "h-8", "rounded-full", "bg-gray-100", "flex", "items-center", "justify-center", "text-sm"], ["class", "w-px h-6 bg-gray-200", 4, "ngIf"], [1, "flex-1", "pb-3"], [1, "flex", "items-center", "gap-2", "mb-1"], [1, "text-xs", "text-gray-400"], [1, "text-sm", "font-medium", "text-gray-900"], ["class", "text-xs text-gray-500", 4, "ngIf"], ["class", "text-xs text-gray-600 mt-1", 4, "ngIf"], [1, "w-px", "h-6", "bg-gray-200"], [1, "text-xs", "text-gray-600", "mt-1"], [1, "space-y-3"], [1, "flex", "items-center", "gap-2", "mb-4"], [1, "w-8", "h-8", "rounded-full", "bg-indigo-100", "flex", "items-center", "justify-center"], [1, "text-base"], [1, "text-sm", "font-semibold", "text-gray-900"], [1, "bg-gray-50", "rounded-2xl", "p-4"], [1, "text-sm", "text-gray-700", "leading-relaxed", "whitespace-pre-line", 3, "innerHTML"], [1, "w-full", "py-3", "border", "border-gray-200", "rounded-xl", "text-sm", "text-gray-600", "flex", "items-center", "justify-center", "gap-2", 3, "click"], [1, "py-12", "text-center"], [1, "text-4xl", "mb-3", "block"], [1, "text-gray-500", "text-sm"], [1, "bg-gray-50", "rounded-xl", "p-4", "mb-4"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "font-semibold"], [1, "text-sm"], [1, "h-2", "bg-gray-200", "rounded-full", "mb-2", "overflow-hidden"], [1, "h-full", "rounded-full", "transition-all"], [1, "flex", "items-center", "justify-between", "text-sm"], [1, "text-gray-500"], ["class", "flex items-center gap-3", 4, "ngFor", "ngForOf"], [1, "w-10", "h-10", "rounded-full", "bg-gray-100", "flex", "items-center", "justify-center", "text-lg"], [1, "flex-1"], [1, "flex", "items-center", "justify-between", "mb-1"], [1, "h-1.5", "bg-gray-100", "rounded-full", "overflow-hidden"], [1, "h-full", "bg-black", "rounded-full"]],
    template: function TripDetailPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("error", function TripDetailPage_Template_img_error_2_listener($event) {
          return ctx.onHeroImgError($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TripDetailPage_Template_button_click_4_listener() {
          return ctx.goBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7)(8, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, TripDetailPage_span_21_Template, 2, 2, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, TripDetailPage_div_22_Template, 5, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 11)(24, "div", 19)(25, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TripDetailPage_Template_button_click_25_listener() {
          return ctx.activeTab = "itinerary";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " \uD83D\uDDD3\uFE0F L\u1ECBch tr\u00ECnh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TripDetailPage_Template_button_click_27_listener() {
          return ctx.activeTab = "budget";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " \uD83D\uDCB0 Ng\u00E2n s\u00E1ch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, TripDetailPage_div_29_Template, 4, 3, "div", 21)(30, TripDetailPage_div_30_Template, 25, 23, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 22)(32, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TripDetailPage_Template_button_click_32_listener() {
          return ctx.goToChat();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " H\u1ECFi AI v\u1EC1 chuy\u1EBFn \u0111i n\u00E0y ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.trip == null ? null : ctx.trip.coverImage, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", (ctx.trip == null ? null : ctx.trip.title) || "\u1EA2nh chuy\u1EBFn \u0111i");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.trip == null ? null : ctx.trip.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.trip == null ? null : ctx.trip.destination);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]((ctx.trip == null ? null : ctx.trip.status) === "upcoming" ? "bg-blue-500/80" : (ctx.trip == null ? null : ctx.trip.status) === "completed" ? "bg-green-500/80" : "bg-amber-500/80");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (ctx.trip == null ? null : ctx.trip.status) === "upcoming" ? "S\u1EAFp t\u1EDBi" : (ctx.trip == null ? null : ctx.trip.status) === "completed" ? "\u0110\u00E3 \u0111i" : "\u0110ang \u0111i", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.trip == null ? null : ctx.trip.startDate, " - ", ctx.trip == null ? null : ctx.trip.endDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.tripNights > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.trip == null ? null : ctx.trip.notes) && ((ctx.trip == null ? null : ctx.trip.days == null ? null : ctx.trip.days.length) || 0) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.activeTab === "itinerary" ? "bg-white shadow-sm" : "text-gray-500");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.activeTab === "budget" ? "bg-white shadow-sm" : "text-gray-500");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeTab === "itinerary");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeTab === "budget");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe],
    encapsulation: 2
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_pages_trip-detail_trip-detail_page_ts.js.map