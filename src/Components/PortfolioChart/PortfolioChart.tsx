import React from "react";
import { Chart } from "react-google-charts";

const PortfolioChart: React.FC = () => {
  const data = [
    ["Ticker", "Investment"],
    ["AAPL", 22130.42],
    ["MSFT", 22542.10],
    ["AMZN", 20129.89],
    ["GOOGL", 21290.91],
    ["JNJ", 20852.32],
    ["META", 25838.88],
  ];

  const options = {
    title: "Portfolio Allocation",
    pieHole: 0.4,
    is3D: false,
  };

  return (
    <div className="flex">
      <Chart
        className="bg-pink-100 text-center !font-mono"
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default PortfolioChart;