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

const DoubleLineChart = ({ ...rest }) => {
  const data = [
    {
      name: "January",
      Cancellations: 1200,
      Bookings: 2400,
      Packages: 3400,
    },
    {
      name: "Mars",
      Cancellations: 200,
      Bookings: 1398,
      Packages: 2500,
    },
    {
      name: "Avril",
      Cancellations: 2000,
      Bookings: 3600,
      Packages: 400,
    },
    {
      name: "Mail",
      Cancellations: 2780,
      Bookings: 3908,
      Packages: 2000,
    },
    {
      name: "July",
      Cancellations: 1890,
      Bookings: 4800,
      Packages: 3000,
    },
    {
      name: "November",
      Cancellations: 2390,
      Bookings: 3800,
      Packages: 3200,
    },
    {
      name: "December",
      Cancellations: 3490,
      Bookings: 4300,
      Packages: 3300,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height={400}>
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
        <Legend />
        <Line
          type="monotone"
          dataKey="Cancellations"
          stroke="#FF0000"
          activeDot={{ r: 8 }}
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="Bookings"
          stroke="#008000"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DoubleLineChart;
