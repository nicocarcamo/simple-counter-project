import React from "react";

let Counter = props => {
  return (
    <div className="bg-dark bg-gradient d-flex text-white-50 justify-content-center display-1">
      <div className="clock mx-3"><i class="fa-solid fa-clock-rotate-left"></i></div>
      <div>{props.six}</div>
      <div>{props.five}</div>
      <div>{props.four}</div>
      <div>{props.three}</div>
      <div>{props.two}</div>
      <div>{props.one}</div>
    </div>
  );
};

export default Counter;
