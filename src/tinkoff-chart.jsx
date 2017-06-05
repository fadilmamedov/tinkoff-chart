import React from "react";
import "./tinkoff-chart.less";

const logo = require("./images/tinkoff-logo.png"),
      iconUp = require("./images/icon-up.svg"),
      iconDown = require("./images/icon-down.svg");


const CHART_ANIMATION_DURATION = 1000,
      MOVING_AVERAGE_INTERVAL = 5;


class LinearScale {
    static create() {
        return new LinearScale();
    }

    domain(start, end) {
        this._domain = {start, end};

        return this;
    }

    range(start, end) {
        this._range = {start, end};

        return (value) => {
            let result = (this._range.end - this._range.start) / (this._domain.end - this._domain.start) * value;

            return this._range.start + result;
        }
    }
}


class TinkoffChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            focus: null,
            points: []
        };

        this.view = {
            padding: 20,
            yAxisWidth: 30,
            xAxisHeight: 60
        };
    }

    getYAxisElement() {
        const axis = this.props.yAxis;

        const bounds = {
            axis: {
                top:    this.view.padding + 10,
                bottom: this.props.height - this.view.xAxisHeight - this.view.padding,
                right:  this.view.padding + this.view.yAxisWidth
            },

            grid: {
                left:  this.view.padding + this.view.yAxisWidth + 10,
                right: this.props.width - this.view.padding
            }
        };

        const scale = LinearScale.create().domain(axis.min, axis.max).range(bounds.axis.bottom, bounds.axis.top);

        let elements = [];
        for (let label = axis.min; label <= axis.max; label += axis.step) {
            let y = scale(label);

            elements.push(
                <g key={label}>
                    <text x={bounds.axis.right} y={y} className="tinkoff-chart-label" textAnchor="end">
                        {label}
                    </text>

                    <line x1={bounds.grid.left} x2={bounds.grid.right} y1={y} y2={y} className="tinkoff-chart-grid-line"></line>
                </g>
            );
        }

        return elements;
    }

    getXAxisElement() {
        const months = this.props.xAxis;

        const bounds = {
            left:   this.view.padding + this.view.yAxisWidth + 40,
            right:  this.props.width - this.view.padding,
            bottom: this.props.height - this.view.padding - this.view.xAxisHeight / 2
        };

        let scale = LinearScale.create().domain(0, months.length).range(bounds.left, bounds.right);

        let elements = [];
        months.forEach((month, index) => {
            let x = scale(index);

            elements.push(
                <text key={month} x={x} y={bounds.bottom} className="tinkoff-chart-label">
                    {month}
                </text>
            );
        });

        return elements;
    }

    getFocusElement() {
        if (!this.state.focus) {
            return;
        }

        const bounds = {
            left:   this.state.focus.x,
            top:    this.state.focus.y,
            bottom: this.props.height - this.view.padding - this.view.xAxisHeight,
        };

        return (
            <g>
                <line x1={bounds.left} x2={bounds.left} y1={bounds.top} y2={bounds.bottom} className="tinkoff-chart-focus-line" strokeDasharray="6,8"></line>
                <circle cx={bounds.left} cy={bounds.top} r="6" className="tinkoff-chart-focus-dot"></circle>
            </g>
        );
    }

    getFocusDetailsElement() {
        if (!this.state.focus) {
            return;
        }

        let currentPrice = this.state.focus.price.price,
            currentDate  = this.state.focus.price.date,
            previousPrice = null,
            priceDelta    = null;

        if (this.state.focus.id > 0) {
            previousPrice = this.state.points[this.state.focus.id - 1].price.price;
            priceDelta = currentPrice - previousPrice;
        }

        const priceElement = (
            <div className="price">
                ${currentPrice.toFixed(2).toString().replace(".", ",")}
            </div>
        );

        let deltaElement;
        if (previousPrice !== null) {
            deltaElement = (
                <div className="delta" style={{ color: priceDelta > 0 ? "#239e52" : "#ab3339" }}>
                    <img className="delta-icon" src={priceDelta > 0 ? iconUp : iconDown} />
                    <span className="delta-text">{Math.abs(priceDelta).toFixed(2).toString().replace(".", ",")}</span>
                </div>
            );
        }

        return (
            <div className="tinkoff-chart-details" style={this.getFocusDetailsElementStyle()}>
                <div className="date">
                    {`${currentDate.getDate()} ${this.formatMonth(currentDate)} ${currentDate.getFullYear()}`}
                </div>
                <div className="info">
                    {priceElement}
                    {priceDelta !== 0 ? deltaElement : null}
                </div>
            </div>
        );
    }

    formatMonth(date) {
        const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

        return months[date.getMonth()];
    }

    getFocusDetailsElementStyle() {
        let chartBounds = this.refs.svg.getBoundingClientRect(),
            elementBounds = {
                x: this.state.focus.x + chartBounds.left + window.scrollX,
                y: this.state.focus.y + chartBounds.top + window.scrollY,
                width: 180,
                height: 80
            };

        const style = {
            left: elementBounds.x + 10,
            top: elementBounds.y - 100,
            width: 180,
            height: 80
        };

        if (style.left + style.width > this.props.width) {
            style.left -= style.width + 20
        }

        if (style.top < 0) {
            style.top += style.height + 40;
        }

        return style;
    }

    getChartElement() {
        const points = this.state.points.map(({x, y}) => `${x},${y}`);

        return (
            <polyline points={points.join(" ")} className="tinkoff-chart-curve" strokeLinejoin="round"></polyline>
        );
    }

    getMovingAverageElement() {
        const delta = Math.floor(MOVING_AVERAGE_INTERVAL / 2);

        if (this.state.points.length < MOVING_AVERAGE_INTERVAL) {
            return;
        }

        let result = [], x, y;
        for (let i = delta; i < this.state.points.length - delta; i++) {
            x = this.state.points[i].x;
            y = this.getMovingAverageIntervalSum(i, delta) / MOVING_AVERAGE_INTERVAL;

            result.push(`${x},${y + 30}`);
        }

        return (
            <polyline points={result.join(" ")} className="tinkoff-chart-curve-ma" strokeLinejoin="round" strokeDasharray="6,8"></polyline>
        );
    }

    getMovingAverageIntervalSum(index, delta) {
        let result = 0;

        for (let i = index - delta; i <= index + delta; i++) {
            result += this.state.points[i].y;
        }

        return result;
    }

    getYearLabel() {
        const bounds = {
            left: this.view.padding + this.view.yAxisWidth + 40,
            top:  this.props.height - this.view.padding + 10
        };

        return (
            <text x={bounds.left} y={bounds.top} className="tinkoff-chart-label tinkoff-chart-year">
                {this.props.year}
            </text>
        );
    }

    getLogo() {
        return (
            <image xlinkHref={logo} x="100" y="50" width="200px" className="tinkoff-logo"></image>
        );
    }

    handleMouseMove(event) {
        if (!this.isChartBuilt) {
            return;
        }

        const chartBounds = this.refs.svg.getBoundingClientRect(),
              cursorXPosition = event.pageX - chartBounds.left + window.scrollX;

        const deltas = this.state.points.map((point) => {
            return Math.abs(cursorXPosition - point.x);
        });

        const minDelta = Math.min.apply(null, deltas);

        this.setState({
            focus: this.state.points[deltas.indexOf(minDelta)]
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.animations !== nextProps.animations) {
            return false;
        }

        if (this.props.sma !== nextProps.sma) {
            return true;
        }

        if (!this.state.focus || !nextState.focus) {
            return true;
        }

        if (this.state.focus.id === nextState.focus.id) {
            return false;
        }

        return true;
    }

    buildPriceElements(props) {
        const yearStart = new Date(props.year, 0, 1),
              yearEnd   = new Date(props.year, 11, 31);

        const bounds = {
            left:   this.view.padding + this.view.yAxisWidth + 40,
            right:  props.width - this.view.padding,
            bottom: props.height - this.view.xAxisHeight - this.view.padding,
            top:    this.view.padding + 10
        };

        const xScale = LinearScale.create().domain(yearStart, yearEnd).range(bounds.left, bounds.right),
              yScale = LinearScale.create().domain(props.yAxis.min, props.yAxis.max).range(bounds.bottom, bounds.top);

        const points = props.values.map((value, index) => {
            return {
                price: value,
                id: index,
                x: xScale(value.date - yearStart),
                y: yScale(value.price)
            };
        });

        this.isChartBuilt = false;
        if (props.animations) {
            let animationFrameIndex = 0;

            clearInterval(this.animationTimer);
            this.animationTimer = setInterval(() => {
                if (points.length === animationFrameIndex) {
                    this.isChartBuilt = true;
                    clearInterval(this.animationTimer);
                    return;
                }

                this.setState((prevState, props) => {
                    return {
                        points: [...prevState.points, points[animationFrameIndex++]]
                    };
                });
            }, CHART_ANIMATION_DURATION / points.length);
        } else {
            this.isChartBuilt = true;
            this.setState({
                points: points
            });
        }
    }

    componentWillReceiveProps(props) {
        const currentProps = {
            values: this.props.values,
            width: this.props.width,
            height: this.props.height,
            xAxis: this.props.xAxis,
            yAxis: this.props.yAxis
        };

        const newProps = {
            values: props.values,
            width: props.width,
            height: props.height,
            xAxis: props.xAxis,
            yAxis: props.yAxis
        };

        if (JSON.stringify(currentProps) === JSON.stringify(newProps)) {
            return;
        }

        this.setState({
            points: [],
            focus: null
        });

        this.buildPriceElements(props);
    }

    componentDidMount() {
        this.buildPriceElements(this.props);
    }

    componentWillUnmount() {
        clearInterval(this.animationTimer);
    }

    render() {
        const {width, height} = this.props;

        return (
            <div className="tinkoff-chart">
                <svg width={width} height={height} ref="svg" onMouseMove={this.handleMouseMove.bind(this)}>
                    {this.getYAxisElement()}
                    {this.getXAxisElement()}
                    {this.getChartElement()}
                    {this.getFocusElement()}
                    {this.getYearLabel()}
                    {this.getLogo()}

                    {this.props.sma && this.getMovingAverageElement()}
                </svg>

                {this.getFocusDetailsElement()}
            </div>
        );
    }
}

module.exports = TinkoffChart;