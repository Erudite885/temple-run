"use client";
import React from "react";
import {
  Box,
  Text,
  Select,
  VStack,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", Bookings: 4000, Cancellations: 2400, Orders: 3000 },
  { name: "Feb", Bookings: 3000, Cancellations: 1398, Orders: 2800 },
  { name: "Mar", Bookings: 2000, Cancellations: 9800, Orders: 3500 },
  { name: "Apr", Bookings: 2780, Cancellations: 3908, Orders: 4200 },
  { name: "May", Bookings: 1890, Cancellations: 4800, Orders: 3200 },
  { name: "Jun", Bookings: 2390, Cancellations: 3800, Orders: 2800 },
  { name: "Jul", Bookings: 3490, Cancellations: 4300, Orders: 3800 },
  // ... Add more data points as necessary
];

const ChartComponent = () => {
  const bg = useColorModeValue("white", "whiteAlpha.200");

  return (
    <Box borderRadius="2xl" p={4} bg={bg} w="80%" position="relative">
      <VStack align="stretch">
        <HStack justifyContent="space-between" alignItems="center">
          <HStack alignItems="center">
            <Text fontSize="xl" fontWeight="semibold" ml={8}>
              Total Bookings vs Total Cancellations
            </Text>
          </HStack>
          <Select size="sm" w="fit-content">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </Select>
        </HStack>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
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
            {/* Use absolute positioning for the Legend */}
            <Legend
              iconType="circle"
              align="right"
              verticalAlign="top"
              height={36}
              style={{ position: "absolute", top: "-40px", left: "8px" }}
            />
            <Line
              type="monotone"
              dataKey="Bookings"
              stroke="#7bf31f"
              activeDot={{ r: 8 }}
              
            />
            {/* New Line for Orders with a blue stroke */}
            <Line type="monotone" dataKey="Orders" stroke="blue" />
            <Line type="monotone" dataKey="Cancellations" stroke="red" />
          </LineChart>
        </ResponsiveContainer>
      </VStack>
    </Box>
  );
};

export default ChartComponent;
