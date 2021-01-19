/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _styles_nullStyle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _scripts_flightSearch_controller_flightSearchControll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _scripts_header_controller_headerControll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _scripts_bookinPage_controll_bookingPageControll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var _scripts_bookinPage_controll_bookingPageControll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_bookinPage_controll_bookingPageControll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_flightResult_controller_flightresultControll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _apis_userLocation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var _scripts_flightSearch_view_flightSearchView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _scripts_header_view_headerView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var _apis_country__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17);
;










const User = new _apis_userLocation__WEBPACK_IMPORTED_MODULE_6__.UserlocationClass();
const Country = new _apis_country__WEBPACK_IMPORTED_MODULE_9__.CountryClass();
const Header = new _scripts_header_view_headerView__WEBPACK_IMPORTED_MODULE_8__.HeaderView();

window.addEventListener('load', () => {
    const flightSearchView = new _scripts_flightSearch_view_flightSearchView__WEBPACK_IMPORTED_MODULE_7__.FlightSearchView();
    flightSearchView.dateView(document.getElementById('departDate'), 8);
    flightSearchView.dateView(document.getElementById('returnDate'), 15);
    flightSearchView.counterView(document.getElementById('adultsCount').value, document.getElementById('childCount').value);
    Header.headerInit();
});

document.addEventListener('DOMContentLoaded', () => {
    User.getUserLocation();
    Country.getCountries();
    document.getElementById('round').checked = true;
});


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  color: white;\n  font-family: sans-serif !important; }\n\n.wrapperSearch {\n  background-image: url(\"https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/shutterstock_539058235.jpg?alt=media&token=9ee36da4-40a4-4fa1-92a3-c594f69eead8\");\n  background-position: center;\n  width: 100%;\n  height: 500px;\n  background-size: cover;\n  position: relative; }\n\n.searchBlock {\n  width: 90%;\n  height: 400px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n  .searchBlock h1 {\n    font-size: 4.75rem;\n    padding: 1rem 0 1.875rem 1.5rem;\n    line-height: 1.3;\n    font-weight: 700;\n    letter-spacing: normal; }\n\n.wrapperSearchInputs {\n  margin: 0 auto;\n  padding: 1.5rem;\n  background-color: #02122c;\n  border-radius: .25rem;\n  height: 190px; }\n\n.flight-radio-boxes label > input {\n  margin: 0; }\n\n.flight-radio-boxes label > span {\n  margin-right: 5px;\n  font-size: 16px; }\n\n.inputsFlex {\n  display: flex;\n  margin-top: 15px; }\n  .inputsFlex input {\n    font-family: sans-serif; }\n  .inputsFlex label {\n    width: 100%;\n    display: block; }\n  .inputsFlex div > label {\n    font-size: 12px; }\n  .inputsFlex div > input {\n    padding: 0;\n    color: black;\n    padding: 10px; }\n  .inputsFlex div > input,\n  .inputsFlex div > select {\n    border: none;\n    outline: none;\n    box-shadow: inset 1px 0 0 0 #b2b2bf, inset 0 1px 0 0 #b2b2bf, inset 0 -1px 0 0 #b2b2bf, inset -1px 0 0 0 #b2b2bf;\n    height: 40px; }\n  .inputsFlex div > select {\n    width: 100%; }\n  .inputsFlex .from-to {\n    position: relative;\n    width: 23%; }\n  .inputsFlex .from-to > input {\n    padding-right: 25px;\n    width: 100%; }\n  .inputsFlex .switch-button {\n    position: absolute;\n    right: 0;\n    height: 40px;\n    width: 25px;\n    background-color: red;\n    outline: none;\n    border: none; }\n\n.up-checkboxes {\n  position: relative;\n  margin-top: 15px;\n  display: flex;\n  flex-wrap: wrap; }\n  .up-checkboxes div:nth-child(1),\n  .up-checkboxes div:nth-child(2) {\n    display: flex;\n    align-items: center;\n    width: 22%;\n    font-size: 12px; }\n    .up-checkboxes div:nth-child(1) input,\n    .up-checkboxes div:nth-child(2) input {\n      margin: 0; }\n    .up-checkboxes div:nth-child(1) label,\n    .up-checkboxes div:nth-child(2) label {\n      margin-left: 5px; }\n  .up-checkboxes div:nth-child(3) {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: calc(100% - 338px);\n    display: flex;\n    justify-content: flex-end;\n    min-width: 100px; }\n  .up-checkboxes div:nth-child(3) > button {\n    font-size: 22px;\n    line-height: 30px;\n    background-color: #00a698;\n    color: #ffffff;\n    border-radius: 4px;\n    padding: 6px 24px;\n    outline: none;\n    border: none; }\n  .up-checkboxes div:nth-child(3) > button:hover {\n    background-color: #00887d;\n    cursor: pointer; }\n\n.down-checkboxes {\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12px;\n  margin-top: 15px; }\n  .down-checkboxes div {\n    display: flex;\n    align-items: center; }\n    .down-checkboxes div input {\n      margin: 0; }\n    .down-checkboxes div label {\n      margin-left: 5px; }\n  .down-checkboxes div:nth-child(1) {\n    margin-right: 15px; }\n\n.classAdults {\n  width: 30%;\n  color: #111236; }\n  .classAdults #classAdultsInp {\n    width: 100%; }\n\n.airportSearchFrom, .airportSearchTo {\n  width: 500px;\n  position: absolute;\n  color: #111236;\n  font-size: 1rem;\n  line-height: 1.3rem;\n  background-color: white;\n  border-radius: 10px;\n  z-index: 1;\n  font-family: sans-serif;\n  -webkit-box-shadow: 0px 0px 7px 1px #d1d1d1;\n  -moz-box-shadow: 0px 0px 7px 1px #d1d1d1;\n  box-shadow: 0px 0px 7px 1px #d1d1d1; }\n  .airportSearchFrom li, .airportSearchTo li {\n    cursor: pointer;\n    margin: 0;\n    font-size: 1rem;\n    line-height: 1.25rem;\n    font-weight: 400;\n    height: 50px;\n    border-bottom: 1px solid lightgray;\n    border-top: 1px solid lightgray;\n    padding: 5px 0; }\n    .airportSearchFrom li:hover, .airportSearchTo li:hover {\n      background-color: #f1f1f1; }\n\n.listBlock {\n  display: flex; }\n  .listBlock div:first-child {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 20%; }\n  .listBlock img {\n    width: 20px;\n    height: 20px; }\n\n.listPlaceName {\n  font-size: 1rem;\n  line-height: 1.25rem;\n  font-weight: 400; }\n\n.listCountryName {\n  font-size: .75rem;\n  line-height: 1rem;\n  font-weight: 400; }\n\n.classAdultsModal {\n  width: 350px;\n  background-color: white;\n  border-radius: 10px;\n  position: absolute;\n  z-index: 1;\n  -webkit-box-shadow: 0px 0px 7px 1px #d1d1d1;\n  -moz-box-shadow: 0px 0px 7px 1px #d1d1d1;\n  box-shadow: 0px 0px 7px 1px #d1d1d1;\n  padding: 15px;\n  display: none; }\n  .classAdultsModal hr {\n    margin: 0px 0 10px 0;\n    border-top: 1px solid lightgray; }\n  .classAdultsModal .hearders {\n    padding: .75rem 0 .375rem;\n    font-size: 1rem;\n    font-weight: 700;\n    color: #111236;\n    line-height: 1rem; }\n  .classAdultsModal div {\n    padding: .75rem 10px .375rem;\n    font-size: .77rem;\n    color: #111236;\n    line-height: 1rem;\n    background-color: #f3f2f5;\n    border-radius: 5px;\n    text-align: justify; }\n    .classAdultsModal div strong {\n      display: block;\n      font-weight: 700; }\n  .classAdultsModal .closeBtn {\n    color: #084eb2;\n    text-align: right;\n    cursor: pointer;\n    font-weight: 700;\n    font-family: sans-serif; }\n    .classAdultsModal .closeBtn:hover {\n      text-decoration: underline; }\n\n.counterTicket {\n  width: 40px;\n  border: none;\n  outline: none;\n  font-size: 2rem;\n  box-shadow: none !important;\n  background-color: #fff;\n  font-family: sans-serif; }\n\n.counterButton {\n  color: #084eb2;\n  background-color: #fff;\n  border-radius: 50%;\n  outline: none;\n  font-weight: 700;\n  line-height: 1.5rem;\n  text-align: center;\n  cursor: pointer;\n  font-size: 2rem;\n  border: 2px solid lightgray;\n  padding: 5px;\n  width: 37px;\n  height: 37px; }\n  .counterButton:hover {\n    border: 2px solid #084eb2; }\n  .counterButton:disabled {\n    background-color: #dddde5;\n    color: #b2b2bf;\n    cursor: not-allowed; }\n    .counterButton:disabled:hover {\n      border: 2px solid lightgray; }\n\n.countSpan {\n  font-size: 1rem;\n  padding-left: 10px;\n  display: inline-block; }\n\n.classAdultsTxt {\n  padding: 0.5rem 0 1.1rem 0;\n  color: #817b8f;\n  font-size: .77rem;\n  line-height: 1.125rem;\n  font-family: sans-serif;\n  text-align: justify; }\n\n#classAdultsInp:read-only {\n  cursor: pointer; }\n\n.ifChild {\n  width: 100%;\n  height: 100%; }\n  .ifChild option {\n    height: 30px;\n    font-size: 18px; }\n\n#returnDate:disabled {\n  background-color: #868686;\n  cursor: not-allowed; }\n\n.bookingWrapper {\n  display: none;\n  width: 100%;\n  height: 500px;\n  color: #02122c;\n  background-color: #f5f5f5; }\n\n.lds-ripple {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  height: 100px; }\n\n.lds-ripple div {\n  position: absolute;\n  border: 5px solid #0770e3;\n  opacity: 1;\n  border-radius: 50%;\n  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite; }\n\n.lds-ripple div:nth-child(2) {\n  animation-delay: -0.5s; }\n\n@keyframes lds-ripple {\n  0% {\n    top: 50%;\n    left: 50%;\n    width: 0;\n    height: 0;\n    opacity: 1;\n    transform: translate(-50%, -50%); }\n  100% {\n    top: 50%;\n    left: 50%;\n    width: 100px;\n    height: 100px;\n    opacity: 0;\n    transform: translate(-50%, -50%); } }\n\n.bookingMood {\n  background-image: none;\n  background-color: #eef2f5;\n  height: 300px;\n  border-bottom: 2px solid lightgray; }\n  .bookingMood .searchBlock {\n    height: 100%; }\n    .bookingMood .searchBlock h1 {\n      font-size: 30px;\n      color: #0770e3;\n      padding-top: 1.5rem; }\n\n.bookingFlex {\n  width: 100%;\n  height: 100%;\n  display: flex; }\n  .bookingFlex .bookingFlexContent {\n    width: 25%;\n    padding: 2rem 1.5rem; }\n  .bookingFlex #contentResult {\n    width: 50%;\n    padding: 2rem 0.5rem; }\n\n.dataBlockOne {\n  height: 270px; }\n\n.dataBlockReturn {\n  height: 500px; }\n\n.dataBlock {\n  width: 100%;\n  background-color: white;\n  margin: 1.5rem 0;\n  padding: 1rem;\n  display: flex;\n  -webkit-box-shadow: 0px 0px 5px 0px #a1a1a1;\n  -moz-box-shadow: 0px 0px 5px 0px #a1a1a1;\n  box-shadow: 0px 0px 5px 0px #a1a1a1;\n  color: #2e353b; }\n\n.firstBlock {\n  width: 65%; }\n\n.priceBlock {\n  width: 35%;\n  justify-content: center;\n  text-align: center;\n  border-left: 1px solid lightgray;\n  font-family: sans-serif; }\n  .priceBlock div {\n    width: 100%;\n    height: 190px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative; }\n    .priceBlock div p {\n      font-weight: 700;\n      font-size: 1.7rem; }\n    .priceBlock div img {\n      position: absolute;\n      width: 20px;\n      height: 20px;\n      top: 0;\n      right: 0;\n      cursor: pointer; }\n  .priceBlock .bookbtn {\n    width: 100%;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 12px 3px 12px 15px; }\n    .priceBlock .bookbtn span {\n      background-color: #00a698;\n      color: white;\n      display: inline-block;\n      width: 100%;\n      height: 100%;\n      border-radius: 5px;\n      padding: 5px 0;\n      cursor: pointer; }\n      .priceBlock .bookbtn span:hover {\n        background-color: #0a998d; }\n\n.yearTime {\n  font-size: 1rem;\n  font-family: sans-serif; }\n\n.flightDetails {\n  display: flex;\n  width: 100%;\n  height: 150px;\n  padding: 1rem 0;\n  font-family: sans-serif; }\n  .flightDetails .information {\n    width: 95%; }\n    .flightDetails .information strong {\n      font-weight: 700;\n      font-size: 1.1rem;\n      padding: 3px 0; }\n    .flightDetails .information span {\n      color: #5f738c;\n      font-size: 0.85rem; }\n  .flightDetails .routeIco {\n    width: 5%; }\n    .flightDetails .routeIco img {\n      width: 20px;\n      margin: 5px 0; }\n\n.middleDetails {\n  display: flex;\n  padding: 1.5rem 0.5rem; }\n  .middleDetails .detailDuration {\n    background-color: #e8f4fd;\n    color: #0770e3;\n    font-size: 12px;\n    font-weight: 500;\n    border-radius: 12px;\n    padding: 8px;\n    border: 1px solid #d0e9fb;\n    width: 70px;\n    height: 30px;\n    text-align: center; }\n  .middleDetails .aerineIco {\n    background-color: #f5f7f9;\n    border: 1px solid #e8edf1;\n    border-radius: 50%;\n    width: 30px;\n    height: 30px;\n    position: relative; }\n    .middleDetails .aerineIco img {\n      width: 16px;\n      height: 16px;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      margin: 0; }\n  .middleDetails img {\n    margin: 0 13px;\n    width: 30px; }\n\n.fightDetailsBtns {\n  display: flex;\n  width: 100%;\n  height: 50px;\n  padding: 1rem 0 0 0;\n  font-family: sans-serif; }\n  .fightDetailsBtns .detailBag {\n    width: 65%;\n    align-items: center;\n    justify-content: space-around;\n    vertical-align: middle;\n    display: flex; }\n    .fightDetailsBtns .detailBag div {\n      background-color: #f5f7f9;\n      border: 1px solid #e8edf1;\n      height: 30px;\n      width: max-content;\n      padding: 5px 10px;\n      font-size: 13px;\n      border-radius: 12px;\n      align-items: center;\n      justify-content: space-around;\n      vertical-align: middle;\n      display: flex; }\n      .fightDetailsBtns .detailBag div img {\n        width: 15px; }\n      .fightDetailsBtns .detailBag div span {\n        margin-left: 5px;\n        font-weight: 700; }\n  .fightDetailsBtns .detailInform {\n    width: 35%;\n    align-items: center;\n    justify-content: space-around;\n    display: flex; }\n    .fightDetailsBtns .detailInform div {\n      height: 30px;\n      width: max-content;\n      padding: 5px 10px;\n      font-size: 13px;\n      align-items: center;\n      justify-content: right;\n      vertical-align: middle;\n      display: flex;\n      font-weight: 700;\n      border-radius: 5px; }\n      .fightDetailsBtns .detailInform div:hover {\n        background-color: #f5f7f9;\n        border: 1px solid #e8edf1;\n        cursor: pointer; }\n\n.nightIn {\n  text-align: center;\n  font-size: 12px;\n  font-family: sans-serif;\n  font-weight: 700;\n  margin: 10px 0; }\n\n.modal {\n  color: #2e353b; }\n\n.modal-header h5 {\n  font-size: 28px;\n  font-weight: 700;\n  line-height: 36px; }\n\n.modal-body {\n  background-color: #f5f7f9;\n  padding: 1rem 1rem 2rem 1rem; }\n  .modal-body h2 {\n    font-size: 16px;\n    font-weight: 700;\n    height: 35px;\n    margin-top: 20px; }\n  .modal-body .modalCalendarIco {\n    width: 20px;\n    height: 20px;\n    margin: -5px 0; }\n  .modal-body .modalDetailsRow {\n    width: 100%;\n    height: 40px; }\n    .modal-body .modalDetailsRow .first {\n      width: 30%;\n      border-right: 2px dotted #d0d4d8; }\n    .modal-body .modalDetailsRow .second {\n      width: 70%; }\n\n.flightDeatilsModal {\n  background: white;\n  border-radius: 3px;\n  -webkit-box-shadow: 0px 0px 4px 0px #757575;\n  -moz-box-shadow: 0px 0px 4px 0px #757575;\n  box-shadow: 0px 0px 4px 0px #757575;\n  font-size: 14px; }\n\n.row {\n  margin-left: 0; }\n\n.first.modalDetailsRow {\n  background-color: white; }\n  .first.modalDetailsRow .first {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .first.modalDetailsRow .first p {\n      text-align: center;\n      line-height: 2;\n      font-weight: 700; }\n\n.modalDateDay {\n  line-height: 2;\n  font-size: 13px;\n  padding: 2px 0;\n  display: inline-block;\n  font-weight: 700; }\n\n.modalCity {\n  font-weight: 700;\n  font-size: 13px;\n  margin: 5px 0; }\n\n.modalAirportName {\n  font-size: 12px;\n  font-weight: 500;\n  color: #5f738c; }\n\n.modalDetailsRow.second {\n  background-color: #e8f4fd;\n  color: #0172cb;\n  font-size: 13px;\n  height: 30px; }\n  .modalDetailsRow.second p {\n    line-height: 2.2; }\n\n.modalDetailsRow.third {\n  background-color: #f5f7f9;\n  cursor: pointer; }\n  .modalDetailsRow.third .first {\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n    .modalDetailsRow.third .first img {\n      width: 24px;\n      height: 24px; }\n  .modalDetailsRow.third .second {\n    display: flex;\n    align-items: center; }\n    .modalDetailsRow.third .second p {\n      width: 45%;\n      text-align: end; }\n  .modalDetailsRow.third .modal3Aerlinename {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 12px;\n    height: 24px;\n    width: max-content;\n    padding: 0 10px;\n    background: white;\n    margin-right: 10px; }\n    .modalDetailsRow.third .modal3Aerlinename span {\n      line-height: 14px;\n      font-size: 12px;\n      font-weight: 700; }\n  .modalDetailsRow.third .modal3flightTime {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 12px;\n    height: 24px;\n    width: max-content;\n    padding: 0 10px;\n    background: #e8f4fd;\n    color: #005aa3;\n    border: 1px solid #d0e9fb; }\n    .modalDetailsRow.third .modal3flightTime span {\n      line-height: 14px;\n      font-size: 12px;\n      font-weight: 700; }\n\n.modalDetailsRow.collapse {\n  height: 100%;\n  background-color: #f5f7f9; }\n  .modalDetailsRow.collapse h4 {\n    margin: 16px 0px 12px;\n    font-weight: 700;\n    font-size: 13px; }\n  .modalDetailsRow.collapse .infoLine {\n    display: flex; }\n    .modalDetailsRow.collapse .infoLine .first, .modalDetailsRow.collapse .infoLine .second {\n      width: 50%;\n      margin-bottom: 8px;\n      color: #5f738c;\n      font-size: 12px;\n      border: none; }\n      .modalDetailsRow.collapse .infoLine .first img, .modalDetailsRow.collapse .infoLine .second img {\n        height: 16px;\n        width: 16px;\n        margin: -3px 0; }\n      .modalDetailsRow.collapse .infoLine .first span, .modalDetailsRow.collapse .infoLine .second span {\n        display: inline-block;\n        line-height: 1;\n        padding: 5px; }\n    .modalDetailsRow.collapse .infoLine .second {\n      text-align: end; }\n\n.destitArrive {\n  display: flex;\n  height: 40px;\n  margin-top: 10px; }\n  .destitArrive .destitArriveIco {\n    display: flex;\n    justify-content: left;\n    align-items: center;\n    width: 6%; }\n    .destitArrive .destitArriveIco img {\n      width: 20px;\n      height: 20px; }\n  .destitArrive .destitArriveTxt {\n    width: 90%; }\n    .destitArrive .destitArriveTxt .destitArriveTxtUp {\n      font-size: 12px;\n      color: #5f738c;\n      line-height: 16px;\n      line-height: 1.5; }\n    .destitArrive .destitArriveTxt .destitArriveTxtDown {\n      font-size: 13px;\n      font-weight: 700;\n      line-height: 1.5; }\n    .destitArrive .destitArriveTxt .destitArriveTxtDown.destitArriveTxtDownOne {\n      line-height: 3.3; }\n    .destitArrive .destitArriveTxt a {\n      text-decoration: underline;\n      font-size: 13px;\n      outline: none;\n      color: inherit;\n      cursor: pointer; }\n      .destitArrive .destitArriveTxt a:hover {\n        text-decoration: none;\n        color: #009882; }\n      .destitArrive .destitArriveTxt a img {\n        width: 80px;\n        display: inline-block;\n        margin: -5px 5px; }\n\n.modal-footer .btn {\n  background-color: #008f7b;\n  color: white; }\n  .modal-footer .btn:hover {\n    background-color: #009882; }\n\nheader {\n  background-color: white;\n  color: #111236;\n  width: 100%;\n  height: 115px; }\n  header .container {\n    height: 115px; }\n    header .container .col-md-6 {\n      height: 115px; }\n      header .container .col-md-6 nav {\n        width: 100%;\n        height: 35px; }\n\n.logoBlock {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: left;\n  height: 80px; }\n  .logoBlock img {\n    width: 180px;\n    height: 35px;\n    cursor: pointer; }\n\n.navBtn {\n  border-radius: 0;\n  margin-left: 10px;\n  border-top-left-radius: .25rem;\n  border-top-right-radius: .25rem;\n  background-color: #0770e3;\n  color: #fff;\n  font-weight: 700;\n  text-align: center;\n  text-decoration: none;\n  width: 115px;\n  height: 35px; }\n  .navBtn img {\n    width: 18px;\n    height: 18px; }\n  .navBtn:hover {\n    color: white;\n    background-color: #042759; }\n\n.navBtn.active {\n  color: white;\n  background-color: #042759; }\n\n.locationCurrencyBlock {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: flex-end;\n  height: 80px; }\n  .locationCurrencyBlock .logInBtn {\n    color: #0770e3;\n    text-decoration: none;\n    outline: none;\n    font-weight: 700;\n    line-height: 1.5rem;\n    text-align: center;\n    width: 95px;\n    height: 40px;\n    padding: .375rem .125rem;\n    border-radius: .25rem;\n    border: 2px solid #efefef;\n    font-size: 20px; }\n    .locationCurrencyBlock .logInBtn:hover {\n      border: 2px solid #0770e3; }\n  .locationCurrencyBlock .headerModalBtn {\n    color: #444560;\n    line-height: 1.5rem;\n    text-align: center;\n    width: max-content;\n    height: 40px;\n    border-radius: .25rem;\n    border: 2px solid #efefef;\n    font-size: 20px;\n    margin-right: 40px; }\n    .locationCurrencyBlock .headerModalBtn:hover {\n      border: 2px solid #0770e3; }\n    .locationCurrencyBlock .headerModalBtn img {\n      width: 15px;\n      height: 11px;\n      margin-right: 5px; }\n    .locationCurrencyBlock .headerModalBtn .countryName {\n      font-size: 13px;\n      margin-right: 10px; }\n    .locationCurrencyBlock .headerModalBtn .currencyView {\n      font-size: 13px;\n      color: #b2b2bf; }\n\n.regionalsettings div {\n  display: flex;\n  align-items: center;\n  height: 45px; }\n  .regionalsettings div img {\n    width: 24px;\n    height: 24px; }\n  .regionalsettings div span {\n    font-size: 13px;\n    font-weight: 700;\n    margin-left: 5px; }\n\n.regionalsettings p {\n  font-size: .75rem;\n  line-height: 1.125rem;\n  font-weight: 400;\n  letter-spacing: normal; }\n\n.modal-body-header {\n  background-color: white; }\n\n.closeBtnModal {\n  color: #b2b2bf !important;\n  background-color: white !important;\n  border: 2px solid #b2b2bf !important;\n  font-size: 15px; }\n  .closeBtnModal:hover {\n    border: 2px solid #009882 !important;\n    color: #009882 !important; }\n\n.bookingDetailsWrapper {\n  width: 100%;\n  height: 100%;\n  display: none;\n  color: #2e353b;\n  background-color: #e9e9e9;\n  padding: 30px 0; }\n\n.routeDetails {\n  font-size: 40px;\n  font-weight: 700;\n  padding: 25px 0; }\n\n.col-md-8.ticketDetails, .contactEmailBlock {\n  background-color: white;\n  border-radius: 5px;\n  border: 1pz solid lightgray;\n  padding: 20px;\n  margin-bottom: 20px; }\n\n.ticketSummary {\n  font-size: 16px;\n  font-weight: 700;\n  padding-bottom: 20px; }\n\n.ticketsBlocks {\n  border-right: 1px solid lightgray; }\n\n.departTime {\n  color: #57626c;\n  font-size: 12px;\n  padding-bottom: 10px; }\n\n.col-sm-12.detailsBlock {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  .col-sm-12.detailsBlock .economy {\n    line-height: 1;\n    align-items: center;\n    min-height: 24px;\n    font-size: 12px;\n    background-color: #e8f4fd;\n    color: #005aa3;\n    border-radius: 12px;\n    padding: 5px 8px;\n    border: 1px solid #d0e9fb; }\n\n.details {\n  padding: 10px 0; }\n  .details img {\n    width: 20px;\n    height: 20px;\n    margin: -5px 0; }\n  .details span {\n    font-weight: 700;\n    display: inline-block; }\n\n.col-sm-12.txtBlock {\n  padding: 0 5%;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid lightgrey; }\n  .col-sm-12.txtBlock .col-sm-4 {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end; }\n    .col-sm-12.txtBlock .col-sm-4 img {\n      width: 28px;\n      height: 28px; }\n  .col-sm-12.txtBlock .col-sm-8 {\n    padding: 10px 0; }\n    .col-sm-12.txtBlock .col-sm-8 p {\n      line-height: 16px;\n      font-size: 14px; }\n      .col-sm-12.txtBlock .col-sm-8 p span {\n        color: #7c8b99; }\n\n.flightnumber {\n  padding: 10px 3px;\n  display: flex;\n  align-items: center; }\n  .flightnumber img {\n    width: 16px;\n    height: 16px;\n    border-radius: 2px;\n    margin-right: 10px; }\n  .flightnumber span {\n    color: #7c8b99;\n    font-size: 12px; }\n\n.priceContainer {\n  padding: 20px 10px;\n  font-size: 20px; }\n  .priceContainer div {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n    .priceContainer div span {\n      line-height: 3; }\n\n.btnConfirm {\n  background-color: #00a698;\n  color: white;\n  border-radius: 5px;\n  padding: 5px 10px;\n  cursor: pointer;\n  margin: 10px 0; }\n  .btnConfirm:hover {\n    background-color: #0a998d; }\n\n.contactEmailBlock h4 {\n  font-size: 16px;\n  font-weight: 700;\n  color: #252a31;\n  line-height: 24px;\n  margin-bottom: 20px; }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 4 */
/***/ ((module) => {

"use strict";


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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _view_flightSearchView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _model_flightSearchMolel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
;



const searchFrom = document.getElementById('searchFrom');
const searchTo = document.getElementById('searchTo');
const flightSearchModel = new _model_flightSearchMolel__WEBPACK_IMPORTED_MODULE_2__.FlightSearchModel();
const view = new _view_flightSearchView__WEBPACK_IMPORTED_MODULE_1__.FlightSearchView();
const flightSearchClass = new _apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.FlightSearchClass();

searchFrom.addEventListener('keyup', (e) => {
    flightSearchClass.getAirports(e.target.value);
    view.paintSearchList(document.querySelector('.airportSearchFrom'));
});
searchFrom.addEventListener('focus', () => {
    document.querySelector('.airportSearchTo').innerHTML = '';
    searchFrom.value = '';
    flightSearchClass.getAirports(document.getElementById('selectCountry').value);
    view.paintSearchList(document.querySelector('.airportSearchFrom'));
});
searchTo.addEventListener('keyup', (e) => {
    flightSearchClass.getAirports(e.target.value);
    view.paintSearchList(document.querySelector('.airportSearchTo'));
});
searchTo.addEventListener('focus', () => {
    document.querySelector('.airportSearchFrom').innerHTML = '';
    searchTo.value = '';
    flightSearchClass.getAirports(document.getElementById('selectCountry').value);
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
    document.querySelector('.bookingWrapper').style.display = 'block';
    document.querySelector('.wrapperSearch').classList.add('bookingMood');
    if (flightSearchModel.ifChecked() === '1') {
        let dateFrom = document.getElementById('departDate').value;
        dateFrom = `${dateFrom.slice(8, 10)}%2F${dateFrom.slice(5, 7)}%2F${dateFrom.slice(0, 4)}`;
        flightSearchClass.getAirplinesListOneWay(_view_flightSearchView__WEBPACK_IMPORTED_MODULE_1__.fromAirport.PlaceId, _view_flightSearchView__WEBPACK_IMPORTED_MODULE_1__.toAirport.PlaceId, dateFrom, document.getElementById('adultsCount').value, document.getElementById('childCount').value, document.getElementById('selectCurrency').value);
    } else if (flightSearchModel.ifChecked() === '2') {
        let dateFrom = document.getElementById('departDate').value;
        let dateTo = document.getElementById('returnDate').value;
        dateFrom = `${dateFrom.slice(8, 10)}%2F${dateFrom.slice(5, 7)}%2F${dateFrom.slice(0, 4)}`;
        dateTo = `${dateTo.slice(8, 10)}%2F${dateTo.slice(5, 7)}%2F${dateTo.slice(0, 4)}`;
        flightSearchClass.getAirplinesListReturn(_view_flightSearchView__WEBPACK_IMPORTED_MODULE_1__.fromAirport.PlaceId, _view_flightSearchView__WEBPACK_IMPORTED_MODULE_1__.toAirport.PlaceId, dateFrom, dateTo, document.getElementById('adultsCount').value, document.getElementById('childCount').value, document.getElementById('selectCurrency').value, flightSearchModel.calculateDays(document.getElementById('departDate').value, document.getElementById('returnDate').value));
    }
});


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchAirportList": () => /* binding */ searchAirportList,
/* harmony export */   "flightResult": () => /* binding */ flightResult,
/* harmony export */   "FlightSearchClass": () => /* binding */ FlightSearchClass
/* harmony export */ });
/* harmony import */ var _scripts_flightResult_view_flightResultView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
;

let searchAirportList;
let flightResult;

const flightResultView = new _scripts_flightResult_view_flightResultView__WEBPACK_IMPORTED_MODULE_0__.FlightResultView();
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
                let a = [];
                a = JSON.parse(localStorage.getItem('search')) || [];
                if (a.length < 4) {
                    a.push(this.data);
                } else {
                    a.shift();
                    a.push(this.data);
                }
                localStorage.setItem('search', JSON.stringify(a));
                flightResult = this.data;
                document.querySelector('.lds-ripple').style.display = 'none';
                flightResultView.paintSearchDataBlocks('oneway');
            } else {
                throw Error(this.data.Message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getAirplinesListReturn(from, to, datefrom, dateto, adults, children, currency, daysCount) {
        try {
            this.res = await fetch(`https://tequila-api.kiwi.com/v2/search?fly_from=${from}&fly_to=${to}&date_from=${datefrom}&date_to=${datefrom}&return_from=${dateto}&return_to=${dateto}&nights_in_dst_from=${daysCount}&nights_in_dst_to=${daysCount}&flight_type=round&adults=${adults}&children=${children}&selected_cabins=M&only_working_days=false&only_weekends=false&partner_market=ua&curr=${currency}&vehicle_type=aircraft`, {
                headers: {
                    Accept: 'application/json',
                    Apikey: '-d9YzR50PN8Qh_4UZCwoDO2abTqdVGm1',
                },
            });
            this.data = await this.res.json();
            if (this.data) {
                let a = [];
                a = JSON.parse(localStorage.getItem('search')) || [];
                a.push(this.data);
                localStorage.setItem('search', JSON.stringify(a));
                flightResult = this.data;
                document.querySelector('.lds-ripple').style.display = 'none';
                flightResultView.paintSearchDataBlocks('return');
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlightResultView": () => /* binding */ FlightResultView
/* harmony export */ });
/* harmony import */ var _apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _model_flightresultModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
;


const flightResultModel = new _model_flightresultModel__WEBPACK_IMPORTED_MODULE_1__.FlightResultModel();
const FlightResultView = class {
    paintSearchDataBlocks(value) {
        document.querySelector('.bookingWrapper').innerHTML = '<div class="bookingFlex"><div class="bookingFlexContent"></div><div class="bookingFlexContent" id="contentResult"></div><div class="bookingFlexContent"></div></div>';
        if (value === 'oneway') {
            this.paintSearchDataOne();
        } else {
            this.paintSearchDataReturn();
        }
    }

    paintSearchDataReturn() {
        document.getElementById('contentResult').innerHTML = '';
        if (_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data.length > 30) {
            flightResultModel.paintResultView(30);
        } else {
            flightResultModel.paintResultView(_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data.length);
        }
    }

    paintSearchDataOne() {
        document.getElementById('contentResult').innerHTML = '';
        if (_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data.length > 30) {
            flightResultModel.paintResultViewOne(30);
        } else {
            flightResultModel.paintResultViewOne(_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data.length);
        }
    }
};


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chooseTicket": () => /* binding */ chooseTicket,
/* harmony export */   "FlightResultModel": () => /* binding */ FlightResultModel
/* harmony export */ });
/* harmony import */ var _apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _apis_airportsName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _flightSearch_model_flightSearchMolel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _apis_country__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
;




let chooseTicket;

const json = __webpack_require__(13);

const flightSearchModel = new _flightSearch_model_flightSearchMolel__WEBPACK_IMPORTED_MODULE_2__.FlightSearchModel();
const FlightResultModel = class {
    paintResultView(num) {
        for (let i = 0; i < num; i += 1) {
            const dateDepTo = new Date(_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].route[0].local_departure);
            const dateDTo = dateDepTo.toDateString();
            const timeDepTo = dateDepTo.toTimeString();
            const dateDepArr = new Date(_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].route[0].local_arrival);
            const dateDArr = dateDepArr.toDateString();
            const timeDepArr = dateDepArr.toTimeString();

            const dateDepFrom = new Date(_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].route[1].local_departure);
            const dateDFrom = dateDepFrom.toDateString();
            const timeDepFrom = dateDepFrom.toTimeString();
            const dateFromArr = new Date(_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].route[1].local_arrival);
            const dateFArr = dateFromArr.toDateString();
            const timeFromArr = dateFromArr.toTimeString();

            const div = document.createElement('div');
            div.classList.add('dataBlock', 'dataBlockReturn');
            div.setAttribute('data-bs-toggle', 'modal');
            div.setAttribute('data-bs-target', '#detailsModal');
            // eslint-disable-next-line no-loop-func
            div.addEventListener('click', () => {
                chooseTicket = _apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i];
                this.paintModalReturn(_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i], dateDTo, timeDepTo, timeDepArr, dateDepArr, dateDepFrom, dateDFrom, timeDepFrom, timeFromArr);
            });
            div.innerHTML += `
            <div class="firstBlock">
                <p class="yearTime">${dateDTo.slice(0, 3)}, ${dateDTo.slice(8, 10)} ${dateDTo.slice(4, 7)}</p>
                <div class="flightDetails">
                    <div class="routeIco">
                        <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/%D0%91%D0%B5%D0%B7%20%D1%96%D0%BC%D0%B5%D0%BD%D1%96.png?alt=media&token=1cba4112-0dfe-4f6d-aa63-a931be23be53">
                    </div>
                    <div class="information">
                        <p><strong>${timeDepTo.slice(0, 2)}:${timeDepTo.slice(3, 5)} ${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].route[0].cityFrom}</strong><span> ${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].route[0].cityCodeFrom}</span></p>
                        <div class="middleDetails">
                            <div class="detailDuration"><span>${this.secondsInHours(_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].duration.departure)}</span></div>
                                <img src="https://images.kiwi.com/airlines/64/${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].route[0].airline}.png">
                                <div class="aerineIco">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/flyretrn.png?alt=media&token=ad575298-c57b-4a78-a3b4-0759fcbca042">
                            </div>
                        </div>
                        <p><strong>${timeDepArr.slice(0, 2)}:${timeDepArr.slice(3, 5)} ${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].route[0].cityTo}</strong><span> ${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].route[0].cityCodeTo}</span></p>
                    </div>
                </div>
                <p class="yearTime" style="color:rgb(95, 115, 140); padding-bottom:10px;">${dateDArr.slice(0, 3)}, ${dateDArr.slice(8, 10)} ${dateDArr.slice(4, 7)}</p>
                
                <p class="nightIn">${flightSearchModel.calculateDays(dateDepArr, dateDepFrom)} nights in ${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].route[0].cityTo}</p>
                
                <p class="yearTime">${dateDFrom.slice(0, 3)}, ${dateDFrom.slice(8, 10)} ${dateDFrom.slice(4, 7)}</p>
                <div class="flightDetails">
                    <div class="routeIco">
                        <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/%D0%91%D0%B5%D0%B7%20%D1%96%D0%BC%D0%B5%D0%BD%D1%96.png?alt=media&token=1cba4112-0dfe-4f6d-aa63-a931be23be53">
                    </div>
                    <div class="information">
                        <p><strong>${timeDepFrom.slice(0, 2)}:${timeDepFrom.slice(3, 5)} ${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].route[1].cityFrom}</strong><span> ${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].route[1].cityCodeFrom}</span></p>
                        <div class="middleDetails">
                            <div class="detailDuration"><span>${this.secondsInHours(_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].duration.return)}</span></div>
                                <img src="https://images.kiwi.com/airlines/64/${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].route[1].airline}.png">
                                <div class="aerineIco">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/flyretrn.png?alt=media&token=ad575298-c57b-4a78-a3b4-0759fcbca042">
                            </div>
                        </div>
                        <p><strong>${timeFromArr.slice(0, 2)}:${timeFromArr.slice(3, 5)} ${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].route[1].cityTo}</strong><span> ${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].route[1].cityCodeTo}</span></p>
                    </div>
                </div>
                <p class="yearTime" style="color:rgb(95, 115, 140); border-bottom: 1px solid lightgray; padding-bottom:10px;">${dateFArr.slice(0, 3)}, ${dateFArr.slice(8, 10)} ${dateFArr.slice(4, 7)}</p>
                <div class="fightDetailsBtns">
                    <div class="detailBag">
                        <div><span>Economy</span></div>
                        <div><img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/handbag.png?alt=media&token=e249d143-4f28-4960-981e-7e7643443a57"><span>${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].baglimit.hand_weight}kg</span></div>
                        <div><img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/suitcase.png?alt=media&token=13e999bb-e561-42be-a0ff-ec64d9501347"><span>${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].baglimit.hold_weight}kg</span></div>
                    </div>
                    <div class="detailInform">
                        <div><span class="btn">Show more</span></div>
                    </div>
                </div>
            </div>
            <div class="priceBlock">
                <div style="height:415px;">
                    <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/star.png?alt=media&token=55f97bd9-a67e-4342-af57-cfd41d1de5a4">
                    <p>${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].price}${this.countryCurrency()}</p>
                </div>
                <div class="btn bookbtn"><span>Book</span></div>
            </div>`;
            document.getElementById('contentResult').appendChild(div);
        }
    }

    paintResultViewOne(num) {
        for (let i = 0; i < num; i += 1) {
            const date = new Date(_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].local_departure);
            const dateDep = date.toDateString();
            const time = date.toTimeString();
            const dateTo = new Date(_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].local_arrival);
            const dateTodate = dateTo.toDateString();
            const timeTo = dateTo.toTimeString();

            const div = document.createElement('div');
            div.classList.add('dataBlock', 'dataBlockOne');
            div.setAttribute('data-bs-toggle', 'modal');
            div.setAttribute('data-bs-target', '#detailsModal');
            // eslint-disable-next-line no-loop-func
            div.addEventListener('click', () => {
                chooseTicket = _apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i];
                this.paintModalOneway(_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i], dateDep, time, timeTo);
            });
            div.innerHTML += `<div class="firstBlock">
                <p class="yearTime">${dateDep.slice(0, 3)}, ${dateDep.slice(8, 10)} ${dateDep.slice(4, 7)}</p>
                <div class="flightDetails">
                <div class="routeIco">
                    <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/%D0%91%D0%B5%D0%B7%20%D1%96%D0%BC%D0%B5%D0%BD%D1%96.png?alt=media&token=1cba4112-0dfe-4f6d-aa63-a931be23be53">
                </div>
                <div class="information">
                    <p><strong>${time.slice(0, 2)}:${time.slice(3, 5)} ${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].cityFrom}</strong><span> ${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].cityCodeFrom}</span></p>
                    <div class="middleDetails">
                    <div class="detailDuration"><span>${this.secondsInHours(_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].duration.departure)}</span></div>
                    <img src="https://images.kiwi.com/airlines/64/${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].airlines[0]}.png">
                    <div class="aerineIco">
                    <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/flyretrn.png?alt=media&token=ad575298-c57b-4a78-a3b4-0759fcbca042">
                    </div>
                    </div>
                <p><strong>${timeTo.slice(0, 2)}:${timeTo.slice(3, 5)} ${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].cityTo}</strong><span> ${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].cityCodeTo}</span></p>
                </div>
            </div>
            <p class="yearTime" style="color:rgb(95, 115, 140); border-bottom: 1px solid lightgray; padding-bottom:10px;">${dateTodate.slice(0, 3)}, ${dateTodate.slice(8, 10)} ${dateTodate.slice(4, 7)}</p>
            <div class="fightDetailsBtns">
                <div class="detailBag">
                    <div><span>Economy</span></div>
                    <div><img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/handbag.png?alt=media&token=e249d143-4f28-4960-981e-7e7643443a57"><span>${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].baglimit.hand_weight}kg</span></div>
                    <div><img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/suitcase.png?alt=media&token=13e999bb-e561-42be-a0ff-ec64d9501347"><span>${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].baglimit.hold_weight}kg</span></div>
                </div>
                <div class="detailInform">
                <div><spanclass="btn">Show more</spanclass=></div>
                </div>
                </div>
            </div>
            <div class="priceBlock">
                <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/star.png?alt=media&token=55f97bd9-a67e-4342-af57-cfd41d1de5a4">
                    <p>${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.data[i].price}${this.countryCurrency()}</p>
                </div>
                <div class="bookbtn btn"><span>Book</span></div>
            </div>
            </div>`;
            document.getElementById('contentResult').appendChild(div);
        }
    }

    countryCurrency() {
        let symbol;
        _apis_country__WEBPACK_IMPORTED_MODULE_3__.country.forEach((item) => {
            if (item.currencies[0].code === _apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.flightResult.currency) {
                symbol = item.currencies[0].symbol;
            }
        });
        return symbol;
    }

    secondsInHours(num) {
        const hours = Math.floor(num / 3600);
        // eslint-disable-next-line no-param-reassign
        num %= 3600;
        const minutes = Math.floor(num / 60);
        return `${hours}h ${minutes}m`;
    }

    jsonSearch(value) {
        let jsonname;
        json.forEach((elem) => {
            if (elem.iata === value) {
                jsonname = elem.name;
            }
        });
        return jsonname;
    }

    paintModalOneway(data, dateDep, time, timeTo) {
        document.querySelector('.modal-body').innerHTML = '';
        document.querySelector('.modal-body').innerHTML = `
            <h2>To ${data.route[0].cityTo}</h2>
            <img class="modalCalendarIco" src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/calendar.png?alt=media&token=a6eb755d-4827-4444-a2d7-4c079af0275c">
            <span class="modalDateDay">${dateDep.slice(0, 3)}, ${dateDep.slice(8, 10)} ${dateDep.slice(4, 7)}</span>
            <div class="flightDeatilsModal">
                <div class="modalDetailsRow row first">
                    <div class="first">
                        <p>${time.slice(0, 2)}:${time.slice(3, 5)}</p>
                    </div>
                    <div class="second">
                        <p class="modalCity">${data.route[0].cityFrom}</p>
                        <p class="modalAirportName">${_apis_airportsName__WEBPACK_IMPORTED_MODULE_1__.airportsNameFrom} (${data.route[0].cityCodeFrom})</p>
                    </div>
                </div>
                <div class="modalDetailsRow second row">
                    <div class="first"></div>
                    <div class="second">
                        <p>Economy</p>
                    </div>
                </div>
                <div class="modalDetailsRow third row" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <div class="first">
                        <img src="https://images.kiwi.com/airlines/64/${data.route[0].airline}.png">
                    </div>
                    <div class="second">
                        <div class="modal3Aerlinename"><span>${this.jsonSearch(data.route[0].airline)}</span></div>
                        <div class="modal3flightTime"><span>${this.secondsInHours(data.duration.departure)}</span></div>
                        <p>▼</p>
                    </div>
                </div>
                <div class="collapse row modalDetailsRow" id="collapseExample">
                    <div class="first"></div>
                    <div class="second">
                        <h4>Connection info</h4>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://images.kiwi.com/airlines/64/${data.route[0].airline}.png">
                                <span>Aerline</span>
                            </div>
                            <div class="second">
                                <p>${this.jsonSearch(data.route[0].airline)}</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-info-48.png?alt=media&token=f4b644a0-117b-4c53-90d7-396d5fe74969">
                                <span>Flight no</span>
                            </div>
                            <div class="second">
                                <p>${data.route[0].airline} ${data.route[0].flight_no}</p>
                            </div>
                        </div>
                        <h4>Seating info</h4>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-flight-seat-128.png?alt=media&token=8a6e4a5f-4a00-41e8-9a3c-6a41b71cdb5b">
                                <span>Seat pitch</span>
                            </div>
                            <div class="second">
                                <p>78 cm</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-flight-seat-128.png?alt=media&token=8a6e4a5f-4a00-41e8-9a3c-6a41b71cdb5b">
                                <span>Seat width</span>
                            </div>
                            <div class="second">
                                <p>48 cm</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-flight-seat-128.png?alt=media&token=8a6e4a5f-4a00-41e8-9a3c-6a41b71cdb5b">
                                <span>Seat recline</span>
                            </div>
                            <div class="second">
                                <p>7 cm</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-wi-fi-48.png?alt=media&token=8f7892fa-ba65-4175-a579-a866c7f40d54">
                                <span>Wi-Fi on board</span>
                            </div>
                            <div class="second">
                                <p>No</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modalDetailsRow row first">
                    <div class="first">
                        <p>${timeTo.slice(0, 2)}:${timeTo.slice(3, 5)}</p>
                    </div>
                    <div class="second">
                        <p class="modalCity">${this.jsonSearch(data.route[0].airline)}</p>
                        <p class="modalAirportName">${_apis_airportsName__WEBPACK_IMPORTED_MODULE_1__.airportsNameTo} (${data.route[0].cityCodeTo})</p>
                    </div>
                </div>
            </div>
            <div class="destitArrive">
                <div class="destitArriveIco">
                    <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-point-of-interest-48.png?alt=media&token=ffc3eacb-6e98-40bf-86ed-da50c1f0873d">
                </div>
                <div class="destitArriveTxt">
                    <p class="destitArriveTxtUp">Arrive at destination</p>
                    <p class="destitArriveTxtDown">${data.route[0].cityTo}</p>
                </div>
            </div>`;
    }

    paintModalReturn(data, dateDTo, timeDepTo, timeDepArr, dateDepArr, dateDepFrom, dateDFrom, timeDepFrom, timeFromArr) {
        document.querySelector('.modal-body').innerHTML = '';
        document.querySelector('.modal-body').innerHTML = `
            <h2>To ${data.route[0].cityTo}</h2>
            <img class="modalCalendarIco" src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/calendar.png?alt=media&token=a6eb755d-4827-4444-a2d7-4c079af0275c">
            <span class="modalDateDay">${dateDTo.slice(0, 3)}, ${dateDTo.slice(8, 10)} ${dateDTo.slice(4, 7)}</span>
            <div class="flightDeatilsModal">
                <div class="modalDetailsRow row first">
                    <div class="first">
                        <p>${timeDepTo.slice(0, 2)}:${timeDepTo.slice(3, 5)}</p>
                    </div>
                    <div class="second">
                        <p class="modalCity">${data.route[0].cityFrom}</p>
                        <p class="modalAirportName">${_apis_airportsName__WEBPACK_IMPORTED_MODULE_1__.airportsNameFrom} (${data.route[0].cityCodeFrom})</p>
                    </div>
                </div>
                <div class="modalDetailsRow second row">
                    <div class="first"></div>
                    <div class="second">
                        <p>Economy</p>
                    </div>
                </div>
                <div class="modalDetailsRow third row" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <div class="first">
                        <img src="https://images.kiwi.com/airlines/64/${data.route[0].airline}.png">
                    </div>
                    <div class="second">
                        <div class="modal3Aerlinename"><span>${this.jsonSearch(data.route[0].airline)}</span></div>
                        <div class="modal3flightTime"><span>${this.secondsInHours(data.duration.departure)}</span></div>
                        <p>▼</p>
                    </div>
                </div>
                <div class="collapse row modalDetailsRow" id="collapseExample">
                    <div class="first"></div>
                    <div class="second">
                        <h4>Connection info</h4>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://images.kiwi.com/airlines/64/${data.route[0].airline}.png">
                                <span>Aerline</span>
                            </div>
                            <div class="second">
                                <p>${this.jsonSearch(data.route[0].airline)}</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-info-48.png?alt=media&token=f4b644a0-117b-4c53-90d7-396d5fe74969">
                                <span>Flight no</span>
                            </div>
                            <div class="second">
                                <p>${data.route[0].airline} ${data.route[0].flight_no}</p>
                            </div>
                        </div>
                        <h4>Seating info</h4>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-flight-seat-128.png?alt=media&token=8a6e4a5f-4a00-41e8-9a3c-6a41b71cdb5b">
                                <span>Seat pitch</span>
                            </div>
                            <div class="second">
                                <p>78 cm</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-flight-seat-128.png?alt=media&token=8a6e4a5f-4a00-41e8-9a3c-6a41b71cdb5b">
                                <span>Seat width</span>
                            </div>
                            <div class="second">
                                <p>48 cm</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-flight-seat-128.png?alt=media&token=8a6e4a5f-4a00-41e8-9a3c-6a41b71cdb5b">
                                <span>Seat recline</span>
                            </div>
                            <div class="second">
                                <p>7 cm</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-wi-fi-48.png?alt=media&token=8f7892fa-ba65-4175-a579-a866c7f40d54">
                                <span>Wi-Fi on board</span>
                            </div>
                            <div class="second">
                                <p>No</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modalDetailsRow row first">
                    <div class="first">
                        <p>${timeDepArr.slice(0, 2)}:${timeDepArr.slice(3, 5)}</p>
                    </div>
                    <div class="second">
                        <p class="modalCity">${this.jsonSearch(data.route[0].airline)}</p>
                        <p class="modalAirportName">${_apis_airportsName__WEBPACK_IMPORTED_MODULE_1__.airportsNameTo} (${data.route[0].cityCodeTo})</p>
                    </div>
                </div>
            </div>
            <div class="destitArrive">
                <div class="destitArriveIco">
                    <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-point-of-interest-48.png?alt=media&token=ffc3eacb-6e98-40bf-86ed-da50c1f0873d">
                </div>
                <div class="destitArriveTxt">
                    <p class="destitArriveTxtUp">Arrive at destination</p>
                    <p class="destitArriveTxtDown">${data.route[0].cityTo}</p>
                </div>
            </div>
            <div class="destitArrive">
                <div class="destitArriveIco">
                    <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-empty-bed-100.png?alt=media&token=4ead69b8-18b0-44d9-ba23-b9346de83c1c">
                </div>
                <div class="destitArriveTxt">
                    <p class="destitArriveTxtDown destitArriveTxtDownOne">${flightSearchModel.calculateDays(dateDepArr, dateDepFrom)} nights in destitation</p>
                </div>
            </div>
            <div class="destitArrive">
                <div class="destitArriveIco">
                    <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-external-link-48.png?alt=media&token=b86d2ba6-9b61-4ca2-9feb-9d9c27e74adc">
                </div>
                <div class="destitArriveTxt">
                    <a href="https://www.booking.com/" target=”_blank” class="destitArriveTxtDown destitArriveTxtDownOne">Check accommodation prices  <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/Booking-Logo-PNG.png?alt=media&token=6035f8c9-d861-4e60-aef6-875157738926"></a>
                </div>
            </div>

            <h2>To ${data.route[1].cityTo}</h2>
            <img class="modalCalendarIco" src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/calendar.png?alt=media&token=a6eb755d-4827-4444-a2d7-4c079af0275c">
            <span class="modalDateDay">${dateDFrom.slice(0, 3)}, ${dateDFrom.slice(8, 10)} ${dateDFrom.slice(4, 7)}</span>
            <div class="flightDeatilsModal">
                <div class="modalDetailsRow row first">
                    <div class="first">
                        <p>${timeDepFrom.slice(0, 2)}:${timeDepFrom.slice(3, 5)}</p>
                    </div>
                    <div class="second">
                        <p class="modalCity">${data.route[1].cityFrom}</p>
                        <p class="modalAirportName">${_apis_airportsName__WEBPACK_IMPORTED_MODULE_1__.airportsNameTo} (${data.route[1].cityCodeFrom})</p>
                    </div>
                </div>
                <div class="modalDetailsRow second row">
                    <div class="first"></div>
                    <div class="second">
                        <p>Economy</p>
                    </div>
                </div>
                <div class="modalDetailsRow third row" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <div class="first">
                        <img src="https://images.kiwi.com/airlines/64/${data.route[1].airline}.png">
                    </div>
                    <div class="second">
                        <div class="modal3Aerlinename"><span>${this.jsonSearch(data.route[1].airline)}</span></div>
                        <div class="modal3flightTime"><span>${this.secondsInHours(data.duration.return)}</span></div>
                        <p>▼</p>
                    </div>
                </div>
                <div class="collapse row modalDetailsRow" id="collapseExample">
                    <div class="first"></div>
                    <div class="second">
                        <h4>Connection info</h4>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://images.kiwi.com/airlines/64/${data.route[1].airline}.png">
                                <span>Aerline</span>
                            </div>
                            <div class="second">
                                <p>${this.jsonSearch(data.route[1].airline)}</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-info-48.png?alt=media&token=f4b644a0-117b-4c53-90d7-396d5fe74969">
                                <span>Flight no</span>
                            </div>
                            <div class="second">
                                <p>${data.route[1].airline} ${data.route[1].flight_no}</p>
                            </div>
                        </div>
                        <h4>Seating info</h4>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-flight-seat-128.png?alt=media&token=8a6e4a5f-4a00-41e8-9a3c-6a41b71cdb5b">
                                <span>Seat pitch</span>
                            </div>
                            <div class="second">
                                <p>78 cm</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-flight-seat-128.png?alt=media&token=8a6e4a5f-4a00-41e8-9a3c-6a41b71cdb5b">
                                <span>Seat width</span>
                            </div>
                            <div class="second">
                                <p>48 cm</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-flight-seat-128.png?alt=media&token=8a6e4a5f-4a00-41e8-9a3c-6a41b71cdb5b">
                                <span>Seat recline</span>
                            </div>
                            <div class="second">
                                <p>7 cm</p>
                            </div>
                        </div>
                        <div class="infoLine">
                            <div class="first">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-wi-fi-48.png?alt=media&token=8f7892fa-ba65-4175-a579-a866c7f40d54">
                                <span>Wi-Fi on board</span>
                            </div>
                            <div class="second">
                                <p>No</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modalDetailsRow row first">
                    <div class="first">
                        <p>${timeFromArr.slice(0, 2)}:${timeFromArr.slice(3, 5)}</p>
                    </div>
                    <div class="second">
                        <p class="modalCity">${this.jsonSearch(data.route[1].airline)}</p>
                        <p class="modalAirportName">${_apis_airportsName__WEBPACK_IMPORTED_MODULE_1__.airportsNameFrom} (${data.route[1].cityCodeTo})</p>
                    </div>
                </div>
            </div>
            <div class="destitArrive">
                <div class="destitArriveIco">
                    <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-point-of-interest-48.png?alt=media&token=ffc3eacb-6e98-40bf-86ed-da50c1f0873d">
                </div>
                <div class="destitArriveTxt">
                    <p class="destitArriveTxtUp">Arrive at destination</p>
                    <p class="destitArriveTxtDown">${data.route[1].cityTo}</p>
                </div>
            </div>
            `;
    }
};


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "airportsNameFrom": () => /* binding */ airportsNameFrom,
/* harmony export */   "airportsNameTo": () => /* binding */ airportsNameTo,
/* harmony export */   "AirportNameClass": () => /* binding */ AirportNameClass
/* harmony export */ });
let airportsNameFrom;
let airportsNameTo;

const AirportNameClass = class {
    async getName(elem, iataCode) {
        try {
            this.url = 'https://raw.githubusercontent.com/jbrooksuk/JSON-Airports/master/airports.json';
            this.res = await fetch(this.url);
            this.data = await this.res.json();
            if (this.data) {
                this.data.forEach((element) => {
                    if (element.iata === iataCode) {
                        if (elem === document.querySelector('.airportSearchFrom')) {
                            airportsNameFrom = element.name;
                        } else {
                            airportsNameTo = element.name;
                        }
                    }
                });
            } else {
                throw Error();
            }
        } catch (error) {
            console.log(error);
        }
    }
};


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

    calculateDays(dateFrom, dateTo) {
        const date1 = new Date(dateFrom);
        const date2 = new Date(dateTo);
        let difference = date2.getTime() - date1.getTime();
        difference /= (1000 * 3600 * 24);
        return Math.round(difference);
    }
};


/***/ }),
/* 13 */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("[{\"id\":\"3\",\"name\":\"1Time Airline\",\"alias\":\"\\\\N\",\"iata\":\"1T\",\"icao\":\"RNX\",\"callsign\":\"NEXTIME\",\"country\":\"South Africa\",\"active\":\"Y\"},{\"id\":\"10\",\"name\":\"40-Mile Air\",\"alias\":\"\\\\N\",\"iata\":\"Q5\",\"icao\":\"MLA\",\"callsign\":\"MILE-AIR\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"13\",\"name\":\"Ansett Australia\",\"alias\":\"\\\\N\",\"iata\":\"AN\",\"icao\":\"AAA\",\"callsign\":\"ANSETT\",\"country\":\"Australia\",\"active\":\"Y\"},{\"id\":\"14\",\"name\":\"Abacus International\",\"alias\":\"\\\\N\",\"iata\":\"1B\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Singapore\",\"active\":\"Y\"},{\"id\":\"15\",\"name\":\"Abelag Aviation\",\"alias\":\"\\\\N\",\"iata\":\"W9\",\"icao\":\"AAB\",\"callsign\":\"ABG\",\"country\":\"Belgium\",\"active\":\"N\"},{\"id\":\"21\",\"name\":\"Aigle Azur\",\"alias\":\"\\\\N\",\"iata\":\"ZI\",\"icao\":\"AAF\",\"callsign\":\"AIGLE AZUR\",\"country\":\"France\",\"active\":\"Y\"},{\"id\":\"22\",\"name\":\"Aloha Airlines\",\"alias\":\"\\\\N\",\"iata\":\"AQ\",\"icao\":\"AAH\",\"callsign\":\"ALOHA\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"24\",\"name\":\"American Airlines\",\"alias\":\"\\\\N\",\"iata\":\"AA\",\"icao\":\"AAL\",\"callsign\":\"AMERICAN\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"28\",\"name\":\"Asiana Airlines\",\"alias\":\"\\\\N\",\"iata\":\"OZ\",\"icao\":\"AAR\",\"callsign\":\"ASIANA\",\"country\":\"Republic of Korea\",\"active\":\"Y\"},{\"id\":\"29\",\"name\":\"Askari Aviation\",\"alias\":\"\\\\N\",\"iata\":\"4K\",\"icao\":\"AAS\",\"callsign\":\"AL-AAS\",\"country\":\"Pakistan\",\"active\":\"Y\"},{\"id\":\"32\",\"name\":\"Afriqiyah Airways\",\"alias\":\"\\\\N\",\"iata\":\"8U\",\"icao\":\"AAW\",\"callsign\":\"AFRIQIYAH\",\"country\":\"Libya\",\"active\":\"Y\"},{\"id\":\"33\",\"name\":\"Afrinat International Airlines\",\"alias\":\"\\\\N\",\"iata\":\"Q9\",\"icao\":\"AFU\",\"callsign\":\"\",\"country\":\"Gambia\",\"active\":\"N\"},{\"id\":\"35\",\"name\":\"Allegiant Air\",\"alias\":\"\\\\N\",\"iata\":\"G4\",\"icao\":\"AAY\",\"callsign\":\"ALLEGIANT\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"39\",\"name\":\"Aban Air\",\"alias\":\"\\\\N\",\"iata\":\"K5\",\"icao\":\"ABE\",\"callsign\":\"ABAN\",\"country\":\"Iran\",\"active\":\"n\"},{\"id\":\"42\",\"name\":\"ABSA - Aerolinhas Brasileiras\",\"alias\":\"\\\\N\",\"iata\":\"M3\",\"icao\":\"TUS\",\"callsign\":\"ABSA Cargo\",\"country\":\"Brazil\",\"active\":\"Y\"},{\"id\":\"48\",\"name\":\"Antrak Air\",\"alias\":\"\\\\N\",\"iata\":\"04\",\"icao\":\"ABV\",\"callsign\":\"ANTRAK\",\"country\":\"Ghana\",\"active\":\"N\"},{\"id\":\"49\",\"name\":\"Airborne Express\",\"alias\":\"\\\\N\",\"iata\":\"GB\",\"icao\":\"ABX\",\"callsign\":\"ABEX\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"50\",\"name\":\"ABX Air\",\"alias\":\"\\\\N\",\"iata\":\"GB\",\"icao\":\"ABX\",\"callsign\":\"ABEX\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"55\",\"name\":\"Astral Aviation\",\"alias\":\"\\\\N\",\"iata\":\"8V\",\"icao\":\"ACP\",\"callsign\":\"ASTRAL CARGO\",\"country\":\"Kenya\",\"active\":\"Y\"},{\"id\":\"60\",\"name\":\"Aero Asia International\",\"alias\":\"\\\\N\",\"iata\":\"E4\",\"icao\":\"RSO\",\"callsign\":\"AERO ASIA\",\"country\":\"Pakistan\",\"active\":\"N\"},{\"id\":\"62\",\"name\":\"Air Togo\",\"alias\":\"\\\\N\",\"iata\":\"YT\",\"icao\":\"TGA\",\"callsign\":\"AIR TOGO\",\"country\":\"Togo\",\"active\":\"N\"},{\"id\":\"66\",\"name\":\"Advance Leasing Company\",\"alias\":\"\\\\N\",\"iata\":\"4G\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"67\",\"name\":\"Aztec Worldwide Airlines\",\"alias\":\"\\\\N\",\"iata\":\"7A\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"68\",\"name\":\"Air Tindi\",\"alias\":\"\\\\N\",\"iata\":\"8T\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Canadian Territories\",\"active\":\"Y\"},{\"id\":\"72\",\"name\":\"Ada Air\",\"alias\":\"\\\\N\",\"iata\":\"ZY\",\"icao\":\"ADE\",\"callsign\":\"ADA AIR\",\"country\":\"Albania\",\"active\":\"Y\"},{\"id\":\"76\",\"name\":\"ADC Airlines\",\"alias\":\"\\\\N\",\"iata\":\"Z7\",\"icao\":\"ADK\",\"callsign\":\"ADCO\",\"country\":\"Nigeria\",\"active\":\"N\"},{\"id\":\"83\",\"name\":\"Adria Airways\",\"alias\":\"\\\\N\",\"iata\":\"JP\",\"icao\":\"ADR\",\"callsign\":\"ADRIA\",\"country\":\"Slovenia\",\"active\":\"Y\"},{\"id\":\"90\",\"name\":\"Air Europa\",\"alias\":\"\\\\N\",\"iata\":\"UX\",\"icao\":\"AEA\",\"callsign\":\"EUROPA\",\"country\":\"Spain\",\"active\":\"Y\"},{\"id\":\"96\",\"name\":\"Aegean Airlines\",\"alias\":\"\\\\N\",\"iata\":\"A3\",\"icao\":\"AEE\",\"callsign\":\"AEGEAN\",\"country\":\"Greece\",\"active\":\"Y\"},{\"id\":\"97\",\"name\":\"Aerofumigaciones Sam\",\"alias\":\"\\\\N\",\"iata\":\"0C\",\"icao\":\"AEG\",\"callsign\":\"FUMIGACIONES SAM\",\"country\":\"Chile\",\"active\":\"N\"},{\"id\":\"105\",\"name\":\"Air Atlantique\",\"alias\":\"\\\\N\",\"iata\":\"KI\",\"icao\":\"AAG\",\"callsign\":\"ATLANTIC\",\"country\":\"United Kingdom\",\"active\":\"N\"},{\"id\":\"106\",\"name\":\"Air Europe\",\"alias\":\"\\\\N\",\"iata\":\"PE\",\"icao\":\"AEL\",\"callsign\":\"AIR EUROPE\",\"country\":\"Italy\",\"active\":\"Y\"},{\"id\":\"109\",\"name\":\"Alaska Central Express\",\"alias\":\"\\\\N\",\"iata\":\"KO\",\"icao\":\"AER\",\"callsign\":\"ACE AIR\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"112\",\"name\":\"Astraeus\",\"alias\":\"\\\\N\",\"iata\":\"5W\",\"icao\":\"AEU\",\"callsign\":\"FLYSTAR\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"114\",\"name\":\"Aerosvit Airlines\",\"alias\":\"\\\\N\",\"iata\":\"VV\",\"icao\":\"AEW\",\"callsign\":\"AEROSVIT\",\"country\":\"Ukraine\",\"active\":\"Y\"},{\"id\":\"116\",\"name\":\"Air Italy\",\"alias\":\"\\\\N\",\"iata\":\"I9\",\"icao\":\"AEY\",\"callsign\":\"AIR ITALY\",\"country\":\"Italy\",\"active\":\"Y\"},{\"id\":\"119\",\"name\":\"American Falcon\",\"alias\":\"\\\\N\",\"iata\":\"WK\",\"icao\":\"AFB\",\"callsign\":\"AMERICAN FALCON\",\"country\":\"Argentina\",\"active\":\"N\"},{\"id\":\"120\",\"name\":\"Alliance Airlines\",\"alias\":\"\\\\N\",\"iata\":\"QQ\",\"icao\":\"UTY\",\"callsign\":\"UNITY\",\"country\":\"Australia\",\"active\":\"Y\"},{\"id\":\"125\",\"name\":\"Ariana Afghan Airlines\",\"alias\":\"\\\\N\",\"iata\":\"FG\",\"icao\":\"AFG\",\"callsign\":\"ARIANA\",\"country\":\"Afghanistan\",\"active\":\"Y\"},{\"id\":\"130\",\"name\":\"Aeroflot Russian Airlines\",\"alias\":\"\\\\N\",\"iata\":\"SU\",\"icao\":\"AFL\",\"callsign\":\"AEROFLOT\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"132\",\"name\":\"Air Bosna\",\"alias\":\"\\\\N\",\"iata\":\"JA\",\"icao\":\"BON\",\"callsign\":\"AIR BOSNA\",\"country\":\"Bosnia and Herzegovina\",\"active\":\"Y\"},{\"id\":\"137\",\"name\":\"Air France\",\"alias\":\"\\\\N\",\"iata\":\"AF\",\"icao\":\"AFR\",\"callsign\":\"AIRFRANS\",\"country\":\"France\",\"active\":\"Y\"},{\"id\":\"139\",\"name\":\"Air Caledonie International\",\"alias\":\"\\\\N\",\"iata\":\"SB\",\"icao\":\"ACI\",\"callsign\":\"AIRCALIN\",\"country\":\"France\",\"active\":\"Y\"},{\"id\":\"142\",\"name\":\"Air Gabon\",\"alias\":\"\\\\N\",\"iata\":\"GN\",\"icao\":\"AGN\",\"callsign\":\"GOLF NOVEMBER\",\"country\":\"Gabon\",\"active\":\"N\"},{\"id\":\"146\",\"name\":\"Air Salone\",\"alias\":\"\\\\N\",\"iata\":\"2O\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Sierra Leone\",\"active\":\"Y\"},{\"id\":\"149\",\"name\":\"Air Cargo Carriers\",\"alias\":\"\\\\N\",\"iata\":\"2Q\",\"icao\":\"SNC\",\"callsign\":\"NIGHT CARGO\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"151\",\"name\":\"Air Senegal International\",\"alias\":\"\\\\N\",\"iata\":\"V7\",\"icao\":\"SNG\",\"callsign\":\"AIR SENEGAL\",\"country\":\"Senegal\",\"active\":\"N\"},{\"id\":\"153\",\"name\":\"Air Namibia\",\"alias\":\"\\\\N\",\"iata\":\"SW\",\"icao\":\"NMB\",\"callsign\":\"NAMIBIA\",\"country\":\"Namibia\",\"active\":\"Y\"},{\"id\":\"162\",\"name\":\"Air Service Gabon\",\"alias\":\"\\\\N\",\"iata\":\"G8\",\"icao\":\"AGB\",\"callsign\":\"\",\"country\":\"Gabon\",\"active\":\"N\"},{\"id\":\"165\",\"name\":\"Aerolitoral\",\"alias\":\"\\\\N\",\"iata\":\"5D\",\"icao\":\"SLI\",\"callsign\":\"COSTERA\",\"country\":\"Mexico\",\"active\":\"Y\"},{\"id\":\"172\",\"name\":\"Amadeus Global Travel Distribution\",\"alias\":\"\\\\N\",\"iata\":\"1A\",\"icao\":\"AGT\",\"callsign\":\"AMADEUS\",\"country\":\"Spain\",\"active\":\"N\"},{\"id\":\"174\",\"name\":\"Air Glaciers\",\"alias\":\"\\\\N\",\"iata\":\"7T\",\"icao\":\"AGV\",\"callsign\":\"AIR GLACIERS\",\"country\":\"Switzerland\",\"active\":\"Y\"},{\"id\":\"179\",\"name\":\"Aeroper\",\"alias\":\"\\\\N\",\"iata\":\"PL\",\"icao\":\"PLI\",\"callsign\":\"Aeroperu\",\"country\":\"Peru\",\"active\":\"Y\"},{\"id\":\"180\",\"name\":\"Atlas Blue\",\"alias\":\"\\\\N\",\"iata\":\"8A\",\"icao\":\"BMM\",\"callsign\":\"ATLAS BLUE\",\"country\":\"Morocco\",\"active\":\"Y\"},{\"id\":\"184\",\"name\":\"Air Alpha Greenland\",\"alias\":\"\\\\N\",\"iata\":\"GD\",\"icao\":\"AHA\",\"callsign\":\"AIR ALPHA\",\"country\":\"Denmark\",\"active\":\"N\"},{\"id\":\"191\",\"name\":\"Air Hong Kong\",\"alias\":\"\\\\N\",\"iata\":\"LD\",\"icao\":\"AHK\",\"callsign\":\"AIR HONG KONG\",\"country\":\"Hong Kong\",\"active\":\"N\"},{\"id\":\"196\",\"name\":\"Aeromist-Kharkiv\",\"alias\":\"\\\\N\",\"iata\":\"HT\",\"icao\":\"AHW\",\"callsign\":\"AEROMIST\",\"country\":\"Ukraine\",\"active\":\"N\"},{\"id\":\"197\",\"name\":\"Azerbaijan Airlines\",\"alias\":\"\\\\N\",\"iata\":\"J2\",\"icao\":\"AHY\",\"callsign\":\"AZAL\",\"country\":\"Azerbaijan\",\"active\":\"Y\"},{\"id\":\"198\",\"name\":\"Avies\",\"alias\":\"\\\\N\",\"iata\":\"U3\",\"icao\":\"AIA\",\"callsign\":\"AVIES\",\"country\":\"Estonia\",\"active\":\"Y\"},{\"id\":\"199\",\"name\":\"Airbus Industrie\",\"alias\":\"\\\\N\",\"iata\":\"AP\",\"icao\":\"AIB\",\"callsign\":\"AIRBUS INDUSTRIE\",\"country\":\"France\",\"active\":\"N\"},{\"id\":\"205\",\"name\":\"Alpine Air Express\",\"alias\":\"\\\\N\",\"iata\":\"5A\",\"icao\":\"AIP\",\"callsign\":\"ALPINE AIR\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"208\",\"name\":\"Airblue\",\"alias\":\"\\\\N\",\"iata\":\"ED\",\"icao\":\"ABQ\",\"callsign\":\"PAKBLUE\",\"country\":\"Pakistan\",\"active\":\"Y\"},{\"id\":\"214\",\"name\":\"Air Berlin\",\"alias\":\"\\\\N\",\"iata\":\"AB\",\"icao\":\"BER\",\"callsign\":\"AIR BERLIN\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"216\",\"name\":\"ASL Airlines Ireland\",\"alias\":\"\\\\N\",\"iata\":\"AG\",\"icao\":\"ABR\",\"callsign\":\"CONTRACT\",\"country\":\"Ireland\",\"active\":\"N\"},{\"id\":\"218\",\"name\":\"Air India Limited\",\"alias\":\"\\\\N\",\"iata\":\"AI\",\"icao\":\"AIC\",\"callsign\":\"AIRINDIA\",\"country\":\"India\",\"active\":\"Y\"},{\"id\":\"220\",\"name\":\"Air Bourbon\",\"alias\":\"\\\\N\",\"iata\":\"ZB\",\"icao\":\"BUB\",\"callsign\":\"BOURBON\",\"country\":\"Reunion\",\"active\":\"Y\"},{\"id\":\"221\",\"name\":\"Air Atlanta Icelandic\",\"alias\":\"\\\\N\",\"iata\":\"CC\",\"icao\":\"ABD\",\"callsign\":\"ATLANTA\",\"country\":\"Iceland\",\"active\":\"Y\"},{\"id\":\"224\",\"name\":\"Air Srpska\",\"alias\":\"\\\\N\",\"iata\":\"RB\",\"icao\":\"SBK\",\"callsign\":\"Air Srpska\",\"country\":\"Bosnia and Herzegovina\",\"active\":\"N\"},{\"id\":\"225\",\"name\":\"Air Tahiti Nui\",\"alias\":\"\\\\N\",\"iata\":\"TN\",\"icao\":\"THT\",\"callsign\":\"TAHITI AIRLINES\",\"country\":\"France\",\"active\":\"Y\"},{\"id\":\"227\",\"name\":\"Aero Services Executive\",\"alias\":\"\\\\N\",\"iata\":\"W4\",\"icao\":\"BES\",\"callsign\":\"BIRD EXPRESS\",\"country\":\"France\",\"active\":\"N\"},{\"id\":\"231\",\"name\":\"Arkia Israel Airlines\",\"alias\":\"\\\\N\",\"iata\":\"IZ\",\"icao\":\"AIZ\",\"callsign\":\"ARKIA\",\"country\":\"Israel\",\"active\":\"Y\"},{\"id\":\"239\",\"name\":\"Air Jamaica\",\"alias\":\"\\\\N\",\"iata\":\"JM\",\"icao\":\"AJM\",\"callsign\":\"JAMAICA\",\"country\":\"Jamaica\",\"active\":\"Y\"},{\"id\":\"240\",\"name\":\"Air One\",\"alias\":\"\\\\N\",\"iata\":\"AP\",\"icao\":\"ADH\",\"callsign\":\"HERON\",\"country\":\"Italy\",\"active\":\"Y\"},{\"id\":\"241\",\"name\":\"Air Sahara\",\"alias\":\"\\\\N\",\"iata\":\"S2\",\"icao\":\"RSH\",\"callsign\":\"SAHARA\",\"country\":\"India\",\"active\":\"Y\"},{\"id\":\"242\",\"name\":\"Air Malta\",\"alias\":\"\\\\N\",\"iata\":\"KM\",\"icao\":\"AMC\",\"callsign\":\"AIR MALTA\",\"country\":\"Malta\",\"active\":\"Y\"},{\"id\":\"246\",\"name\":\"Amerijet International\",\"alias\":\"\\\\N\",\"iata\":\"M6\",\"icao\":\"AJT\",\"callsign\":\"AMERIJET\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"250\",\"name\":\"Air Japan\",\"alias\":\"\\\\N\",\"iata\":\"NQ\",\"icao\":\"AJX\",\"callsign\":\"AIR JAPAN\",\"country\":\"Japan\",\"active\":\"Y\"},{\"id\":\"263\",\"name\":\"Air Kiribati\",\"alias\":\"\\\\N\",\"iata\":\"4A\",\"icao\":\"AKL\",\"callsign\":\"\",\"country\":\"Kiribati\",\"active\":\"Y\"},{\"id\":\"266\",\"name\":\"Air Nippon Network Co. Ltd.\",\"alias\":\"\\\\N\",\"iata\":\"EH\",\"icao\":\"AKX\",\"callsign\":\"ALFA WING\",\"country\":\"Japan\",\"active\":\"N\"},{\"id\":\"281\",\"name\":\"America West Airlines\",\"alias\":\"\\\\N\",\"iata\":\"HP\",\"icao\":\"AWE\",\"callsign\":\"CACTUS\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"282\",\"name\":\"Air Wisconsin\",\"alias\":\"\\\\N\",\"iata\":\"ZW\",\"icao\":\"AWI\",\"callsign\":\"AIR WISCONSIN\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"286\",\"name\":\"Tatarstan Airlines\",\"alias\":\"\\\\N\",\"iata\":\"U9\",\"icao\":\"TAK\",\"callsign\":\"TATARSTAN\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"299\",\"name\":\"Air Libert\",\"alias\":\"\\\\N\",\"iata\":\"VD\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"France\",\"active\":\"Y\"},{\"id\":\"300\",\"name\":\"Air Lithuania\",\"alias\":\"\\\\N\",\"iata\":\"TT\",\"icao\":\"KLA\",\"callsign\":\"KAUNAS\",\"country\":\"Lithuania\",\"active\":\"N\"},{\"id\":\"306\",\"name\":\"Air Malawi\",\"alias\":\"\\\\N\",\"iata\":\"QM\",\"icao\":\"AML\",\"callsign\":\"MALAWI\",\"country\":\"Malawi\",\"active\":\"Y\"},{\"id\":\"312\",\"name\":\"Air Sicilia\",\"alias\":\"\\\\N\",\"iata\":\"BM\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Italy\",\"active\":\"Y\"},{\"id\":\"316\",\"name\":\"Air Macau\",\"alias\":\"\\\\N\",\"iata\":\"NX\",\"icao\":\"AMU\",\"callsign\":\"AIR MACAO\",\"country\":\"Macao\",\"active\":\"Y\"},{\"id\":\"318\",\"name\":\"Air Midwest\",\"alias\":\"\\\\N\",\"iata\":\"ZV\",\"icao\":\"AMW\",\"callsign\":\"AIR MIDWEST\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"319\",\"name\":\"Air Seychelles\",\"alias\":\"\\\\N\",\"iata\":\"HM\",\"icao\":\"SEY\",\"callsign\":\"SEYCHELLES\",\"country\":\"Seychelles\",\"active\":\"Y\"},{\"id\":\"321\",\"name\":\"AeroMéxico\",\"alias\":\"\\\\N\",\"iata\":\"AM\",\"icao\":\"AMX\",\"callsign\":\"AEROMEXICO\",\"country\":\"Mexico\",\"active\":\"Y\"},{\"id\":\"324\",\"name\":\"All Nippon Airways\",\"alias\":\"ANA All Nippon Airways\",\"iata\":\"NH\",\"icao\":\"ANA\",\"callsign\":\"ALL NIPPON\",\"country\":\"Japan\",\"active\":\"Y\"},{\"id\":\"327\",\"name\":\"Air Nostrum\",\"alias\":\"\\\\N\",\"iata\":\"YW\",\"icao\":\"ANE\",\"callsign\":\"AIR NOSTRUM\",\"country\":\"Spain\",\"active\":\"Y\"},{\"id\":\"328\",\"name\":\"Air Niugini\",\"alias\":\"\\\\N\",\"iata\":\"PX\",\"icao\":\"ANG\",\"callsign\":\"NUIGINI\",\"country\":\"Papua New Guinea\",\"active\":\"Y\"},{\"id\":\"329\",\"name\":\"Air Arabia\",\"alias\":\"\\\\N\",\"iata\":\"G9\",\"icao\":\"ABY\",\"callsign\":\"ARABIA\",\"country\":\"United Arab Emirates\",\"active\":\"Y\"},{\"id\":\"330\",\"name\":\"Air Canada\",\"alias\":\"\\\\N\",\"iata\":\"AC\",\"icao\":\"ACA\",\"callsign\":\"AIR CANADA\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"333\",\"name\":\"Air Baltic\",\"alias\":\"\\\\N\",\"iata\":\"BT\",\"icao\":\"BTI\",\"callsign\":\"AIRBALTIC\",\"country\":\"Latvia\",\"active\":\"Y\"},{\"id\":\"336\",\"name\":\"Air Nippon\",\"alias\":\"\\\\N\",\"iata\":\"EL\",\"icao\":\"ANK\",\"callsign\":\"ANK AIR\",\"country\":\"Japan\",\"active\":\"Y\"},{\"id\":\"338\",\"name\":\"Airnorth\",\"alias\":\"\\\\N\",\"iata\":\"TL\",\"icao\":\"ANO\",\"callsign\":\"TOPEND\",\"country\":\"Australia\",\"active\":\"Y\"},{\"id\":\"341\",\"name\":\"Air North Charter - Canada\",\"alias\":\"\\\\N\",\"iata\":\"4N\",\"icao\":\"ANT\",\"callsign\":\"AIR NORTH\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"343\",\"name\":\"AOM French Airlines\",\"alias\":\"\\\\N\",\"iata\":\"IW\",\"icao\":\"AOM\",\"callsign\":\"French Lines\",\"country\":\"France\",\"active\":\"N\"},{\"id\":\"345\",\"name\":\"Air New Zealand\",\"alias\":\"\\\\N\",\"iata\":\"NZ\",\"icao\":\"ANZ\",\"callsign\":\"NEW ZEALAND\",\"country\":\"New Zealand\",\"active\":\"Y\"},{\"id\":\"349\",\"name\":\"AVCOM\",\"alias\":\"\\\\N\",\"iata\":\"J6\",\"icao\":\"AOC\",\"callsign\":\"AERO AVCOM\",\"country\":\"Russia\",\"active\":\"N\"},{\"id\":\"353\",\"name\":\"Aero VIP\",\"alias\":\"\\\\N\",\"iata\":\"2D\",\"icao\":\"AOG\",\"callsign\":\"AVIP\",\"country\":\"Argentina\",\"active\":\"N\"},{\"id\":\"368\",\"name\":\"Air Vegas\",\"alias\":\"\\\\N\",\"iata\":\"6V\",\"icao\":\"VGA\",\"callsign\":\"AIR VEGAS\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"371\",\"name\":\"Alitalia Express\",\"alias\":\"\\\\N\",\"iata\":\"XM\",\"icao\":\"SMX\",\"callsign\":\"ALIEXPRESS\",\"country\":\"Italy\",\"active\":\"Y\"},{\"id\":\"372\",\"name\":\"Asia Overnight Express\",\"alias\":\"\\\\N\",\"iata\":\"OE\",\"icao\":\"AOT\",\"callsign\":\"ASIA OVERNIGHT\",\"country\":\"Philippines\",\"active\":\"N\"},{\"id\":\"386\",\"name\":\"Aero Flight\",\"alias\":\"\\\\N\",\"iata\":\"GV\",\"icao\":\"ARF\",\"callsign\":\"Aero Fox\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"397\",\"name\":\"Arrow Air\",\"alias\":\"\\\\N\",\"iata\":\"JW\",\"icao\":\"APW\",\"callsign\":\"BIG A\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"407\",\"name\":\"Arik Air\",\"alias\":\"\\\\N\",\"iata\":\"W3\",\"icao\":\"ARA\",\"callsign\":\"ARIK AIR\",\"country\":\"Nigeria\",\"active\":\"N\"},{\"id\":\"410\",\"name\":\"Aerocondor\",\"alias\":\"\\\\N\",\"iata\":\"2B\",\"icao\":\"ARD\",\"callsign\":\"AEROCONDOR\",\"country\":\"Portugal\",\"active\":\"Y\"},{\"id\":\"411\",\"name\":\"Aires\",\"alias\":\"\\\\N\",\"iata\":\"4C\",\"icao\":\"ARE\",\"callsign\":\" Aerovias de Integracion Regional\",\"country\":\" S.A.\",\"active\":\"Y\"},{\"id\":\"412\",\"name\":\"Aerolineas Argentinas\",\"alias\":\"\\\\N\",\"iata\":\"AR\",\"icao\":\"ARG\",\"callsign\":\"ARGENTINA\",\"country\":\"Argentina\",\"active\":\"Y\"},{\"id\":\"426\",\"name\":\"Air Armenia\",\"alias\":\"\\\\N\",\"iata\":\"QN\",\"icao\":\"ARR\",\"callsign\":\"AIR ARMENIA\",\"country\":\"Armenia\",\"active\":\"N\"},{\"id\":\"439\",\"name\":\"Alaska Airlines\",\"alias\":\"\\\\N\",\"iata\":\"AS\",\"icao\":\"ASA\",\"callsign\":\" Inc.\",\"country\":\"ALASKA\",\"active\":\"Y\"},{\"id\":\"442\",\"name\":\"Air Sinai\",\"alias\":\"\\\\N\",\"iata\":\"4D\",\"icao\":\"ASD\",\"callsign\":\"AIR SINAI\",\"country\":\"Egypt\",\"active\":\"Y\"},{\"id\":\"443\",\"name\":\"Airstars\",\"alias\":\"\\\\N\",\"iata\":\"PL\",\"icao\":\"ASE\",\"callsign\":\"MOROZOV\",\"country\":\"Russia\",\"active\":\"N\"},{\"id\":\"452\",\"name\":\"Atlantic Southeast Airlines\",\"alias\":\"\\\\N\",\"iata\":\"EV\",\"icao\":\"ASQ\",\"callsign\":\"ACEY\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"462\",\"name\":\"Astrakhan Airlines\",\"alias\":\"\\\\N\",\"iata\":\"OB\",\"icao\":\"ASZ\",\"callsign\":\"AIR ASTRAKHAN\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"470\",\"name\":\"Air Burkina\",\"alias\":\"\\\\N\",\"iata\":\"2J\",\"icao\":\"VBW\",\"callsign\":\"BURKINA\",\"country\":\"Burkina Faso\",\"active\":\"Y\"},{\"id\":\"472\",\"name\":\"Aero-Tropics Air Services\",\"alias\":\"\\\\N\",\"iata\":\"HC\",\"icao\":\"ATI\",\"callsign\":\"\",\"country\":\"Australia\",\"active\":\"N\"},{\"id\":\"476\",\"name\":\"Airlines Of Tasmania\",\"alias\":\"\\\\N\",\"iata\":\"FO\",\"icao\":\"ATM\",\"callsign\":\"AIRTAS\",\"country\":\"Australia\",\"active\":\"Y\"},{\"id\":\"477\",\"name\":\"Air Saint Pierre\",\"alias\":\"\\\\N\",\"iata\":\"PJ\",\"icao\":\"SPM\",\"callsign\":\"\",\"country\":\"France\",\"active\":\"Y\"},{\"id\":\"478\",\"name\":\"Air Transport International\",\"alias\":\"\\\\N\",\"iata\":\"8C\",\"icao\":\"ATN\",\"callsign\":\"AIR TRANSPORT\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"491\",\"name\":\"Austrian Airlines\",\"alias\":\"\\\\N\",\"iata\":\"OS\",\"icao\":\"AUA\",\"callsign\":\"AUSTRIAN\",\"country\":\"Austria\",\"active\":\"Y\"},{\"id\":\"493\",\"name\":\"Augsburg Airways\",\"alias\":\"\\\\N\",\"iata\":\"IQ\",\"icao\":\"AUB\",\"callsign\":\"AUGSBURG-AIR\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"496\",\"name\":\"AirBridge Cargo\",\"alias\":\"\\\\N\",\"iata\":\"RU\",\"icao\":\"ABW\",\"callsign\":\"AIRBRIDGE CARGO\",\"country\":\"Russia\",\"active\":\"N\"},{\"id\":\"502\",\"name\":\"Abu Dhabi Amiri Flight\",\"alias\":\"\\\\N\",\"iata\":\"MO\",\"icao\":\"AUH\",\"callsign\":\"SULTAN\",\"country\":\"United Arab Emirates\",\"active\":\"Y\"},{\"id\":\"503\",\"name\":\"Aeroflot-Nord\",\"alias\":\"\\\\N\",\"iata\":\"5N\",\"icao\":\"AUL\",\"callsign\":\"DVINA\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"508\",\"name\":\"Aurigny Air Services\",\"alias\":\"\\\\N\",\"iata\":\"GR\",\"icao\":\"AUR\",\"callsign\":\"AYLINE\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"509\",\"name\":\"Aus-Air\",\"alias\":\"\\\\N\",\"iata\":\"NO\",\"icao\":\"AUS\",\"callsign\":\"\",\"country\":\"Australia\",\"active\":\"N\"},{\"id\":\"510\",\"name\":\"Austral Lineas Aereas\",\"alias\":\"\\\\N\",\"iata\":\"AU\",\"icao\":\"AUT\",\"callsign\":\"AUSTRAL\",\"country\":\"Argentina\",\"active\":\"Y\"},{\"id\":\"514\",\"name\":\"Australian Airlines\",\"alias\":\"\\\\N\",\"iata\":\"AO\",\"icao\":\"AUZ\",\"callsign\":\"AUSTRALIAN\",\"country\":\"Australia\",\"active\":\"N\"},{\"id\":\"515\",\"name\":\"Avianca - Aerovias Nacionales de Colombia\",\"alias\":\"\\\\N\",\"iata\":\"AV\",\"icao\":\"AVA\",\"callsign\":\" S.A.\",\"country\":\"AVIANCA\",\"active\":\"Y\"},{\"id\":\"524\",\"name\":\"Air Vanuatu\",\"alias\":\"\\\\N\",\"iata\":\"NF\",\"icao\":\"AVN\",\"callsign\":\"AIR VAN\",\"country\":\"Vanuatu\",\"active\":\"Y\"},{\"id\":\"540\",\"name\":\"Airlink Zambia\",\"alias\":\"\\\\N\",\"iata\":\"K8\",\"icao\":\"ZAK\",\"callsign\":\"\",\"country\":\"Zambia\",\"active\":\"N\"},{\"id\":\"543\",\"name\":\"Air Bangladesh\",\"alias\":\"\\\\N\",\"iata\":\"B9\",\"icao\":\"BGD\",\"callsign\":\"AIR BANGLA\",\"country\":\"Bangladesh\",\"active\":\"Y\"},{\"id\":\"547\",\"name\":\"Air Mediterranee\",\"alias\":\"\\\\N\",\"iata\":\"DR\",\"icao\":\"BIE\",\"callsign\":\"MEDITERRANEE\",\"country\":\"France\",\"active\":\"Y\"},{\"id\":\"563\",\"name\":\"Aeroline GmbH\",\"alias\":\"\\\\N\",\"iata\":\"7E\",\"icao\":\"AWU\",\"callsign\":\"SYLT-AIR\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"565\",\"name\":\"Air Wales\",\"alias\":\"\\\\N\",\"iata\":\"6G\",\"icao\":\"AWW\",\"callsign\":\"RED DRAGON\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"567\",\"name\":\"Air Caraïbes\",\"alias\":\"\\\\N\",\"iata\":\"TX\",\"icao\":\"FWI\",\"callsign\":\"FRENCH WEST\",\"country\":\"France\",\"active\":\"Y\"},{\"id\":\"569\",\"name\":\"Air India Express\",\"alias\":\"\\\\N\",\"iata\":\"IX\",\"icao\":\"AXB\",\"callsign\":\"EXPRESS INDIA\",\"country\":\"India\",\"active\":\"Y\"},{\"id\":\"571\",\"name\":\"Asian Express Airlines\",\"alias\":\"\\\\N\",\"iata\":\"HJ\",\"icao\":\"AXF\",\"callsign\":\"FREIGHTEXPRESS\",\"country\":\"Australia\",\"active\":\"N\"},{\"id\":\"575\",\"name\":\"Air Exel\",\"alias\":\"\\\\N\",\"iata\":\"XT\",\"icao\":\"AXL\",\"callsign\":\"EXEL COMMUTER\",\"country\":\"Netherlands\",\"active\":\"Y\"},{\"id\":\"576\",\"name\":\"AirAsia\",\"alias\":\"Air Asia\",\"iata\":\"AK\",\"icao\":\"AXM\",\"callsign\":\"ASIAN EXPRESS\",\"country\":\"Malaysia\",\"active\":\"Y\"},{\"id\":\"588\",\"name\":\"Axis Airways\",\"alias\":\"\\\\N\",\"iata\":\"6V\",\"icao\":\"AXY\",\"callsign\":\"AXIS\",\"country\":\"France\",\"active\":\"N\"},{\"id\":\"595\",\"name\":\"Atlant-Soyuz Airlines\",\"alias\":\"\\\\N\",\"iata\":\"3G\",\"icao\":\"AYZ\",\"callsign\":\"ATLANT-SOYUZ\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"596\",\"name\":\"Alitalia\",\"alias\":\"\\\\N\",\"iata\":\"AZ\",\"icao\":\"AZA\",\"callsign\":\"ALITALIA\",\"country\":\"Italy\",\"active\":\"Y\"},{\"id\":\"598\",\"name\":\"Arcus-Air Logistic\",\"alias\":\"\\\\N\",\"iata\":\"ZE\",\"icao\":\"AZE\",\"callsign\":\"ARCUS AIR\",\"country\":\"Germany\",\"active\":\"N\"},{\"id\":\"603\",\"name\":\"Amaszonas\",\"alias\":\"\\\\N\",\"iata\":\"Z8\",\"icao\":\"AZN\",\"callsign\":\"\",\"country\":\"Bolivia\",\"active\":\"Y\"},{\"id\":\"608\",\"name\":\"Air Zimbabwe\",\"alias\":\"\\\\N\",\"iata\":\"UM\",\"icao\":\"AZW\",\"callsign\":\"AIR ZIMBABWE\",\"country\":\"Zimbabwe\",\"active\":\"Y\"},{\"id\":\"622\",\"name\":\"Aserca Airlines\",\"alias\":\"\\\\N\",\"iata\":\"R7\",\"icao\":\"OCA\",\"callsign\":\"AROSCA\",\"country\":\"Venezuela\",\"active\":\"Y\"},{\"id\":\"641\",\"name\":\"Rossiya-Russian Airlines\",\"alias\":\"Pulkovo Aviation Enterprise\",\"iata\":\"FV\",\"icao\":\"SDM\",\"callsign\":\"PULKOVO\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"644\",\"name\":\"Aviaexpress\",\"alias\":\"\\\\N\",\"iata\":\"RX\",\"icao\":\"AEH\",\"callsign\":\"Avex\",\"country\":\"Hungary\",\"active\":\"N\"},{\"id\":\"659\",\"name\":\"American Eagle Airlines\",\"alias\":\"\\\\N\",\"iata\":\"MQ\",\"icao\":\"EGF\",\"callsign\":\"EAGLE FLIGHT\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"663\",\"name\":\"Airshop\",\"alias\":\"\\\\N\",\"iata\":\"FF\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Netherlands\",\"active\":\"N\"},{\"id\":\"664\",\"name\":\"African Transport Trading and Investment Company\",\"alias\":\"\\\\N\",\"iata\":\"ML\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Sudan\",\"active\":\"N\"},{\"id\":\"682\",\"name\":\"Air Ivoire\",\"alias\":\"\\\\N\",\"iata\":\"VU\",\"icao\":\"VUN\",\"callsign\":\"AIRIVOIRE\",\"country\":\"Ivory Coast\",\"active\":\"Y\"},{\"id\":\"683\",\"name\":\"Air Botswana\",\"alias\":\"\\\\N\",\"iata\":\"BP\",\"icao\":\"BOT\",\"callsign\":\"BOTSWANA\",\"country\":\"Botswana\",\"active\":\"Y\"},{\"id\":\"690\",\"name\":\"Air Foyle\",\"alias\":\"\\\\N\",\"iata\":\"GS\",\"icao\":\"UPA\",\"callsign\":\"FOYLE\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"692\",\"name\":\"Air Tahiti\",\"alias\":\"\\\\N\",\"iata\":\"VT\",\"icao\":\"VTA\",\"callsign\":\"AIR TAHITI\",\"country\":\"French Polynesia\",\"active\":\"Y\"},{\"id\":\"693\",\"name\":\"Air Urga\",\"alias\":\"\\\\N\",\"iata\":\"3N\",\"icao\":\"URG\",\"callsign\":\"URGA\",\"country\":\"Ukraine\",\"active\":\"N\"},{\"id\":\"695\",\"name\":\"Air VIA\",\"alias\":\"\\\\N\",\"iata\":\"VL\",\"icao\":\"VIM\",\"callsign\":\"\",\"country\":\"Bulgaria\",\"active\":\"Y\"},{\"id\":\"715\",\"name\":\"Africa West\",\"alias\":\"\\\\N\",\"iata\":\"FK\",\"icao\":\"WTA\",\"callsign\":\"WEST TOGO\",\"country\":\"Togo\",\"active\":\"Y\"},{\"id\":\"719\",\"name\":\"Avirex\",\"alias\":\"\\\\N\",\"iata\":\"G2\",\"icao\":\"VXG\",\"callsign\":\"AVIREX-GABON\",\"country\":\"Gabon\",\"active\":\"N\"},{\"id\":\"724\",\"name\":\"ATRAN Cargo Airlines\",\"alias\":\"\\\\N\",\"iata\":\"V8\",\"icao\":\"VAS\",\"callsign\":\"ATRAN\",\"country\":\"Russian Federation\",\"active\":\"Y\"},{\"id\":\"732\",\"name\":\"Avensa\",\"alias\":\"\\\\N\",\"iata\":\"VE\",\"icao\":\"AVE\",\"callsign\":\"Avensa\",\"country\":\"Venezuela\",\"active\":\"N\"},{\"id\":\"733\",\"name\":\"Avolar Aerolineas\",\"alias\":\"\\\\N\",\"iata\":\"V5\",\"icao\":\"VLI\",\"callsign\":\"AEROVOLAR\",\"country\":\"Mexico\",\"active\":\"N\"},{\"id\":\"751\",\"name\":\"Air China\",\"alias\":\"\\\\N\",\"iata\":\"CA\",\"icao\":\"CCA\",\"callsign\":\"AIR CHINA\",\"country\":\"China\",\"active\":\"Y\"},{\"id\":\"753\",\"name\":\"Aero Condor Peru\",\"alias\":\"\\\\N\",\"iata\":\"Q6\",\"icao\":\"CDP\",\"callsign\":\"CONDOR-PERU\",\"country\":\"Peru\",\"active\":\"Y\"},{\"id\":\"767\",\"name\":\"Arctic Circle Air Service\",\"alias\":\"\\\\N\",\"iata\":\"5F\",\"icao\":\"CIR\",\"callsign\":\"AIR ARCTIC\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"778\",\"name\":\"Air Corridor\",\"alias\":\"\\\\N\",\"iata\":\"QC\",\"icao\":\"CRD\",\"callsign\":\"AIR CORRIDOR\",\"country\":\"Mozambique\",\"active\":\"N\"},{\"id\":\"779\",\"name\":\"Air Central\",\"alias\":\"\\\\N\",\"iata\":\"NV\",\"icao\":\"CRF\",\"callsign\":\"AIR CENTRAL\",\"country\":\"Japan\",\"active\":\"N\"},{\"id\":\"787\",\"name\":\"Air Chathams\",\"alias\":\"\\\\N\",\"iata\":\"CV\",\"icao\":\"CVA\",\"callsign\":\"CHATHAM\",\"country\":\"New Zealand\",\"active\":\"Y\"},{\"id\":\"788\",\"name\":\"Air Marshall Islands\",\"alias\":\"\\\\N\",\"iata\":\"CW\",\"icao\":\"CWM\",\"callsign\":\"AIR MARSHALLS\",\"country\":\"Marshall Islands\",\"active\":\"Y\"},{\"id\":\"792\",\"name\":\"Access Air\",\"alias\":\"\\\\N\",\"iata\":\"ZA\",\"icao\":\"CYD\",\"callsign\":\"CYCLONE\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"794\",\"name\":\"Air Algerie\",\"alias\":\"\\\\N\",\"iata\":\"AH\",\"icao\":\"DAH\",\"callsign\":\"AIR ALGERIE\",\"country\":\"Algeria\",\"active\":\"Y\"},{\"id\":\"800\",\"name\":\"Adam Air\",\"alias\":\"\\\\N\",\"iata\":\"KI\",\"icao\":\"DHI\",\"callsign\":\"ADAM SKY\",\"country\":\"Indonesia\",\"active\":\"Y\"},{\"id\":\"801\",\"name\":\"Astar Air Cargo\",\"alias\":\"\\\\N\",\"iata\":\"ER\",\"icao\":\"DHL\",\"callsign\":\"DAHL\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"805\",\"name\":\"Antinea Airlines\",\"alias\":\"\\\\N\",\"iata\":\"HO\",\"icao\":\"DJA\",\"callsign\":\"ANTINEA\",\"country\":\"Algeria\",\"active\":\"N\"},{\"id\":\"807\",\"name\":\"Air Dolomiti\",\"alias\":\"\\\\N\",\"iata\":\"EN\",\"icao\":\"DLA\",\"callsign\":\"DOLOMOTI\",\"country\":\"Italy\",\"active\":\"Y\"},{\"id\":\"816\",\"name\":\"Aeroflot-Don\",\"alias\":\"\\\\N\",\"iata\":\"D9\",\"icao\":\"DNV\",\"callsign\":\"DONAVIA\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"817\",\"name\":\"Air Madrid\",\"alias\":\"\\\\N\",\"iata\":\"NM\",\"icao\":\"DRD\",\"callsign\":\"ALADA AIR\",\"country\":\"Spain\",\"active\":\"Y\"},{\"id\":\"828\",\"name\":\"Aero Airlines\",\"alias\":\"\\\\N\",\"iata\":\"EE\",\"icao\":\"EAY\",\"callsign\":\"REVAL\",\"country\":\"Estonia\",\"active\":\"N\"},{\"id\":\"830\",\"name\":\"Air City\",\"alias\":\"\\\\N\",\"iata\":\"4F\",\"icao\":\"ECE\",\"callsign\":\"AIRCITY\",\"country\":\"Germany\",\"active\":\"N\"},{\"id\":\"837\",\"name\":\"Aer Lingus\",\"alias\":\"\\\\N\",\"iata\":\"EI\",\"icao\":\"EIN\",\"callsign\":\"SHAMROCK\",\"country\":\"Ireland\",\"active\":\"Y\"},{\"id\":\"839\",\"name\":\"Alpi Eagles\",\"alias\":\"\\\\N\",\"iata\":\"E8\",\"icao\":\"ELG\",\"callsign\":\"ALPI EAGLES\",\"country\":\"Italy\",\"active\":\"N\"},{\"id\":\"849\",\"name\":\"Air S\",\"alias\":\"\\\\N\",\"iata\":\"KY\",\"icao\":\"EQL\",\"callsign\":\"EQUATORIAL\",\"country\":\"Air S\",\"active\":\"N\"},{\"id\":\"866\",\"name\":\"Air Fiji\",\"alias\":\"\\\\N\",\"iata\":\"PC\",\"icao\":\"FAJ\",\"callsign\":\"FIJIAIR\",\"country\":\"Fiji\",\"active\":\"N\"},{\"id\":\"876\",\"name\":\"Air Finland\",\"alias\":\"\\\\N\",\"iata\":\"OF\",\"icao\":\"FIF\",\"callsign\":\"AIR FINLAND\",\"country\":\"Finland\",\"active\":\"Y\"},{\"id\":\"879\",\"name\":\"Air Pacific\",\"alias\":\"\\\\N\",\"iata\":\"FJ\",\"icao\":\"FJI\",\"callsign\":\"PACIFIC\",\"country\":\"Fiji\",\"active\":\"Y\"},{\"id\":\"881\",\"name\":\"Atlantic Airways\",\"alias\":\"\\\\N\",\"iata\":\"RC\",\"icao\":\"FLI\",\"callsign\":\"FAROELINE\",\"country\":\"Faroe Islands\",\"active\":\"Y\"},{\"id\":\"882\",\"name\":\"Air Florida\",\"alias\":\"\\\\N\",\"iata\":\"QH\",\"icao\":\"FLZ\",\"callsign\":\"AIR FLORIDA\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"896\",\"name\":\"Air Iceland\",\"alias\":\"\\\\N\",\"iata\":\"NY\",\"icao\":\"FXI\",\"callsign\":\"FAXI\",\"country\":\"Iceland\",\"active\":\"Y\"},{\"id\":\"897\",\"name\":\"Air Philippines\",\"alias\":\"\\\\N\",\"iata\":\"2P\",\"icao\":\"GAP\",\"callsign\":\"ORIENT PACIFIC\",\"country\":\"Philippines\",\"active\":\"Y\"},{\"id\":\"909\",\"name\":\"Air Guinee Express\",\"alias\":\"\\\\N\",\"iata\":\"2U\",\"icao\":\"GIP\",\"callsign\":\"FUTURE EXPRESS\",\"country\":\"Guinea\",\"active\":\"Y\"},{\"id\":\"921\",\"name\":\"Air Greenland\",\"alias\":\"\\\\N\",\"iata\":\"GL\",\"icao\":\"GRL\",\"callsign\":\"GREENLAND\",\"country\":\"Denmark\",\"active\":\"Y\"},{\"id\":\"922\",\"name\":\"Allegro\",\"alias\":\"\\\\N\",\"iata\":\"LL\",\"icao\":\"GRO\",\"callsign\":\"ALLEGRO\",\"country\":\"Mexico\",\"active\":\"N\"},{\"id\":\"928\",\"name\":\"Atlas Air\",\"alias\":\"\\\\N\",\"iata\":\"5Y\",\"icao\":\"GTI\",\"callsign\":\"GIANT\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"931\",\"name\":\"Air Guyane\",\"alias\":\"\\\\N\",\"iata\":\"GG\",\"icao\":\"GUY\",\"callsign\":\"GREEN BIRD\",\"country\":\"French Guiana\",\"active\":\"Y\"},{\"id\":\"933\",\"name\":\"Air D'Ayiti\",\"alias\":\"\\\\N\",\"iata\":\"H9\",\"icao\":\"HAD\",\"callsign\":\"HAITI AVIA\",\"country\":\"Haiti\",\"active\":\"N\"},{\"id\":\"934\",\"name\":\"Air Comores International\",\"alias\":\"\\\\N\",\"iata\":\"GG\",\"icao\":\"HAH\",\"callsign\":\"AIR COMORES\",\"country\":\"Comoros\",\"active\":\"N\"},{\"id\":\"949\",\"name\":\"Air Horizon\",\"alias\":\"\\\\N\",\"iata\":\"8C\",\"icao\":\"HZT\",\"callsign\":\"HORIZON TOGO\",\"country\":\"Togo\",\"active\":\"N\"},{\"id\":\"970\",\"name\":\"Air Bagan\",\"alias\":\"\\\\N\",\"iata\":\"W9\",\"icao\":\"JAB\",\"callsign\":\"AIR BAGAN\",\"country\":\"Myanmar\",\"active\":\"Y\"},{\"id\":\"979\",\"name\":\"Atyrau Air Ways\",\"alias\":\"\\\\N\",\"iata\":\"IP\",\"icao\":\"JOL\",\"callsign\":\"EDIL\",\"country\":\"Kazakhstan\",\"active\":\"N\"},{\"id\":\"983\",\"name\":\"Air Canada Jazz\",\"alias\":\"\\\\N\",\"iata\":\"QK\",\"icao\":\"JZA\",\"callsign\":\"JAZZ\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"995\",\"name\":\"Atlasjet\",\"alias\":\"\\\\N\",\"iata\":\"KK\",\"icao\":\"KKK\",\"callsign\":\"ATLASJET\",\"country\":\"Turkey\",\"active\":\"Y\"},{\"id\":\"998\",\"name\":\"Air Koryo\",\"alias\":\"\\\\N\",\"iata\":\"JS\",\"icao\":\"KOR\",\"callsign\":\"AIR KORYO\",\"country\":\"Democratic People's Republic of Korea\",\"active\":\"Y\"},{\"id\":\"1006\",\"name\":\"Air Astana\",\"alias\":\"\\\\N\",\"iata\":\"KC\",\"icao\":\"KZR\",\"callsign\":\"ASTANALINE\",\"country\":\"Kazakhstan\",\"active\":\"Y\"},{\"id\":\"1008\",\"name\":\"Albanian Airlines\",\"alias\":\"\\\\N\",\"iata\":\"LV\",\"icao\":\"LBC\",\"callsign\":\"ALBANIAN\",\"country\":\"Albania\",\"active\":\"Y\"},{\"id\":\"1021\",\"name\":\"Alidaunia\",\"alias\":\"\\\\N\",\"iata\":\"D4\",\"icao\":\"LID\",\"callsign\":\"ALIDA\",\"country\":\"Italy\",\"active\":\"N\"},{\"id\":\"1026\",\"name\":\"Alliance Air\",\"alias\":\"\\\\N\",\"iata\":\"CD\",\"icao\":\"LLR\",\"callsign\":\"ALLIED\",\"country\":\"India\",\"active\":\"N\"},{\"id\":\"1034\",\"name\":\"Aerolane\",\"alias\":\"\\\\N\",\"iata\":\"XL\",\"icao\":\"LNE\",\"callsign\":\"LAN ECUADOR\",\"country\":\"Ecuador\",\"active\":\"Y\"},{\"id\":\"1040\",\"name\":\"Air Alps Aviation\",\"alias\":\"\\\\N\",\"iata\":\"A6\",\"icao\":\"LPV\",\"callsign\":\"ALPAV\",\"country\":\"Austria\",\"active\":\"N\"},{\"id\":\"1048\",\"name\":\"Atlantis European Airways\",\"alias\":\"\\\\N\",\"iata\":\"TD\",\"icao\":\"LUR\",\"callsign\":\"\",\"country\":\"Armenia\",\"active\":\"Y\"},{\"id\":\"1051\",\"name\":\"Air Luxor GB\",\"alias\":\"\\\\N\",\"iata\":\"L8\",\"icao\":\"LXG\",\"callsign\":\"LUXOR GOLF\",\"country\":\"Guinea-Bissau\",\"active\":\"N\"},{\"id\":\"1052\",\"name\":\"Air Luxor\",\"alias\":\"\\\\N\",\"iata\":\"LK\",\"icao\":\"LXR\",\"callsign\":\"AIRLUXOR\",\"country\":\"Portugal\",\"active\":\"Y\"},{\"id\":\"1057\",\"name\":\"Air Mauritius\",\"alias\":\"\\\\N\",\"iata\":\"MK\",\"icao\":\"MAU\",\"callsign\":\"AIRMAURITIUS\",\"country\":\"Mauritius\",\"active\":\"Y\"},{\"id\":\"1066\",\"name\":\"Air Madagascar\",\"alias\":\"\\\\N\",\"iata\":\"MD\",\"icao\":\"MDG\",\"callsign\":\"AIR MADAGASCAR\",\"country\":\"Madagascar\",\"active\":\"Y\"},{\"id\":\"1073\",\"name\":\"Air Moldova\",\"alias\":\"\\\\N\",\"iata\":\"9U\",\"icao\":\"MLD\",\"callsign\":\"AIR MOLDOVA\",\"country\":\"Moldova\",\"active\":\"Y\"},{\"id\":\"1083\",\"name\":\"Aero Mongolia\",\"alias\":\"\\\\N\",\"iata\":\"M0\",\"icao\":\"MNG\",\"callsign\":\"AERO MONGOLIA\",\"country\":\"Mongolia\",\"active\":\"N\"},{\"id\":\"1087\",\"name\":\"Air Plus Comet\",\"alias\":\"\\\\N\",\"iata\":\"A7\",\"icao\":\"MPD\",\"callsign\":\"RED COMET\",\"country\":\"Spain\",\"active\":\"Y\"},{\"id\":\"1088\",\"name\":\"Aeromexpress\",\"alias\":\"\\\\N\",\"iata\":\"QO\",\"icao\":\"MPX\",\"callsign\":\"AEROMEXPRESS\",\"country\":\"Mexico\",\"active\":\"N\"},{\"id\":\"1093\",\"name\":\"Air Mauritanie\",\"alias\":\"\\\\N\",\"iata\":\"MR\",\"icao\":\"MRT\",\"callsign\":\"MIKE ROMEO\",\"country\":\"Mauritania\",\"active\":\"N\"},{\"id\":\"1107\",\"name\":\"Aeroland Airways\",\"alias\":\"\\\\N\",\"iata\":\"3S\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Greece\",\"active\":\"N\"},{\"id\":\"1109\",\"name\":\"Astair\",\"alias\":\"\\\\N\",\"iata\":\"8D\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Russian Federation\",\"active\":\"Y\"},{\"id\":\"1110\",\"name\":\"Albarka Air\",\"alias\":\"\\\\N\",\"iata\":\"F4\",\"icao\":\"NBK\",\"callsign\":\"AL-AIR\",\"country\":\"Nigeria\",\"active\":\"N\"},{\"id\":\"1116\",\"name\":\"Aero Contractors\",\"alias\":\"\\\\N\",\"iata\":\"AJ\",\"icao\":\"NIG\",\"callsign\":\"AEROLINE\",\"country\":\"Nigeria\",\"active\":\"Y\"},{\"id\":\"1139\",\"name\":\"Air Burundi\",\"alias\":\"\\\\N\",\"iata\":\"8Y\",\"icao\":\"PBU\",\"callsign\":\"AIR-BURUNDI\",\"country\":\"Burundi\",\"active\":\"N\"},{\"id\":\"1143\",\"name\":\"Aeropelican Air Services\",\"alias\":\"\\\\N\",\"iata\":\"OT\",\"icao\":\"PEL\",\"callsign\":\"PELICAN\",\"country\":\"Australia\",\"active\":\"Y\"},{\"id\":\"1156\",\"name\":\"Air Paradise International\",\"alias\":\"\\\\N\",\"iata\":\"AD\",\"icao\":\"PRZ\",\"callsign\":\"RADISAIR\",\"country\":\"Indonesia\",\"active\":\"N\"},{\"id\":\"1161\",\"name\":\"Air Class Lineas Aereas\",\"alias\":\"\\\\N\",\"iata\":\"QD\",\"icao\":\"QCL\",\"callsign\":\"ACLA\",\"country\":\"Uruguay\",\"active\":\"N\"},{\"id\":\"1166\",\"name\":\"African Safari Airways\",\"alias\":\"\\\\N\",\"iata\":\"QS\",\"icao\":\"QSC\",\"callsign\":\"ZEBRA\",\"country\":\"Kenya\",\"active\":\"N\"},{\"id\":\"1173\",\"name\":\"Airbus France\",\"alias\":\"\\\\N\",\"iata\":\"4Y\",\"icao\":\"RBU\",\"callsign\":\"AIRBUS FRANCE\",\"country\":\"France\",\"active\":\"N\"},{\"id\":\"1179\",\"name\":\"Air Mobility Command\",\"alias\":\"\\\\N\",\"iata\":\"MC\",\"icao\":\"RCH\",\"callsign\":\"REACH\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"1188\",\"name\":\"Aer Arann\",\"alias\":\"\\\\N\",\"iata\":\"RE\",\"icao\":\"REA\",\"callsign\":\"AER ARANN\",\"country\":\"Ireland\",\"active\":\"Y\"},{\"id\":\"1191\",\"name\":\"Air Austral\",\"alias\":\"\\\\N\",\"iata\":\"UU\",\"icao\":\"REU\",\"callsign\":\"REUNION\",\"country\":\"France\",\"active\":\"Y\"},{\"id\":\"1200\",\"name\":\"Asian Spirit\",\"alias\":\"\\\\N\",\"iata\":\"6K\",\"icao\":\"RIT\",\"callsign\":\"ASIAN SPIRIT\",\"country\":\"Philippines\",\"active\":\"Y\"},{\"id\":\"1202\",\"name\":\"Air Afrique\",\"alias\":\"\\\\N\",\"iata\":\"RK\",\"icao\":\"RKA\",\"callsign\":\"AIRAFRIC\",\"country\":\"Ivory Coast\",\"active\":\"Y\"},{\"id\":\"1203\",\"name\":\"Airlinair\",\"alias\":\"\\\\N\",\"iata\":\"A5\",\"icao\":\"RLA\",\"callsign\":\"AIRLINAIR\",\"country\":\"France\",\"active\":\"Y\"},{\"id\":\"1206\",\"name\":\"Aero Lanka\",\"alias\":\"\\\\N\",\"iata\":\"QL\",\"icao\":\"RLN\",\"callsign\":\"AERO LANKA\",\"country\":\"Sri Lanka\",\"active\":\"Y\"},{\"id\":\"1210\",\"name\":\"Armenian International Airways\",\"alias\":\"\\\\N\",\"iata\":\"MV\",\"icao\":\"RML\",\"callsign\":\"\",\"country\":\"Armenia\",\"active\":\"N\"},{\"id\":\"1213\",\"name\":\"Air Salone\",\"alias\":\"\\\\N\",\"iata\":\"20\",\"icao\":\"RNE\",\"callsign\":\"AIR SALONE\",\"country\":\"Sierra Leone\",\"active\":\"Y\"},{\"id\":\"1216\",\"name\":\"Armavia\",\"alias\":\"\\\\N\",\"iata\":\"U8\",\"icao\":\"RNV\",\"callsign\":\"ARMAVIA\",\"country\":\"Armenia\",\"active\":\"Y\"},{\"id\":\"1221\",\"name\":\"Aeromar\",\"alias\":\"\\\\N\",\"iata\":\"BQ\",\"icao\":\"ROM\",\"callsign\":\"BRAVO QUEBEC\",\"country\":\"Dominican Republic\",\"active\":\"N\"},{\"id\":\"1224\",\"name\":\"AeroRep\",\"alias\":\"\\\\N\",\"iata\":\"P5\",\"icao\":\"RPB\",\"callsign\":\"AEROREPUBLICA\",\"country\":\"Colombia\",\"active\":\"Y\"},{\"id\":\"1230\",\"name\":\"Aero-Service\",\"alias\":\"\\\\N\",\"iata\":\"BF\",\"icao\":\"RSR\",\"callsign\":\"CONGOSERV\",\"country\":\"Republic of the Congo\",\"active\":\"Y\"},{\"id\":\"1231\",\"name\":\"Aerosur\",\"alias\":\"\\\\N\",\"iata\":\"5L\",\"icao\":\"RSU\",\"callsign\":\"AEROSUR\",\"country\":\"Bolivia\",\"active\":\"Y\"},{\"id\":\"1254\",\"name\":\"Air Santo Domingo\",\"alias\":\"\\\\N\",\"iata\":\"EX\",\"icao\":\"SDO\",\"callsign\":\"AERO DOMINGO\",\"country\":\"Dominican Republic\",\"active\":\"N\"},{\"id\":\"1257\",\"name\":\"Aero California\",\"alias\":\"\\\\N\",\"iata\":\"JR\",\"icao\":\"SER\",\"callsign\":\"AEROCALIFORNIA\",\"country\":\"Mexico\",\"active\":\"N\"},{\"id\":\"1266\",\"name\":\"Avient Aviation\",\"alias\":\"\\\\N\",\"iata\":\"Z3\",\"icao\":\"SMJ\",\"callsign\":\"AVAVIA\",\"country\":\"Zimbabwe\",\"active\":\"Y\"},{\"id\":\"1271\",\"name\":\"Air Service\",\"alias\":\"\\\\N\",\"iata\":\"M3\",\"icao\":\"SPJ\",\"callsign\":\"AIR SKOPJE\",\"country\":\"Macedonia\",\"active\":\"N\"},{\"id\":\"1285\",\"name\":\"Air Slovakia\",\"alias\":\"\\\\N\",\"iata\":\"GM\",\"icao\":\"SVK\",\"callsign\":\"SLOVAKIA\",\"country\":\"Slovakia\",\"active\":\"N\"},{\"id\":\"1290\",\"name\":\"Aeromar\",\"alias\":\"\\\\N\",\"iata\":\"VW\",\"icao\":\"TAO\",\"callsign\":\"TRANS-AEROMAR\",\"country\":\"Mexico\",\"active\":\"Y\"},{\"id\":\"1299\",\"name\":\"Arkefly\",\"alias\":\"\\\\N\",\"iata\":\"OR\",\"icao\":\"TFL\",\"callsign\":\"ARKEFLY\",\"country\":\"Netherlands\",\"active\":\"Y\"},{\"id\":\"1308\",\"name\":\"Airlines PNG\",\"alias\":\"\\\\N\",\"iata\":\"CG\",\"icao\":\"TOK\",\"callsign\":\"BALUS\",\"country\":\"Papua New Guinea\",\"active\":\"Y\"},{\"id\":\"1311\",\"name\":\"Air Cal\",\"alias\":\"\\\\N\",\"iata\":\"TY\",\"icao\":\"TPC\",\"callsign\":\"AIRCAL\",\"country\":\"France\",\"active\":\"N\"},{\"id\":\"1316\",\"name\":\"AirTran Airways\",\"alias\":\"\\\\N\",\"iata\":\"FL\",\"icao\":\"TRS\",\"callsign\":\"CITRUS\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"1317\",\"name\":\"Air Transat\",\"alias\":\"\\\\N\",\"iata\":\"TS\",\"icao\":\"TSC\",\"callsign\":\"TRANSAT\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"1322\",\"name\":\"Avialeasing Aviation Company\",\"alias\":\"\\\\N\",\"iata\":\"EC\",\"icao\":\"TWN\",\"callsign\":\"TWINARROW\",\"country\":\"Uzbekistan\",\"active\":\"Y\"},{\"id\":\"1326\",\"name\":\"Tyrolean Airways\",\"alias\":\"\\\\N\",\"iata\":\"VO\",\"icao\":\"TYR\",\"callsign\":\"TYROLEAN\",\"country\":\"Austria\",\"active\":\"Y\"},{\"id\":\"1332\",\"name\":\"Aero-Charter Ukraine\",\"alias\":\"\\\\N\",\"iata\":\"DW\",\"icao\":\"UCR\",\"callsign\":\"CHARTER UKRAINE\",\"country\":\"Ukraine\",\"active\":\"N\"},{\"id\":\"1334\",\"name\":\"Air Ukraine\",\"alias\":\"\\\\N\",\"iata\":\"6U\",\"icao\":\"UKR\",\"callsign\":\"AIR UKRAINE\",\"country\":\"Ukraine\",\"active\":\"N\"},{\"id\":\"1338\",\"name\":\"Aerolineas Galapagos (Aerogal)\",\"alias\":\"\\\\N\",\"iata\":\"2K\",\"icao\":\"GLG\",\"callsign\":\"AEROGAL\",\"country\":\"Ecuador\",\"active\":\"Y\"},{\"id\":\"1340\",\"name\":\"Alrosa Mirny Air Enterprise\",\"alias\":\"\\\\N\",\"iata\":\"6R\",\"icao\":\"DRU\",\"callsign\":\"MIRNY\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"1347\",\"name\":\"Baker Aviation\",\"alias\":\"\\\\N\",\"iata\":\"8Q\",\"icao\":\"BAJ\",\"callsign\":\"BAKER AVIATION\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"1355\",\"name\":\"British Airways\",\"alias\":\"\\\\N\",\"iata\":\"BA\",\"icao\":\"BAW\",\"callsign\":\"SPEEDBIRD\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"1359\",\"name\":\"Biman Bangladesh Airlines\",\"alias\":\"\\\\N\",\"iata\":\"BG\",\"icao\":\"BBC\",\"callsign\":\"BANGLADESH\",\"country\":\"Bangladesh\",\"active\":\"Y\"},{\"id\":\"1360\",\"name\":\"Bluebird Cargo\",\"alias\":\"\\\\N\",\"iata\":\"BF\",\"icao\":\"BBD\",\"callsign\":\"BLUE CARGO\",\"country\":\"Iceland\",\"active\":\"N\"},{\"id\":\"1364\",\"name\":\"BACH Flugbetriebsges\",\"alias\":\"\\\\N\",\"iata\":\"B4\",\"icao\":\"BCF\",\"callsign\":\"BACH\",\"country\":\"Austria\",\"active\":\"N\"},{\"id\":\"1370\",\"name\":\"Blue Dart Aviation\",\"alias\":\"\\\\N\",\"iata\":\"BZ\",\"icao\":\"BDA\",\"callsign\":\"BLUE DART\",\"country\":\"India\",\"active\":\"N\"},{\"id\":\"1371\",\"name\":\"B&H Airlines\",\"alias\":\"\\\\N\",\"iata\":\"JA\",\"icao\":\"BON\",\"callsign\":\"Air Bosna\",\"country\":\"Bosnia and Herzegovina\",\"active\":\"N\"},{\"id\":\"1384\",\"name\":\"Buffalo Airways\",\"alias\":\"\\\\N\",\"iata\":\"J4\",\"icao\":\"BFL\",\"callsign\":\"BUFFALO\",\"country\":\"Canada\",\"active\":\"N\"},{\"id\":\"1392\",\"name\":\"Benin Golf Air\",\"alias\":\"\\\\N\",\"iata\":\"A8\",\"icao\":\"BGL\",\"callsign\":\"BENIN GOLF\",\"country\":\"Benin\",\"active\":\"N\"},{\"id\":\"1401\",\"name\":\"Belair Airlines\",\"alias\":\"\\\\N\",\"iata\":\"4T\",\"icao\":\"BHP\",\"callsign\":\"BELAIR\",\"country\":\"Switzerland\",\"active\":\"Y\"},{\"id\":\"1403\",\"name\":\"Bahamasair\",\"alias\":\"\\\\N\",\"iata\":\"UP\",\"icao\":\"BHS\",\"callsign\":\"BAHAMAS\",\"country\":\"Bahamas\",\"active\":\"Y\"},{\"id\":\"1405\",\"name\":\"Bringer Air Cargo Taxi Aereo\",\"alias\":\"\\\\N\",\"iata\":\"E6\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Brazil\",\"active\":\"N\"},{\"id\":\"1406\",\"name\":\"Balkan Bulgarian Airlines\",\"alias\":\"\\\\N\",\"iata\":\"LZ\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"\",\"active\":\"Y\"},{\"id\":\"1407\",\"name\":\"BA Connect\",\"alias\":\"\\\\N\",\"iata\":\"TH\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"United Kingdom\",\"active\":\"N\"},{\"id\":\"1411\",\"name\":\"British International Helicopters\",\"alias\":\"\\\\N\",\"iata\":\"BS\",\"icao\":\"BIH\",\"callsign\":\"BRINTEL\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"1419\",\"name\":\"Bankair\",\"alias\":\"\\\\N\",\"iata\":\"B4\",\"icao\":\"BKA\",\"callsign\":\"BANKAIR\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"1422\",\"name\":\"Bangkok Airways\",\"alias\":\"\\\\N\",\"iata\":\"PG\",\"icao\":\"BKP\",\"callsign\":\"BANGKOK AIR\",\"country\":\"Thailand\",\"active\":\"Y\"},{\"id\":\"1427\",\"name\":\"Blue1\",\"alias\":\"\\\\N\",\"iata\":\"KF\",\"icao\":\"BLF\",\"callsign\":\"BLUEFIN\",\"country\":\"Finland\",\"active\":\"Y\"},{\"id\":\"1434\",\"name\":\"Bearskin Lake Air Service\",\"alias\":\"\\\\N\",\"iata\":\"JV\",\"icao\":\"BLS\",\"callsign\":\"BEARSKIN\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"1436\",\"name\":\"Bellview Airlines\",\"alias\":\"\\\\N\",\"iata\":\"B3\",\"icao\":\"BLV\",\"callsign\":\"BELLVIEW AIRLINES\",\"country\":\"Nigeria\",\"active\":\"Y\"},{\"id\":\"1437\",\"name\":\"bmi\",\"alias\":\"bmi British Midland\",\"iata\":\"BD\",\"icao\":\"BMA\",\"callsign\":\"MIDLAND\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"1441\",\"name\":\"bmibaby\",\"alias\":\"\\\\N\",\"iata\":\"WW\",\"icao\":\"BMI\",\"callsign\":\"BABY\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"1442\",\"name\":\"Bemidji Airlines\",\"alias\":\"\\\\N\",\"iata\":\"CH\",\"icao\":\"BMJ\",\"callsign\":\"BEMIDJI\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"1443\",\"name\":\"Bismillah Airlines\",\"alias\":\"\\\\N\",\"iata\":\"5Z\",\"icao\":\"BML\",\"callsign\":\"BISMILLAH\",\"country\":\"Bangladesh\",\"active\":\"N\"},{\"id\":\"1462\",\"name\":\"Bouraq Indonesia Airlines\",\"alias\":\"\\\\N\",\"iata\":\"BO\",\"icao\":\"BOU\",\"callsign\":\"BOURAQ\",\"country\":\"Indonesia\",\"active\":\"N\"},{\"id\":\"1463\",\"name\":\"Blue Panorama Airlines\",\"alias\":\"\\\\N\",\"iata\":\"BV\",\"icao\":\"BPA\",\"callsign\":\"BLUE PANOROMA\",\"country\":\"Italy\",\"active\":\"Y\"},{\"id\":\"1469\",\"name\":\"BRA-Transportes Aereos\",\"alias\":\"\\\\N\",\"iata\":\"7R\",\"icao\":\"BRB\",\"callsign\":\"BRA-TRANSPAEREOS\",\"country\":\"Brazil\",\"active\":\"N\"},{\"id\":\"1472\",\"name\":\"Bering Air\",\"alias\":\"\\\\N\",\"iata\":\"8E\",\"icao\":\"BRG\",\"callsign\":\"BERING AIR\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"1478\",\"name\":\"Belavia Belarusian Airlines\",\"alias\":\"\\\\N\",\"iata\":\"B2\",\"icao\":\"BRU\",\"callsign\":\"BELARUS AVIA\",\"country\":\"Belarus\",\"active\":\"Y\"},{\"id\":\"1479\",\"name\":\"Bravo Air Congo\",\"alias\":\"\\\\N\",\"iata\":\"K6\",\"icao\":\"BRV\",\"callsign\":\"BRAVO\",\"country\":\"Democratic Republic of the Congo\",\"active\":\"N\"},{\"id\":\"1481\",\"name\":\"Braniff International Airways\",\"alias\":\"\\\\N\",\"iata\":\"BN\",\"icao\":\"BNF\",\"callsign\":\"Braniff\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"1492\",\"name\":\"Big Sky Airlines\",\"alias\":\"\\\\N\",\"iata\":\"GQ\",\"icao\":\"BSY\",\"callsign\":\"BIG SKY\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"1493\",\"name\":\"BAL Bashkirian Airlines\",\"alias\":\"\\\\N\",\"iata\":\"V9\",\"icao\":\"BTC\",\"callsign\":\"BASHKIRIAN\",\"country\":\"Russia\",\"active\":\"N\"},{\"id\":\"1500\",\"name\":\"Metro Batavia\",\"alias\":\"\\\\N\",\"iata\":\"7P\",\"icao\":\"BTV\",\"callsign\":\"BATAVIA\",\"country\":\"Indonesia\",\"active\":\"Y\"},{\"id\":\"1508\",\"name\":\"Berjaya Air\",\"alias\":\"\\\\N\",\"iata\":\"J8\",\"icao\":\"BVT\",\"callsign\":\"BERJAYA\",\"country\":\"Malaysia\",\"active\":\"Y\"},{\"id\":\"1516\",\"name\":\"BAX Global\",\"alias\":\"\\\\N\",\"iata\":\"8W\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"\",\"active\":\"N\"},{\"id\":\"1521\",\"name\":\"Bayu Indonesia Air\",\"alias\":\"\\\\N\",\"iata\":\"BM\",\"icao\":\"BYE\",\"callsign\":\"BAYU\",\"country\":\"Indonesia\",\"active\":\"N\"},{\"id\":\"1523\",\"name\":\"Brit Air\",\"alias\":\"\\\\N\",\"iata\":\"DB\",\"icao\":\"BZH\",\"callsign\":\"BRITAIR\",\"country\":\"France\",\"active\":\"Y\"},{\"id\":\"1530\",\"name\":\"Boston-Maine Airways\",\"alias\":\"\\\\N\",\"iata\":\"E9\",\"icao\":\"CXS\",\"callsign\":\"CLIPPER CONNECTION\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"1531\",\"name\":\"Brussels Airlines\",\"alias\":\"SN Brussels Airlines\",\"iata\":\"SN\",\"icao\":\"DAT\",\"callsign\":\"BEE-LINE\",\"country\":\"Belgium\",\"active\":\"Y\"},{\"id\":\"1539\",\"name\":\"Binter Canarias\",\"alias\":\"\\\\N\",\"iata\":\"NT\",\"icao\":\"IBB\",\"callsign\":\"\",\"country\":\"Spain\",\"active\":\"Y\"},{\"id\":\"1542\",\"name\":\"Blue Air\",\"alias\":\"\\\\N\",\"iata\":\"0B\",\"icao\":\"JOR\",\"callsign\":\"BLUE TRANSPORT\",\"country\":\"Romania\",\"active\":\"Y\"},{\"id\":\"1543\",\"name\":\"British Mediterranean Airways\",\"alias\":\"\\\\N\",\"iata\":\"KJ\",\"icao\":\"LAJ\",\"callsign\":\"BEE MED\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"1548\",\"name\":\"Bulgaria Air\",\"alias\":\"\\\\N\",\"iata\":\"FB\",\"icao\":\"LZB\",\"callsign\":\"FLYING BULGARIA\",\"country\":\"Bulgaria\",\"active\":\"Y\"},{\"id\":\"1550\",\"name\":\"Barents AirLink\",\"alias\":\"\\\\N\",\"iata\":\"8N\",\"icao\":\"NKF\",\"callsign\":\"NORDFLIGHT\",\"country\":\"Sweden\",\"active\":\"Y\"},{\"id\":\"1581\",\"name\":\"CAL Cargo Air Lines\",\"alias\":\"\\\\N\",\"iata\":\"5C\",\"icao\":\"ICL\",\"callsign\":\"CAL\",\"country\":\"Israel\",\"active\":\"Y\"},{\"id\":\"1588\",\"name\":\"CHC Airways\",\"alias\":\"\\\\N\",\"iata\":\"AW\",\"icao\":\"SCH\",\"callsign\":\"\",\"country\":\"Netherlands\",\"active\":\"N\"},{\"id\":\"1607\",\"name\":\"Calima Aviacion\",\"alias\":\"\\\\N\",\"iata\":\"XG\",\"icao\":\"CLI\",\"callsign\":\"CALIMA\",\"country\":\"Spain\",\"active\":\"Y\"},{\"id\":\"1608\",\"name\":\"Calm Air\",\"alias\":\"\\\\N\",\"iata\":\"MO\",\"icao\":\"CAV\",\"callsign\":\"CALM AIR\",\"country\":\"Canada\",\"active\":\"N\"},{\"id\":\"1609\",\"name\":\"Camai Air\",\"alias\":\"\\\\N\",\"iata\":\"R9\",\"icao\":\"CAM\",\"callsign\":\"AIR CAMAI\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"1611\",\"name\":\"Cameroon Airlines\",\"alias\":\"\\\\N\",\"iata\":\"UY\",\"icao\":\"UYC\",\"callsign\":\"CAM-AIR\",\"country\":\"Cameroon\",\"active\":\"N\"},{\"id\":\"1613\",\"name\":\"CanJet\",\"alias\":\"\\\\N\",\"iata\":\"C6\",\"icao\":\"CJA\",\"callsign\":\"CANJET\",\"country\":\"Canada\",\"active\":\"N\"},{\"id\":\"1615\",\"name\":\"Canadian Airlines\",\"alias\":\"\\\\N\",\"iata\":\"CP\",\"icao\":\"CDN\",\"callsign\":\"CANADIAN\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"1623\",\"name\":\"Canadian North\",\"alias\":\"\\\\N\",\"iata\":\"5T\",\"icao\":\"MPE\",\"callsign\":\"EMPRESS\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"1626\",\"name\":\"Canadian Western Airlines\",\"alias\":\"\\\\N\",\"iata\":\"W2\",\"icao\":\"CWA\",\"callsign\":\"CANADIAN WESTERN\",\"country\":\"Canada\",\"active\":\"N\"},{\"id\":\"1629\",\"name\":\"Cape Air\",\"alias\":\"\\\\N\",\"iata\":\"9K\",\"icao\":\"KAP\",\"callsign\":\"CAIR\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"1636\",\"name\":\"Capital Cargo International Airlines\",\"alias\":\"\\\\N\",\"iata\":\"PT\",\"icao\":\"CCI\",\"callsign\":\"CAPPY\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"1649\",\"name\":\"Cargo 360\",\"alias\":\"\\\\N\",\"iata\":\"GG\",\"icao\":\"GGC\",\"callsign\":\"LONG-HAUL\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"1654\",\"name\":\"Cargoitalia\",\"alias\":\"\\\\N\",\"iata\":\"2G\",\"icao\":\"CRG\",\"callsign\":\"WHITE PELICAN\",\"country\":\"Italy\",\"active\":\"N\"},{\"id\":\"1655\",\"name\":\"Cargojet Airways\",\"alias\":\"\\\\N\",\"iata\":\"W8\",\"icao\":\"CJT\",\"callsign\":\"CARGOJET\",\"country\":\"Canada\",\"active\":\"N\"},{\"id\":\"1656\",\"name\":\"Cargolux\",\"alias\":\"\\\\N\",\"iata\":\"CV\",\"icao\":\"CLX\",\"callsign\":\"CARGOLUX\",\"country\":\"Luxembourg\",\"active\":\"N\"},{\"id\":\"1663\",\"name\":\"Caribbean Airlines\",\"alias\":\"\\\\N\",\"iata\":\"BW\",\"icao\":\"BWA\",\"callsign\":\"CARIBBEAN AIRLINES\",\"country\":\"Trinidad and Tobago\",\"active\":\"Y\"},{\"id\":\"1666\",\"name\":\"Caribbean Star Airlines\",\"alias\":\"\\\\N\",\"iata\":\"8B\",\"icao\":\"GFI\",\"callsign\":\"CARIB STAR\",\"country\":\"Antigua and Barbuda\",\"active\":\"N\"},{\"id\":\"1669\",\"name\":\"Carpatair\",\"alias\":\"\\\\N\",\"iata\":\"V3\",\"icao\":\"KRP\",\"callsign\":\"CARPATAIR\",\"country\":\"Romania\",\"active\":\"Y\"},{\"id\":\"1675\",\"name\":\"Caspian Airlines\",\"alias\":\"\\\\N\",\"iata\":\"RV\",\"icao\":\"CPN\",\"callsign\":\"CASPIAN\",\"country\":\"Iran\",\"active\":\"Y\"},{\"id\":\"1680\",\"name\":\"Cathay Pacific\",\"alias\":\"\\\\N\",\"iata\":\"CX\",\"icao\":\"CPA\",\"callsign\":\"CATHAY\",\"country\":\"Hong Kong SAR of China\",\"active\":\"Y\"},{\"id\":\"1682\",\"name\":\"Cayman Airways\",\"alias\":\"\\\\N\",\"iata\":\"KX\",\"icao\":\"CAY\",\"callsign\":\"CAYMAN\",\"country\":\"Cayman Islands\",\"active\":\"Y\"},{\"id\":\"1683\",\"name\":\"Cebu Pacific\",\"alias\":\"\\\\N\",\"iata\":\"5J\",\"icao\":\"CEB\",\"callsign\":\"CEBU AIR\",\"country\":\"Philippines\",\"active\":\"Y\"},{\"id\":\"1688\",\"name\":\"Centavia\",\"alias\":\"\\\\N\",\"iata\":\"7N\",\"icao\":\"CNA\",\"callsign\":\"\",\"country\":\"Serbia\",\"active\":\"N\"},{\"id\":\"1708\",\"name\":\"Centralwings\",\"alias\":\"\\\\N\",\"iata\":\"C0\",\"icao\":\"CLW\",\"callsign\":\"CENTRALWINGS\",\"country\":\"Poland\",\"active\":\"Y\"},{\"id\":\"1711\",\"name\":\"Centre-Avia\",\"alias\":\"\\\\N\",\"iata\":\"J7\",\"icao\":\"CVC\",\"callsign\":\"AVIACENTRE\",\"country\":\"Russia\",\"active\":\"N\"},{\"id\":\"1714\",\"name\":\"Centurion Air Cargo\",\"alias\":\"\\\\N\",\"iata\":\"WE\",\"icao\":\"CWC\",\"callsign\":\"CHALLENGE CARGO\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"1721\",\"name\":\"Chalk's Ocean Airways\",\"alias\":\"\\\\N\",\"iata\":\"OP\",\"icao\":\"CHK\",\"callsign\":\"CHALKS\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"1727\",\"name\":\"Champion Air\",\"alias\":\"\\\\N\",\"iata\":\"MG\",\"icao\":\"CCP\",\"callsign\":\"CHAMPION AIR\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"1729\",\"name\":\"Changan Airlines\",\"alias\":\"\\\\N\",\"iata\":\"2Z\",\"icao\":\"CGN\",\"callsign\":\"CHANGAN\",\"country\":\"China\",\"active\":\"N\"},{\"id\":\"1733\",\"name\":\"Chari Aviation Services\",\"alias\":\"\\\\N\",\"iata\":\"S8\",\"icao\":\"CSU\",\"callsign\":\"CHARI SERVICE\",\"country\":\"Chad\",\"active\":\"N\"},{\"id\":\"1739\",\"name\":\"Chautauqua Airlines\",\"alias\":\"\\\\N\",\"iata\":\"RP\",\"icao\":\"CHQ\",\"callsign\":\"CHAUTAUQUA\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"1750\",\"name\":\"Chicago Express\",\"alias\":\"\\\\N\",\"iata\":\"C8\",\"icao\":\"WDY\",\"callsign\":\"WINDY CITY\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"1756\",\"name\":\"China Airlines\",\"alias\":\"\\\\N\",\"iata\":\"CI\",\"icao\":\"CAL\",\"callsign\":\"DYNASTY\",\"country\":\"Taiwan\",\"active\":\"Y\"},{\"id\":\"1757\",\"name\":\"China Cargo Airlines\",\"alias\":\"\\\\N\",\"iata\":\"CK\",\"icao\":\"CKK\",\"callsign\":\"CARGO KING\",\"country\":\"China\",\"active\":\"N\"},{\"id\":\"1758\",\"name\":\"China Eastern Airlines\",\"alias\":\"\\\\N\",\"iata\":\"MU\",\"icao\":\"CES\",\"callsign\":\"CHINA EASTERN\",\"country\":\"China\",\"active\":\"Y\"},{\"id\":\"1763\",\"name\":\"China Northern Airlines\",\"alias\":\"\\\\N\",\"iata\":\"CJ\",\"icao\":\"CBF\",\"callsign\":\"CHINA NORTHERN\",\"country\":\"China\",\"active\":\"N\"},{\"id\":\"1764\",\"name\":\"China Northwest Airlines\",\"alias\":\"\\\\N\",\"iata\":\"WH\",\"icao\":\"CNW\",\"callsign\":\"CHINA NORTHWEST\",\"country\":\"China\",\"active\":\"N\"},{\"id\":\"1766\",\"name\":\"China Postal Airlines\",\"alias\":\"\\\\N\",\"iata\":\"8Y\",\"icao\":\"CYZ\",\"callsign\":\"CHINA POST\",\"country\":\"China\",\"active\":\"N\"},{\"id\":\"1767\",\"name\":\"China Southern Airlines\",\"alias\":\"\\\\N\",\"iata\":\"CZ\",\"icao\":\"CSN\",\"callsign\":\"CHINA SOUTHERN\",\"country\":\"China\",\"active\":\"Y\"},{\"id\":\"1769\",\"name\":\"China United Airlines\",\"alias\":\"\\\\N\",\"iata\":\"HR\",\"icao\":\"CUA\",\"callsign\":\"LIANHANG\",\"country\":\"China\",\"active\":\"Y\"},{\"id\":\"1770\",\"name\":\"China Xinhua Airlines\",\"alias\":\"\\\\N\",\"iata\":\"XO\",\"icao\":\"CXH\",\"callsign\":\"XINHUA\",\"country\":\"China\",\"active\":\"N\"},{\"id\":\"1771\",\"name\":\"Yunnan Airlines\",\"alias\":\"\\\\N\",\"iata\":\"3Q\",\"icao\":\"CYH\",\"callsign\":\"YUNNAN\",\"country\":\"China\",\"active\":\"Y\"},{\"id\":\"1775\",\"name\":\"Chitaavia\",\"alias\":\"\\\\N\",\"iata\":\"X7\",\"icao\":\"CHF\",\"callsign\":\"CHITA\",\"country\":\"Russia\",\"active\":\"N\"},{\"id\":\"1780\",\"name\":\"Cielos Airlines\",\"alias\":\"\\\\N\",\"iata\":\"A2\",\"icao\":\"CIU\",\"callsign\":\"CIELOS\",\"country\":\"Peru\",\"active\":\"N\"},{\"id\":\"1781\",\"name\":\"Cimber Air\",\"alias\":\"\\\\N\",\"iata\":\"QI\",\"icao\":\"CIM\",\"callsign\":\"CIMBER\",\"country\":\"Denmark\",\"active\":\"Y\"},{\"id\":\"1784\",\"name\":\"Cirrus Airlines\",\"alias\":\"\\\\N\",\"iata\":\"C9\",\"icao\":\"RUS\",\"callsign\":\"CIRRUS AIR\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"1789\",\"name\":\"City Airline\",\"alias\":\"\\\\N\",\"iata\":\"CF\",\"icao\":\"SDR\",\"callsign\":\"SWEDESTAR\",\"country\":\"Sweden\",\"active\":\"Y\"},{\"id\":\"1790\",\"name\":\"City Connexion Airlines\",\"alias\":\"\\\\N\",\"iata\":\"G3\",\"icao\":\"CIX\",\"callsign\":\"CONNEXION\",\"country\":\"Burundi\",\"active\":\"Y\"},{\"id\":\"1792\",\"name\":\"CityJet\",\"alias\":\"\\\\N\",\"iata\":\"WX\",\"icao\":\"BCY\",\"callsign\":\"CITY-IRELAND\",\"country\":\"Ireland\",\"active\":\"Y\"},{\"id\":\"1795\",\"name\":\"BA CityFlyer\",\"alias\":\"\\\\N\",\"iata\":\"CJ\",\"icao\":\"CFE\",\"callsign\":\"FLYER\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"1800\",\"name\":\"Civil Air Transport\",\"alias\":\"\\\\N\",\"iata\":\"CT\",\"icao\":\"CAT\",\"callsign\":\"Mandarin\",\"country\":\"Taiwan\",\"active\":\"N\"},{\"id\":\"1812\",\"name\":\"Club Air\",\"alias\":\"\\\\N\",\"iata\":\"6P\",\"icao\":\"ISG\",\"callsign\":\"CLUBAIR\",\"country\":\"Italy\",\"active\":\"N\"},{\"id\":\"1813\",\"name\":\"Coast Air\",\"alias\":\"\\\\N\",\"iata\":\"BX\",\"icao\":\"CST\",\"callsign\":\"COAST CENTER\",\"country\":\"Norway\",\"active\":\"N\"},{\"id\":\"1814\",\"name\":\"Coastal Air\",\"alias\":\"\\\\N\",\"iata\":\"DQ\",\"icao\":\"\",\"callsign\":\"U.S. Virgin Islands\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"1821\",\"name\":\"Colgan Air\",\"alias\":\"\\\\N\",\"iata\":\"9L\",\"icao\":\"CJC\",\"callsign\":\"COLGAN\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"1828\",\"name\":\"Comair\",\"alias\":\"\\\\N\",\"iata\":\"OH\",\"icao\":\"COM\",\"callsign\":\"COMAIR\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"1829\",\"name\":\"Comair\",\"alias\":\"\\\\N\",\"iata\":\"MN\",\"icao\":\"CAW\",\"callsign\":\"COMMERCIAL\",\"country\":\"South Africa\",\"active\":\"Y\"},{\"id\":\"1843\",\"name\":\"CommutAir\",\"alias\":\"\\\\N\",\"iata\":\"C5\",\"icao\":\"UCA\",\"callsign\":\"COMMUTAIR\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"1844\",\"name\":\"Comores Airlines\",\"alias\":\"\\\\N\",\"iata\":\"KR\",\"icao\":\"CWK\",\"callsign\":\"CONTICOM\",\"country\":\"Comoros\",\"active\":\"Y\"},{\"id\":\"1856\",\"name\":\"Compania Mexicargo\",\"alias\":\"\\\\N\",\"iata\":\"GJ\",\"icao\":\"MXC\",\"callsign\":\"MEXICARGO\",\"country\":\"Mexico\",\"active\":\"N\"},{\"id\":\"1860\",\"name\":\"Compass Airlines\",\"alias\":\"\\\\N\",\"iata\":\"CP\",\"icao\":\"CPZ\",\"callsign\":\"Compass Rose\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"1868\",\"name\":\"Condor Flugdienst\",\"alias\":\"\\\\N\",\"iata\":\"DE\",\"icao\":\"CFG\",\"callsign\":\"CONDOR\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"1876\",\"name\":\"Consorcio Aviaxsa\",\"alias\":\"\\\\N\",\"iata\":\"6A\",\"icao\":\"CHP\",\"callsign\":\"AVIACSA\",\"country\":\"Mexico\",\"active\":\"Y\"},{\"id\":\"1879\",\"name\":\"Contact Air\",\"alias\":\"Contactair\",\"iata\":\"C3\",\"icao\":\"KIS\",\"callsign\":\"CONTACTAIR\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"1881\",\"name\":\"Continental Airlines\",\"alias\":\"\\\\N\",\"iata\":\"CO\",\"icao\":\"COA\",\"callsign\":\"CONTINENTAL\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"1882\",\"name\":\"Continental Airways\",\"alias\":\"\\\\N\",\"iata\":\"PC\",\"icao\":\"PVV\",\"callsign\":\"CONTAIR\",\"country\":\"Russia\",\"active\":\"N\"},{\"id\":\"1883\",\"name\":\"Continental Express\",\"alias\":\"\\\\N\",\"iata\":\"CO\",\"icao\":\"\",\"callsign\":\"JETLINK\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"1884\",\"name\":\"Continental Micronesia\",\"alias\":\"\\\\N\",\"iata\":\"CS\",\"icao\":\"CMI\",\"callsign\":\"AIR MIKE\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"1886\",\"name\":\"Conviasa\",\"alias\":\"\\\\N\",\"iata\":\"V0\",\"icao\":\"VCV\",\"callsign\":\"CONVIASA\",\"country\":\"Venezuela\",\"active\":\"Y\"},{\"id\":\"1889\",\"name\":\"Copa Airlines\",\"alias\":\"\\\\N\",\"iata\":\"CM\",\"icao\":\"CMP\",\"callsign\":\"COPA\",\"country\":\"Panama\",\"active\":\"Y\"},{\"id\":\"1908\",\"name\":\"Corsairfly\",\"alias\":\"\\\\N\",\"iata\":\"SS\",\"icao\":\"CRL\",\"callsign\":\"CORSAIR\",\"country\":\"France\",\"active\":\"Y\"},{\"id\":\"1909\",\"name\":\"Corse-Mediterranee\",\"alias\":\"\\\\N\",\"iata\":\"XK\",\"icao\":\"CCM\",\"callsign\":\"CORSICA\",\"country\":\"France\",\"active\":\"Y\"},{\"id\":\"1910\",\"name\":\"Cosmic Air\",\"alias\":\"\\\\N\",\"iata\":\"F5\",\"icao\":\"COZ\",\"callsign\":\"COSMIC AIR\",\"country\":\"Nepal\",\"active\":\"N\"},{\"id\":\"1925\",\"name\":\"Croatia Airlines\",\"alias\":\"\\\\N\",\"iata\":\"OU\",\"icao\":\"CTN\",\"callsign\":\"CROATIA\",\"country\":\"Croatia\",\"active\":\"Y\"},{\"id\":\"1936\",\"name\":\"Cubana de Aviación\",\"alias\":\"\\\\N\",\"iata\":\"CU\",\"icao\":\"CUB\",\"callsign\":\"CUBANA\",\"country\":\"Cuba\",\"active\":\"Y\"},{\"id\":\"1942\",\"name\":\"Cyprus Airways\",\"alias\":\"\\\\N\",\"iata\":\"CY\",\"icao\":\"CYP\",\"callsign\":\"CYPRUS\",\"country\":\"Cyprus\",\"active\":\"Y\"},{\"id\":\"1943\",\"name\":\"Cyprus Turkish Airlines\",\"alias\":\"\\\\N\",\"iata\":\"YK\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Turkey\",\"active\":\"Y\"},{\"id\":\"1946\",\"name\":\"Czech Airlines\",\"alias\":\"CSA Czech Airlines\",\"iata\":\"OK\",\"icao\":\"CSA\",\"callsign\":\"CSA-LINES\",\"country\":\"Czech Republic\",\"active\":\"Y\"},{\"id\":\"1952\",\"name\":\"DAS Air Cargo\",\"alias\":\"\\\\N\",\"iata\":\"WD\",\"icao\":\"DSR\",\"callsign\":\"DAIRAIR\",\"country\":\"Uganda\",\"active\":\"N\"},{\"id\":\"1954\",\"name\":\"DAT Danish Air Transport\",\"alias\":\"\\\\N\",\"iata\":\"DX\",\"icao\":\"DTR\",\"callsign\":\"DANISH\",\"country\":\"Denmark\",\"active\":\"Y\"},{\"id\":\"1963\",\"name\":\"DHL International\",\"alias\":\"\\\\N\",\"iata\":\"ES\",\"icao\":\"DHX\",\"callsign\":\"DILMUN\",\"country\":\"Bahrain\",\"active\":\"N\"},{\"id\":\"1964\",\"name\":\"DHL de Guatemala\",\"alias\":\"\\\\N\",\"iata\":\"L3\",\"icao\":\"JOS\",\"callsign\":\"\",\"country\":\"Guatemala\",\"active\":\"N\"},{\"id\":\"1966\",\"name\":\"Daallo Airlines\",\"alias\":\"\\\\N\",\"iata\":\"D3\",\"icao\":\"DAO\",\"callsign\":\"DALO AIRLINES\",\"country\":\"Djibouti\",\"active\":\"Y\"},{\"id\":\"1967\",\"name\":\"Dagestan Airlines\",\"alias\":\"\\\\N\",\"iata\":\"N2\",\"icao\":\"DAG\",\"callsign\":\"DAGAL\",\"country\":\"Russia\",\"active\":\"N\"},{\"id\":\"1973\",\"name\":\"Dalavia\",\"alias\":\"\\\\N\",\"iata\":\"H8\",\"icao\":\"KHB\",\"callsign\":\"DALAVIA\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"1983\",\"name\":\"Darwin Airline\",\"alias\":\"\\\\N\",\"iata\":\"0D\",\"icao\":\"DWT\",\"callsign\":\"DARWIN\",\"country\":\"Switzerland\",\"active\":\"Y\"},{\"id\":\"1993\",\"name\":\"Dauair\",\"alias\":\"\\\\N\",\"iata\":\"D5\",\"icao\":\"DAU\",\"callsign\":\"DAUAIR\",\"country\":\"Germany\",\"active\":\"N\"},{\"id\":\"2009\",\"name\":\"Delta Air Lines\",\"alias\":\"\\\\N\",\"iata\":\"DL\",\"icao\":\"DAL\",\"callsign\":\"DELTA\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"2021\",\"name\":\"Deutsche Bahn\",\"alias\":\"\\\\N\",\"iata\":\"2A\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"2022\",\"name\":\"Deutsche Rettungsflugwacht\",\"alias\":\"\\\\N\",\"iata\":\"1I\",\"icao\":\"AMB\",\"callsign\":\"CIVIL AIR AMBULANCE\",\"country\":\"Germany\",\"active\":\"N\"},{\"id\":\"2028\",\"name\":\"Dinar\",\"alias\":\"\\\\N\",\"iata\":\"D7\",\"icao\":\"RDN\",\"callsign\":\"AERO DINAR\",\"country\":\"Argentina\",\"active\":\"N\"},{\"id\":\"2035\",\"name\":\"Dirgantara Air Service\",\"alias\":\"\\\\N\",\"iata\":\"AW\",\"icao\":\"DIR\",\"callsign\":\"DIRGANTARA\",\"country\":\"Indonesia\",\"active\":\"N\"},{\"id\":\"2037\",\"name\":\"Discovery Airways\",\"alias\":\"\\\\N\",\"iata\":\"DH\",\"icao\":\"DVA\",\"callsign\":\"DISCOVERY AIRWAYS\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"2041\",\"name\":\"Djibouti Airlines\",\"alias\":\"\\\\N\",\"iata\":\"D8\",\"icao\":\"DJB\",\"callsign\":\"DJIBOUTI AIR\",\"country\":\"Djibouti\",\"active\":\"Y\"},{\"id\":\"2047\",\"name\":\"Dominicana de Aviaci\",\"alias\":\"\\\\N\",\"iata\":\"DO\",\"icao\":\"DOA\",\"callsign\":\"DOMINICANA\",\"country\":\"Dominican Republic\",\"active\":\"Y\"},{\"id\":\"2048\",\"name\":\"Domodedovo Airlines\",\"alias\":\"\\\\N\",\"iata\":\"E3\",\"icao\":\"DMO\",\"callsign\":\"DOMODEDOVO\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"2051\",\"name\":\"DonbassAero\",\"alias\":\"\\\\N\",\"iata\":\"5D\",\"icao\":\"UDC\",\"callsign\":\"DONBASS AERO\",\"country\":\"Ukraine\",\"active\":\"Y\"},{\"id\":\"2056\",\"name\":\"Dragonair\",\"alias\":\"\\\\N\",\"iata\":\"KA\",\"icao\":\"HDA\",\"callsign\":\" Hong Kong Dragon Airlines\",\"country\":\"DRAGON\",\"active\":\"Y\"},{\"id\":\"2058\",\"name\":\"Druk Air\",\"alias\":\"\\\\N\",\"iata\":\"KB\",\"icao\":\"DRK\",\"callsign\":\"ROYAL BHUTAN\",\"country\":\"Bhutan\",\"active\":\"Y\"},{\"id\":\"2077\",\"name\":\"dba\",\"alias\":\"\\\\N\",\"iata\":\"DI\",\"icao\":\"BAG\",\"callsign\":\"SPEEDWAY\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"2079\",\"name\":\"Electronic Data Systems\",\"alias\":\"\\\\N\",\"iata\":\"1C\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Switzerland\",\"active\":\"N\"},{\"id\":\"2090\",\"name\":\"EUjet\",\"alias\":\"\\\\N\",\"iata\":\"VE\",\"icao\":\"EUJ\",\"callsign\":\"UNION JET\",\"country\":\"Ireland\",\"active\":\"N\"},{\"id\":\"2091\",\"name\":\"EVA Air\",\"alias\":\"\\\\N\",\"iata\":\"BR\",\"icao\":\"EVA\",\"callsign\":\"EVA\",\"country\":\"Taiwan\",\"active\":\"Y\"},{\"id\":\"2094\",\"name\":\"Eagle Air\",\"alias\":\"\\\\N\",\"iata\":\"H7\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Uganda\",\"active\":\"Y\"},{\"id\":\"2104\",\"name\":\"East African\",\"alias\":\"\\\\N\",\"iata\":\"QU\",\"icao\":\"UGX\",\"callsign\":\"CRANE\",\"country\":\"Uganda\",\"active\":\"Y\"},{\"id\":\"2105\",\"name\":\"East African Safari Air\",\"alias\":\"\\\\N\",\"iata\":\"S9\",\"icao\":\"HSA\",\"callsign\":\"DUMA\",\"country\":\"Kenya\",\"active\":\"N\"},{\"id\":\"2117\",\"name\":\"Eastern Airways\",\"alias\":\"\\\\N\",\"iata\":\"T3\",\"icao\":\"EZE\",\"callsign\":\"EASTFLIGHT\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"2125\",\"name\":\"Eastland Air\",\"alias\":\"\\\\N\",\"iata\":\"DK\",\"icao\":\"ELA\",\"callsign\":\"\",\"country\":\"Australia\",\"active\":\"Y\"},{\"id\":\"2126\",\"name\":\"Eastwind Airlines\",\"alias\":\"\\\\N\",\"iata\":\"W9\",\"icao\":\"SGR\",\"callsign\":\"STINGER\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"2138\",\"name\":\"Edelweiss Air\",\"alias\":\"\\\\N\",\"iata\":\"WK\",\"icao\":\"EDW\",\"callsign\":\"EDELWEISS\",\"country\":\"Switzerland\",\"active\":\"Y\"},{\"id\":\"2143\",\"name\":\"Egyptair\",\"alias\":\"\\\\N\",\"iata\":\"MS\",\"icao\":\"MSR\",\"callsign\":\"EGYPTAIR\",\"country\":\"Egypt\",\"active\":\"Y\"},{\"id\":\"2150\",\"name\":\"El Al Israel Airlines\",\"alias\":\"\\\\N\",\"iata\":\"LY\",\"icao\":\"ELY\",\"callsign\":\"ELAL\",\"country\":\"Israel\",\"active\":\"Y\"},{\"id\":\"2155\",\"name\":\"El-Buraq Air Transport\",\"alias\":\"\\\\N\",\"iata\":\"UZ\",\"icao\":\"BRQ\",\"callsign\":\"BURAQAIR\",\"country\":\"Libya\",\"active\":\"Y\"},{\"id\":\"2183\",\"name\":\"Emirates\",\"alias\":\"Emirates Airlines\",\"iata\":\"EK\",\"icao\":\"UAE\",\"callsign\":\"EMIRATES\",\"country\":\"United Arab Emirates\",\"active\":\"Y\"},{\"id\":\"2186\",\"name\":\"Empire Airlines\",\"alias\":\"\\\\N\",\"iata\":\"EM\",\"icao\":\"CFS\",\"callsign\":\"EMPIRE AIR\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"2193\",\"name\":\"Empresa Ecuatoriana De Aviacion\",\"alias\":\"\\\\N\",\"iata\":\"EU\",\"icao\":\"EEA\",\"callsign\":\"ECUATORIANA\",\"country\":\"Ecuador\",\"active\":\"Y\"},{\"id\":\"2200\",\"name\":\"Enkor JSC\",\"alias\":\"\\\\N\",\"iata\":\"G8\",\"icao\":\"ENK\",\"callsign\":\"ENKOR\",\"country\":\"Russia]]\",\"active\":\"N\"},{\"id\":\"2205\",\"name\":\"Eos Airlines\",\"alias\":\"\\\\N\",\"iata\":\"E0\",\"icao\":\"ESS\",\"callsign\":\"NEW DAWN\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"2213\",\"name\":\"Eritrean Airlines\",\"alias\":\"\\\\N\",\"iata\":\"B8\",\"icao\":\"ERT\",\"callsign\":\"ERITREAN\",\"country\":\"Eritrea\",\"active\":\"Y\"},{\"id\":\"2217\",\"name\":\"Estafeta Carga Aerea\",\"alias\":\"\\\\N\",\"iata\":\"E7\",\"icao\":\"ESF\",\"callsign\":\"\",\"country\":\"Mexico\",\"active\":\"N\"},{\"id\":\"2218\",\"name\":\"Estonian Air\",\"alias\":\"\\\\N\",\"iata\":\"OV\",\"icao\":\"ELL\",\"callsign\":\"ESTONIAN\",\"country\":\"Estonia\",\"active\":\"Y\"},{\"id\":\"2220\",\"name\":\"Ethiopian Airlines\",\"alias\":\"\\\\N\",\"iata\":\"ET\",\"icao\":\"ETH\",\"callsign\":\"ETHIOPIAN\",\"country\":\"Ethiopia\",\"active\":\"Y\"},{\"id\":\"2222\",\"name\":\"Etihad Airways\",\"alias\":\"\\\\N\",\"iata\":\"EY\",\"icao\":\"ETD\",\"callsign\":\"ETIHAD\",\"country\":\"United Arab Emirates\",\"active\":\"Y\"},{\"id\":\"2226\",\"name\":\"Euro Exec Express\",\"alias\":\"\\\\N\",\"iata\":\"RZ\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Sweden\",\"active\":\"Y\"},{\"id\":\"2230\",\"name\":\"EuroAtlantic Airways\",\"alias\":\"\\\\N\",\"iata\":\"MM\",\"icao\":\"MMZ\",\"callsign\":\"EUROATLANTIC\",\"country\":\"Portugal\",\"active\":\"N\"},{\"id\":\"2237\",\"name\":\"Eurocypria Airlines\",\"alias\":\"\\\\N\",\"iata\":\"UI\",\"icao\":\"ECA\",\"callsign\":\"EUROCYPRIA\",\"country\":\"Cyprus\",\"active\":\"Y\"},{\"id\":\"2239\",\"name\":\"Eurofly Service\",\"alias\":\"\\\\N\",\"iata\":\"GJ\",\"icao\":\"EEU\",\"callsign\":\"EUROFLY\",\"country\":\"Italy\",\"active\":\"Y\"},{\"id\":\"2245\",\"name\":\"Eurolot\",\"alias\":\"\\\\N\",\"iata\":\"K2\",\"icao\":\"ELO\",\"callsign\":\"EUROLOT\",\"country\":\"Poland\",\"active\":\"Y\"},{\"id\":\"2246\",\"name\":\"Euromanx Airways\",\"alias\":\"\\\\N\",\"iata\":\"3W\",\"icao\":\"EMX\",\"callsign\":\"EUROMANX\",\"country\":\"Austria\",\"active\":\"N\"},{\"id\":\"2248\",\"name\":\"ASL Airlines France\",\"alias\":\"\\\\N\",\"iata\":\"5O\",\"icao\":\"FPO\",\"callsign\":\"FRENCH POST\",\"country\":\"France\",\"active\":\"N\"},{\"id\":\"2251\",\"name\":\"European Air Express\",\"alias\":\"\\\\N\",\"iata\":\"EA\",\"icao\":\"EAL\",\"callsign\":\"STAR WING\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"2252\",\"name\":\"European Air Transport\",\"alias\":\"\\\\N\",\"iata\":\"QY\",\"icao\":\"BCS\",\"callsign\":\"EUROTRANS\",\"country\":\"Belgium\",\"active\":\"N\"},{\"id\":\"2253\",\"name\":\"European Aviation Air Charter\",\"alias\":\"\\\\N\",\"iata\":\"E7\",\"icao\":\"EAF\",\"callsign\":\"EUROCHARTER\",\"country\":\"United Kingdom\",\"active\":\"N\"},{\"id\":\"2260\",\"name\":\"Eurowings\",\"alias\":\"\\\\N\",\"iata\":\"EW\",\"icao\":\"EWG\",\"callsign\":\"EUROWINGS\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"2261\",\"name\":\"Evergreen International Airlines\",\"alias\":\"\\\\N\",\"iata\":\"EZ\",\"icao\":\"EIA\",\"callsign\":\"EVERGREEN\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"2264\",\"name\":\"Excel Airways\",\"alias\":\"\\\\N\",\"iata\":\"JN\",\"icao\":\"XLA\",\"callsign\":\"EXPO\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"2267\",\"name\":\"Execair Aviation\",\"alias\":\"\\\\N\",\"iata\":\"MB\",\"icao\":\"EXA\",\"callsign\":\"CANADIAN EXECAIRE\",\"country\":\"Canada\",\"active\":\"N\"},{\"id\":\"2277\",\"name\":\"Executive Airlines\",\"alias\":\"\\\\N\",\"iata\":\"OW\",\"icao\":\"EXK\",\"callsign\":\"EXECUTIVE EAGLE\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"2288\",\"name\":\"Expo Aviation\",\"alias\":\"\\\\N\",\"iata\":\"8D\",\"icao\":\"EXV\",\"callsign\":\"EXPOAVIA\",\"country\":\"Sri Lanka\",\"active\":\"N\"},{\"id\":\"2293\",\"name\":\"Express One International\",\"alias\":\"\\\\N\",\"iata\":\"EO\",\"icao\":\"LHN\",\"callsign\":\"LONGHORN\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"2295\",\"name\":\"ExpressJet\",\"alias\":\"\\\\N\",\"iata\":\"XE\",\"icao\":\"BTA\",\"callsign\":\"JET LINK\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"2297\",\"name\":\"easyJet\",\"alias\":\"EasyJet Airline\",\"iata\":\"U2\",\"icao\":\"EZY\",\"callsign\":\"EASY\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"2320\",\"name\":\"Falcon Aviation\",\"alias\":\"\\\\N\",\"iata\":\"IH\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Sweden\",\"active\":\"N\"},{\"id\":\"2324\",\"name\":\"Far Eastern Air Transport\",\"alias\":\"\\\\N\",\"iata\":\"EF\",\"icao\":\"EFA\",\"callsign\":\"Far Eastern\",\"country\":\"Taiwan\",\"active\":\"Y\"},{\"id\":\"2331\",\"name\":\"Faroejet\",\"alias\":\"\\\\N\",\"iata\":\"F6\",\"icao\":\"RCK\",\"callsign\":\"ROCKROSE\",\"country\":\"Faroe Islands\",\"active\":\"N\"},{\"id\":\"2342\",\"name\":\"Federal Express\",\"alias\":\"\\\\N\",\"iata\":\"FX\",\"icao\":\"FDX\",\"callsign\":\"FEDEX\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"2345\",\"name\":\"Fika Salaama Airlines\",\"alias\":\"\\\\N\",\"iata\":\"N8\",\"icao\":\"HGK\",\"callsign\":\"SALAAMA\",\"country\":\"Uganda\",\"active\":\"N\"},{\"id\":\"2346\",\"name\":\"Finalair Congo\",\"alias\":\"\\\\N\",\"iata\":\"4S\",\"icao\":\"FNC\",\"callsign\":\"FINALAIR CONGO\",\"country\":\"Republic of the Congo\",\"active\":\"N\"},{\"id\":\"2350\",\"name\":\"Finnair\",\"alias\":\"\\\\N\",\"iata\":\"AY\",\"icao\":\"FIN\",\"callsign\":\"FINNAIR\",\"country\":\"Finland\",\"active\":\"Y\"},{\"id\":\"2351\",\"name\":\"Finncomm Airlines\",\"alias\":\"\\\\N\",\"iata\":\"FC\",\"icao\":\"WBA\",\"callsign\":\"WESTBIRD\",\"country\":\"Finland\",\"active\":\"Y\"},{\"id\":\"2353\",\"name\":\"Firefly\",\"alias\":\"\\\\N\",\"iata\":\"FY\",\"icao\":\"FFM\",\"callsign\":\"FIREFLY\",\"country\":\"Malaysia\",\"active\":\"Y\"},{\"id\":\"2354\",\"name\":\"First Air\",\"alias\":\"\\\\N\",\"iata\":\"7F\",\"icao\":\"FAB\",\"callsign\":\"\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"2357\",\"name\":\"First Choice Airways\",\"alias\":\"\\\\N\",\"iata\":\"DP\",\"icao\":\"FCA\",\"callsign\":\"JETSET\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"2362\",\"name\":\"Fischer Air\",\"alias\":\"\\\\N\",\"iata\":\"8F\",\"icao\":\"FFR\",\"callsign\":\"FISCHER\",\"country\":\"Czech Republic\",\"active\":\"N\"},{\"id\":\"2395\",\"name\":\"Flightline\",\"alias\":\"\\\\N\",\"iata\":\"B5\",\"icao\":\"FLT\",\"callsign\":\"FLIGHTLINE\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"2401\",\"name\":\"Florida Coastal Airlines\",\"alias\":\"\\\\N\",\"iata\":\"PA\",\"icao\":\"FCL\",\"callsign\":\"FLORIDA COASTAL\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"2404\",\"name\":\"Florida West International Airways\",\"alias\":\"\\\\N\",\"iata\":\"RF\",\"icao\":\"FWL\",\"callsign\":\"FLO WEST\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"2409\",\"name\":\"Fly Air\",\"alias\":\"\\\\N\",\"iata\":\"F2\",\"icao\":\"FLM\",\"callsign\":\"FLY WORLD\",\"country\":\"Turkey\",\"active\":\"N\"},{\"id\":\"2415\",\"name\":\"Fly Me Sweden\",\"alias\":\"\\\\N\",\"iata\":\"SH\",\"icao\":\"FLY\",\"callsign\":\"FLYBIRD\",\"country\":\"Sweden\",\"active\":\"N\"},{\"id\":\"2417\",\"name\":\"AirAsia X\",\"alias\":\"FlyAsianXpress\",\"iata\":\"D7\",\"icao\":\"XAX\",\"callsign\":\"XANADU\",\"country\":\"Malaysia\",\"active\":\"Y\"},{\"id\":\"2418\",\"name\":\"FlyLal\",\"alias\":\"\\\\N\",\"iata\":\"TE\",\"icao\":\"LIL\",\"callsign\":\"LITHUANIA AIR\",\"country\":\"Lithuania\",\"active\":\"Y\"},{\"id\":\"2419\",\"name\":\"FlyNordic\",\"alias\":\"\\\\N\",\"iata\":\"LF\",\"icao\":\"NDC\",\"callsign\":\"NORDIC\",\"country\":\"Sweden\",\"active\":\"Y\"},{\"id\":\"2420\",\"name\":\"Flybaboo\",\"alias\":\"\\\\N\",\"iata\":\"F7\",\"icao\":\"BBO\",\"callsign\":\"BABOO\",\"country\":\"Switzerland\",\"active\":\"Y\"},{\"id\":\"2421\",\"name\":\"Flybe\",\"alias\":\"\\\\N\",\"iata\":\"BE\",\"icao\":\"BEE\",\"callsign\":\"JERSEY\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"2425\",\"name\":\"Flyglobespan\",\"alias\":\"\\\\N\",\"iata\":\"B4\",\"icao\":\"GSM\",\"callsign\":\"GLOBESPAN\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"2439\",\"name\":\"Formosa Airlines\",\"alias\":\"\\\\N\",\"iata\":\"VY\",\"icao\":\"FOS\",\"callsign\":\"\",\"country\":\"Taiwan\",\"active\":\"Y\"},{\"id\":\"2443\",\"name\":\"Forward Air International Airlines\",\"alias\":\"\\\\N\",\"iata\":\"BN\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"2448\",\"name\":\"Four Star Aviation / Four Star Cargo\",\"alias\":\"\\\\N\",\"iata\":\"HK\",\"icao\":\"FSC\",\"callsign\":\"FOUR STAR\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"2454\",\"name\":\"Freedom Air\",\"alias\":\"\\\\N\",\"iata\":\"FP\",\"icao\":\"FRE\",\"callsign\":\"FREEDOM\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"2468\",\"name\":\"Frontier Airlines\",\"alias\":\"\\\\N\",\"iata\":\"F9\",\"icao\":\"FFT\",\"callsign\":\"FRONTIER FLIGHT\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"2470\",\"name\":\"Frontier Flying Service\",\"alias\":\"\\\\N\",\"iata\":\"2F\",\"icao\":\"FTA\",\"callsign\":\"FRONTIER-AIR\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"2480\",\"name\":\"Futura International Airways\",\"alias\":\"\\\\N\",\"iata\":\"FH\",\"icao\":\"FUA\",\"callsign\":\"FUTURA\",\"country\":\"Spain\",\"active\":\"N\"},{\"id\":\"2486\",\"name\":\"GB Airways\",\"alias\":\"\\\\N\",\"iata\":\"GT\",\"icao\":\"GBL\",\"callsign\":\"GEEBEE AIRWAYS\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"2508\",\"name\":\"Galaxy Air\",\"alias\":\"\\\\N\",\"iata\":\"7O\",\"icao\":\"GAL\",\"callsign\":\"GALAXY\",\"country\":\"Kyrgyzstan\",\"active\":\"N\"},{\"id\":\"2511\",\"name\":\"Galileo International\",\"alias\":\"\\\\N\",\"iata\":\"1G\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"2513\",\"name\":\"Gambia International Airlines\",\"alias\":\"\\\\N\",\"iata\":\"GC\",\"icao\":\"GNR\",\"callsign\":\"GAMBIA INTERNATIONAL\",\"country\":\"Gambia\",\"active\":\"N\"},{\"id\":\"2516\",\"name\":\"Gandalf Airlines\",\"alias\":\"\\\\N\",\"iata\":\"G7\",\"icao\":\"GNF\",\"callsign\":\"Gandalf\",\"country\":\"Italy\",\"active\":\"N\"},{\"id\":\"2520\",\"name\":\"Garuda Indonesia\",\"alias\":\"\\\\N\",\"iata\":\"GA\",\"icao\":\"GIA\",\"callsign\":\"INDONESIA\",\"country\":\"Indonesia\",\"active\":\"Y\"},{\"id\":\"2524\",\"name\":\"Gazpromavia\",\"alias\":\"\\\\N\",\"iata\":\"4G\",\"icao\":\"GZP\",\"callsign\":\"GAZPROMAVIA\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"2526\",\"name\":\"Gemini Air Cargo\",\"alias\":\"\\\\N\",\"iata\":\"GR\",\"icao\":\"GCO\",\"callsign\":\"GEMINI\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"2541\",\"name\":\"Georgian National Airlines\",\"alias\":\"\\\\N\",\"iata\":\"QB\",\"icao\":\"GFG\",\"callsign\":\"NATIONAL\",\"country\":\"Georgia\",\"active\":\"Y\"},{\"id\":\"2547\",\"name\":\"Germania\",\"alias\":\"\\\\N\",\"iata\":\"ST\",\"icao\":\"GMI\",\"callsign\":\"GERMANIA\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"2548\",\"name\":\"Germanwings\",\"alias\":\"\\\\N\",\"iata\":\"4U\",\"icao\":\"GWI\",\"callsign\":\"GERMAN WINGS\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"2551\",\"name\":\"Gestair\",\"alias\":\"\\\\N\",\"iata\":\"GP\",\"icao\":\"GES\",\"callsign\":\"GESTAIR\",\"country\":\"Spain\",\"active\":\"N\"},{\"id\":\"2556\",\"name\":\"Ghana International Airlines\",\"alias\":\"\\\\N\",\"iata\":\"G0\",\"icao\":\"GHB\",\"callsign\":\"GHANA AIRLINES\",\"country\":\"Ghana\",\"active\":\"Y\"},{\"id\":\"2575\",\"name\":\"Go Air\",\"alias\":\"\\\\N\",\"iata\":\"G8\",\"icao\":\"GOW\",\"callsign\":\"GOAIR\",\"country\":\"India\",\"active\":\"Y\"},{\"id\":\"2576\",\"name\":\"Go One Airways\",\"alias\":\"\\\\N\",\"iata\":\"GK\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"United Kingdom\",\"active\":\"N\"},{\"id\":\"2577\",\"name\":\"GoJet Airlines\",\"alias\":\"\\\\N\",\"iata\":\"G7\",\"icao\":\"GJS\",\"callsign\":\"GATEWAY\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"2581\",\"name\":\"Gol Transportes Aéreos\",\"alias\":\"\\\\N\",\"iata\":\"G3\",\"icao\":\"GLO\",\"callsign\":\"GOL TRANSPORTE\",\"country\":\"Brazil\",\"active\":\"Y\"},{\"id\":\"2585\",\"name\":\"Golden Air\",\"alias\":\"\\\\N\",\"iata\":\"DC\",\"icao\":\"GAO\",\"callsign\":\"GOLDEN\",\"country\":\"Sweden\",\"active\":\"Y\"},{\"id\":\"2595\",\"name\":\"Gorkha Airlines\",\"alias\":\"\\\\N\",\"iata\":\"G1\",\"icao\":\"IKA\",\"callsign\":\"GORKHA AIRLINES\",\"country\":\"Nepal\",\"active\":\"N\"},{\"id\":\"2607\",\"name\":\"Great Lakes Airlines\",\"alias\":\"\\\\N\",\"iata\":\"ZK\",\"icao\":\"GLA\",\"callsign\":\"LAKES AIR\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"2610\",\"name\":\"Great Wall Airlines\",\"alias\":\"\\\\N\",\"iata\":\"IJ\",\"icao\":\"GWL\",\"callsign\":\"GREAT WALL\",\"country\":\"China\",\"active\":\"N\"},{\"id\":\"2622\",\"name\":\"Grupo TACA\",\"alias\":\"TACA\",\"iata\":\"TA\",\"icao\":\"TAT\",\"callsign\":\"TACA-COSTARICA\",\"country\":\"Costa Rica\",\"active\":\"Y\"},{\"id\":\"2626\",\"name\":\"Guine Bissaur Airlines\",\"alias\":\"\\\\N\",\"iata\":\"G6\",\"icao\":\"BSR\",\"callsign\":\"BISSAU AIRLINES\",\"country\":\"Guinea-Bissau\",\"active\":\"N\"},{\"id\":\"2629\",\"name\":\"Guinee Airlines\",\"alias\":\"\\\\N\",\"iata\":\"J9\",\"icao\":\"GIF\",\"callsign\":\"GUINEE AIRLINES\",\"country\":\"Guinea\",\"active\":\"N\"},{\"id\":\"2634\",\"name\":\"Gujarat Airways\",\"alias\":\"\\\\N\",\"iata\":\"G8\",\"icao\":\"GUJ\",\"callsign\":\"GUJARATAIR\",\"country\":\"India\",\"active\":\"N\"},{\"id\":\"2638\",\"name\":\"Gulf Air Bahrain\",\"alias\":\"\\\\N\",\"iata\":\"GF\",\"icao\":\"GBA\",\"callsign\":\"GULF BAHRAIN\",\"country\":\"Bahrain\",\"active\":\"Y\"},{\"id\":\"2649\",\"name\":\"Guyana Airways 2000\",\"alias\":\"\\\\N\",\"iata\":\"GY\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"\",\"active\":\"N\"},{\"id\":\"2657\",\"name\":\"Hageland Aviation Services\",\"alias\":\"\\\\N\",\"iata\":\"H6\",\"icao\":\"HAG\",\"callsign\":\"HAGELAND\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"2659\",\"name\":\"Hahn Air\",\"alias\":\"\\\\N\",\"iata\":\"HR\",\"icao\":\"HHN\",\"callsign\":\"ROOSTER\",\"country\":\"Germany\",\"active\":\"N\"},{\"id\":\"2660\",\"name\":\"Hainan Airlines\",\"alias\":\"\\\\N\",\"iata\":\"HU\",\"icao\":\"CHH\",\"callsign\":\"HAINAN\",\"country\":\"China\",\"active\":\"Y\"},{\"id\":\"2661\",\"name\":\"Hainan Phoenix Information Systems\",\"alias\":\"\\\\N\",\"iata\":\"1R\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"China\",\"active\":\"N\"},{\"id\":\"2663\",\"name\":\"Haiti Ambassador Airlines\",\"alias\":\"\\\\N\",\"iata\":\"2T\",\"icao\":\"HAM\",\"callsign\":\"\",\"country\":\"Haiti\",\"active\":\"Y\"},{\"id\":\"2674\",\"name\":\"Hamburg International\",\"alias\":\"\\\\N\",\"iata\":\"4R\",\"icao\":\"HHI\",\"callsign\":\"HAMBURG JET\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"2681\",\"name\":\"TUIfly\",\"alias\":\"\\\\N\",\"iata\":\"X3\",\"icao\":\"HLX\",\"callsign\":\"YELLOW CAB\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"2682\",\"name\":\"Hapagfly\",\"alias\":\"\\\\N\",\"iata\":\"HF\",\"icao\":\"HLF\",\"callsign\":\"HAPAG LLOYD\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"2683\",\"name\":\"Harbor Airlines\",\"alias\":\"\\\\N\",\"iata\":\"HB\",\"icao\":\"HAR\",\"callsign\":\"HARBOR\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"2684\",\"name\":\"Harmony Airways\",\"alias\":\"\\\\N\",\"iata\":\"HQ\",\"icao\":\"HMY\",\"callsign\":\"HARMONY\",\"country\":\"Canada\",\"active\":\"N\"},{\"id\":\"2688\",\"name\":\"Hawaiian Airlines\",\"alias\":\"\\\\N\",\"iata\":\"HA\",\"icao\":\"HAL\",\"callsign\":\"HAWAIIAN\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"2689\",\"name\":\"Hawaiian Pacific Airlines\",\"alias\":\"\\\\N\",\"iata\":\"HP\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"2692\",\"name\":\"Hawkair\",\"alias\":\"\\\\N\",\"iata\":\"BH\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"2695\",\"name\":\"Heavylift Cargo Airlines\",\"alias\":\"\\\\N\",\"iata\":\"HN\",\"icao\":\"HVY\",\"callsign\":\"HEAVY CARGO\",\"country\":\"Australia\",\"active\":\"N\"},{\"id\":\"2704\",\"name\":\"Heli France\",\"alias\":\"\\\\N\",\"iata\":\"8H\",\"icao\":\"HFR\",\"callsign\":\"HELIFRANCE\",\"country\":\"France\",\"active\":\"Y\"},{\"id\":\"2731\",\"name\":\"Helijet\",\"alias\":\"\\\\N\",\"iata\":\"JB\",\"icao\":\"JBA\",\"callsign\":\"HELIJET\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"2735\",\"name\":\"Helios Airways\",\"alias\":\"\\\\N\",\"iata\":\"ZU\",\"icao\":\"HCY\",\"callsign\":\"HELIOS\",\"country\":\"Cyprus\",\"active\":\"N\"},{\"id\":\"2747\",\"name\":\"Hellas Jet\",\"alias\":\"\\\\N\",\"iata\":\"T4\",\"icao\":\"HEJ\",\"callsign\":\"HELLAS JET\",\"country\":\"Greece\",\"active\":\"Y\"},{\"id\":\"2748\",\"name\":\"Hello\",\"alias\":\"\\\\N\",\"iata\":\"HW\",\"icao\":\"FHE\",\"callsign\":\"FLYHELLO\",\"country\":\"Switzerland\",\"active\":\"Y\"},{\"id\":\"2750\",\"name\":\"Helvetic Airways\",\"alias\":\"\\\\N\",\"iata\":\"2L\",\"icao\":\"OAW\",\"callsign\":\"HELVETIC\",\"country\":\"Switzerland\",\"active\":\"Y\"},{\"id\":\"2751\",\"name\":\"Hemus Air\",\"alias\":\"\\\\N\",\"iata\":\"DU\",\"icao\":\"HMS\",\"callsign\":\"HEMUS AIR\",\"country\":\"Bulgaria\",\"active\":\"N\"},{\"id\":\"2756\",\"name\":\"Hewa Bora Airways\",\"alias\":\"\\\\N\",\"iata\":\"EO\",\"icao\":\"ALX\",\"callsign\":\"ALLCONGO\",\"country\":\"Democratic Republic of the Congo\",\"active\":\"N\"},{\"id\":\"2757\",\"name\":\"Hex'Air\",\"alias\":\"\\\\N\",\"iata\":\"UD\",\"icao\":\"HER\",\"callsign\":\"HEX AIRLINE\",\"country\":\"France\",\"active\":\"Y\"},{\"id\":\"2759\",\"name\":\"Hi Fly\",\"alias\":\"\\\\N\",\"iata\":\"5K\",\"icao\":\"HFY\",\"callsign\":\"SKY FLYER\",\"country\":\"Portugal\",\"active\":\"N\"},{\"id\":\"2765\",\"name\":\"Hokkaido International Airlines\",\"alias\":\"\\\\N\",\"iata\":\"HD\",\"icao\":\"ADO\",\"callsign\":\"AIR DO\",\"country\":\"Japan\",\"active\":\"Y\"},{\"id\":\"2767\",\"name\":\"Hola Airlines\",\"alias\":\"\\\\N\",\"iata\":\"H5\",\"icao\":\"HOA\",\"callsign\":\"HOLA\",\"country\":\"Spain\",\"active\":\"N\"},{\"id\":\"2773\",\"name\":\"Hong Kong Airlines\",\"alias\":\"\\\\N\",\"iata\":\"HX\",\"icao\":\"CRK\",\"callsign\":\"BAUHINIA\",\"country\":\"Hong Kong SAR of China\",\"active\":\"Y\"},{\"id\":\"2774\",\"name\":\"Hong Kong Express Airways\",\"alias\":\"\\\\N\",\"iata\":\"UO\",\"icao\":\"HKE\",\"callsign\":\"HONGKONG SHUTTLE\",\"country\":\"Hong Kong SAR of China\",\"active\":\"Y\"},{\"id\":\"2777\",\"name\":\"Hope Air\",\"alias\":\"\\\\N\",\"iata\":\"HH\",\"icao\":\"\",\"callsign\":\"HOPE AIR\",\"country\":\"Canada\",\"active\":\"N\"},{\"id\":\"2778\",\"name\":\"Horizon Air\",\"alias\":\"Horizon Airlines\",\"iata\":\"QX\",\"icao\":\"QXE\",\"callsign\":\"HORIZON AIR\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"2782\",\"name\":\"Horizon Airlines\",\"alias\":\"\\\\N\",\"iata\":\"BN\",\"icao\":\"HZA\",\"callsign\":\"\",\"country\":\"Australia\",\"active\":\"Y\"},{\"id\":\"2799\",\"name\":\"Héli Sécurité Helicopter Airlines\",\"alias\":\"\\\\N\",\"iata\":\"H4\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"France\",\"active\":\"N\"},{\"id\":\"2801\",\"name\":\"IBC Airways\",\"alias\":\"\\\\N\",\"iata\":\"II\",\"icao\":\"CSQ\",\"callsign\":\"CHASQUI\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"2805\",\"name\":\"ICAR Airlines\",\"alias\":\"\\\\N\",\"iata\":\"C3\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Ukraine\",\"active\":\"N\"},{\"id\":\"2815\",\"name\":\"INFINI Travel Information\",\"alias\":\"\\\\N\",\"iata\":\"1F\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Japan\",\"active\":\"N\"},{\"id\":\"2820\",\"name\":\"ITA Software\",\"alias\":\"\\\\N\",\"iata\":\"1U\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"2822\",\"name\":\"Iberia Airlines\",\"alias\":\"\\\\N\",\"iata\":\"IB\",\"icao\":\"IBE\",\"callsign\":\"IBERIA\",\"country\":\"Spain\",\"active\":\"Y\"},{\"id\":\"2825\",\"name\":\"Iberworld\",\"alias\":\"\\\\N\",\"iata\":\"TY\",\"icao\":\"IWD\",\"callsign\":\"\",\"country\":\"Spain\",\"active\":\"Y\"},{\"id\":\"2826\",\"name\":\"Ibex Airlines\",\"alias\":\"\\\\N\",\"iata\":\"FW\",\"icao\":\"IBX\",\"callsign\":\"IBEX\",\"country\":\"Japan\",\"active\":\"Y\"},{\"id\":\"2835\",\"name\":\"Icelandair\",\"alias\":\"\\\\N\",\"iata\":\"FI\",\"icao\":\"ICE\",\"callsign\":\"ICEAIR\",\"country\":\"Iceland\",\"active\":\"Y\"},{\"id\":\"2845\",\"name\":\"Imair Airlines\",\"alias\":\"\\\\N\",\"iata\":\"IK\",\"icao\":\"ITX\",\"callsign\":\"IMPROTEX\",\"country\":\"Azerbaijan\",\"active\":\"Y\"},{\"id\":\"2848\",\"name\":\"Independence Air\",\"alias\":\"\\\\N\",\"iata\":\"DH\",\"icao\":\"IDE\",\"callsign\":\"INDEPENDENCE AIR\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"2850\",\"name\":\"IndiGo Airlines\",\"alias\":\"\\\\N\",\"iata\":\"6E\",\"icao\":\"IGO\",\"callsign\":\"IFLY\",\"country\":\"India\",\"active\":\"Y\"},{\"id\":\"2853\",\"name\":\"Indian Airlines\",\"alias\":\"\\\\N\",\"iata\":\"IC\",\"icao\":\"IAC\",\"callsign\":\"INDAIR\",\"country\":\"India\",\"active\":\"Y\"},{\"id\":\"2855\",\"name\":\"Indigo\",\"alias\":\"\\\\N\",\"iata\":\"I9\",\"icao\":\"IBU\",\"callsign\":\"INDIGO BLUE\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"2857\",\"name\":\"Indonesia AirAsia\",\"alias\":\"\\\\N\",\"iata\":\"QZ\",\"icao\":\"AWQ\",\"callsign\":\"WAGON AIR\",\"country\":\"Indonesia\",\"active\":\"Y\"},{\"id\":\"2858\",\"name\":\"Indonesian Airlines\",\"alias\":\"\\\\N\",\"iata\":\"IO\",\"icao\":\"IAA\",\"callsign\":\"INDO LINES\",\"country\":\"Indonesia\",\"active\":\"Y\"},{\"id\":\"2869\",\"name\":\"InteliJet Airways\",\"alias\":\"\\\\N\",\"iata\":\"IJ\",\"icao\":\"IJT\",\"callsign\":\"INTELIJET\",\"country\":\"Colombia\",\"active\":\"N\"},{\"id\":\"2873\",\"name\":\"Inter Islands Airlines\",\"alias\":\"\\\\N\",\"iata\":\"H4\",\"icao\":\"IIN\",\"callsign\":\"\",\"country\":\"Cape Verde\",\"active\":\"N\"},{\"id\":\"2881\",\"name\":\"Interair South Africa\",\"alias\":\"\\\\N\",\"iata\":\"D6\",\"icao\":\"ILN\",\"callsign\":\"INLINE\",\"country\":\"South Africa\",\"active\":\"Y\"},{\"id\":\"2883\",\"name\":\"Interavia Airlines\",\"alias\":\"\\\\N\",\"iata\":\"ZA\",\"icao\":\"SUW\",\"callsign\":\"ASTAIR\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"2885\",\"name\":\"Intercontinental de Aviaci\",\"alias\":\"\\\\N\",\"iata\":\"RS\",\"icao\":\"ICT\",\"callsign\":\"CONTAVIA\",\"country\":\"Colombia\",\"active\":\"N\"},{\"id\":\"2896\",\"name\":\"Interlink Airlines\",\"alias\":\"\\\\N\",\"iata\":\"ID\",\"icao\":\"ITK\",\"callsign\":\"INTERLINK\",\"country\":\"South Africa\",\"active\":\"Y\"},{\"id\":\"2901\",\"name\":\"International Business Air\",\"alias\":\"\\\\N\",\"iata\":\"6I\",\"icao\":\"IBZ\",\"callsign\":\"INTERBIZ\",\"country\":\"Sweden\",\"active\":\"N\"},{\"id\":\"2916\",\"name\":\"Intersky\",\"alias\":\"\\\\N\",\"iata\":\"3L\",\"icao\":\"ISK\",\"callsign\":\"INTERSKY\",\"country\":\"Austria\",\"active\":\"Y\"},{\"id\":\"2917\",\"name\":\"Interstate Airline\",\"alias\":\"\\\\N\",\"iata\":\"I4\",\"icao\":\"FWA\",\"callsign\":\"FREEWAYAIR\",\"country\":\"Netherlands\",\"active\":\"N\"},{\"id\":\"2922\",\"name\":\"Iran Air\",\"alias\":\"\\\\N\",\"iata\":\"IR\",\"icao\":\"IRA\",\"callsign\":\"IRANAIR\",\"country\":\"Iran\",\"active\":\"Y\"},{\"id\":\"2923\",\"name\":\"Iran Aseman Airlines\",\"alias\":\"\\\\N\",\"iata\":\"EP\",\"icao\":\"IRC\",\"callsign\":\"\",\"country\":\"Iran\",\"active\":\"Y\"},{\"id\":\"2926\",\"name\":\"Iraqi Airways\",\"alias\":\"\\\\N\",\"iata\":\"IA\",\"icao\":\"IAW\",\"callsign\":\"IRAQI\",\"country\":\"Iraq\",\"active\":\"Y\"},{\"id\":\"2937\",\"name\":\"Island Airlines\",\"alias\":\"\\\\N\",\"iata\":\"IS\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"2941\",\"name\":\"Island Express\",\"alias\":\"\\\\N\",\"iata\":\"2S\",\"icao\":\"SDY\",\"callsign\":\"SANDY ISLE\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"2942\",\"name\":\"Cargo Plus Aviation\",\"alias\":\"\\\\N\",\"iata\":\"8L\",\"icao\":\"CGP\",\"callsign\":\"\",\"country\":\"United Arab Emirates\",\"active\":\"Y\"},{\"id\":\"2946\",\"name\":\"Islands Nationair\",\"alias\":\"\\\\N\",\"iata\":\"CN\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Papua New Guinea\",\"active\":\"N\"},{\"id\":\"2948\",\"name\":\"Islas Airways\",\"alias\":\"\\\\N\",\"iata\":\"IF\",\"icao\":\"ISW\",\"callsign\":\"PINTADERA\",\"country\":\"Spain\",\"active\":\"Y\"},{\"id\":\"2950\",\"name\":\"Islena De Inversiones\",\"alias\":\"\\\\N\",\"iata\":\"WC\",\"icao\":\"ISV\",\"callsign\":\"\",\"country\":\"Honduras\",\"active\":\"Y\"},{\"id\":\"2954\",\"name\":\"Israir\",\"alias\":\"\\\\N\",\"iata\":\"6H\",\"icao\":\"ISR\",\"callsign\":\"ISRAIR\",\"country\":\"Israel\",\"active\":\"Y\"},{\"id\":\"2956\",\"name\":\"Itali Airlines\",\"alias\":\"\\\\N\",\"iata\":\"9X\",\"icao\":\"ACL\",\"callsign\":\"ITALI\",\"country\":\"Italy\",\"active\":\"N\"},{\"id\":\"2958\",\"name\":\"Itek Air\",\"alias\":\"\\\\N\",\"iata\":\"GI\",\"icao\":\"IKA\",\"callsign\":\"ITEK-AIR\",\"country\":\"Kyrgyzstan\",\"active\":\"Y\"},{\"id\":\"2964\",\"name\":\"Izair\",\"alias\":\"\\\\N\",\"iata\":\"H9\",\"icao\":\"IZM\",\"callsign\":\"IZMIR\",\"country\":\"Turkey\",\"active\":\"N\"},{\"id\":\"2969\",\"name\":\"JAL Express\",\"alias\":\"\\\\N\",\"iata\":\"JC\",\"icao\":\"JEX\",\"callsign\":\"JANEX\",\"country\":\"Japan\",\"active\":\"Y\"},{\"id\":\"2970\",\"name\":\"JALways\",\"alias\":\"\\\\N\",\"iata\":\"JO\",\"icao\":\"JAZ\",\"callsign\":\"JALWAYS\",\"country\":\"Japan\",\"active\":\"Y\"},{\"id\":\"2976\",\"name\":\"JSC Transport Automated Information Systems\",\"alias\":\"\\\\N\",\"iata\":\"1M\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Russia\",\"active\":\"N\"},{\"id\":\"2987\",\"name\":\"Japan Airlines\",\"alias\":\"JAL Japan Airlines\",\"iata\":\"JL\",\"icao\":\"JAL\",\"callsign\":\"JAPANAIR\",\"country\":\"Japan\",\"active\":\"Y\"},{\"id\":\"2988\",\"name\":\"Japan Airlines Domestic\",\"alias\":\"\\\\N\",\"iata\":\"JL\",\"icao\":\"JAL\",\"callsign\":\"J-BIRD\",\"country\":\"Japan\",\"active\":\"Y\"},{\"id\":\"2989\",\"name\":\"Japan Asia Airways\",\"alias\":\"\\\\N\",\"iata\":\"EG\",\"icao\":\"JAA\",\"callsign\":\"ASIA\",\"country\":\"Japan\",\"active\":\"Y\"},{\"id\":\"2990\",\"name\":\"Japan Transocean Air\",\"alias\":\"\\\\N\",\"iata\":\"NU\",\"icao\":\"JTA\",\"callsign\":\"JAI OCEAN\",\"country\":\"Japan\",\"active\":\"Y\"},{\"id\":\"2991\",\"name\":\"Jat Airways\",\"alias\":\"\\\\N\",\"iata\":\"JU\",\"icao\":\"JAT\",\"callsign\":\"JAT\",\"country\":\"Serbia\",\"active\":\"Y\"},{\"id\":\"2992\",\"name\":\"Jatayu Airlines\",\"alias\":\"\\\\N\",\"iata\":\"VJ\",\"icao\":\"JTY\",\"callsign\":\"JATAYU\",\"country\":\"Indonesia\",\"active\":\"N\"},{\"id\":\"2993\",\"name\":\"Jazeera Airways\",\"alias\":\"\\\\N\",\"iata\":\"J9\",\"icao\":\"JZR\",\"callsign\":\"JAZEERA\",\"country\":\"Kuwait\",\"active\":\"Y\"},{\"id\":\"2994\",\"name\":\"Jeju Air\",\"alias\":\"\\\\N\",\"iata\":\"7C\",\"icao\":\"JJA\",\"callsign\":\"JEJU AIR\",\"country\":\"Republic of Korea\",\"active\":\"Y\"},{\"id\":\"3000\",\"name\":\"Jet Airways\",\"alias\":\"\\\\N\",\"iata\":\"9W\",\"icao\":\"JAI\",\"callsign\":\"JET AIRWAYS\",\"country\":\"India\",\"active\":\"Y\"},{\"id\":\"3001\",\"name\":\"Jet Airways\",\"alias\":\"\\\\N\",\"iata\":\"QJ\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"3007\",\"name\":\"Jetclub\",\"alias\":\"\\\\N\",\"iata\":\"0J\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Switzerland\",\"active\":\"N\"},{\"id\":\"3021\",\"name\":\"Jetstar Asia Airways\",\"alias\":\"\\\\N\",\"iata\":\"3K\",\"icao\":\"JSA\",\"callsign\":\"JETSTAR ASIA\",\"country\":\"Singapore\",\"active\":\"Y\"},{\"id\":\"3026\",\"name\":\"Jet2.com\",\"alias\":\"\\\\N\",\"iata\":\"LS\",\"icao\":\"EXS\",\"callsign\":\"CHANNEX\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"3027\",\"name\":\"Jet4You\",\"alias\":\"\",\"iata\":\"8J\",\"icao\":\"JFU\",\"callsign\":\"ARGAN\",\"country\":\"Morocco\",\"active\":\"Y\"},{\"id\":\"3029\",\"name\":\"JetBlue Airways\",\"alias\":\"\\\\N\",\"iata\":\"B6\",\"icao\":\"JBU\",\"callsign\":\"JETBLUE\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"3032\",\"name\":\"Jetairfly\",\"alias\":\"\\\\N\",\"iata\":\"JF\",\"icao\":\"JAF\",\"callsign\":\"BEAUTY\",\"country\":\"Belgium\",\"active\":\"Y\"},{\"id\":\"3035\",\"name\":\"Jetclub\",\"alias\":\"\\\\N\",\"iata\":\"0J\",\"icao\":\"JCS\",\"callsign\":\"JETCLUB\",\"country\":\"Switzerland\",\"active\":\"N\"},{\"id\":\"3051\",\"name\":\"JetsGo\",\"alias\":\"\\\\N\",\"iata\":\"SG\",\"icao\":\"JGO\",\"callsign\":\"JETSGO\",\"country\":\"Canada\",\"active\":\"N\"},{\"id\":\"3052\",\"name\":\"Jetstar Airways\",\"alias\":\"\\\\N\",\"iata\":\"JQ\",\"icao\":\"JST\",\"callsign\":\"JETSTAR\",\"country\":\"Australia\",\"active\":\"Y\"},{\"id\":\"3056\",\"name\":\"Jett8 Airlines Cargo\",\"alias\":\"\\\\N\",\"iata\":\"JX\",\"icao\":\"JEC\",\"callsign\":\"\",\"country\":\"Singapore\",\"active\":\"N\"},{\"id\":\"3060\",\"name\":\"Jetx Airlines\",\"alias\":\"\\\\N\",\"iata\":\"GX\",\"icao\":\"JXX\",\"callsign\":\"JETBIRD\",\"country\":\"Iceland\",\"active\":\"N\"},{\"id\":\"3073\",\"name\":\"Jordan Aviation\",\"alias\":\"\\\\N\",\"iata\":\"R5\",\"icao\":\"JAV\",\"callsign\":\"JORDAN AVIATION\",\"country\":\"Jordan\",\"active\":\"N\"},{\"id\":\"3081\",\"name\":\"Juneyao Airlines\",\"alias\":\"\\\\N\",\"iata\":\"HO\",\"icao\":\"DKH\",\"callsign\":\"JUNEYAO AIRLINES\",\"country\":\"China\",\"active\":\"Y\"},{\"id\":\"3087\",\"name\":\"KD Avia\",\"alias\":\"\\\\N\",\"iata\":\"KD\",\"icao\":\"KNI\",\"callsign\":\"KALININGRAD AIR\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"3088\",\"name\":\"KLM Cityhopper\",\"alias\":\"\\\\N\",\"iata\":\"WA\",\"icao\":\"KLC\",\"callsign\":\"CITY\",\"country\":\"Netherlands\",\"active\":\"Y\"},{\"id\":\"3090\",\"name\":\"KLM Royal Dutch Airlines\",\"alias\":\"\\\\N\",\"iata\":\"KL\",\"icao\":\"KLM\",\"callsign\":\"KLM\",\"country\":\"Netherlands\",\"active\":\"Y\"},{\"id\":\"3091\",\"name\":\"Kabo Air\",\"alias\":\"\\\\N\",\"iata\":\"N2\",\"icao\":\"QNK\",\"callsign\":\"KABO\",\"country\":\"Nigeria\",\"active\":\"N\"},{\"id\":\"3094\",\"name\":\"Kalitta Air\",\"alias\":\"\\\\N\",\"iata\":\"K4\",\"icao\":\"CKS\",\"callsign\":\"CONNIE\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"3097\",\"name\":\"Kam Air\",\"alias\":\"\\\\N\",\"iata\":\"RQ\",\"icao\":\"KMF\",\"callsign\":\"KAMGAR\",\"country\":\"Afghanistan\",\"active\":\"Y\"},{\"id\":\"3098\",\"name\":\"Kampuchea Airlines\",\"alias\":\"\\\\N\",\"iata\":\"E2\",\"icao\":\"KMP\",\"callsign\":\"KAMPUCHEA\",\"country\":\"Cambodia\",\"active\":\"N\"},{\"id\":\"3102\",\"name\":\"Karat\",\"alias\":\"\\\\N\",\"iata\":\"V2\",\"icao\":\"AKT\",\"callsign\":\"AVIAKARAT\",\"country\":\"Russia\",\"active\":\"N\"},{\"id\":\"3110\",\"name\":\"Kavminvodyavia\",\"alias\":\"\\\\N\",\"iata\":\"KV\",\"icao\":\"MVD\",\"callsign\":\"AIR MINVODY\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"3123\",\"name\":\"Kenmore Air\",\"alias\":\"\\\\N\",\"iata\":\"M5\",\"icao\":\"KEN\",\"callsign\":\"KENMORE\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"3126\",\"name\":\"Kenya Airways\",\"alias\":\"\\\\N\",\"iata\":\"KQ\",\"icao\":\"KQA\",\"callsign\":\"KENYA\",\"country\":\"Kenya\",\"active\":\"Y\"},{\"id\":\"3131\",\"name\":\"Keystone Air Services\",\"alias\":\"\\\\N\",\"iata\":\"BZ\",\"icao\":\"KEE\",\"callsign\":\"KEYSTONE\",\"country\":\"Canada\",\"active\":\"N\"},{\"id\":\"3142\",\"name\":\"Kingfisher Airlines\",\"alias\":\"\\\\N\",\"iata\":\"IT\",\"icao\":\"KFR\",\"callsign\":\"KINGFISHER\",\"country\":\"India\",\"active\":\"Y\"},{\"id\":\"3148\",\"name\":\"Kish Air\",\"alias\":\"\\\\N\",\"iata\":\"Y9\",\"icao\":\"IRK\",\"callsign\":\"KISHAIR\",\"country\":\"Iran\",\"active\":\"Y\"},{\"id\":\"3151\",\"name\":\"Kiwi International Air Lines\",\"alias\":\"\\\\N\",\"iata\":\"KP\",\"icao\":\"KIA\",\"callsign\":\"KIWI AIR\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"3157\",\"name\":\"Kogalymavia Air Company\",\"alias\":\"\\\\N\",\"iata\":\"7K\",\"icao\":\"KGL\",\"callsign\":\"KOGALYM\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"3160\",\"name\":\"Komiinteravia\",\"alias\":\"\",\"iata\":\"8J\",\"icao\":\"KMV\",\"callsign\":\"KOMIINTER\",\"country\":\"Russia\",\"active\":\"N\"},{\"id\":\"3163\",\"name\":\"Korean Air\",\"alias\":\"\\\\N\",\"iata\":\"KE\",\"icao\":\"KAL\",\"callsign\":\"KOREANAIR\",\"country\":\"Republic of Korea\",\"active\":\"Y\"},{\"id\":\"3168\",\"name\":\"Krasnojarsky Airlines\",\"alias\":\"\\\\N\",\"iata\":\"7B\",\"icao\":\"KJC\",\"callsign\":\"KRASNOJARSKY AIR\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"3172\",\"name\":\"Krylo Airlines\",\"alias\":\"\\\\N\",\"iata\":\"K9\",\"icao\":\"KRI\",\"callsign\":\"Krylo\",\"country\":\"Russia\",\"active\":\"N\"},{\"id\":\"3175\",\"name\":\"Kuban Airlines\",\"alias\":\"\\\\N\",\"iata\":\"GW\",\"icao\":\"KIL\",\"callsign\":\"AIR KUBAN\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"3176\",\"name\":\"Kunpeng Airlines\",\"alias\":\"\\\\N\",\"iata\":\"VD\",\"icao\":\"KPA\",\"callsign\":\"KUNPENG\",\"country\":\"China\",\"active\":\"N\"},{\"id\":\"3179\",\"name\":\"Kuwait Airways\",\"alias\":\"\\\\N\",\"iata\":\"KU\",\"icao\":\"KAC\",\"callsign\":\"KUWAITI\",\"country\":\"Kuwait\",\"active\":\"Y\"},{\"id\":\"3180\",\"name\":\"Kuzu Airlines Cargo\",\"alias\":\"\\\\N\",\"iata\":\"GO\",\"icao\":\"KZU\",\"callsign\":\"KUZU CARGO\",\"country\":\"Turkey\",\"active\":\"Y\"},{\"id\":\"3183\",\"name\":\"Kyrgyz Airlines\",\"alias\":\"\\\\N\",\"iata\":\"N5\",\"icao\":\"KGZ\",\"callsign\":\"BERMET\",\"country\":\"Kyrgyzstan\",\"active\":\"N\"},{\"id\":\"3185\",\"name\":\"Kyrgyzstan\",\"alias\":\"\\\\N\",\"iata\":\"QH\",\"icao\":\"LYN\",\"callsign\":\"ALTYN AVIA\",\"country\":\"Kyrgyzstan\",\"active\":\"N\"},{\"id\":\"3186\",\"name\":\"Kyrgyzstan Airlines\",\"alias\":\"\\\\N\",\"iata\":\"R8\",\"icao\":\"KGA\",\"callsign\":\"KYRGYZ\",\"country\":\"Kyrgyzstan\",\"active\":\"N\"},{\"id\":\"3189\",\"name\":\"Kibris T\",\"alias\":\"\\\\N\",\"iata\":\"KY\",\"icao\":\"KYV\",\"callsign\":\"AIRKIBRIS\",\"country\":\"Turkey\",\"active\":\"N\"},{\"id\":\"3196\",\"name\":\"L.A.B. Flying Service\",\"alias\":\"\\\\N\",\"iata\":\"JF\",\"icao\":\"LAB\",\"callsign\":\"LAB\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"3197\",\"name\":\"LACSA\",\"alias\":\"\\\\N\",\"iata\":\"LR\",\"icao\":\"LRC\",\"callsign\":\"LACSA\",\"country\":\"Costa Rica\",\"active\":\"Y\"},{\"id\":\"3199\",\"name\":\"LAI - Linea Aerea IAACA\",\"alias\":\"\\\\N\",\"iata\":\"KG\",\"icao\":\"BNX\",\"callsign\":\"AIR BARINAS\",\"country\":\"Venezuela\",\"active\":\"N\"},{\"id\":\"3200\",\"name\":\"LAN Airlines\",\"alias\":\"\\\\N\",\"iata\":\"LA\",\"icao\":\"LAN\",\"callsign\":\"LAN\",\"country\":\"Chile\",\"active\":\"Y\"},{\"id\":\"3201\",\"name\":\"LAN Argentina\",\"alias\":\"\\\\N\",\"iata\":\"4M\",\"icao\":\"DSM\",\"callsign\":\"LAN AR\",\"country\":\"Argentina\",\"active\":\"Y\"},{\"id\":\"3204\",\"name\":\"LAN Express\",\"alias\":\"\\\\N\",\"iata\":\"LU\",\"icao\":\"LXP\",\"callsign\":\"LANEX\",\"country\":\"Chile\",\"active\":\"Y\"},{\"id\":\"3205\",\"name\":\"LAN Peru\",\"alias\":\"\\\\N\",\"iata\":\"LP\",\"icao\":\"LPE\",\"callsign\":\"LANPERU\",\"country\":\"Peru\",\"active\":\"Y\"},{\"id\":\"3210\",\"name\":\"LOT Polish Airlines\",\"alias\":\"\\\\N\",\"iata\":\"LO\",\"icao\":\"LOT\",\"callsign\":\"POLLOT\",\"country\":\"Poland\",\"active\":\"Y\"},{\"id\":\"3211\",\"name\":\"LTE International Airways\",\"alias\":\"\\\\N\",\"iata\":\"XO\",\"icao\":\"LTE\",\"callsign\":\"FUN JET\",\"country\":\"Spain\",\"active\":\"Y\"},{\"id\":\"3212\",\"name\":\"LTU Austria\",\"alias\":\"\\\\N\",\"iata\":\"L3\",\"icao\":\"LTO\",\"callsign\":\"BILLA TRANSPORT\",\"country\":\"Austria\",\"active\":\"Y\"},{\"id\":\"3213\",\"name\":\"LTU International\",\"alias\":\"\\\\N\",\"iata\":\"LT\",\"icao\":\"LTU\",\"callsign\":\"LTU\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"3220\",\"name\":\"Lagun Air\",\"alias\":\"\\\\N\",\"iata\":\"N6\",\"icao\":\"JEV\",\"callsign\":\"\",\"country\":\"Spain\",\"active\":\"N\"},{\"id\":\"3229\",\"name\":\"Lankair\",\"alias\":\"\\\\N\",\"iata\":\"IK\",\"icao\":\"LKN\",\"callsign\":\"Lankair\",\"country\":\"Sri Lanka\",\"active\":\"N\"},{\"id\":\"3233\",\"name\":\"Lao Airlines\",\"alias\":\"\\\\N\",\"iata\":\"QV\",\"icao\":\"LAO\",\"callsign\":\"LAO\",\"country\":\"Lao Peoples Democratic Republic\",\"active\":\"Y\"},{\"id\":\"3235\",\"name\":\"Laoag International Airlines\",\"alias\":\"\\\\N\",\"iata\":\"L7\",\"icao\":\"LPN\",\"callsign\":\"LAOAG AIR\",\"country\":\"Philippines\",\"active\":\"N\"},{\"id\":\"3239\",\"name\":\"Lauda Air\",\"alias\":\"\\\\N\",\"iata\":\"NG\",\"icao\":\"LDA\",\"callsign\":\"LAUDA AIR\",\"country\":\"Austria\",\"active\":\"Y\"},{\"id\":\"3246\",\"name\":\"Lebanese Air Transport\",\"alias\":\"\\\\N\",\"iata\":\"LQ\",\"icao\":\"LAQ\",\"callsign\":\"LAT\",\"country\":\"Lebanon\",\"active\":\"N\"},{\"id\":\"3251\",\"name\":\"Leeward Islands Air Transport\",\"alias\":\"\\\\N\",\"iata\":\"LI\",\"icao\":\"LIA\",\"callsign\":\"LIAT\",\"country\":\"Antigua and Barbuda\",\"active\":\"Y\"},{\"id\":\"3258\",\"name\":\"Libyan Arab Airlines\",\"alias\":\"\\\\N\",\"iata\":\"LN\",\"icao\":\"LAA\",\"callsign\":\"LIBAIR\",\"country\":\"Libya\",\"active\":\"Y\"},{\"id\":\"3270\",\"name\":\"Linea Aerea SAPSA\",\"alias\":\"\\\\N\",\"iata\":\"L7\",\"icao\":\"LNP\",\"callsign\":\"SAPSA\",\"country\":\"Chile\",\"active\":\"N\"},{\"id\":\"3272\",\"name\":\"Linea Aerea de Servicio Ejecutivo Regional\",\"alias\":\"\\\\N\",\"iata\":\"8z\",\"icao\":\"LER\",\"callsign\":\"LASER\",\"country\":\"Venezuela\",\"active\":\"N\"},{\"id\":\"3274\",\"name\":\"Linea Turistica Aerotuy\",\"alias\":\"\\\\N\",\"iata\":\"LD\",\"icao\":\"TUY\",\"callsign\":\"AEREOTUY\",\"country\":\"Venezuela\",\"active\":\"N\"},{\"id\":\"3276\",\"name\":\"Lineas Aereas Azteca\",\"alias\":\"\\\\N\",\"iata\":\"ZE\",\"icao\":\"LCD\",\"callsign\":\"LINEAS AZTECA\",\"country\":\"Mexico\",\"active\":\"N\"},{\"id\":\"3287\",\"name\":\"Linhas A\",\"alias\":\"\\\\N\",\"iata\":\"LM\",\"icao\":\"LAM\",\"callsign\":\"MOZAMBIQUE\",\"country\":\"Mozambique\",\"active\":\"Y\"},{\"id\":\"3290\",\"name\":\"Lion Mentari Airlines\",\"alias\":\"\\\\N\",\"iata\":\"JT\",\"icao\":\"LNI\",\"callsign\":\"LION INTER\",\"country\":\"Indonesia\",\"active\":\"Y\"},{\"id\":\"3294\",\"name\":\"Livingston\",\"alias\":\"\\\\N\",\"iata\":\"LM\",\"icao\":\"LVG\",\"callsign\":\"LIVINGSTON\",\"country\":\"Italy\",\"active\":\"N\"},{\"id\":\"3295\",\"name\":\"Lloyd Aereo Boliviano\",\"alias\":\"\\\\N\",\"iata\":\"LB\",\"icao\":\"LLB\",\"callsign\":\"LLOYDAEREO\",\"country\":\"Bolivia\",\"active\":\"N\"},{\"id\":\"3319\",\"name\":\"Luftfahrtgesellschaft Walter\",\"alias\":\"\\\\N\",\"iata\":\"HE\",\"icao\":\"LGW\",\"callsign\":\"WALTER\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"3320\",\"name\":\"Lufthansa\",\"alias\":\"\\\\N\",\"iata\":\"LH\",\"icao\":\"DLH\",\"callsign\":\"LUFTHANSA\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"3321\",\"name\":\"Lufthansa Cargo\",\"alias\":\"\\\\N\",\"iata\":\"LH\",\"icao\":\"GEC\",\"callsign\":\"LUFTHANSA CARGO\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"3322\",\"name\":\"Lufthansa CityLine\",\"alias\":\"\\\\N\",\"iata\":\"CL\",\"icao\":\"CLH\",\"callsign\":\"HANSALINE\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"3323\",\"name\":\"Lufthansa Systems\",\"alias\":\"\\\\N\",\"iata\":\"L1\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Germany\",\"active\":\"N\"},{\"id\":\"3325\",\"name\":\"Lufttaxi Fluggesellschaft\",\"alias\":\"\",\"iata\":\"DV\",\"icao\":\"LTF\",\"callsign\":\"Garfield\",\"country\":\"Germany\",\"active\":\"N\"},{\"id\":\"3326\",\"name\":\"Lufttransport\",\"alias\":\"\\\\N\",\"iata\":\"L5\",\"icao\":\"LTR\",\"callsign\":\"LUFT TRANSPORT\",\"country\":\"Norway\",\"active\":\"Y\"},{\"id\":\"3329\",\"name\":\"Luxair\",\"alias\":\"\\\\N\",\"iata\":\"LG\",\"icao\":\"LGL\",\"callsign\":\"LUXAIR\",\"country\":\"Luxembourg\",\"active\":\"Y\"},{\"id\":\"3335\",\"name\":\"Lviv Airlines\",\"alias\":\"\\\\N\",\"iata\":\"5V\",\"icao\":\"UKW\",\"callsign\":\"UKRAINE WEST\",\"country\":\"Ukraine\",\"active\":\"N\"},{\"id\":\"3338\",\"name\":\"Lynden Air Cargo\",\"alias\":\"\\\\N\",\"iata\":\"L2\",\"icao\":\"LYC\",\"callsign\":\"LYNDEN\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"3342\",\"name\":\"L\",\"alias\":\"\\\\N\",\"iata\":\"MJ\",\"icao\":\"LPR\",\"callsign\":\"LAPA\",\"country\":\"Argentina\",\"active\":\"Y\"},{\"id\":\"3349\",\"name\":\"MasAir\",\"alias\":\"\\\\N\",\"iata\":\"M7\",\"icao\":\"MAA\",\"callsign\":\"MAS CARGA\",\"country\":\"Mexico\",\"active\":\"Y\"},{\"id\":\"3350\",\"name\":\"MAT Macedonian Airlines\",\"alias\":\"\\\\N\",\"iata\":\"IN\",\"icao\":\"MAK\",\"callsign\":\"MAKAVIO\",\"country\":\"Macedonia\",\"active\":\"Y\"},{\"id\":\"3354\",\"name\":\"MIAT Mongolian Airlines\",\"alias\":\"\\\\N\",\"iata\":\"OM\",\"icao\":\"MGL\",\"callsign\":\"MONGOL AIR\",\"country\":\"Mongolia\",\"active\":\"Y\"},{\"id\":\"3357\",\"name\":\"MNG Airlines\",\"alias\":\"\\\\N\",\"iata\":\"MB\",\"icao\":\"MNB\",\"callsign\":\"BLACK SEA\",\"country\":\"Turkey\",\"active\":\"Y\"},{\"id\":\"3363\",\"name\":\"Macair Airlines\",\"alias\":\"\\\\N\",\"iata\":\"CC\",\"icao\":\"MCK\",\"callsign\":\"\",\"country\":\"Australia\",\"active\":\"Y\"},{\"id\":\"3366\",\"name\":\"Maersk\",\"alias\":\"\\\\N\",\"iata\":\"DM\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Denmark\",\"active\":\"Y\"},{\"id\":\"3370\",\"name\":\"Mahan Air\",\"alias\":\"\\\\N\",\"iata\":\"W5\",\"icao\":\"IRM\",\"callsign\":\"MAHAN AIR\",\"country\":\"Iran\",\"active\":\"Y\"},{\"id\":\"3371\",\"name\":\"Mahfooz Aviation\",\"alias\":\"\\\\N\",\"iata\":\"M2\",\"icao\":\"MZS\",\"callsign\":\"MAHFOOZ\",\"country\":\"Gambia\",\"active\":\"N\"},{\"id\":\"3378\",\"name\":\"Malaysia Airlines\",\"alias\":\"\\\\N\",\"iata\":\"MH\",\"icao\":\"MAS\",\"callsign\":\"MALAYSIAN\",\"country\":\"Malaysia\",\"active\":\"Y\"},{\"id\":\"3386\",\"name\":\"Malmö Aviation\",\"alias\":\"\\\\N\",\"iata\":\"TF\",\"icao\":\"SCW\",\"callsign\":\"Scanwings\",\"country\":\"Sweden\",\"active\":\"Y\"},{\"id\":\"3387\",\"name\":\"Malta Air Charter\",\"alias\":\"\\\\N\",\"iata\":\"R5\",\"icao\":\"MAC\",\"callsign\":\"MALTA CHARTER\",\"country\":\"Malta\",\"active\":\"Y\"},{\"id\":\"3389\",\"name\":\"Malév\",\"alias\":\"\\\\N\",\"iata\":\"MA\",\"icao\":\"MAH\",\"callsign\":\"MALEV\",\"country\":\"Hungary\",\"active\":\"Y\"},{\"id\":\"3391\",\"name\":\"Mandala Airlines\",\"alias\":\"\\\\N\",\"iata\":\"RI\",\"icao\":\"MDL\",\"callsign\":\"MANDALA\",\"country\":\"Indonesia\",\"active\":\"Y\"},{\"id\":\"3392\",\"name\":\"Mandarin Airlines\",\"alias\":\"\\\\N\",\"iata\":\"AE\",\"icao\":\"MDA\",\"callsign\":\"Mandarin\",\"country\":\"Taiwan\",\"active\":\"Y\"},{\"id\":\"3393\",\"name\":\"Mango\",\"alias\":\"\\\\N\",\"iata\":\"JE\",\"icao\":\"MNO\",\"callsign\":\"TULCA\",\"country\":\"South Africa\",\"active\":\"Y\"},{\"id\":\"3406\",\"name\":\"Mars RK\",\"alias\":\"\\\\N\",\"iata\":\"6V\",\"icao\":\"MRW\",\"callsign\":\"AVIAMARS\",\"country\":\"Ukraine\",\"active\":\"N\"},{\"id\":\"3408\",\"name\":\"Marsland Aviation\",\"alias\":\"\\\\N\",\"iata\":\"M7\",\"icao\":\"MSL\",\"callsign\":\"MARSLANDAIR\",\"country\":\"Sudan\",\"active\":\"N\"},{\"id\":\"3411\",\"name\":\"Martinair\",\"alias\":\"\\\\N\",\"iata\":\"MP\",\"icao\":\"MPH\",\"callsign\":\"MARTINAIR\",\"country\":\"Netherlands\",\"active\":\"Y\"},{\"id\":\"3421\",\"name\":\"Mastertop Linhas Aereas\",\"alias\":\"\\\\N\",\"iata\":\"Q4\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Brazil\",\"active\":\"N\"},{\"id\":\"3428\",\"name\":\"Mavial Magadan Airlines\",\"alias\":\"\\\\N\",\"iata\":\"H5\",\"icao\":\"MVL\",\"callsign\":\"Mavial\",\"country\":\"Russia\",\"active\":\"N\"},{\"id\":\"3432\",\"name\":\"Maxair\",\"alias\":\"\\\\N\",\"iata\":\"8M\",\"icao\":\"MXL\",\"callsign\":\"MAXAIR\",\"country\":\"Sweden\",\"active\":\"Y\"},{\"id\":\"3434\",\"name\":\"Maxjet Airways\",\"alias\":\"\\\\N\",\"iata\":\"MY\",\"icao\":\"MXJ\",\"callsign\":\"MAX-JET\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"3437\",\"name\":\"Maya Island Air\",\"alias\":\"\\\\N\",\"iata\":\"MW\",\"icao\":\"MYD\",\"callsign\":\"MYLAND\",\"country\":\"Belize\",\"active\":\"Y\"},{\"id\":\"3448\",\"name\":\"Mediterranean Air Freight\",\"alias\":\"\\\\N\",\"iata\":\"0F\",\"icao\":\"MDF\",\"callsign\":\"MED-FREIGHT\",\"country\":\"Greece\",\"active\":\"N\"},{\"id\":\"3454\",\"name\":\"Menajet\",\"alias\":\"\\\\N\",\"iata\":\"IM\",\"icao\":\"MNJ\",\"callsign\":\"MENAJET\",\"country\":\"Lebanon\",\"active\":\"N\"},{\"id\":\"3463\",\"name\":\"Meridiana\",\"alias\":\"\\\\N\",\"iata\":\"IG\",\"icao\":\"ISS\",\"callsign\":\"MERAIR\",\"country\":\"Italy\",\"active\":\"Y\"},{\"id\":\"3465\",\"name\":\"Merpati Nusantara Airlines\",\"alias\":\"\\\\N\",\"iata\":\"MZ\",\"icao\":\"MNA\",\"callsign\":\"MERPATI\",\"country\":\"Indonesia\",\"active\":\"Y\"},{\"id\":\"3466\",\"name\":\"Mesa Airlines\",\"alias\":\"\\\\N\",\"iata\":\"YV\",\"icao\":\"ASH\",\"callsign\":\"AIR SHUTTLE\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"3467\",\"name\":\"Mesaba Airlines\",\"alias\":\"\\\\N\",\"iata\":\"XJ\",\"icao\":\"MES\",\"callsign\":\"MESABA\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"3479\",\"name\":\"Mexicana de Aviaci\",\"alias\":\"\\\\N\",\"iata\":\"MX\",\"icao\":\"MXA\",\"callsign\":\"MEXICANA\",\"country\":\"Mexico\",\"active\":\"Y\"},{\"id\":\"3482\",\"name\":\"Miami Air International\",\"alias\":\"\\\\N\",\"iata\":\"GL\",\"icao\":\"BSK\",\"callsign\":\"BISCAYNE\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"3490\",\"name\":\"Middle East Airlines\",\"alias\":\"\\\\N\",\"iata\":\"ME\",\"icao\":\"MEA\",\"callsign\":\"CEDAR JET\",\"country\":\"Lebanon\",\"active\":\"Y\"},{\"id\":\"3494\",\"name\":\"Midway Airlines\",\"alias\":\"\\\\N\",\"iata\":\"JI\",\"icao\":\"MDW\",\"callsign\":\"MIDWAY\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"3497\",\"name\":\"Midwest Airlines\",\"alias\":\"\\\\N\",\"iata\":\"YX\",\"icao\":\"MEP\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"3498\",\"name\":\"Midwest Airlines (Egypt)\",\"alias\":\"\\\\N\",\"iata\":\"MY\",\"icao\":\"MWA\",\"callsign\":\"\",\"country\":\"Egypt\",\"active\":\"Y\"},{\"id\":\"3529\",\"name\":\"Moldavian Airlines\",\"alias\":\"\\\\N\",\"iata\":\"2M\",\"icao\":\"MDV\",\"callsign\":\"MOLDAVIAN\",\"country\":\"Moldova\",\"active\":\"Y\"},{\"id\":\"3532\",\"name\":\"Monarch Airlines\",\"alias\":\"\\\\N\",\"iata\":\"ZB\",\"icao\":\"MON\",\"callsign\":\"MONARCH\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"3534\",\"name\":\"Myway Airlines\",\"alias\":\"\\\\N\",\"iata\":\"8I\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Italy\",\"active\":\"Y\"},{\"id\":\"3539\",\"name\":\"Montenegro Airlines\",\"alias\":\"\\\\N\",\"iata\":\"YM\",\"icao\":\"MGX\",\"callsign\":\"MONTAIR\",\"country\":\"Montenegro\",\"active\":\"Y\"},{\"id\":\"3545\",\"name\":\"Moskovia Airlines\",\"alias\":\"\\\\N\",\"iata\":\"3R\",\"icao\":\"GAI\",\"callsign\":\"GROMOV AIRLINE\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"3547\",\"name\":\"Motor Sich\",\"alias\":\"\\\\N\",\"iata\":\"M9\",\"icao\":\"MSI\",\"callsign\":\"MOTOR SICH\",\"country\":\"Ukraine\",\"active\":\"Y\"},{\"id\":\"3548\",\"name\":\"Mount Cook Airlines\",\"alias\":\"\\\\N\",\"iata\":\"NM\",\"icao\":\"NZM\",\"callsign\":\"MOUNTCOOK\",\"country\":\"New Zealand\",\"active\":\"N\"},{\"id\":\"3550\",\"name\":\"Mountain Air Company\",\"alias\":\"\\\\N\",\"iata\":\"N4\",\"icao\":\"MTC\",\"callsign\":\"MOUNTAIN LEONE\",\"country\":\"Sierra Leone\",\"active\":\"N\"},{\"id\":\"3568\",\"name\":\"MyTravel Airways\",\"alias\":\"\\\\N\",\"iata\":\"VZ\",\"icao\":\"MYT\",\"callsign\":\"KESTREL\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"3569\",\"name\":\"Myanma Airways\",\"alias\":\"\\\\N\",\"iata\":\"UB\",\"icao\":\"UBA\",\"callsign\":\"UNIONAIR\",\"country\":\"Myanmar\",\"active\":\"Y\"},{\"id\":\"3570\",\"name\":\"Myanmar Airways International\",\"alias\":\"\\\\N\",\"iata\":\"8M\",\"icao\":\"MMM\",\"callsign\":\"assignment postponed\",\"country\":\"Myanmar\",\"active\":\"Y\"},{\"id\":\"3584\",\"name\":\"Nantucket Airlines\",\"alias\":\"\\\\N\",\"iata\":\"DV\",\"icao\":\"ACK\",\"callsign\":\"ACK AIR\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"3588\",\"name\":\"Nas Air\",\"alias\":\"\\\\N\",\"iata\":\"P9\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Mali\",\"active\":\"N\"},{\"id\":\"3589\",\"name\":\"Nasair\",\"alias\":\"\\\\N\",\"iata\":\"UE\",\"icao\":\"NAS\",\"callsign\":\"NASAIRWAYS\",\"country\":\"Eritrea\",\"active\":\"Y\"},{\"id\":\"3596\",\"name\":\"National Airlines\",\"alias\":\"\\\\N\",\"iata\":\"N4\",\"icao\":\"NCN\",\"callsign\":\"\",\"country\":\"Chile\",\"active\":\"N\"},{\"id\":\"3597\",\"name\":\"National Airlines\",\"alias\":\"\\\\N\",\"iata\":\"N7\",\"icao\":\"ROK\",\"callsign\":\"RED ROCK\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"3598\",\"name\":\"National Airlines\",\"alias\":\"\\\\N\",\"iata\":\"NA\",\"icao\":\"NAL\",\"callsign\":\"NATIONAL\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"3600\",\"name\":\"National Airways Cameroon\",\"alias\":\"\\\\N\",\"iata\":\"9O\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Cameroon\",\"active\":\"N\"},{\"id\":\"3608\",\"name\":\"National Jet Systems\",\"alias\":\"\\\\N\",\"iata\":\"NC\",\"icao\":\"NJS\",\"callsign\":\"NATIONAL JET\",\"country\":\"Australia\",\"active\":\"Y\"},{\"id\":\"3613\",\"name\":\"Nationwide Airlines\",\"alias\":\"\\\\N\",\"iata\":\"CE\",\"icao\":\"NTW\",\"callsign\":\"NATIONWIDE\",\"country\":\"South Africa\",\"active\":\"Y\"},{\"id\":\"3618\",\"name\":\"Nauru Air Corporation\",\"alias\":\"\\\\N\",\"iata\":\"ON\",\"icao\":\"RON\",\"callsign\":\"AIR NAURU\",\"country\":\"Nauru\",\"active\":\"Y\"},{\"id\":\"3627\",\"name\":\"Navitaire\",\"alias\":\"\\\\N\",\"iata\":\"1N\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"3637\",\"name\":\"Nepal Airlines\",\"alias\":\"\\\\N\",\"iata\":\"RA\",\"icao\":\"RNA\",\"callsign\":\"ROYAL NEPAL\",\"country\":\"Nepal\",\"active\":\"Y\"},{\"id\":\"3638\",\"name\":\"Neos\",\"alias\":\"\\\\N\",\"iata\":\"NO\",\"icao\":\"NOS\",\"callsign\":\"MOONFLOWER\",\"country\":\"Italy\",\"active\":\"N\"},{\"id\":\"3641\",\"name\":\"NetJets\",\"alias\":\"\\\\N\",\"iata\":\"1I\",\"icao\":\"EJA\",\"callsign\":\"EXECJET\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"3644\",\"name\":\"New England Airlines\",\"alias\":\"\\\\N\",\"iata\":\"EJ\",\"icao\":\"NEA\",\"callsign\":\"NEW ENGLAND\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"3652\",\"name\":\"NextJet\",\"alias\":\"\\\\N\",\"iata\":\"2N\",\"icao\":\"NTJ\",\"callsign\":\"NEXTJET\",\"country\":\"Sweden\",\"active\":\"Y\"},{\"id\":\"3661\",\"name\":\"Niki\",\"alias\":\"\\\\N\",\"iata\":\"HG\",\"icao\":\"NLY\",\"callsign\":\"FLYNIKI\",\"country\":\"Austria\",\"active\":\"Y\"},{\"id\":\"3667\",\"name\":\"Nippon Cargo Airlines\",\"alias\":\"\\\\N\",\"iata\":\"KZ\",\"icao\":\"NCA\",\"callsign\":\"NIPPON CARGO\",\"country\":\"Japan\",\"active\":\"N\"},{\"id\":\"3674\",\"name\":\"Nok Air\",\"alias\":\"\\\\N\",\"iata\":\"DD\",\"icao\":\"NOK\",\"callsign\":\"NOK AIR\",\"country\":\"Thailand\",\"active\":\"Y\"},{\"id\":\"3679\",\"name\":\"Nordeste Linhas Aereas Regionais\",\"alias\":\"\\\\N\",\"iata\":\"JH\",\"icao\":\"NES\",\"callsign\":\"NORDESTE\",\"country\":\"Brazil\",\"active\":\"N\"},{\"id\":\"3680\",\"name\":\"Nordic Regional\",\"alias\":\"\\\\N\",\"iata\":\"6N\",\"icao\":\"NRD\",\"callsign\":\"NORTH RIDER\",\"country\":\"Sweden\",\"active\":\"N\"},{\"id\":\"3701\",\"name\":\"North Coast Aviation\",\"alias\":\"\\\\N\",\"iata\":\"N9\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Papua New Guinea\",\"active\":\"N\"},{\"id\":\"3702\",\"name\":\"North Flying\",\"alias\":\"\\\\N\",\"iata\":\"M3\",\"icao\":\"NFA\",\"callsign\":\"NORTH FLYING\",\"country\":\"Denmark\",\"active\":\"N\"},{\"id\":\"3710\",\"name\":\"North-Wright Airways\",\"alias\":\"\\\\N\",\"iata\":\"HW\",\"icao\":\"NWL\",\"callsign\":\"NORTHWRIGHT\",\"country\":\"Canada\",\"active\":\"N\"},{\"id\":\"3717\",\"name\":\"Northern Air Cargo\",\"alias\":\"\\\\N\",\"iata\":\"NC\",\"icao\":\"NAC\",\"callsign\":\"YUKON\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"3721\",\"name\":\"Northern Dene Airways\",\"alias\":\"\\\\N\",\"iata\":\"U7\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"3731\",\"name\":\"Northwest Airlines\",\"alias\":\"\\\\N\",\"iata\":\"NW\",\"icao\":\"NWA\",\"callsign\":\"NORTHWEST\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"3732\",\"name\":\"Northwest Regional Airlines\",\"alias\":\"\\\\N\",\"iata\":\"FY\",\"icao\":\"NWR\",\"callsign\":\"\",\"country\":\"Australia\",\"active\":\"N\"},{\"id\":\"3734\",\"name\":\"Northwestern Air\",\"alias\":\"\\\\N\",\"iata\":\"J3\",\"icao\":\"PLR\",\"callsign\":\"POLARIS\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"3737\",\"name\":\"Norwegian Air Shuttle\",\"alias\":\"\\\\N\",\"iata\":\"DY\",\"icao\":\"NAX\",\"callsign\":\"NOR SHUTTLE\",\"country\":\"Norway\",\"active\":\"Y\"},{\"id\":\"3740\",\"name\":\"Nouvel Air Tunisie\",\"alias\":\"\\\\N\",\"iata\":\"BJ\",\"icao\":\"LBT\",\"callsign\":\"NOUVELAIR\",\"country\":\"Tunisia\",\"active\":\"Y\"},{\"id\":\"3741\",\"name\":\"Nova Airline\",\"alias\":\"\\\\N\",\"iata\":\"M4\",\"icao\":\"NOV\",\"callsign\":\"NOVANILE\",\"country\":\"Sudan\",\"active\":\"N\"},{\"id\":\"3743\",\"name\":\"Novair\",\"alias\":\"\\\\N\",\"iata\":\"1I\",\"icao\":\"NVR\",\"callsign\":\"NAVIGATOR\",\"country\":\"Sweden\",\"active\":\"Y\"},{\"id\":\"3749\",\"name\":\"Nuevo Continente\",\"alias\":\"\\\\N\",\"iata\":\"N6\",\"icao\":\"ACQ\",\"callsign\":\"AERO CONTINENTE\",\"country\":\"Peru\",\"active\":\"N\"},{\"id\":\"3754\",\"name\":\"Nas Air\",\"alias\":\"\\\\N\",\"iata\":\"XY\",\"icao\":\"KNE\",\"callsign\":\"NAS EXPRESS\",\"country\":\"Saudi Arabia\",\"active\":\"Y\"},{\"id\":\"3756\",\"name\":\"O'Connor Airlines\",\"alias\":\"\\\\N\",\"iata\":\"UQ\",\"icao\":\"OCM\",\"callsign\":\"OCONNOR\",\"country\":\"Australia\",\"active\":\"N\"},{\"id\":\"3757\",\"name\":\"OAG\",\"alias\":\"\\\\N\",\"iata\":\"CR\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"United Kingdom\",\"active\":\"N\"},{\"id\":\"3759\",\"name\":\"Oasis Hong Kong Airlines\",\"alias\":\"\\\\N\",\"iata\":\"O8\",\"icao\":\"OHK\",\"callsign\":\"OASIS\",\"country\":\"Hong Kong\",\"active\":\"Y\"},{\"id\":\"3761\",\"name\":\"Ocean Airlines\",\"alias\":\"\\\\N\",\"iata\":\"VC\",\"icao\":\"VCX\",\"callsign\":\"OCEANCARGO\",\"country\":\"Italy\",\"active\":\"N\"},{\"id\":\"3764\",\"name\":\"Oceanair\",\"alias\":\"\\\\N\",\"iata\":\"O6\",\"icao\":\"ONE\",\"callsign\":\"OCEANAIR\",\"country\":\"Brazil\",\"active\":\"Y\"},{\"id\":\"3765\",\"name\":\"Oceanic Airlines\",\"alias\":\"\\\\N\",\"iata\":\"O2\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Guinea\",\"active\":\"Y\"},{\"id\":\"3776\",\"name\":\"Olympic Airlines\",\"alias\":\"\\\\N\",\"iata\":\"OA\",\"icao\":\"OAL\",\"callsign\":\"OLYMPIC\",\"country\":\"Greece\",\"active\":\"Y\"},{\"id\":\"3778\",\"name\":\"Oman Air\",\"alias\":\"\\\\N\",\"iata\":\"WY\",\"icao\":\"OMA\",\"callsign\":\"OMAN AIR\",\"country\":\"Oman\",\"active\":\"Y\"},{\"id\":\"3781\",\"name\":\"Omni Air International\",\"alias\":\"\\\\N\",\"iata\":\"OY\",\"icao\":\"OAE\",\"callsign\":\"OMNI-EXPRESS\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"3783\",\"name\":\"Omskavia Airline\",\"alias\":\"\\\\N\",\"iata\":\"N3\",\"icao\":\"OMS\",\"callsign\":\"OMSK\",\"country\":\"Russia\",\"active\":\"N\"},{\"id\":\"3788\",\"name\":\"Onur Air\",\"alias\":\"\\\\N\",\"iata\":\"8Q\",\"icao\":\"OHY\",\"callsign\":\"ONUR AIR\",\"country\":\"Turkey\",\"active\":\"Y\"},{\"id\":\"3805\",\"name\":\"Orenburg Airlines\",\"alias\":\"\\\\N\",\"iata\":\"R2\",\"icao\":\"ORB\",\"callsign\":\"ORENBURG\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"3811\",\"name\":\"Orient Thai Airlines\",\"alias\":\"\\\\N\",\"iata\":\"OX\",\"icao\":\"OEA\",\"callsign\":\"ORIENT THAI\",\"country\":\"Thailand\",\"active\":\"Y\"},{\"id\":\"3814\",\"name\":\"Origin Pacific Airways\",\"alias\":\"\\\\N\",\"iata\":\"QO\",\"icao\":\"OGN\",\"callsign\":\"ORIGIN\",\"country\":\"New Zealand\",\"active\":\"Y\"},{\"id\":\"3822\",\"name\":\"Ostfriesische Lufttransport\",\"alias\":\"\\\\N\",\"iata\":\"OL\",\"icao\":\"OLT\",\"callsign\":\"OLTRA\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"3824\",\"name\":\"Our Airline\",\"alias\":\"\\\\N\",\"iata\":\"ON\",\"icao\":\"RON\",\"callsign\":\"OUR AIRLINE\",\"country\":\"Nauru\",\"active\":\"N\"},{\"id\":\"3826\",\"name\":\"Overland Airways\",\"alias\":\"\\\\N\",\"iata\":\"OJ\",\"icao\":\"OLA\",\"callsign\":\"OVERLAND\",\"country\":\"Nigeria\",\"active\":\"Y\"},{\"id\":\"3830\",\"name\":\"Ozark Air Lines\",\"alias\":\"\\\\N\",\"iata\":\"OZ\",\"icao\":\"OZR\",\"callsign\":\"OZARK\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"3831\",\"name\":\"Ozjet Airlines\",\"alias\":\"\\\\N\",\"iata\":\"O7\",\"icao\":\"OZJ\",\"callsign\":\"AUSJET\",\"country\":\"Australia\",\"active\":\"Y\"},{\"id\":\"3834\",\"name\":\"PAN Air\",\"alias\":\"\\\\N\",\"iata\":\"PV\",\"icao\":\"PNR\",\"callsign\":\"SKYJET\",\"country\":\"Spain\",\"active\":\"Y\"},{\"id\":\"3835\",\"name\":\"PB Air\",\"alias\":\"\\\\N\",\"iata\":\"9Q\",\"icao\":\"PBA\",\"callsign\":\"PEEBEE AIR\",\"country\":\"Thailand\",\"active\":\"Y\"},{\"id\":\"3839\",\"name\":\"PLUNA\",\"alias\":\"\\\\N\",\"iata\":\"PU\",\"icao\":\"PUA\",\"callsign\":\"PLUNA\",\"country\":\"Uruguay\",\"active\":\"Y\"},{\"id\":\"3840\",\"name\":\"PMTair\",\"alias\":\"\\\\N\",\"iata\":\"U4\",\"icao\":\"PMT\",\"callsign\":\"MULTITRADE\",\"country\":\"Cambodia\",\"active\":\"Y\"},{\"id\":\"3845\",\"name\":\"Pace Airlines\",\"alias\":\"\\\\N\",\"iata\":\"Y5\",\"icao\":\"PCE\",\"callsign\":\"PACE\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"3850\",\"name\":\"Jetstar Pacific\",\"alias\":\"Pacific Airlines\",\"iata\":\"BL\",\"icao\":\"PIC\",\"callsign\":\"PACIFIC AIRLINES\",\"country\":\"Vietnam\",\"active\":\"Y\"},{\"id\":\"3854\",\"name\":\"Pacific Blue\",\"alias\":\"\\\\N\",\"iata\":\"DJ\",\"icao\":\"PBN\",\"callsign\":\"BLUEBIRD\",\"country\":\"New Zealand\",\"active\":\"N\"},{\"id\":\"3856\",\"name\":\"Pacific Coastal Airline\",\"alias\":\"\\\\N\",\"iata\":\"8P\",\"icao\":\"PCO\",\"callsign\":\"PASCO\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"3857\",\"name\":\"Pacific East Asia Cargo Airlines\",\"alias\":\"\\\\N\",\"iata\":\"Q8\",\"icao\":\"PEC\",\"callsign\":\"PAC-EAST CARGO\",\"country\":\"Philippines\",\"active\":\"Y\"},{\"id\":\"3864\",\"name\":\"Pacific Southwest Airlines\",\"alias\":\"\\\\N\",\"iata\":\"PS\",\"icao\":\"PSX\",\"callsign\":\"SMILEY\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"3865\",\"name\":\"Pacific Wings\",\"alias\":\"\\\\N\",\"iata\":\"LW\",\"icao\":\"NMI\",\"callsign\":\"TSUNAMI\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"3866\",\"name\":\"Pacificair\",\"alias\":\"\\\\N\",\"iata\":\"GX\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Philippines\",\"active\":\"N\"},{\"id\":\"3871\",\"name\":\"Pakistan International Airlines\",\"alias\":\"PIA Pakistan International\",\"iata\":\"PK\",\"icao\":\"PIA\",\"callsign\":\"PAKISTAN\",\"country\":\"Pakistan\",\"active\":\"Y\"},{\"id\":\"3875\",\"name\":\"Palau Trans Pacific Airline\",\"alias\":\"\\\\N\",\"iata\":\"GP\",\"icao\":\"PTP\",\"callsign\":\"TRANS PACIFIC\",\"country\":\"Palau\",\"active\":\"N\"},{\"id\":\"3876\",\"name\":\"Palestinian Airlines\",\"alias\":\"\\\\N\",\"iata\":\"PF\",\"icao\":\"PNW\",\"callsign\":\"PALESTINIAN\",\"country\":\"Egypt\",\"active\":\"N\"},{\"id\":\"3878\",\"name\":\"Pamir Airways\",\"alias\":\"\\\\N\",\"iata\":\"NR\",\"icao\":\"PIR\",\"callsign\":\"PAMIR\",\"country\":\"Afghanistan\",\"active\":\"N\"},{\"id\":\"3885\",\"name\":\"Pan American Airways\",\"alias\":\"\\\\N\",\"iata\":\"PA\",\"icao\":\"PAA\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"3886\",\"name\":\"Pan American World Airways\",\"alias\":\"\\\\N\",\"iata\":\"PA\",\"icao\":\"PAA\",\"callsign\":\"CLIPPER\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"3891\",\"name\":\"Panafrican Airways\",\"alias\":\"\\\\N\",\"iata\":\"PQ\",\"icao\":\"PNF\",\"callsign\":\"PANWAYS\",\"country\":\"Ivory Coast\",\"active\":\"N\"},{\"id\":\"3900\",\"name\":\"Pantanal Linhas Aéreas\",\"alias\":\"\\\\N\",\"iata\":\"P8\",\"icao\":\"PTN\",\"callsign\":\"PANTANAL\",\"country\":\"Brazil\",\"active\":\"N\"},{\"id\":\"3907\",\"name\":\"Paramount Airways\",\"alias\":\"\\\\N\",\"iata\":\"I7\",\"icao\":\"PMW\",\"callsign\":\"PARAWAY\",\"country\":\"India\",\"active\":\"Y\"},{\"id\":\"3923\",\"name\":\"Pearl Airways\",\"alias\":\"\\\\N\",\"iata\":\"HP\",\"icao\":\"HPA\",\"callsign\":\"PEARL AIRWAYS\",\"country\":\"Haiti\",\"active\":\"N\"},{\"id\":\"3926\",\"name\":\"Pegasus Airlines\",\"alias\":\"\\\\N\",\"iata\":\"PC\",\"icao\":\"PGT\",\"callsign\":\"SUNTURK\",\"country\":\"Turkey\",\"active\":\"Y\"},{\"id\":\"3928\",\"name\":\"Pegasus Hava Tasimaciligi\",\"alias\":\"\\\\N\",\"iata\":\"1I\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Turkey\",\"active\":\"N\"},{\"id\":\"3935\",\"name\":\"Peninsula Airways\",\"alias\":\"\\\\N\",\"iata\":\"KS\",\"icao\":\"PEN\",\"callsign\":\"PENINSULA\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"3941\",\"name\":\"Perm Airlines\",\"alias\":\"\\\\N\",\"iata\":\"P9\",\"icao\":\"PGP\",\"callsign\":\"PERM AIR\",\"country\":\"Russia\",\"active\":\"N\"},{\"id\":\"3952\",\"name\":\"Philippine Airlines\",\"alias\":\"\\\\N\",\"iata\":\"PR\",\"icao\":\"PAL\",\"callsign\":\"PHILIPPINE\",\"country\":\"Philippines\",\"active\":\"Y\"},{\"id\":\"3964\",\"name\":\"Phoenix Airways\",\"alias\":\"\\\\N\",\"iata\":\"HP\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Switzerland\",\"active\":\"N\"},{\"id\":\"3968\",\"name\":\"Phuket Air\",\"alias\":\"\\\\N\",\"iata\":\"9R\",\"icao\":\"VAP\",\"callsign\":\"PHUKET AIR\",\"country\":\"Thailand\",\"active\":\"N\"},{\"id\":\"3969\",\"name\":\"Piedmont Airlines (1948-1989)\",\"alias\":\"\\\\N\",\"iata\":\"PI\",\"icao\":\"PDT\",\"callsign\":\"PIEDMONT\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"3976\",\"name\":\"Pinnacle Airlines\",\"alias\":\"\\\\N\",\"iata\":\"9E\",\"icao\":\"FLG\",\"callsign\":\"FLAGSHIP\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"3992\",\"name\":\"Polar Air Cargo\",\"alias\":\"\\\\N\",\"iata\":\"PO\",\"icao\":\"PAC\",\"callsign\":\"POLAR\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"4013\",\"name\":\"Polynesian Airlines\",\"alias\":\"\\\\N\",\"iata\":\"PH\",\"icao\":\"PAO\",\"callsign\":\"POLYNESIAN\",\"country\":\"Samoa\",\"active\":\"Y\"},{\"id\":\"4014\",\"name\":\"Polynesian Blue\",\"alias\":\"\\\\N\",\"iata\":\"DJ\",\"icao\":\"PLB\",\"callsign\":\"POLYBLUE\",\"country\":\"New Zealand\",\"active\":\"N\"},{\"id\":\"4015\",\"name\":\"Polyot Sirena\",\"alias\":\"\\\\N\",\"iata\":\"1U\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Russia\",\"active\":\"N\"},{\"id\":\"4021\",\"name\":\"Porter Airlines\",\"alias\":\"\\\\N\",\"iata\":\"PD\",\"icao\":\"POE\",\"callsign\":\"PORTER AIR\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"4022\",\"name\":\"Portugalia\",\"alias\":\"\\\\N\",\"iata\":\"NI\",\"icao\":\"PGA\",\"callsign\":\"PORTUGALIA\",\"country\":\"Portugal\",\"active\":\"Y\"},{\"id\":\"4026\",\"name\":\"Potomac Air\",\"alias\":\"\\\\N\",\"iata\":\"BK\",\"icao\":\"PDC\",\"callsign\":\"DISTRICT\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"4031\",\"name\":\"Precision Air\",\"alias\":\"\\\\N\",\"iata\":\"PW\",\"icao\":\"PRF\",\"callsign\":\"PRECISION AIR\",\"country\":\"Tanzania\",\"active\":\"Y\"},{\"id\":\"4040\",\"name\":\"President Airlines\",\"alias\":\"null\",\"iata\":\"TO\",\"icao\":\"PSD\",\"callsign\":\"\",\"country\":\"Cambodia\",\"active\":\"N\"},{\"id\":\"4044\",\"name\":\"Primaris Airlines\",\"alias\":\"\\\\N\",\"iata\":\"FE\",\"icao\":\"WCP\",\"callsign\":\"WHITECAP\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"4051\",\"name\":\"Princess Air\",\"alias\":\"\\\\N\",\"iata\":\"8Q\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"\",\"active\":\"N\"},{\"id\":\"4059\",\"name\":\"Private Wings Flugcharter\",\"alias\":\"\\\\N\",\"iata\":\"8W\",\"icao\":\"PWF\",\"callsign\":\"PRIVATE WINGS\",\"country\":\"Germany\",\"active\":\"N\"},{\"id\":\"4066\",\"name\":\"Proflight Commuter Services\",\"alias\":\"\\\\N\",\"iata\":\"P0\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Zambia\",\"active\":\"Y\"},{\"id\":\"4089\",\"name\":\"Qantas\",\"alias\":\"Qantas Airways\",\"iata\":\"QF\",\"icao\":\"QFA\",\"callsign\":\"QANTAS\",\"country\":\"Australia\",\"active\":\"Y\"},{\"id\":\"4091\",\"name\":\"Qatar Airways\",\"alias\":\"\\\\N\",\"iata\":\"QR\",\"icao\":\"QTR\",\"callsign\":\"QATARI\",\"country\":\"Qatar\",\"active\":\"Y\"},{\"id\":\"4106\",\"name\":\"RACSA\",\"alias\":\"\\\\N\",\"iata\":\"R6\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Guatemala\",\"active\":\"Y\"},{\"id\":\"4134\",\"name\":\"Radixx Solutions International\",\"alias\":\"\\\\N\",\"iata\":\"1D\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"4162\",\"name\":\"Redhill Aviation\",\"alias\":\"\\\\N\",\"iata\":\"8L\",\"icao\":\"RHC\",\"callsign\":\"REDAIR\",\"country\":\"United Kingdom\",\"active\":\"N\"},{\"id\":\"4165\",\"name\":\"Reem Air\",\"alias\":\"\\\\N\",\"iata\":\"V4\",\"icao\":\"REK\",\"callsign\":\"REEM AIR\",\"country\":\"Kyrgyzstan\",\"active\":\"N\"},{\"id\":\"4177\",\"name\":\"Regional Airlines\",\"alias\":\"\\\\N\",\"iata\":\"FN\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Morocco\",\"active\":\"Y\"},{\"id\":\"4178\",\"name\":\"Regional Express\",\"alias\":\"\\\\N\",\"iata\":\"ZL\",\"icao\":\"RXA\",\"callsign\":\"REX\",\"country\":\"Australia\",\"active\":\"Y\"},{\"id\":\"4180\",\"name\":\"RegionsAir\",\"alias\":\"\\\\N\",\"iata\":\"3C\",\"icao\":\"CEA\",\"callsign\":\"CORP-X\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"4185\",\"name\":\"Reno Air\",\"alias\":\"\\\\N\",\"iata\":\"QQ\",\"icao\":\"ROA\",\"callsign\":\"RENO AIR\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"4187\",\"name\":\"Republic Airlines\",\"alias\":\"\\\\N\",\"iata\":\"RW\",\"icao\":\"RPA\",\"callsign\":\"BRICKYARD\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"4188\",\"name\":\"Republic Express Airlines\",\"alias\":\"\\\\N\",\"iata\":\"RH\",\"icao\":\"RPH\",\"callsign\":\"PUBLIC EXPRESS\",\"country\":\"Indonesia\",\"active\":\"Y\"},{\"id\":\"4198\",\"name\":\"Rico Linhas A\",\"alias\":\"\\\\N\",\"iata\":\"C7\",\"icao\":\"RLE\",\"callsign\":\"RICO\",\"country\":\"Brazil\",\"active\":\"N\"},{\"id\":\"4206\",\"name\":\"Rio Grande Air\",\"alias\":\"\\\\N\",\"iata\":\"E2\",\"icao\":\"GRN\",\"callsign\":\"GRANDE\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"4232\",\"name\":\"Rossiya\",\"alias\":\"\\\\N\",\"iata\":\"R4\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"4234\",\"name\":\"Air Rarotonga\",\"alias\":\"\\\\N\",\"iata\":\"GZ\",\"icao\":\"RAR\",\"callsign\":\"\",\"country\":\"Cook Islands\",\"active\":\"Y\"},{\"id\":\"4241\",\"name\":\"Royal Air Force\",\"alias\":\"\\\\N\",\"iata\":\"RR\",\"icao\":\"RFR\",\"callsign\":\"RAFAIR\",\"country\":\"United Kingdom\",\"active\":\"N\"},{\"id\":\"4242\",\"name\":\"Royal Air Force of Oman\",\"alias\":\"\\\\N\",\"iata\":\"RS\",\"icao\":\"MJN\",\"callsign\":\"MAJAN\",\"country\":\"Oman\",\"active\":\"N\"},{\"id\":\"4248\",\"name\":\"Royal Air Maroc\",\"alias\":\"\\\\N\",\"iata\":\"AT\",\"icao\":\"RAM\",\"callsign\":\"ROYALAIR MAROC\",\"country\":\"Morocco\",\"active\":\"Y\"},{\"id\":\"4249\",\"name\":\"Royal Airlines\",\"alias\":\"\\\\N\",\"iata\":\"R0\",\"icao\":\"RPK\",\"callsign\":\"ROYAL PAKISTAN\",\"country\":\"Pakistan\",\"active\":\"N\"},{\"id\":\"4251\",\"name\":\"Royal Aruban Airline\",\"alias\":\"\\\\N\",\"iata\":\"V5\",\"icao\":\"RYL\",\"callsign\":\"ROYAL ARUBAN\",\"country\":\"Aruba\",\"active\":\"N\"},{\"id\":\"4255\",\"name\":\"Royal Brunei Airlines\",\"alias\":\"\\\\N\",\"iata\":\"BI\",\"icao\":\"RBA\",\"callsign\":\"BRUNEI\",\"country\":\"Brunei\",\"active\":\"Y\"},{\"id\":\"4259\",\"name\":\"Royal Jordanian\",\"alias\":\"\\\\N\",\"iata\":\"RJ\",\"icao\":\"RJA\",\"callsign\":\"JORDANIAN\",\"country\":\"Jordan\",\"active\":\"Y\"},{\"id\":\"4261\",\"name\":\"Royal Khmer Airlines\",\"alias\":\"\\\\N\",\"iata\":\"RK\",\"icao\":\"RKH\",\"callsign\":\"KHMER AIR\",\"country\":\"Cambodia\",\"active\":\"N\"},{\"id\":\"4264\",\"name\":\"Royal Nepal Airlines\",\"alias\":\"\\\\N\",\"iata\":\"RA\",\"icao\":\"RNA\",\"callsign\":\"ROYAL NEPAL\",\"country\":\"Nepal\",\"active\":\"Y\"},{\"id\":\"4275\",\"name\":\"Royal Tongan Airlines\",\"alias\":\"\\\\N\",\"iata\":\"WR\",\"icao\":\"HRH\",\"callsign\":\"TONGA ROYAL\",\"country\":\"Tonga\",\"active\":\"N\"},{\"id\":\"4286\",\"name\":\"Russian Sky Airlines\",\"alias\":\"\\\\N\",\"iata\":\"P7\",\"icao\":\"ESL\",\"callsign\":\"RADUGA\",\"country\":\"Russia\",\"active\":\"N\"},{\"id\":\"4292\",\"name\":\"Rwandair Express\",\"alias\":\"\\\\N\",\"iata\":\"WB\",\"icao\":\"RWD\",\"callsign\":\"RWANDAIR\",\"country\":\"Rwanda\",\"active\":\"Y\"},{\"id\":\"4295\",\"name\":\"Ryan International Airlines\",\"alias\":\"\\\\N\",\"iata\":\"RD\",\"icao\":\"RYN\",\"callsign\":\"RYAN INTERNATIONAL\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"4296\",\"name\":\"Ryanair\",\"alias\":\"\\\\N\",\"iata\":\"FR\",\"icao\":\"RYR\",\"callsign\":\"RYANAIR\",\"country\":\"Ireland\",\"active\":\"Y\"},{\"id\":\"4299\",\"name\":\"Régional\",\"alias\":\"\\\\N\",\"iata\":\"YS\",\"icao\":\"RAE\",\"callsign\":\"REGIONAL EUROPE\",\"country\":\"France\",\"active\":\"Y\"},{\"id\":\"4304\",\"name\":\"SATA International\",\"alias\":\"\\\\N\",\"iata\":\"S4\",\"icao\":\"RZO\",\"callsign\":\"AIR AZORES\",\"country\":\"Portugal\",\"active\":\"Y\"},{\"id\":\"4305\",\"name\":\"South African Airways\",\"alias\":\"SAA South African Airways\",\"iata\":\"SA\",\"icao\":\"SAA\",\"callsign\":\"SPRINGBOK\",\"country\":\"South Africa\",\"active\":\"Y\"},{\"id\":\"4311\",\"name\":\"Shaheen Air International\",\"alias\":\"\\\\N\",\"iata\":\"NL\",\"icao\":\"SAI\",\"callsign\":\"SHAHEEN AIR\",\"country\":\"Pakistan\",\"active\":\"Y\"},{\"id\":\"4314\",\"name\":\"SAM Colombia\",\"alias\":\"\\\\N\",\"iata\":\"MM\",\"icao\":\"SAM\",\"callsign\":\"SAM\",\"country\":\"Colombia\",\"active\":\"N\"},{\"id\":\"4319\",\"name\":\"Scandinavian Airlines System\",\"alias\":\"SAS Scandinavian Airlines\",\"iata\":\"SK\",\"icao\":\"SAS\",\"callsign\":\"SCANDINAVIAN\",\"country\":\"Sweden\",\"active\":\"Y\"},{\"id\":\"4329\",\"name\":\"S7 Airlines\",\"alias\":\"Sibir Airlines\",\"iata\":\"S7\",\"icao\":\"SBI\",\"callsign\":\"SIBERIAN AIRLINES\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"4335\",\"name\":\"Seaborne Airlines\",\"alias\":\"\\\\N\",\"iata\":\"BB\",\"icao\":\"SBS\",\"callsign\":\"SEABORNE\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"4349\",\"name\":\"SriLankan Airlines\",\"alias\":\"\\\\N\",\"iata\":\"UL\",\"icao\":\"ALK\",\"callsign\":\"SRILANKAN\",\"country\":\"Sri Lanka\",\"active\":\"Y\"},{\"id\":\"4356\",\"name\":\"Sun Country Airlines\",\"alias\":\"\\\\N\",\"iata\":\"SY\",\"icao\":\"SCX\",\"callsign\":\"SUN COUNTRY\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"4374\",\"name\":\"Sky Express\",\"alias\":\"\\\\N\",\"iata\":\"G3\",\"icao\":\"SEH\",\"callsign\":\"AIR CRETE\",\"country\":\"Greece\",\"active\":\"Y\"},{\"id\":\"4375\",\"name\":\"Spicejet\",\"alias\":\"\\\\N\",\"iata\":\"SG\",\"icao\":\"SEJ\",\"callsign\":\"SPICEJET\",\"country\":\"India\",\"active\":\"Y\"},{\"id\":\"4379\",\"name\":\"Sky Eyes\",\"alias\":\"\\\\N\",\"iata\":\"I6\",\"icao\":\"SEQ\",\"callsign\":\"SKY EYES\",\"country\":\"Thailand\",\"active\":\"N\"},{\"id\":\"4381\",\"name\":\"SAETA\",\"alias\":\"\\\\N\",\"iata\":\"EH\",\"icao\":\"SET\",\"callsign\":\"SAETA\",\"country\":\"Ecuador\",\"active\":\"N\"},{\"id\":\"4388\",\"name\":\"Star Flyer\",\"alias\":\"\\\\N\",\"iata\":\"7G\",\"icao\":\"SFJ\",\"callsign\":\"STARFLYER\",\"country\":\"Japan\",\"active\":\"Y\"},{\"id\":\"4392\",\"name\":\"Safair\",\"alias\":\"\\\\N\",\"iata\":\"FA\",\"icao\":\"SFR\",\"callsign\":\"CARGO\",\"country\":\"South Africa\",\"active\":\"N\"},{\"id\":\"4411\",\"name\":\"Skagway Air Service\",\"alias\":\"\\\\N\",\"iata\":\"N5\",\"icao\":\"SGY\",\"callsign\":\"SKAGWAY AIR\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"4429\",\"name\":\"SATA Air Acores\",\"alias\":\"\\\\N\",\"iata\":\"SP\",\"icao\":\"SAT\",\"callsign\":\"SATA\",\"country\":\"Portugal\",\"active\":\"Y\"},{\"id\":\"4430\",\"name\":\"Scorpio Aviation\",\"alias\":\"\\\\N\",\"iata\":\"8S\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"\",\"active\":\"N\"},{\"id\":\"4435\",\"name\":\"Singapore Airlines\",\"alias\":\"\\\\N\",\"iata\":\"SQ\",\"icao\":\"SIA\",\"callsign\":\"SINGAPORE\",\"country\":\"Singapore\",\"active\":\"Y\"},{\"id\":\"4436\",\"name\":\"Sibaviatrans\",\"alias\":\"\\\\N\",\"iata\":\"5M\",\"icao\":\"SIB\",\"callsign\":\"SIBAVIA\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"4438\",\"name\":\"Skynet Airlines\",\"alias\":\"\\\\N\",\"iata\":\"SI\",\"icao\":\"SIH\",\"callsign\":\"BLUEJET\",\"country\":\"Ireland\",\"active\":\"Y\"},{\"id\":\"4445\",\"name\":\"SITA\",\"alias\":\"\\\\N\",\"iata\":\"XS\",\"icao\":\"SIT\",\"callsign\":\"\",\"country\":\"Belgium\",\"active\":\"N\"},{\"id\":\"4454\",\"name\":\"Sriwijaya Air\",\"alias\":\"\\\\N\",\"iata\":\"SJ\",\"icao\":\"SJY\",\"callsign\":\"SRIWIJAYA\",\"country\":\"Indonesia\",\"active\":\"Y\"},{\"id\":\"4455\",\"name\":\"Sama Airlines\",\"alias\":\"\\\\N\",\"iata\":\"ZS\",\"icao\":\"SMY\",\"callsign\":\"NAJIM\",\"country\":\"Saudi Arabia\",\"active\":\"Y\"},{\"id\":\"4464\",\"name\":\"Singapore Airlines Cargo\",\"alias\":\"\\\\N\",\"iata\":\"SQ\",\"icao\":\"SQC\",\"callsign\":\"SINGCARGO\",\"country\":\"Singapore\",\"active\":\"Y\"},{\"id\":\"4469\",\"name\":\"Siem Reap Airways\",\"alias\":\"\\\\N\",\"iata\":\"FT\",\"icao\":\"SRH\",\"callsign\":\"SIEMREAP AIR\",\"country\":\"Cambodia\",\"active\":\"Y\"},{\"id\":\"4470\",\"name\":\"Sky Work Airlines\",\"alias\":\"SkyWork\",\"iata\":\"SX\",\"icao\":\"SRK\",\"callsign\":\"SKYFOX\",\"country\":\"Switzerland\",\"active\":\"N\"},{\"id\":\"4471\",\"name\":\"Swedline Express\",\"alias\":\"\\\\N\",\"iata\":\"SM\",\"icao\":\"SRL\",\"callsign\":\"Starline\",\"country\":\"Sweden\",\"active\":\"N\"},{\"id\":\"4475\",\"name\":\"South East Asian Airlines\",\"alias\":\"\\\\N\",\"iata\":\"DG\",\"icao\":\"SRQ\",\"callsign\":\"SEAIR\",\"country\":\"Philippines\",\"active\":\"Y\"},{\"id\":\"4488\",\"name\":\"SwedJet Airways\",\"alias\":\"\\\\N\",\"iata\":\"VD\",\"icao\":\"BBB\",\"callsign\":\"BLACKBIRD\",\"country\":\"Sweden\",\"active\":\"N\"},{\"id\":\"4496\",\"name\":\"Skyservice Airlines\",\"alias\":\"\\\\N\",\"iata\":\"5G\",\"icao\":\"SSV\",\"callsign\":\"SKYTOUR\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"4513\",\"name\":\"Servicios de Transportes A\",\"alias\":\"\\\\N\",\"iata\":\"FS\",\"icao\":\"STU\",\"callsign\":\"FUEGUINO\",\"country\":\"Argentina\",\"active\":\"Y\"},{\"id\":\"4521\",\"name\":\"Sudan Airways\",\"alias\":\"\\\\N\",\"iata\":\"SD\",\"icao\":\"SUD\",\"callsign\":\"SUDANAIR\",\"country\":\"Sudan\",\"active\":\"Y\"},{\"id\":\"4522\",\"name\":\"Sun Air (Fiji)\",\"alias\":\"\\\\N\",\"iata\":\"PI\",\"icao\":\"SUF\",\"callsign\":\"SUNFLOWER\",\"country\":\"Fiji\",\"active\":\"N\"},{\"id\":\"4529\",\"name\":\"Sun Air of Scandinavia\",\"alias\":\"\\\\N\",\"iata\":\"EZ\",\"icao\":\"SUS\",\"callsign\":\"SUNSCAN\",\"country\":\"Denmark\",\"active\":\"N\"},{\"id\":\"4533\",\"name\":\"Saudi Arabian Airlines\",\"alias\":\"\\\\N\",\"iata\":\"SV\",\"icao\":\"SVA\",\"callsign\":\"SAUDIA\",\"country\":\"Saudi Arabia\",\"active\":\"Y\"},{\"id\":\"4547\",\"name\":\"Southwest Airlines\",\"alias\":\"\\\\N\",\"iata\":\"WN\",\"icao\":\"SWA\",\"callsign\":\"SOUTHWEST\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"4550\",\"name\":\"Southern Winds Airlines\",\"alias\":\"\\\\N\",\"iata\":\"A4\",\"icao\":\"SWD\",\"callsign\":\"SOUTHERN WINDS\",\"country\":\"Argentina\",\"active\":\"Y\"},{\"id\":\"4553\",\"name\":\"Sunwing Airlines\",\"alias\":\"\\\\N\",\"iata\":\"WG\",\"icao\":\"SWG\",\"callsign\":\"SUNWING\",\"country\":\"Canada\",\"active\":\"N\"},{\"id\":\"4559\",\"name\":\"Swiss International Air Lines\",\"alias\":\"Swiss Airlines\",\"iata\":\"LX\",\"icao\":\"SWR\",\"callsign\":\"SWISS\",\"country\":\"Switzerland\",\"active\":\"Y\"},{\"id\":\"4560\",\"name\":\"Swissair\",\"alias\":\"\\\\N\",\"iata\":\"SR\",\"icao\":\"SWR\",\"callsign\":\"Swissair\",\"country\":\"Switzerland\",\"active\":\"Y\"},{\"id\":\"4564\",\"name\":\"Swe Fly\",\"alias\":\"\\\\N\",\"iata\":\"WV\",\"icao\":\"SWV\",\"callsign\":\"FLYING SWEDE\",\"country\":\"Sweden\",\"active\":\"Y\"},{\"id\":\"4565\",\"name\":\"Shovkoviy Shlyah\",\"alias\":\"\\\\N\",\"iata\":\"S8\",\"icao\":\"SWW\",\"callsign\":\"WAY AERO\",\"country\":\"Ukraine\",\"active\":\"N\"},{\"id\":\"4573\",\"name\":\"SunExpress\",\"alias\":\"\\\\N\",\"iata\":\"XQ\",\"icao\":\"SXS\",\"callsign\":\"SUNEXPRESS\",\"country\":\"Turkey\",\"active\":\"Y\"},{\"id\":\"4586\",\"name\":\"Syrian Arab Airlines\",\"alias\":\"\\\\N\",\"iata\":\"RB\",\"icao\":\"SYR\",\"callsign\":\"SYRIANAIR\",\"country\":\"Syrian Arab Republic\",\"active\":\"Y\"},{\"id\":\"4589\",\"name\":\"Skywalk Airlines\",\"alias\":\"\\\\N\",\"iata\":\"AL\",\"icao\":\"SYX\",\"callsign\":\"SKYWAY-EX\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"4590\",\"name\":\"Silk Way Airlines\",\"alias\":\"\\\\N\",\"iata\":\"ZP\",\"icao\":\"AZQ\",\"callsign\":\"SILK LINE\",\"country\":\"Azerbaijan\",\"active\":\"N\"},{\"id\":\"4596\",\"name\":\"Samara Airlines\",\"alias\":\"\\\\N\",\"iata\":\"E5\",\"icao\":\"BRZ\",\"callsign\":\"BERYOZA\",\"country\":\"Russia\",\"active\":\"N\"},{\"id\":\"4599\",\"name\":\"Shandong Airlines\",\"alias\":\"\\\\N\",\"iata\":\"SC\",\"icao\":\"CDG\",\"callsign\":\"SHANDONG\",\"country\":\"China\",\"active\":\"Y\"},{\"id\":\"4607\",\"name\":\"Spring Airlines\",\"alias\":\"\\\\N\",\"iata\":\"9S\",\"icao\":\"CQH\",\"callsign\":\"AIR SPRING\",\"country\":\"China\",\"active\":\"Y\"},{\"id\":\"4608\",\"name\":\"Sichuan Airlines\",\"alias\":\"\\\\N\",\"iata\":\"3U\",\"icao\":\"CSC\",\"callsign\":\"SI CHUAN\",\"country\":\"China\",\"active\":\"Y\"},{\"id\":\"4609\",\"name\":\"Shanghai Airlines\",\"alias\":\"\\\\N\",\"iata\":\"FM\",\"icao\":\"CSH\",\"callsign\":\"SHANGHAI AIR\",\"country\":\"China\",\"active\":\"Y\"},{\"id\":\"4611\",\"name\":\"Shenzhen Airlines\",\"alias\":\"\\\\N\",\"iata\":\"ZH\",\"icao\":\"CSZ\",\"callsign\":\"SHENZHEN AIR\",\"country\":\"China\",\"active\":\"Y\"},{\"id\":\"4612\",\"name\":\"Shanxi Airlines\",\"alias\":\"\\\\N\",\"iata\":\"8C\",\"icao\":\"CXI\",\"callsign\":\"SHANXI\",\"country\":\"China\",\"active\":\"N\"},{\"id\":\"4619\",\"name\":\"Sun D'Or\",\"alias\":\"\\\\N\",\"iata\":\"7L\",\"icao\":\"ERO\",\"callsign\":\"ECHO ROMEO\",\"country\":\"Israel\",\"active\":\"Y\"},{\"id\":\"4620\",\"name\":\"SkyEurope\",\"alias\":\"\\\\N\",\"iata\":\"NE\",\"icao\":\"ESK\",\"callsign\":\"RELAX\",\"country\":\"Slovakia\",\"active\":\"Y\"},{\"id\":\"4621\",\"name\":\"Sunshine Express Airlines\",\"alias\":\"\\\\N\",\"iata\":\"CQ\",\"icao\":\"EXL\",\"callsign\":\"\",\"country\":\"Australia\",\"active\":\"N\"},{\"id\":\"4637\",\"name\":\"Superior Aviation\",\"alias\":\"\\\\N\",\"iata\":\"SO\",\"icao\":\"HKA\",\"callsign\":\"SPEND AIR\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"4652\",\"name\":\"Spanair\",\"alias\":\"\\\\N\",\"iata\":\"JK\",\"icao\":\"JKK\",\"callsign\":\"SPANAIR\",\"country\":\"Spain\",\"active\":\"Y\"},{\"id\":\"4670\",\"name\":\"San Juan Airlines\",\"alias\":\"\\\\N\",\"iata\":\"2G\",\"icao\":\"MRR\",\"callsign\":\"MARINER\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"4674\",\"name\":\"Sabre Pacific\",\"alias\":\"\\\\N\",\"iata\":\"1Z\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Australia\",\"active\":\"N\"},{\"id\":\"4675\",\"name\":\"Sabre\",\"alias\":\"\\\\N\",\"iata\":\"1S\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"4676\",\"name\":\"Sierra Nevada Airlines\",\"alias\":\"\\\\N\",\"iata\":\"1I\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"4677\",\"name\":\"Siren-Travel\",\"alias\":\"\\\\N\",\"iata\":\"1H\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Russia\",\"active\":\"N\"},{\"id\":\"4678\",\"name\":\"Sirena\",\"alias\":\"\\\\N\",\"iata\":\"1Q\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Russia\",\"active\":\"N\"},{\"id\":\"4679\",\"name\":\"Sky Trek International Airlines\",\"alias\":\"\\\\N\",\"iata\":\"1I\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"\",\"active\":\"N\"},{\"id\":\"4680\",\"name\":\"Southern Cross Distribution\",\"alias\":\"\\\\N\",\"iata\":\"1K\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Australia\",\"active\":\"N\"},{\"id\":\"4681\",\"name\":\"Sutra\",\"alias\":\"\\\\N\",\"iata\":\"1K\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"4682\",\"name\":\"SNCF\",\"alias\":\"\\\\N\",\"iata\":\"2C\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"France\",\"active\":\"N\"},{\"id\":\"4683\",\"name\":\"Star Equatorial Airlines\",\"alias\":\"\\\\N\",\"iata\":\"2S\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Guinea\",\"active\":\"N\"},{\"id\":\"4687\",\"name\":\"Spirit Airlines\",\"alias\":\"\\\\N\",\"iata\":\"NK\",\"icao\":\"NKS\",\"callsign\":\"SPIRIT WINGS\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"4691\",\"name\":\"SATENA\",\"alias\":\"\\\\N\",\"iata\":\"9R\",\"icao\":\"NSE\",\"callsign\":\"SATENA\",\"country\":\"Colombia\",\"active\":\"Y\"},{\"id\":\"4694\",\"name\":\"Slok Air Gambia\",\"alias\":\"\\\\N\",\"iata\":\"S0\",\"icao\":\"OKS\",\"callsign\":\"SLOK GAMBIA\",\"country\":\"Gambia\",\"active\":\"N\"},{\"id\":\"4699\",\"name\":\"Sosoliso Airlines\",\"alias\":\"\\\\N\",\"iata\":\"SO\",\"icao\":\"OSL\",\"callsign\":\"SOSOLISO\",\"country\":\"Nigeria\",\"active\":\"N\"},{\"id\":\"4711\",\"name\":\"Sky Trek International Airlines\",\"alias\":\"\\\\N\",\"iata\":\"1I\",\"icao\":\"PZR\",\"callsign\":\"PHAZER\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"4720\",\"name\":\"Skybus Airlines\",\"alias\":\"\\\\N\",\"iata\":\"SX\",\"icao\":\"SKB\",\"callsign\":\"SKYBUS\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"4728\",\"name\":\"SkyKing Turks and Caicos Airways\",\"alias\":\"\\\\N\",\"iata\":\"RU\",\"icao\":\"SKI\",\"callsign\":\"SKYKING\",\"country\":\"Turks and Caicos Islands\",\"active\":\"N\"},{\"id\":\"4735\",\"name\":\"Santa Barbara Airlines\",\"alias\":\"\\\\N\",\"iata\":\"S3\",\"icao\":\"BBR\",\"callsign\":\"SANTA BARBARA\",\"country\":\"Venezuela\",\"active\":\"Y\"},{\"id\":\"4737\",\"name\":\"Sky Airline\",\"alias\":\"\\\\N\",\"iata\":\"H2\",\"icao\":\"SKU\",\"callsign\":\"AEROSKY\",\"country\":\"Chile\",\"active\":\"Y\"},{\"id\":\"4738\",\"name\":\"SkyWest\",\"alias\":\"\\\\N\",\"iata\":\"OO\",\"icao\":\"SKW\",\"callsign\":\"SKYWEST\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"4739\",\"name\":\"Skyways Express\",\"alias\":\"\\\\N\",\"iata\":\"JZ\",\"icao\":\"SKX\",\"callsign\":\"SKY EXPRESS\",\"country\":\"Sweden\",\"active\":\"Y\"},{\"id\":\"4740\",\"name\":\"Skymark Airlines\",\"alias\":\"\\\\N\",\"iata\":\"BC\",\"icao\":\"SKY\",\"callsign\":\"SKYMARK\",\"country\":\"Japan\",\"active\":\"Y\"},{\"id\":\"4742\",\"name\":\"Sierra National Airlines\",\"alias\":\"\\\\N\",\"iata\":\"LJ\",\"icao\":\"SLA\",\"callsign\":\"SELAIR\",\"country\":\"Sierra Leone\",\"active\":\"N\"},{\"id\":\"4744\",\"name\":\"Silver Air\",\"alias\":\"\\\\N\",\"iata\":\"0E\",\"icao\":\"SLD\",\"callsign\":\"SILVERLINE\",\"country\":\"Czech Republic\",\"active\":\"N\"},{\"id\":\"4750\",\"name\":\"SilkAir\",\"alias\":\"\\\\N\",\"iata\":\"MI\",\"icao\":\"SLK\",\"callsign\":\"SILKAIR\",\"country\":\"Singapore\",\"active\":\"Y\"},{\"id\":\"4751\",\"name\":\"Slovak Airlines\",\"alias\":\"\\\\N\",\"iata\":\"6Q\",\"icao\":\"SLL\",\"callsign\":\"SLOV LINE\",\"country\":\"Slovakia\",\"active\":\"N\"},{\"id\":\"4752\",\"name\":\"Surinam Airways\",\"alias\":\"\\\\N\",\"iata\":\"PY\",\"icao\":\"SLM\",\"callsign\":\"SURINAM\",\"country\":\"Suriname\",\"active\":\"Y\"},{\"id\":\"4764\",\"name\":\"Servant Air\",\"alias\":\"\\\\N\",\"iata\":\"8D\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"4776\",\"name\":\"Sterling Airlines\",\"alias\":\"\\\\N\",\"iata\":\"NB\",\"icao\":\"SNB\",\"callsign\":\"STERLING\",\"country\":\"Denmark\",\"active\":\"Y\"},{\"id\":\"4781\",\"name\":\"Skynet Asia Airways\",\"alias\":\"\\\\N\",\"iata\":\"6J\",\"icao\":\"SNJ\",\"callsign\":\"NEWSKY\",\"country\":\"Japan\",\"active\":\"Y\"},{\"id\":\"4797\",\"name\":\"Solomon Airlines\",\"alias\":\"\\\\N\",\"iata\":\"IE\",\"icao\":\"SOL\",\"callsign\":\"SOLOMON\",\"country\":\"Solomon Islands\",\"active\":\"Y\"},{\"id\":\"4805\",\"name\":\"Saratov Aviation Division\",\"alias\":\"\\\\N\",\"iata\":\"6W\",\"icao\":\"SOV\",\"callsign\":\"SARATOV AIR\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"4808\",\"name\":\"Sat Airlines\",\"alias\":\"\\\\N\",\"iata\":\"HZ\",\"icao\":\"SOZ\",\"callsign\":\"SATCO\",\"country\":\"Kazakhstan\",\"active\":\"Y\"},{\"id\":\"4822\",\"name\":\"Shuttle America\",\"alias\":\"\\\\N\",\"iata\":\"S5\",\"icao\":\"TCF\",\"callsign\":\"MERCURY\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"4840\",\"name\":\"Scat Air\",\"alias\":\"\",\"iata\":\"DV\",\"icao\":\"VSV\",\"callsign\":\"VLASTA\",\"country\":\"Kazakhstan\",\"active\":\"Y\"},{\"id\":\"4854\",\"name\":\"Sirin\",\"alias\":\"\\\\N\",\"iata\":\"R1\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"\",\"active\":\"N\"},{\"id\":\"4855\",\"name\":\"Star Air\",\"alias\":\"\\\\N\",\"iata\":\"S6\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Denmark\",\"active\":\"N\"},{\"id\":\"4863\",\"name\":\"TAME\",\"alias\":\"\\\\N\",\"iata\":\"EQ\",\"icao\":\"TAE\",\"callsign\":\"TAME\",\"country\":\"Ecuador\",\"active\":\"Y\"},{\"id\":\"4867\",\"name\":\"TAM Brazilian Airlines\",\"alias\":\"\\\\N\",\"iata\":\"JJ\",\"icao\":\"TAM\",\"callsign\":\"TAM\",\"country\":\"Brazil\",\"active\":\"Y\"},{\"id\":\"4869\",\"name\":\"TAP Portugal\",\"alias\":\"TAP Air Portugal\",\"iata\":\"TP\",\"icao\":\"TAP\",\"callsign\":\"AIR PORTUGAL\",\"country\":\"Portugal\",\"active\":\"Y\"},{\"id\":\"4870\",\"name\":\"Tunisair\",\"alias\":\"\\\\N\",\"iata\":\"TU\",\"icao\":\"TAR\",\"callsign\":\"TUNAIR\",\"country\":\"Tunisia\",\"active\":\"Y\"},{\"id\":\"4873\",\"name\":\"ASL Airlines Belgium\",\"alias\":\"\\\\N\",\"iata\":\"3V\",\"icao\":\"TAY\",\"callsign\":\"QUALITY\",\"country\":\"Belgium\",\"active\":\"N\"},{\"id\":\"4877\",\"name\":\"Tropical Airways\",\"alias\":\"\\\\N\",\"iata\":\"M7\",\"icao\":\"TBG\",\"callsign\":\"\",\"country\":\"Haiti\",\"active\":\"N\"},{\"id\":\"4889\",\"name\":\"Thai Air Cargo\",\"alias\":\"\\\\N\",\"iata\":\"T2\",\"icao\":\"TCG\",\"callsign\":\"THAI CARGO\",\"country\":\"Thailand\",\"active\":\"Y\"},{\"id\":\"4896\",\"name\":\"Thomas Cook Airlines\",\"alias\":\"\\\\N\",\"iata\":\"FQ\",\"icao\":\"TCW\",\"callsign\":\"THOMAS COOK\",\"country\":\"Belgium\",\"active\":\"Y\"},{\"id\":\"4897\",\"name\":\"Thomas Cook Airlines\",\"alias\":\"\\\\N\",\"iata\":\"MT\",\"icao\":\"TCX\",\"callsign\":\"KESTREL\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"4902\",\"name\":\"Tandem Aero\",\"alias\":\"\\\\N\",\"iata\":\"TQ\",\"icao\":\"TDM\",\"callsign\":\"TANDEM\",\"country\":\"Moldova\",\"active\":\"N\"},{\"id\":\"4908\",\"name\":\"Teamline Air\",\"alias\":\"\\\\N\",\"iata\":\"L9\",\"icao\":\"TLW\",\"callsign\":\"Teamline\",\"country\":\"Austria\",\"active\":\"N\"},{\"id\":\"4916\",\"name\":\"Transeuropean Airlines\",\"alias\":\"\\\\N\",\"iata\":\"UE\",\"icao\":\"TEP\",\"callsign\":\"TRANSEURLINE\",\"country\":\"Russia\",\"active\":\"N\"},{\"id\":\"4934\",\"name\":\"Titan Airways\",\"alias\":\"\\\\N\",\"iata\":\"ZT\",\"icao\":\"AWC\",\"callsign\":\"ZAP\",\"country\":\"United Kingdom\",\"active\":\"N\"},{\"id\":\"4936\",\"name\":\"Tiger Airways\",\"alias\":\"\\\\N\",\"iata\":\"TR\",\"icao\":\"TGW\",\"callsign\":\"GO CAT\",\"country\":\"Singapore\",\"active\":\"Y\"},{\"id\":\"4937\",\"name\":\"Tigerair Australia\",\"alias\":\"\\\\N\",\"iata\":\"TT\",\"icao\":\"TGG\",\"callsign\":\"TIGGOZ\",\"country\":\"Australia\",\"active\":\"Y\"},{\"id\":\"4940\",\"name\":\"Thai Airways International\",\"alias\":\"\\\\N\",\"iata\":\"TG\",\"icao\":\"THA\",\"callsign\":\"THAI\",\"country\":\"Thailand\",\"active\":\"Y\"},{\"id\":\"4947\",\"name\":\"Thai AirAsia\",\"alias\":\"Thai Air Asia\",\"iata\":\"FD\",\"icao\":\"AIQ\",\"callsign\":\"THAI ASIA\",\"country\":\"Thailand\",\"active\":\"Y\"},{\"id\":\"4951\",\"name\":\"Turkish Airlines\",\"alias\":\"\\\\N\",\"iata\":\"TK\",\"icao\":\"THY\",\"callsign\":\"TURKAIR\",\"country\":\"Turkey\",\"active\":\"Y\"},{\"id\":\"4965\",\"name\":\"Twin Jet\",\"alias\":\"\\\\N\",\"iata\":\"T7\",\"icao\":\"TJT\",\"callsign\":\"TWINJET\",\"country\":\"France\",\"active\":\"Y\"},{\"id\":\"4969\",\"name\":\"Thai Sky Airlines\",\"alias\":\"\\\\N\",\"iata\":\"9I\",\"icao\":\"TKY\",\"callsign\":\"THAI SKY\",\"country\":\"Thailand\",\"active\":\"N\"},{\"id\":\"4974\",\"name\":\"Tulip Air\",\"alias\":\"\\\\N\",\"iata\":\"TD\",\"icao\":\"TLP\",\"callsign\":\"TULIPAIR\",\"country\":\"Netherland\",\"active\":\"N\"},{\"id\":\"4981\",\"name\":\"Trans Mediterranean Airlines\",\"alias\":\"\\\\N\",\"iata\":\"TL\",\"icao\":\"TMA\",\"callsign\":\"TANGO LIMA\",\"country\":\"Lebanon\",\"active\":\"Y\"},{\"id\":\"4983\",\"name\":\"Tri-MG Intra Asia Airlines\",\"alias\":\"\\\\N\",\"iata\":\"GY\",\"icao\":\"TMG\",\"callsign\":\"TRILINES\",\"country\":\"Indonesia\",\"active\":\"N\"},{\"id\":\"5002\",\"name\":\"Tiara Air\",\"alias\":\"\\\\N\",\"iata\":\"3P\",\"icao\":\"TNM\",\"callsign\":\"TIARA\",\"country\":\"Aruba\",\"active\":\"Y\"},{\"id\":\"5010\",\"name\":\"Tobruk Air\",\"alias\":\"\\\\N\",\"iata\":\"7T\",\"icao\":\"TOB\",\"callsign\":\"TOBRUK AIR\",\"country\":\"Libya\",\"active\":\"N\"},{\"id\":\"5012\",\"name\":\"Tol-Air Services\",\"alias\":\"\\\\N\",\"iata\":\"TI\",\"icao\":\"TOL\",\"callsign\":\"TOL AIR\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"5013\",\"name\":\"Thomsonfly\",\"alias\":\"\\\\N\",\"iata\":\"BY\",\"icao\":\"TOM\",\"callsign\":\"TOMSON\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"5016\",\"name\":\"Tropic Air\",\"alias\":\"\\\\N\",\"iata\":\"PM\",\"icao\":\"TOS\",\"callsign\":\"TROPISER\",\"country\":\"Belize\",\"active\":\"Y\"},{\"id\":\"5018\",\"name\":\"Tower Air\",\"alias\":\"\\\\N\",\"iata\":\"FF\",\"icao\":\"TOW\",\"callsign\":\"TEE AIR\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"5020\",\"name\":\"TAMPA\",\"alias\":\"\\\\N\",\"iata\":\"QT\",\"icao\":\"TPA\",\"callsign\":\"TAMPA\",\"country\":\"Colombia\",\"active\":\"Y\"},{\"id\":\"5038\",\"name\":\"TransAsia Airways\",\"alias\":\"\\\\N\",\"iata\":\"GE\",\"icao\":\"TNA\",\"callsign\":\"TransAsia\",\"country\":\"Taiwan\",\"active\":\"Y\"},{\"id\":\"5039\",\"name\":\"Transavia Holland\",\"alias\":\"\\\\N\",\"iata\":\"HV\",\"icao\":\"TRA\",\"callsign\":\"TRANSAVIA\",\"country\":\"Netherlands\",\"active\":\"Y\"},{\"id\":\"5041\",\"name\":\"TACV\",\"alias\":\"\\\\N\",\"iata\":\"VR\",\"icao\":\"TCV\",\"callsign\":\"CABOVERDE\",\"country\":\"Portugal\",\"active\":\"Y\"},{\"id\":\"5054\",\"name\":\"TransMeridian Airlines\",\"alias\":\"\\\\N\",\"iata\":\"T9\",\"icao\":\"TRZ\",\"callsign\":\"TRANS-MERIDIAN\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"5057\",\"name\":\"Transmile Air Services\",\"alias\":\"\\\\N\",\"iata\":\"TH\",\"icao\":\"TSE\",\"callsign\":\"TRANSMILE\",\"country\":\"Malaysia\",\"active\":\"N\"},{\"id\":\"5060\",\"name\":\"Trast Aero\",\"alias\":\"\\\\N\",\"iata\":\"S5\",\"icao\":\"TSJ\",\"callsign\":\"TRAST AERO\",\"country\":\"Kyrgyzstan\",\"active\":\"N\"},{\"id\":\"5064\",\"name\":\"Transwest Air\",\"alias\":\"\\\\N\",\"iata\":\"9T\",\"icao\":\"ABS\",\"callsign\":\"ATHABASKA\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"5067\",\"name\":\"Transaero Airlines\",\"alias\":\"\\\\N\",\"iata\":\"UN\",\"icao\":\"TSO\",\"callsign\":\"TRANSOVIET\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"5074\",\"name\":\"Thai Star Airlines\",\"alias\":\"\\\\N\",\"iata\":\"T9\",\"icao\":\"TSX\",\"callsign\":\"THAI STAR\",\"country\":\"Thailand\",\"active\":\"N\"},{\"id\":\"5083\",\"name\":\"Turkmenistan Airlines\",\"alias\":\"Turkmenhovayollary\",\"iata\":\"T5\",\"icao\":\"TUA\",\"callsign\":\"TURKMENISTAN\",\"country\":\"Turkmenistan\",\"active\":\"Y\"},{\"id\":\"5085\",\"name\":\"Tuninter\",\"alias\":\"\\\\N\",\"iata\":\"UG\",\"icao\":\"TUI\",\"callsign\":\"\",\"country\":\"Tunisia\",\"active\":\"Y\"},{\"id\":\"5096\",\"name\":\"Tavrey Airlines\",\"alias\":\"\\\\N\",\"iata\":\"T6\",\"icao\":\"TVR\",\"callsign\":\"TAVREY\",\"country\":\"Ukraine\",\"active\":\"N\"},{\"id\":\"5097\",\"name\":\"Travel Service\",\"alias\":\"\\\\N\",\"iata\":\"QS\",\"icao\":\"TVS\",\"callsign\":\"SKYTRAVEL\",\"country\":\"Czech Republic\",\"active\":\"Y\"},{\"id\":\"5098\",\"name\":\"Trans World Airlines\",\"alias\":\"TWA\",\"iata\":\"TW\",\"icao\":\"TWA\",\"callsign\":\"TWA\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"5106\",\"name\":\"Transaviaexport\",\"alias\":\"\\\\N\",\"iata\":\"AL\",\"icao\":\"TXC\",\"callsign\":\"TRANSEXPORT\",\"country\":\"Belarus\",\"active\":\"N\"},{\"id\":\"5122\",\"name\":\"TUIfly Nordic\",\"alias\":\"\\\\N\",\"iata\":\"6B\",\"icao\":\"BLX\",\"callsign\":\"BLUESCAN\",\"country\":\"Sweden\",\"active\":\"Y\"},{\"id\":\"5133\",\"name\":\"TAAG Angola Airlines\",\"alias\":\"\\\\N\",\"iata\":\"DT\",\"icao\":\"DTA\",\"callsign\":\"DTA\",\"country\":\"Angola\",\"active\":\"Y\"},{\"id\":\"5134\",\"name\":\"Tassili Airlines\",\"alias\":\"\\\\N\",\"iata\":\"SF\",\"icao\":\"DTH\",\"callsign\":\"TASSILI AIR\",\"country\":\"Algeria\",\"active\":\"N\"},{\"id\":\"5156\",\"name\":\"TAM Mercosur\",\"alias\":\"\\\\N\",\"iata\":\"PZ\",\"icao\":\"LAP\",\"callsign\":\"PARAGUAYA\",\"country\":\"Paraguay\",\"active\":\"Y\"},{\"id\":\"5160\",\"name\":\"Trans States Airlines\",\"alias\":\"\\\\N\",\"iata\":\"AX\",\"icao\":\"LOF\",\"callsign\":\"WATERSKI\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"5168\",\"name\":\"Travelsky Technology\",\"alias\":\"\\\\N\",\"iata\":\"1E\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"China\",\"active\":\"N\"},{\"id\":\"5169\",\"name\":\"Thalys\",\"alias\":\"\\\\N\",\"iata\":\"2H\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Belgium\",\"active\":\"N\"},{\"id\":\"5172\",\"name\":\"Open Skies Consultative Commission\",\"alias\":\"\\\\N\",\"iata\":\"1L\",\"icao\":\"OSY\",\"callsign\":\"OPEN SKIES\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"5179\",\"name\":\"Tarom\",\"alias\":\"\\\\N\",\"iata\":\"RO\",\"icao\":\"ROT\",\"callsign\":\"TAROM\",\"country\":\"Romania\",\"active\":\"Y\"},{\"id\":\"5187\",\"name\":\"Turan Air\",\"alias\":\"\\\\N\",\"iata\":\"3T\",\"icao\":\"URN\",\"callsign\":\"TURAN\",\"country\":\"Azerbaijan\",\"active\":\"Y\"},{\"id\":\"5188\",\"name\":\"TRIP Linhas A\",\"alias\":\"\\\\N\",\"iata\":\"8R\",\"icao\":\"TIB\",\"callsign\":\"TRIP\",\"country\":\"Brazil\",\"active\":\"Y\"},{\"id\":\"5199\",\"name\":\"Transports et Travaux A\",\"alias\":\"\\\\N\",\"iata\":\"OF\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"\",\"active\":\"N\"},{\"id\":\"5207\",\"name\":\"USA3000 Airlines\",\"alias\":\"\\\\N\",\"iata\":\"U5\",\"icao\":\"GWY\",\"callsign\":\"GETAWAY\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"5209\",\"name\":\"United Airlines\",\"alias\":\"\\\\N\",\"iata\":\"UA\",\"icao\":\"UAL\",\"callsign\":\"UNITED\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"5213\",\"name\":\"United Feeder Service\",\"alias\":\"\\\\N\",\"iata\":\"U2\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"5227\",\"name\":\"USA Jet Airlines\",\"alias\":\"\\\\N\",\"iata\":\"U7\",\"icao\":\"JUS\",\"callsign\":\"JET USA\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"5234\",\"name\":\"Ural Airlines\",\"alias\":\"\\\\N\",\"iata\":\"U6\",\"icao\":\"SVR\",\"callsign\":\"SVERDLOVSK AIR\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"5251\",\"name\":\"UM Airlines\",\"alias\":\"\\\\N\",\"iata\":\"UF\",\"icao\":\"UKM\",\"callsign\":\"UKRAINE MEDITERRANEE\",\"country\":\"Ukraine\",\"active\":\"Y\"},{\"id\":\"5254\",\"name\":\"Ukrainian Cargo Airways\",\"alias\":\"\\\\N\",\"iata\":\"6Z\",\"icao\":\"UKS\",\"callsign\":\"CARGOTRANS\",\"country\":\"Ukraine\",\"active\":\"N\"},{\"id\":\"5263\",\"name\":\"United Parcel Service\",\"alias\":\"\\\\N\",\"iata\":\"5X\",\"icao\":\"UPS\",\"callsign\":\"UPS\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"5265\",\"name\":\"US Airways\",\"alias\":\"\\\\N\",\"iata\":\"US\",\"icao\":\"USA\",\"callsign\":\"U S AIR\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"5271\",\"name\":\"UTair Aviation\",\"alias\":\"\\\\N\",\"iata\":\"UT\",\"icao\":\"UTA\",\"callsign\":\"UTAIR\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"5281\",\"name\":\"Uzbekistan Airways\",\"alias\":\"\\\\N\",\"iata\":\"HY\",\"icao\":\"UZB\",\"callsign\":\"UZBEK\",\"country\":\"Uzbekistan\",\"active\":\"Y\"},{\"id\":\"5282\",\"name\":\"Ukraine International Airlines\",\"alias\":\"\\\\N\",\"iata\":\"PS\",\"icao\":\"AUI\",\"callsign\":\"UKRAINE INTERNATIONAL\",\"country\":\"Ukraine\",\"active\":\"Y\"},{\"id\":\"5284\",\"name\":\"US Helicopter Corporation\",\"alias\":\"\\\\N\",\"iata\":\"UH\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"5288\",\"name\":\"V Australia Airlines\",\"alias\":\"\\\\N\",\"iata\":\"VA\",\"icao\":\"VAU\",\"callsign\":\"KANGA\",\"country\":\"Australia\",\"active\":\"N\"},{\"id\":\"5297\",\"name\":\"Valuair\",\"alias\":\"\\\\N\",\"iata\":\"VF\",\"icao\":\"VLU\",\"callsign\":\"VALUAIR\",\"country\":\"Singapore\",\"active\":\"Y\"},{\"id\":\"5307\",\"name\":\"Voyageur Airways\",\"alias\":\"\\\\N\",\"iata\":\"VC\",\"icao\":\"VAL\",\"callsign\":\"VOYAGEUR\",\"country\":\"Canada\",\"active\":\"N\"},{\"id\":\"5309\",\"name\":\"Vietnam Airlines\",\"alias\":\"\\\\N\",\"iata\":\"VN\",\"icao\":\"HVN\",\"callsign\":\"VIET NAM AIRLINES\",\"country\":\"Vietnam\",\"active\":\"Y\"},{\"id\":\"5311\",\"name\":\"VIM Airlines\",\"alias\":\"\\\\N\",\"iata\":\"NN\",\"icao\":\"MOV\",\"callsign\":\"MOV AIR\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"5313\",\"name\":\"VIA Rail Canada\",\"alias\":\"\\\\N\",\"iata\":\"2R\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Canada\",\"active\":\"N\"},{\"id\":\"5322\",\"name\":\"Viasa\",\"alias\":\"\\\\N\",\"iata\":\"VA\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Venezuela\",\"active\":\"N\"},{\"id\":\"5325\",\"name\":\"Volaris\",\"alias\":\"\\\\N\",\"iata\":\"Y4\",\"icao\":\"VOI\",\"callsign\":\"VOLARIS\",\"country\":\"Mexico\",\"active\":\"Y\"},{\"id\":\"5326\",\"name\":\"Volga-Dnepr Airlines\",\"alias\":\"\\\\N\",\"iata\":\"VI\",\"icao\":\"VDA\",\"callsign\":\"VOLGA-DNEPR\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"5331\",\"name\":\"Virgin America\",\"alias\":\"\\\\N\",\"iata\":\"VX\",\"icao\":\"VRD\",\"callsign\":\"REDWOOD\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"5333\",\"name\":\"Virgin Express\",\"alias\":\"\\\\N\",\"iata\":\"TV\",\"icao\":\"VEX\",\"callsign\":\"VIRGIN EXPRESS\",\"country\":\"Belgium\",\"active\":\"Y\"},{\"id\":\"5335\",\"name\":\"Virgin Nigeria Airways\",\"alias\":\"\\\\N\",\"iata\":\"VK\",\"icao\":\"VGN\",\"callsign\":\"VIRGIN NIGERIA\",\"country\":\"Nigeria\",\"active\":\"Y\"},{\"id\":\"5347\",\"name\":\"Virgin Atlantic Airways\",\"alias\":\"\\\\N\",\"iata\":\"VS\",\"icao\":\"VIR\",\"callsign\":\"VIRGIN\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"5350\",\"name\":\"Viva Macau\",\"alias\":\"\\\\N\",\"iata\":\"ZG\",\"icao\":\"VVM\",\"callsign\":\"JACKPOT\",\"country\":\"Macao\",\"active\":\"Y\"},{\"id\":\"5351\",\"name\":\"Volare Airlines\",\"alias\":\"\\\\N\",\"iata\":\"VE\",\"icao\":\"VLE\",\"callsign\":\"VOLA\",\"country\":\"Italy\",\"active\":\"Y\"},{\"id\":\"5352\",\"name\":\"Vueling Airlines\",\"alias\":\"\\\\N\",\"iata\":\"VY\",\"icao\":\"VLG\",\"callsign\":\"VUELING\",\"country\":\"Spain\",\"active\":\"Y\"},{\"id\":\"5353\",\"name\":\"Vladivostok Air\",\"alias\":\"\\\\N\",\"iata\":\"XF\",\"icao\":\"VLK\",\"callsign\":\"VLADAIR\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"5354\",\"name\":\"Varig Log\",\"alias\":\"\\\\N\",\"iata\":\"LC\",\"icao\":\"VLO\",\"callsign\":\"VELOG\",\"country\":\"Brazil\",\"active\":\"Y\"},{\"id\":\"5358\",\"name\":\"Viaggio Air\",\"alias\":\"\\\\N\",\"iata\":\"VM\",\"icao\":\"VOA\",\"callsign\":\"VIAGGIO\",\"country\":\"Bulgaria\",\"active\":\"N\"},{\"id\":\"5360\",\"name\":\"Virgin Australia\",\"alias\":\"\\\\N\",\"iata\":\"VA\",\"icao\":\"VOZ\",\"callsign\":\"VIRGIN\",\"country\":\"Australia\",\"active\":\"Y\"},{\"id\":\"5361\",\"name\":\"Virgin Blue\",\"alias\":\"\\\\N\",\"iata\":\"DJ\",\"icao\":\"VBI\",\"callsign\":\"BLUEY\",\"country\":\"Australia\",\"active\":\"N\"},{\"id\":\"5368\",\"name\":\"VRG Linhas Aereas\",\"alias\":\"Varig\",\"iata\":\"RG\",\"icao\":\"VRN\",\"callsign\":\"VARIG\",\"country\":\"Brazil\",\"active\":\"Y\"},{\"id\":\"5373\",\"name\":\"VASP\",\"alias\":\"\\\\N\",\"iata\":\"VP\",\"icao\":\"VSP\",\"callsign\":\"VASP\",\"country\":\"Brazil\",\"active\":\"Y\"},{\"id\":\"5383\",\"name\":\"VLM Airlines\",\"alias\":\"\\\\N\",\"iata\":\"VG\",\"icao\":\"VLM\",\"callsign\":\"RUBENS\",\"country\":\"Belgium\",\"active\":\"Y\"},{\"id\":\"5397\",\"name\":\"Wayraper\",\"alias\":\"\\\\N\",\"iata\":\"7W\",\"icao\":\"\",\"callsign\":\"WAYRAPER\",\"country\":\"Peru\",\"active\":\"Y\"},{\"id\":\"5399\",\"name\":\"WebJet Linhas A\",\"alias\":\"\\\\N\",\"iata\":\"WJ\",\"icao\":\"WEB\",\"callsign\":\"WEB-BRASIL\",\"country\":\"Brazil\",\"active\":\"Y\"},{\"id\":\"5401\",\"name\":\"Welcome Air\",\"alias\":\"\\\\N\",\"iata\":\"2W\",\"icao\":\"WLC\",\"callsign\":\"WELCOMEAIR\",\"country\":\"Austria\",\"active\":\"Y\"},{\"id\":\"5408\",\"name\":\"West Air Sweden\",\"alias\":\"\\\\N\",\"iata\":\"PT\",\"icao\":\"SWN\",\"callsign\":\"AIR SWEDEN\",\"country\":\"Sweden\",\"active\":\"N\"},{\"id\":\"5411\",\"name\":\"West Coast Air\",\"alias\":\"\\\\N\",\"iata\":\"8O\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"5416\",\"name\":\"WestJet\",\"alias\":\"\\\\N\",\"iata\":\"WS\",\"icao\":\"WJA\",\"callsign\":\"WESTJET\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"5424\",\"name\":\"Western Airlines\",\"alias\":\"\\\\N\",\"iata\":\"WA\",\"icao\":\"WAL\",\"callsign\":\"WESTERN\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"5434\",\"name\":\"Westward Airways\",\"alias\":\"\\\\N\",\"iata\":\"CN\",\"icao\":\"WWD\",\"callsign\":\"WESTWARD\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"5439\",\"name\":\"Widerøe\",\"alias\":\"\\\\N\",\"iata\":\"WF\",\"icao\":\"WIF\",\"callsign\":\"WIDEROE\",\"country\":\"Norway\",\"active\":\"Y\"},{\"id\":\"5447\",\"name\":\"Wind Jet\",\"alias\":\"\\\\N\",\"iata\":\"IV\",\"icao\":\"JET\",\"callsign\":\"GHIBLI\",\"country\":\"Italy\",\"active\":\"Y\"},{\"id\":\"5451\",\"name\":\"Wings Air\",\"alias\":\"\\\\N\",\"iata\":\"IW\",\"icao\":\"WON\",\"callsign\":\"WINGS ABADI\",\"country\":\"Indonesia\",\"active\":\"Y\"},{\"id\":\"5456\",\"name\":\"Wings of Alaska\",\"alias\":\"\\\\N\",\"iata\":\"K5\",\"icao\":\"WAK\",\"callsign\":\"WINGS ALASKA\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"5461\",\"name\":\"Wizz Air\",\"alias\":\"\\\\N\",\"iata\":\"W6\",\"icao\":\"WZZ\",\"callsign\":\"WIZZ AIR\",\"country\":\"Hungary\",\"active\":\"Y\"},{\"id\":\"5462\",\"name\":\"Wizz Air Hungary\",\"alias\":\"\\\\N\",\"iata\":\"8Z\",\"icao\":\"WVL\",\"callsign\":\"WIZZBUL\",\"country\":\"Bulgaria\",\"active\":\"Y\"},{\"id\":\"5465\",\"name\":\"World Airways\",\"alias\":\"\\\\N\",\"iata\":\"WO\",\"icao\":\"WOA\",\"callsign\":\"WORLD\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"5468\",\"name\":\"Worldspan\",\"alias\":\"\\\\N\",\"iata\":\"1P\",\"icao\":\"\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"5473\",\"name\":\"Wright Air Service\",\"alias\":\"\\\\N\",\"iata\":\"8V\",\"icao\":\"WRF\",\"callsign\":\"WRIGHT FLYER\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"5479\",\"name\":\"XL Airways France\",\"alias\":\"\\\\N\",\"iata\":\"SE\",\"icao\":\"SEU\",\"callsign\":\"STARWAY\",\"country\":\"France\",\"active\":\"Y\"},{\"id\":\"5484\",\"name\":\"Xiamen Airlines\",\"alias\":\"\\\\N\",\"iata\":\"MF\",\"icao\":\"CXA\",\"callsign\":\"XIAMEN AIR\",\"country\":\"China\",\"active\":\"Y\"},{\"id\":\"5487\",\"name\":\"Xtra Airways\",\"alias\":\"\\\\N\",\"iata\":\"XP\",\"icao\":\"CXP\",\"callsign\":\"RUBY MOUNTAIN\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"5492\",\"name\":\"Yamal Airlines\",\"alias\":\"\\\\N\",\"iata\":\"YL\",\"icao\":\"LLM\",\"callsign\":\"YAMAL\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"5494\",\"name\":\"Yangtze River Express\",\"alias\":\"\\\\N\",\"iata\":\"Y8\",\"icao\":\"YZR\",\"callsign\":\"YANGTZE RIVER\",\"country\":\"China\",\"active\":\"N\"},{\"id\":\"5496\",\"name\":\"Yemenia\",\"alias\":\"\\\\N\",\"iata\":\"IY\",\"icao\":\"IYE\",\"callsign\":\"YEMENI\",\"country\":\"Yemen\",\"active\":\"Y\"},{\"id\":\"5508\",\"name\":\"Zambian Airways\",\"alias\":\"\\\\N\",\"iata\":\"Q3\",\"icao\":\"MBN\",\"callsign\":\"ZAMBIANA\",\"country\":\"Zambia\",\"active\":\"N\"},{\"id\":\"5521\",\"name\":\"Zip\",\"alias\":\"\\\\N\",\"iata\":\"3J\",\"icao\":\"WZP\",\"callsign\":\"ZIPPER\",\"country\":\"Canada\",\"active\":\"N\"},{\"id\":\"5522\",\"name\":\"Zimex Aviation\",\"alias\":\"\\\\N\",\"iata\":\"C4\",\"icao\":\"IMX\",\"callsign\":\"ZIMEX\",\"country\":\"Switzerland\",\"active\":\"N\"},{\"id\":\"5523\",\"name\":\"Zoom Airlines\",\"alias\":\"\\\\N\",\"iata\":\"Z4\",\"icao\":\"OOM\",\"callsign\":\"ZOOM\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"5533\",\"name\":\"Tyrolean Airways\",\"alias\":\"\\\\N\",\"iata\":\"\\\\N\",\"icao\":\"TYR\",\"callsign\":\"TYROLEAN\",\"country\":\"\\\\N\",\"active\":\"Y\"},{\"id\":\"5556\",\"name\":\"buzz\",\"alias\":\"\\\\N\",\"iata\":\"UK\",\"icao\":\"BUZ\",\"callsign\":\"\\\\N\",\"country\":\"\\\\N\",\"active\":\"N\"},{\"id\":\"5559\",\"name\":\"Maldivian Air Taxi\",\"alias\":\"\\\\N\",\"iata\":\"8Q\",\"icao\":\"\\\\N\",\"callsign\":\"\\\\N\",\"country\":\"Maldives\",\"active\":\"Y\"},{\"id\":\"5640\",\"name\":\"Yellow Air Taxi\",\"alias\":\"\",\"iata\":\"Y0\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"5651\",\"name\":\"Royal Air Cambodge\",\"alias\":\"\",\"iata\":\"VJ\",\"icao\":\"RAC\",\"callsign\":\"\",\"country\":\"Cambodia\",\"active\":\"Y\"},{\"id\":\"5813\",\"name\":\"Air Mandalay\",\"alias\":\"\",\"iata\":\"6T\",\"icao\":\"\\\\N\",\"callsign\":\"Six Tango\",\"country\":\"Burma\",\"active\":\"Y\"},{\"id\":\"5905\",\"name\":\"TAN-SAHSA\",\"alias\":\"\",\"iata\":\"SH\",\"icao\":\"\\\\N\",\"callsign\":\"Sierra Hotel\",\"country\":\"Honduras\",\"active\":\"N\"},{\"id\":\"-1\",\"name\":\"Unknown\",\"alias\":\"\\\\N\",\"iata\":\"-\",\"icao\":\"N/A\",\"callsign\":\"\\\\N\",\"country\":\"\\\\N\",\"active\":\"Y\"},{\"id\":\"5982\",\"name\":\"Air Busan\",\"alias\":\"\\\\N\",\"iata\":\"BX\",\"icao\":\"ABL\",\"callsign\":\"Air Busan\",\"country\":\"Republic of Korea\",\"active\":\"Y\"},{\"id\":\"6002\",\"name\":\"TUI Airlines Belgium\",\"alias\":\"now Jetairlfy\",\"iata\":\"TB\",\"icao\":\"TUB\",\"callsign\":\"BEAUTY\",\"country\":\"Belgium\",\"active\":\"N\"},{\"id\":\"5584\",\"name\":\"Sky Express\",\"alias\":\"SkyExpress\",\"iata\":\"XW\",\"icao\":\"SXR\",\"callsign\":\"SKYSTORM\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"6183\",\"name\":\"Braathens\",\"alias\":\"Braathens SAFE\",\"iata\":\"BU\",\"icao\":\"BRA\",\"callsign\":\"Braathens\",\"country\":\"Norway\",\"active\":\"N\"},{\"id\":\"6196\",\"name\":\"Globus\",\"alias\":\"\",\"iata\":\"GH\",\"icao\":\"GLP\",\"callsign\":\"\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"6222\",\"name\":\"Air Kazakhstan\",\"alias\":\"\",\"iata\":\"9Y\",\"icao\":\"KZK\",\"callsign\":\"Kazakh\",\"country\":\"Kazakhstan\",\"active\":\"Y\"},{\"id\":\"6557\",\"name\":\"Japan Air System\",\"alias\":\"\",\"iata\":\"JD\",\"icao\":\"JAS\",\"callsign\":\"Air System\",\"country\":\"Japan\",\"active\":\"Y\"},{\"id\":\"6578\",\"name\":\"Annsett New Zealand (NZA)\",\"alias\":\"\",\"iata\":\"ZQ\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"New Zealand\",\"active\":\"N\"},{\"id\":\"6855\",\"name\":\"EasyJet (DS)\",\"alias\":\"\",\"iata\":\"DS\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Switzerland\",\"active\":\"Y\"},{\"id\":\"8359\",\"name\":\"Star Peru (2I)\",\"alias\":\"\",\"iata\":\"2I\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Peru\",\"active\":\"Y\"},{\"id\":\"8461\",\"name\":\"Carnival Air Lines\",\"alias\":\"\",\"iata\":\"KW\",\"icao\":\"\\\\N\",\"callsign\":\"Carnival Air\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"8463\",\"name\":\"United Airways\",\"alias\":\"\",\"iata\":\"4H\",\"icao\":\"UBD\",\"callsign\":\"UNITED BANGLADESH\",\"country\":\"Bangladesh\",\"active\":\"Y\"},{\"id\":\"8568\",\"name\":\"Trans Maldivian Airways\",\"alias\":\"\",\"iata\":\"M8\",\"icao\":\"TMW\",\"callsign\":\"\",\"country\":\"Maldives\",\"active\":\"N\"},{\"id\":\"8576\",\"name\":\"Fly540\",\"alias\":\"\",\"iata\":\"5H\",\"icao\":\"FFV\",\"callsign\":\"SWIFT TANGO\",\"country\":\"Kenya\",\"active\":\"Y\"},{\"id\":\"8745\",\"name\":\"Transavia France\",\"alias\":\"\",\"iata\":\"TO\",\"icao\":\"TVF\",\"callsign\":\"FRENCH SUN\",\"country\":\"France\",\"active\":\"Y\"},{\"id\":\"8809\",\"name\":\"Island Air (WP)\",\"alias\":\"\",\"iata\":\"WP\",\"icao\":\"MKU\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"9018\",\"name\":\"1-2-go\",\"alias\":\"fly 1-2-go\",\"iata\":\"OG\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Thailand\",\"active\":\"N\"},{\"id\":\"9082\",\"name\":\"Uni Air\",\"alias\":\"\",\"iata\":\"B7\",\"icao\":\"UIA\",\"callsign\":\"Glory\",\"country\":\"Taiwan\",\"active\":\"Y\"},{\"id\":\"9135\",\"name\":\"Gomelavia\",\"alias\":\"\",\"iata\":\"YD\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Belarus\",\"active\":\"Y\"},{\"id\":\"9239\",\"name\":\"Red Wings\",\"alias\":\"Avialinii 400\",\"iata\":\"WZ\",\"icao\":\"RWZ\",\"callsign\":\"AIR RED\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"9335\",\"name\":\"TUIfly (X3)\",\"alias\":\"\",\"iata\":\"11\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"9343\",\"name\":\"Felix Airways\",\"alias\":\"\",\"iata\":\"FU\",\"icao\":\"FXX\",\"callsign\":\"\",\"country\":\"Yemen\",\"active\":\"Y\"},{\"id\":\"9344\",\"name\":\"Kostromskie avialinii\",\"alias\":\"\",\"iata\":\"K1\",\"icao\":\"KOQ\",\"callsign\":\"\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"9373\",\"name\":\"Greenfly\",\"alias\":\"\",\"iata\":\"XX\",\"icao\":\"GFY\",\"callsign\":\"\",\"country\":\"Spain\",\"active\":\"Y\"},{\"id\":\"9531\",\"name\":\"Tajik Air\",\"alias\":\"\",\"iata\":\"7J\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Tajikistan\",\"active\":\"Y\"},{\"id\":\"9541\",\"name\":\"Air Mozambique\",\"alias\":\"\",\"iata\":\"TM\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Mozambique\",\"active\":\"Y\"},{\"id\":\"9577\",\"name\":\"ELK Airways\",\"alias\":\"\",\"iata\":\"--\",\"icao\":\"ELK\",\"callsign\":\"\",\"country\":\"Estonia\",\"active\":\"Y\"},{\"id\":\"9620\",\"name\":\"Gabon Airlines\",\"alias\":\"\\\\N\",\"iata\":\"GY\",\"icao\":\"GBK\",\"callsign\":\"GABON AIRLINES\",\"country\":\"Gabon\",\"active\":\"Y\"},{\"id\":\"9656\",\"name\":\"Maldivo Airlines\",\"alias\":\"\",\"iata\":\"ML\",\"icao\":\"MAV\",\"callsign\":\"Maldivo\",\"country\":\"Maldives\",\"active\":\"Y\"},{\"id\":\"9666\",\"name\":\"Virgin Pacific\",\"alias\":\"\",\"iata\":\"VH\",\"icao\":\"VNP\",\"callsign\":\"\",\"country\":\"Fiji\",\"active\":\"Y\"},{\"id\":\"9764\",\"name\":\"Zest Air\",\"alias\":\"\",\"iata\":\"Z2\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Philippines\",\"active\":\"Y\"},{\"id\":\"9784\",\"name\":\"Yangon Airways\",\"alias\":\"\",\"iata\":\"HK\",\"icao\":\"\\\\N\",\"callsign\":\"Hotel Kilo\",\"country\":\"Burma\",\"active\":\"Y\"},{\"id\":\"9793\",\"name\":\"Transport Aérien Transrégional\",\"alias\":\"TAT\",\"iata\":\"IJ\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"France\",\"active\":\"N\"},{\"id\":\"9808\",\"name\":\"Minerva Airlines\",\"alias\":\"\",\"iata\":\"N4\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Italy\",\"active\":\"N\"},{\"id\":\"9809\",\"name\":\"Eastar Jet\",\"alias\":\"\",\"iata\":\"ZE\",\"icao\":\"ESR\",\"callsign\":\"Eastar\",\"country\":\"South Korea\",\"active\":\"Y\"},{\"id\":\"9810\",\"name\":\"Jin Air\",\"alias\":\"\",\"iata\":\"LJ\",\"icao\":\"JNA\",\"callsign\":\"Jin Air\",\"country\":\"South Korea\",\"active\":\"Y\"},{\"id\":\"9814\",\"name\":\"Aéris (Priv)\",\"alias\":\"\",\"iata\":\"SH\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"France\",\"active\":\"N\"},{\"id\":\"9818\",\"name\":\"Air Arabia Maroc\",\"alias\":\"\",\"iata\":\"3O\",\"icao\":\"\\\\N\",\"callsign\":\"Air Arabia\",\"country\":\"Morocco\",\"active\":\"Y\"},{\"id\":\"9825\",\"name\":\"Baltic Air lines\",\"alias\":\"\",\"iata\":\"B1\",\"icao\":\"BA1\",\"callsign\":\"Baltic\",\"country\":\"Latvia\",\"active\":\"Y\"},{\"id\":\"9828\",\"name\":\"Ciel Canadien\",\"alias\":\"\",\"iata\":\"YC\",\"icao\":\"YCC\",\"callsign\":\"Ciel\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"9829\",\"name\":\"Canadian National Airways\",\"alias\":\"\",\"iata\":\"CN\",\"icao\":\"YCP\",\"callsign\":\"CaNational\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"9833\",\"name\":\"Epic Holiday\",\"alias\":\"Epic Holidays\",\"iata\":\"FA\",\"icao\":\"4AA\",\"callsign\":\"Epic\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"9851\",\"name\":\"Air Comet Chile\",\"alias\":\"\",\"iata\":\"3I\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Chile\",\"active\":\"Y\"},{\"id\":\"9853\",\"name\":\"Nazca\",\"alias\":\"\",\"iata\":\"-.\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Peru\",\"active\":\"N\"},{\"id\":\"10094\",\"name\":\"Voronezhskie Airlanes\",\"alias\":\"\",\"iata\":\"DN\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Russia\",\"active\":\"N\"},{\"id\":\"10114\",\"name\":\"Line Blue\",\"alias\":\"\",\"iata\":\"L8\",\"icao\":\"LBL\",\"callsign\":\"Bluebird\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"10118\",\"name\":\"Blue Sky America\",\"alias\":\"\",\"iata\":\"BU\",\"icao\":\"BKY\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"10119\",\"name\":\"Texas Spirit\",\"alias\":\"\",\"iata\":\"XS\",\"icao\":\"TXP\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"10121\",\"name\":\"Illinois Airways\",\"alias\":\"\",\"iata\":\"IL\",\"icao\":\"ILW\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"10122\",\"name\":\"Salzburg arrows\",\"alias\":\"SZA\",\"iata\":\"SZ\",\"icao\":\"\\\\N\",\"callsign\":\"SZA\",\"country\":\"Austria\",\"active\":\"Y\"},{\"id\":\"10123\",\"name\":\"Texas Wings\",\"alias\":\"\",\"iata\":\"TQ\",\"icao\":\"TXW\",\"callsign\":\"TXW\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"10124\",\"name\":\"California Western\",\"alias\":\"\",\"iata\":\"KT\",\"icao\":\"CWS\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"10128\",\"name\":\"Dennis Sky\",\"alias\":\"Dennis Sky Holding\",\"iata\":\"DH\",\"icao\":\"DSY\",\"callsign\":\"DSY\",\"country\":\"Israel\",\"active\":\"Y\"},{\"id\":\"10224\",\"name\":\"Zz\",\"alias\":\"\",\"iata\":\"ZZ\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Belgium\",\"active\":\"Y\"},{\"id\":\"10226\",\"name\":\"Atifly\",\"alias\":\"\",\"iata\":\"A1\",\"icao\":\"A1F\",\"callsign\":\"atifly\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"10318\",\"name\":\"Air UK\",\"alias\":\"\",\"iata\":\"UK\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"United Kingdom\",\"active\":\"N\"},{\"id\":\"10334\",\"name\":\"Suckling Airways\",\"alias\":\"\",\"iata\":\"CB\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"United Kingdom\",\"active\":\"N\"},{\"id\":\"10367\",\"name\":\"Reno Sky\",\"alias\":\"\",\"iata\":\"RY\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"10372\",\"name\":\"Ciao Air\",\"alias\":\"\",\"iata\":\"99\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Italy\",\"active\":\"Y\"},{\"id\":\"10646\",\"name\":\"Birmingham European\",\"alias\":\"\",\"iata\":\"VB\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"United Kingdom\",\"active\":\"N\"},{\"id\":\"10650\",\"name\":\"Pal airlines\",\"alias\":\"\",\"iata\":\"5P\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Chile\",\"active\":\"Y\"},{\"id\":\"10673\",\"name\":\"CanXpress\",\"alias\":\"\",\"iata\":\"C1\",\"icao\":\"CA1\",\"callsign\":\"CAX\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"10674\",\"name\":\"Danube Wings (V5)\",\"alias\":\"\",\"iata\":\"V5\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Slovakia\",\"active\":\"Y\"},{\"id\":\"10675\",\"name\":\"Sharp Airlines\",\"alias\":\"\",\"iata\":\"SH\",\"icao\":\"SHA\",\"callsign\":\"SHARP\",\"country\":\"Australia\",\"active\":\"Y\"},{\"id\":\"10683\",\"name\":\"CanXplorer\",\"alias\":\"\",\"iata\":\"C2\",\"icao\":\"CAP\",\"callsign\":\"\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"10715\",\"name\":\"Click (Mexicana)\",\"alias\":\"\",\"iata\":\"QA\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Mexico\",\"active\":\"Y\"},{\"id\":\"10735\",\"name\":\"World Experience Airline\",\"alias\":\"WEA\",\"iata\":\"W1\",\"icao\":\"WE1\",\"callsign\":\"WEA\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"10737\",\"name\":\"ALAK\",\"alias\":\"\",\"iata\":\"J4\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"10738\",\"name\":\"AJT Air International\",\"alias\":\"\",\"iata\":\"E9\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Russia\",\"active\":\"N\"},{\"id\":\"10739\",\"name\":\"Air Choice One\",\"alias\":\"\",\"iata\":\"3E\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"10741\",\"name\":\"China United\",\"alias\":\"\",\"iata\":\"KN\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"China\",\"active\":\"Y\"},{\"id\":\"10748\",\"name\":\"Locair\",\"alias\":\"\",\"iata\":\"ZQ\",\"icao\":\"LOC\",\"callsign\":\"LOCAIR\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"10758\",\"name\":\"Safi Airlines\",\"alias\":\"\",\"iata\":\"4Q\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Afghanistan\",\"active\":\"Y\"},{\"id\":\"10765\",\"name\":\"SeaPort Airlines\",\"alias\":\"\",\"iata\":\"K5\",\"icao\":\"SQH\",\"callsign\":\"SASQUATCH\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"10776\",\"name\":\"Salmon Air\",\"alias\":\"\",\"iata\":\"S6\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"10796\",\"name\":\"Fly Illi\",\"alias\":\"\",\"iata\":\"IL\",\"icao\":\"ILY\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"10798\",\"name\":\"Bobb Air Freight\",\"alias\":\"\",\"iata\":\"01\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"10800\",\"name\":\"Star1 Airlines\",\"alias\":\"\",\"iata\":\"V9\",\"icao\":\"HCW\",\"callsign\":\"\",\"country\":\"Lithuania\",\"active\":\"Y\"},{\"id\":\"10845\",\"name\":\"Pelita\",\"alias\":\"\",\"iata\":\"6D\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Indonesia\",\"active\":\"Y\"},{\"id\":\"10902\",\"name\":\"Alpi Eagles (E8)\",\"alias\":\"\",\"iata\":\"E8\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Italy\",\"active\":\"N\"},{\"id\":\"10912\",\"name\":\"Alaska Seaplane Service\",\"alias\":\"\",\"iata\":\"J5\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"10929\",\"name\":\"TAN\",\"alias\":\"\",\"iata\":\"T8\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Argentina\",\"active\":\"N\"},{\"id\":\"10955\",\"name\":\"MexicanaLink\",\"alias\":\"\",\"iata\":\"I6\",\"icao\":\"MXI\",\"callsign\":\"LINK\",\"country\":\"Mexico\",\"active\":\"Y\"},{\"id\":\"10960\",\"name\":\"Island Spirit\",\"alias\":\"\",\"iata\":\"IP\",\"icao\":\"ISX\",\"callsign\":\"\",\"country\":\"Iceland\",\"active\":\"Y\"},{\"id\":\"10969\",\"name\":\"TACA Peru\",\"alias\":\"\",\"iata\":\"T0\",\"icao\":\"\\\\N\",\"callsign\":\"TACA PERU\",\"country\":\"Peru\",\"active\":\"Y\"},{\"id\":\"11731\",\"name\":\"Pan Am World Airways Dominicana\",\"alias\":\"PAWA Dominicana\",\"iata\":\"7Q\",\"icao\":\"\\\\N\",\"callsign\":\"PAWA\",\"country\":\"Dominican Republic\",\"active\":\"Y\"},{\"id\":\"11732\",\"name\":\"Primera Air\",\"alias\":\"\",\"iata\":\"PF\",\"icao\":\"\\\\N\",\"callsign\":\"PRIMERA\",\"country\":\"Iceland\",\"active\":\"Y\"},{\"id\":\"11741\",\"name\":\"Air Antilles Express\",\"alias\":\"\",\"iata\":\"3S\",\"icao\":\"\\\\N\",\"callsign\":\"GREEN BIRD\",\"country\":\"Guadeloupe\",\"active\":\"Y\"},{\"id\":\"11755\",\"name\":\"Regional Paraguaya\",\"alias\":\"\",\"iata\":\"P7\",\"icao\":\"REP\",\"callsign\":\"REGIOPAR\",\"country\":\"Paraguay\",\"active\":\"Y\"},{\"id\":\"11761\",\"name\":\"VIP Ecuador\",\"alias\":\"\",\"iata\":\"V6\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Ecuador\",\"active\":\"Y\"},{\"id\":\"11763\",\"name\":\"Peruvian Airlines\",\"alias\":\"\",\"iata\":\"P9\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Peru\",\"active\":\"Y\"},{\"id\":\"11767\",\"name\":\"Polar Airlines\",\"alias\":\"\",\"iata\":\"ЯП\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"11794\",\"name\":\"Catovair\",\"alias\":\"\",\"iata\":\"OC\",\"icao\":\"\\\\N\",\"callsign\":\"CATOVAIR\",\"country\":\"Mauritius\",\"active\":\"Y\"},{\"id\":\"11804\",\"name\":\"Halcyonair\",\"alias\":\"\",\"iata\":\"7Z\",\"icao\":\"\\\\N\",\"callsign\":\"CREOLE\",\"country\":\"Cape Verde\",\"active\":\"Y\"},{\"id\":\"11805\",\"name\":\"Business Aviation\",\"alias\":\"\",\"iata\":\"4P\",\"icao\":\"\\\\N\",\"callsign\":\"AFRICAN BUSINESS\",\"country\":\"Congo (Kinshasa)\",\"active\":\"Y\"},{\"id\":\"11806\",\"name\":\"Compagnie Africaine d\\\\\\\\'Aviation\",\"alias\":\"\",\"iata\":\"E9\",\"icao\":\"\\\\N\",\"callsign\":\"AFRICOMPANY\",\"country\":\"Congo (Kinshasa)\",\"active\":\"Y\"},{\"id\":\"11808\",\"name\":\"Zambia Skyways\",\"alias\":\"\",\"iata\":\"K8\",\"icao\":\"\\\\N\",\"callsign\":\"ZAMBIA SKIES\",\"country\":\"Zambia\",\"active\":\"Y\"},{\"id\":\"11811\",\"name\":\"AlMasria Universal Airlines\",\"alias\":\"\",\"iata\":\"UJ\",\"icao\":\"LMU\",\"callsign\":\"ALMASRIA\",\"country\":\"Egypt\",\"active\":\"Y\"},{\"id\":\"11814\",\"name\":\"SmartLynx Airlines\",\"alias\":\"\",\"iata\":\"6Y\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Latvia\",\"active\":\"Y\"},{\"id\":\"11816\",\"name\":\"KoralBlue Airlines\",\"alias\":\"\",\"iata\":\"K7\",\"icao\":\"KBR\",\"callsign\":\"KORAL BLUE\",\"country\":\"Egypt\",\"active\":\"Y\"},{\"id\":\"11823\",\"name\":\"Elysian Airlines\",\"alias\":\"\",\"iata\":\"E4\",\"icao\":\"GIE\",\"callsign\":\"\",\"country\":\"Cameroon\",\"active\":\"Y\"},{\"id\":\"11834\",\"name\":\"Hellenic Imperial Airways\",\"alias\":\"\",\"iata\":\"HT\",\"icao\":\"IMP\",\"callsign\":\"IMPERIAL\",\"country\":\"Greece\",\"active\":\"Y\"},{\"id\":\"11836\",\"name\":\"Amsterdam Airlines\",\"alias\":\"\",\"iata\":\"WD\",\"icao\":\"AAN\",\"callsign\":\"AMSTEL\",\"country\":\"Netherlands\",\"active\":\"Y\"},{\"id\":\"11838\",\"name\":\"Arik Niger\",\"alias\":\"\",\"iata\":\"Q9\",\"icao\":\"NAK\",\"callsign\":\"\",\"country\":\"Niger\",\"active\":\"Y\"},{\"id\":\"11839\",\"name\":\"Dana Air\",\"alias\":\"\",\"iata\":\"DA\",\"icao\":\"\\\\N\",\"callsign\":\"DANACO\",\"country\":\"Nigeria\",\"active\":\"Y\"},{\"id\":\"11840\",\"name\":\"STP Airways\",\"alias\":\"\",\"iata\":\"8F\",\"icao\":\"STP\",\"callsign\":\"SAOTOME AIRWAYS\",\"country\":\"Sao Tome and Principe\",\"active\":\"Y\"},{\"id\":\"11843\",\"name\":\"Med Airways\",\"alias\":\"\",\"iata\":\"7Y\",\"icao\":\"\\\\N\",\"callsign\":\"FLYING CARPET\",\"country\":\"Lebanon\",\"active\":\"Y\"},{\"id\":\"11850\",\"name\":\"Skyjet Airlines\",\"alias\":\"\",\"iata\":\"UQ\",\"icao\":\"SJU\",\"callsign\":\"SKYJET\",\"country\":\"Uganda\",\"active\":\"Y\"},{\"id\":\"11855\",\"name\":\"Air Volga\",\"alias\":\"\",\"iata\":\"G6\",\"icao\":\"\\\\N\",\"callsign\":\"GOUMRAK\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"11857\",\"name\":\"Royal Falcon\",\"alias\":\"\",\"iata\":\"RL\",\"icao\":\"RFJ\",\"callsign\":\"\",\"country\":\"Jordan\",\"active\":\"Y\"},{\"id\":\"11873\",\"name\":\"Euroline\",\"alias\":\"\",\"iata\":\"4L\",\"icao\":\"MJX\",\"callsign\":\"GEO-LINE\",\"country\":\"Georgia\",\"active\":\"Y\"},{\"id\":\"11922\",\"name\":\"Worldways\",\"alias\":\"\",\"iata\":\"WG\",\"icao\":\"WGC\",\"callsign\":\"\",\"country\":\"Canada\",\"active\":\"N\"},{\"id\":\"11947\",\"name\":\"Athens Airways\",\"alias\":\"\",\"iata\":\"ZF\",\"icao\":\"\\\\N\",\"callsign\":\"ATHENSAIR\",\"country\":\"Greece\",\"active\":\"Y\"},{\"id\":\"11948\",\"name\":\"Viking Hellas\",\"alias\":\"\",\"iata\":\"VQ\",\"icao\":\"VKH\",\"callsign\":\"DELPHI\",\"country\":\"Greece\",\"active\":\"Y\"},{\"id\":\"11963\",\"name\":\"Starline.kz\",\"alias\":\"\",\"iata\":\"DZ\",\"icao\":\"\\\\N\",\"callsign\":\"ALUNK\",\"country\":\"Kazakhstan\",\"active\":\"Y\"},{\"id\":\"11995\",\"name\":\"Euro Harmony\",\"alias\":\"Euro Harmony \",\"iata\":\"EH\",\"icao\":\"EHM\",\"callsign\":\"\",\"country\":\"Portugal\",\"active\":\"N\"},{\"id\":\"12960\",\"name\":\"Lugansk Airlines\",\"alias\":\"\",\"iata\":\"L7\",\"icao\":\"\\\\N\",\"callsign\":\"ENTERPRISE LUHANSK\",\"country\":\"Ukraine\",\"active\":\"Y\"},{\"id\":\"12961\",\"name\":\"Gryphon Airlines\",\"alias\":\"\",\"iata\":\"6P\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"12962\",\"name\":\"Gadair European Airlines\",\"alias\":\"\",\"iata\":\"GP\",\"icao\":\"GDR\",\"callsign\":\"GADAIR\",\"country\":\"Spain\",\"active\":\"Y\"},{\"id\":\"12965\",\"name\":\"Spirit of Manila Airlines\",\"alias\":\"\",\"iata\":\"SM\",\"icao\":\"MNP\",\"callsign\":\"MANILA SKY\",\"country\":\"Philippines\",\"active\":\"Y\"},{\"id\":\"12975\",\"name\":\"Chongqing Airlines\",\"alias\":\"\",\"iata\":\"OQ\",\"icao\":\"CQN\",\"callsign\":\"CHONG QING\",\"country\":\"China\",\"active\":\"Y\"},{\"id\":\"12978\",\"name\":\"West Air China\",\"alias\":\"\",\"iata\":\"PN\",\"icao\":\"CHB\",\"callsign\":\"WEST CHINA\",\"country\":\"China\",\"active\":\"Y\"},{\"id\":\"12997\",\"name\":\"QatXpress\",\"alias\":\"qatXpress\",\"iata\":\"C3\",\"icao\":\"QAX\",\"callsign\":\"\",\"country\":\"Qatar\",\"active\":\"Y\"},{\"id\":\"13076\",\"name\":\"OneChina\",\"alias\":\"OneChina\",\"iata\":\"1C\",\"icao\":\"1CH\",\"callsign\":\"\",\"country\":\"China\",\"active\":\"Y\"},{\"id\":\"13088\",\"name\":\"NordStar Airlines\",\"alias\":\"\",\"iata\":\"Y7\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"13089\",\"name\":\"Joy Air\",\"alias\":\"\",\"iata\":\"JR\",\"icao\":\"JOY\",\"callsign\":\"JOY AIR\",\"country\":\"China\",\"active\":\"Y\"},{\"id\":\"13105\",\"name\":\"Air India Regional\",\"alias\":\"\",\"iata\":\"CD\",\"icao\":\"\\\\N\",\"callsign\":\"ALLIED\",\"country\":\"India\",\"active\":\"Y\"},{\"id\":\"13106\",\"name\":\"MDLR Airlines\",\"alias\":\"\",\"iata\":\"9H\",\"icao\":\"\\\\N\",\"callsign\":\"MDLR\",\"country\":\"India\",\"active\":\"Y\"},{\"id\":\"13108\",\"name\":\"Maldivian\",\"alias\":\"\",\"iata\":\"Q2\",\"icao\":\"\\\\N\",\"callsign\":\"ISLAND AVIATION\",\"country\":\"Maldives\",\"active\":\"Y\"},{\"id\":\"13130\",\"name\":\"Xpressair\",\"alias\":\"\",\"iata\":\"XN\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Indonesia\",\"active\":\"Y\"},{\"id\":\"13178\",\"name\":\"Strategic Airlines\",\"alias\":\"\",\"iata\":\"VC\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Australia\",\"active\":\"Y\"},{\"id\":\"13190\",\"name\":\"Al-Naser Airlines\",\"alias\":\"\",\"iata\":\"NA\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Iraq\",\"active\":\"Y\"},{\"id\":\"13200\",\"name\":\"Fuji Dream Airlines\",\"alias\":\"\",\"iata\":\"JH\",\"icao\":\"\\\\N\",\"callsign\":\"FUJI DREAM\",\"country\":\"Japan\",\"active\":\"Y\"},{\"id\":\"13218\",\"name\":\"SGA Airlines\",\"alias\":\"\",\"iata\":\"5E\",\"icao\":\"\\\\N\",\"callsign\":\"SIAM\",\"country\":\"Thailand\",\"active\":\"Y\"},{\"id\":\"13242\",\"name\":\"Air2there\",\"alias\":\"\",\"iata\":\"F8\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"New Zealand\",\"active\":\"Y\"},{\"id\":\"13254\",\"name\":\"Avianova (Russia)\",\"alias\":\"\",\"iata\":\"AO\",\"icao\":\"\\\\N\",\"callsign\":\"Nova\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"13303\",\"name\":\"Parmiss Airlines (IPV)\",\"alias\":\"\",\"iata\":\"PA\",\"icao\":\"IPV\",\"callsign\":\"IPV\",\"country\":\"Iran\",\"active\":\"Y\"},{\"id\":\"13304\",\"name\":\"EuropeSky\",\"alias\":\"\",\"iata\":\"ES\",\"icao\":\"EUV\",\"callsign\":\"EuropeSky\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"13306\",\"name\":\"BRAZIL AIR\",\"alias\":\"BRAZIL AIR\",\"iata\":\"GB\",\"icao\":\"BZE\",\"callsign\":\"BRAZIL AIR\",\"country\":\"Brazil\",\"active\":\"Y\"},{\"id\":\"13335\",\"name\":\"Homer Air\",\"alias\":\"Homer Sky\",\"iata\":\"MR\",\"icao\":\"OME\",\"callsign\":\"\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"13388\",\"name\":\"Court Line\",\"alias\":\"\",\"iata\":\"??\",\"icao\":\"???\",\"callsign\":\"\",\"country\":\"United Kingdom\",\"active\":\"N\"},{\"id\":\"13389\",\"name\":\"South West Africa Territory Force\",\"alias\":\"SWATF\",\"iata\":\"??\",\"icao\":\"***\",\"callsign\":\"\",\"country\":\"Namibia\",\"active\":\"N\"},{\"id\":\"13390\",\"name\":\"Lombards Air\",\"alias\":\"\",\"iata\":\"++\",\"icao\":\"---\",\"callsign\":\"\",\"country\":\"South Africa\",\"active\":\"N\"},{\"id\":\"13391\",\"name\":\"U.S. Air\",\"alias\":\"\",\"iata\":\"-+\",\"icao\":\"--+\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"13392\",\"name\":\"Flitestar\",\"alias\":\"\",\"iata\":\"GM\",\"icao\":\"===\",\"callsign\":\"\",\"country\":\"South Africa\",\"active\":\"N\"},{\"id\":\"13394\",\"name\":\"Jayrow\",\"alias\":\"\",\"iata\":\"\\\\\\\\'\",\"icao\":\"\\\\\\\\'\\\\\\\\\",\"callsign\":\"\",\"country\":\"Australia\",\"active\":\"Y\"},{\"id\":\"13395\",\"name\":\"Llloyd Helicopters\",\"alias\":\"\",\"iata\":\"::\",\"icao\":\":::\",\"callsign\":\"\",\"country\":\"Australia\",\"active\":\"N\"},{\"id\":\"13397\",\"name\":\"Wilderness Air\",\"alias\":\"\",\"iata\":\";;\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Australia\",\"active\":\"Y\"},{\"id\":\"13398\",\"name\":\"Whitaker Air\",\"alias\":\"\",\"iata\":\"^^\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Australia\",\"active\":\"Y\"},{\"id\":\"13633\",\"name\":\"PanAm World Airways\",\"alias\":\"\",\"iata\":\"WQ\",\"icao\":\"PQW\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"13690\",\"name\":\"Virginwings\",\"alias\":\"\",\"iata\":\"YY\",\"icao\":\"VWA\",\"callsign\":\"\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"13704\",\"name\":\"KSY\",\"alias\":\"Kreta Sky\",\"iata\":\"KY\",\"icao\":\"KSY\",\"callsign\":\"KSY\",\"country\":\"Greece\",\"active\":\"Y\"},{\"id\":\"13732\",\"name\":\"Buquebus Líneas Aéreas\",\"alias\":\"\",\"iata\":\"BQ\",\"icao\":\"BQB\",\"callsign\":\"\",\"country\":\"Uruguay\",\"active\":\"Y\"},{\"id\":\"13734\",\"name\":\"SOCHI AIR\",\"alias\":\"SOCHI\",\"iata\":\"CQ\",\"icao\":\"KOL\",\"callsign\":\"SLOW FROG\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"13757\",\"name\":\"Wizz Air Ukraine\",\"alias\":\"\",\"iata\":\"WU\",\"icao\":\"WAU\",\"callsign\":\"WIZZAIR UKRAINE\",\"country\":\"Ukraine\",\"active\":\"Y\"},{\"id\":\"13781\",\"name\":\"88\",\"alias\":\"\",\"iata\":\"47\",\"icao\":\"VVN\",\"callsign\":\"\",\"country\":\"Cyprus\",\"active\":\"Y\"},{\"id\":\"13815\",\"name\":\"LCM AIRLINES\",\"alias\":\"\",\"iata\":\"LQ\",\"icao\":\"LMM\",\"callsign\":\"\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"13838\",\"name\":\"Aero Brazil\",\"alias\":\"\",\"iata\":\"BZ\",\"icao\":\"BZL\",\"callsign\":\"\",\"country\":\"Brazil\",\"active\":\"N\"},{\"id\":\"13899\",\"name\":\"Cambodia Angkor Air (K6)\",\"alias\":\"\",\"iata\":\"K6\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Cambodia\",\"active\":\"Y\"},{\"id\":\"13905\",\"name\":\"Skyline nepc\",\"alias\":\"\",\"iata\":\"D5\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"India\",\"active\":\"N\"},{\"id\":\"13923\",\"name\":\"THREE\",\"alias\":\"\",\"iata\":\"H3\",\"icao\":\"T33\",\"callsign\":\"\",\"country\":\"China\",\"active\":\"N\"},{\"id\":\"13936\",\"name\":\"Royal European Airlines\",\"alias\":\"\",\"iata\":\"69\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"13947\",\"name\":\"Tom\\\\\\\\'s & co airliners\",\"alias\":\"Tom\\\\\\\\'s air\",\"iata\":\"&T\",\"icao\":\"T&O\",\"callsign\":\"T&\",\"country\":\"France\",\"active\":\"Y\"},{\"id\":\"13983\",\"name\":\"Azul\",\"alias\":\"Azul Linhas Aéreas Brasileiras\",\"iata\":\"AD\",\"icao\":\"AZU\",\"callsign\":\"\",\"country\":\"Brazil\",\"active\":\"Y\"},{\"id\":\"14061\",\"name\":\"LSM Airlines\",\"alias\":\"slowbird\",\"iata\":\"PQ\",\"icao\":\"LOO\",\"callsign\":\"slowbird\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"14094\",\"name\":\"LionXpress\",\"alias\":\"lionXpress\",\"iata\":\"C4\",\"icao\":\"LIX\",\"callsign\":\"LIX\",\"country\":\"Cameroon\",\"active\":\"Y\"},{\"id\":\"14109\",\"name\":\"Nik Airways\",\"alias\":\"\",\"iata\":\"X1\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Saudi Arabia\",\"active\":\"N\"},{\"id\":\"14118\",\"name\":\"Genesis\",\"alias\":\"\",\"iata\":\"GK\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Pakistan\",\"active\":\"Y\"},{\"id\":\"14388\",\"name\":\"Congo Express\",\"alias\":\"\",\"iata\":\"XZ\",\"icao\":\"\\\\N\",\"callsign\":\"EXPRESSWAYS\",\"country\":\"Congo (Kinshasa)\",\"active\":\"Y\"},{\"id\":\"14485\",\"name\":\"Fly Dubai\",\"alias\":\"\",\"iata\":\"FZ\",\"icao\":\"FDB\",\"callsign\":\"\",\"country\":\"United Arab Emirates\",\"active\":\"Y\"},{\"id\":\"14620\",\"name\":\"Domenican Airlines\",\"alias\":\"Domenican\",\"iata\":\"D1\",\"icao\":\"MDO\",\"callsign\":\"Domenican\",\"country\":\"Dominican Republic\",\"active\":\"Y\"},{\"id\":\"14725\",\"name\":\"Air Atlantic\",\"alias\":\"\",\"iata\":\"9A\",\"icao\":\"\\\\N\",\"callsign\":\"Atlantic\",\"country\":\"Canada\",\"active\":\"N\"},{\"id\":\"14728\",\"name\":\"Air Ops\",\"alias\":\"\",\"iata\":\"CR\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Sweden\",\"active\":\"N\"},{\"id\":\"14849\",\"name\":\"Aereonautica militare\",\"alias\":\"\",\"iata\":\"JY\",\"icao\":\"AXZ\",\"callsign\":\"\",\"country\":\"Italy\",\"active\":\"Y\"},{\"id\":\"14881\",\"name\":\"LSM AIRLINES \",\"alias\":\"Russian. Yours Air Lines \",\"iata\":\"YZ\",\"icao\":\"YZZ\",\"callsign\":\"Moscow frog \",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"14921\",\"name\":\"Aero Lloyd (YP)\",\"alias\":\"\",\"iata\":\"YP\",\"icao\":\"AEF\",\"callsign\":\"\",\"country\":\"Germany\",\"active\":\"N\"},{\"id\":\"15814\",\"name\":\"UTair-Express\",\"alias\":\"\",\"iata\":\"UR\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"15837\",\"name\":\"Huaxia\",\"alias\":\"HUAXIA\",\"iata\":\"G5\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"China\",\"active\":\"Y\"},{\"id\":\"15867\",\"name\":\"Zabaykalskii Airlines\",\"alias\":\"Baikal Airlines\",\"iata\":\"ZP\",\"icao\":\"ZZZ\",\"callsign\":\"Lakeair\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"15893\",\"name\":\"Marysya Airlines\",\"alias\":\"MARYSYA AIRLINES\",\"iata\":\"M4\",\"icao\":\"1QA\",\"callsign\":\"MARSHAK AIR\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"15897\",\"name\":\"N1\",\"alias\":\"\",\"iata\":\"N1\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Peru\",\"active\":\"Y\"},{\"id\":\"15930\",\"name\":\"Airlink (SAA)\",\"alias\":\"\",\"iata\":\"4Z\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"South Africa\",\"active\":\"Y\"},{\"id\":\"15953\",\"name\":\"JobAir\",\"alias\":\"\",\"iata\":\"3B\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Czech Republic\",\"active\":\"Y\"},{\"id\":\"15970\",\"name\":\"Zuliana de Aviacion\",\"alias\":\"Zuliana\",\"iata\":\"OD\",\"icao\":\"ULA\",\"callsign\":\"\",\"country\":\"Venezuela\",\"active\":\"N\"},{\"id\":\"15975\",\"name\":\"Black Stallion Airways\",\"alias\":\"\",\"iata\":\"BZ\",\"icao\":\"BSA\",\"callsign\":\"Stallion\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"15984\",\"name\":\"German International Air Lines\",\"alias\":\"Germanair\",\"iata\":\"GM\",\"icao\":\"GER\",\"callsign\":\"\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"15985\",\"name\":\"TrasBrasil\",\"alias\":\"\",\"iata\":\"TB\",\"icao\":\"TBZ\",\"callsign\":\"\",\"country\":\"Brazil\",\"active\":\"Y\"},{\"id\":\"15989\",\"name\":\"TransBrasil Airlines\",\"alias\":\"\",\"iata\":\"TH\",\"icao\":\"THS\",\"callsign\":\"\",\"country\":\"Brazil\",\"active\":\"Y\"},{\"id\":\"15999\",\"name\":\"China SSS\",\"alias\":\"Chunqiu Airlines\",\"iata\":\"9C\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"China\",\"active\":\"Y\"},{\"id\":\"16025\",\"name\":\"Nihon.jet\",\"alias\":\"\",\"iata\":\"NJ\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Japan\",\"active\":\"N\"},{\"id\":\"16093\",\"name\":\"Transportes Aéreos Nacionales de Selva\",\"alias\":\"\",\"iata\":\"TJ\",\"icao\":\"\\\\N\",\"callsign\":\"Aereos Selva\",\"country\":\"Peru\",\"active\":\"N\"},{\"id\":\"16103\",\"name\":\"Air Mekong\",\"alias\":\"\",\"iata\":\"P8\",\"icao\":\"MKG\",\"callsign\":\"Air Mekong\",\"country\":\"Vietnam\",\"active\":\"Y\"},{\"id\":\"16110\",\"name\":\"Harbour Air (Priv)\",\"alias\":\"\",\"iata\":\"H3\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"16116\",\"name\":\"Air Hamburg (AHO)\",\"alias\":\"\",\"iata\":\"HH\",\"icao\":\"AHO\",\"callsign\":\"Air Hamburg\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"16120\",\"name\":\"ZABAIKAL AIRLINES\",\"alias\":\"ZABAIKAL \",\"iata\":\"Z6\",\"icao\":\"ZTT\",\"callsign\":\"BAIKAL \",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"16127\",\"name\":\"TransHolding\",\"alias\":\"Trans\",\"iata\":\"TI\",\"icao\":\"THI\",\"callsign\":\"\",\"country\":\"Brazil\",\"active\":\"Y\"},{\"id\":\"16133\",\"name\":\"Yeti Airways\",\"alias\":\"\",\"iata\":\"YT\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Nepal\",\"active\":\"Y\"},{\"id\":\"16135\",\"name\":\"Yellowstone Club Private Shuttle\",\"alias\":\"\",\"iata\":\"Y1\",\"icao\":\"\\\\N\",\"callsign\":\"YCS\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"16136\",\"name\":\"Caucasus Airlines\",\"alias\":\"\",\"iata\":\"NS\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Georgia\",\"active\":\"Y\"},{\"id\":\"16139\",\"name\":\"Serbian Airlines\",\"alias\":\"\",\"iata\":\"S1\",\"icao\":\"SA1\",\"callsign\":\"\",\"country\":\"Serbia\",\"active\":\"Y\"},{\"id\":\"16149\",\"name\":\"Windward Islands Airways\",\"alias\":\"\",\"iata\":\"WM\",\"icao\":\"\\\\N\",\"callsign\":\"Winair\",\"country\":\"Netherlands Antilles\",\"active\":\"Y\"},{\"id\":\"16150\",\"name\":\"TransHolding System\",\"alias\":\"\",\"iata\":\"YO\",\"icao\":\"TYS\",\"callsign\":\"\",\"country\":\"Brazil\",\"active\":\"Y\"},{\"id\":\"16151\",\"name\":\"CCML Airlines\",\"alias\":\"\",\"iata\":\"CB\",\"icao\":\"CCC\",\"callsign\":\"\",\"country\":\"Colombia\",\"active\":\"Y\"},{\"id\":\"16197\",\"name\":\"Air Charter International\",\"alias\":\"\",\"iata\":\"SF\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"France\",\"active\":\"N\"},{\"id\":\"16234\",\"name\":\"Fly Brasil\",\"alias\":\"Fly Brasil\",\"iata\":\"F1\",\"icao\":\"FBL\",\"callsign\":\"FBL\",\"country\":\"Brazil\",\"active\":\"Y\"},{\"id\":\"16261\",\"name\":\"CB Airways UK ( Interliging Flights )\",\"alias\":\"\",\"iata\":\"1F\",\"icao\":\"CIF\",\"callsign\":\"\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"16262\",\"name\":\"Fly Colombia ( Interliging Flights )\",\"alias\":\"\",\"iata\":\"3F\",\"icao\":\"3FF\",\"callsign\":\"\",\"country\":\"Colombia\",\"active\":\"Y\"},{\"id\":\"16264\",\"name\":\"Trans Pas Air\",\"alias\":\"\",\"iata\":\"T6\",\"icao\":\"TP6\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"16273\",\"name\":\"KMV\",\"alias\":\"\",\"iata\":\"МИ\",\"icao\":\"\\\\N\",\"callsign\":\"Air Minvody\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"16323\",\"name\":\"Himalayan Airlines\",\"alias\":\"Himalaya\",\"iata\":\"HC\",\"icao\":\"HYM\",\"callsign\":\"Himalayan\",\"country\":\"Nepal\",\"active\":\"Y\"},{\"id\":\"16327\",\"name\":\"Indya Airline Group\",\"alias\":\"Indya1\",\"iata\":\"G1\",\"icao\":\"IG1\",\"callsign\":\"Indya1\",\"country\":\"India\",\"active\":\"Y\"},{\"id\":\"16329\",\"name\":\"Sunwing\",\"alias\":\"\",\"iata\":\"WG\",\"icao\":\"\\\\N\",\"callsign\":\"sunwing\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"16359\",\"name\":\"Japan Regio\",\"alias\":\"\",\"iata\":\"ZX\",\"icao\":\"ZXY\",\"callsign\":\"\",\"country\":\"Japan\",\"active\":\"Y\"},{\"id\":\"16363\",\"name\":\"Norte Lineas Aereas\",\"alias\":\"NORTE\",\"iata\":\"N0\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Argentina\",\"active\":\"Y\"},{\"id\":\"16364\",\"name\":\"Austral Brasil\",\"alias\":\"Austral Brasil lineas aereas\",\"iata\":\"W7\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Brazil\",\"active\":\"Y\"},{\"id\":\"16373\",\"name\":\"PEGASUS AIRLINES-\",\"alias\":\"\",\"iata\":\"H9\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Turkey\",\"active\":\"Y\"},{\"id\":\"16399\",\"name\":\"AirLiberté\",\"alias\":\"\",\"iata\":\"IJ\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"France\",\"active\":\"N\"},{\"id\":\"16415\",\"name\":\"Camair-co\",\"alias\":\"\",\"iata\":\"QC\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Cameroon\",\"active\":\"Y\"},{\"id\":\"16437\",\"name\":\"Aerocontinente (Priv)\",\"alias\":\"\",\"iata\":\"N6\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Peru\",\"active\":\"N\"},{\"id\":\"16459\",\"name\":\"Sky Regional\",\"alias\":\"Air Canada Express\",\"iata\":\"RS\",\"icao\":\"\\\\N\",\"callsign\":\"Sky Regional\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"16475\",\"name\":\"TUR Avrupa Hava YollarÄ±\",\"alias\":\"TUR European Airways\",\"iata\":\"YI\",\"icao\":\"\\\\N\",\"callsign\":\"TurAvrupa\",\"country\":\"Turkey\",\"active\":\"N\"},{\"id\":\"16507\",\"name\":\"LSM International \",\"alias\":\"Moskva-air\",\"iata\":\"II\",\"icao\":\"UWW\",\"callsign\":\"moose\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"16508\",\"name\":\"Baikotovitchestrian Airlines \",\"alias\":\"\",\"iata\":\"BU\",\"icao\":\"BUU\",\"callsign\":\"\",\"country\":\"American Samoa\",\"active\":\"Y\"},{\"id\":\"16511\",\"name\":\"Luchsh Airlines \",\"alias\":\"Air luch\",\"iata\":\"L4\",\"icao\":\"LJJ\",\"callsign\":\"russian sky\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"16570\",\"name\":\"Zimbabwean Airlines\",\"alias\":\"\",\"iata\":\"Z7\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Zimbabwe\",\"active\":\"N\"},{\"id\":\"16585\",\"name\":\"Air Cargo Germany\",\"alias\":\"\",\"iata\":\"6U\",\"icao\":\"\\\\N\",\"callsign\":\"Loadmaster\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"16615\",\"name\":\"Mongolian International Air Lines \",\"alias\":\"Mongol Air \",\"iata\":\"7M\",\"icao\":\"ZTF\",\"callsign\":\"Mongol_AIr \",\"country\":\"Mongolia\",\"active\":\"Y\"},{\"id\":\"16616\",\"name\":\"Alaniya Airlines\",\"alias\":\"Алания\",\"iata\":\"2D\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Russia\",\"active\":\"N\"},{\"id\":\"16624\",\"name\":\"Tway Airlines\",\"alias\":\"\",\"iata\":\"TW\",\"icao\":\"TWB\",\"callsign\":\"TWAY AIR\",\"country\":\"South Korea\",\"active\":\"Y\"},{\"id\":\"16625\",\"name\":\"Papillon Grand Canyon Helicopters\",\"alias\":\"\",\"iata\":\"HI\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"16628\",\"name\":\"Jusur airways\",\"alias\":\"\",\"iata\":\"JX\",\"icao\":\"JSR\",\"callsign\":\"\",\"country\":\"Egypt\",\"active\":\"Y\"},{\"id\":\"16645\",\"name\":\"NEXT Brasil\",\"alias\":\"NEXT\",\"iata\":\"XB\",\"icao\":\"NXB\",\"callsign\":\"XB\",\"country\":\"Brazil\",\"active\":\"Y\"},{\"id\":\"16660\",\"name\":\"AeroWorld \",\"alias\":\"Sovet Air \",\"iata\":\"W4\",\"icao\":\"WER\",\"callsign\":\"sovet\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"16671\",\"name\":\"Cook Island Air\",\"alias\":\"\",\"iata\":\"KH\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Cook Islands\",\"active\":\"N\"},{\"id\":\"16675\",\"name\":\"US Africa Airways\",\"alias\":\"\",\"iata\":\"E8\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"16695\",\"name\":\"GNB Linhas Aereas\",\"alias\":\"\",\"iata\":\"GN\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Brazil\",\"active\":\"Y\"},{\"id\":\"16702\",\"name\":\"Usa Sky Cargo\",\"alias\":\"USky\",\"iata\":\"E1\",\"icao\":\"ES2\",\"callsign\":\"USKY\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"16707\",\"name\":\"Hankook Airline\",\"alias\":\"\",\"iata\":\"HN\",\"icao\":\"HNX\",\"callsign\":\"HNX\",\"country\":\"South Korea\",\"active\":\"Y\"},{\"id\":\"16715\",\"name\":\"Red Jet America\",\"alias\":\"\",\"iata\":\"RR\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"16717\",\"name\":\"REDjet\",\"alias\":\"\",\"iata\":\"Z7\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Barbados\",\"active\":\"Y\"},{\"id\":\"16719\",\"name\":\"Hellenic Airways\",\"alias\":\"\",\"iata\":\"1H\",\"icao\":\"HEY\",\"callsign\":\"Hellenic\",\"country\":\"Greece\",\"active\":\"N\"},{\"id\":\"16720\",\"name\":\"Red Jet Andes\",\"alias\":\"\",\"iata\":\"PT\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Peru\",\"active\":\"Y\"},{\"id\":\"16721\",\"name\":\"Red Jet Canada\",\"alias\":\"\",\"iata\":\"QY\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"16723\",\"name\":\"Sprintair\",\"alias\":\"\",\"iata\":\"0G\",\"icao\":\"SAR\",\"callsign\":\"\",\"country\":\"Poland\",\"active\":\"Y\"},{\"id\":\"16724\",\"name\":\"Red Jet Mexico\",\"alias\":\"\",\"iata\":\"4X\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Mexico\",\"active\":\"Y\"},{\"id\":\"16725\",\"name\":\"Marusya Airways\",\"alias\":\"Marusya Air\",\"iata\":\"Y8\",\"icao\":\"MRS\",\"callsign\":\"snowball\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"16726\",\"name\":\"Era Alaska\",\"alias\":\"\",\"iata\":\"7H\",\"icao\":\"ERR\",\"callsign\":\"ERAH\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"16728\",\"name\":\"AirRussia\",\"alias\":\"RussianConector\",\"iata\":\"R8\",\"icao\":\"RRJ\",\"callsign\":\"russiancloud\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"16735\",\"name\":\"Hankook Air US\",\"alias\":\"\",\"iata\":\"H1\",\"icao\":\"HA1\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"16738\",\"name\":\"NEPC Airlines\",\"alias\":\"\",\"iata\":\"D5\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"India\",\"active\":\"N\"},{\"id\":\"16753\",\"name\":\"Canadian World\",\"alias\":\"\",\"iata\":\"10\",\"icao\":\"CNN\",\"callsign\":\"Canadian\",\"country\":\"Canada\",\"active\":\"N\"},{\"id\":\"16796\",\"name\":\"I-Fly\",\"alias\":\"\",\"iata\":\"H5\",\"icao\":\"RSY\",\"callsign\":\"RUSSIAN SKY\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"16798\",\"name\":\"T.A.T\",\"alias\":\"\",\"iata\":\"IJ\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"France\",\"active\":\"N\"},{\"id\":\"16811\",\"name\":\"Alinord\",\"alias\":\"\",\"iata\":\"DN\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Italy\",\"active\":\"N\"},{\"id\":\"16825\",\"name\":\"Pacific Express\",\"alias\":\"\",\"iata\":\"VB\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"16837\",\"name\":\"VickJet\",\"alias\":\"\",\"iata\":\"KT\",\"icao\":\"VKJ\",\"callsign\":\"Vickjet\",\"country\":\"France\",\"active\":\"Y\"},{\"id\":\"16844\",\"name\":\"BVI Airways\",\"alias\":\"\",\"iata\":\"XV\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"British Virgin Islands\",\"active\":\"Y\"},{\"id\":\"16860\",\"name\":\"Salsa d\\\\\\\\'Haiti\",\"alias\":\"\",\"iata\":\"SO\",\"icao\":\"SLC\",\"callsign\":\"SALSA\",\"country\":\"Haiti\",\"active\":\"Y\"},{\"id\":\"16867\",\"name\":\"Zambezi Airlines (ZMA)\",\"alias\":\"\",\"iata\":\"ZJ\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Zambia\",\"active\":\"Y\"},{\"id\":\"16882\",\"name\":\"Polet Airlines (Priv)\",\"alias\":\"\",\"iata\":\"YQ\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"16900\",\"name\":\"TROPICAL LINHAS AEREAS\",\"alias\":\"TROPICAL\",\"iata\":\"T1\",\"icao\":\"TP3\",\"callsign\":\"\",\"country\":\"Brazil\",\"active\":\"N\"},{\"id\":\"16901\",\"name\":\"12 North\",\"alias\":\"\",\"iata\":\"12\",\"icao\":\"N12\",\"callsign\":\"12N\",\"country\":\"India\",\"active\":\"Y\"},{\"id\":\"16942\",\"name\":\"Mauritania Airlines International\",\"alias\":\"\",\"iata\":\"L6\",\"icao\":\"MAI\",\"callsign\":\"\",\"country\":\"Mauritania\",\"active\":\"Y\"},{\"id\":\"16956\",\"name\":\"MAT Airways\",\"alias\":\"\",\"iata\":\"6F\",\"icao\":\"MKD\",\"callsign\":\"\",\"country\":\"Macedonia\",\"active\":\"Y\"},{\"id\":\"16960\",\"name\":\"Asian Wings Airways\",\"alias\":\"\",\"iata\":\"AW\",\"icao\":\"AWM\",\"callsign\":\"Asian Star\",\"country\":\"Burma\",\"active\":\"Y\"},{\"id\":\"16963\",\"name\":\"Air Arabia Egypt\",\"alias\":\"\",\"iata\":\"E5\",\"icao\":\"RBG\",\"callsign\":\"\",\"country\":\"Egypt\",\"active\":\"Y\"},{\"id\":\"16975\",\"name\":\"Alitalia Cityliner\",\"alias\":\"\",\"iata\":\"CT\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Italy\",\"active\":\"Y\"},{\"id\":\"17022\",\"name\":\"Orchid Airlines\",\"alias\":\"\",\"iata\":\"OI\",\"icao\":\"ORC\",\"callsign\":\"\",\"country\":\"Australia\",\"active\":\"Y\"},{\"id\":\"17023\",\"name\":\"Asia Wings\",\"alias\":\"\",\"iata\":\"Y5\",\"icao\":\"AWA\",\"callsign\":\"\",\"country\":\"Kazakhstan\",\"active\":\"Y\"},{\"id\":\"17082\",\"name\":\"Skywest Australia\",\"alias\":\"\",\"iata\":\"XR\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Australia\",\"active\":\"Y\"},{\"id\":\"17083\",\"name\":\"Nile Air\",\"alias\":\"\",\"iata\":\"NP\",\"icao\":\"NIA\",\"callsign\":\"NILEBIRD\",\"country\":\"Egypt\",\"active\":\"Y\"},{\"id\":\"17094\",\"name\":\"Senegal Airlines\",\"alias\":\"\",\"iata\":\"DN\",\"icao\":\"SGG\",\"callsign\":\"\",\"country\":\"Senegal\",\"active\":\"Y\"},{\"id\":\"17095\",\"name\":\"Fly 6ix\",\"alias\":\"\",\"iata\":\"6I\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Sierra Leone\",\"active\":\"Y\"},{\"id\":\"17099\",\"name\":\"Starbow Airlines\",\"alias\":\"\",\"iata\":\"S9\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Ghana\",\"active\":\"Y\"},{\"id\":\"17115\",\"name\":\"Copenhagen Express\",\"alias\":\"\",\"iata\":\"0X\",\"icao\":\"CX0\",\"callsign\":\"Copex\",\"country\":\"Denmark\",\"active\":\"Y\"},{\"id\":\"17408\",\"name\":\"BusinessAir\",\"alias\":\"\",\"iata\":\"8B\",\"icao\":\"BCC\",\"callsign\":\"\",\"country\":\"Thailand\",\"active\":\"Y\"},{\"id\":\"17519\",\"name\":\"SENIC AIRLINES\",\"alias\":\"\",\"iata\":\"YR\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"17571\",\"name\":\"Sky Wing Pacific\",\"alias\":\"\",\"iata\":\"C7\",\"icao\":\"CR7\",\"callsign\":\"\",\"country\":\"South Korea\",\"active\":\"Y\"},{\"id\":\"17574\",\"name\":\"Air Indus\",\"alias\":\"Indus Airlines Pak\",\"iata\":\"PP\",\"icao\":\"AI0\",\"callsign\":\"AIPL\",\"country\":\"Pakistan\",\"active\":\"Y\"},{\"id\":\"17575\",\"name\":\"Samurai Airlines\",\"alias\":\"Samurai Airlines (DUMMY)\",\"iata\":\"07\",\"icao\":\"770\",\"callsign\":\"Sam\",\"country\":\"Pakistan\",\"active\":\"N\"},{\"id\":\"17614\",\"name\":\"AirOne Continental\",\"alias\":\"AirOne Continental\",\"iata\":\"00\",\"icao\":\"000\",\"callsign\":\"Eastern\",\"country\":\"Slovakia\",\"active\":\"N\"},{\"id\":\"17618\",\"name\":\"AirOne Polska\",\"alias\":\"AirOne Polska\",\"iata\":\"U1\",\"icao\":\"001\",\"callsign\":\"AOC\",\"country\":\"Poland\",\"active\":\"N\"},{\"id\":\"17675\",\"name\":\"Peach Aviation\",\"alias\":\"\",\"iata\":\"MM\",\"icao\":\"\\\\N\",\"callsign\":\"Air Peach\",\"country\":\"Japan\",\"active\":\"Y\"},{\"id\":\"17750\",\"name\":\"Aviabus\",\"alias\":\"\",\"iata\":\"U1\",\"icao\":\"ABI\",\"callsign\":\"\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"17780\",\"name\":\"Michael Airlines\",\"alias\":\"Javi\",\"iata\":\"DF\",\"icao\":\"MJG\",\"callsign\":\"MJG\",\"country\":\"Puerto Rico\",\"active\":\"Y\"},{\"id\":\"17786\",\"name\":\"Korongo Airlines\",\"alias\":\"\",\"iata\":\"ZC\",\"icao\":\"KGO\",\"callsign\":\"KORONGO\",\"country\":\"Congo (Kinshasa)\",\"active\":\"Y\"},{\"id\":\"17794\",\"name\":\"Indonesia Sky\",\"alias\":\"\",\"iata\":\"I5\",\"icao\":\"IDS\",\"callsign\":\"\",\"country\":\"Indonesia\",\"active\":\"Y\"},{\"id\":\"17822\",\"name\":\"Pelangi \",\"alias\":\"\",\"iata\":\"9P\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Malaysia\",\"active\":\"N\"},{\"id\":\"17841\",\"name\":\"Aws express\",\"alias\":\"\",\"iata\":\"B0\",\"icao\":\"666\",\"callsign\":\"aws\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"17859\",\"name\":\"Southjet\",\"alias\":\"\",\"iata\":\"76\",\"icao\":\"SJS\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"17860\",\"name\":\"Southjet connect\",\"alias\":\"\",\"iata\":\"77\",\"icao\":\"ZCS\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"17861\",\"name\":\"Air Cape\",\"alias\":\"\",\"iata\":\"KP\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"South Africa\",\"active\":\"N\"},{\"id\":\"17862\",\"name\":\"Southjet cargo\",\"alias\":\"\",\"iata\":\"78\",\"icao\":\"XAN\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"17881\",\"name\":\"Iberia Express\",\"alias\":\"\",\"iata\":\"I2\",\"icao\":\"IBS\",\"callsign\":\"\",\"country\":\"Spain\",\"active\":\"Y\"},{\"id\":\"17885\",\"name\":\"Interjet (ABC Aerolineas)\",\"alias\":\"\",\"iata\":\"4O\",\"icao\":\"\\\\N\",\"callsign\":\"INTERJET\",\"country\":\"Mexico\",\"active\":\"Y\"},{\"id\":\"17889\",\"name\":\"AirOnix\",\"alias\":\"\",\"iata\":\"OG\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Ukraine\",\"active\":\"Y\"},{\"id\":\"17890\",\"name\":\"Nordic Global Airlines\",\"alias\":\"\",\"iata\":\"NJ\",\"icao\":\"NGB\",\"callsign\":\"Nordic Global\",\"country\":\"Finland\",\"active\":\"Y\"},{\"id\":\"17891\",\"name\":\"Scoot\",\"alias\":\"\",\"iata\":\"TR\",\"icao\":\"SCO\",\"callsign\":\"\",\"country\":\"Singapore\",\"active\":\"Y\"},{\"id\":\"17893\",\"name\":\"Starling Airlines Spain\",\"alias\":\"\",\"iata\":\"SX\",\"icao\":\"STS\",\"callsign\":\"STARLING\",\"country\":\"Spain\",\"active\":\"N\"},{\"id\":\"17909\",\"name\":\"Hi Fly (5K)\",\"alias\":\"\",\"iata\":\"5K\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Portugal\",\"active\":\"Y\"},{\"id\":\"17911\",\"name\":\"China Northwest Airlines (WH)\",\"alias\":\"\",\"iata\":\"WH\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"China\",\"active\":\"Y\"},{\"id\":\"17935\",\"name\":\"Zenith International Airline\",\"alias\":\"Zenith\",\"iata\":\"ZN\",\"icao\":\"ZNA\",\"callsign\":\"ZENITH\",\"country\":\"Thailand\",\"active\":\"Y\"},{\"id\":\"17936\",\"name\":\"Orbit Airlines Azerbaijan\",\"alias\":\"Orbit Azerbaijan\",\"iata\":\"O1\",\"icao\":\"OAB\",\"callsign\":\"Orbitaz\",\"country\":\"Azerbaijan\",\"active\":\"Y\"},{\"id\":\"17989\",\"name\":\"Air Alps Aviation (A6)\",\"alias\":\"\",\"iata\":\"A6\",\"icao\":\"\\\\N\",\"callsign\":\"ALPAV\",\"country\":\"Austria\",\"active\":\"Y\"},{\"id\":\"18169\",\"name\":\"Patriot Airways\",\"alias\":\"\",\"iata\":\"P4\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"18178\",\"name\":\"Vision Airlines (V2)\",\"alias\":\"\",\"iata\":\"V2\",\"icao\":\"RBY\",\"callsign\":\"RUBY\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"18228\",\"name\":\"Chicago Express (C8)\",\"alias\":\"ATA Connection\",\"iata\":\"C8\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"18232\",\"name\":\"BQB Lineas Aereas\",\"alias\":\"Buquebus\",\"iata\":\"5Q\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Uruguay\",\"active\":\"Y\"},{\"id\":\"18239\",\"name\":\"Yellowtail\",\"alias\":\"\",\"iata\":\"YE\",\"icao\":\"YEL\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"18241\",\"name\":\"Royal Airways\",\"alias\":\"Royal Inc.\",\"iata\":\"KG\",\"icao\":\"RAW\",\"callsign\":\"RAW\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"18252\",\"name\":\"FlyHigh Airlines Ireland (FH)\",\"alias\":\"\",\"iata\":\"FH\",\"icao\":\"FHI\",\"callsign\":\"FLYHIRELAND\",\"country\":\"Ireland\",\"active\":\"Y\"},{\"id\":\"18477\",\"name\":\"Aero VIP (2D)\",\"alias\":\"\",\"iata\":\"2D\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Portugal\",\"active\":\"Y\"},{\"id\":\"18497\",\"name\":\"Yangon Airways Ltd.\",\"alias\":\"\",\"iata\":\"YH\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Burma\",\"active\":\"Y\"},{\"id\":\"18529\",\"name\":\"T.J. Air\",\"alias\":\"\",\"iata\":\"TJ\",\"icao\":\"TJA\",\"callsign\":\"T.J. Air\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"18543\",\"name\":\"SkyWork Airlines \",\"alias\":\"\",\"iata\":\"SX\",\"icao\":\"\\\\N\",\"callsign\":\"SKYFOX\",\"country\":\"Switzerland\",\"active\":\"Y\"},{\"id\":\"18545\",\"name\":\"ValueJet\",\"alias\":\"\",\"iata\":\"J7\",\"icao\":\"VJA\",\"callsign\":\"CRITTER\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"18553\",\"name\":\"Maastricht Airlines\",\"alias\":\"\",\"iata\":\"W2\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Netherlands\",\"active\":\"Y\"},{\"id\":\"18592\",\"name\":\"CheapFlyingInternational\",\"alias\":\"CheapFlying\",\"iata\":\"WL\",\"icao\":\"FQR\",\"callsign\":\"cheapflying\",\"country\":\"France\",\"active\":\"N\"},{\"id\":\"18616\",\"name\":\"Aviaexpresscruise\",\"alias\":\"\",\"iata\":\"E6\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Russia\",\"active\":\"N\"},{\"id\":\"18617\",\"name\":\"Euro Jet\",\"alias\":\"\",\"iata\":\"24\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"18637\",\"name\":\"AirOne Atlantic\",\"alias\":\"AirOneAtlantic\",\"iata\":\"00\",\"icao\":\"AO1\",\"callsign\":\"\",\"country\":\"Slovakia\",\"active\":\"N\"},{\"id\":\"18643\",\"name\":\"HQ- Business Express\",\"alias\":\"\",\"iata\":\"HQ\",\"icao\":\"\\\\N\",\"callsign\":\"BizEx\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"18673\",\"name\":\"Royal Southern Airlines.\",\"alias\":\"Royal Southern\",\"iata\":\"R1\",\"icao\":\"RS1\",\"callsign\":\"RSA\",\"country\":\"Colombia\",\"active\":\"N\"},{\"id\":\"18700\",\"name\":\"SOCHI AIR CHATER\",\"alias\":\"Sochi Air \",\"iata\":\"Q3\",\"icao\":\"QER\",\"callsign\":\"russian doll\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"18702\",\"name\":\"Denim Air \",\"alias\":\"FlyNonstop\",\"iata\":\"J7\",\"icao\":\"\\\\N\",\"callsign\":\"DNM\",\"country\":\"Norway\",\"active\":\"Y\"},{\"id\":\"18722\",\"name\":\"WestAir\",\"alias\":\"\",\"iata\":\"OE\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"18723\",\"name\":\"WestAir Airlines\",\"alias\":\"\",\"iata\":\"OE\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"18724\",\"name\":\"WestAir Airlines \",\"alias\":\"\",\"iata\":\"OE\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"18727\",\"name\":\"North Pacific Airlines\",\"alias\":\"\",\"iata\":\"NO\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"18732\",\"name\":\"Malindo Air\",\"alias\":\"\",\"iata\":\"OD\",\"icao\":\"MXD\",\"callsign\":\"Malindo\",\"country\":\"Malaysia\",\"active\":\"Y\"},{\"id\":\"18749\",\"name\":\"Tramm Airlines\",\"alias\":\"Tramm Airlines\",\"iata\":\"9F\",\"icao\":\"TLM\",\"callsign\":\"9F\",\"country\":\"Netherlands Antilles\",\"active\":\"N\"},{\"id\":\"18762\",\"name\":\"Lina Congo\",\"alias\":\"\",\"iata\":\"GC\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Congo (Brazzaville)\",\"active\":\"N\"},{\"id\":\"18825\",\"name\":\"Flightlink Tanzania\",\"alias\":\"Flightlink\",\"iata\":\"Z9\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Tanzania\",\"active\":\"Y\"},{\"id\":\"18828\",\"name\":\"IzAvia\",\"alias\":\"\",\"iata\":\"I8\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"18896\",\"name\":\"3 Valleys Airlines\",\"alias\":\"\",\"iata\":\"3V\",\"icao\":\"VA3\",\"callsign\":\"3 Valleys\",\"country\":\"France\",\"active\":\"N\"},{\"id\":\"18930\",\"name\":\"Maryland Air\",\"alias\":\"Maryland\",\"iata\":\"M1\",\"icao\":\"M1F\",\"callsign\":\"Maryland Flight\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"18944\",\"name\":\"Insel Air (7I/INC) (Priv)\",\"alias\":\"\",\"iata\":\"7I\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Netherlands Antilles\",\"active\":\"Y\"},{\"id\":\"18946\",\"name\":\"VivaColombia\",\"alias\":\"\",\"iata\":\"5Z\",\"icao\":\"VVC\",\"callsign\":\"\",\"country\":\"Colombia\",\"active\":\"Y\"},{\"id\":\"19016\",\"name\":\"Apache Air\",\"alias\":\"Apache\",\"iata\":\"ZM\",\"icao\":\"IWA\",\"callsign\":\"APACHE\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"19026\",\"name\":\"MHS Aviation GmbH\",\"alias\":\"\",\"iata\":\"M2\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Germany\",\"active\":\"Y\"},{\"id\":\"19030\",\"name\":\"Jettor Airlines\",\"alias\":\"Jettor\",\"iata\":\"NR\",\"icao\":\"JTO\",\"callsign\":\"JETHAPPY\",\"country\":\"Hong Kong\",\"active\":\"Y\"},{\"id\":\"19208\",\"name\":\"GoDutch\",\"alias\":\"\",\"iata\":\"GD\",\"icao\":\"GOD\",\"callsign\":\"\",\"country\":\"Netherlands\",\"active\":\"N\"},{\"id\":\"19225\",\"name\":\"Thai Lion Air\",\"alias\":\"\",\"iata\":\"SL\",\"icao\":\"TLM\",\"callsign\":\"MENTARI\",\"country\":\"Thailand\",\"active\":\"Y\"},{\"id\":\"19231\",\"name\":\"Deutsche Luftverkehrsgesellschaft\",\"alias\":\"\",\"iata\":\"DW\",\"icao\":\"DLT\",\"callsign\":\"\",\"country\":\"Germany\",\"active\":\"N\"},{\"id\":\"19287\",\"name\":\"National Air Cargo\",\"alias\":\"\",\"iata\":\"N8\",\"icao\":\"NCR\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"19290\",\"name\":\"Eastern Atlantic Virtual Airlines\",\"alias\":\"\",\"iata\":\"13\",\"icao\":\"EAV\",\"callsign\":\"EAVA\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"19305\",\"name\":\"Citilink Indonesia\",\"alias\":\"\",\"iata\":\"QG\",\"icao\":\"\\\\N\",\"callsign\":\"SUPERGREEN\",\"country\":\"Indonesia\",\"active\":\"Y\"},{\"id\":\"19317\",\"name\":\"Gulisano airways\",\"alias\":\"\",\"iata\":\"GU\",\"icao\":\"GU1\",\"callsign\":\"\",\"country\":\"Italy\",\"active\":\"N\"},{\"id\":\"19358\",\"name\":\"Caribbean Wings\",\"alias\":\"\",\"iata\":\"XP\",\"icao\":\"ZYZ\",\"callsign\":\"caribbean Wings\",\"country\":\"Turks and Caicos Islands\",\"active\":\"N\"},{\"id\":\"19361\",\"name\":\"Snowbird Airlines\",\"alias\":\"\",\"iata\":\"S8\",\"icao\":\"SBD\",\"callsign\":\"\",\"country\":\"Finland\",\"active\":\"Y\"},{\"id\":\"19367\",\"name\":\"Kharkiv Airlines\",\"alias\":\"\",\"iata\":\"KH\",\"icao\":\"KHK\",\"callsign\":\"\",\"country\":\"Ukraine\",\"active\":\"Y\"},{\"id\":\"19433\",\"name\":\"XAIR USA\",\"alias\":\"\",\"iata\":\"XA\",\"icao\":\"XAU\",\"callsign\":\"XAIR\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"19451\",\"name\":\"Air Costa\",\"alias\":\"\",\"iata\":\"LB\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"India\",\"active\":\"Y\"},{\"id\":\"19465\",\"name\":\"Global Freightways\",\"alias\":\"\",\"iata\":\"F5\",\"icao\":\"GF5\",\"callsign\":\"Freight\",\"country\":\"United States\",\"active\":\"N\"},{\"id\":\"19473\",\"name\":\"XPTO\",\"alias\":\"XPTO  \",\"iata\":\"XP\",\"icao\":\"XPT\",\"callsign\":\"XPTO\",\"country\":\"Portugal\",\"active\":\"Y\"},{\"id\":\"19541\",\"name\":\"Malawian Airlines\",\"alias\":\"\",\"iata\":\"3W\",\"icao\":\"\\\\N\",\"callsign\":\"\",\"country\":\"Malawi\",\"active\":\"Y\"},{\"id\":\"19567\",\"name\":\"Avilu\",\"alias\":\"Avilu' SA\",\"iata\":\"..\",\"icao\":\"...\",\"callsign\":\"\",\"country\":\"Switzerland\",\"active\":\"Y\"},{\"id\":\"19674\",\"name\":\"Rainbow Air (RAI)\",\"alias\":\"Rainbow Air (RAI)\",\"iata\":\"RN\",\"icao\":\"RAB\",\"callsign\":\"Rainbow\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"19675\",\"name\":\"Rainbow Air Canada\",\"alias\":\"Rainbow Air CAN\",\"iata\":\"RY\",\"icao\":\"RAY\",\"callsign\":\"Rainbow CAN\",\"country\":\"Canada\",\"active\":\"Y\"},{\"id\":\"19676\",\"name\":\"Rainbow Air Polynesia\",\"alias\":\"Rainbow Air POL\",\"iata\":\"RX\",\"icao\":\"RPO\",\"callsign\":\"Rainbow Air\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"19677\",\"name\":\"Rainbow Air Euro\",\"alias\":\"Rainbow Air EU\",\"iata\":\"RU\",\"icao\":\"RUE\",\"callsign\":\"Rainbow Air\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"19678\",\"name\":\"Rainbow Air US\",\"alias\":\"Rainbow Air US\",\"iata\":\"RM\",\"icao\":\"RNY\",\"callsign\":\"Rainbow Air\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"19751\",\"name\":\"Dobrolet\",\"alias\":\"Добролёт\",\"iata\":\"QD\",\"icao\":\"DOB\",\"callsign\":\"DOBROLET\",\"country\":\"Russia\",\"active\":\"Y\"},{\"id\":\"19774\",\"name\":\"Spike Airlines\",\"alias\":\"Aero Spike\",\"iata\":\"S0\",\"icao\":\"SAL\",\"callsign\":\"Spike Air\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"19803\",\"name\":\"All Argentina\",\"alias\":\"All Argentina\",\"iata\":\"L1\",\"icao\":\"AL1\",\"callsign\":\"\",\"country\":\"Argentina\",\"active\":\"Y\"},{\"id\":\"19804\",\"name\":\"All America\",\"alias\":\"All America\",\"iata\":\"A2\",\"icao\":\"AL2\",\"callsign\":\"\",\"country\":\"United States\",\"active\":\"Y\"},{\"id\":\"19805\",\"name\":\"All Asia\",\"alias\":\"All Asia\",\"iata\":\"L9\",\"icao\":\"AL3\",\"callsign\":\"\",\"country\":\"China\",\"active\":\"Y\"},{\"id\":\"19806\",\"name\":\"All Africa\",\"alias\":\"All Africa\",\"iata\":\"9A\",\"icao\":\"99F\",\"callsign\":\"\",\"country\":\"South Africa\",\"active\":\"Y\"},{\"id\":\"19807\",\"name\":\"Regionalia México\",\"alias\":\"Regionalia México\",\"iata\":\"N4\",\"icao\":\"J88\",\"callsign\":\"\",\"country\":\"Mexico\",\"active\":\"Y\"},{\"id\":\"19808\",\"name\":\"All Europe\",\"alias\":\"All Europe\",\"iata\":\"N9\",\"icao\":\"N99\",\"callsign\":\"\",\"country\":\"United Kingdom\",\"active\":\"Y\"},{\"id\":\"19809\",\"name\":\"All Spain\",\"alias\":\"All Spain\",\"iata\":\"N7\",\"icao\":\"N77\",\"callsign\":\"\",\"country\":\"Spain\",\"active\":\"Y\"},{\"id\":\"19810\",\"name\":\"Regional Air Iceland\",\"alias\":\"Regional Air Iceland\",\"iata\":\"9N\",\"icao\":\"N78\",\"callsign\":\"\",\"country\":\"Iceland\",\"active\":\"Y\"},{\"id\":\"19811\",\"name\":\"British Air Ferries\",\"alias\":\"\",\"iata\":\"??\",\"icao\":\"??!\",\"callsign\":\"\",\"country\":\"United Kingdom\",\"active\":\"N\"},{\"id\":\"19812\",\"name\":\"Voestar\",\"alias\":\"Voestar Brasil\",\"iata\":\"8K\",\"icao\":\"K88\",\"callsign\":\"\",\"country\":\"Brazil\",\"active\":\"Y\"},{\"id\":\"19813\",\"name\":\"All Colombia\",\"alias\":\"All Colombia\",\"iata\":\"7O\",\"icao\":\"7KK\",\"callsign\":\"\",\"country\":\"Colombia\",\"active\":\"Y\"},{\"id\":\"19814\",\"name\":\"Regionalia Uruguay\",\"alias\":\"Regionalia Uruguay\",\"iata\":\"2X\",\"icao\":\"2K2\",\"callsign\":\"\",\"country\":\"Uruguay\",\"active\":\"Y\"},{\"id\":\"19815\",\"name\":\"Regionalia Venezuela\",\"alias\":\"Regionalia Venezuela\",\"iata\":\"9X\",\"icao\":\"9XX\",\"callsign\":\"\",\"country\":\"Venezuela\",\"active\":\"Y\"},{\"id\":\"19827\",\"name\":\"Regionalia Chile\",\"alias\":\"Regionalia Chile\",\"iata\":\"9J\",\"icao\":\"CR1\",\"callsign\":\"\",\"country\":\"Chile\",\"active\":\"Y\"},{\"id\":\"19828\",\"name\":\"Vuela Cuba\",\"alias\":\"Vuela Cuba\",\"iata\":\"6C\",\"icao\":\"6CC\",\"callsign\":\"\",\"country\":\"Cuba\",\"active\":\"Y\"},{\"id\":\"19830\",\"name\":\"All Australia\",\"alias\":\"All Australia\",\"iata\":\"88\",\"icao\":\"8K8\",\"callsign\":\"\",\"country\":\"Australia\",\"active\":\"Y\"},{\"id\":\"19831\",\"name\":\"Fly Europa\",\"alias\":\"\",\"iata\":\"ER\",\"icao\":\"RWW\",\"callsign\":\"\",\"country\":\"Spain\",\"active\":\"Y\"},{\"id\":\"19834\",\"name\":\"FlyPortugal\",\"alias\":\"\",\"iata\":\"PO\",\"icao\":\"FPT\",\"callsign\":\"FlyPortugal\",\"country\":\"Portugal\",\"active\":\"Y\"},{\"id\":\"19846\",\"name\":\"Myanmar Airways International\",\"alias\":\"\",\"iata\":\"8M\",\"icao\":\"MMA\",\"callsign\":\"MYANMAR\",\"country\":\"Myanmar\",\"active\":\"Y\"},{\"id\":\"19847\",\"name\":\"Vistera\",\"alias\":\"\",\"iata\":\"UK\",\"icao\":\"VTI\",\"callsign\":\"VISTARA\",\"country\":\"India\",\"active\":\"Y\"},{\"id\":\"19848\",\"name\":\"Urumqi Air\",\"alias\":\"\",\"iata\":\"UQ\",\"icao\":\"CUH\",\"callsign\":\"LOU LAN\",\"country\":\"China\",\"active\":\"Y\"},{\"id\":\"19849\",\"name\":\"Guangxi Beibu Gulf Airlines\",\"alias\":\"\",\"iata\":\"UQ\",\"icao\":\"CBG\",\"callsign\":\"GREEN CITY\",\"country\":\"China\",\"active\":\"Y\"},{\"id\":\"19850\",\"name\":\"My Indo Airlines\",\"alias\":\"\",\"iata\":\"2Y\",\"icao\":\"MYU\",\"callsign\":\"MYINDO\",\"country\":\"Indonesia\",\"active\":\"Y\"},{\"id\":\"19852\",\"name\":\"Hong Kong Air Cargo\",\"alias\":\"\",\"iata\":\"RH\",\"icao\":\"HKC\",\"callsign\":\"MASCOT\",\"country\":\"Hong Kong\",\"active\":\"Y\"},{\"id\":\"19853\",\"name\":\"US-Bangla Airlines\",\"alias\":\"\",\"iata\":\"BS\",\"icao\":\"UBG\",\"callsign\":\"BANGLA STAR\",\"country\":\"Bangladesh\",\"active\":\"Y\"},{\"id\":\"19854\",\"name\":\"NetJets Europe\",\"alias\":\"\",\"iata\":\"1I\",\"icao\":\"NJE\",\"callsign\":\"FRACTION\",\"country\":\"Portugal\",\"active\":\"Y\"},{\"id\":\"19855\",\"name\":\"Bhutan Airlines\",\"alias\":\"\",\"iata\":\"B3\",\"icao\":\"BTN\",\"callsign\":\"BHUTAN AIR\",\"country\":\"Bhutan\",\"active\":\"Y\"},{\"id\":\"19856\",\"name\":\"Iran Airtour\",\"alias\":\"\",\"iata\":\"B9\",\"icao\":\"IRB\",\"callsign\":\"IRAN AIRTOUR\",\"country\":\"Bhutan\",\"active\":\"Y\"},{\"id\":\"19858\",\"name\":\"Indonesia AirAsia X\",\"alias\":\"\",\"iata\":\"XT\",\"icao\":\"IDX\",\"callsign\":\"RED PHOENIX\",\"country\":\"Indonesia\",\"active\":\"Y\"},{\"id\":\"19859\",\"name\":\"Qatar Executive\",\"alias\":\"\",\"iata\":\"QE\",\"icao\":\"QQE\",\"callsign\":\"QREX\",\"country\":\"Qatar\",\"active\":\"Y\"},{\"id\":\"19860\",\"name\":\"SF Airlines\",\"alias\":\"\",\"iata\":\"O3\",\"icao\":\"CSS\",\"callsign\":\"SHUN FENG\",\"country\":\"China\",\"active\":\"Y\"},{\"id\":\"19861\",\"name\":\"Regent Airways\",\"alias\":\"\",\"iata\":\"RX\",\"icao\":\"RGE\",\"callsign\":\"REGENT\",\"country\":\"Bangladesh\",\"active\":\"Y\"},{\"id\":\"19862\",\"name\":\"AsiaCargo Express\",\"alias\":\"\",\"iata\":\"3G\",\"icao\":\"CXM\",\"callsign\":\"ASIA CARGO\",\"country\":\"Malaysia\",\"active\":\"Y\"}]");

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userCountry": () => /* binding */ userCountry,
/* harmony export */   "UserlocationClass": () => /* binding */ UserlocationClass
/* harmony export */ });
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
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromAirport": () => /* binding */ fromAirport,
/* harmony export */   "toAirport": () => /* binding */ toAirport,
/* harmony export */   "FlightSearchView": () => /* binding */ FlightSearchView
/* harmony export */ });
/* harmony import */ var _apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _apis_airportsName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
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
                        if (elem === document.querySelector('.airportSearchFrom')) {
                            fromAirport = _apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i];
                        } else {
                            toAirport = _apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i];
                        }
                        // eslint-disable-next-line no-param-reassign
                        elem.innerHTML = '';
                        // eslint-disable-next-line no-param-reassign
                        elem.previousElementSibling.value = `${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i].PlaceName} (${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i].PlaceId})`;
                        const airportNameClass = new _apis_airportsName__WEBPACK_IMPORTED_MODULE_1__.AirportNameClass();
                        airportNameClass.getName(elem, _apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i].PlaceId);
                    });
                    li.innerHTML += `<div class="listBlock"><div><img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/airplane.png?alt=media&token=f7c0d4d6-b7a0-4eb8-b43c-b91637db98c9"></div><div><p class="listPlaceName">${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i].PlaceName} (${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i].PlaceId})</p><p class="listCountryName">${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i].CountryName}</p><div></div>`;
                    elem.appendChild(li);
                } else {
                    const li = document.createElement('li');
                    li.classList.add('placeList');
                    // eslint-disable-next-line no-loop-func
                    li.addEventListener('click', () => {
                        if (elem === document.querySelector('.airportSearchFrom')) {
                            fromAirport = _apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i];
                        } else {
                            toAirport = _apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i];
                        }
                        // eslint-disable-next-line no-param-reassign
                        elem.innerHTML = '';
                        // eslint-disable-next-line no-param-reassign
                        elem.previousElementSibling.value = `${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i].PlaceName} (${_apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i].PlaceId})`;
                        const airportNameClass = new _apis_airportsName__WEBPACK_IMPORTED_MODULE_1__.AirportNameClass();
                        airportNameClass.getName(elem, _apis_flightSEarch__WEBPACK_IMPORTED_MODULE_0__.searchAirportList[i].PlaceId);
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
        let dd = someDate.getDate();
        if (dd < 10) {
            dd = `0${dd}`;
        }
        elem.setAttribute('min', `${someDate.getFullYear()}-${mm}-${dd}`);
        someDate.setDate(someDate.getDate() + num);
        let mm2 = someDate.getMonth() + 1;
        if (mm2 < 10) {
            mm2 = `0${mm2}`;
        }
        let dd2 = someDate.getDate();
        if (dd2 < 10) {
            dd2 = `0${dd2}`;
        }
        // eslint-disable-next-line no-param-reassign
        elem.value = `${someDate.getFullYear()}-${mm2}-${dd2}`;
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
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userChooseCountry": () => /* binding */ userChooseCountry,
/* harmony export */   "HeaderView": () => /* binding */ HeaderView
/* harmony export */ });
/* harmony import */ var _apis_userLocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _apis_country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
;


let userChooseCountry;
const HeaderView = class {
    headerInit() {
        if (_apis_country__WEBPACK_IMPORTED_MODULE_1__.country) {
            _apis_country__WEBPACK_IMPORTED_MODULE_1__.country.forEach((element) => {
                if (element.name === _apis_userLocation__WEBPACK_IMPORTED_MODULE_0__.userCountry.country) {
                    userChooseCountry = element;
                }
            });
            for (let i = 0; i < _apis_country__WEBPACK_IMPORTED_MODULE_1__.country.length; i += 1) {
                document.getElementById('selectCountry').innerHTML += `<option value="${_apis_country__WEBPACK_IMPORTED_MODULE_1__.country[i].name}">${_apis_country__WEBPACK_IMPORTED_MODULE_1__.country[i].name}</option>`;
                document.getElementById('selectCurrency').innerHTML += `<option value="${_apis_country__WEBPACK_IMPORTED_MODULE_1__.country[i].currencies[0].code}">${_apis_country__WEBPACK_IMPORTED_MODULE_1__.country[i].currencies[0].code} - ${_apis_country__WEBPACK_IMPORTED_MODULE_1__.country[i].currencies[0].symbol}</option>`;
            }
            const options = Array.from(document.getElementById('selectCountry').options);
            options.forEach((option, i) => {
                if (option.value === userChooseCountry.name) document.getElementById('selectCountry').selectedIndex = i;
            });
            const optionsCurrency = Array.from(document.getElementById('selectCurrency').options);
            optionsCurrency.forEach((option, i) => {
                if (option.value === userChooseCountry.currencies[0].code) document.getElementById('selectCurrency').selectedIndex = i;
            });
            this.modalHeader();
        } else {
            setTimeout(() => {
                const countryClass = new _apis_country__WEBPACK_IMPORTED_MODULE_1__.CountryClass();
                countryClass.getCountries();
                this.headerInit();
            }, 500);
        }
    }

    modalHeader() {
        document.querySelector('.countryHeaderModalBtn').innerHTML = '';
        document.querySelector('.currencyHeaderModalBtn').innerHTML = '';
        _apis_country__WEBPACK_IMPORTED_MODULE_1__.country.forEach((element) => {
            if (element.name === document.getElementById('selectCountry').value) {
                document.querySelector('.countryHeaderModalBtn').innerHTML = `<img src="${element.flag} "><span class="countryName">${element.name} </span>`;
            }
        });
        _apis_country__WEBPACK_IMPORTED_MODULE_1__.country.forEach((item) => {
            if (item.currencies[0].code === document.getElementById('selectCurrency').value) {
                document.querySelector('.currencyHeaderModalBtn').innerHTML = ` <span class=" currencyView">${item.currencies[0].symbol} ${item.currencies[0].code}</span>`;
            }
        });
    }

    onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
};


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "country": () => /* binding */ country,
/* harmony export */   "CountryClass": () => /* binding */ CountryClass
/* harmony export */ });
let country;

const CountryClass = class {
    async getCountries() {
        try {
            this.res = await fetch('https://restcountries.eu/rest/v2/all');
            this.data = await this.res.json();
            if (this.data) {
                country = this.data;
            } else {
                throw Error(this.data.Message);
            }
        } catch (error) {
            console.log(error);
        }
    }
};


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_headerView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
;

const headerView = new _view_headerView__WEBPACK_IMPORTED_MODULE_0__.HeaderView();
document.querySelector('.saveheaderChange').addEventListener('click', () => {
    headerView.modalHeader();
});

document.querySelector('.logoImg').addEventListener('click', () => {
    window.location.reload();
});


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bookinPage_view_bookingPageView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _model_flightresultModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
;


document.querySelector('.bookBtn').addEventListener('click', () => {
    document.querySelector('.bookingWrapper').style.display = 'none';
    document.querySelector('.wrapperSearch').style.display = 'none';
    document.querySelector('.bookingDetailsWrapper').style.display = 'block';
    const booking = new _bookinPage_view_bookingPageView__WEBPACK_IMPORTED_MODULE_0__.BookingView();
    booking.paintBookingResult(_model_flightresultModel__WEBPACK_IMPORTED_MODULE_1__.chooseTicket);
});


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingView": () => /* binding */ BookingView
/* harmony export */ });
/* harmony import */ var _flightResult_model_flightresultModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
;

const flightres = new _flightResult_model_flightresultModel__WEBPACK_IMPORTED_MODULE_0__.FlightResultModel();

const BookingView = class {
    paintBookingResult(result) {
        document.querySelector('.routeDetails').innerHTML = '';
        if (document.getElementById('round').checked) {
            const dateDepTo = new Date(result.route[0].local_departure);
            const dateDTo = dateDepTo.toDateString();
            const timeDepTo = dateDepTo.toTimeString();
            const dateDepArr = new Date(result.route[0].local_arrival);
            const timeDepArr = dateDepArr.toTimeString();
            const dateDepFrom = new Date(result.route[1].local_departure);
            const dateDFrom = dateDepFrom.toDateString();
            const timeDepFrom = dateDepFrom.toTimeString();
            const dateFromArr = new Date(result.route[1].local_arrival);
            const timeFromArr = dateFromArr.toTimeString();
            document.querySelector('.routeDetails').innerHTML = `${result.cityFrom} → ${result.cityTo} and back`;
            document.querySelector('.ticketDetails').innerHTML = '';
            document.querySelector('.ticketDetails').innerHTML = `
                <p class="ticketSummary">Trip summary</p>
                <div class="row">
                    <div class=" col-sm-6 ticketTo ticketsBlocks">
                        <p class="departTime"><span>DEPARTURE</span> Duration: ${flightres.secondsInHours(result.duration.departure)}</p>
                        <div class="col-sm-12 detailsBlock">
                            <div class="details">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/calendar.png?alt=media&token=a6eb755d-4827-4444-a2d7-4c079af0275c">
                                <span>${dateDTo.slice(0, 3)}, ${dateDTo.slice(8, 10)} ${dateDTo.slice(4, 7)}</span>
                            </div>
                            <div>
                                <p class="economy">Economy</p>
                            </div>
                        </div>
                        <div class="col-sm-12 txtBlock">
                            <div class="col-sm-8">
                                <p>${timeDepTo.slice(0, 2)}:${timeDepTo.slice(3, 5)} <span>${result.cityFrom} ${result.cityCodeFrom}</span></p>
                                <p>${timeDepArr.slice(0, 2)}:${timeDepArr.slice(3, 5)} <span>${result.cityTo} ${result.cityCodeTo}</span></p>
                            </div>
                            <div class="col-sm-4">
                                <img src="https://images.kiwi.com/airlines/64/${result.route[0].airline}.png">
                            </div>
                        </div>
                        <div>
                            <div class="flightnumber">
                                <img src="https://images.kiwi.com/airlines/64/${result.route[0].airline}.png">
                                <span>Aerline: ${flightres.jsonSearch(result.route[0].airline)}</span>
                            </div>
                            <div class="flightnumber">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-info-48.png?alt=media&token=f4b644a0-117b-4c53-90d7-396d5fe74969">
                                <span>Flight no: ${result.route[0].airline}${result.route[0].flight_no}</span>
                            </div>
                        </div>
                    </div>
                    <div class=" col-sm-6 ticketsBloks">
                        <p class="departTime"><span>RETURN</span> Duration: ${flightres.secondsInHours(result.duration.return)}</p>
                        <div class="col-sm-12 detailsBlock">
                            <div class="details">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/calendar.png?alt=media&token=a6eb755d-4827-4444-a2d7-4c079af0275c">
                                <span>${dateDFrom.slice(0, 3)}, ${dateDFrom.slice(8, 10)} ${dateDFrom.slice(4, 7)}</span>
                            </div>
                            <div>
                                <p class="economy">Economy</p>
                            </div>
                        </div>
                        <div class="col-sm-12 txtBlock">
                            <div class="col-sm-8">
                                <p>${timeDepFrom.slice(0, 2)}:${timeDepFrom.slice(3, 5)} <span>${result.cityTo} ${result.cityCodeTo}</span></p>
                                <p>${timeFromArr.slice(0, 2)}:${timeFromArr.slice(3, 5)} <span>${result.cityFrom} ${result.cityCodeFrom}</span></p>
                            </div>
                            <div class="col-sm-4">
                                <img src="https://images.kiwi.com/airlines/64/${result.route[1].airline}.png">
                            </div>
                        </div>
                        <div>
                            <div class="flightnumber">
                                <img src="https://images.kiwi.com/airlines/64/${result.route[1].airline}.png">
                                <span>Aerline: ${flightres.jsonSearch(result.route[1].airline)}</span>
                            </div>
                            <div class="flightnumber">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-info-48.png?alt=media&token=f4b644a0-117b-4c53-90d7-396d5fe74969">
                                <span>Flight no: ${result.route[1].airline}${result.route[1].flight_no}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            const dateDepTo = new Date(result.route[0].local_departure);
            const dateDTo = dateDepTo.toDateString();
            const timeDepTo = dateDepTo.toTimeString();
            const dateDepArr = new Date(result.route[0].local_arrival);
            const timeDepArr = dateDepArr.toTimeString();
            document.querySelector('.routeDetails').innerHTML = `${result.cityFrom} → ${result.cityTo}`;
            document.querySelector('.ticketDetails').innerHTML = '';
            document.querySelector('.ticketDetails').innerHTML = `
                <p class="ticketSummary">Trip summary</p>
                <div class="row">
                    <div class=" col-sm-6 ticketTo">
                        <p class="departTime"><span>DEPARTURE</span> Duration: ${flightres.secondsInHours(result.duration.departure)}</p>
                        <div class="col-sm-12 detailsBlock">
                            <div class="details">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/calendar.png?alt=media&token=a6eb755d-4827-4444-a2d7-4c079af0275c">
                                <span>${dateDTo.slice(0, 3)}, ${dateDTo.slice(8, 10)} ${dateDTo.slice(4, 7)}</span>
                            </div>
                            <div>
                                <p class="economy">Economy</p>
                            </div>
                        </div>
                        <div class="col-sm-12 txtBlock">
                            <div class="col-sm-8">
                                <p>${timeDepTo.slice(0, 2)}:${timeDepTo.slice(3, 5)} <span>${result.cityFrom} ${result.cityCodeFrom}</span></p>
                                <p>${timeDepArr.slice(0, 2)}:${timeDepArr.slice(3, 5)} <span>${result.cityTo} ${result.cityCodeTo}</span></p>
                            </div>
                            <div class="col-sm-4">
                                <img src="https://images.kiwi.com/airlines/64/${result.route[0].airline}.png">
                            </div>
                        </div>
                        <div>
                            <div class="flightnumber">
                                <img src="https://images.kiwi.com/airlines/64/${result.route[0].airline}.png">
                                <span>Aerline: ${flightres.jsonSearch(result.route[0].airline)}</span>
                            </div>
                            <div class="flightnumber">
                                <img src="https://firebasestorage.googleapis.com/v0/b/skyscanner-556f7.appspot.com/o/icons8-info-48.png?alt=media&token=f4b644a0-117b-4c53-90d7-396d5fe74969">
                                <span>Flight no: ${result.route[0].airline}${result.route[0].flight_no}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
        document.querySelector('.allPrice').innerHTML = '';
        document.querySelector('.allPrice').innerHTML = `
            <div class="priceContainer">
                <div>
                    <span>${parseInt(document.getElementById('adultsCount').value) + parseInt(document.getElementById('childCount').value)} x passanger</span>
                    <span>${result.price}${document.getElementById('selectCurrency').value}</span>
                </div>
                <hr>
                <div>
                    <span>Total (${document.getElementById('selectCurrency').value})</span>
                    <span style="font-weight:700;">${(parseInt(document.getElementById('adultsCount').value) + parseInt(document.getElementById('childCount').value)) * result.price} ${document.getElementById('selectCurrency').value}</span>
                </div>
            </div>`;
    }
};


/***/ }),
/* 21 */
/***/ (() => {

document.querySelector('.btnConfirm').addEventListener('click', () => {
    alert('Sorry, now we are unable to book your ticket :(');
    setTimeout(() => {
        document.querySelector('.wrapperSearch').classList.remove('bookingMood');
        document.querySelector('.wrapperSearch').style.display = 'block';
        document.querySelector('.bookingDetailsWrapper').style.display = 'none';
    }, 1500);
});


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