"use client";

import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import StatsCard from "./StatsCard";
import { Box, Center, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { AreaChart, Area } from "recharts";

const RADIAN = Math.PI / 180;
const dataPie = [
  { id: 1, name: "A", value: 100, color: "#FF0000" },
  { id: 2, name: "B", value: 100, color: "#FFFF00" },
  { id: 3, name: "C", value: 100, color: "#008000" },
];

const cx = 170;
const cy = 160;
const iR = 80;
const oR = 140;
const value = 220;

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const needle = (value, dataPie, cx, cy, iR, oR, color) => {
  let total = 0;
  dataPie.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle key="circle" cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path
      key="path"
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke="#none"
      fill={color}
    />,
  ];
};

const CustomerEffortScore = ({ ...rest }) => {
  return (
    <StatsCard title="Customer Effort Score" titleSize="2xl" {...rest}>
      <Center textAlign="center">
        On score 1 to 10 how much effort was required to get the help you were
        looking for ?
      </Center>

      <ResponsiveContainer
        style={{ color: "red" }}
        width="100%"
        maxHeight={200}
      >
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={dataPie}
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            fill="#8884d8"
            stroke="none"
          >
            {dataPie.map((entry) => (
              <Cell key={entry.id} fill={entry.color} />
            ))}
          </Pie>
          {needle(value, dataPie, cx, cy, iR, oR, "#00BCD4")}
        </PieChart>
      </ResponsiveContainer>
      <Center as={Heading}>1.7</Center>

      <ResponsiveContainer width="100%" height={280}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 25,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis style={{ fontSize: "0.8rem" }} dataKey="name" />
          <YAxis style={{ fontSize: "0.8rem" }} />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </StatsCard>
  );
};

export default CustomerEffortScore;
