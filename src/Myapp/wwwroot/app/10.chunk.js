(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./ClientApp/app/admin/metrics/metrics.component.ts":
/*!**********************************************************!*\
  !*** ./ClientApp/app/admin/metrics/metrics.component.ts ***!
  \**********************************************************/
/*! exports provided: MetricsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MetricsComponent\", function() { return MetricsComponent; });\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js\");\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ \"./node_modules/rxjs/_esm2015/operators/index.js\");\n/* harmony import */ var _metrics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metrics.service */ \"./ClientApp/app/admin/metrics/metrics.service.ts\");\n/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ \"./node_modules/ng-jhipster/__ivy_ngcc__/fesm2015/ng-jhipster.js\");\n/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ \"./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js\");\n/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ \"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js\");\n\n\n\n\n\n\n\n\nfunction MetricsComponent_div_19_Template(rf, ctx) { if (rf & 1) {\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](0, \"div\", 12);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](1, \" \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](2, \"jhi-jvm-memory\", 13);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](3, \" \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](4, \" \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](5, \"jhi-jvm-threads\", 14);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](6, \" \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](7, \" \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](8, \"jhi-metrics-system\", 15);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](9, \" \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](10, \" \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n} if (rf & 2) {\n    const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵnextContext\"]();\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](2);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"updating\", ctx_r169.updatingMetrics)(\"jvmMemoryMetrics\", ctx_r169.metrics.jvm);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](3);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"threadData\", ctx_r169.threads);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](3);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"updating\", ctx_r169.updatingMetrics)(\"systemMetrics\", ctx_r169.metrics.processMetrics);\n} }\nfunction MetricsComponent_div_21_Template(rf, ctx) { if (rf & 1) {\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](0, \"div\");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](1, \" \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](2, \"h3\", 16);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](3, \"Garbage collector statistics\");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](4, \" \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](5, \"jhi-metrics-garbagecollector\", 17);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](6, \" \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](7, \" \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n} if (rf & 2) {\n    const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵnextContext\"]();\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](5);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"updating\", ctx_r170.updatingMetrics)(\"garbageCollectorMetrics\", ctx_r170.metrics.garbageCollector);\n} }\nfunction MetricsComponent_div_23_Template(rf, ctx) { if (rf & 1) {\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](0, \"div\", 18);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](1, \"Updating...\");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n} }\nfunction MetricsComponent_jhi_metrics_request_25_Template(rf, ctx) { if (rf & 1) {\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](0, \"jhi-metrics-request\", 19);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](1, \" \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n} if (rf & 2) {\n    const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵnextContext\"]();\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"updating\", ctx_r172.updatingMetrics)(\"requestMetrics\", ctx_r172.metrics[\"http.server.requests\"]);\n} }\nfunction MetricsComponent_jhi_metrics_endpoints_requests_27_Template(rf, ctx) { if (rf & 1) {\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](0, \"jhi-metrics-endpoints-requests\", 20);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](1, \" \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n} if (rf & 2) {\n    const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵnextContext\"]();\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"updating\", ctx_r173.updatingMetrics)(\"endpointsRequestsMetrics\", ctx_r173.metrics.services);\n} }\nfunction MetricsComponent_jhi_metrics_cache_29_Template(rf, ctx) { if (rf & 1) {\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](0, \"jhi-metrics-cache\", 21);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](1, \" \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n} if (rf & 2) {\n    const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵnextContext\"]();\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"updating\", ctx_r174.updatingMetrics)(\"cacheMetrics\", ctx_r174.metrics.cache);\n} }\nfunction MetricsComponent_jhi_metrics_datasource_31_Template(rf, ctx) { if (rf & 1) {\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](0, \"jhi-metrics-datasource\", 22);\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](1, \" \");\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n} if (rf & 2) {\n    const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵnextContext\"]();\n    _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"updating\", ctx_r175.updatingMetrics)(\"datasourceMetrics\", ctx_r175.metrics.databases);\n} }\nclass MetricsComponent {\n    constructor(metricsService, changeDetector) {\n        this.metricsService = metricsService;\n        this.changeDetector = changeDetector;\n        this.updatingMetrics = true;\n    }\n    ngOnInit() {\n        this.refresh();\n    }\n    refresh() {\n        this.updatingMetrics = true;\n        this.metricsService\n            .getMetrics()\n            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__[\"flatMap\"])(() => this.metricsService.threadDump(), (metrics, threadDump) => {\n            this.metrics = metrics;\n            this.threads = threadDump.threads;\n            this.updatingMetrics = false;\n            this.changeDetector.detectChanges();\n        }))\n            .subscribe();\n    }\n    metricsKeyExists(key) {\n        return this.metrics && this.metrics[key];\n    }\n    metricsKeyExistsAndObjectNotEmpty(key) {\n        return this.metrics && this.metrics[key] && JSON.stringify(this.metrics[key]) !== '{}';\n    }\n}\nMetricsComponent.ɵfac = function MetricsComponent_Factory(t) { return new (t || MetricsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdirectiveInject\"](_metrics_service__WEBPACK_IMPORTED_MODULE_2__[\"MetricsService\"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdirectiveInject\"](_angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ChangeDetectorRef\"])); };\nMetricsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdefineComponent\"]({ type: MetricsComponent, selectors: [[\"jhi-metrics\"]], decls: 34, vars: 7, consts: [[\"id\", \"metrics-page-heading\", \"jhiTranslate\", \"metrics.title\"], [1, \"btn\", \"btn-primary\", \"float-right\", 3, \"click\"], [\"icon\", \"sync\"], [\"jhiTranslate\", \"metrics.refresh.button\"], [\"jhiTranslate\", \"metrics.jvm.title\"], [\"class\", \"row\", 4, \"ngIf\"], [4, \"ngIf\"], [\"class\", \"well well-lg\", \"jhiTranslate\", \"metrics.updating\", 4, \"ngIf\"], [3, \"updating\", \"requestMetrics\", 4, \"ngIf\"], [3, \"updating\", \"endpointsRequestsMetrics\", 4, \"ngIf\"], [3, \"updating\", \"cacheMetrics\", 4, \"ngIf\"], [3, \"updating\", \"datasourceMetrics\", 4, \"ngIf\"], [1, \"row\"], [1, \"col-md-4\", 3, \"updating\", \"jvmMemoryMetrics\"], [1, \"col-md-4\", 3, \"threadData\"], [1, \"col-md-4\", 3, \"updating\", \"systemMetrics\"], [\"jhiTranslate\", \"metrics.jvm.gc.title\"], [3, \"updating\", \"garbageCollectorMetrics\"], [\"jhiTranslate\", \"metrics.updating\", 1, \"well\", \"well-lg\"], [3, \"updating\", \"requestMetrics\"], [3, \"updating\", \"endpointsRequestsMetrics\"], [3, \"updating\", \"cacheMetrics\"], [3, \"updating\", \"datasourceMetrics\"]], template: function MetricsComponent_Template(rf, ctx) { if (rf & 1) {\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](0, \"div\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](1, \" \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](2, \"h2\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](3, \" \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](4, \"span\", 0);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](5, \"Application Metrics\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](6, \" \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](7, \"button\", 1);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵlistener\"](\"click\", function MetricsComponent_Template_button_click_7_listener() { return ctx.refresh(); });\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](8, \" \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelement\"](9, \"fa-icon\", 2);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](10, \" \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](11, \"span\", 3);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](12, \"Refresh\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](13, \" \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](14, \" \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](15, \" \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementStart\"](16, \"h3\", 4);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](17, \"JVM Metrics\");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](18, \" \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtemplate\"](19, MetricsComponent_div_19_Template, 11, 5, \"div\", 5);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](20, \" \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtemplate\"](21, MetricsComponent_div_21_Template, 8, 2, \"div\", 6);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](22, \" \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtemplate\"](23, MetricsComponent_div_23_Template, 2, 0, \"div\", 7);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](24, \" \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtemplate\"](25, MetricsComponent_jhi_metrics_request_25_Template, 2, 2, \"jhi-metrics-request\", 8);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](26, \" \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtemplate\"](27, MetricsComponent_jhi_metrics_endpoints_requests_27_Template, 2, 2, \"jhi-metrics-endpoints-requests\", 9);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](28, \" \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtemplate\"](29, MetricsComponent_jhi_metrics_cache_29_Template, 2, 2, \"jhi-metrics-cache\", 10);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](30, \" \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtemplate\"](31, MetricsComponent_jhi_metrics_datasource_31_Template, 2, 2, \"jhi-metrics-datasource\", 11);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](32, \" \");\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵelementEnd\"]();\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵtext\"](33, \" \");\n    } if (rf & 2) {\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](19);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"ngIf\", ctx.metrics && !ctx.updatingMetrics);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](2);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"ngIf\", ctx.metrics && ctx.metricsKeyExists(\"garbageCollector\"));\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](2);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"ngIf\", ctx.updatingMetrics);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](2);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"ngIf\", ctx.metrics && ctx.metricsKeyExists(\"http.server.requests\"));\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](2);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"ngIf\", ctx.metrics && ctx.metricsKeyExists(\"services\"));\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](2);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"ngIf\", ctx.metrics && ctx.metricsKeyExists(\"cache\"));\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵadvance\"](2);\n        _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵproperty\"](\"ngIf\", ctx.metrics && ctx.metricsKeyExistsAndObjectNotEmpty(\"databases\"));\n    } }, directives: [ng_jhipster__WEBPACK_IMPORTED_MODULE_3__[\"JhiTranslateDirective\"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__[\"FaIconComponent\"], _angular_common__WEBPACK_IMPORTED_MODULE_5__[\"NgIf\"], ng_jhipster__WEBPACK_IMPORTED_MODULE_3__[\"ɵd\"], ng_jhipster__WEBPACK_IMPORTED_MODULE_3__[\"ɵe\"], ng_jhipster__WEBPACK_IMPORTED_MODULE_3__[\"ɵj\"], ng_jhipster__WEBPACK_IMPORTED_MODULE_3__[\"ɵk\"], ng_jhipster__WEBPACK_IMPORTED_MODULE_3__[\"ɵf\"], ng_jhipster__WEBPACK_IMPORTED_MODULE_3__[\"ɵg\"], ng_jhipster__WEBPACK_IMPORTED_MODULE_3__[\"ɵh\"], ng_jhipster__WEBPACK_IMPORTED_MODULE_3__[\"ɵi\"]], encapsulation: 2, changeDetection: 0 });\n/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵsetClassMetadata\"](MetricsComponent, [{\n        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"],\n        args: [{\n                selector: 'jhi-metrics',\n                templateUrl: './metrics.component.html',\n                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ChangeDetectionStrategy\"].OnPush\n            }]\n    }], function () { return [{ type: _metrics_service__WEBPACK_IMPORTED_MODULE_2__[\"MetricsService\"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ChangeDetectorRef\"] }]; }, null); })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5jb21wb25lbnQudHM/Y2FkMSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5jb21wb25lbnQuaHRtbD8xYTk5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEY7QUFDckQ7QUFFbUQ7Ozs7Ozs7SUNIeU8sMEVBQXNEO0lBQUE7SUFBQSxxRkFBZ0c7SUFBQTtJQUFBLDREQUFpQjtJQUFDO0lBQUEsc0ZBQTBEO0lBQUE7SUFBQSw0REFBa0I7SUFBQztJQUFBLHlGQUE0RztJQUFBO0lBQUEsNERBQXFCO0lBQUM7SUFBQSw0REFBTTs7O0lBQXRTLDBEQUE0QjtJQUE1Qiw4RkFBNEI7SUFBdUYsMERBQXNCO0lBQXRCLHdGQUFzQjtJQUEwRCwwREFBNEI7SUFBNUIsOEZBQTRCOzs7SUFBd0Usc0VBQThEO0lBQUE7SUFBQSx5RUFBd0M7SUFBQSx1RkFBNEI7SUFBQSw0REFBSztJQUFDO0lBQUEsbUdBQWlIO0lBQUE7SUFBQSw0REFBK0I7SUFBQztJQUFBLDREQUFNOzs7SUFBekgsMERBQTRCO0lBQTVCLDhGQUE0Qjs7O0lBQThGLDBFQUFrRjtJQUFBLHNFQUFXO0lBQUEsNERBQU07OztJQUFDLDBGQUFrSztJQUFBO0lBQUEsNERBQXNCOzs7SUFBdkcsOEZBQTRCOzs7SUFBNEUscUdBQTRKO0lBQUE7SUFBQSw0REFBaUM7OztJQUE3Ryw4RkFBNEI7OztJQUFrRix3RkFBNkg7SUFBQTtJQUFBLDREQUFvQjs7O0lBQWpGLDhGQUE0Qjs7O0lBQXNELDZGQUFnSztJQUFBO0lBQUEsNERBQXlCOzs7SUFBL0YsOEZBQTRCOztBRFUvckQsTUFBTSxnQkFBZ0I7SUFLM0IsWUFBb0IsY0FBOEIsRUFBVSxjQUFpQztRQUF6RSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFGN0Ysb0JBQWUsR0FBRyxJQUFJLENBQUM7SUFFeUUsQ0FBQztJQUVqRyxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWM7YUFDaEIsVUFBVSxFQUFFO2FBQ1osSUFBSSxDQUNILDhEQUFPLENBQ0wsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsRUFDdEMsQ0FBQyxPQUFnQixFQUFFLFVBQXNCLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDbEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN0QyxDQUFDLENBQ0YsQ0FDRjthQUNBLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxHQUFlO1FBQzlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxpQ0FBaUMsQ0FBQyxHQUFlO1FBQy9DLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQztJQUN6RixDQUFDOztnRkFuQ1UsZ0JBQWdCO2dHQUFoQixnQkFBZ0I7UUNWN0Isc0VBQU07UUFBQTtRQUFBLHFFQUFLO1FBQUE7UUFBQSwwRUFBNkQ7UUFBQSw4RUFBbUI7UUFBQSw0REFBTztRQUFDO1FBQUEsNEVBQWlFO1FBQXJCLHdJQUFTLGFBQVMsSUFBQztRQUFFO1FBQUEsd0VBQStCO1FBQUM7UUFBQSwyRUFBNEM7UUFBQSxtRUFBTztRQUFBLDREQUFPO1FBQUM7UUFBQSw0REFBUztRQUFDO1FBQUEsNERBQUs7UUFBQztRQUFBLHlFQUFxQztRQUFBLHVFQUFXO1FBQUEsNERBQUs7UUFBQztRQUFBLCtHQUFzRDtRQUF3VTtRQUFBLDhHQUE4RDtRQUFrTztRQUFBLDhHQUFrRjtRQUFrQjtRQUFBLDhJQUFrSztRQUF1QjtRQUFBLG9LQUE0SjtRQUFrQztRQUFBLDJJQUE2SDtRQUFxQjtRQUFBLHFKQUFnSztRQUEwQjtRQUFBLDREQUFNO1FBQUM7O1FBQTM3QywyREFBbUM7UUFBbkMscUdBQW1DO1FBQStVLDBEQUF1RDtRQUF2RCx5SEFBdUQ7UUFBOFAsMERBQXVCO1FBQXZCLHFGQUF1QjtRQUF3RSwwREFBMkQ7UUFBM0QsNkhBQTJEO1FBQXlJLDBEQUErQztRQUEvQyxpSEFBK0M7UUFBa0ksMERBQTRDO1FBQTVDLDhHQUE0QztRQUEyRywwREFBaUU7UUFBakUsbUlBQWlFOzs2RkRVNXBELGdCQUFnQjtjQUw1Qix1REFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxlQUFlLEVBQUUscUVBQXVCLENBQUMsTUFBTTthQUNoRCIsImZpbGUiOiIuL0NsaWVudEFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLmNvbXBvbmVudC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZsYXRNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE1ldHJpY3NTZXJ2aWNlLCBNZXRyaWNzLCBNZXRyaWNzS2V5LCBUaHJlYWREdW1wLCBUaHJlYWQgfSBmcm9tICcuL21ldHJpY3Muc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2poaS1tZXRyaWNzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21ldHJpY3MuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBNZXRyaWNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbWV0cmljcz86IE1ldHJpY3M7XG4gIHRocmVhZHM/OiBUaHJlYWRbXTtcbiAgdXBkYXRpbmdNZXRyaWNzID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1ldHJpY3NTZXJ2aWNlOiBNZXRyaWNzU2VydmljZSwgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICByZWZyZXNoKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRpbmdNZXRyaWNzID0gdHJ1ZTtcbiAgICB0aGlzLm1ldHJpY3NTZXJ2aWNlXG4gICAgICAuZ2V0TWV0cmljcygpXG4gICAgICAucGlwZShcbiAgICAgICAgZmxhdE1hcChcbiAgICAgICAgICAoKSA9PiB0aGlzLm1ldHJpY3NTZXJ2aWNlLnRocmVhZER1bXAoKSxcbiAgICAgICAgICAobWV0cmljczogTWV0cmljcywgdGhyZWFkRHVtcDogVGhyZWFkRHVtcCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tZXRyaWNzID0gbWV0cmljcztcbiAgICAgICAgICAgIHRoaXMudGhyZWFkcyA9IHRocmVhZER1bXAudGhyZWFkcztcbiAgICAgICAgICAgIHRoaXMudXBkYXRpbmdNZXRyaWNzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG1ldHJpY3NLZXlFeGlzdHMoa2V5OiBNZXRyaWNzS2V5KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWV0cmljcyAmJiB0aGlzLm1ldHJpY3Nba2V5XTtcbiAgfVxuXG4gIG1ldHJpY3NLZXlFeGlzdHNBbmRPYmplY3ROb3RFbXB0eShrZXk6IE1ldHJpY3NLZXkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tZXRyaWNzICYmIHRoaXMubWV0cmljc1trZXldICYmIEpTT04uc3RyaW5naWZ5KHRoaXMubWV0cmljc1trZXldKSAhPT0gJ3t9JztcbiAgfVxufVxuIiwiPGRpdj4gPGgyPiA8c3BhbiBpZD1cIm1ldHJpY3MtcGFnZS1oZWFkaW5nXCIgamhpVHJhbnNsYXRlPVwibWV0cmljcy50aXRsZVwiPkFwcGxpY2F0aW9uIE1ldHJpY3M8L3NwYW4+IDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHRcIiAoY2xpY2spPVwicmVmcmVzaCgpXCI+IDxmYS1pY29uIGljb249XCJzeW5jXCI+PC9mYS1pY29uPiA8c3BhbiBqaGlUcmFuc2xhdGU9XCJtZXRyaWNzLnJlZnJlc2guYnV0dG9uXCI+UmVmcmVzaDwvc3Bhbj4gPC9idXR0b24+IDwvaDI+IDxoMyBqaGlUcmFuc2xhdGU9XCJtZXRyaWNzLmp2bS50aXRsZVwiPkpWTSBNZXRyaWNzPC9oMz4gPGRpdiBjbGFzcz1cInJvd1wiICpuZ0lmPVwibWV0cmljcyAmJiAhdXBkYXRpbmdNZXRyaWNzXCI+IDxqaGktanZtLW1lbW9yeSBjbGFzcz1cImNvbC1tZC00XCIgW3VwZGF0aW5nXT1cInVwZGF0aW5nTWV0cmljc1wiIFtqdm1NZW1vcnlNZXRyaWNzXT1cIm1ldHJpY3MuanZtXCI+IDwvamhpLWp2bS1tZW1vcnk+IDxqaGktanZtLXRocmVhZHMgY2xhc3M9XCJjb2wtbWQtNFwiIFt0aHJlYWREYXRhXT1cInRocmVhZHNcIj4gPC9qaGktanZtLXRocmVhZHM+IDxqaGktbWV0cmljcy1zeXN0ZW0gY2xhc3M9XCJjb2wtbWQtNFwiIFt1cGRhdGluZ109XCJ1cGRhdGluZ01ldHJpY3NcIiBbc3lzdGVtTWV0cmljc109XCJtZXRyaWNzLnByb2Nlc3NNZXRyaWNzXCI+IDwvamhpLW1ldHJpY3Mtc3lzdGVtPiA8L2Rpdj4gPGRpdiAqbmdJZj1cIm1ldHJpY3MgJiYgbWV0cmljc0tleUV4aXN0cygnZ2FyYmFnZUNvbGxlY3RvcicpXCI+IDxoMyBqaGlUcmFuc2xhdGU9XCJtZXRyaWNzLmp2bS5nYy50aXRsZVwiPkdhcmJhZ2UgY29sbGVjdG9yIHN0YXRpc3RpY3M8L2gzPiA8amhpLW1ldHJpY3MtZ2FyYmFnZWNvbGxlY3RvciBbdXBkYXRpbmddPVwidXBkYXRpbmdNZXRyaWNzXCIgW2dhcmJhZ2VDb2xsZWN0b3JNZXRyaWNzXT1cIm1ldHJpY3MuZ2FyYmFnZUNvbGxlY3RvclwiPiA8L2poaS1tZXRyaWNzLWdhcmJhZ2Vjb2xsZWN0b3I+IDwvZGl2PiA8ZGl2IGNsYXNzPVwid2VsbCB3ZWxsLWxnXCIgKm5nSWY9XCJ1cGRhdGluZ01ldHJpY3NcIiBqaGlUcmFuc2xhdGU9XCJtZXRyaWNzLnVwZGF0aW5nXCI+VXBkYXRpbmcuLi48L2Rpdj4gPGpoaS1tZXRyaWNzLXJlcXVlc3QgKm5nSWY9XCJtZXRyaWNzICYmIG1ldHJpY3NLZXlFeGlzdHMoJ2h0dHAuc2VydmVyLnJlcXVlc3RzJylcIiBbdXBkYXRpbmddPVwidXBkYXRpbmdNZXRyaWNzXCIgW3JlcXVlc3RNZXRyaWNzXT1cIm1ldHJpY3NbJ2h0dHAuc2VydmVyLnJlcXVlc3RzJ11cIj4gPC9qaGktbWV0cmljcy1yZXF1ZXN0PiA8amhpLW1ldHJpY3MtZW5kcG9pbnRzLXJlcXVlc3RzICpuZ0lmPVwibWV0cmljcyAmJiBtZXRyaWNzS2V5RXhpc3RzKCdzZXJ2aWNlcycpXCIgW3VwZGF0aW5nXT1cInVwZGF0aW5nTWV0cmljc1wiIFtlbmRwb2ludHNSZXF1ZXN0c01ldHJpY3NdPVwibWV0cmljcy5zZXJ2aWNlc1wiPiA8L2poaS1tZXRyaWNzLWVuZHBvaW50cy1yZXF1ZXN0cz4gPGpoaS1tZXRyaWNzLWNhY2hlICpuZ0lmPVwibWV0cmljcyAmJiBtZXRyaWNzS2V5RXhpc3RzKCdjYWNoZScpXCIgW3VwZGF0aW5nXT1cInVwZGF0aW5nTWV0cmljc1wiIFtjYWNoZU1ldHJpY3NdPVwibWV0cmljcy5jYWNoZVwiPiA8L2poaS1tZXRyaWNzLWNhY2hlPiA8amhpLW1ldHJpY3MtZGF0YXNvdXJjZSAqbmdJZj1cIm1ldHJpY3MgJiYgbWV0cmljc0tleUV4aXN0c0FuZE9iamVjdE5vdEVtcHR5KCdkYXRhYmFzZXMnKVwiIFt1cGRhdGluZ109XCJ1cGRhdGluZ01ldHJpY3NcIiBbZGF0YXNvdXJjZU1ldHJpY3NdPVwibWV0cmljcy5kYXRhYmFzZXNcIj4gPC9qaGktbWV0cmljcy1kYXRhc291cmNlPiA8L2Rpdj4gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./ClientApp/app/admin/metrics/metrics.component.ts\n");

/***/ }),

