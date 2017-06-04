module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/index.js!./tinkoff-chart.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/index.js!./tinkoff-chart.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2FiMzMzOSIgZD0iTTk4LjkgMTg0LjdsMS44IDIuMSAxMzYgMTU2LjVjNC42IDUuMyAxMS41IDguNiAxOS4yIDguNiA3LjcgMCAxNC42LTMuNCAxOS4yLTguNkw0MTEgMTg3LjFsMi4zLTIuNmMxLjctMi41IDIuNy01LjUgMi43LTguNyAwLTguNy03LjQtMTUuOC0xNi42LTE1LjhIMTEyLjZjLTkuMiAwLTE2LjYgNy4xLTE2LjYgMTUuOCAwIDMuMyAxLjEgNi40IDIuOSA4Ljl6Ii8+PC9zdmc+"

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzIzOWU1MiIgZD0iTTQxMy4xIDMyNy4zbC0xLjgtMi4xLTEzNi0xNTYuNWMtNC42LTUuMy0xMS41LTguNi0xOS4yLTguNi03LjcgMC0xNC42IDMuNC0xOS4yIDguNkwxMDEgMzI0LjlsLTIuMyAyLjZDOTcgMzMwIDk2IDMzMyA5NiAzMzYuMmMwIDguNyA3LjQgMTUuOCAxNi42IDE1LjhoMjg2LjhjOS4yIDAgMTYuNi03LjEgMTYuNi0xNS44IDAtMy4zLTEuMS02LjQtMi45LTguOXoiLz48L3N2Zz4="

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/tinkoff-logo.png";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logo = __webpack_require__(3),
    iconUp = __webpack_require__(2),
    iconDown = __webpack_require__(1);

var CHART_ANIMATION_DURATION = 1000,
    MOVING_AVERAGE_INTERVAL = 5;

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
                    _react2.default.createElement("img", { className: "delta-icon", src: priceDelta > 0 ? iconUp : iconDown }),
                    _react2.default.createElement(
                        "span",
                        { className: "delta-text" },
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
            var points = this.state.points.map(function (_ref) {
                var x = _ref.x,
                    y = _ref.y;
                return x + "," + y;
            });

            return _react2.default.createElement("polyline", { points: points.join(" "), className: "tinkoff-chart-curve", strokeLinejoin: "round" });
        }
    }, {
        key: "getMovingAverageElement",
        value: function getMovingAverageElement() {
            var delta = Math.floor(MOVING_AVERAGE_INTERVAL / 2);

            if (this.state.points.length < MOVING_AVERAGE_INTERVAL) {
                return;
            }

            var result = [],
                x = void 0,
                y = void 0;
            for (var i = delta; i < this.state.points.length - delta; i++) {
                x = this.state.points[i].x;
                y = this.getMovingAverageIntervalSum(i, delta) / MOVING_AVERAGE_INTERVAL;

                result.push(x + "," + (y + 30));
            }

            return _react2.default.createElement("polyline", { points: result.join(" "), className: "tinkoff-chart-curve-ma", strokeLinejoin: "round", strokeDasharray: "6,8" });
        }
    }, {
        key: "getMovingAverageIntervalSum",
        value: function getMovingAverageIntervalSum(index, delta) {
            var result = 0;

            for (var i = index - delta; i <= index + delta; i++) {
                result += this.state.points[i].y;
            }

            return result;
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
            return _react2.default.createElement("image", { xlinkHref: logo, x: "100", y: "50", width: "200px", className: "tinkoff-logo" });
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

            var points = this.priceLabels.map(function (_ref2) {
                var x = _ref2.x,
                    y = _ref2.y;

                return { x: x, y: y };
            });

            var animationFrameIndex = 0;
            this.animationTimer = setInterval(function () {
                if (points.length === animationFrameIndex) {
                    _this3.isChartBuilt = true;
                    clearInterval(_this3.animationTimer);
                    return;
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
                    this.props.ma && this.getMovingAverageElement(),
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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, ".tinkoff-chart svg {\n  cursor: pointer;\n}\n.tinkoff-chart .tinkoff-logo {\n  opacity: 0.5;\n}\n.tinkoff-chart .tinkoff-chart-label {\n  fill: #b9b7b7;\n  font-family: \"Helvetica Neue\", Tahoma;\n  font-size: 16px;\n}\n.tinkoff-chart .tinkoff-chart-year {\n  font-size: 22px;\n}\n.tinkoff-chart .tinkoff-chart-grid-line {\n  stroke: #e8e6e6;\n  stroke-width: 1;\n}\n.tinkoff-chart .tinkoff-chart-curve {\n  fill: none;\n  stroke: #74a3c4;\n  stroke-width: 2;\n}\n.tinkoff-chart .tinkoff-chart-curve-ma {\n  fill: none;\n  stroke: #c43729;\n  stroke-width: 1;\n}\n.tinkoff-chart .tinkoff-chart-focus-line {\n  fill: none;\n  stroke: #ccc;\n  stroke-width: 1;\n}\n.tinkoff-chart .tinkoff-chart-focus-dot {\n  fill: #74a3c4;\n  stroke: white;\n  stroke-width: 2;\n}\n.tinkoff-chart .tinkoff-chart-details {\n  position: absolute;\n  padding: 15px;\n  border: 1px solid #eee;\n  border-radius: 5px;\n  background-color: white;\n  font-family: \"Helvetica Neue\", Tahoma;\n  box-shadow: 2px 2px 8px 0px #ccc;\n  box-sizing: border-box;\n  transition: all 0.1s;\n}\n.tinkoff-chart .tinkoff-chart-details .date {\n  color: #aaa;\n}\n.tinkoff-chart .tinkoff-chart-details .info {\n  display: table;\n  width: 100%;\n  padding-top: 5px;\n}\n.tinkoff-chart .tinkoff-chart-details .info div {\n  display: table-cell;\n  vertical-align: middle;\n}\n.tinkoff-chart .tinkoff-chart-details .info .price {\n  color: #3e4757;\n}\n.tinkoff-chart .tinkoff-chart-details .info .delta .delta-text {\n  vertical-align: middle;\n}\n.tinkoff-chart .tinkoff-chart-details .info .delta .delta-icon {\n  width: 32px;\n  height: 32px;\n  vertical-align: middle;\n}\n", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);

	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
//# sourceMappingURL=tinkoff-chart.common.js.map