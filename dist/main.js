/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _styles_nullStyle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _scripts_flightSearch_controller_flightSearchControll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _apis_userLocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _scripts_flightSearch_view_flightSearchView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
;





const User = new _apis_userLocation__WEBPACK_IMPORTED_MODULE_3__.UserlocationClass();

window.addEventListener('load', () => {
    const flightSearchView = new _scripts_flightSearch_view_flightSearchView__WEBPACK_IMPORTED_MODULE_4__.FlightSearchView();
    flightSearchView.dateView(document.getElementById('departDate'), 8);
    flightSearchView.dateView(document.getElementById('returnDate'), 15);
    flightSearchView.counterView(document.getElementById('adultsCount').value, document.getElementById('childCount').value);
});

document.addEventListener('DOMContentLoaded', () => {
    User.getUserLocation();
    document.getElementById('round').checked = true;
});


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
;
            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
;
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  color: white;\n  font-family: sans-serif; }\n\n.wrapperSearch {\n  background-image: url(\"https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/shutterstock_539058235.jpg?alt=media&token=9ee36da4-40a4-4fa1-92a3-c594f69eead8\");\n  background-position: center;\n  width: 100%;\n  height: 500px;\n  background-size: cover;\n  position: relative; }\n\n.searchBlock {\n  width: 90%;\n  height: 400px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n  .searchBlock h1 {\n    font-size: 4.75rem;\n    padding: 0 0 1.875rem 1.5rem;\n    line-height: 1.3;\n    font-weight: 700;\n    letter-spacing: normal; }\n\n.wrapperSearchInputs {\n  margin: 0 auto;\n  padding: 1.5rem;\n  background-color: #02122c;\n  border-radius: .25rem;\n  height: 175px; }\n\n.flight-radio-boxes label > input {\n  margin: 0; }\n\n.flight-radio-boxes label > span {\n  margin-right: 5px;\n  font-size: 16px; }\n\n.inputsFlex {\n  display: flex;\n  margin-top: 15px; }\n  .inputsFlex input {\n    font-family: sans-serif; }\n  .inputsFlex label {\n    width: 100%;\n    display: block; }\n  .inputsFlex div > label {\n    font-size: 12px; }\n  .inputsFlex div > input {\n    padding: 0;\n    color: black;\n    padding: 10px; }\n  .inputsFlex div > input,\n  .inputsFlex div > select {\n    border: none;\n    outline: none;\n    box-shadow: inset 1px 0 0 0 #b2b2bf, inset 0 1px 0 0 #b2b2bf, inset 0 -1px 0 0 #b2b2bf, inset -1px 0 0 0 #b2b2bf;\n    height: 40px; }\n  .inputsFlex div > select {\n    width: 100%; }\n  .inputsFlex .from-to {\n    position: relative;\n    width: 23%; }\n  .inputsFlex .from-to > input {\n    padding-right: 25px;\n    width: 100%; }\n  .inputsFlex .switch-button {\n    position: absolute;\n    right: 0;\n    height: 40px;\n    width: 25px;\n    background-color: red;\n    outline: none;\n    border: none; }\n\n.up-checkboxes {\n  position: relative;\n  margin-top: 15px;\n  display: flex;\n  flex-wrap: wrap; }\n  .up-checkboxes div:nth-child(1),\n  .up-checkboxes div:nth-child(2) {\n    display: flex;\n    align-items: center;\n    width: 169px;\n    font-size: 12px; }\n    .up-checkboxes div:nth-child(1) input,\n    .up-checkboxes div:nth-child(2) input {\n      margin: 0; }\n    .up-checkboxes div:nth-child(1) label,\n    .up-checkboxes div:nth-child(2) label {\n      margin-left: 5px; }\n  .up-checkboxes div:nth-child(3) {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: calc(100% - 338px);\n    display: flex;\n    justify-content: flex-end;\n    min-width: 100px; }\n  .up-checkboxes div:nth-child(3) > button {\n    font-size: 24px;\n    line-height: 30px;\n    background-color: #00a698;\n    color: #ffffff;\n    border-radius: 4px;\n    padding: 6px 24px;\n    outline: none;\n    border: none; }\n  .up-checkboxes div:nth-child(3) > button:hover {\n    background-color: #00887d;\n    cursor: pointer; }\n\n.down-checkboxes {\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12px;\n  margin-top: 15px; }\n  .down-checkboxes div {\n    display: flex;\n    align-items: center; }\n    .down-checkboxes div input {\n      margin: 0; }\n    .down-checkboxes div label {\n      margin-left: 5px; }\n  .down-checkboxes div:nth-child(1) {\n    margin-right: 15px; }\n\n.classAdults {\n  width: 30%;\n  color: #111236; }\n  .classAdults #classAdultsInp {\n    width: 100%; }\n\n.airportSearchFrom, .airportSearchTo {\n  width: 500px;\n  position: absolute;\n  color: #111236;\n  font-size: 1rem;\n  line-height: 1.3rem;\n  background-color: white;\n  border-radius: 10px;\n  z-index: 1;\n  font-family: sans-serif;\n  -webkit-box-shadow: 0px 0px 7px 1px #d1d1d1;\n  -moz-box-shadow: 0px 0px 7px 1px #d1d1d1;\n  box-shadow: 0px 0px 7px 1px #d1d1d1; }\n  .airportSearchFrom li, .airportSearchTo li {\n    cursor: pointer;\n    margin: 0;\n    font-size: 1rem;\n    line-height: 1.25rem;\n    font-weight: 400;\n    height: 50px;\n    border-bottom: 1px solid lightgray;\n    border-top: 1px solid lightgray;\n    padding: 5px 0; }\n    .airportSearchFrom li:hover, .airportSearchTo li:hover {\n      background-color: #f1f1f1; }\n\n.listBlock {\n  display: flex; }\n  .listBlock div:first-child {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 20%; }\n  .listBlock img {\n    width: 20px;\n    height: 20px; }\n\n.listPlaceName {\n  font-size: 1rem;\n  line-height: 1.25rem;\n  font-weight: 400; }\n\n.listCountryName {\n  font-size: .75rem;\n  line-height: 1rem;\n  font-weight: 400; }\n\n.classAdultsModal {\n  width: 350px;\n  background-color: white;\n  border-radius: 10px;\n  position: absolute;\n  z-index: 1;\n  -webkit-box-shadow: 0px 0px 7px 1px #d1d1d1;\n  -moz-box-shadow: 0px 0px 7px 1px #d1d1d1;\n  box-shadow: 0px 0px 7px 1px #d1d1d1;\n  padding: 15px;\n  display: none; }\n  .classAdultsModal hr {\n    margin: 0px 0 10px 0;\n    border-top: 1px solid lightgray; }\n  .classAdultsModal .hearders {\n    padding: .75rem 0 .375rem;\n    font-size: 1rem;\n    font-weight: 700;\n    color: #111236;\n    line-height: 1rem; }\n  .classAdultsModal div {\n    padding: .75rem 10px .375rem;\n    font-size: .77rem;\n    color: #111236;\n    line-height: 1rem;\n    background-color: #f3f2f5;\n    border-radius: 5px;\n    text-align: justify; }\n    .classAdultsModal div strong {\n      display: block;\n      font-weight: 700; }\n  .classAdultsModal .closeBtn {\n    color: #084eb2;\n    text-align: right;\n    cursor: pointer;\n    font-weight: 700;\n    font-family: sans-serif; }\n    .classAdultsModal .closeBtn:hover {\n      text-decoration: underline; }\n\n.counterTicket {\n  width: 40px;\n  border: none;\n  outline: none;\n  font-size: 2rem;\n  box-shadow: none !important;\n  background-color: #fff;\n  font-family: sans-serif; }\n\n.counterButton {\n  color: #084eb2;\n  background-color: #fff;\n  border-radius: 50%;\n  outline: none;\n  font-weight: 700;\n  line-height: 1.5rem;\n  text-align: center;\n  cursor: pointer;\n  font-size: 2rem;\n  border: 2px solid lightgray;\n  padding: 5px;\n  width: 37px;\n  height: 37px; }\n  .counterButton:hover {\n    border: 2px solid #084eb2; }\n  .counterButton:disabled {\n    background-color: #dddde5;\n    color: #b2b2bf;\n    cursor: not-allowed; }\n    .counterButton:disabled:hover {\n      border: 2px solid lightgray; }\n\n.countSpan {\n  font-size: 1rem;\n  padding-left: 10px;\n  display: inline-block; }\n\n.classAdultsTxt {\n  padding: 0.5rem 0 1.1rem 0;\n  color: #817b8f;\n  font-size: .77rem;\n  line-height: 1.125rem;\n  font-family: sans-serif;\n  text-align: justify; }\n\n#classAdultsInp:read-only {\n  cursor: pointer; }\n\n.ifChild {\n  width: 100%;\n  height: 100%; }\n  .ifChild option {\n    height: 30px;\n    font-size: 18px; }\n\n#returnDate:disabled {\n  background-color: #868686;\n  cursor: not-allowed; }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 4 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_nullStyle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
;
            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_nullStyle_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_nullStyle_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),
/* 6 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
;
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _apis_userLocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _view_flightSearchView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _model_flightSearchMolel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
;




const searchFrom = document.getElementById('searchFrom');
const searchTo = document.getElementById('searchTo');
const flightSearchModel = new _model_flightSearchMolel__WEBPACK_IMPORTED_MODULE_3__.FlightSearchModel();
const view = new _view_flightSearchView__WEBPACK_IMPORTED_MODULE_2__.FlightSearchView();
const flightSearchClass = new _apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.FlightSearchClass();

searchFrom.addEventListener('keyup', (e) => {
    flightSearchClass.getAirports(e.target.value);
    view.paintSearchList(document.querySelector('.airportSearchFrom'));
});
searchFrom.addEventListener('focus', () => {
    document.querySelector('.airportSearchTo').innerHTML = '';
    searchFrom.value = '';
    flightSearchClass.getAirports(_apis_userLocation__WEBPACK_IMPORTED_MODULE_1__.userCountry.country);
    view.paintSearchList(document.querySelector('.airportSearchFrom'));
});
searchTo.addEventListener('keyup', (e) => {
    flightSearchClass.getAirports(e.target.value);
    view.paintSearchList(document.querySelector('.airportSearchTo'));
});
searchTo.addEventListener('focus', () => {
    document.querySelector('.airportSearchFrom').innerHTML = '';
    searchTo.value = '';
    flightSearchClass.getAirports(_apis_userLocation__WEBPACK_IMPORTED_MODULE_1__.userCountry.country);
    view.paintSearchList(document.querySelector('.airportSearchTo'));
});

document.getElementById('classAdultsInp').addEventListener('click', () => {
    document.querySelector('.classAdultsModal').style.display = 'block';
});
document.querySelector('.closeBtn').addEventListener('click', () => {
    document.querySelector('.classAdultsModal').style.display = 'none';
});

document.getElementById('adultsPlus').addEventListener('click', () => {
    flightSearchModel.counterPlus(document.getElementById('adultsCount'));
    view.counterView(document.getElementById('adultsCount').value, document.getElementById('childCount').value);
    flightSearchModel.manageDisableAdults();
});
document.getElementById('adultsMinus').addEventListener('click', () => {
    flightSearchModel.counterMinus(document.getElementById('adultsCount'));
    view.counterView(document.getElementById('adultsCount').value, document.getElementById('childCount').value);
    flightSearchModel.manageDisableAdults();
});
document.getElementById('childPlus').addEventListener('click', () => {
    flightSearchModel.counterPlus(document.getElementById('childCount'));
    view.counterView(document.getElementById('adultsCount').value, document.getElementById('childCount').value);
    flightSearchModel.manageDisableChild();
    view.childAge();
});
document.getElementById('childMinus').addEventListener('click', () => {
    flightSearchModel.counterMinus(document.getElementById('childCount'));
    view.counterView(document.getElementById('adultsCount').value, document.getElementById('childCount').value);
    flightSearchModel.manageDisableChild();
    view.childAge();
});

for (let i = 0; i < document.getElementsByName('flight-type').length; i += 1) {
    // eslint-disable-next-line no-loop-func
    document.getElementsByName('flight-type')[i].addEventListener('click', () => {
        document.getElementsByName('flight-type')[i].checked = true;
        flightSearchModel.manageSearchViewDependsOnRoute(document.getElementsByName('flight-type')[i].value);
    });
}

document.querySelector('.searchFlightBtn').addEventListener('click', () => {
    if (flightSearchModel.ifChecked() === '1') {
        console.log('1');
        let dateFrom = document.getElementById('departDate').value;
        dateFrom = `${dateFrom.slice(8, 10)}%2F${dateFrom.slice(5, 7)}%2F${dateFrom.slice(0, 4)}`;
        flightSearchClass.getAirplinesListOneWay(_view_flightSearchView__WEBPACK_IMPORTED_MODULE_2__.fromAirport.PlaceId, _view_flightSearchView__WEBPACK_IMPORTED_MODULE_2__.toAirport.PlaceId, dateFrom, document.getElementById('adultsCount').value, document.getElementById('childCount').value, 'USD');
    } else if (flightSearchModel.ifChecked() === '2') {
        console.log(2);
        let dateFrom = document.getElementById('departDate').value;
        let dateTo = document.getElementById('returnDate').value;
        dateFrom = `${dateFrom.slice(8, 10)}%2F${dateFrom.slice(5, 7)}%2F${dateFrom.slice(0, 4)}`;
        dateTo = `${dateTo.slice(8, 10)}%2F${dateTo.slice(5, 7)}%2F${dateTo.slice(0, 4)}`;
        flightSearchClass.getAirplinesListReturn(_view_flightSearchView__WEBPACK_IMPORTED_MODULE_2__.fromAirport.PlaceId, _view_flightSearchView__WEBPACK_IMPORTED_MODULE_2__.toAirport.PlaceId, dateFrom, dateTo, document.getElementById('adultsCount').value, document.getElementById('childCount').value, 'USD');
    }
});


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchAirportList": () => /* binding */ searchAirportList,
/* harmony export */   "FlightSearchClass": () => /* binding */ FlightSearchClass
/* harmony export */ });
// eslint-disable-next-line import/no-mutable-exports
let searchAirportList;

