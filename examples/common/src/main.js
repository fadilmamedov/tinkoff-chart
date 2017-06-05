import React from "react";
import ReactDOM from "react-dom";

// import TinkoffChart from "./tinkoff-chart.common.js";
import TinkoffChart from "../../../src/tinkoff-chart.jsx";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 1400,
            height: 600,

            sma: true,

            year: 2016,

            xAxis: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],

            yAxis: {
                min: 0,
                max: 100,
                step: 20
            },

            dataSettings: {
                initialValue: 20,
                chancesForGrowth: 0.75,
                dateDelta: 3,
                valueDelta: 3
            },

            animations: true
        };

        this.state.values = this.createRandomValues();
    }

    createRandomValues() {
        let values = [];

        const yearEnd = new Date(this.state.year, 11, 31),
              yearStart = new Date(this.state.year, 0, 1);

        let currentDate = new Date(yearStart);

        let {initialValue: value, chancesForGrowth, dateDelta, valueDelta} = this.state.dataSettings;

        while (currentDate <= yearEnd) {
            currentDate.setDate(currentDate.getDate() + Math.floor(Math.random() * dateDelta) + 1);

            let valueDiff = Math.random() * valueDelta,
                currentChance = Math.random();

            if (currentChance < chancesForGrowth) {
                value += valueDiff;
            } else {
                value -= valueDiff;
            }

            if (value > this.state.yAxis.max) {
                chancesForGrowth -= 0.05;
                value = this.state.yAxis.max;
            }

            if (value < this.state.yAxis.min) {
                chancesForGrowth += 0.05;
                value = this.state.yAxis.min;
            }

            values.push({
                date: new Date(currentDate),
                price: value
            });
        }

        return values;
    }

    refresh() {
        this.setState({
            values: this.createRandomValues()
        });
    }

    changeAnimations() {
        this.setState((prevState) => {
            return {
                animations: !prevState.animations
            };
        });
    }

    changeSMA() {
        this.setState((prevState) => {
            return {
                sma: !prevState.sma
            };
        });
    }

    render() {
        const {width, height, year, values, xAxis, yAxis, sma, animations} = this.state;

        return (
            <div>
                <TinkoffChart width={width} height={height} year={year} values={values} yAxis={yAxis} xAxis={xAxis} sma={sma} animations={animations}/>

                <div className="settings">
                    <button className="ui button refresh-btn" onClick={this.refresh.bind(this)}>Refresh</button>

                    <button className={"ui button " + (animations ? "positive" : "negative")} onClick={this.changeAnimations.bind(this)}>
                        Animations {animations ? "enabled" : "disabled"}
                    </button>

                    <button className={"ui button " + (sma ? "positive" : "negative")} onClick={this.changeSMA.bind(this)}>
                        Simple Moving Average {sma ? "enabled" : "disabled"}
                    </button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("application")
);