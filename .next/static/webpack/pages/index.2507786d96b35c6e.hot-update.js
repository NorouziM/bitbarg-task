"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/LivePriceBox.tsx":
/*!*************************************!*\
  !*** ./components/LivePriceBox.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LivePriceBox_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LivePriceBox.module.scss */ \"./components/LivePriceBox.module.scss\");\n/* harmony import */ var _LivePriceBox_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_LivePriceBox_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _LivePriceDataTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LivePriceDataTable */ \"./components/LivePriceDataTable.tsx\");\n/* harmony import */ var _LivePriceFilters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LivePriceFilters */ \"./components/LivePriceFilters.tsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/fetcher */ \"./utils/fetcher.ts\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar LivePriceBox = function() {\n    _s();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/api/user/123\", _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"]), data = ref.data, error = ref.error, mutate = ref.mutate;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"toman\"), selectedUnit = ref1[0], setSelectedUnit = ref1[1];\n    var handleSearch = function(e) {\n        e.preventDefault();\n        console.log(\"dd\");\n    };\n    var handleChangeUnitChange = function() {};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_LivePriceBox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().livePriceContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_LivePriceBox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().livePricePaper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_LivePriceBox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().livePriceHeader),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                        variant: \"h5\",\n                        component: \"h2\",\n                        children: \"\\u0642\\u06CC\\u0645\\u062A \\u0644\\u062D\\u0638\\u0647\\u200C\\u0627\\u06CC\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\bitbarg-task\\\\components\\\\LivePriceBox.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\bitbarg-task\\\\components\\\\LivePriceBox.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_LivePriceBox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().livePriceFilter),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LivePriceFilters__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        handleSearch: handleSearch,\n                        selectedUnit: selectedUnit,\n                        handleChangeUnitChange: handleChangeUnitChange\n                    }, void 0, false, {\n                        fileName: \"F:\\\\bitbarg-task\\\\components\\\\LivePriceBox.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\bitbarg-task\\\\components\\\\LivePriceBox.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_LivePriceBox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().livePriceTable),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LivePriceDataTable__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"F:\\\\bitbarg-task\\\\components\\\\LivePriceBox.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\bitbarg-task\\\\components\\\\LivePriceBox.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\bitbarg-task\\\\components\\\\LivePriceBox.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"F:\\\\bitbarg-task\\\\components\\\\LivePriceBox.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_s(LivePriceBox, \"wCA3M6Vf1a+B5/GMOoO4yXt83e4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = LivePriceBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LivePriceBox);\nvar _c;\n$RefreshReg$(_c, \"LivePriceBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpdmVQcmljZUJveC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTJDO0FBQ0g7QUFDUTtBQUNNO0FBQ0o7QUFDekI7QUFDWTs7QUFFckMsSUFBTVEsWUFBWSxHQUFHLFdBQU07O0lBQ3pCLElBQWdDRixHQUFnQyxHQUFoQ0EsK0NBQU0sQ0FBQyxlQUFlLEVBQUVDLHNEQUFPLENBQUMsRUFBeERFLElBQUksR0FBb0JILEdBQWdDLENBQXhERyxJQUFJLEVBQUVDLEtBQUssR0FBYUosR0FBZ0MsQ0FBbERJLEtBQUssRUFBRUMsTUFBTSxHQUFLTCxHQUFnQyxDQUEzQ0ssTUFBTTtJQUMzQixJQUF3Q1QsSUFBcUMsR0FBckNBLCtDQUFRLENBQXFCLE9BQU8sQ0FBQyxFQVYvRSxZQVVxQixHQUFxQkEsSUFBcUMsR0FBMUQsRUFWckIsZUFVc0MsR0FBSUEsSUFBcUMsR0FBekM7SUFDcEMsSUFBTVksWUFBWSxHQUFHLFNBQUNDLENBQW1DLEVBQUs7UUFDNURBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDbkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25CO0lBQ0QsSUFBTUMsc0JBQXNCLEdBQUcsV0FBTSxFQUFFO0lBRXZDLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRWxCLHFGQUF5QjtrQkFDdkMsNEVBQUNpQixLQUFHO1lBQUNDLFNBQVMsRUFBRWxCLGlGQUFxQjs7OEJBQ25DLDhEQUFDaUIsS0FBRztvQkFBQ0MsU0FBUyxFQUFFbEIsa0ZBQXNCOzhCQUNwQyw0RUFBQ0gscURBQVU7d0JBQUN5QixPQUFPLEVBQUMsSUFBSTt3QkFBQ0MsU0FBUyxFQUFDLElBQUk7a0NBQUMscUVBRXhDOzs7Ozs2QkFBYTs7Ozs7eUJBQ1Q7OEJBQ04sOERBQUNOLEtBQUc7b0JBQUNDLFNBQVMsRUFBRWxCLGtGQUFzQjs4QkFDcEMsNEVBQUNFLHlEQUFnQjt3QkFDZlMsWUFBWSxFQUFFQSxZQUFZO3dCQUMxQkYsWUFBWSxFQUFFQSxZQUFZO3dCQUMxQk8sc0JBQXNCLEVBQUVBLHNCQUFzQjs7Ozs7NkJBQzlDOzs7Ozt5QkFDRTs4QkFDTiw4REFBQ0MsS0FBRztvQkFBQ0MsU0FBUyxFQUFFbEIsaUZBQXFCOzhCQUNuQyw0RUFBQ0MsMkRBQWtCOzs7OzZCQUFHOzs7Ozt5QkFDbEI7Ozs7OztpQkFDRjs7Ozs7YUFDRixDQUNOO0NBQ0g7R0E5QktJLFlBQVk7O1FBQ2dCRiwyQ0FBTTs7O0FBRGxDRSxLQUFBQSxZQUFZO0FBZ0NsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGl2ZVByaWNlQm94LnRzeD80MmQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGl2ZVByaWNlQm94Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IExpdmVQcmljZURhdGFUYWJsZSBmcm9tICcuL0xpdmVQcmljZURhdGFUYWJsZSc7XHJcbmltcG9ydCBMaXZlUHJpY2VGaWx0ZXJzIGZyb20gJy4vTGl2ZVByaWNlRmlsdGVycyc7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IGZldGNoZXIgZnJvbSAnQHV0aWxzL2ZldGNoZXInO1xyXG5cclxuY29uc3QgTGl2ZVByaWNlQm94ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIG11dGF0ZSB9ID0gdXNlU1dSKCcvYXBpL3VzZXIvMTIzJywgZmV0Y2hlcik7XHJcbiAgY29uc3QgW3NlbGVjdGVkVW5pdCwgc2V0U2VsZWN0ZWRVbml0XSA9IHVzZVN0YXRlPCd0b21hbicgfCAndGV0aGVyJz4oJ3RvbWFuJyk7XHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZygnZGQnKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVVuaXRDaGFuZ2UgPSAoKSA9PiB7fTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGl2ZVByaWNlQ29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXZlUHJpY2VQYXBlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXZlUHJpY2VIZWFkZXJ9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAg2YLbjNmF2Kog2YTYrdi42YfigIzYp9uMXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXZlUHJpY2VGaWx0ZXJ9PlxyXG4gICAgICAgICAgPExpdmVQcmljZUZpbHRlcnNcclxuICAgICAgICAgICAgaGFuZGxlU2VhcmNoPXtoYW5kbGVTZWFyY2h9XHJcbiAgICAgICAgICAgIHNlbGVjdGVkVW5pdD17c2VsZWN0ZWRVbml0fVxyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2VVbml0Q2hhbmdlPXtoYW5kbGVDaGFuZ2VVbml0Q2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpdmVQcmljZVRhYmxlfT5cclxuICAgICAgICAgIDxMaXZlUHJpY2VEYXRhVGFibGUgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGl2ZVByaWNlQm94O1xyXG4iXSwibmFtZXMiOlsiVHlwb2dyYXBoeSIsIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJMaXZlUHJpY2VEYXRhVGFibGUiLCJMaXZlUHJpY2VGaWx0ZXJzIiwidXNlU1dSIiwiZmV0Y2hlciIsIkxpdmVQcmljZUJveCIsImRhdGEiLCJlcnJvciIsIm11dGF0ZSIsInNlbGVjdGVkVW5pdCIsInNldFNlbGVjdGVkVW5pdCIsImhhbmRsZVNlYXJjaCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2VVbml0Q2hhbmdlIiwiZGl2IiwiY2xhc3NOYW1lIiwibGl2ZVByaWNlQ29udGFpbmVyIiwibGl2ZVByaWNlUGFwZXIiLCJsaXZlUHJpY2VIZWFkZXIiLCJ2YXJpYW50IiwiY29tcG9uZW50IiwibGl2ZVByaWNlRmlsdGVyIiwibGl2ZVByaWNlVGFibGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LivePriceBox.tsx\n");

/***/ })

});