const FlightSearchClass = class {
    async getListPlaces() {
        try {
            this.res = await fetch('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm', {
                method: 'GET',
                headers: {
                    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
                    'x-rapidapi-key': 'd40f871e56msh6454e5315fba4b0p1d7c22jsnb8c09fe2a985',
                },
            });
            this.data = await this.res.json();
            if (this.data) {
                // country = this.data;
            } else {
                throw Error(this.data.Message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getAirports(id) {
        try {
            this.res = await fetch(`https://skyscanner-server.herokuapp.com/airport/name/${id}`);
            this.data = await this.res.json();
            searchAirportList = this.data;
        } catch (error) {
            console.log(error);
        }
    }

    async getAirplinesListOneWay(from, to, datefrom, adults, children, currency) {
        try {
            this.res = await fetch(`https://tequila-api.kiwi.com/v2/search?fly_from=${from}&fly_to=${to}&date_from=${datefrom}&date_to=${datefrom}&flight_type=oneway&adults=${adults}&children=${children}&selected_cabins=M&only_working_days=false&only_weekends=false&partner_market=ua&curr=${currency}&vehicle_type=aircraft`, {
                headers: {
                    Accept: 'application/json',
                    Apikey: '-d9YzR50PN8Qh_4UZCwoDO2abTqdVGm1',
                },
            });
            this.data = await this.res.json();
            if (this.data) {
                console.log(this.data);
            } else {
                throw Error(this.data.Message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getAirplinesListReturn(from, to, datefrom, dateto, adults, children, currency) {
        try {
            this.res = await fetch(`https://tequila-api.kiwi.com/v2/search?fly_from=${from}&fly_to=${to}&date_from=${datefrom}&date_to=${datefrom}&return_from=${dateto}&return_to=${dateto}&flight_type=round&adults=${adults}&children=${children}&selected_cabins=M&only_working_days=false&only_weekends=false&partner_market=ua&curr=${currency}&vehicle_type=aircraft`, {
                headers: {
                    Accept: 'application/json',
                    Apikey: '-d9YzR50PN8Qh_4UZCwoDO2abTqdVGm1',
                },
            });
            this.data = await this.res.json();
            if (this.data) {
                console.log(this.data);
            } else {
                throw Error(this.data.Message);
            }
        } catch (error) {
            console.log(error);
        }
    }
};


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userCountry": () => /* binding */ userCountry,
/* harmony export */   "UserlocationClass": () => /* binding */ UserlocationClass
/* harmony export */ });
// eslint-disable-next-line import/no-mutable-exports
let userCountry;

const UserlocationClass = class {
    async getUserLocation() {
        try {
            this.url = 'https://extreme-ip-lookup.com/json/';
            this.res = await fetch(this.url);
            this.data = await this.res.json();
            if (this.data) {
                userCountry = this.data;
            } else {
                throw Error(this.data.Message);
            }
        } catch (error) {
            console.log(error);
        }
    }
};


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromAirport": () => /* binding */ fromAirport,
/* harmony export */   "toAirport": () => /* binding */ toAirport,
/* harmony export */   "FlightSearchView": () => /* binding */ FlightSearchView
/* harmony export */ });
/* harmony import */ var _apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
;

let fromAirport;
let toAirport;

const FlightSearchView = class {
    paintSearchList(elem) {
        // eslint-disable-next-line no-param-reassign
        elem.innerHTML = '';
        if (_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList) {
            for (let i = 0; i < _apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList.length; i += 1) {
                if (_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i].CityName) {
                    const li = document.createElement('li');
                    li.classList.add('placeList');
                    // eslint-disable-next-line no-loop-func
                    li.addEventListener('click', () => {
                        console.log(elem);
                        if (elem === document.querySelector('.airportSearchFrom')) {
                            fromAirport = _apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i];
                        } else {
                            toAirport = _apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i];
                        }
                        // eslint-disable-next-line no-param-reassign
                        elem.innerHTML = '';
                        // eslint-disable-next-line no-param-reassign
                        elem.previousElementSibling.value = `${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i].PlaceName} (${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i].PlaceId})`;
                    });
                    li.innerHTML += `<div class="listBlock"><div><img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/airplane.png?alt=media&token=f7c0d4d6-b7a0-4eb8-b43c-b91637db98c9"></div><div><p class="listPlaceName">${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i].PlaceName} (${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i].PlaceId})</p><p class="listCountryName">${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i].CountryName}</p><div></div>`;
                    elem.appendChild(li);
                } else {
                    const li = document.createElement('li');
                    li.classList.add('placeList');
                    // eslint-disable-next-line no-loop-func
                    li.addEventListener('click', () => {
                        console.log(elem);
                        if (elem === document.querySelector('.airportSearchFrom')) {
                            fromAirport = _apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i];
                        } else {
                            toAirport = _apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i];
                        }
                        // eslint-disable-next-line no-param-reassign
                        elem.innerHTML = '';
                        // eslint-disable-next-line no-param-reassign
                        elem.previousElementSibling.value = `${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i].PlaceName} (${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i].PlaceId})`;
                    });
                    li.innerHTML += `<div class="listBlock"><div><img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/flag.png?alt=media&token=98b9f634-9d3f-4b59-97eb-6a5899b5bda3"></div><div><p class="listPlaceName">${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i].PlaceName} (${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i].PlaceId})</p><p class="listCountryName">${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i].CountryName}</p><div></div>`;
                    elem.appendChild(li);
                }
            }
        } else {
            setTimeout(() => this.paintSearchList(elem), 500);
        }
    }

    dateView(elem, num) {
        const someDate = new Date();
        let mm = someDate.getMonth() + 1;
        if (mm < 10) {
            mm = `0${mm}`;
        }
        elem.setAttribute('min', `${someDate.getFullYear()}-${mm}-${someDate.getDate()}`);
        someDate.setDate(someDate.getDate() + num);
        let mm2 = someDate.getMonth() + 1;
        if (mm2 < 10) {
            mm2 = `0${mm2}`;
        }
        // eslint-disable-next-line no-param-reassign
        elem.value = `${someDate.getFullYear()}-${mm2}-${someDate.getDate()}`;
    }

    counterView(value1, value2) {
        let travelersname;
        const sumValues = +value1 + +value2;
        // eslint-disable-next-line radix
        if (sumValues === 1) {
            travelersname = 'adult';
        } else {
            travelersname = 'travellers';
        }
        // eslint-disable-next-line radix
        document.getElementById('classAdultsInp').value = `${sumValues} ${travelersname}, Economy`;
    }

    childAge() {
        document.querySelector('.ifChild').innerHTML = '';
        // eslint-disable-next-line radix
        for (let i = 0; i < parseInt(document.getElementById('childCount').value); i += 1) {
            document.querySelector('.ifChild').innerHTML += `<p class="hearders">Age of child ${i + 1}</p>\
            <select id="child${i + 1}">
                <option selected disabled>Select age</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
            </select>`;
        }
    }
};


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlightSearchModel": () => /* binding */ FlightSearchModel
/* harmony export */ });
const FlightSearchModel = class {
    counterMinus(elem) {
        let value = +elem.value;
        if (elem === document.getElementById('adultsCount')) {
            if (value > 1) {
                // eslint-disable-next-line no-param-reassign
                value -= 1;
            } else {
                // eslint-disable-next-line no-param-reassign
                value = 1;
            }
        } else {
            // eslint-disable-next-line no-lonely-if
            if (value > 0) {
                // eslint-disable-next-line no-param-reassign
                value -= 1;
            } else {
                // eslint-disable-next-line no-param-reassign
                value = 0;
            }
        }
        // eslint-disable-next-line no-param-reassign
        elem.value = value;
    }

    counterPlus(elem) {
        let value = +elem.value;
        if (value <= 8) {
            // eslint-disable-next-line no-param-reassign
            value += 1;
        } else {
            // eslint-disable-next-line no-param-reassign
            value = 9;
        }
        // eslint-disable-next-line no-param-reassign
        elem.value = value;
    }

    manageDisableAdults() {
        if (document.getElementById('adultsCount').value === '9') {
            document.getElementById('adultsPlus').setAttribute('disabled', true);
        } else {
            document.getElementById('adultsPlus').removeAttribute('disabled');
        }
        // eslint-disable-next-line radix
        if (parseInt(document.getElementById('adultsCount').value) > 1) {
            document.getElementById('adultsMinus').removeAttribute('disabled');
        } else {
            document.getElementById('adultsMinus').setAttribute('disabled', true);
        }
    }

    manageDisableChild() {
        if (document.getElementById('childCount').value === '9') {
            document.getElementById('childPlus').setAttribute('disabled', true);
        } else {
            document.getElementById('childPlus').removeAttribute('disabled');
        }
        // eslint-disable-next-line radix
        if (parseInt(document.getElementById('childCount').value) > 0) {
            document.getElementById('childMinus').removeAttribute('disabled');
        } else {
            document.getElementById('childMinus').setAttribute('disabled', true);
        }
    }

    manageSearchViewDependsOnRoute(value) {
        if (value === '1') {
            document.getElementById('returnDate').setAttribute('disabled', true);
            document.getElementById('returnDateLabel').style.color = 'grey';
            document.getElementById('returnDate').value = '';
        } else if (value === '2') {
            document.getElementById('returnDate').removeAttribute('disabled');
            document.getElementById('returnDateLabel').style.color = 'white';
            const someDate = new Date();
            let mm = someDate.getMonth() + 1;
            if (mm < 10) {
                mm = `0${mm}`;
            }
            someDate.setDate(someDate.getDate() + 15);
            document.getElementById('returnDate').value = `${someDate.getFullYear()}-${mm}-${someDate.getDate()}`;
        } else if (value === '3') {
            document.getElementById('returnDate').removeAttribute('disabled');
            document.getElementById('returnDateLabel').style.color = 'white';
            const someDate = new Date();
            let mm = someDate.getMonth() + 1;
            if (mm < 10) {
                mm = `0${mm}`;
            }
            someDate.setDate(someDate.getDate() + 15);
            document.getElementById('returnDate').value = `${someDate.getFullYear()}-${mm}-${someDate.getDate()}`;
        }
    }

    // eslint-disable-next-line consistent-return
    ifChecked() {
        const radio = document.getElementsByName('flight-type');
        for (let i = 0; i < radio.length; i += 1) {
            if (radio[i].checked) {
                return radio[i].value;
            }
        }
    }
};


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(0);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;