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
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Data for the gauge chart (semi-circle)
const effortScore = 8.8; // Example effort score
const gaugeData = [
  { name: "Score", value: effortScore, fill: "Green" },
  { name: "Remaining", value: 10 - effortScore, fill: "Tomato" }, // Assuming the max score is 10
];

// Data for the bar chart (individual scores)
const areaData = [
  // Assuming these are individual scores out of 10 for each month
  { month: "Jan", score: 1.7 },
  { month: "Feb", score: 1.7 },
  // ... other months
  { month: "Dec", score: 2.7 },
];

const CustomerEffortScore = () => {
  const bg = useColorModeValue("white", "whiteAlpha.200");

  return (
    <VStack px={5} py={2} borderRadius="3xl" bg={bg} w="full" align="start">
      <Text fontSize="lg" fontWeight="bold">
        Customer Effort Score
      </Text>
      <HStack w="full" justify="space-between">
        <VStack w="50%">
          <ResponsiveContainer width="100%" height={120}>
            <PieChart>
              <Pie
                data={gaugeData}
                cx="50%"
                cy="100%"
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={100}
                dataKey="value"
              >
                {gaugeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <Heading size="lg">{effortScore}</Heading>
        </VStack>
        <Box w="50%" height="200px">
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={areaData}>
              <defs>
                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3182CE" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3182CE" stopOpacity={1} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis allowDecimals={false} domain={[0, "dataMax"]} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="score"
                stroke="#3182CE"
                fillOpacity={1}
                fill="url(#colorScore)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </HStack>
    </VStack>
  );
};

export default CustomerEffortScore;
