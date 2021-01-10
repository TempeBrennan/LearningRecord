/******/
(function () { // webpackBootstrap
  /******/
  var __webpack_modules__ = ({

    /***/
    "./main.js":
      /*!*****************!*\
        !*** ./main.js ***!
        \*****************/
      /***/
      (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var _res_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./res/styles.css */ "./res/styles.css");
        /* harmony import */
        var _res_test_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./res/test.jpg */ "./res/test.jpg");
        /* harmony import */
        var _res_test_xml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./res/test.xml */ "./res/test.xml");
        /* harmony import */
        var _res_test_xml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_res_test_xml__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */
        var _res_test_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./res/test.json */ "./res/test.json");
        // import $ from 'jquery';

        // $.getJSON("test.json", function (json) {
        //     console.log(json);
        // });




        const img = new Image();
        img.src = _res_test_jpg__WEBPACK_IMPORTED_MODULE_1__;
        document.body.appendChild(img);




        console.log((_res_test_xml__WEBPACK_IMPORTED_MODULE_2___default()));
        console.log(_res_test_json__WEBPACK_IMPORTED_MODULE_3__);

        /***/
      }),

    /***/
    "./node_modules/css-loader/dist/cjs.js!./res/styles.css":
      /*!**************************************************************!*\
        !*** ./node_modules/css-loader/dist/cjs.js!./res/styles.css ***!
        \**************************************************************/
      /***/
      (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
        /* harmony import */
        var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */
        var _test_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./test.ttf */ "./res/test.ttf");
        // Imports




        var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
        var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_test_ttf__WEBPACK_IMPORTED_MODULE_3__);
        // Module
        ___CSS_LOADER_EXPORT___.push([module.id, "@font-face{\r\n    font-family: \"myFont\";\r\n    src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    font-weight: 12;\r\n}\r\n\r\nh1 {\r\n    font-family: 'myFont';\r\n    color:red;\r\n}", "", {
          "version": 3,
          "sources": ["webpack://./res/styles.css"],
          "names": [],
          "mappings": "AAAA;IACI,qBAAqB;IACrB,2CAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,SAAS;AACb",
          "sourcesContent": ["@font-face{\r\n    font-family: \"myFont\";\r\n    src:url('./test.ttf');\r\n    font-weight: 12;\r\n}\r\n\r\nh1 {\r\n    font-family: 'myFont';\r\n    color:red;\r\n}"],
          "sourceRoot": ""
        }]);
        // Exports
        /* harmony default export */
        __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


        /***/
      }),

    /***/
    "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
        !*** ./node_modules/css-loader/dist/runtime/api.js ***!
        \*****************************************************/
      /***/
      (function (module) {

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
              modules = [
                [null, modules, '']
              ];
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

        /***/
      }),

    /***/
    "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
      /*!************************************************************************!*\
        !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
        \************************************************************************/
      /***/
      (function (module) {

        "use strict";


        function _slicedToArray(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }

        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        function _iterableToArrayLimit(arr, i) {
          if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

        module.exports = function cssWithMappingToString(item) {
          var _item = _slicedToArray(item, 4),
            content = _item[1],
            cssMapping = _item[3];

          if (typeof btoa === 'function') {
            // eslint-disable-next-line no-undef
            var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
            var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
            var sourceMapping = "/*# ".concat(data, " */");
            var sourceURLs = cssMapping.sources.map(function (source) {
              return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
            });
            return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
          }

          return [content].join('\n');
        };

        /***/
      }),

    /***/
    "./node_modules/css-loader/dist/runtime/getUrl.js":
      /*!********************************************************!*\
        !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
        \********************************************************/
      /***/
      (function (module) {

        "use strict";


        module.exports = function (url, options) {
          if (!options) {
            // eslint-disable-next-line no-param-reassign
            options = {};
          } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


          url = url && url.__esModule ? url.default : url;

          if (typeof url !== 'string') {
            return url;
          } // If url is already wrapped in quotes, remove them


          if (/^['"].*['"]$/.test(url)) {
            // eslint-disable-next-line no-param-reassign
            url = url.slice(1, -1);
          }

          if (options.hash) {
            // eslint-disable-next-line no-param-reassign
            url += options.hash;
          } // Should url be wrapped?
          // See https://drafts.csswg.org/css-values-3/#urls


          if (/["'() \t\n]/.test(url) || options.needQuotes) {
            return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
          }

          return url;
        };

        /***/
      }),

    /***/
    "./res/styles.css":
      /*!************************!*\
        !*** ./res/styles.css ***!
        \************************/
      /***/
      (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
        /* harmony import */
        var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./res/styles.css");



        var options = {};

        options.insert = "head";
        options.singleton = false;

        var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



        /* harmony default export */
        __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

        /***/
      }),

    /***/
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
        !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
        \****************************************************************************/
      /***/
      (function (module, __unused_webpack_exports, __webpack_require__) {

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
            var nonce = true ? __webpack_require__.nc : 0;

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

        /***/
      }),

    /***/
    "./res/test.xml":
      /*!**********************!*\
        !*** ./res/test.xml ***!
        \**********************/
      /***/
      (function (module) {

        module.exports = {
          "note": {
            "to": ["Mary"],
            "from": ["John"],
            "heading": ["Reminder"],
            "body": ["Call Cindy on Tuesday"]
          }
        }

        /***/
      }),

    /***/
    "./res/test.jpg":
      /*!**********************!*\
        !*** ./res/test.jpg ***!
        \**********************/
      /***/
      (function (module, __unused_webpack_exports, __webpack_require__) {

        "use strict";
        module.exports = __webpack_require__.p + "b6969c3a0b5f269e49c8.jpg";

        /***/
      }),

    /***/
    "./res/test.json":
      /*!***********************!*\
        !*** ./res/test.json ***!
        \***********************/
      /***/
      (function (module) {

        "use strict";
        module.exports = JSON.parse("{\"name\":\"zhangsan\",\"age\":\"20\",\"address\":\"Xian\"}");

        /***/
      }),

    /***/
    "./res/test.ttf":
      /*!**********************!*\
        !*** ./res/test.ttf ***!
        \**********************/
      /***/
      (function (module, __unused_webpack_exports, __webpack_require__) {

        "use strict";
        module.exports = __webpack_require__.p + "b50947ef756f43126a52.ttf";

        /***/
      })

    /******/
  });
  /************************************************************************/
  /******/ // The module cache
  /******/
  var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/
    if (__webpack_module_cache__[moduleId]) {
      /******/
      return __webpack_module_cache__[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = __webpack_module_cache__[moduleId] = {
      /******/
      id: moduleId,
      /******/ // no module.loaded needed
      /******/
      exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/
  /* webpack/runtime/compat get default export */
  /******/
  ! function () {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
      /******/
      var getter = module && module.__esModule ?
        /******/
        function () {
          return module['default'];
        } :
        /******/
        function () {
          return module;
        };
      /******/
      __webpack_require__.d(getter, {
        a: getter
      });
      /******/
      return getter;
      /******/
    };
    /******/
  }();
  /******/
  /******/
  /* webpack/runtime/define property getters */
  /******/
  ! function () {
    /******/ // define getter functions for harmony exports
    /******/
    __webpack_require__.d = function (exports, definition) {
      /******/
      for (var key in definition) {
        /******/
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  }();
  /******/
  /******/
  /* webpack/runtime/global */
  /******/
  ! function () {
    /******/
    __webpack_require__.g = (function () {
      /******/
      if (typeof globalThis === 'object') return globalThis;
      /******/
      try {
        /******/
        return this || new Function('return this')();
        /******/
      } catch (e) {
        /******/
        if (typeof window === 'object') return window;
        /******/
      }
      /******/
    })();
    /******/
  }();
  /******/
  /******/
  /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  ! function () {
    /******/
    __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
    /******/
  }();
  /******/
  /******/
  /* webpack/runtime/make namespace object */
  /******/
  ! function () {
    /******/ // define __esModule on exports
    /******/
    __webpack_require__.r = function (exports) {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/
  }();
  /******/
  /******/
  /* webpack/runtime/publicPath */
  /******/
  ! function () {
    /******/
    var scriptUrl;
    /******/
    if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
    /******/
    var document = __webpack_require__.g.document;
    /******/
    if (!scriptUrl && document) {
      /******/
      if (document.currentScript)
        /******/
        scriptUrl = document.currentScript.src
      /******/
      if (!scriptUrl) {
        /******/
        var scripts = document.getElementsByTagName("script");
        /******/
        if (scripts.length) scriptUrl = scripts[scripts.length - 1].src
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/
    if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
    /******/
    scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
    /******/
    __webpack_require__.p = scriptUrl;
    /******/
  }();
  /******/
  /************************************************************************/
  /******/ // startup
  /******/ // Load entry module
  /******/
  __webpack_require__("./main.js");
  /******/ // This entry module used 'exports' so it can't be inlined
  /******/
})();
//# sourceMappingURL=bundle.js.map