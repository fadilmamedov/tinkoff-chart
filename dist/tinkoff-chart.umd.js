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

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CHART_ANIMATION_DURATION = 1000;

var LinearScale = function () {
    function LinearScale() {
        _classCallCheck(this, LinearScale);
    }

    _createClass(LinearScale, [{
        key: "domain",
        value: function domain(start, end) {
            this._domain = { start: start, end: end };

            return this;
        }
    }, {
        key: "range",
        value: function range(start, end) {
            var _this = this;

            this._range = { start: start, end: end };

            return function (value) {
                var result = (_this._range.end - _this._range.start) / (_this._domain.end - _this._domain.start) * value;

                return _this._range.start + result;
            };
        }
    }], [{
        key: "create",
        value: function create() {
            return new LinearScale();
        }
    }]);

    return LinearScale;
}();

var TinkoffChart = function (_React$Component) {
    _inherits(TinkoffChart, _React$Component);

    function TinkoffChart(props) {
        _classCallCheck(this, TinkoffChart);

        var _this2 = _possibleConstructorReturn(this, (TinkoffChart.__proto__ || Object.getPrototypeOf(TinkoffChart)).call(this, props));

        _this2.state = {
            focus: null,
            points: []
        };

        _this2.view = {
            padding: 20,
            height: props.height,
            width: props.width,

            yAxisWidth: 30,
            xAxisHeight: 60
        };
        return _this2;
    }

    _createClass(TinkoffChart, [{
        key: "getYAxisElement",
        value: function getYAxisElement() {
            var axis = this.props.yAxis;

            var bounds = {
                axis: {
                    top: this.view.padding + 10,
                    bottom: this.view.height - this.view.xAxisHeight - this.view.padding,
                    right: this.view.padding + this.view.yAxisWidth
                },

                grid: {
                    left: this.view.padding + this.view.yAxisWidth + 10,
                    right: this.view.width - this.view.padding
                }
            };

            var scale = LinearScale.create().domain(axis.min, axis.max).range(bounds.axis.bottom, bounds.axis.top);

            var elements = [];
            for (var label = axis.min; label <= axis.max; label += axis.step) {
                var y = scale(label);

                elements.push(_react2.default.createElement(
                    "g",
                    { key: label },
                    _react2.default.createElement(
                        "text",
                        { x: bounds.axis.right, y: y, className: "tinkoff-chart-label", textAnchor: "end" },
                        label
                    ),
                    _react2.default.createElement("line", { x1: bounds.grid.left, x2: bounds.grid.right, y1: y, y2: y, className: "tinkoff-chart-grid-line" })
                ));
            }

            return elements;
        }
    }, {
        key: "getXAxisElement",
        value: function getXAxisElement() {
            var months = this.props.xAxis.values;

            var bounds = {
                left: this.view.padding + this.view.yAxisWidth + 40,
                right: this.view.width - this.view.padding,
                bottom: this.view.height - this.view.padding - this.view.xAxisHeight / 2
            };

            var scale = LinearScale.create().domain(0, months.length).range(bounds.left, bounds.right);

            var elements = [];
            months.forEach(function (month, index) {
                var x = scale(index);

                elements.push(_react2.default.createElement(
                    "text",
                    { key: month, x: x, y: bounds.bottom, className: "tinkoff-chart-label" },
                    month
                ));
            });

            return elements;
        }
    }, {
        key: "getFocusElement",
        value: function getFocusElement() {
            if (!this.state.focus) {
                return;
            }

            var bounds = {
                left: this.state.focus.x,
                top: this.state.focus.y,
                bottom: this.view.height - this.view.padding - this.view.xAxisHeight
            };

            return _react2.default.createElement(
                "g",
                null,
                _react2.default.createElement("line", { x1: bounds.left, x2: bounds.left, y1: bounds.top, y2: bounds.bottom, className: "tinkoff-chart-focus-line", strokeDasharray: "6,8" }),
                _react2.default.createElement("circle", { cx: bounds.left, cy: bounds.top, r: "6", className: "tinkoff-chart-focus-dot" })
            );
        }
    }, {
        key: "getFocusDetailsElement",
        value: function getFocusDetailsElement() {
            if (!this.state.focus) {
                return;
            }

            var currentPrice = this.state.focus.price.value,
                currentDate = this.state.focus.price.date,
                previousPrice = null,
                priceDelta = null;

            if (this.state.focus.id > 0) {
                previousPrice = this.priceLabels[this.state.focus.id - 1].price.value;
                priceDelta = currentPrice - previousPrice;
            }

            var priceElement = _react2.default.createElement(
                "div",
                { className: "price" },
                "$",
                currentPrice.toFixed(2).toString().replace(".", ",")
            );

            var deltaElement = void 0;
            if (previousPrice !== null) {
                deltaElement = _react2.default.createElement(
                    "div",
                    { className: "delta", style: { color: priceDelta > 0 ? "#239e52" : "#ab3339" } },
                    _react2.default.createElement("img", { src: priceDelta > 0 ? "icon-up.svg" : "icon-down.svg" }),
                    _react2.default.createElement(
                        "span",
                        null,
                        Math.abs(priceDelta).toFixed(2).toString().replace(".", ",")
                    )
                );
            }

            return _react2.default.createElement(
                "div",
                { className: "tinkoff-chart-details", style: this.getFocusDetailsElementStyle() },
                _react2.default.createElement(
                    "div",
                    { className: "date" },
                    currentDate.getDate() + " " + this.formatMonth(currentDate) + " " + currentDate.getFullYear()
                ),
                _react2.default.createElement(
                    "div",
                    { className: "info" },
                    priceElement,
                    priceDelta !== 0 ? deltaElement : null
                )
            );
        }
    }, {
        key: "formatMonth",
        value: function formatMonth(date) {
            var months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

            return months[date.getMonth()];
        }
    }, {
        key: "getFocusDetailsElementStyle",
        value: function getFocusDetailsElementStyle() {
            var chartBounds = this.refs.svg.getBoundingClientRect(),
                elementBounds = {
                x: this.state.focus.x - chartBounds.left + window.scrollX,
                y: this.state.focus.y - chartBounds.top + window.scrollY,
                width: 180,
                height: 80
            };

            var style = {
                left: elementBounds.x + 20,
                top: elementBounds.y - 90,
                width: 180,
                height: 80
            };

            if (style.left + style.width > this.view.width) {
                style.left -= style.width + 20;
            }

            if (style.top < 0) {
                style.top += style.height + 40;
            }

            return style;
        }
    }, {
        key: "getChartElement",
        value: function getChartElement() {
            return _react2.default.createElement("polyline", { points: this.state.points.join(" "), className: "tinkoff-chart-curve", strokeLinejoin: "round" });
        }
    }, {
        key: "getYearLabel",
        value: function getYearLabel() {
            var bounds = {
                left: this.view.padding + this.view.yAxisWidth + 40,
                top: this.view.height - this.view.padding + 10
            };

            return _react2.default.createElement(
                "text",
                { x: bounds.left, y: bounds.top, className: "tinkoff-chart-label tinkoff-chart-year" },
                this.props.stock.year
            );
        }
    }, {
        key: "getLogo",
        value: function getLogo() {
            return _react2.default.createElement("image", { xlinkHref: "tinkoff-logo.png", x: "100", y: "50", width: "200px", className: "tinkoff-logo" });
        }
    }, {
        key: "handleMouseMove",
        value: function handleMouseMove(event) {
            if (!this.isChartBuilt) {
                return;
            }

            var chartBounds = this.refs.svg.getBoundingClientRect(),
                cursorXPosition = event.pageX - chartBounds.left + window.scrollX;

            var deltas = this.priceLabels.map(function (priceLabel) {
                return Math.abs(cursorXPosition - priceLabel.x);
            });

            var minDelta = Math.min.apply(null, deltas);

            this.setState({
                focus: this.priceLabels[deltas.indexOf(minDelta)]
            });
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (!this.state.focus || !nextState.focus) {
                return true;
            }

            if (this.state.focus.id === nextState.focus.id) {
                return false;
            }

            return true;
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this3 = this;

            var yearStart = new Date(this.props.stock.year, 0, 1),
                yearEnd = new Date(this.props.stock.year, 11, 31);

            var bounds = {
                left: this.view.padding + this.view.yAxisWidth + 40,
                right: this.view.width - this.view.padding,
                bottom: this.view.height - this.view.xAxisHeight - this.view.padding,
                top: this.view.padding + 10
            };

            var xScale = LinearScale.create().domain(yearStart, yearEnd).range(bounds.left, bounds.right),
                yScale = LinearScale.create().domain(this.props.yAxis.min, this.props.yAxis.max).range(bounds.bottom, bounds.top);

            this.priceLabels = this.props.stock.prices.map(function (price, index) {
                return {
                    price: price,
                    id: index,
                    x: xScale(price.date - yearStart),
                    y: yScale(price.value)
                };
            });

            var points = this.priceLabels.map(function (_ref) {
                var x = _ref.x,
                    y = _ref.y;
                return x + "," + y;
            });

            var animationFrameIndex = 0;
            this.animationTimer = setInterval(function () {
                if (points.length === animationFrameIndex) {
                    _this3.isChartBuilt = true;
                    clearInterval(_this3.animationTimer);
                }

                _this3.setState(function (prevState) {
                    points: prevState.points.push(points[animationFrameIndex++]);
                });
            }, CHART_ANIMATION_DURATION / points.length);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearInterval(this.animationTimer);
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "tinkoff-chart" },
                _react2.default.createElement(
                    "svg",
                    { width: this.view.width, height: this.view.height, ref: "svg", onMouseMove: this.handleMouseMove.bind(this) },
                    this.getYAxisElement(),
                    this.getXAxisElement(),
                    this.getChartElement(),
                    this.getFocusElement(),
                    this.getYearLabel(),
                    this.getLogo()
                ),
                this.getFocusDetailsElement()
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