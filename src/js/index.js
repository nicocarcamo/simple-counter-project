import React from "react";
import ReactDOM from "react-dom";
import Counter from "./component/Counter.jsx";

let counter = 0;
setInterval(function () {

    const six = Math.floor(counter / 10000) % 10;
    const five = Math.floor(counter / 10000) % 10;
    const four = Math.floor(counter / 1000) % 10;
    const three = Math.floor(counter / 100) % 10;
    const two = Math.floor(counter / 10) % 10;
    const one = Math.floor(counter / 1) % 10;
    counter++;

    ReactDOM.render(
    <Counter
        one = {one}
        two = {two}
        three = {three}
        four = {four}
        five = {five}
        six = {six}
    />, document.querySelector("#app"));
}, 1000);
