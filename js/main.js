/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_mobileMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mobileMenu */ \"./src/scripts/modules/mobileMenu.js\");\n/*--------------------------------- \r\nMain JavaScript \r\n-----------------------------*/\r\n\r\n// import swiper from \"./modules/swiper\";\r\n// import slick from \"./modules/slick\";\r\n// import tabs from \"./modules/tabs\";\r\n\r\n\r\n// swiper();\r\n// slick();\r\n// tabs();\r\n(0,_modules_mobileMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n\n\n//# sourceURL=webpack://my-blank/./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/modules/mobileMenu.js":
/*!*******************************************!*\
  !*** ./src/scripts/modules/mobileMenu.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*--------------------------------- \r\nMenu Mobile \r\n-----------------------------*/\r\n\r\nconst mobileMenu = () => {\r\n\r\n  const menuButton = document.querySelector('.header__menu-mobile');\r\n  const body = document.querySelector('body');\r\n\r\n  menuButton.addEventListener('click', (e) => {\r\n\r\n    toggleMenu();\r\n\r\n  });\r\n\r\n  function toggleMenu() {\r\n\r\n    menuButton.classList.toggle('mobile-menu_active');\r\n\r\n    if (menuButton.classList.contains('mobile-menu_active')) {\r\n\r\n      body.style.overflow = 'hidden';\r\n\r\n    } else {\r\n\r\n      body.style.overflow = 'visible';\r\n      \r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mobileMenu);\r\n\r\n// const mobileMenu = () => {\r\n//   const menuButton = document.querySelector('.header__menu-mobile');\r\n//   const body = document.querySelector('body');\r\n//   // const menuClose = menuButton.querySelector('.mobile-menu__close');\r\n\r\n//   menuButton.addEventListener('click', (e) => {\r\n//     toggleMenu();\r\n//   });\r\n  \r\n//   // menuClose.addEventListener('click', () => {\r\n//   //   menuButton.classList.remove('mobile-menu_active');\r\n//   //   console.log('click');\r\n//   // });\r\n\r\n//   function toggleMenu() {\r\n//     menuButton.classList.toggle('mobile-menu_active');\r\n\r\n//     if (menuButton.classList.contains('mobile-menu_active')) {\r\n//       body.style.overflow = 'hidden';\r\n//     } else {\r\n//       body.style.overflow = 'visible';\r\n//     }\r\n//   }\r\n// }\r\n\r\n// mobileMenu();\n\n//# sourceURL=webpack://my-blank/./src/scripts/modules/mobileMenu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/main.js");
/******/ 	
/******/ })()
;