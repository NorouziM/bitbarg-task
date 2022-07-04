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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _LivePriceDataTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LivePriceDataTable */ \"./components/LivePriceDataTable.tsx\");\n/* harmony import */ var _LivePriceFilters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LivePriceFilters */ \"./components/LivePriceFilters.tsx\");\n/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/fetcher */ \"./utils/fetcher.ts\");\n/* harmony import */ var _LivePriceBox_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LivePriceBox.module.scss */ \"./components/LivePriceBox.module.scss\");\n/* harmony import */ var _LivePriceBox_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_LivePriceBox_module_scss__WEBPACK_IMPORTED_MODULE_6__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n// mui\n\n// npm\n\n// components\n\n\n\n// styles\n\nvar _s = $RefreshSig$();\nvar LivePriceBox = function() {\n    _s();\n    // Internal State\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), page = ref[0], setPage = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), sort = ref1[0], setSort = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), searchText = ref2[0], setSearchText = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), dataList = ref3[0], setDataList = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"toman\"), selectedUnit = ref4[0], setSelectedUnit = ref4[1];\n    // Data Fetching\n    var data = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://api.bitbarg.me/api/v1/currencies?page=\".concat(page).concat(!!searchText ? \"&q=\".concat(searchText) : \"\").concat(!!sort ? \"&sort=\".concat(sort) : \"\"), _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"]).data;\n    var handleChangeUnitChange = function(e) {\n        setSelectedUnit(e.target.value);\n    };\n    var handleChangeSort = function(event) {\n        setSort(event.target.value);\n    };\n    var handleFetchMoreData = function() {\n        setPage(function(prevState) {\n            return prevState + 1;\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (data) {\n            var newData = [];\n            // only add new Items\n            data.result.items.forEach(function(item) {\n                var isFound = dataList.some(function(element) {\n                    return element.id === item.id;\n                });\n                if (!isFound) newData.push(item);\n            });\n            setDataList(function(prevData) {\n                return _toConsumableArray(prevData).concat(_toConsumableArray(newData));\n            });\n        }\n    }, [\n        data\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (searchText || sort) {\n            // If we start sorting ot searching, Reset page and data list\n            setPage(1);\n            setDataList([]);\n        }\n    }, [\n        searchText,\n        sort\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_LivePriceBox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().livePriceContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_LivePriceBox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().livePricePaper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Stack, {\n                    className: (_LivePriceBox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().livePriceHeader),\n                    direction: \"row\",\n                    alignItems: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                            variant: \"h5\",\n                            component: \"h2\",\n                            ml: 2,\n                            fontWeight: \"600\",\n                            children: \"\\u0642\\u06CC\\u0645\\u062A \\u0644\\u062D\\u0638\\u0647\\u200C\\u0627\\u06CC\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\bitbarg-task\\\\components\\\\LivePriceBox.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                            variant: \"body2\",\n                            component: \"span\",\n                            sx: {\n                                color: \"#00000099\"\n                            },\n                            children: [\n                                data ? data.result.meta.paginateHelper.total : 0,\n                                \" \\u0627\\u0631\\u0632 \\u062F\\u06CC\\u062C\\u06CC\\u062A\\u0627\\u0644\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\bitbarg-task\\\\components\\\\LivePriceBox.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\bitbarg-task\\\\components\\\\LivePriceBox.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_LivePriceBox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().livePriceFilter),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LivePriceFilters__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        setSearchText: setSearchText,\n                        selectedUnit: selectedUnit,\n                        handleChangeUnitChange: handleChangeUnitChange,\n                        handleChangeSort: handleChangeSort,\n                        sort: sort\n                    }, void 0, false, {\n                        fileName: \"F:\\\\bitbarg-task\\\\components\\\\LivePriceBox.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\bitbarg-task\\\\components\\\\LivePriceBox.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_LivePriceBox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().livePriceTable),\n                    children: !!dataList.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LivePriceDataTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        rows: dataList,\n                        metaData: data ? data.result.meta : [],\n                        selectedUnit: selectedUnit,\n                        fetchMoreData: handleFetchMoreData\n                    }, void 0, false, {\n                        fileName: \"F:\\\\bitbarg-task\\\\components\\\\LivePriceBox.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\bitbarg-task\\\\components\\\\LivePriceBox.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\bitbarg-task\\\\components\\\\LivePriceBox.tsx\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"F:\\\\bitbarg-task\\\\components\\\\LivePriceBox.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, _this);\n};\n_s(LivePriceBox, \"1k6pIe13FkSJeuOtD1O7tmCJwWI=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = LivePriceBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LivePriceBox);\nvar _c;\n$RefreshReg$(_c, \"LivePriceBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0I7d0JBQzlDSSxnQkFBZ0IsRUFBRUEsZ0JBQWdCO3dCQUNsQ2IsSUFBSSxFQUFFQSxJQUFJOzs7Ozs2QkFDVjs7Ozs7eUJBQ0U7OEJBQ04sOERBQUM0QixLQUFHO29CQUFDQyxTQUFTLEVBQUVqQyxpRkFBcUI7OEJBQ2xDLENBQUMsQ0FBQ1EsUUFBUSxDQUFDMEMsTUFBTSxrQkFDaEIsOERBQUNyRCwyREFBa0I7d0JBQ2pCc0QsSUFBSSxFQUFFM0MsUUFBUTt3QkFDZDRDLFFBQVEsRUFBRXhDLElBQUksR0FBR0EsSUFBSSxDQUFDVSxNQUFNLENBQUN1QixJQUFJLEdBQUcsRUFBRTt3QkFDdENuQyxZQUFZLEVBQUVBLFlBQVk7d0JBQzFCMkMsYUFBYSxFQUFFbEMsbUJBQW1COzs7Ozs2QkFDbEM7Ozs7O3lCQUVBOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBdkZLbEIsWUFBWTs7UUFTQ0wsMkNBQU07OztBQVRuQkssS0FBQUEsWUFBWTtBQXlGbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xpdmVQcmljZUJveC50c3g/NDJkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuLy8gbXVpXHJcbmltcG9ydCB7IFNlbGVjdENoYW5nZUV2ZW50LCBTdGFjaywgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG4vLyBucG1cclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBMaXZlUHJpY2VEYXRhVGFibGUgZnJvbSAnLi9MaXZlUHJpY2VEYXRhVGFibGUnO1xyXG5pbXBvcnQgTGl2ZVByaWNlRmlsdGVycyBmcm9tICcuL0xpdmVQcmljZUZpbHRlcnMnO1xyXG4vLyB1dGlsc1xyXG5pbXBvcnQgeyBJTGl2ZURhdGFSZXN1bHQgfSBmcm9tICdAdXRpbHMvaW50ZXJmYWNlcyc7XHJcbmltcG9ydCBmZXRjaGVyIGZyb20gJ0B1dGlscy9mZXRjaGVyJztcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MaXZlUHJpY2VCb3gubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgTGl2ZVByaWNlQm94ID0gKCkgPT4ge1xyXG4gIC8vIEludGVybmFsIFN0YXRlXHJcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW3NvcnQsIHNldFNvcnRdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgY29uc3QgW3NlYXJjaFRleHQsIHNldFNlYXJjaFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRhTGlzdCwgc2V0RGF0YUxpc3RdID0gdXNlU3RhdGU8SUxpdmVEYXRhUmVzdWx0W10+KFtdKTtcclxuICBjb25zdCBbc2VsZWN0ZWRVbml0LCBzZXRTZWxlY3RlZFVuaXRdID0gdXNlU3RhdGU8J3RvbWFuJyB8ICd0ZXRoZXInPigndG9tYW4nKTtcclxuXHJcbiAgLy8gRGF0YSBGZXRjaGluZ1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSKFxyXG4gICAgYGh0dHBzOi8vYXBpLmJpdGJhcmcubWUvYXBpL3YxL2N1cnJlbmNpZXM/cGFnZT0ke3BhZ2V9JHtcclxuICAgICAgISFzZWFyY2hUZXh0ID8gYCZxPSR7c2VhcmNoVGV4dH1gIDogJydcclxuICAgIH0keyEhc29ydCA/IGAmc29ydD0ke3NvcnR9YCA6ICcnfWAsXHJcbiAgICBmZXRjaGVyXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlVW5pdENoYW5nZSA9IChlOiBhbnkpID0+IHtcclxuICAgIHNldFNlbGVjdGVkVW5pdChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2VTb3J0ID0gKGV2ZW50OiBTZWxlY3RDaGFuZ2VFdmVudCkgPT4ge1xyXG4gICAgc2V0U29ydChldmVudC50YXJnZXQudmFsdWUgYXMgc3RyaW5nKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUZldGNoTW9yZURhdGEgPSAoKSA9PiB7XHJcbiAgICBzZXRQYWdlKChwcmV2U3RhdGUpID0+IHByZXZTdGF0ZSArIDEpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBjb25zdCBuZXdEYXRhOiBJTGl2ZURhdGFSZXN1bHRbXSA9IFtdO1xyXG4gICAgICAvLyBvbmx5IGFkZCBuZXcgSXRlbXNcclxuICAgICAgZGF0YS5yZXN1bHQuaXRlbXMuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNGb3VuZCA9IGRhdGFMaXN0LnNvbWUoKGVsZW1lbnQ6IGFueSkgPT4gZWxlbWVudC5pZCA9PT0gaXRlbS5pZCk7XHJcbiAgICAgICAgaWYgKCFpc0ZvdW5kKSBuZXdEYXRhLnB1c2goaXRlbSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXREYXRhTGlzdCgocHJldkRhdGE6IGFueSkgPT4gWy4uLnByZXZEYXRhLCAuLi5uZXdEYXRhXSk7XHJcbiAgICB9XHJcbiAgfSwgW2RhdGFdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzZWFyY2hUZXh0IHx8IHNvcnQpIHtcclxuICAgICAgLy8gSWYgd2Ugc3RhcnQgc29ydGluZyBvdCBzZWFyY2hpbmcsIFJlc2V0IHBhZ2UgYW5kIGRhdGEgbGlzdFxyXG4gICAgICBzZXRQYWdlKDEpO1xyXG4gICAgICBzZXREYXRhTGlzdChbXSk7XHJcbiAgICB9XHJcbiAgfSwgW3NlYXJjaFRleHQsIHNvcnRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGl2ZVByaWNlQ29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXZlUHJpY2VQYXBlcn0+XHJcbiAgICAgICAgPFN0YWNrXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5saXZlUHJpY2VIZWFkZXJ9XHJcbiAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAgYWxpZ25JdGVtcz17J2NlbnRlcid9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIiBtbD17Mn0gZm9udFdlaWdodD17JzYwMCd9PlxyXG4gICAgICAgICAgICDZgtuM2YXYqiDZhNit2LjZh+KAjNin24xcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICBzeD17eyBjb2xvcjogJyMwMDAwMDA5OScgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2RhdGEgPyBkYXRhLnJlc3VsdC5tZXRhLnBhZ2luYXRlSGVscGVyLnRvdGFsIDogMH0g2KfYsdiyINiv24zYrNuM2KrYp9mEXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpdmVQcmljZUZpbHRlcn0+XHJcbiAgICAgICAgICA8TGl2ZVByaWNlRmlsdGVyc1xyXG4gICAgICAgICAgICBzZXRTZWFyY2hUZXh0PXtzZXRTZWFyY2hUZXh0fVxyXG4gICAgICAgICAgICBzZWxlY3RlZFVuaXQ9e3NlbGVjdGVkVW5pdH1cclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlVW5pdENoYW5nZT17aGFuZGxlQ2hhbmdlVW5pdENoYW5nZX1cclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlU29ydD17aGFuZGxlQ2hhbmdlU29ydH1cclxuICAgICAgICAgICAgc29ydD17c29ydH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXZlUHJpY2VUYWJsZX0+XHJcbiAgICAgICAgICB7ISFkYXRhTGlzdC5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICA8TGl2ZVByaWNlRGF0YVRhYmxlXHJcbiAgICAgICAgICAgICAgcm93cz17ZGF0YUxpc3R9XHJcbiAgICAgICAgICAgICAgbWV0YURhdGE9e2RhdGEgPyBkYXRhLnJlc3VsdC5tZXRhIDogW119XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRVbml0PXtzZWxlY3RlZFVuaXR9XHJcbiAgICAgICAgICAgICAgZmV0Y2hNb3JlRGF0YT17aGFuZGxlRmV0Y2hNb3JlRGF0YX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpdmVQcmljZUJveDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTdGFjayIsIlR5cG9ncmFwaHkiLCJ1c2VTV1IiLCJMaXZlUHJpY2VEYXRhVGFibGUiLCJMaXZlUHJpY2VGaWx0ZXJzIiwiZmV0Y2hlciIsInN0eWxlcyIsIkxpdmVQcmljZUJveCIsInBhZ2UiLCJzZXRQYWdlIiwic29ydCIsInNldFNvcnQiLCJzZWFyY2hUZXh0Iiwic2V0U2VhcmNoVGV4dCIsImRhdGFMaXN0Iiwic2V0RGF0YUxpc3QiLCJzZWxlY3RlZFVuaXQiLCJzZXRTZWxlY3RlZFVuaXQiLCJkYXRhIiwiaGFuZGxlQ2hhbmdlVW5pdENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZVNvcnQiLCJldmVudCIsImhhbmRsZUZldGNoTW9yZURhdGEiLCJwcmV2U3RhdGUiLCJuZXdEYXRhIiwicmVzdWx0IiwiaXRlbXMiLCJmb3JFYWNoIiwiaXRlbSIsImlzRm91bmQiLCJzb21lIiwiZWxlbWVudCIsImlkIiwicHVzaCIsInByZXZEYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwibGl2ZVByaWNlQ29udGFpbmVyIiwibGl2ZVByaWNlUGFwZXIiLCJsaXZlUHJpY2VIZWFkZXIiLCJkaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwidmFyaWFudCIsImNvbXBvbmVudCIsIm1sIiwiZm9udFdlaWdodCIsInN4IiwiY29sb3IiLCJtZXRhIiwicGFnaW5hdGVIZWxwZXIiLCJ0b3RhbCIsImxpdmVQcmljZUZpbHRlciIsImxpdmVQcmljZVRhYmxlIiwibGVuZ3RoIiwicm93cyIsIm1ldGFEYXRhIiwiZmV0Y2hNb3JlRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LivePriceBox.tsx\n");

/***/ })

});