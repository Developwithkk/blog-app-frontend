import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Plot from "react-plotly.js";
import "./stock.css";

const Stock = () => {

    const [xchartValue , setXchartValue] = useState([]);
    const [ychartValue , setYchartValue] = useState([]);

  useEffect(() => {

    let xvalue = [];
    let yvalue = [];

    const fetchData = async () => {
      const res = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&outputsize=compact&apikey=COQ5UE4EWNORTAKS`
      );
      console.log(res.data);
      for (let key in res.data["Time Series (5min)"]) {
        xvalue.push(key);
        yvalue.push(res.data["Time Series (5min)"][key]["1. open"]);
      }
      console.log(xvalue);
      setXchartValue(xvalue)
      setYchartValue(yvalue)
      console.log(yvalue);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Plot
        className="charts"
        data={[
          {
            x: xchartValue,
            y: ychartValue,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
          },
          
        ]}
        layout={{ width: 720, height: 640, title: "Mircosoft chart" }}
      />
    </div>
  );
};

export default Stock;