/***/ "./ClientApp/app/admin/metrics/metrics.module.ts":
/*!*******************************************************!*\
  !*** ./ClientApp/app/admin/metrics/metrics.module.ts ***!
  \*******************************************************/
/*! exports provided: MetricsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MetricsModule\", function() { return MetricsModule; });\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js\");\n/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ \"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js\");\n/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/shared.module */ \"./ClientApp/app/shared/shared.module.ts\");\n/* harmony import */ var _metrics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metrics.component */ \"./ClientApp/app/admin/metrics/metrics.component.ts\");\n/* harmony import */ var _metrics_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metrics.route */ \"./ClientApp/app/admin/metrics/metrics.route.ts\");\n\n\n\n\n\n\n\nclass MetricsModule {\n}\nMetricsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdefineNgModule\"]({ type: MetricsModule });\nMetricsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdefineInjector\"]({ factory: function MetricsModule_Factory(t) { return new (t || MetricsModule)(); }, imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__[\"MyappSharedModule\"], _angular_router__WEBPACK_IMPORTED_MODULE_1__[\"RouterModule\"].forChild([_metrics_route__WEBPACK_IMPORTED_MODULE_4__[\"metricsRoute\"]])]] });\n(function () { (typeof ngJitMode === \"undefined\" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵsetNgModuleScope\"](MetricsModule, { declarations: [_metrics_component__WEBPACK_IMPORTED_MODULE_3__[\"MetricsComponent\"]], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__[\"MyappSharedModule\"], _angular_router__WEBPACK_IMPORTED_MODULE_1__[\"RouterModule\"]] }); })();\n/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵsetClassMetadata\"](MetricsModule, [{\n        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"NgModule\"],\n        args: [{\n                imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__[\"MyappSharedModule\"], _angular_router__WEBPACK_IMPORTED_MODULE_1__[\"RouterModule\"].forChild([_metrics_route__WEBPACK_IMPORTED_MODULE_4__[\"metricsRoute\"]])],\n                declarations: [_metrics_component__WEBPACK_IMPORTED_MODULE_3__[\"MetricsComponent\"]]\n            }]\n    }], null, null); })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5tb2R1bGUudHM/YTA1NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUNNO0FBQ2M7QUFFTjtBQUVSOzs7QUFNeEMsTUFBTSxhQUFhOzs0RkFBYixhQUFhO29KQUFiLGFBQWEsa0JBSGYsQ0FBQywwRUFBaUIsRUFBRSw0REFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLDJEQUFZLENBQUMsQ0FBQyxDQUFDO21JQUd4RCxhQUFhLG1CQUZULG1FQUFnQixhQURyQiwwRUFBaUIsRUFBRTs2RkFHbEIsYUFBYTtjQUp6QixzREFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLDBFQUFpQixFQUFFLDREQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsMkRBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ25FLFlBQVksRUFBRSxDQUFDLG1FQUFnQixDQUFDO2FBQ2pDIiwiZmlsZSI6Ii4vQ2xpZW50QXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MubW9kdWxlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNeWFwcFNoYXJlZE1vZHVsZSB9IGZyb20gJ2FwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbmltcG9ydCB7IE1ldHJpY3NDb21wb25lbnQgfSBmcm9tICcuL21ldHJpY3MuY29tcG9uZW50JztcblxuaW1wb3J0IHsgbWV0cmljc1JvdXRlIH0gZnJvbSAnLi9tZXRyaWNzLnJvdXRlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW015YXBwU2hhcmVkTW9kdWxlLCBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW21ldHJpY3NSb3V0ZV0pXSxcbiAgZGVjbGFyYXRpb25zOiBbTWV0cmljc0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTWV0cmljc01vZHVsZSB7fVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./ClientApp/app/admin/metrics/metrics.module.ts\n");

