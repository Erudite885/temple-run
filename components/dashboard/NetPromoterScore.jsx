"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import StatsCard from "./StatsCard";
import { Box, Center, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const RADIAN = Math.PI / 180;
const data = [
  { name: "A", value: 100, color: "#FF0000" },
  { name: "B", value: 100, color: "#FFFF00" },
  { name: "C", value: 100, color: "#008000" },
];

const cx = 170;
const cy = 160;
const iR = 80;
const oR = 140;
const value = 140;

const needle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
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

const NetPromterScore = ({ ...rest }) => {
  return (
    <StatsCard title="Net Promoter Score" titleSize="2xl" {...rest}>
      <Center textAlign="center">
        On scale 0-10, how likely is that you would recommend our service to a
        friend?
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
            data={data}
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            fill="#8884d8"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {needle(value, data, cx, cy, iR, oR, "#00BCD4")}
        </PieChart>
      </ResponsiveContainer>
      <Center as={Heading}>+48</Center>
      <Flex mt={4} direction="column" px={4} gap={8}>
        <Flex justify="space-between" align="center">
          <HStack align="center">
            <FaThumbsUp color="green" fontSize="2.5rem" />
            <Text ml={1} mt={1}>
              Promoters (9-10)
            </Text>
          </HStack>
          <Text fontSize="lg" fontWeight="bold">
            618 (65%)
          </Text>
        </Flex>{" "}
        <Flex justify="space-between" align="center">
          <HStack align="center">
            <Box transform="rotate(90deg)">
              <FaThumbsUp color="yellow" fontSize="2.5rem" />
            </Box>
            <Text ml={1} mt={1}>
              Passives (7-8)
            </Text>
          </HStack>
          <Text fontSize="lg" fontWeight="bold">
            171 (18%)
          </Text>
        </Flex>{" "}
        <Flex justify="space-between" align="center">
          <HStack align="center">
            <Box>
              <FaThumbsUp color="red" fontSize="2.5rem" />
            </Box>
            <Text ml={1} mt={1}>
              Promoters (0-6)
            </Text>
          </HStack>
          <Text fontSize="lg" fontWeight="bold">
            162 (17%)
          </Text>
        </Flex>
      </Flex>
      <Heading as={Center} fontSize="large" mt={10}>
        % Promoters - % Detractors = 48
      </Heading>
    </StatsCard>
  );
};

export default NetPromterScore;
