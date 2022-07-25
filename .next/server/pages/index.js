/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Layout.module.sass":
/*!***********************************!*\
  !*** ./styles/Layout.module.sass ***!
  \***********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"wrapper\": \"Layout_wrapper__0Fifm\",\n\t\"hello\": \"Layout_hello__TxTof\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvTGF5b3V0Lm1vZHVsZS5zYXNzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zdHlsZXMvTGF5b3V0Lm1vZHVsZS5zYXNzPzRlYTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcIkxheW91dF93cmFwcGVyX18wRmlmbVwiLFxuXHRcImhlbGxvXCI6IFwiTGF5b3V0X2hlbGxvX19UeFRvZlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Layout.module.sass\n");

/***/ }),

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Layout_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Layout.module.sass */ \"./styles/Layout.module.sass\");\n/* harmony import */ var _styles_Layout_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_sass__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Layout() {\n    const { 0: offsetPosition , 1: setOffsetPosition  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const { 0: isMoving , 1: setIsMoving  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const helloRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // const onPointerUp = useCallback(\n    //   (event: React.PointerEvent<HTMLDivElement>) => {\n    //     startPosition.current = {\n    //       x: event.clientX,\n    //       y: event.clientY,\n    //     };\n    //     setIsMoving(false);\n    //   },\n    //   [startPosition]\n    // );\n    const { 0: startingPosition , 1: setStartingPosition  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const calculateStartingPosition = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setStartingPosition({\n            x: (helloRef.current?.offsetLeft ?? 0) + (helloRef.current?.clientWidth ?? 0) / 2,\n            y: (helloRef.current?.offsetTop ?? 0) + (helloRef.current?.clientHeight ?? 0) / 2\n        });\n    }, [\n        helloRef\n    ]);\n    const onPointerMove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{\n        if (isMoving) {\n            const newPosition = {\n                x: event.clientX - startingPosition.x,\n                y: event.clientY - startingPosition.y\n            };\n            setOffsetPosition(newPosition);\n        }\n    }, [\n        isMoving,\n        setOffsetPosition,\n        startingPosition\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onPointerMove: onPointerMove,\n        className: (_styles_Layout_module_sass__WEBPACK_IMPORTED_MODULE_2___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    offsetPosition.x,\n                    \" \",\n                    offsetPosition.y,\n                    startingPosition.x,\n                    startingPosition.y\n                ]\n            }, void 0, true, {\n                fileName: \"/home/g/stranka/mannheim/components/layout.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: helloRef,\n                onClick: ()=>{\n                    calculateStartingPosition();\n                    setIsMoving(!isMoving);\n                },\n                className: (_styles_Layout_module_sass__WEBPACK_IMPORTED_MODULE_2___default().hello),\n                style: {\n                    \"--OffsetPositionX\": `${offsetPosition.x}`,\n                    \"--OffsetPositionY\": `${offsetPosition.y}`\n                },\n                children: \"hello\"\n            }, void 0, false, {\n                fileName: \"/home/g/stranka/mannheim/components/layout.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/g/stranka/mannheim/components/layout.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vbXktYXBwLy4vY29tcG9uZW50cy9sYXlvdXQudHN4P2FmMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlZk9iamVjdCwgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSBcInJlcGxcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9MYXlvdXQubW9kdWxlLnNhc3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIExheW91dCgpIHtcbiAgY29uc3QgW29mZnNldFBvc2l0aW9uLCBzZXRPZmZzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7IHg6IDAsIHk6IDAgfSk7XG4gIGNvbnN0IFtpc01vdmluZywgc2V0SXNNb3ZpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoZWxsb1JlZjogUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PiA9IHVzZVJlZihudWxsKTtcblxuICAvLyBjb25zdCBvblBvaW50ZXJVcCA9IHVzZUNhbGxiYWNrKFxuICAvLyAgIChldmVudDogUmVhY3QuUG9pbnRlckV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAvLyAgICAgc3RhcnRQb3NpdGlvbi5jdXJyZW50ID0ge1xuICAvLyAgICAgICB4OiBldmVudC5jbGllbnRYLFxuICAvLyAgICAgICB5OiBldmVudC5jbGllbnRZLFxuICAvLyAgICAgfTtcbiAgLy8gICAgIHNldElzTW92aW5nKGZhbHNlKTtcbiAgLy8gICB9LFxuICAvLyAgIFtzdGFydFBvc2l0aW9uXVxuICAvLyApO1xuXG4gIGNvbnN0IFtzdGFydGluZ1Bvc2l0aW9uLCBzZXRTdGFydGluZ1Bvc2l0aW9uXSA9IHVzZVN0YXRlKHsgeDogMCwgeTogMCB9KTtcbiAgY29uc3QgY2FsY3VsYXRlU3RhcnRpbmdQb3NpdGlvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTdGFydGluZ1Bvc2l0aW9uKHtcbiAgICAgIHg6XG4gICAgICAgIChoZWxsb1JlZi5jdXJyZW50Py5vZmZzZXRMZWZ0ID8/IDApICtcbiAgICAgICAgKGhlbGxvUmVmLmN1cnJlbnQ/LmNsaWVudFdpZHRoID8/IDApIC8gMixcbiAgICAgIHk6XG4gICAgICAgIChoZWxsb1JlZi5jdXJyZW50Py5vZmZzZXRUb3AgPz8gMCkgK1xuICAgICAgICAoaGVsbG9SZWYuY3VycmVudD8uY2xpZW50SGVpZ2h0ID8/IDApIC8gMixcbiAgICB9KTtcbiAgfSwgW2hlbGxvUmVmXSk7XG4gIGNvbnN0IG9uUG9pbnRlck1vdmUgPSB1c2VDYWxsYmFjayhcbiAgICAoZXZlbnQ6IFJlYWN0LlBvaW50ZXJFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICAgIGlmIChpc01vdmluZykge1xuICAgICAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHtcbiAgICAgICAgICB4OiBldmVudC5jbGllbnRYIC0gc3RhcnRpbmdQb3NpdGlvbi54LFxuICAgICAgICAgIHk6IGV2ZW50LmNsaWVudFkgLSBzdGFydGluZ1Bvc2l0aW9uLnksXG4gICAgICAgIH07XG4gICAgICAgIHNldE9mZnNldFBvc2l0aW9uKG5ld1Bvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc01vdmluZywgc2V0T2Zmc2V0UG9zaXRpb24sIHN0YXJ0aW5nUG9zaXRpb25dXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IG9uUG9pbnRlck1vdmU9e29uUG9pbnRlck1vdmV9IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPGRpdj5cbiAgICAgICAge29mZnNldFBvc2l0aW9uLnh9IHtvZmZzZXRQb3NpdGlvbi55fVxuICAgICAgICB7c3RhcnRpbmdQb3NpdGlvbi54fVxuICAgICAgICB7c3RhcnRpbmdQb3NpdGlvbi55fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17aGVsbG9SZWZ9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBjYWxjdWxhdGVTdGFydGluZ1Bvc2l0aW9uKCk7XG4gICAgICAgICAgc2V0SXNNb3ZpbmcoIWlzTW92aW5nKTtcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGVsbG99XG4gICAgICAgIHN0eWxlPXtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIi0tT2Zmc2V0UG9zaXRpb25YXCI6IGAke29mZnNldFBvc2l0aW9uLnh9YCxcbiAgICAgICAgICAgIFwiLS1PZmZzZXRQb3NpdGlvbllcIjogYCR7b2Zmc2V0UG9zaXRpb24ueX1gLFxuICAgICAgICAgIH0gYXMgUmVhY3QuQ1NTUHJvcGVydGllc1xuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIGhlbGxvXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlUmVmIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJMYXlvdXQiLCJvZmZzZXRQb3NpdGlvbiIsInNldE9mZnNldFBvc2l0aW9uIiwieCIsInkiLCJpc01vdmluZyIsInNldElzTW92aW5nIiwiaGVsbG9SZWYiLCJzdGFydGluZ1Bvc2l0aW9uIiwic2V0U3RhcnRpbmdQb3NpdGlvbiIsImNhbGN1bGF0ZVN0YXJ0aW5nUG9zaXRpb24iLCJjdXJyZW50Iiwib2Zmc2V0TGVmdCIsImNsaWVudFdpZHRoIiwib2Zmc2V0VG9wIiwiY2xpZW50SGVpZ2h0Iiwib25Qb2ludGVyTW92ZSIsImV2ZW50IiwibmV3UG9zaXRpb24iLCJjbGllbnRYIiwiY2xpZW50WSIsImRpdiIsImNsYXNzTmFtZSIsIndyYXBwZXIiLCJyZWYiLCJvbkNsaWNrIiwiaGVsbG8iLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n\n\nfunction Home() {\n    console.log(\"^.^\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__.Layout, {}, void 0, false, {\n        fileName: \"/home/g/stranka/mannheim/pages/index.tsx\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQThDO0FBRTlDLFNBQVNDLElBQUksR0FBRztJQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQixxQkFBTyw4REFBQ0gsc0RBQU07Ozs7WUFBRyxDQUFDO0NBQ25CO0FBRUQsaUVBQWVDLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zb2xlLmxvZyhcIl4uXlwiKTtcbiAgcmV0dXJuIDxMYXlvdXQgLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiSG9tZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();