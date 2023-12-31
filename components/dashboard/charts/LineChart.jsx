"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

const LineChartData = ({ ...rest }) => {
  const data = [
    {
      name: "January",
      Restaurants: 4000,
      Hotels: 2400,
      Packages: 3400,
    },
    {
      name: "Mars",
      Restaurants: 3000,
      Hotels: 1398,
      Packages: 2500,
    },
    {
      name: "Avril",
      Restaurants: 2000,
      Hotels: 3600,
      Packages: 400,
    },
    {
      name: "Mail",
      Restaurants: 2780,
      Hotels: 3908,
      Packages: 2000,
    },
    {
      name: "July",
      Restaurants: 1890,
      Hotels: 4800,
      Packages: 3000,
    },
    {
      name: "November",
      Restaurants: 2390,
      Hotels: 3800,
      Packages: 3200,
    },
    {
      name: "December",
      Restaurants: 3490,
      Hotels: 4300,
      Packages: 3300,
    },
  ];
  return (
    <ResponsiveContainer width="100%" minHeight={280} maxHeight={300} {...rest}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="Restaurants"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="Hotels"
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="Packages"
          stroke="#FFA500"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartData;
