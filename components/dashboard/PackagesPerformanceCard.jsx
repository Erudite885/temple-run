"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Button, Card, CardBody, Flex, Text } from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";

const PackagesPerformanceCard = ({ ...rest }) => {
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
    <Card {...rest}>
      <CardBody>
        <Card shadow="2xl" mt={-16}>
          <CardBody>
            <ResponsiveContainer width="100%" minHeight={200}>
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
                <XAxis style={{ fontSize: "0.8rem" }} dataKey="name" />
                <YAxis style={{ fontSize: "0.8rem" }} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="Hotels"
                  stroke="#82ca9d"
                  activeDot={{ r: 8 }}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>
        <Flex
          borderBottom="1px solid #808080"
          mt={6}
          pb={3}
          justify="space-between"
          align="center"
        >
          <Text fontWeight="bold">HOTELS PERFORMANCE</Text>
          <Button variant="ghost">
            <FiMoreVertical />
          </Button>
        </Flex>
        <Flex gap={2} mt={4}>
          <Text color="#4CAF50">+55%</Text>
          <Text color="#7B809A">than last week</Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default PackagesPerformanceCard;
