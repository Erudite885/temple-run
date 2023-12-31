// ComposedChart.js
import React from 'react';
import {
  Box,
  VStack,
  HStack,Text,
  useColorModeValue,
  Select,
} from '@chakra-ui/react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    "name": "Jan",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Feb",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Mar",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Apr",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "May",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Jun",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Jul",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  },   {
    "name": "Aug",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Sep",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Oct",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Nov",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Dec",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
]

const ComposedChartComponent = () => {
  const bg = useColorModeValue('white', 'whiteAlpha.200');

  return (
    <Box borderRadius="2xl" p={4} bg={bg} w="100%" position="relative">
      <VStack align="stretch">
        <HStack justifyContent="space-between" alignItems="center">
          <HStack alignItems="center">
            <Text fontSize="xl" fontWeight="semibold" ml={8}>
              Total of Bookings & Total Cancellations
            </Text>
          </HStack>
          <Select size="sm" w="fit-content">
            <option value="yearly">Yearly</option>
            <option value="monthly">Monthly</option>
            <option value="weekly">Weekly</option>
            <option value="daily">Daily</option>
          </Select>
        </HStack>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart
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
            {/* <Legend /> */}
            <Bar dataKey="pv" fill="#16B1FF" barSize={22} />
            <Line type="monotone" dataKey="uv" stroke="red" />
          </ComposedChart>
        </ResponsiveContainer>
      </VStack>
    </Box>
  );
};

export default ComposedChartComponent;
