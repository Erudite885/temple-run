"use client";
import React from "react";
import StatsCard from "./StatsCard";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TotalbookingsVSTotalCancellations = () => {
  const data = [
    {
      name: "January",
      Bookings: 2000,
      Cancellations: 700,
    },
    {
      name: "Mars",
      Bookings: 3000,
      Cancellations: 1398,
    },
    {
      name: "Avril",
      Bookings: 2000,
      Cancellations: 1200,
    },
    {
      name: "Mail",
      Bookings: 2780,
      Cancellations: 1400,
    },
    {
      name: "July",
      Bookings: 1890,
      Cancellations: 350,
    },
    {
      name: "November",
      Bookings: 2390,
      Cancellations: 455,
    },
    {
      name: "December",
      Bookings: 3490,
      Cancellations: 1000,
    },
  ];
  return (
    <StatsCard
      title="Total Bookings VS Total Cancellations"
      titleSize="x-large"
      m={5}
      mr={7}
      withSelect
    >
      <ResponsiveContainer width="100%" minHeight={300}>
        <ComposedChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Bookings" barSize={20} fill="#00BCD4" />
          <Line
            type="monotone"
            dataKey="Cancellations"
            strokeWidth="2"
            stroke="#ff7300"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </StatsCard>
  );
};

export default TotalbookingsVSTotalCancellations;
