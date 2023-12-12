import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0, type: "" },
    { label: "Feb", value: 0, type: "" },
    { label: "Mar", value: 0, type: "" },
    { label: "Apr", value: 0, type: "" },
    { label: "May", value: 0, type: "" },
    { label: "Jun", value: 0, type: "" },
    { label: "Jul", value: 0, type: "" },
    { label: "Aug", value: 0, type: "" },
    { label: "Sep", value: 0, type: "" },
    { label: "Oct", value: 0, type: "" },
    { label: "Nov", value: 0, type: "" },
    { label: "Dec", value: 0, type: "" },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); //starting at 0 => Jan => 0
    chartDataPoints[expenseMonth].value += expense.amount;
    chartDataPoints[expenseMonth].type = expense.type;
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
