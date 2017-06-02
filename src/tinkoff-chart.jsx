import React from "react";


const CHART_ANIMATION_DURATION = 1000;


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
            height: props.height,
            width:  props.width,

            yAxisWidth: 30,
            xAxisHeight: 60
        };
    }

    getYAxisElement() {
        const axis = this.props.yAxis;

        const bounds = {
            axis: {
                top:    this.view.padding + 10,
                bottom: this.view.height - this.view.xAxisHeight - this.view.padding,
                right:  this.view.padding + this.view.yAxisWidth
            },

            grid: {
                left:  this.view.padding + this.view.yAxisWidth + 10,
                right: this.view.width - this.view.padding
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
        const months = this.props.xAxis.values;

        const bounds = {
            left:   this.view.padding + this.view.yAxisWidth + 40,
            right:  this.view.width - this.view.padding,
            bottom: this.view.height - this.view.padding - this.view.xAxisHeight / 2
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
            bottom: this.view.height - this.view.padding - this.view.xAxisHeight,
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

        let currentPrice = this.state.focus.price.value,
            currentDate  = this.state.focus.price.date,
            previousPrice = null,
            priceDelta    = null;

        if (this.state.focus.id > 0) {
            previousPrice = this.priceLabels[this.state.focus.id - 1].price.value;
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
                    <img src={priceDelta > 0 ? "icon-up.svg" : "icon-down.svg"} />
                    <span>{Math.abs(priceDelta).toFixed(2).toString().replace(".", ",")}</span>
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
                x: this.state.focus.x - chartBounds.left + window.scrollX,
                y: this.state.focus.y - chartBounds.top + window.scrollY,
                width: 180,
                height: 80
            };

        const style = {
            left: elementBounds.x + 20,
            top: elementBounds.y - 90,
            width: 180,
            height: 80
        };

        if (style.left + style.width > this.view.width) {
            style.left -= style.width + 20
        }

        if (style.top < 0) {
            style.top += style.height + 40;
        }

        return style;
    }

    getChartElement() {
        return (
            <polyline points={this.state.points.join(" ")} className="tinkoff-chart-curve" strokeLinejoin="round"></polyline>
        );
    }

    getYearLabel() {
        const bounds = {
            left: this.view.padding + this.view.yAxisWidth + 40,
            top:  this.view.height - this.view.padding + 10
        };

        return (
            <text x={bounds.left} y={bounds.top} className="tinkoff-chart-label tinkoff-chart-year">
                {this.props.stock.year}
            </text>
        );
    }

    getLogo() {
        return (
            <image xlinkHref="tinkoff-logo.png" x="100" y="50" width="200px" className="tinkoff-logo"></image>
        );
    }

    handleMouseMove(event) {
        if (!this.isChartBuilt) {
            return;
        }

        const chartBounds = this.refs.svg.getBoundingClientRect(),
              cursorXPosition = event.pageX - chartBounds.left + window.scrollX;

        const deltas = this.priceLabels.map((priceLabel) => {
            return Math.abs(cursorXPosition - priceLabel.x);
        });

        const minDelta = Math.min.apply(null, deltas);

        this.setState({
            focus: this.priceLabels[deltas.indexOf(minDelta)]
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (!this.state.focus || !nextState.focus) {
            return true;
        }

        if (this.state.focus.id === nextState.focus.id) {
            return false;
        }

        return true;
    }

    componentDidMount() {
        const yearStart = new Date(this.props.stock.year, 0, 1),
              yearEnd   = new Date(this.props.stock.year, 11, 31);

        const bounds = {
            left:   this.view.padding + this.view.yAxisWidth + 40,
            right:  this.view.width - this.view.padding,
            bottom: this.view.height - this.view.xAxisHeight - this.view.padding,
            top:    this.view.padding + 10
        };

        const xScale = LinearScale.create().domain(yearStart, yearEnd).range(bounds.left, bounds.right),
              yScale = LinearScale.create().domain(this.props.yAxis.min, this.props.yAxis.max).range(bounds.bottom, bounds.top);

        this.priceLabels = this.props.stock.prices.map((price, index) => {
            return {
                price: price,
                id: index,
                x: xScale(price.date - yearStart),
                y: yScale(price.value)
            };
        });

        const points = this.priceLabels.map(({x, y}) => `${x},${y}`);

        let animationFrameIndex = 0;
        this.animationTimer = setInterval(() => {
            if (points.length === animationFrameIndex) {
                this.isChartBuilt = true;
                clearInterval(this.animationTimer);
            }

            this.setState((prevState) => {
                points: prevState.points.push(points[animationFrameIndex++]);
            })
        }, CHART_ANIMATION_DURATION / points.length);
    }

    componentWillUnmount() {
        clearInterval(this.animationTimer);
    }

    render() {
        return (
            <div className="tinkoff-chart">
                <svg width={this.view.width} height={this.view.height} ref="svg" onMouseMove={this.handleMouseMove.bind(this)}>
                    {this.getYAxisElement()}
                    {this.getXAxisElement()}
                    {this.getChartElement()}
                    {this.getFocusElement()}
                    {this.getYearLabel()}
                    {this.getLogo()}
                </svg>

                {this.getFocusDetailsElement()}
            </div>
        );
    }
}

module.exports = TinkoffChart;