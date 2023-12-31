"use client";
import React from "react";
import StatsCard from "./StatsCard";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const UserStatus = ({ ...rest }) => {
  const data = [
    {
      name: "January",
      Total_Users: 4000,
      Active_Users: 2400,
    },
    {
      name: "Mars",
      Total_Users: 4500,
      Active_Users: 1900,
    },
    {
      name: "Avril",
      Total_Users: 4560,
      Active_Users: 500,
    },
    {
      name: "Mail",
      Total_Users: 5000,
      Active_Users: 2400,
    },
    {
      name: "July",
      Total_Users: 5413,
      Active_Users: 2300,
    },
    {
      name: "November",
      Total_Users: 6000,
      Active_Users: 1200,
    },
    {
      name: "December",
      Total_Users: 7000,
      Active_Users: 3000,
    },
  ];

  return (
    <StatsCard
      flex={1}
      title="User Status"
      titleSize="x-large"
      withSelect
      {...rest}
    >
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total_Users"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="Active_Users"
            stroke="#ff7300"
            fill="#ff7300"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StatsCard>
  );
};

export default UserStatus;
