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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Layout_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Layout.module.sass */ \"./styles/Layout.module.sass\");\n/* harmony import */ var _styles_Layout_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_sass__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction Layout() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    }), offsetPosition = ref[0], setOffsetPosition = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isMoving = ref1[0], setIsMoving = ref1[1];\n    var helloRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // const onPointerUp = useCallback(\n    //   (event: React.PointerEvent<HTMLDivElement>) => {\n    //     startPosition.current = {\n    //       x: event.clientX,\n    //       y: event.clientY,\n    //     };\n    //     setIsMoving(false);\n    //   },\n    //   [startPosition]\n    // );\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    }), startingPosition = ref2[0], setStartingPosition = ref2[1];\n    var calculateStartingPosition = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var ref, ref1;\n        var ref2, ref3;\n        setStartingPosition({\n            x: (ref2 = (ref = helloRef.current) === null || ref === void 0 ? void 0 : ref.offsetLeft) !== null && ref2 !== void 0 ? ref2 : 0 + 250,\n            y: ((ref3 = (ref1 = helloRef.current) === null || ref1 === void 0 ? void 0 : ref1.offsetTop) !== null && ref3 !== void 0 ? ref3 : 0) + 50\n        });\n    }, [\n        helloRef\n    ]);\n    var onPointerMove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(event) {\n        if (isMoving) {\n            var newPosition = {\n                x: event.clientX - startingPosition.x,\n                y: event.clientY - startingPosition.y\n            };\n            setOffsetPosition(newPosition);\n        }\n    }, [\n        isMoving,\n        setOffsetPosition,\n        startingPosition\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onPointerMove: onPointerMove,\n        className: (_styles_Layout_module_sass__WEBPACK_IMPORTED_MODULE_2___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    offsetPosition.x,\n                    \" \",\n                    offsetPosition.y,\n                    startingPosition.x,\n                    startingPosition.y\n                ]\n            }, void 0, true, {\n                fileName: \"/home/g/stranka/mannheim/components/layout.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: helloRef,\n                onClick: function() {\n                    calculateStartingPosition();\n                    setIsMoving(!isMoving);\n                },\n                className: (_styles_Layout_module_sass__WEBPACK_IMPORTED_MODULE_2___default().hello),\n                style: {\n                    \"--OffsetPositionX\": \"\".concat(offsetPosition.x),\n                    \"--OffsetPositionY\": \"\".concat(offsetPosition.y)\n                },\n                children: \"hello\"\n            }, void 0, false, {\n                fileName: \"/home/g/stranka/mannheim/components/layout.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/g/stranka/mannheim/components/layout.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Layout, \"z4P5Hilb/OXqUDw1NV+WJihHXHA=\");\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQU07b0JBQ2JiLHlCQUF5QixFQUFFLENBQUM7b0JBQzVCSixXQUFXLENBQUMsQ0FBQ0QsUUFBUSxDQUFDLENBQUM7aUJBQ3hCO2dCQUNEZSxTQUFTLEVBQUVyQix5RUFBWTtnQkFDdkIwQixLQUFLLEVBQ0g7b0JBQ0UsbUJBQW1CLEVBQUUsRUFBQyxDQUFtQixPQUFqQnRCLGNBQWMsQ0FBQ0YsQ0FBQyxDQUFFO29CQUMxQyxtQkFBbUIsRUFBRSxFQUFDLENBQW1CLE9BQWpCRSxjQUFjLENBQUNELENBQUMsQ0FBRTtpQkFDM0M7MEJBRUosT0FFRDs7Ozs7b0JBQU07Ozs7OztZQUNGLENBQ047Q0FDSDtHQTdEZUYsTUFBTTtBQUFOQSxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0LnRzeD9hZjI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWZPYmplY3QsIHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdGFydCB9IGZyb20gXCJyZXBsXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvTGF5b3V0Lm1vZHVsZS5zYXNzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBMYXlvdXQoKSB7XG4gIGNvbnN0IFtvZmZzZXRQb3NpdGlvbiwgc2V0T2Zmc2V0UG9zaXRpb25dID0gdXNlU3RhdGUoeyB4OiAwLCB5OiAwIH0pO1xuICBjb25zdCBbaXNNb3ZpbmcsIHNldElzTW92aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGVsbG9SZWY6IFJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4gPSB1c2VSZWYobnVsbCk7XG5cbiAgLy8gY29uc3Qgb25Qb2ludGVyVXAgPSB1c2VDYWxsYmFjayhcbiAgLy8gICAoZXZlbnQ6IFJlYWN0LlBvaW50ZXJFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgLy8gICAgIHN0YXJ0UG9zaXRpb24uY3VycmVudCA9IHtcbiAgLy8gICAgICAgeDogZXZlbnQuY2xpZW50WCxcbiAgLy8gICAgICAgeTogZXZlbnQuY2xpZW50WSxcbiAgLy8gICAgIH07XG4gIC8vICAgICBzZXRJc01vdmluZyhmYWxzZSk7XG4gIC8vICAgfSxcbiAgLy8gICBbc3RhcnRQb3NpdGlvbl1cbiAgLy8gKTtcblxuICBjb25zdCBbc3RhcnRpbmdQb3NpdGlvbiwgc2V0U3RhcnRpbmdQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7IHg6IDAsIHk6IDAgfSk7XG4gIGNvbnN0IGNhbGN1bGF0ZVN0YXJ0aW5nUG9zaXRpb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U3RhcnRpbmdQb3NpdGlvbih7XG4gICAgICB4OiBoZWxsb1JlZi5jdXJyZW50Py5vZmZzZXRMZWZ0ID8/IDAgKyAyNTAsXG4gICAgICB5OiAoaGVsbG9SZWYuY3VycmVudD8ub2Zmc2V0VG9wID8/IDApICsgNTAsXG4gICAgfSk7XG4gIH0sIFtoZWxsb1JlZl0pO1xuICBjb25zdCBvblBvaW50ZXJNb3ZlID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50OiBSZWFjdC5Qb2ludGVyRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgICBpZiAoaXNNb3ZpbmcpIHtcbiAgICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSB7XG4gICAgICAgICAgeDogZXZlbnQuY2xpZW50WCAtIHN0YXJ0aW5nUG9zaXRpb24ueCxcbiAgICAgICAgICB5OiBldmVudC5jbGllbnRZIC0gc3RhcnRpbmdQb3NpdGlvbi55LFxuICAgICAgICB9O1xuICAgICAgICBzZXRPZmZzZXRQb3NpdGlvbihuZXdQb3NpdGlvbik7XG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNNb3ZpbmcsIHNldE9mZnNldFBvc2l0aW9uLCBzdGFydGluZ1Bvc2l0aW9uXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBvblBvaW50ZXJNb3ZlPXtvblBvaW50ZXJNb3ZlfSBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtvZmZzZXRQb3NpdGlvbi54fSB7b2Zmc2V0UG9zaXRpb24ueX1cbiAgICAgICAge3N0YXJ0aW5nUG9zaXRpb24ueH1cbiAgICAgICAge3N0YXJ0aW5nUG9zaXRpb24ueX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICByZWY9e2hlbGxvUmVmfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgY2FsY3VsYXRlU3RhcnRpbmdQb3NpdGlvbigpO1xuICAgICAgICAgIHNldElzTW92aW5nKCFpc01vdmluZyk7XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlbGxvfVxuICAgICAgICBzdHlsZT17XG4gICAgICAgICAge1xuICAgICAgICAgICAgXCItLU9mZnNldFBvc2l0aW9uWFwiOiBgJHtvZmZzZXRQb3NpdGlvbi54fWAsXG4gICAgICAgICAgICBcIi0tT2Zmc2V0UG9zaXRpb25ZXCI6IGAke29mZnNldFBvc2l0aW9uLnl9YCxcbiAgICAgICAgICB9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICBoZWxsb1xuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVJlZiIsInVzZVN0YXRlIiwic3R5bGVzIiwiTGF5b3V0IiwieCIsInkiLCJvZmZzZXRQb3NpdGlvbiIsInNldE9mZnNldFBvc2l0aW9uIiwiaXNNb3ZpbmciLCJzZXRJc01vdmluZyIsImhlbGxvUmVmIiwic3RhcnRpbmdQb3NpdGlvbiIsInNldFN0YXJ0aW5nUG9zaXRpb24iLCJjYWxjdWxhdGVTdGFydGluZ1Bvc2l0aW9uIiwiY3VycmVudCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJvblBvaW50ZXJNb3ZlIiwiZXZlbnQiLCJuZXdQb3NpdGlvbiIsImNsaWVudFgiLCJjbGllbnRZIiwiZGl2IiwiY2xhc3NOYW1lIiwid3JhcHBlciIsInJlZiIsIm9uQ2xpY2siLCJoZWxsbyIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout.tsx\n"));

/***/ })

});