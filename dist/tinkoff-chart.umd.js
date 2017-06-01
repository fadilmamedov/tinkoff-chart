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

        _this.state = {
            focusedValue: null,
            points: []
        };

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
            var _this3 = this;

            var xScale = this.scale.linear().domain(0, this.getDaysInYear(this.props.stock.year)).range(this.view.padding + this.view.yScaleWidth + 40, this.props.width - this.view.padding),
                yScale = this.scale.linear().domain(0, 100).range(this.props.height - this.view.xScaleHeight - this.view.padding, this.view.padding + 10);

            this.priceLabelCoords = this.props.stock.prices.map(function (price) {
                return {
                    id: price.id,
                    value: price,
                    x: xScale(_this3.getNumberOfDay(price.date)),
                    y: yScale(price.value)
                };
            });

            var points = this.props.stock.prices.map(function (price) {
                return xScale(_this3.getNumberOfDay(price.date)) + "," + yScale(price.value);
            });

            debugger;
            var i = 0;
            setTimeout(function () {
                debugger;
                // debugger;
                // this.setState((prevState) => {
                //     points: prevState.points.push(points[i++]);
                // })
                _this3.setState({
                    points: points
                });
            }, 1000);

            // return (
            //     <polyline points={points.join(" ")} className="tinkoff-chart-curve" strokeLinejoin="round"></polyline>
            // );
        }
    }, {
        key: "getChartNewTest",
        value: function getChartNewTest() {
            return _react2.default.createElement("polyline", { points: this.state.points.join(" "), className: "tinkoff-chart-curve", strokeLinejoin: "round" });
        }
    }, {
        key: "getDaysInYear",
        value: function getDaysInYear(year) {
            return this.isLeapYear(year) ? 366 : 365;
        }
    }, {
        key: "isLeapYear",
        value: function isLeapYear(year) {
            return year % 400 === 0 || year % 100 !== 0 && year % 4 === 0;
        }
    }, {
        key: "getNumberOfDay",
        value: function getNumberOfDay(date) {
            var yearStart = new Date(this.props.stock.year, 0, 1),
                dateDiff = date - yearStart;

            var oneDay = 1000 * 60 * 60 * 24;

            return Math.floor(dateDiff / oneDay);
        }
    }, {
        key: "getYearLabel",
        value: function getYearLabel() {
            return _react2.default.createElement(
                "text",
                { x: this.view.padding + this.view.yScaleWidth + 40, y: this.props.height - this.view.padding + 10, className: "tinkoff-chart-label tinkoff-chart-year" },
                this.props.stock.year
            );
        }
    }, {
        key: "getFocusElement",
        value: function getFocusElement() {
            if (!this.state.focusedValue) {
                return;
            }

            var x = this.state.focusedValue.x,
                y = this.state.focusedValue.y;

            return _react2.default.createElement(
                "g",
                null,
                _react2.default.createElement("line", { x1: x, y1: y, x2: x, y2: this.props.height - this.view.padding - this.view.xScaleHeight, className: "tinkoff-chart-focus-line", strokeDasharray: "6,8" }),
                _react2.default.createElement("circle", { cx: x, cy: y, r: "6", className: "tinkoff-chart-focus-dot" })
            );
        }
    }, {
        key: "handleMouseMove",
        value: function handleMouseMove(event) {
            var chartBounds = this.refs.fadilSvg.getBoundingClientRect(),
                cursorXPosition = event.pageX - chartBounds.left + window.scrollX;

            var deltas = this.priceLabelCoords.map(function (priceLabel) {
                return Math.abs(cursorXPosition - priceLabel.x);
            });

            var f = Math.min.apply(null, deltas);
            var index = deltas.indexOf(f);

            this.setState({
                focusedValue: this.priceLabelCoords[index]
            });
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (!this.state.focusedValue) {
                return true;
            }

            if (this.state.focusedValue.id === nextState.focusedValue.id) {
                return false;
            }

            return true;
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this4 = this;

            var xScale = this.scale.linear().domain(0, this.getDaysInYear(this.props.stock.year)).range(this.view.padding + this.view.yScaleWidth + 40, this.props.width - this.view.padding),
                yScale = this.scale.linear().domain(0, 100).range(this.props.height - this.view.xScaleHeight - this.view.padding, this.view.padding + 10);

            this.priceLabelCoords = this.props.stock.prices.map(function (price) {
                return {
                    id: price.id,
                    value: price,
                    x: xScale(_this4.getNumberOfDay(price.date)),
                    y: yScale(price.value)
                };
            });

            var points = this.props.stock.prices.map(function (price) {
                return xScale(_this4.getNumberOfDay(price.date)) + "," + yScale(price.value);
            });

            var i = 0;
            setInterval(function () {
                _this4.setState(function (prevState) {
                    points: prevState.points.push(points[i++]);
                });
            }, 1000 / points.length);
        }
    }, {
        key: "render",
        value: function render() {
            console.log("render");
            var yScale = this.getYScale(),
                xScale = this.getXScale(),
                chart = this.getChartNewTest(),
                focusElement = this.getFocusElement(),
                yearLabel = this.getYearLabel();

            return _react2.default.createElement(
                "div",
                { className: "tinkoff-chart" },
                _react2.default.createElement(
                    "svg",
                    { width: this.props.width, height: this.props.height, onMouseMove: this.handleMouseMove.bind(this), ref: "fadilSvg" },
                    yScale,
                    xScale,
                    yearLabel,
                    chart,
                    focusElement,
                    _react2.default.createElement("image", { xlinkHref: "logo.png", x: "100", y: "50", width: "200px", className: "logo" })
                )
            );
        }

        //     debounce: function(func, wait, immediate) {
        //     var timeout;
        //
        //     return function() {
        //         var context = this,
        //             args = arguments;
        //
        //         var later = function() {
        //             timeout = null;
        //
        //             if (!immediate) func.apply(context, args);
        //         };
        //
        //         var callNow = immediate && !timeout;
        //
        //         clearTimeout(timeout);
        //         timeout = setTimeout(later, wait);
        //
        //         if (callNow) func.apply(context, args);
        //     };
        // },

    }]);

    return TinkoffChart;
}(_react2.default.Component);

module.exports = TinkoffChart;

/***/ })
/******/ ]);
});
//# sourceMappingURL=tinkoff-chart.umd.js.map