import React from "react";
import "./Statistics.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    name: "Assignment 1",
    uv: 60,
    pv: 100,
    amt: 100
  },
  {
    name: "Assignment 2",
    uv: 58,
    pv: 300,
    amt: 30
  },
  {
    name: "Assignment 3",
    uv: 60,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Assignment 4",
    uv: 60,
    pv: 100,
    amt: 100
  },
  {
    name: "Assignment 5",
    uv: 60,
    pv: 100,
    amt: 100
  },
  {
    name: "Assignment 6",
    uv: 55,
    pv: 100,
    amt: 100
  },
  {
    name: "Assignment 7",
    uv: 60,
    pv: 100,
    amt: 100
  },
  {
    name: "Assignment 8",
    uv: 60,
    pv: 100,
    amt: 100
  }
];


const Statistics = () => {
    
  return (
    <div className="Statistics">
      <AreaChart
      width={1500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 120,
        left: 10,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
    </div>
  );
};

export default Statistics;
