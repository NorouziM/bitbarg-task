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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LivePriceBox_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LivePriceBox.module.scss */ \"./components/LivePriceBox.module.scss\");\n/* harmony import */ var _LivePriceBox_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_LivePriceBox_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _LivePriceDataTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LivePriceDataTable */ \"./components/LivePriceDataTable.tsx\");\n/* harmony import */ var _LivePriceFilters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LivePriceFilters */ \"./components/LivePriceFilters.tsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/fetcher */ \"./utils/fetcher.ts\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar LivePriceBox = function() {\n    _s();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"https://api.bitbarg.me/api/v1/currencies\", _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"]), data = ref.data, error = ref.error, mutate = ref.mutate;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"toman\"), selectedUnit = ref1[0], setSelectedUnit = ref1[1];\n    var handleSearch = function(e) {\n        e.preventDefault();\n        console.log(\"dd\");\n    };\n    var handleChangeUnitChange = function() {};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_LivePriceBox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().livePriceContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_LivePriceBox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().livePricePaper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_LivePriceBox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().livePriceHeader),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                        variant: \"h5\",\n                        component: \"h2\",\n                        children: \"\\u0642\\u06CC\\u0645\\u062A \\u0644\\u062D\\u0638\\u0647\\u200C\\u0627\\u06CC\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\bitbarg-task\\\\components\\\\LivePriceBox.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\bitbarg-task\\\\components\\\\LivePriceBox.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_LivePriceBox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().livePriceFilter),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LivePriceFilters__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        handleSearch: handleSearch,\n                        selectedUnit: selectedUnit,\n                        handleChangeUnitChange: handleChangeUnitChange\n                    }, void 0, false, {\n                        fileName: \"F:\\\\bitbarg-task\\\\components\\\\LivePriceBox.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\bitbarg-task\\\\components\\\\LivePriceBox.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_LivePriceBox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().livePriceTable),\n                    children: data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LivePriceDataTable__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        rows: data.result.items,\n                        metaData: data.result.meta,\n                        selectedUnit: selectedUnit\n                    }, void 0, false, {\n                        fileName: \"F:\\\\bitbarg-task\\\\components\\\\LivePriceBox.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, _this) : null\n                }, void 0, false, {\n                    fileName: \"F:\\\\bitbarg-task\\\\components\\\\LivePriceBox.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\bitbarg-task\\\\components\\\\LivePriceBox.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"F:\\\\bitbarg-task\\\\components\\\\LivePriceBox.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_s(LivePriceBox, \"wCA3M6Vf1a+B5/GMOoO4yXt83e4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = LivePriceBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LivePriceBox);\nvar _c;\n$RefreshReg$(_c, \"LivePriceBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpdmVQcmljZUJveC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTJDO0FBQ0g7QUFDUTtBQUNNO0FBQ0o7QUFDekI7QUFDWTs7QUFFckMsSUFBTVEsWUFBWSxHQUFHLFdBQU07O0lBQ3pCLElBQWdDRixHQUcvQixHQUgrQkEsK0NBQU0sQ0FDcEMsMENBQTBDLEVBQzFDQyxzREFBTyxDQUNSLEVBSE9FLElBQUksR0FBb0JILEdBRy9CLENBSE9HLElBQUksRUFBRUMsS0FBSyxHQUFhSixHQUcvQixDQUhhSSxLQUFLLEVBQUVDLE1BQU0sR0FBS0wsR0FHL0IsQ0FIb0JLLE1BQU07SUFJM0IsSUFBd0NULElBQXFDLEdBQXJDQSwrQ0FBUSxDQUFxQixPQUFPLENBQUMsRUFiL0UsWUFhcUIsR0FBcUJBLElBQXFDLEdBQTFELEVBYnJCLGVBYXNDLEdBQUlBLElBQXFDLEdBQXpDO0lBQ3BDLElBQU1ZLFlBQVksR0FBRyxTQUFDQyxDQUFtQyxFQUFLO1FBQzVEQSxDQUFDLENBQUNDLGNBQWMsRUFBRSxDQUFDO1FBQ25CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNuQjtJQUNELElBQU1DLHNCQUFzQixHQUFHLFdBQU0sRUFBRTtJQUV2QyxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVsQixxRkFBeUI7a0JBQ3ZDLDRFQUFDaUIsS0FBRztZQUFDQyxTQUFTLEVBQUVsQixpRkFBcUI7OzhCQUNuQyw4REFBQ2lCLEtBQUc7b0JBQUNDLFNBQVMsRUFBRWxCLGtGQUFzQjs4QkFDcEMsNEVBQUNILHFEQUFVO3dCQUFDeUIsT0FBTyxFQUFDLElBQUk7d0JBQUNDLFNBQVMsRUFBQyxJQUFJO2tDQUFDLHFFQUV4Qzs7Ozs7NkJBQWE7Ozs7O3lCQUNUOzhCQUNOLDhEQUFDTixLQUFHO29CQUFDQyxTQUFTLEVBQUVsQixrRkFBc0I7OEJBQ3BDLDRFQUFDRSx5REFBZ0I7d0JBQ2ZTLFlBQVksRUFBRUEsWUFBWTt3QkFDMUJGLFlBQVksRUFBRUEsWUFBWTt3QkFDMUJPLHNCQUFzQixFQUFFQSxzQkFBc0I7Ozs7OzZCQUM5Qzs7Ozs7eUJBQ0U7OEJBQ04sOERBQUNDLEtBQUc7b0JBQUNDLFNBQVMsRUFBRWxCLGlGQUFxQjs4QkFDbENNLElBQUksaUJBQ0gsOERBQUNMLDJEQUFrQjt3QkFDakJ5QixJQUFJLEVBQUVwQixJQUFJLENBQUNxQixNQUFNLENBQUNDLEtBQUs7d0JBQ3ZCQyxRQUFRLEVBQUV2QixJQUFJLENBQUNxQixNQUFNLENBQUNHLElBQUk7d0JBQzFCckIsWUFBWSxFQUFFQSxZQUFZOzs7Ozs2QkFDMUIsR0FDQSxJQUFJOzs7Ozt5QkFDSjs7Ozs7O2lCQUNGOzs7OzthQUNGLENBQ047Q0FDSDtHQXZDS0osWUFBWTs7UUFDZ0JGLDJDQUFNOzs7QUFEbENFLEtBQUFBLFlBQVk7QUF5Q2xCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXZlUHJpY2VCb3gudHN4PzQyZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MaXZlUHJpY2VCb3gubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgTGl2ZVByaWNlRGF0YVRhYmxlIGZyb20gJy4vTGl2ZVByaWNlRGF0YVRhYmxlJztcclxuaW1wb3J0IExpdmVQcmljZUZpbHRlcnMgZnJvbSAnLi9MaXZlUHJpY2VGaWx0ZXJzJztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5pbXBvcnQgZmV0Y2hlciBmcm9tICdAdXRpbHMvZmV0Y2hlcic7XHJcblxyXG5jb25zdCBMaXZlUHJpY2VCb3ggPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbXV0YXRlIH0gPSB1c2VTV1IoXHJcbiAgICAnaHR0cHM6Ly9hcGkuYml0YmFyZy5tZS9hcGkvdjEvY3VycmVuY2llcycsXHJcbiAgICBmZXRjaGVyXHJcbiAgKTtcclxuICBjb25zdCBbc2VsZWN0ZWRVbml0LCBzZXRTZWxlY3RlZFVuaXRdID0gdXNlU3RhdGU8J3RvbWFuJyB8ICd0ZXRoZXInPigndG9tYW4nKTtcclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKCdkZCcpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlVW5pdENoYW5nZSA9ICgpID0+IHt9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXZlUHJpY2VDb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpdmVQcmljZVBhcGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpdmVQcmljZUhlYWRlcn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICDZgtuM2YXYqiDZhNit2LjZh+KAjNin24xcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpdmVQcmljZUZpbHRlcn0+XHJcbiAgICAgICAgICA8TGl2ZVByaWNlRmlsdGVyc1xyXG4gICAgICAgICAgICBoYW5kbGVTZWFyY2g9e2hhbmRsZVNlYXJjaH1cclxuICAgICAgICAgICAgc2VsZWN0ZWRVbml0PXtzZWxlY3RlZFVuaXR9XHJcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZVVuaXRDaGFuZ2U9e2hhbmRsZUNoYW5nZVVuaXRDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGl2ZVByaWNlVGFibGV9PlxyXG4gICAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICAgIDxMaXZlUHJpY2VEYXRhVGFibGVcclxuICAgICAgICAgICAgICByb3dzPXtkYXRhLnJlc3VsdC5pdGVtc31cclxuICAgICAgICAgICAgICBtZXRhRGF0YT17ZGF0YS5yZXN1bHQubWV0YX1cclxuICAgICAgICAgICAgICBzZWxlY3RlZFVuaXQ9e3NlbGVjdGVkVW5pdH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXZlUHJpY2VCb3g7XHJcbiJdLCJuYW1lcyI6WyJUeXBvZ3JhcGh5IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkxpdmVQcmljZURhdGFUYWJsZSIsIkxpdmVQcmljZUZpbHRlcnMiLCJ1c2VTV1IiLCJmZXRjaGVyIiwiTGl2ZVByaWNlQm94IiwiZGF0YSIsImVycm9yIiwibXV0YXRlIiwic2VsZWN0ZWRVbml0Iiwic2V0U2VsZWN0ZWRVbml0IiwiaGFuZGxlU2VhcmNoIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZVVuaXRDaGFuZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJsaXZlUHJpY2VDb250YWluZXIiLCJsaXZlUHJpY2VQYXBlciIsImxpdmVQcmljZUhlYWRlciIsInZhcmlhbnQiLCJjb21wb25lbnQiLCJsaXZlUHJpY2VGaWx0ZXIiLCJsaXZlUHJpY2VUYWJsZSIsInJvd3MiLCJyZXN1bHQiLCJpdGVtcyIsIm1ldGFEYXRhIiwibWV0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LivePriceBox.tsx\n");

/***/ })

});