/***/ }),

/***/ "./ClientApp/app/admin/metrics/metrics.route.ts":
/*!******************************************************!*\
  !*** ./ClientApp/app/admin/metrics/metrics.route.ts ***!
  \******************************************************/
/*! exports provided: metricsRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"metricsRoute\", function() { return metricsRoute; });\n/* harmony import */ var _metrics_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metrics.component */ \"./ClientApp/app/admin/metrics/metrics.component.ts\");\n\nconst metricsRoute = {\n    path: '',\n    component: _metrics_component__WEBPACK_IMPORTED_MODULE_0__[\"MetricsComponent\"],\n    data: {\n        pageTitle: 'metrics.title'\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5yb3V0ZS50cz81MjM3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUF1RDtBQUVoRCxNQUFNLFlBQVksR0FBVTtJQUNqQyxJQUFJLEVBQUUsRUFBRTtJQUNSLFNBQVMsRUFBRSxtRUFBZ0I7SUFDM0IsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLGVBQWU7S0FDM0I7Q0FDRixDQUFDIiwiZmlsZSI6Ii4vQ2xpZW50QXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3Mucm91dGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE1ldHJpY3NDb21wb25lbnQgfSBmcm9tICcuL21ldHJpY3MuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IG1ldHJpY3NSb3V0ZTogUm91dGUgPSB7XG4gIHBhdGg6ICcnLFxuICBjb21wb25lbnQ6IE1ldHJpY3NDb21wb25lbnQsXG4gIGRhdGE6IHtcbiAgICBwYWdlVGl0bGU6ICdtZXRyaWNzLnRpdGxlJ1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./ClientApp/app/admin/metrics/metrics.route.ts\n");

