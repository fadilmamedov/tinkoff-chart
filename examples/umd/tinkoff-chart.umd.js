(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["TinkoffChart"] = factory(require("react"));
	else
		root["TinkoffChart"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TinkoffChart = function (_React$Component) {
    _inherits(TinkoffChart, _React$Component);

    function TinkoffChart(props) {
        _classCallCheck(this, TinkoffChart);

        var _this = _possibleConstructorReturn(this, (TinkoffChart.__proto__ || Object.getPrototypeOf(TinkoffChart)).call(this, props));

        _this.view = {
            padding: 20,
            yScaleWidth: 30,
            xScaleHeight: 60
        };

        _this.scale = {
            linear: function linear() {
                return {
                    domain: _this.domain,
                    range: _this.range
                };
            }
        };
        return _this;
    }

    _createClass(TinkoffChart, [{
        key: "domain",
        value: function domain(start, end) {
            this._domain = {
                start: start,
                end: end
            };

            return this;
        }
    }, {
        key: "range",
        value: function range(start, end) {
            var _this2 = this;

            this._range = {
                start: start,
                end: end
            };

            return function (value) {
                var result = (_this2._range.end - _this2._range.start) / (_this2._domain.end - _this2._domain.start) * value;

                return _this2._range.start + result;
            };
        }
    }, {
        key: "getYScale",
        value: function getYScale() {
            var yScale = this.scale.linear().domain(0, 100).range(this.props.height - this.view.xScaleHeight - this.view.padding, this.view.padding + 10);

            var yScaleElements = [];
            for (var labelValue = 0; labelValue <= 100; labelValue += 20) {
                var y = yScale(labelValue);

                yScaleElements.push(_react2.default.createElement(
                    "g",
                    { key: labelValue },
                    _react2.default.createElement(
                        "text",
                        { x: this.view.padding + this.view.yScaleWidth, y: y, className: "tinkoff-chart-label", textAnchor: "end" },
                        labelValue
                    ),
                    _react2.default.createElement("line", { x1: this.view.padding + this.view.yScaleWidth + 10, x2: this.props.width - this.view.padding,
                        y1: y, y2: y, className: "tinkoff-chart-line" })
                ));
            }

            return yScaleElements;
        }
    }, {
        key: "getXScale",
        value: function getXScale() {
            var xScale = this.scale.linear().domain(0, 12).range(this.view.padding + this.view.yScaleWidth + 40, this.props.width - this.view.padding);
            var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

            var xScaleElements = [];
            for (var monthIndex = 0; monthIndex < months.length; monthIndex++) {
                var x = xScale(monthIndex);

                xScaleElements.push(_react2.default.createElement(
                    "text",
                    { key: monthIndex, x: x, y: this.props.height - this.view.padding - this.view.xScaleHeight + 30, className: "tinkoff-chart-label" },
                    months[monthIndex]
                ));
            }

            return xScaleElements;
        }
    }, {
        key: "getChart",
        value: function getChart() {
            var max = Math.max.apply(null, this.props.data.prices.map(function (p) {
                return p.value;
            }));
            var min = Math.min.apply(null, this.props.data.prices.map(function (p) {
                return p.value;
            }));

            var xScale = this.scale.linear().domain(0, this.props.data.prices.length).range(this.view.padding + this.view.yScaleWidth + 40, this.props.width - this.view.padding),
                yScale = this.scale.linear().domain(0, 100).range(this.props.height - this.view.xScaleHeight - this.view.padding, this.view.padding + 10);

            var priceValues = this.props.data.prices.map(function (price) {
                return price.value;
            });

            var priceLabelCoords = priceValues.map(function (value, index) {
                return xScale(index) + "," + yScale(value);
            });

            return _react2.default.createElement("polyline", { points: priceLabelCoords.join(" "), className: "tinkoff-chart-curve" });
        }
    }, {
        key: "getYearLabel",
        value: function getYearLabel() {
            return _react2.default.createElement(
                "text",
                { x: this.view.padding + this.view.yScaleWidth + 40, y: this.props.height - this.view.padding + 10, className: "tinkoff-chart-label tinkoff-chart-year" },
                this.props.data.year
            );
        }
    }, {
        key: "render",
        value: function render() {
            // const yScale = this.getYScale(),
            //       xScale = this.getXScale(),
            var chart = this.getChart();
            // yearLabel = this.getYearLabel();

            return _react2.default.createElement(
                "div",
                { className: "tinkoff-chart" },
                _react2.default.createElement(
                    "svg",
                    { width: this.props.width, height: this.props.height },
                    chart
                )
            );
        }
    }]);

    return TinkoffChart;
}(_react2.default.Component);

module.exports = TinkoffChart;

/***/ })
/******/ ]);
});
//# sourceMappingURL=tinkoff-chart.umd.js.map