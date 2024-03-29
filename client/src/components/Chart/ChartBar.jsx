import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
    let barFillHeight = '0%';

    if(props.maxValue > 0){
        barFillHeight = Math.round(props.value / props.maxValue * 100) + '%';
    }
  return (
    <div className="Chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={
            props.type === "credit"
              ? { height: barFillHeight }
              : { height: barFillHeight, backgroundColor: "#FF5252" }
          }
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
