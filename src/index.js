import React from "react";
import ReactDOM from "react-dom";
import { Line, Pie } from "react-chartjs-2";

import "./styles.css";

function App() {
  const data = {
    labels: [
      1370,
      1371,
      1372,
      1373,
      1374,
      1375,
      1376,
      1377,
      1378,
      1379,
      1380,
      1381,
      1382,
      1383,
      1384,
      1385,
      1386,
      1387,
      1388,
      1389,
      1390,
      1391,
      1392,
      1393,
      1394,
      1395,
      1396,
      1397,
      1398,
      1399
    ],
    //backgroundColor: ['rgba(255,0,0,1)'],
    //lineTension: 1,
    datasets: [
      {
        label: "Levels",
        fill: false,
        borderColor: "rgba(255, 0, 0, 0.3)",
        borderWidth: 1,
        pointRadius: 2,
        data: [
          1275.77,
          1274.73,
          1273.83,
          1273.41,
          1273.65,
          1273.5,
          1273.28,
          1272.83,
          12732.83,
          1271.6,
          1271.6,
          1271.36,
          1271.01,
          1270.67,
          1270.4,
          1270.15,
          1270.08,
          1270.54,
          1270.32,
          1270.27,
          1271.3,
          1271.27
        ]
      },
      {
        label: "Area",
        fill: false,
        borderColor: "rgba(0, 255, 0, 0.3)",
        borderWidth: 1,
        pointRadius: 2,
        data: [
          4753.37,
          5039.93,
          5391.36,
          5723.07,
          5724.38,
          5724.38,
          5643.3,
          5498.31,
          4978.31,
          4544.5,
          4215.19,
          4070.4,
          4148.57,
          4099.62,
          4028.18,
          3794.98,
          3794.98,
          3436.8,
          3029.65,
          2869.53,
          2583.24,
          2196.58,
          1880.42,
          1525.59,
          1404.46,
          2047.49,
          1783.47,
          1722.87,
          2828.37,
          2807.79
        ]
      },
      {
        label: "Volume",
        fill: false,
        borderColor: "blue",
        borderWidth: 2,
        pointRadius: 2,
        data: [
          21010,
          22150,
          26910,
          30710,
          30770,
          30770,
          29010,
          27990,
          21500,
          16540,
          12580,
          10840,
          11830,
          11210,
          10310,
          8550,
          8550,
          6120,
          4320,
          3610,
          2640,
          1840,
          1290,
          860,
          750,
          1560,
          1140,
          1050,
          3430,
          3350
        ]
      }
    ]
  };

  var options = {
    legend: {
      position: "right",
      labels: {
        boxWidth: 10
      }
    },
    scales: {
      xAxes: [
        {
          //ticks: { display: false }
        }
      ]
    }
  };

  return (
    <div className="App main">
      <Line data={data} options={options} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
