import React from "react";
import ReactDOM from "react-dom";

import TinkoffChart from "./tinkoff-chart.common.js";


let stock = {
    year: 2016,
    prices: []
};

const yearEnd = new Date(stock.year, 11, 31),
    yearStart = new Date(stock.year, 0, 1);

let price = 20,
    chancesForGrowth = 0.75,
    currentDate = new Date(yearStart);

while (currentDate <= yearEnd) {
    currentDate.setDate(currentDate.getDate() + Math.floor(Math.random() * 3) + 1);

    let priceDelta = Math.random() * 3,
        currentChance = Math.random();

    if (currentChance < chancesForGrowth) {
        price += priceDelta;
    } else {
        price -= priceDelta;
    }

    if (price > 100) {
        chancesForGrowth -= 0.05;
        price = 100;
    } else if (price < 0) {
        chancesForGrowth += 0.05;
        price = 0;
    }

    stock.prices.push({
        date: new Date(currentDate),
        value: price
    });
}

const yAxis = {
    min: 0,
    max: 100,
    step: 20
};

const xAxis = {
    values: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
};

ReactDOM.render(
    <div>
        <TinkoffChart width={1400} height={600} stock={stock} yAxis={yAxis} xAxis={xAxis}/>
    </div>,
    document.getElementById("application")
);