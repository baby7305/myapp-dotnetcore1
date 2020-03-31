(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./ClientApp/app/admin/admin-routing.module.ts":
/*!*****************************************************!*\
  !*** ./ClientApp/app/admin/admin-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AdminRoutingModule\", function() { return AdminRoutingModule; });\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js\");\n/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ \"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js\");\n\n\n\n\n/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */\nclass AdminRoutingModule {\n}\nAdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdefineNgModule\"]({ type: AdminRoutingModule });\nAdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵdefineInjector\"]({ factory: function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); }, imports: [[\n            /* jhipster-needle-add-admin-module - JHipster will add admin modules here */\n            _angular_router__WEBPACK_IMPORTED_MODULE_1__[\"RouterModule\"].forChild([\n                {\n                    path: 'user-management',\n                    loadChildren: () => __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./user-management/user-management.module */ \"./ClientApp/app/admin/user-management/user-management.module.ts\")).then(m => m.UserManagementModule),\n                    data: {\n                        pageTitle: 'userManagement.home.title'\n                    }\n                },\n                {\n                    path: 'audits',\n                    loadChildren: () => __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./audits/audits.module */ \"./ClientApp/app/admin/audits/audits.module.ts\")).then(m => m.AuditsModule)\n                },\n                {\n                    path: 'configuration',\n                    loadChildren: () => __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ./configuration/configuration.module */ \"./ClientApp/app/admin/configuration/configuration.module.ts\")).then(m => m.ConfigurationModule)\n                },\n                {\n                    path: 'docs',\n                    loadChildren: () => __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ./docs/docs.module */ \"./ClientApp/app/admin/docs/docs.module.ts\")).then(m => m.DocsModule)\n                },\n                {\n                    path: 'health',\n                    loadChildren: () => __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ./health/health.module */ \"./ClientApp/app/admin/health/health.module.ts\")).then(m => m.HealthModule)\n                },\n                {\n                    path: 'logs',\n                    loadChildren: () => __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ./logs/logs.module */ \"./ClientApp/app/admin/logs/logs.module.ts\")).then(m => m.LogsModule)\n                },\n                {\n                    path: 'metrics',\n                    loadChildren: () => __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./metrics/metrics.module */ \"./ClientApp/app/admin/metrics/metrics.module.ts\")).then(m => m.MetricsModule)\n                }\n                /* jhipster-needle-add-admin-route - JHipster will add admin routes here */\n            ])\n        ]] });\n(function () { (typeof ngJitMode === \"undefined\" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵɵsetNgModuleScope\"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__[\"RouterModule\"]] }); })();\n/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"ɵsetClassMetadata\"](AdminRoutingModule, [{\n        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__[\"NgModule\"],\n        args: [{\n                imports: [\n                    /* jhipster-needle-add-admin-module - JHipster will add admin modules here */\n                    _angular_router__WEBPACK_IMPORTED_MODULE_1__[\"RouterModule\"].forChild([\n                        {\n                            path: 'user-management',\n                            loadChildren: () => __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./user-management/user-management.module */ \"./ClientApp/app/admin/user-management/user-management.module.ts\")).then(m => m.UserManagementModule),\n                            data: {\n                                pageTitle: 'userManagement.home.title'\n                            }\n                        },\n                        {\n                            path: 'audits',\n                            loadChildren: () => __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./audits/audits.module */ \"./ClientApp/app/admin/audits/audits.module.ts\")).then(m => m.AuditsModule)\n                        },\n                        {\n                            path: 'configuration',\n                            loadChildren: () => __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ./configuration/configuration.module */ \"./ClientApp/app/admin/configuration/configuration.module.ts\")).then(m => m.ConfigurationModule)\n                        },\n                        {\n                            path: 'docs',\n                            loadChildren: () => __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ./docs/docs.module */ \"./ClientApp/app/admin/docs/docs.module.ts\")).then(m => m.DocsModule)\n                        },\n                        {\n                            path: 'health',\n                            loadChildren: () => __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ./health/health.module */ \"./ClientApp/app/admin/health/health.module.ts\")).then(m => m.HealthModule)\n                        },\n                        {\n                            path: 'logs',\n                            loadChildren: () => __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ./logs/logs.module */ \"./ClientApp/app/admin/logs/logs.module.ts\")).then(m => m.LogsModule)\n                        },\n                        {\n                            path: 'metrics',\n                            loadChildren: () => __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./metrics/metrics.module */ \"./ClientApp/app/admin/metrics/metrics.module.ts\")).then(m => m.MetricsModule)\n                        }\n                        /* jhipster-needle-add-admin-route - JHipster will add admin routes here */\n                    ])\n                ]\n            }]\n    }], null, null); })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2FkbWluL2FkbWluLXJvdXRpbmcubW9kdWxlLnRzP2RmMTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFDTTs7O0FBQy9DLDRGQUE0RjtBQXlDckYsTUFBTSxrQkFBa0I7O2lHQUFsQixrQkFBa0I7OEpBQWxCLGtCQUFrQixrQkF0Q3BCO1lBQ1AsNkVBQTZFO1lBQzdFLDREQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQjtvQkFDRSxJQUFJLEVBQUUsaUJBQWlCO29CQUN2QixZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsZ01BQWtELENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDO29CQUN4RyxJQUFJLEVBQUU7d0JBQ0osU0FBUyxFQUFFLDJCQUEyQjtxQkFDdkM7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLDRKQUFnQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7aUJBQy9FO2dCQUNEO29CQUNFLElBQUksRUFBRSxlQUFlO29CQUNyQixZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsd0xBQThDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO2lCQUNwRztnQkFDRDtvQkFDRSxJQUFJLEVBQUUsTUFBTTtvQkFDWixZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMscUpBQTRCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztpQkFDekU7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLDRKQUFnQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7aUJBQy9FO2dCQUNEO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxvSkFBNEIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO2lCQUN6RTtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsU0FBUztvQkFDZixZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsaUtBQWtDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztpQkFDbEY7Z0JBQ0QsMkVBQTJFO2FBQzVFLENBQUM7U0FDSDttSUFFVSxrQkFBa0I7NkZBQWxCLGtCQUFrQjtjQXZDOUIsc0RBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsNkVBQTZFO29CQUM3RSw0REFBWSxDQUFDLFFBQVEsQ0FBQzt3QkFDcEI7NEJBQ0UsSUFBSSxFQUFFLGlCQUFpQjs0QkFDdkIsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLGdNQUFrRCxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQzs0QkFDeEcsSUFBSSxFQUFFO2dDQUNKLFNBQVMsRUFBRSwyQkFBMkI7NkJBQ3ZDO3lCQUNGO3dCQUNEOzRCQUNFLElBQUksRUFBRSxRQUFROzRCQUNkLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyw0SkFBZ0MsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO3lCQUMvRTt3QkFDRDs0QkFDRSxJQUFJLEVBQUUsZUFBZTs0QkFDckIsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLHdMQUE4QyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQzt5QkFDcEc7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLE1BQU07NEJBQ1osWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLHFKQUE0QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7eUJBQ3pFO3dCQUNEOzRCQUNFLElBQUksRUFBRSxRQUFROzRCQUNkLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyw0SkFBZ0MsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO3lCQUMvRTt3QkFDRDs0QkFDRSxJQUFJLEVBQUUsTUFBTTs0QkFDWixZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsb0pBQTRCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQzt5QkFDekU7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLFNBQVM7NEJBQ2YsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLGlLQUFrQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7eUJBQ2xGO3dCQUNELDJFQUEyRTtxQkFDNUUsQ0FBQztpQkFDSDthQUNGIiwiZmlsZSI6Ii4vQ2xpZW50QXBwL2FwcC9hZG1pbi9hZG1pbi1yb3V0aW5nLm1vZHVsZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuLyogamhpcHN0ZXItbmVlZGxlLWFkZC1hZG1pbi1tb2R1bGUtaW1wb3J0IC0gSkhpcHN0ZXIgd2lsbCBhZGQgYWRtaW4gbW9kdWxlcyBpbXBvcnRzIGhlcmUgKi9cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIC8qIGpoaXBzdGVyLW5lZWRsZS1hZGQtYWRtaW4tbW9kdWxlIC0gSkhpcHN0ZXIgd2lsbCBhZGQgYWRtaW4gbW9kdWxlcyBoZXJlICovXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ3VzZXItbWFuYWdlbWVudCcsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQubW9kdWxlJykudGhlbihtID0+IG0uVXNlck1hbmFnZW1lbnRNb2R1bGUpLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgcGFnZVRpdGxlOiAndXNlck1hbmFnZW1lbnQuaG9tZS50aXRsZSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2F1ZGl0cycsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL2F1ZGl0cy9hdWRpdHMubW9kdWxlJykudGhlbihtID0+IG0uQXVkaXRzTW9kdWxlKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2NvbmZpZ3VyYXRpb24nLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24ubW9kdWxlJykudGhlbihtID0+IG0uQ29uZmlndXJhdGlvbk1vZHVsZSlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdkb2NzJyxcbiAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vZG9jcy9kb2NzLm1vZHVsZScpLnRoZW4obSA9PiBtLkRvY3NNb2R1bGUpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnaGVhbHRoJyxcbiAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vaGVhbHRoL2hlYWx0aC5tb2R1bGUnKS50aGVuKG0gPT4gbS5IZWFsdGhNb2R1bGUpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnbG9ncycsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL2xvZ3MvbG9ncy5tb2R1bGUnKS50aGVuKG0gPT4gbS5Mb2dzTW9kdWxlKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ21ldHJpY3MnLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9tZXRyaWNzL21ldHJpY3MubW9kdWxlJykudGhlbihtID0+IG0uTWV0cmljc01vZHVsZSlcbiAgICAgIH1cbiAgICAgIC8qIGpoaXBzdGVyLW5lZWRsZS1hZGQtYWRtaW4tcm91dGUgLSBKSGlwc3RlciB3aWxsIGFkZCBhZG1pbiByb3V0ZXMgaGVyZSAqL1xuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQWRtaW5Sb3V0aW5nTW9kdWxlIHt9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ClientApp/app/admin/admin-routing.module.ts\n");

/***/ })

}]);