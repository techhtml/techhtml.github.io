/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
  function View(options) {
    _classCallCheck(this, View);

    this.datas = [];
    this.container = options.container || {};
    this.template = options.template || '';
    this.events = options.events || null;
    return this;
  }

  _createClass(View, [{
    key: '_bindEvents',
    value: function _bindEvents() {
      if (!!this.events) {
        this.events.forEach(function (o) {
          document.querySelector(o.target).addEventListener(o.type, o.method);
        });
      }
      return this;
    }
  }, {
    key: 'viewWillMount',
    value: function viewWillMount() {}
  }, {
    key: 'viewDidMount',
    value: function viewDidMount() {}
  }, {
    key: 'updateView',
    value: function updateView() {
      this.container.innerHTML = this.template;
      this._bindEvents();
      return this;
    }
  }, {
    key: 'render',
    value: function render() {
      this.viewWillMount();
      this.container.innerHTML = this.template;
      this._bindEvents();
      this.viewDidMount();
      return this;
    }
  }]);

  return View;
}();

exports.default = View;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(8);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ContainerView = __webpack_require__(3);

var _ContainerView2 = _interopRequireDefault(_ContainerView);

var _AccordionView = __webpack_require__(5);

var _AccordionView2 = _interopRequireDefault(_AccordionView);

var _HeaderView = __webpack_require__(7);

var _HeaderView2 = _interopRequireDefault(_HeaderView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = {
  ContainerView: _ContainerView2.default,
  AccordionView: _AccordionView2.default,
  HeaderView: _HeaderView2.default
};

window.app = app;

app.ContainerView.render();
app.AccordionView.render();
app.HeaderView.render();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _View = __webpack_require__(0);

var _View2 = _interopRequireDefault(_View);

var _toggle = __webpack_require__(4);

var _toggle2 = _interopRequireDefault(_toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _View2.default({
  container: document.querySelector('.main-container'),
  events: [{
    type: 'click',
    target: '.main-container',
    method: function method() {
      (0, _toggle2.default)('.main-container', 'main-container-reverse');
    }
  }],
  template: '\n  <div class="main-item-row">\n    <div class="main-item">A</div>\n    <div class="main-item">B</div>\n  </div>\n  <div class="main-item-row">\n    <div class="main-item">C</div>\n    <div class="main-item">D</div>\n  </div>\n  '
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (selector, targetClass) {
  var targetNode = document.querySelector(selector);
  if (targetNode.className.match(targetClass) === null) {
    targetNode.className = targetNode.className.concat(' ' + targetClass);
  } else {
    targetNode.className = targetNode.className.replace(targetClass, '');
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _View2 = __webpack_require__(0);

var _View3 = _interopRequireDefault(_View2);

var _request = __webpack_require__(6);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AccordionView = function (_View) {
  _inherits(AccordionView, _View);

  function AccordionView(options) {
    _classCallCheck(this, AccordionView);

    return _possibleConstructorReturn(this, (AccordionView.__proto__ || Object.getPrototypeOf(AccordionView)).call(this, options));
  }

  _createClass(AccordionView, [{
    key: 'onSuccess',
    value: function onSuccess(res) {
      var index = 0;
      var items = res.items;
      for (; index < 5; index += 1) {
        var item = items[index];
        var src = item.media.m;
        var title = item.title;
        this.template += '<div class="accordion-item" style="background-image:url(' + src + ')"><span class="blind">' + title + '</span></div>';
        this.datas.push(item);
      }
      this.updateView();
    }
  }, {
    key: 'viewDidMount',
    value: function viewDidMount() {
      this.template = '';
      (0, _request2.default)("http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=", "app.AccordionView.onSuccess");
    }
  }]);

  return AccordionView;
}(_View3.default);

exports.default = new AccordionView({
  container: document.querySelector('.accordion'),
  template: '<div class="accordion-item"></div>'
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (url, callback) {
  var script = document.createElement('script');
  url += callback;
  script.src = url;
  document.body.appendChild(script);
};

;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _View = __webpack_require__(0);

var _View2 = _interopRequireDefault(_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _View2.default({
  container: document.querySelector('.header'),
  template: '\n    <h1 class="logo"><a href="#">ProjectName</a></h1>\n    <nav class="main-nav">\n      <ul class="main-nav-list">\n        <li class="main-nav-item">\n          <a href="#" class="main-nav-link">Dropdown</a>\n          <div class="sub-nav-holder">\n            <ul class="sub-nav-list">\n              <li class="sub-nav-item"><a href="#" class="sub-nav-link">Action</a></li>\n              <li class="sub-nav-item"><a href="#" class="sub-nav-link">Action</a></li>\n              <li class="sub-nav-item"><a href="#" class="sub-nav-link">Action</a></li>\n            </ul>\n            <ul class="sub-nav-list">\n              <li class="sub-nav-item"><a href="#" class="sub-nav-link">Action</a></li>\n            </ul>\n          </div>\n        </li>\n        <li class="main-nav-item"><a href="#" class="main-nav-link">Dropdown</a></li>\n      </ul>\n    </nav>\n  '
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map