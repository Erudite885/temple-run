"use client";
import React from "react";
import {
  Box,
  Text,
  Select,
  VStack,
  HStack,
  useColorModeValue,
  SimpleGrid,
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
  { name: "Jan", Hotels: 5800, Restaurants: 2400, Packages: 3000 },
  { name: "Feb", Hotels: 3950, Restaurants: 1398, Packages: 2800 },
  { name: "Mar", Hotels: 4360, Restaurants: 9800, Packages: 3500 },
  { name: "Apr", Hotels: 6780, Restaurants: 3908, Packages: 4200 },
  { name: "May", Hotels: 1890, Restaurants: 4800, Packages: 3200 },
  { name: "Jun", Hotels: 2390, Restaurants: 3800, Packages: 2800 },
  { name: "Jul", Hotels: 3490, Restaurants: 4300, Packages: 3800 },
  // ... Add more data points as necessary
];

const OverviewLineChart = () => {
   const bg = useColorModeValue("white", "whiteAlpha.200");

  return (
    <Box mb={12} borderRadius="2xl" p={4} bg={bg} w="100%" position="relative">
      <VStack align="stretch">
        <HStack justifyContent="space-between" alignItems="center">
          <HStack alignItems="center">
            <Text fontSize="xl" fontWeight="semibold" ml={8}>
              Revenue
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
              dataKey="Hotels"
              stroke="#7bf31f"
              activeDot={{ r: 8 }}
              
            />
            {/* New Line for Orders with a blue stroke */}
            <Line type="monotone" dataKey="Restaurants" stroke="blue" />
            <Line type="monotone" dataKey="Packages" stroke="red" />
          </LineChart>
        </ResponsiveContainer>
      </VStack>

      <SimpleGrid columns={5} spacing={2} mt={4}>
        {/* Card 1 */}
        <Box
          p={3}
          borderWidth="1px"
          borderRadius="lg"
          borderColor="gray.300"
          bg="white"
          textAlign='center'
        >
          <Text fontSize="lg">Total Revenue</Text>
          <Text fontSize="3xl" fontWeight="bold" mt={2}>
            14,523
          </Text>
          <Text fontSize="sm" color="gray.500" mt={1}>
            Description 1
          </Text>
        </Box>

        {/* Card 2 */}
        <Box
          p={3}
          borderWidth="1px"
          borderRadius="lg"
          borderColor="gray.300"
          bg="white"
          textAlign='center'
        >
          <Text fontSize="lg">Other Revenue</Text>
          <Text fontSize="3xl" fontWeight="bold" mt={2}>
            423
          </Text>
          <Text fontSize="sm" color="gray.500" mt={1}>
            Description 1
          </Text>
        </Box>
        {/* (Repeat the structure for Cards 2 through 5) */}
        {/* ... */}
        <Box
          p={3}
          borderWidth="1px"
          borderRadius="lg"
          borderColor="gray.300"
          bg="white"
          textAlign='center'
        >
          <Text fontSize="lg">Hotels</Text>
          <Text fontSize="3xl" fontWeight="bold" mt={2}>
            5,323
          </Text>
          <Text fontSize="sm" color="gray.500" mt={1}>
            Description 1
          </Text>
        </Box>

        <Box
          p={3}
          borderWidth="1px"
          borderRadius="lg"
          borderColor="gray.300"
          bg="white"
          textAlign='center'
        >
          <Text fontSize="lg">Restaurants</Text>
          <Text fontSize="3xl" fontWeight="bold" mt={2}>
            6,123
          </Text>
          <Text fontSize="sm" color="gray.500" mt={1}>
            Description 1
          </Text>
        </Box>

        {/* Card 5 */}
        <Box
          p={3}
          borderWidth="1px"
          borderRadius="lg"
          borderColor="gray.300"
          bg="white"
          textAlign='center'
        >
          <Text fontSize="lg">Packages</Text>
          <Text fontSize="3xl" fontWeight="bold" mt={2}>
            2,567
          </Text>
          <Text fontSize="sm" color="gray.500" mt={1}>
            Description 5
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default OverviewLineChart