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

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Layout_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Layout.module.sass */ \"./styles/Layout.module.sass\");\n/* harmony import */ var _styles_Layout_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_sass__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction Layout() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    }), offsetPosition = ref[0], setOffsetPosition = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isMoving = ref1[0], setIsMoving = ref1[1];\n    var helloRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // const onPointerUp = useCallback(\n    //   (event: React.PointerEvent<HTMLDivElement>) => {\n    //     startPosition.current = {\n    //       x: event.clientX,\n    //       y: event.clientY,\n    //     };\n    //     setIsMoving(false);\n    //   },\n    //   [startPosition]\n    // );\n    var onPointerMove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(event) {\n        if (isMoving) {\n            var ref, ref1;\n            var _left;\n            var currentPosX = (_left = (ref = helloRef.current) === null || ref === void 0 ? void 0 : ref.getBoundingClientRect().left) !== null && _left !== void 0 ? _left : 0;\n            var _top;\n            var currentPosY = (_top = (ref1 = helloRef.current) === null || ref1 === void 0 ? void 0 : ref1.getBoundingClientRect().top) !== null && _top !== void 0 ? _top : 0;\n            var newPosition = {\n                x: event.clientX - 150 - currentPosX,\n                y: event.clientY - 50 - currentPosY\n            };\n            setOffsetPosition(newPosition);\n        }\n    }, [\n        isMoving,\n        setOffsetPosition,\n        helloRef\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onPointerMove: onPointerMove,\n        className: (_styles_Layout_module_sass__WEBPACK_IMPORTED_MODULE_2___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    offsetPosition.x,\n                    \" \",\n                    offsetPosition.y\n                ]\n            }, void 0, true, {\n                fileName: \"/home/g/stranka/mannheim/components/layout.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: helloRef,\n                onClick: function() {\n                    setIsMoving(!isMoving);\n                },\n                className: (_styles_Layout_module_sass__WEBPACK_IMPORTED_MODULE_2___default().hello),\n                style: {\n                    \"--OffsetPositionX\": \"\".concat(offsetPosition.x),\n                    \"--OffsetPositionY\": \"\".concat(offsetPosition.y)\n                },\n                children: \"hello\"\n            }, void 0, false, {\n                fileName: \"/home/g/stranka/mannheim/components/layout.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/g/stranka/mannheim/components/layout.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Layout, \"5QWR183Jvd89YcIy5HxmZjc7K38=\");\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQudHN4P2FmMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlZk9iamVjdCwgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSBcInJlcGxcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9MYXlvdXQubW9kdWxlLnNhc3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIExheW91dCgpIHtcbiAgY29uc3QgW29mZnNldFBvc2l0aW9uLCBzZXRPZmZzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7IHg6IDAsIHk6IDAgfSk7XG4gIGNvbnN0IFtpc01vdmluZywgc2V0SXNNb3ZpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoZWxsb1JlZjogUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PiA9IHVzZVJlZihudWxsKTtcblxuICAvLyBjb25zdCBvblBvaW50ZXJVcCA9IHVzZUNhbGxiYWNrKFxuICAvLyAgIChldmVudDogUmVhY3QuUG9pbnRlckV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAvLyAgICAgc3RhcnRQb3NpdGlvbi5jdXJyZW50ID0ge1xuICAvLyAgICAgICB4OiBldmVudC5jbGllbnRYLFxuICAvLyAgICAgICB5OiBldmVudC5jbGllbnRZLFxuICAvLyAgICAgfTtcbiAgLy8gICAgIHNldElzTW92aW5nKGZhbHNlKTtcbiAgLy8gICB9LFxuICAvLyAgIFtzdGFydFBvc2l0aW9uXVxuICAvLyApO1xuXG4gIGNvbnN0IG9uUG9pbnRlck1vdmUgPSB1c2VDYWxsYmFjayhcbiAgICAoZXZlbnQ6IFJlYWN0LlBvaW50ZXJFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICAgIGlmIChpc01vdmluZykge1xuICAgICAgICBjb25zdCBjdXJyZW50UG9zWCA9IGhlbGxvUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgPz8gMDtcbiAgICAgICAgY29uc3QgY3VycmVudFBvc1kgPSBoZWxsb1JlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPz8gMDtcbiAgICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSB7XG4gICAgICAgICAgeDogZXZlbnQuY2xpZW50WCAtIDE1MCAtIGN1cnJlbnRQb3NYLFxuICAgICAgICAgIHk6IGV2ZW50LmNsaWVudFkgLSA1MCAtIGN1cnJlbnRQb3NZLFxuICAgICAgICB9O1xuICAgICAgICBzZXRPZmZzZXRQb3NpdGlvbihuZXdQb3NpdGlvbik7XG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNNb3ZpbmcsIHNldE9mZnNldFBvc2l0aW9uLCBoZWxsb1JlZl1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgb25Qb2ludGVyTW92ZT17b25Qb2ludGVyTW92ZX0gY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICA8ZGl2PlxuICAgICAgICB7b2Zmc2V0UG9zaXRpb24ueH0ge29mZnNldFBvc2l0aW9uLnl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtoZWxsb1JlZn1cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHNldElzTW92aW5nKCFpc01vdmluZyk7XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlbGxvfVxuICAgICAgICBzdHlsZT17XG4gICAgICAgICAge1xuICAgICAgICAgICAgXCItLU9mZnNldFBvc2l0aW9uWFwiOiBgJHtvZmZzZXRQb3NpdGlvbi54fWAsXG4gICAgICAgICAgICBcIi0tT2Zmc2V0UG9zaXRpb25ZXCI6IGAke29mZnNldFBvc2l0aW9uLnl9YCxcbiAgICAgICAgICB9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICBoZWxsb1xuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVJlZiIsInVzZVN0YXRlIiwic3R5bGVzIiwiTGF5b3V0IiwieCIsInkiLCJvZmZzZXRQb3NpdGlvbiIsInNldE9mZnNldFBvc2l0aW9uIiwiaXNNb3ZpbmciLCJzZXRJc01vdmluZyIsImhlbGxvUmVmIiwib25Qb2ludGVyTW92ZSIsImV2ZW50IiwiY3VycmVudFBvc1giLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsImN1cnJlbnRQb3NZIiwidG9wIiwibmV3UG9zaXRpb24iLCJjbGllbnRYIiwiY2xpZW50WSIsImRpdiIsImNsYXNzTmFtZSIsIndyYXBwZXIiLCJyZWYiLCJvbkNsaWNrIiwiaGVsbG8iLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.tsx\n"));

/***/ })

});