"use client";
import React from "react";
import StatsCard from "./StatsCard";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Legend,
  Line,
} from "recharts";

const NewCustomers = ({ ...rest }) => {
  const data = [
    {
      name: "January",
      New_Customers: 1500,
      Active_Users: 2400,
    },
    {
      name: "Mars",
      New_Customers: 1700,
      Active_Users: 1900,
    },
    {
      name: "Avril",
      New_Customers: 3200,
      Active_Users: 500,
    },
    {
      name: "Mail",
      New_Customers: 5000,
      Active_Users: 2400,
    },
    {
      name: "July",
      New_Customers: 5413,
      Active_Users: 2300,
    },
    {
      name: "November",
      New_Customers: 6000,
      Active_Users: 1200,
    },
    {
      name: "December",
      New_Customers: 7000,
      Active_Users: 3000,
    },
  ];

  return (
    <StatsCard
      flex={1}
      {...rest}
      title="New Customers"
      titleSize="x-large"
      withSelect
    >
      <ResponsiveContainer width="100%" height={300}>
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
            dataKey="New_Customers"
            stroke="#FFA500"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </StatsCard>
  );
};

export default NewCustomers;
