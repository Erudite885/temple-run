"use client";
import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Data for the pie chart
const averageRetention = 72; // Assuming an average retention rate of 82%
const pieData = [
  { name: "Retention", value: averageRetention, fill: "green" },
  { name: "Loss", value: 100 - averageRetention, fill: "tomato" }, // Assuming 'Loss' is the remainder
];

// Data for the bar chart
const barData = [
  { month: "Jan", retention: 78 },
  { month: "Feb", retention: 92 },
  { month: "Mar", retention: 69 },
  { month: "Apr", retention: 50 },
  { month: "May", retention: 80 },
  { month: "Jun", retention: 85 },
  { month: "Jul", retention: 95 },
  { month: "Aug", retention: 75 },
  { month: "Sep", retention: 65 },
  { month: "Oct", retention: 79 },
  { month: "Nov", retention: 92 },
  { month: "Dec", retention: 87 },
];

const CustomerRetention = () => {
  const bg = useColorModeValue("white", "whiteAlpha.200");

  return (
    <VStack
      px={5}
      py={2}
      borderRadius="3xl"
      bg={bg}
      w="full"
      align="start"
      h="33%"
    >
      {/* Pie Chart for Average Retention */}
      <Text fontSize="lg" fontWeight="bold">
        Customer Retention
      </Text>
      <HStack w="full">
        <VStack w="full">
          <ResponsiveContainer width="100%" height={120}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="100%"
                innerRadius={50}
                outerRadius={100}
                startAngle={180}
                endAngle={0}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <Heading size="lg">{averageRetention}%</Heading>
        </VStack>

        {/* Bar Chart for Monthly Retention */}
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={barData} layout="horizontal">
            <XAxis dataKey="month" type="category" />
            <YAxis type="number" domain={[0, 100]} />
            <Tooltip />
            <Bar dataKey="retention" fill="#3182CE" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </HStack>
    </VStack>
  );
};

export default CustomerRetention;
