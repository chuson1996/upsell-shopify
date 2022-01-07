module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/upsell-in-cart.liquid.js":
/*!*********************************************!*\
  !*** ./components/upsell-in-cart.liquid.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return generateUpsellSnippet; });\n/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! handlebars */ \"handlebars\");\n/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(handlebars__WEBPACK_IMPORTED_MODULE_0__);\n\nconst upsellTemplate = `\n<div id=\"upsell\">\n  <div class=\"upsell-offer\">\n    <p class=\"upsell-heading text-center\">{{ upsellHeading }}</p>\n    <p class=\"upsell-subheading text-center\">{{ upsellSubheading }}</p>\n  </div>\n  <div class=\"inCartUpsaleProduct--container\">\n    {{#upsellProducts}}\n      <div class=\"inCartUpsaleProduct\">\n        <img class=\"inCartUpsaleProduct--img\" src=\"{{images.0.originalSrc}}\" alt=\"{{images.0.altText}}\">\n        <select class=\"inCartUpsaleProduct--variantSelect\" data-product-id=\"{{id}}\">\n          {{#variants}}\n            <option value=\"{{id}}\">{{ title }}</option>\n          {{/variants}}\n        </select>\n        <button type=\"button\" data-product-id=\"{{id}}\" class=\"inCartUpsaleProduct--submitBtn btn--secondary btn--full\">Add</button>\n      </div>\n    {{/upsellProducts}}\n  </div>\n</div>\n<script>\n$('.inCartUpsaleProduct--submitBtn').on('click', function() {\n  console.log({ button: this })\n  const productId = $(this).data('productId');\n  const variantId = $('select[data-product-id=\"'+productId+'\"]').val().match(/\\\\d+/g)[0];\n\n  $.post('/cart/add.js', {\n    items: [{\n      quantity: 1,\n      id: variantId,\n    }]\n  }).complete(() => {\n    console.log('ajaxCart load')\n    window.ajaxCart.load();\n  })\n})\n</script>\n<style>\n#upsell {\n  height: 150px;\n}\n.upsell-offer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: #F2CB05;\n  padding: 10px 0;\n}\n.upsell-offer p {\n  margin-bottom: 0;\n  font-size: 15px;\n}\n.upsell-offer p.upsell-heading{\n  font-size: 1.2em;\n}\n.inCartUpsaleProduct--container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 15px;\n}\n\n.inCartUpsaleProduct .inCartUpsaleProduct--img {\n  display: block;\n  max-width: 100%;\n}\n.inCartUpsaleProduct .inCartUpsaleProduct--title {\n  font-size: 0.9rem;\n  margin-bottom: 0;\n}\n.inCartUpsaleProduct .inCartUpsaleProduct--price {\n  font-size: 0.9rem;\n  margin-bottom: 0;\n}\n.inCartUpsaleProduct .inCartUpsaleProduct--variantSelect {\n  font-size: 0.9rem;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  margin: 0.5rem 0;\n  width: 100%;\n}\n.inCartUpsaleProduct .inCartUpsaleProduct--submitBtn {\n}\n.drawer--has-fixed-footer .drawer__inner {\n  overflow-y: auto;\n}\n</style>\n`;\nfunction generateUpsellSnippet(upsellProducts = []) {\n  const snippet = Object(handlebars__WEBPACK_IMPORTED_MODULE_0__[\"compile\"])(upsellTemplate)({\n    upsellHeading: 'Add 1 more item',\n    upsellSubheading: '',\n    upsellProducts,\n    browseMoreUrl: '',\n    browseMoreUrlButtonText: 'Shop more'\n  });\n  return snippet;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Vwc2VsbC1pbi1jYXJ0LmxpcXVpZC5qcz9hNTJhIl0sIm5hbWVzIjpbInVwc2VsbFRlbXBsYXRlIiwiZ2VuZXJhdGVVcHNlbGxTbmlwcGV0IiwidXBzZWxsUHJvZHVjdHMiLCJzbmlwcGV0IiwiY29tcGlsZSIsInVwc2VsbEhlYWRpbmciLCJ1cHNlbGxTdWJoZWFkaW5nIiwiYnJvd3NlTW9yZVVybCIsImJyb3dzZU1vcmVVcmxCdXR0b25UZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsY0FBYyxHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUF4QjtBQXdGZSxTQUFTQyxxQkFBVCxDQUErQkMsY0FBYyxHQUFHLEVBQWhELEVBQW9EO0FBQ2pFLFFBQU1DLE9BQU8sR0FBR0MsMERBQU8sQ0FBQ0osY0FBRCxDQUFQLENBQXdCO0FBQ3RDSyxpQkFBYSxFQUFFLGlCQUR1QjtBQUV0Q0Msb0JBQWdCLEVBQUUsRUFGb0I7QUFHdENKLGtCQUhzQztBQUl0Q0ssaUJBQWEsRUFBRSxFQUp1QjtBQUt0Q0MsMkJBQXVCLEVBQUU7QUFMYSxHQUF4QixDQUFoQjtBQU9BLFNBQU9MLE9BQVA7QUFDRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvdXBzZWxsLWluLWNhcnQubGlxdWlkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcGlsZSB9IGZyb20gJ2hhbmRsZWJhcnMnO1xuXG5jb25zdCB1cHNlbGxUZW1wbGF0ZSA9IGBcbjxkaXYgaWQ9XCJ1cHNlbGxcIj5cbiAgPGRpdiBjbGFzcz1cInVwc2VsbC1vZmZlclwiPlxuICAgIDxwIGNsYXNzPVwidXBzZWxsLWhlYWRpbmcgdGV4dC1jZW50ZXJcIj57eyB1cHNlbGxIZWFkaW5nIH19PC9wPlxuICAgIDxwIGNsYXNzPVwidXBzZWxsLXN1YmhlYWRpbmcgdGV4dC1jZW50ZXJcIj57eyB1cHNlbGxTdWJoZWFkaW5nIH19PC9wPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImluQ2FydFVwc2FsZVByb2R1Y3QtLWNvbnRhaW5lclwiPlxuICAgIHt7I3Vwc2VsbFByb2R1Y3RzfX1cbiAgICAgIDxkaXYgY2xhc3M9XCJpbkNhcnRVcHNhbGVQcm9kdWN0XCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJpbkNhcnRVcHNhbGVQcm9kdWN0LS1pbWdcIiBzcmM9XCJ7e2ltYWdlcy4wLm9yaWdpbmFsU3JjfX1cIiBhbHQ9XCJ7e2ltYWdlcy4wLmFsdFRleHR9fVwiPlxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwiaW5DYXJ0VXBzYWxlUHJvZHVjdC0tdmFyaWFudFNlbGVjdFwiIGRhdGEtcHJvZHVjdC1pZD1cInt7aWR9fVwiPlxuICAgICAgICAgIHt7I3ZhcmlhbnRzfX1cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ7e2lkfX1cIj57eyB0aXRsZSB9fTwvb3B0aW9uPlxuICAgICAgICAgIHt7L3ZhcmlhbnRzfX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtcHJvZHVjdC1pZD1cInt7aWR9fVwiIGNsYXNzPVwiaW5DYXJ0VXBzYWxlUHJvZHVjdC0tc3VibWl0QnRuIGJ0bi0tc2Vjb25kYXJ5IGJ0bi0tZnVsbFwiPkFkZDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAge3svdXBzZWxsUHJvZHVjdHN9fVxuICA8L2Rpdj5cbjwvZGl2PlxuPHNjcmlwdD5cbiQoJy5pbkNhcnRVcHNhbGVQcm9kdWN0LS1zdWJtaXRCdG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coeyBidXR0b246IHRoaXMgfSlcbiAgY29uc3QgcHJvZHVjdElkID0gJCh0aGlzKS5kYXRhKCdwcm9kdWN0SWQnKTtcbiAgY29uc3QgdmFyaWFudElkID0gJCgnc2VsZWN0W2RhdGEtcHJvZHVjdC1pZD1cIicrcHJvZHVjdElkKydcIl0nKS52YWwoKS5tYXRjaCgvXFxcXGQrL2cpWzBdO1xuXG4gICQucG9zdCgnL2NhcnQvYWRkLmpzJywge1xuICAgIGl0ZW1zOiBbe1xuICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICBpZDogdmFyaWFudElkLFxuICAgIH1dXG4gIH0pLmNvbXBsZXRlKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnYWpheENhcnQgbG9hZCcpXG4gICAgd2luZG93LmFqYXhDYXJ0LmxvYWQoKTtcbiAgfSlcbn0pXG48L3NjcmlwdD5cbjxzdHlsZT5cbiN1cHNlbGwge1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuLnVwc2VsbC1vZmZlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJDQjA1O1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4udXBzZWxsLW9mZmVyIHAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4udXBzZWxsLW9mZmVyIHAudXBzZWxsLWhlYWRpbmd7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG4uaW5DYXJ0VXBzYWxlUHJvZHVjdC0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBjb2x1bW4tZ2FwOiAxNXB4O1xufVxuXG4uaW5DYXJ0VXBzYWxlUHJvZHVjdCAuaW5DYXJ0VXBzYWxlUHJvZHVjdC0taW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5pbkNhcnRVcHNhbGVQcm9kdWN0IC5pbkNhcnRVcHNhbGVQcm9kdWN0LS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmluQ2FydFVwc2FsZVByb2R1Y3QgLmluQ2FydFVwc2FsZVByb2R1Y3QtLXByaWNlIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uaW5DYXJ0VXBzYWxlUHJvZHVjdCAuaW5DYXJ0VXBzYWxlUHJvZHVjdC0tdmFyaWFudFNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5pbkNhcnRVcHNhbGVQcm9kdWN0IC5pbkNhcnRVcHNhbGVQcm9kdWN0LS1zdWJtaXRCdG4ge1xufVxuLmRyYXdlci0taGFzLWZpeGVkLWZvb3RlciAuZHJhd2VyX19pbm5lciB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG48L3N0eWxlPlxuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZVVwc2VsbFNuaXBwZXQodXBzZWxsUHJvZHVjdHMgPSBbXSkge1xuICBjb25zdCBzbmlwcGV0ID0gY29tcGlsZSh1cHNlbGxUZW1wbGF0ZSkoe1xuICAgIHVwc2VsbEhlYWRpbmc6ICdBZGQgMSBtb3JlIGl0ZW0nLFxuICAgIHVwc2VsbFN1YmhlYWRpbmc6ICcnLFxuICAgIHVwc2VsbFByb2R1Y3RzLFxuICAgIGJyb3dzZU1vcmVVcmw6ICcnLFxuICAgIGJyb3dzZU1vcmVVcmxCdXR0b25UZXh0OiAnU2hvcCBtb3JlJ1xuICB9KVxuICByZXR1cm4gc25pcHBldDtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/upsell-in-cart.liquid.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"@shopify/app-bridge-react\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_upsell_in_cart_liquid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/upsell-in-cart.liquid.js */ \"./components/upsell-in-cart.liquid.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      open: false,\n      selectedProducts: [],\n      themeId: ''\n    });\n\n    _defineProperty(this, \"handleSelection\", async resources => {\n      this.setState({\n        open: false,\n        selectedProducts: resources.selection\n      });\n    });\n\n    _defineProperty(this, \"publish\", () => {\n      const {\n        selectedProducts,\n        themeId\n      } = this.state;\n      const newUpsellTemplate = Object(_components_upsell_in_cart_liquid_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(selectedProducts);\n      console.log({\n        newUpsellTemplate\n      });\n      const strToAppendToCartTemplate = `{% endraw %}{% include 'upsell-in-cart' %}{% raw %}`;\n      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(`/api/shopify/themes/${themeId}/assets.json?asset[key]=snippets/ajax-cart-template.liquid`).then(({\n        data\n      }) => {\n        const originalTemplate = data.asset.value;\n\n        if (originalTemplate.includes(`{% include 'upsell-in-cart' %}`)) {\n          return;\n        }\n\n        const regEx = /\\<\\/div\\>[\\n ]+<\\/form\\>/g;\n        const newTemplate = originalTemplate.replace(regEx, strToAppendToCartTemplate + originalTemplate.match(regEx)[0]);\n        axios__WEBPACK_IMPORTED_MODULE_4___default.a.put(`/api/shopify/themes/${themeId}/assets.json`, {\n          asset: {\n            key: 'snippets/ajax-cart-template.liquid',\n            value: newTemplate\n          }\n        });\n      });\n      axios__WEBPACK_IMPORTED_MODULE_4___default.a.put(`/api/shopify/themes/${themeId}/assets.json`, {\n        \"asset\": {\n          \"key\": \"snippets/upsell-in-cart.liquid\",\n          \"value\": newUpsellTemplate\n        }\n      }).then(({\n        data\n      }) => {\n        console.log({\n          data\n        });\n      });\n    });\n  }\n\n  componentDidMount() {\n    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(`/api/shopify/themes.json`).then(({\n      data\n    }) => {\n      const themeId = data.themes.find(theme => theme.role === 'main').id;\n      this.setState({\n        themeId\n      });\n    });\n  }\n\n  render() {\n    const {\n      selectedProducts\n    } = this.state;\n    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Page\"], null, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__[\"ResourcePicker\"], {\n      resourceType: \"Product\",\n      showVariants: false,\n      open: this.state.open,\n      onSelection: resources => this.handleSelection(resources),\n      onCancel: () => this.setState({\n        open: false\n      })\n    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], null, !selectedProducts.length && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"EmptyState\"], {\n      heading: \"Choose products you want to upsell.\",\n      action: {\n        content: 'Select products',\n        onAction: () => {\n          this.setState({\n            open: true\n          });\n        }\n      },\n      image: img\n    }, __jsx(\"p\", null, \"Select at least 1 product.\")), !!selectedProducts.length && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].AnnotatedSection, {\n      title: \"Upsell Products\",\n      description: __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        onClick: () => this.setState({\n          open: true\n        })\n      }, \"Reselect Products\")\n    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n      sectioned: true\n    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"ResourceList\"], {\n      resourceName: {\n        singular: 'product',\n        plural: 'products'\n      },\n      items: selectedProducts,\n      renderItem: item => __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"ResourceItem\"], {\n        id: item.id,\n        media: __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Thumbnail\"], {\n          alt: item.title,\n          size: \"medium\",\n          source: item.images[0].originalSrc\n        }),\n        accessibilityLabel: `View details for ${item.title}`,\n        name: item.title\n      }, __jsx(\"h3\", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextStyle\"], {\n        variation: \"strong\"\n      }, item.title)))\n    }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      primary: true,\n      onClick: this.publish\n    }, \"Publish\"))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImltZyIsIkluZGV4IiwiUmVhY3QiLCJDb21wb25lbnQiLCJvcGVuIiwic2VsZWN0ZWRQcm9kdWN0cyIsInRoZW1lSWQiLCJyZXNvdXJjZXMiLCJzZXRTdGF0ZSIsInNlbGVjdGlvbiIsInN0YXRlIiwibmV3VXBzZWxsVGVtcGxhdGUiLCJnZW5lcmF0ZVVwc2VsbFNuaXBwZXQiLCJjb25zb2xlIiwibG9nIiwic3RyVG9BcHBlbmRUb0NhcnRUZW1wbGF0ZSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsImRhdGEiLCJvcmlnaW5hbFRlbXBsYXRlIiwiYXNzZXQiLCJ2YWx1ZSIsImluY2x1ZGVzIiwicmVnRXgiLCJuZXdUZW1wbGF0ZSIsInJlcGxhY2UiLCJtYXRjaCIsInB1dCIsImtleSIsImNvbXBvbmVudERpZE1vdW50IiwidGhlbWVzIiwiZmluZCIsInRoZW1lIiwicm9sZSIsImlkIiwicmVuZGVyIiwiaGFuZGxlU2VsZWN0aW9uIiwibGVuZ3RoIiwiY29udGVudCIsIm9uQWN0aW9uIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJpdGVtIiwidGl0bGUiLCJpbWFnZXMiLCJvcmlnaW5hbFNyYyIsInB1Ymxpc2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsR0FBRyxHQUFHLG1FQUFaOztBQUVBLE1BQU1DLEtBQU4sU0FBb0JDLDRDQUFLLENBQUNDLFNBQTFCLENBQW9DO0FBQUE7QUFBQTs7QUFBQSxtQ0FDMUI7QUFDTkMsVUFBSSxFQUFFLEtBREE7QUFFTkMsc0JBQWdCLEVBQUUsRUFGWjtBQUdOQyxhQUFPLEVBQUU7QUFISCxLQUQwQjs7QUFBQSw2Q0FlaEIsTUFBT0MsU0FBUCxJQUFxQjtBQUNyQyxXQUFLQyxRQUFMLENBQWM7QUFBRUosWUFBSSxFQUFFLEtBQVI7QUFBZUMsd0JBQWdCLEVBQUVFLFNBQVMsQ0FBQ0U7QUFBM0MsT0FBZDtBQUNELEtBakJpQzs7QUFBQSxxQ0FtQnhCLE1BQU07QUFDZCxZQUFNO0FBQUVKLHdCQUFGO0FBQW9CQztBQUFwQixVQUFnQyxLQUFLSSxLQUEzQztBQUNBLFlBQU1DLGlCQUFpQixHQUFJQyxvRkFBcUIsQ0FBQ1AsZ0JBQUQsQ0FBaEQ7QUFDQVEsYUFBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ0g7QUFBRCxPQUFaO0FBRUEsWUFBTUkseUJBQXlCLEdBQUkscURBQW5DO0FBQ0FDLGtEQUFLLENBQUNDLEdBQU4sQ0FBVyx1QkFBc0JYLE9BQVEsNERBQXpDLEVBQ0dZLElBREgsQ0FDUSxDQUFDO0FBQUVDO0FBQUYsT0FBRCxLQUFjO0FBQ2xCLGNBQU1DLGdCQUFnQixHQUFHRCxJQUFJLENBQUNFLEtBQUwsQ0FBV0MsS0FBcEM7O0FBQ0EsWUFBSUYsZ0JBQWdCLENBQUNHLFFBQWpCLENBQTJCLGdDQUEzQixDQUFKLEVBQWlFO0FBQy9EO0FBQ0Q7O0FBQ0QsY0FBTUMsS0FBSyxHQUFHLDJCQUFkO0FBQ0EsY0FBTUMsV0FBVyxHQUFHTCxnQkFBZ0IsQ0FBQ00sT0FBakIsQ0FBeUJGLEtBQXpCLEVBQWdDVCx5QkFBeUIsR0FBRUssZ0JBQWdCLENBQUNPLEtBQWpCLENBQXVCSCxLQUF2QixFQUE4QixDQUE5QixDQUEzRCxDQUFwQjtBQUNBUixvREFBSyxDQUFDWSxHQUFOLENBQVcsdUJBQXNCdEIsT0FBUSxjQUF6QyxFQUF3RDtBQUN0RGUsZUFBSyxFQUFFO0FBQ0xRLGVBQUcsRUFBRSxvQ0FEQTtBQUVMUCxpQkFBSyxFQUFFRztBQUZGO0FBRCtDLFNBQXhEO0FBTUQsT0FkSDtBQWdCQVQsa0RBQUssQ0FBQ1ksR0FBTixDQUFXLHVCQUFzQnRCLE9BQVEsY0FBekMsRUFBd0Q7QUFDdEQsaUJBQVM7QUFDUCxpQkFBTyxnQ0FEQTtBQUVQLG1CQUFTSztBQUZGO0FBRDZDLE9BQXhELEVBS0dPLElBTEgsQ0FLUSxDQUFDO0FBQUVDO0FBQUYsT0FBRCxLQUFjO0FBQ3BCTixlQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFDSztBQUFELFNBQVo7QUFDRCxPQVBEO0FBUUQsS0FqRGlDO0FBQUE7O0FBT2xDVyxtQkFBaUIsR0FBRztBQUNsQmQsZ0RBQUssQ0FBQ0MsR0FBTixDQUFXLDBCQUFYLEVBQ0dDLElBREgsQ0FDUSxDQUFDO0FBQUVDO0FBQUYsS0FBRCxLQUFjO0FBQ2xCLFlBQU1iLE9BQU8sR0FBR2EsSUFBSSxDQUFDWSxNQUFMLENBQVlDLElBQVosQ0FBa0JDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxJQUFOLEtBQWUsTUFBM0MsRUFBbURDLEVBQW5FO0FBQ0EsV0FBSzNCLFFBQUwsQ0FBYztBQUFFRjtBQUFGLE9BQWQ7QUFDRCxLQUpIO0FBS0Q7O0FBc0NEOEIsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFL0I7QUFBRixRQUF1QixLQUFLSyxLQUFsQztBQUNBLFdBQ0UsTUFBQyxxREFBRCxRQUNFLE1BQUMsd0VBQUQ7QUFDRSxrQkFBWSxFQUFDLFNBRGY7QUFFRSxrQkFBWSxFQUFFLEtBRmhCO0FBR0UsVUFBSSxFQUFFLEtBQUtBLEtBQUwsQ0FBV04sSUFIbkI7QUFJRSxpQkFBVyxFQUFHRyxTQUFELElBQWUsS0FBSzhCLGVBQUwsQ0FBcUI5QixTQUFyQixDQUo5QjtBQUtFLGNBQVEsRUFBRSxNQUFNLEtBQUtDLFFBQUwsQ0FBYztBQUFFSixZQUFJLEVBQUU7QUFBUixPQUFkO0FBTGxCLE1BREYsRUFRRSxNQUFDLHVEQUFELFFBQ0csQ0FBQ0MsZ0JBQWdCLENBQUNpQyxNQUFsQixJQUNDLE1BQUMsMkRBQUQ7QUFDRSxhQUFPLEVBQUMscUNBRFY7QUFFRSxZQUFNLEVBQUU7QUFDTkMsZUFBTyxFQUFFLGlCQURIO0FBRU5DLGdCQUFRLEVBQUUsTUFBTTtBQUNkLGVBQUtoQyxRQUFMLENBQWM7QUFBRUosZ0JBQUksRUFBRTtBQUFSLFdBQWQ7QUFDRDtBQUpLLE9BRlY7QUFRRSxXQUFLLEVBQUVKO0FBUlQsT0FVRSw4Q0FWRixDQUZKLEVBZUcsQ0FBQyxDQUFDSyxnQkFBZ0IsQ0FBQ2lDLE1BQW5CLElBQ0MsbUVBQ0UsTUFBQyx1REFBRCxDQUFRLGdCQUFSO0FBQ0UsV0FBSyxFQUFDLGlCQURSO0FBRUUsaUJBQVcsRUFDVCxNQUFDLHVEQUFEO0FBQVEsZUFBTyxFQUFFLE1BQU0sS0FBSzlCLFFBQUwsQ0FBYztBQUFFSixjQUFJLEVBQUU7QUFBUixTQUFkO0FBQXZCO0FBSEosT0FNRSxNQUFDLHFEQUFEO0FBQU0sZUFBUztBQUFmLE9BQ0UsTUFBQyw2REFBRDtBQUNFLGtCQUFZLEVBQUU7QUFBQ3FDLGdCQUFRLEVBQUUsU0FBWDtBQUFzQkMsY0FBTSxFQUFFO0FBQTlCLE9BRGhCO0FBRUUsV0FBSyxFQUFFckMsZ0JBRlQ7QUFHRSxnQkFBVSxFQUFHc0MsSUFBRCxJQUNWLE1BQUMsNkRBQUQ7QUFDRSxVQUFFLEVBQUVBLElBQUksQ0FBQ1IsRUFEWDtBQUVFLGFBQUssRUFDSCxNQUFDLDBEQUFEO0FBQVcsYUFBRyxFQUFFUSxJQUFJLENBQUNDLEtBQXJCO0FBQTRCLGNBQUksRUFBQyxRQUFqQztBQUEwQyxnQkFBTSxFQUFFRCxJQUFJLENBQUNFLE1BQUwsQ0FBWSxDQUFaLEVBQWVDO0FBQWpFLFVBSEo7QUFLRSwwQkFBa0IsRUFBRyxvQkFBbUJILElBQUksQ0FBQ0MsS0FBTSxFQUxyRDtBQU1FLFlBQUksRUFBRUQsSUFBSSxDQUFDQztBQU5iLFNBUUUsa0JBQ0UsTUFBQywwREFBRDtBQUFXLGlCQUFTLEVBQUM7QUFBckIsU0FBK0JELElBQUksQ0FBQ0MsS0FBcEMsQ0FERixDQVJGO0FBSkosTUFERixDQU5GLENBREYsRUE0QkUsTUFBQyx1REFBRDtBQUFRLGFBQU8sTUFBZjtBQUFnQixhQUFPLEVBQUUsS0FBS0c7QUFBOUIsaUJBNUJGLENBaEJKLENBUkYsQ0FERjtBQTJERDs7QUFoSGlDOztBQW1IckI5QyxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW1wdHlTdGF0ZSwgTGF5b3V0LCBQYWdlLCBUZXh0U3R5bGUsIENhcmQsIEJ1dHRvbiwgUmVzb3VyY2VMaXN0LCBSZXNvdXJjZUl0ZW0sIFRodW1ibmFpbCB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuaW1wb3J0IHsgUmVzb3VyY2VQaWNrZXIgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcbmltcG9ydCBnZW5lcmF0ZVVwc2VsbFNuaXBwZXQgZnJvbSAnLi4vY29tcG9uZW50cy91cHNlbGwtaW4tY2FydC5saXF1aWQuanMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgaW1nID0gJ2h0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNzU3Lzk5NTUvZmlsZXMvZW1wdHktc3RhdGUuc3ZnJztcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBvcGVuOiBmYWxzZSxcbiAgICBzZWxlY3RlZFByb2R1Y3RzOiBbXSxcbiAgICB0aGVtZUlkOiAnJ1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYXhpb3MuZ2V0KGAvYXBpL3Nob3BpZnkvdGhlbWVzLmpzb25gKVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHRoZW1lSWQgPSBkYXRhLnRoZW1lcy5maW5kKCh0aGVtZSkgPT4gdGhlbWUucm9sZSA9PT0gJ21haW4nKS5pZDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRoZW1lSWQgfSk7XG4gICAgICB9KVxuICB9XG5cbiAgaGFuZGxlU2VsZWN0aW9uID0gYXN5bmMgKHJlc291cmNlcykgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSwgc2VsZWN0ZWRQcm9kdWN0czogcmVzb3VyY2VzLnNlbGVjdGlvbiB9KVxuICB9O1xuXG4gIHB1Ymxpc2ggPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RlZFByb2R1Y3RzLCB0aGVtZUlkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IG5ld1Vwc2VsbFRlbXBsYXRlID0gKGdlbmVyYXRlVXBzZWxsU25pcHBldChzZWxlY3RlZFByb2R1Y3RzKSk7XG4gICAgY29uc29sZS5sb2coe25ld1Vwc2VsbFRlbXBsYXRlfSk7XG5cbiAgICBjb25zdCBzdHJUb0FwcGVuZFRvQ2FydFRlbXBsYXRlID0gYHslIGVuZHJhdyAlfXslIGluY2x1ZGUgJ3Vwc2VsbC1pbi1jYXJ0JyAlfXslIHJhdyAlfWBcbiAgICBheGlvcy5nZXQoYC9hcGkvc2hvcGlmeS90aGVtZXMvJHt0aGVtZUlkfS9hc3NldHMuanNvbj9hc3NldFtrZXldPXNuaXBwZXRzL2FqYXgtY2FydC10ZW1wbGF0ZS5saXF1aWRgKVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVGVtcGxhdGUgPSBkYXRhLmFzc2V0LnZhbHVlO1xuICAgICAgICBpZiAob3JpZ2luYWxUZW1wbGF0ZS5pbmNsdWRlcyhgeyUgaW5jbHVkZSAndXBzZWxsLWluLWNhcnQnICV9YCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVnRXggPSAvXFw8XFwvZGl2XFw+W1xcbiBdKzxcXC9mb3JtXFw+L2c7XG4gICAgICAgIGNvbnN0IG5ld1RlbXBsYXRlID0gb3JpZ2luYWxUZW1wbGF0ZS5yZXBsYWNlKHJlZ0V4LCBzdHJUb0FwcGVuZFRvQ2FydFRlbXBsYXRlKyBvcmlnaW5hbFRlbXBsYXRlLm1hdGNoKHJlZ0V4KVswXSlcbiAgICAgICAgYXhpb3MucHV0KGAvYXBpL3Nob3BpZnkvdGhlbWVzLyR7dGhlbWVJZH0vYXNzZXRzLmpzb25gLCB7XG4gICAgICAgICAgYXNzZXQ6IHtcbiAgICAgICAgICAgIGtleTogJ3NuaXBwZXRzL2FqYXgtY2FydC10ZW1wbGF0ZS5saXF1aWQnLFxuICAgICAgICAgICAgdmFsdWU6IG5ld1RlbXBsYXRlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgIGF4aW9zLnB1dChgL2FwaS9zaG9waWZ5L3RoZW1lcy8ke3RoZW1lSWR9L2Fzc2V0cy5qc29uYCwge1xuICAgICAgXCJhc3NldFwiOiB7XG4gICAgICAgIFwia2V5XCI6IFwic25pcHBldHMvdXBzZWxsLWluLWNhcnQubGlxdWlkXCIsXG4gICAgICAgIFwidmFsdWVcIjogbmV3VXBzZWxsVGVtcGxhdGVcbiAgICAgIH1cbiAgICB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coe2RhdGF9KTtcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRQcm9kdWN0cyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2U+XG4gICAgICAgIDxSZXNvdXJjZVBpY2tlclxuICAgICAgICAgIHJlc291cmNlVHlwZT1cIlByb2R1Y3RcIlxuICAgICAgICAgIHNob3dWYXJpYW50cz17ZmFsc2V9XG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgIG9uU2VsZWN0aW9uPXsocmVzb3VyY2VzKSA9PiB0aGlzLmhhbmRsZVNlbGVjdGlvbihyZXNvdXJjZXMpfVxuICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgeyFzZWxlY3RlZFByb2R1Y3RzLmxlbmd0aCAmJlxuICAgICAgICAgICAgPEVtcHR5U3RhdGVcbiAgICAgICAgICAgICAgaGVhZGluZz1cIkNob29zZSBwcm9kdWN0cyB5b3Ugd2FudCB0byB1cHNlbGwuXCJcbiAgICAgICAgICAgICAgYWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgY29udGVudDogJ1NlbGVjdCBwcm9kdWN0cycsXG4gICAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgaW1hZ2U9e2ltZ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHA+U2VsZWN0IGF0IGxlYXN0IDEgcHJvZHVjdC48L3A+XG4gICAgICAgICAgICA8L0VtcHR5U3RhdGU+XG4gICAgICAgICAgfVxuICAgICAgICAgIHshIXNlbGVjdGVkUHJvZHVjdHMubGVuZ3RoICYmXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cbiAgICAgICAgICAgICAgICB0aXRsZT1cIlVwc2VsbCBQcm9kdWN0c1wiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249eyhcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSl9PlJlc2VsZWN0IFByb2R1Y3RzPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cbiAgICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3RcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lPXt7c2luZ3VsYXI6ICdwcm9kdWN0JywgcGx1cmFsOiAncHJvZHVjdHMnfX1cbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3NlbGVjdGVkUHJvZHVjdHN9XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFJlc291cmNlSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUaHVtYm5haWwgYWx0PXtpdGVtLnRpdGxlfSBzaXplPVwibWVkaXVtXCIgc291cmNlPXtpdGVtLmltYWdlc1swXS5vcmlnaW5hbFNyY30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD17YFZpZXcgZGV0YWlscyBmb3IgJHtpdGVtLnRpdGxlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj57aXRlbS50aXRsZX08L1RleHRTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPC9SZXNvdXJjZUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IG9uQ2xpY2s9e3RoaXMucHVibGlzaH0+UHVibGlzaDwvQnV0dG9uPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgfVxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvUGFnZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/app-bridge-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCI/MDY2YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/app-bridge-react\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "handlebars":
/*!*****************************!*\
  !*** external "handlebars" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"handlebars\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoYW5kbGViYXJzXCI/ZmUwZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJoYW5kbGViYXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///handlebars\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });