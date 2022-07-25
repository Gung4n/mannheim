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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Layout_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Layout.module.sass */ \"./styles/Layout.module.sass\");\n/* harmony import */ var _styles_Layout_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_sass__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Layout() {\n    const startPosition = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({\n        x: 0,\n        y: 0\n    });\n    const { 0: offsetPosition , 1: setOffsetPosition  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const onPointerDown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{\n        startPosition.current = {\n            x: event.clientX,\n            y: event.clientY\n        };\n    }, [\n        startPosition\n    ]);\n    const onPointerMove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{\n        const newPosition = {\n            x: event.clientX,\n            y: event.clientY\n        };\n        setOffsetPosition(newPosition);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Layout_module_sass__WEBPACK_IMPORTED_MODULE_2___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    offsetPosition.x,\n                    \" \",\n                    offsetPosition.y\n                ]\n            }, void 0, true, {\n                fileName: \"/home/g/stranka/mannheim/components/layout.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onPointerDown: onPointerDown,\n                onPointerMove: onPointerMove,\n                className: (_styles_Layout_module_sass__WEBPACK_IMPORTED_MODULE_2___default().hello),\n                style: {\n                    \"--OffsetPositionX\": `${offsetPosition.x}`,\n                    \"--OffsetPositionY\": `${offsetPosition.y}`\n                },\n                children: \"hello\"\n            }, void 0, false, {\n                fileName: \"/home/g/stranka/mannheim/components/layout.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/g/stranka/mannheim/components/layout.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n} // const onPointerDown1 = useCallback(\n //   (event: React.PointerEvent<HTMLDivElement>) => {\n //     startPosition.current = {\n //       x: event.clientX - offsetPosition1 * wrapperWidth,\n //     }\n //     setIsMoving1(true)\n //   },\n //   [offsetPosition1, wrapperWidth]\n // )\n // style={\n //   {\n //     '--TimeSlider-offset': `${offsetPosition1}`,\n //   } as React.CSSProperties\n // }>\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTZEO0FBQ1g7QUFFM0MsU0FBU0ssTUFBTSxHQUFHO0lBQ3ZCLE1BQU1DLGFBQWEsR0FBR0osNkNBQU0sQ0FBQztRQUFFSyxDQUFDLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsQ0FBQztLQUFFLENBQUM7SUFDNUMsTUFBTSxLQUFDQyxjQUFjLE1BQUVDLGlCQUFpQixNQUFJUCwrQ0FBUSxDQUFDO1FBQUVJLENBQUMsRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO0tBQUUsQ0FBQztJQUNwRSxNQUFNRyxhQUFhLEdBQUdWLGtEQUFXLENBQy9CLENBQUNXLEtBQXlDLEdBQUs7UUFDN0NOLGFBQWEsQ0FBQ08sT0FBTyxHQUFHO1lBQ3RCTixDQUFDLEVBQUVLLEtBQUssQ0FBQ0UsT0FBTztZQUNoQk4sQ0FBQyxFQUFFSSxLQUFLLENBQUNHLE9BQU87U0FDakIsQ0FBQztLQUNILEVBQ0Q7UUFBQ1QsYUFBYTtLQUFDLENBQ2hCO0lBQ0QsTUFBTVUsYUFBYSxHQUFHZixrREFBVyxDQUMvQixDQUFDVyxLQUF5QyxHQUFLO1FBQzdDLE1BQU1LLFdBQVcsR0FBRztZQUFFVixDQUFDLEVBQUVLLEtBQUssQ0FBQ0UsT0FBTztZQUFFTixDQUFDLEVBQUVJLEtBQUssQ0FBQ0csT0FBTztTQUFFO1FBQzFETCxpQkFBaUIsQ0FBQ08sV0FBVyxDQUFDLENBQUM7S0FDaEMsRUFDRCxFQUFFLENBQ0g7SUFFRCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVmLDJFQUFjOzswQkFDNUIsOERBQUNjLEtBQUc7O29CQUNEVCxjQUFjLENBQUNGLENBQUM7b0JBQUMsR0FBQztvQkFBQ0UsY0FBYyxDQUFDRCxDQUFDOzs7Ozs7b0JBQ2hDOzBCQUNOLDhEQUFDVSxLQUFHO2dCQUNGUCxhQUFhLEVBQUVBLGFBQWE7Z0JBQzVCSyxhQUFhLEVBQUVBLGFBQWE7Z0JBQzVCRyxTQUFTLEVBQUVmLHlFQUFZO2dCQUN2QmtCLEtBQUssRUFDSDtvQkFDRSxtQkFBbUIsRUFBRSxDQUFDLEVBQUViLGNBQWMsQ0FBQ0YsQ0FBQyxDQUFDLENBQUM7b0JBQzFDLG1CQUFtQixFQUFFLENBQUMsRUFBRUUsY0FBYyxDQUFDRCxDQUFDLENBQUMsQ0FBQztpQkFDM0M7MEJBRUosT0FFRDs7Ozs7b0JBQU07Ozs7OztZQUNGLENBQ047Q0FDSCxDQUVELHNDQUFzQztDQUN0QyxxREFBcUQ7Q0FDckQsZ0NBQWdDO0NBQ2hDLDJEQUEyRDtDQUMzRCxRQUFRO0NBQ1IseUJBQXlCO0NBQ3pCLE9BQU87Q0FDUCxvQ0FBb0M7Q0FDcEMsSUFBSTtDQUVKLFVBQVU7Q0FDVixNQUFNO0NBQ04sbURBQW1EO0NBQ25ELDZCQUE2QjtDQUM3QixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vY29tcG9uZW50cy9sYXlvdXQudHN4P2FmMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvTGF5b3V0Lm1vZHVsZS5zYXNzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBMYXlvdXQoKSB7XG4gIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSB1c2VSZWYoeyB4OiAwLCB5OiAwIH0pO1xuICBjb25zdCBbb2Zmc2V0UG9zaXRpb24sIHNldE9mZnNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHsgeDogMCwgeTogMCB9KTtcbiAgY29uc3Qgb25Qb2ludGVyRG93biA9IHVzZUNhbGxiYWNrKFxuICAgIChldmVudDogUmVhY3QuUG9pbnRlckV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgICAgc3RhcnRQb3NpdGlvbi5jdXJyZW50ID0ge1xuICAgICAgICB4OiBldmVudC5jbGllbnRYLFxuICAgICAgICB5OiBldmVudC5jbGllbnRZLFxuICAgICAgfTtcbiAgICB9LFxuICAgIFtzdGFydFBvc2l0aW9uXVxuICApO1xuICBjb25zdCBvblBvaW50ZXJNb3ZlID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50OiBSZWFjdC5Qb2ludGVyRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHsgeDogZXZlbnQuY2xpZW50WCwgeTogZXZlbnQuY2xpZW50WSB9O1xuICAgICAgc2V0T2Zmc2V0UG9zaXRpb24obmV3UG9zaXRpb24pO1xuICAgIH0sXG4gICAgW11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICA8ZGl2PlxuICAgICAgICB7b2Zmc2V0UG9zaXRpb24ueH0ge29mZnNldFBvc2l0aW9uLnl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgb25Qb2ludGVyRG93bj17b25Qb2ludGVyRG93bn1cbiAgICAgICAgb25Qb2ludGVyTW92ZT17b25Qb2ludGVyTW92ZX1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGVsbG99XG4gICAgICAgIHN0eWxlPXtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIi0tT2Zmc2V0UG9zaXRpb25YXCI6IGAke29mZnNldFBvc2l0aW9uLnh9YCxcbiAgICAgICAgICAgIFwiLS1PZmZzZXRQb3NpdGlvbllcIjogYCR7b2Zmc2V0UG9zaXRpb24ueX1gLFxuICAgICAgICAgIH0gYXMgUmVhY3QuQ1NTUHJvcGVydGllc1xuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIGhlbGxvXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8gY29uc3Qgb25Qb2ludGVyRG93bjEgPSB1c2VDYWxsYmFjayhcbi8vICAgKGV2ZW50OiBSZWFjdC5Qb2ludGVyRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4vLyAgICAgc3RhcnRQb3NpdGlvbi5jdXJyZW50ID0ge1xuLy8gICAgICAgeDogZXZlbnQuY2xpZW50WCAtIG9mZnNldFBvc2l0aW9uMSAqIHdyYXBwZXJXaWR0aCxcbi8vICAgICB9XG4vLyAgICAgc2V0SXNNb3ZpbmcxKHRydWUpXG4vLyAgIH0sXG4vLyAgIFtvZmZzZXRQb3NpdGlvbjEsIHdyYXBwZXJXaWR0aF1cbi8vIClcblxuLy8gc3R5bGU9e1xuLy8gICB7XG4vLyAgICAgJy0tVGltZVNsaWRlci1vZmZzZXQnOiBgJHtvZmZzZXRQb3NpdGlvbjF9YCxcbi8vICAgfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4vLyB9PlxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkxheW91dCIsInN0YXJ0UG9zaXRpb24iLCJ4IiwieSIsIm9mZnNldFBvc2l0aW9uIiwic2V0T2Zmc2V0UG9zaXRpb24iLCJvblBvaW50ZXJEb3duIiwiZXZlbnQiLCJjdXJyZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJvblBvaW50ZXJNb3ZlIiwibmV3UG9zaXRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJ3cmFwcGVyIiwiaGVsbG8iLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.tsx\n");

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