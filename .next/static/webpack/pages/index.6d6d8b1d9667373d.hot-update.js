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

/***/ "./components/CustomSmallAreaChart.tsx":
/*!*********************************************!*\
  !*** ./components/CustomSmallAreaChart.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ \"./node_modules/recharts/es6/index.js\");\nvar _this = undefined;\n\n\n\nvar CustomSmallAreaChart = function(param) {\n    var data = param.data, isPositive = param.isPositive;\n    var convertData = function() {\n        return data.map(function(item) {\n            return {\n                point: Number(item)\n            };\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.AreaChart, {\n        width: 200,\n        height: 60,\n        data: convertData(),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.Area, {\n                type: \"monotone\",\n                dataKey: \"point\",\n                stroke: isPositive ? \"#30BE81\" : \"#EB4137\",\n                fill: isPositive ? \"#30be8163\" : \"#eb413754\"\n            }, void 0, false, {\n                fileName: \"F:\\\\bitbarg-task\\\\components\\\\CustomSmallAreaChart.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.YAxis, {\n                domain: [\n                    \"dataMin\",\n                    \"dataMax\"\n                ],\n                axisLine: false,\n                tick: false\n            }, void 0, false, {\n                fileName: \"F:\\\\bitbarg-task\\\\components\\\\CustomSmallAreaChart.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\bitbarg-task\\\\components\\\\CustomSmallAreaChart.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_c = CustomSmallAreaChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomSmallAreaChart);\nvar _c;\n$RefreshReg$(_c, \"CustomSmallAreaChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1c3RvbVNtYWxsQXJlYUNoYXJ0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBMEI7QUFDd0I7QUFPbEQsSUFBTUksb0JBQW9CLEdBQUcsZ0JBQWtDO1FBQS9CQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsVUFBVSxTQUFWQSxVQUFVO0lBQzlDLElBQU1DLFdBQVcsR0FBRyxXQUFNO1FBQ3hCLE9BQU9GLElBQUksQ0FBQ0csR0FBRyxDQUFDLFNBQUNDLElBQUk7bUJBQU07Z0JBQ3pCQyxLQUFLLEVBQUVDLE1BQU0sQ0FBQ0YsSUFBSSxDQUFDO2FBQ3BCO1NBQUMsQ0FBQyxDQUFDO0tBQ0w7SUFFRCxxQkFDRSw4REFBQ1IsK0NBQVM7UUFBQ1csS0FBSyxFQUFFLEdBQUc7UUFBRUMsTUFBTSxFQUFFLEVBQUU7UUFBRVIsSUFBSSxFQUFFRSxXQUFXLEVBQUU7OzBCQUNwRCw4REFBQ0wsMENBQUk7Z0JBQ0hZLElBQUksRUFBQyxVQUFVO2dCQUNmQyxPQUFPLEVBQUMsT0FBTztnQkFDZkMsTUFBTSxFQUFFVixVQUFVLEdBQUcsU0FBUyxHQUFHLFNBQVM7Z0JBQzFDVyxJQUFJLEVBQUVYLFVBQVUsR0FBRyxXQUFXLEdBQUcsV0FBVzs7Ozs7cUJBQzVDOzBCQUNGLDhEQUFDSCwyQ0FBSztnQkFBQ2UsTUFBTSxFQUFFO29CQUFDLFNBQVM7b0JBQUUsU0FBUztpQkFBQztnQkFBRUMsUUFBUSxFQUFFLEtBQUs7Z0JBQUVDLElBQUksRUFBRSxLQUFLOzs7OztxQkFBSTs7Ozs7O2FBQzdELENBQ1o7Q0FDSDtBQWxCS2hCLEtBQUFBLG9CQUFvQjtBQW9CMUIsK0RBQWVBLG9CQUFvQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ3VzdG9tU21hbGxBcmVhQ2hhcnQudHN4P2ZjNWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQXJlYUNoYXJ0LCBBcmVhLCBZQXhpcyB9IGZyb20gJ3JlY2hhcnRzJztcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gIGRhdGE6IHN0cmluZ1tdO1xyXG4gIGlzUG9zaXRpdmU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IEN1c3RvbVNtYWxsQXJlYUNoYXJ0ID0gKHsgZGF0YSwgaXNQb3NpdGl2ZSB9OiBJUHJvcHMpID0+IHtcclxuICBjb25zdCBjb252ZXJ0RGF0YSA9ICgpID0+IHtcclxuICAgIHJldHVybiBkYXRhLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgcG9pbnQ6IE51bWJlcihpdGVtKSxcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFyZWFDaGFydCB3aWR0aD17MjAwfSBoZWlnaHQ9ezYwfSBkYXRhPXtjb252ZXJ0RGF0YSgpfT5cclxuICAgICAgPEFyZWFcclxuICAgICAgICB0eXBlPVwibW9ub3RvbmVcIlxyXG4gICAgICAgIGRhdGFLZXk9XCJwb2ludFwiXHJcbiAgICAgICAgc3Ryb2tlPXtpc1Bvc2l0aXZlID8gJyMzMEJFODEnIDogJyNFQjQxMzcnfVxyXG4gICAgICAgIGZpbGw9e2lzUG9zaXRpdmUgPyAnIzMwYmU4MTYzJyA6ICcjZWI0MTM3NTQnfVxyXG4gICAgICAvPlxyXG4gICAgICA8WUF4aXMgZG9tYWluPXtbJ2RhdGFNaW4nLCAnZGF0YU1heCddfSBheGlzTGluZT17ZmFsc2V9IHRpY2s9e2ZhbHNlfSAvPlxyXG4gICAgPC9BcmVhQ2hhcnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVNtYWxsQXJlYUNoYXJ0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBcmVhQ2hhcnQiLCJBcmVhIiwiWUF4aXMiLCJDdXN0b21TbWFsbEFyZWFDaGFydCIsImRhdGEiLCJpc1Bvc2l0aXZlIiwiY29udmVydERhdGEiLCJtYXAiLCJpdGVtIiwicG9pbnQiLCJOdW1iZXIiLCJ3aWR0aCIsImhlaWdodCIsInR5cGUiLCJkYXRhS2V5Iiwic3Ryb2tlIiwiZmlsbCIsImRvbWFpbiIsImF4aXNMaW5lIiwidGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CustomSmallAreaChart.tsx\n");

/***/ })

});