/***/ }),

/***/ "./ClientApp/app/admin/metrics/metrics.service.ts":
/*!********************************************************!*\
  !*** ./ClientApp/app/admin/metrics/metrics.service.ts ***!
  \********************************************************/
/*! exports provided: MetricsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MetricsService\", function() { return MetricsService; });\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js\");\n/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ \"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js\");\n/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/app.constants */ \"./ClientApp/app/app.constants.ts\");\n\n\n\n\n\nclass MetricsService {\n    constructor(http) {\n        this.http = http;\n    }\n    getMetrics() {\n        return this.http.get(app_app_constants__WEBPACK_IMPORTED_MODULE_2__[\"SERVER_API_URL\"] + 'management/jhimetrics');\n    }\n    threadDump() {\n        return this.http.get(app_app_constants__WEBPACK_IMPORTED_MODULE_2__[\"SERVER_API_URL\"] + 'management/threaddump');\n    }\n}\nMetricsService.ɵfac = function MetricsService_Factory(t) { return new (t || MetricsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵinject\"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__[\"HttpClient\"])); };\nMetricsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdefineInjectable\"]({ token: MetricsService, factory: MetricsService.ɵfac, providedIn: 'root' });\n/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵsetClassMetadata\"](MetricsService, [{\n        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"Injectable\"],\n        args: [{ providedIn: 'root' }]\n    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[\"HttpClient\"] }]; }, null); })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5zZXJ2aWNlLnRzPzlkNWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUNPO0FBR0M7OztBQVE1QyxNQUFNLGNBQWM7SUFDekIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7SUFFeEMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVUsZ0VBQWMsR0FBRyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYSxnRUFBYyxHQUFHLHVCQUF1QixDQUFDLENBQUM7SUFDN0UsQ0FBQzs7NEVBVFUsY0FBYztpR0FBZCxjQUFjLFdBQWQsY0FBYyxtQkFERCxNQUFNOzZGQUNuQixjQUFjO2NBRDFCLHdEQUFVO2VBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwiZmlsZSI6Ii4vQ2xpZW50QXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3Muc2VydmljZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNFUlZFUl9BUElfVVJMIH0gZnJvbSAnYXBwL2FwcC5jb25zdGFudHMnO1xuXG5leHBvcnQgdHlwZSBNZXRyaWNzS2V5ID0gJ2p2bScgfCAnaHR0cC5zZXJ2ZXIucmVxdWVzdHMnIHwgJ2NhY2hlJyB8ICdzZXJ2aWNlcycgfCAnZGF0YWJhc2VzJyB8ICdnYXJiYWdlQ29sbGVjdG9yJyB8ICdwcm9jZXNzTWV0cmljcyc7XG5leHBvcnQgdHlwZSBNZXRyaWNzID0geyBba2V5IGluIE1ldHJpY3NLZXldOiBhbnkgfTtcbmV4cG9ydCB0eXBlIFRocmVhZCA9IGFueTtcbmV4cG9ydCB0eXBlIFRocmVhZER1bXAgPSB7IHRocmVhZHM6IFRocmVhZFtdIH07XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTWV0cmljc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgZ2V0TWV0cmljcygpOiBPYnNlcnZhYmxlPE1ldHJpY3M+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxNZXRyaWNzPihTRVJWRVJfQVBJX1VSTCArICdtYW5hZ2VtZW50L2poaW1ldHJpY3MnKTtcbiAgfVxuXG4gIHRocmVhZER1bXAoKTogT2JzZXJ2YWJsZTxUaHJlYWREdW1wPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VGhyZWFkRHVtcD4oU0VSVkVSX0FQSV9VUkwgKyAnbWFuYWdlbWVudC90aHJlYWRkdW1wJyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./ClientApp/app/admin/metrics/metrics.service.ts\n");

/***/ })

}]);