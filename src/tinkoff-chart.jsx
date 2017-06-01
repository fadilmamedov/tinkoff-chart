import React from "react";


class TinkoffChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            focusedValue: null,
            points: []
        };

        this.view = {
            padding: 20,
            yScaleWidth: 30,
            xScaleHeight: 60
        };

        this.scale = {
            linear: () => {
                return {
                    domain: this.domain,
                    range: this.range
                }
            }
        };
    }

    domain(start, end) {
        this._domain = {
            start: start,
            end: end
        };

        return this;
    }

    range(start, end) {
        this._range = {
            start: start,
            end: end
        };

        return (value) => {
            let result = (this._range.end - this._range.start) / (this._domain.end - this._domain.start) * value;

            return this._range.start + result;
        };
    }

    getYScale() {
        const yScale = this.scale.linear().domain(0, 100).range(this.props.height - this.view.xScaleHeight - this.view.padding, this.view.padding + 10);

        let yScaleElements = [];
        for (let labelValue = 0; labelValue <= 100; labelValue += 20) {
            let y = yScale(labelValue);

            yScaleElements.push(
                <g key={labelValue}>
                    <text x={this.view.padding + this.view.yScaleWidth} y={y} className="tinkoff-chart-label" textAnchor="end">
                        {labelValue}
                    </text>

                    <line x1={this.view.padding + this.view.yScaleWidth + 10} x2={this.props.width - this.view.padding}
                          y1={y} y2={y} className="tinkoff-chart-line">
                    </line>
                </g>
            );
        }

        return yScaleElements;
    }

    getXScale() {
        let xScale = this.scale.linear().domain(0, 12).range(this.view.padding + this.view.yScaleWidth + 40, this.props.width - this.view.padding);
        let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

        let xScaleElements = [];
        for (let monthIndex = 0; monthIndex < months.length; monthIndex++) {
            let x = xScale(monthIndex);

            xScaleElements.push(
                <text key={monthIndex} x={x} y={this.props.height - this.view.padding - this.view.xScaleHeight + 30} className="tinkoff-chart-label">
                    {months[monthIndex]}
                </text>
            );
        }

        return xScaleElements;
    }

    getChart() {
        const xScale = this.scale.linear().domain(0, this.getDaysInYear(this.props.stock.year)).range(this.view.padding + this.view.yScaleWidth + 40, this.props.width - this.view.padding),
              yScale = this.scale.linear().domain(0, 100).range(this.props.height - this.view.xScaleHeight - this.view.padding, this.view.padding + 10);

        this.priceLabelCoords = this.props.stock.prices.map((price) => {
            return {
                id: price.id,
                value: price,
                x: xScale(this.getNumberOfDay(price.date)),
                y: yScale(price.value)
            };
        });

        const points = this.props.stock.prices.map((price) => {
            return `${xScale(this.getNumberOfDay(price.date))},${yScale(price.value)}`
        });

        debugger;
        let i = 0;
        setTimeout(() => {
            debugger;
            // debugger;
            // this.setState((prevState) => {
            //     points: prevState.points.push(points[i++]);
            // })
            this.setState({
                points: points
            });
        }, 1000);

        // return (
        //     <polyline points={points.join(" ")} className="tinkoff-chart-curve" strokeLinejoin="round"></polyline>
        // );
    }

    getChartNewTest() {
        return (
            <polyline points={this.state.points.join(" ")} className="tinkoff-chart-curve" strokeLinejoin="round"></polyline>
        );
    }

    getDaysInYear(year) {
        return this.isLeapYear(year) ? 366 : 365;
    }

    isLeapYear(year) {
        return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
    }

    getNumberOfDay(date) {
        const yearStart = new Date(this.props.stock.year, 0, 1),
              dateDiff = date - yearStart;

        const oneDay = 1000 * 60 * 60 * 24;

        return Math.floor(dateDiff / oneDay);
    }

    getYearLabel() {
        return (
            <text x={this.view.padding + this.view.yScaleWidth + 40} y={this.props.height - this.view.padding + 10} className="tinkoff-chart-label tinkoff-chart-year">
                {this.props.stock.year}
            </text>
        );
    }

    getFocusElement() {
        if (!this.state.focusedValue) {
            return;
        }

        let x = this.state.focusedValue.x,
            y = this.state.focusedValue.y;

        return (
            <g>
                <line x1={x} y1={y} x2={x} y2={this.props.height - this.view.padding - this.view.xScaleHeight} className="tinkoff-chart-focus-line" strokeDasharray="6,8"></line>
                <circle cx={x} cy={y} r="6" className="tinkoff-chart-focus-dot"></circle>
            </g>
        );
    }

    handleMouseMove(event) {
        let chartBounds = this.refs.fadilSvg.getBoundingClientRect(),
            cursorXPosition = event.pageX - chartBounds.left + window.scrollX;

        let deltas = this.priceLabelCoords.map((priceLabel) => {
            return Math.abs(cursorXPosition - priceLabel.x);
        });

        let f = Math.min.apply(null, deltas);
        let index = deltas.indexOf(f);

        this.setState({
            focusedValue: this.priceLabelCoords[index]
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (!this.state.focusedValue) {
            return true;
        }

        if (this.state.focusedValue.id === nextState.focusedValue.id) {
            return false;
        }

        return true;
    }

    componentDidMount() {
        const xScale = this.scale.linear().domain(0, this.getDaysInYear(this.props.stock.year)).range(this.view.padding + this.view.yScaleWidth + 40, this.props.width - this.view.padding),
            yScale = this.scale.linear().domain(0, 100).range(this.props.height - this.view.xScaleHeight - this.view.padding, this.view.padding + 10);

        this.priceLabelCoords = this.props.stock.prices.map((price) => {
            return {
                id: price.id,
                value: price,
                x: xScale(this.getNumberOfDay(price.date)),
                y: yScale(price.value)
            };
        });

        const points = this.props.stock.prices.map((price) => {
            return `${xScale(this.getNumberOfDay(price.date))},${yScale(price.value)}`
        });

        let i = 0;
        setInterval(() => {
            this.setState((prevState) => {
                points: prevState.points.push(points[i++]);
            })
        }, 1000 / points.length);
    }

    render() {
        console.log("render");
        const yScale = this.getYScale(),
              xScale = this.getXScale(),
              chart = this.getChartNewTest(),
              focusElement = this.getFocusElement(),
              yearLabel = this.getYearLabel();

        return (
            <div className="tinkoff-chart">
                <svg width={this.props.width} height={this.props.height} onMouseMove={this.handleMouseMove.bind(this)} ref="fadilSvg">
                    {yScale}
                    {xScale}
                    {yearLabel}

                    {chart}
                    {focusElement}

                    <image xlinkHref="logo.png" x="100" y="50" width="200px" className="logo"></image>
                </svg>
            </div>
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
}

module.exports = TinkoffChart;