module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/shopify/[...slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/shopify/[...slug].js":
/*!****************************************!*\
  !*** ./pages/api/shopify/[...slug].js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\nconst axios = __webpack_require__(/*! axios */ \"axios\");\n\nconst url = __webpack_require__(/*! url */ \"url\");\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nfunction handler(req, res) {\n  const body = req.body;\n  const shopifyPath = req.url.replace('api/shopify/', '');\n  const shopifyUrl = `https://rens-disposable.myshopify.com`;\n  const accessToken = req.cookies.accessToken;\n  const requestUrl = new url.URL(path.join('/admin/api/2020-07', shopifyPath), shopifyUrl).href;\n  axios({\n    url: requestUrl,\n    method: req.method,\n    data: req.body,\n    headers: {\n      'X-Shopify-Access-Token': accessToken\n    }\n  }).then(({\n    data\n  }) => {\n    res.status(200).json(data);\n  }).catch(error => {\n    res.status(400).send(error);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2hvcGlmeS9bLi4uc2x1Z10uanM/YjdhNSJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJ1cmwiLCJwYXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImJvZHkiLCJzaG9waWZ5UGF0aCIsInJlcGxhY2UiLCJzaG9waWZ5VXJsIiwiYWNjZXNzVG9rZW4iLCJjb29raWVzIiwicmVxdWVzdFVybCIsIlVSTCIsImpvaW4iLCJocmVmIiwibWV0aG9kIiwiZGF0YSIsImhlYWRlcnMiLCJ0aGVuIiwic3RhdHVzIiwianNvbiIsImNhdGNoIiwiZXJyb3IiLCJzZW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUEsTUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLG9CQUFELENBQXJCOztBQUNBLE1BQU1DLEdBQUcsR0FBR0QsbUJBQU8sQ0FBQyxnQkFBRCxDQUFuQjs7QUFDQSxNQUFNRSxJQUFJLEdBQUdGLG1CQUFPLENBQUMsa0JBQUQsQ0FBcEI7O0FBRWUsU0FBU0csT0FBVCxDQUFpQkMsR0FBakIsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQ3hDLFFBQU1DLElBQUksR0FBR0YsR0FBRyxDQUFDRSxJQUFqQjtBQUNBLFFBQU1DLFdBQVcsR0FBR0gsR0FBRyxDQUFDSCxHQUFKLENBQVFPLE9BQVIsQ0FBZ0IsY0FBaEIsRUFBZ0MsRUFBaEMsQ0FBcEI7QUFDQSxRQUFNQyxVQUFVLEdBQUksdUNBQXBCO0FBRUEsUUFBTUMsV0FBVyxHQUFHTixHQUFHLENBQUNPLE9BQUosQ0FBWUQsV0FBaEM7QUFDQSxRQUFNRSxVQUFVLEdBQUksSUFBSVgsR0FBRyxDQUFDWSxHQUFSLENBQVlYLElBQUksQ0FBQ1ksSUFBTCxDQUFVLG9CQUFWLEVBQWdDUCxXQUFoQyxDQUFaLEVBQTBERSxVQUExRCxDQUFELENBQXdFTSxJQUEzRjtBQUVBaEIsT0FBSyxDQUFDO0FBQ0pFLE9BQUcsRUFBRVcsVUFERDtBQUVKSSxVQUFNLEVBQUVaLEdBQUcsQ0FBQ1ksTUFGUjtBQUdKQyxRQUFJLEVBQUViLEdBQUcsQ0FBQ0UsSUFITjtBQUlKWSxXQUFPLEVBQUU7QUFDUCxnQ0FBMEJSO0FBRG5CO0FBSkwsR0FBRCxDQUFMLENBT0dTLElBUEgsQ0FPUSxDQUFDO0FBQUVGO0FBQUYsR0FBRCxLQUFjO0FBQ3BCWixPQUFHLENBQUNlLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkosSUFBckI7QUFDRCxHQVRELEVBU0dLLEtBVEgsQ0FTVUMsS0FBRCxJQUFXO0FBQ2xCbEIsT0FBRyxDQUFDZSxNQUFKLENBQVcsR0FBWCxFQUFnQkksSUFBaEIsQ0FBcUJELEtBQXJCO0FBQ0QsR0FYRDtBQVlEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3Nob3BpZnkvWy4uLnNsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuY29uc3QgdXJsID0gcmVxdWlyZSgndXJsJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGJvZHkgPSByZXEuYm9keTtcbiAgY29uc3Qgc2hvcGlmeVBhdGggPSByZXEudXJsLnJlcGxhY2UoJ2FwaS9zaG9waWZ5LycsICcnKTtcbiAgY29uc3Qgc2hvcGlmeVVybCA9IGBodHRwczovL3JlbnMtZGlzcG9zYWJsZS5teXNob3BpZnkuY29tYDtcblxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IHJlcS5jb29raWVzLmFjY2Vzc1Rva2VuO1xuICBjb25zdCByZXF1ZXN0VXJsID0gKG5ldyB1cmwuVVJMKHBhdGguam9pbignL2FkbWluL2FwaS8yMDIwLTA3Jywgc2hvcGlmeVBhdGgpLCBzaG9waWZ5VXJsKSkuaHJlZjtcblxuICBheGlvcyh7XG4gICAgdXJsOiByZXF1ZXN0VXJsLFxuICAgIG1ldGhvZDogcmVxLm1ldGhvZCxcbiAgICBkYXRhOiByZXEuYm9keSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnWC1TaG9waWZ5LUFjY2Vzcy1Ub2tlbic6IGFjY2Vzc1Rva2VuXG4gICAgfVxuICB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpXG4gIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKVxuICB9KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/shopify/[...slug].js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIj82MWU4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InVybC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///url\n");

/***/ })

/******/ });