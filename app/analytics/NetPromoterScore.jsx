"use client";
import {
  Flex,
  Text,
  VStack,
  HStack,
  Icon,
  Badge,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdThumbUp, MdThumbDown, MdThumbsUpDown } from "react-icons/md";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// Dummy data for the pie chart
const data = [
  { name: "Promoters", value: 618, color: "green" },
  { name: "Passives", value: 171, color: "yellow" },
  { name: "Detractors", value: 162, color: "red" },
];

const NetPromoterScore = () => {
  const bg = useColorModeValue("white", "whiteAlpha.200");

  // Calculate the NPS score from data
  const npsScore = data.reduce((acc, item) => {
    if (item.name === "Promoters") return acc + item.value;
    if (item.name === "Detractors") return acc - item.value;
    return acc;
  }, 0);
  return (
    <VStack align="left" px={5} py={2} borderRadius="3xl" bg={bg} w="full">
      <Text fontSize="lg" fontWeight="bold">
        Net Promoter Score
      </Text>
      <HStack align="center" justify="center">
        <VStack w="100%">
          <ResponsiveContainer width="100%" height={120}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="100%"
                startAngle={180}
                endAngle={0}
                innerRadius={50}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <Heading size="lg">+{npsScore}</Heading>
        </VStack>
        <VStack justify="center" w="100%" height={200} spacing={4}>
          {/* Legend */}
          <Flex align="center">
            <Icon as={MdThumbUp} color="green.400" boxSize={5} />
            <Text ml={2}>Promoters (9-10)</Text>
            <Badge ml={1} colorScheme="green">
              {data[0].value} (
              {(
                (data[0].value /
                  (data[0].value + data[1].value + data[2].value)) *
                100
              ).toFixed(0)}
              %)
            </Badge>
          </Flex>
          <Flex align="center">
            <Icon as={MdThumbsUpDown} color="yellow.400" boxSize={5} />
            <Text ml={2}>Passives (7-8)</Text>
            <Badge ml={1} colorScheme="yellow">
              {data[1].value} (
              {(
                (data[1].value /
                  (data[0].value + data[1].value + data[2].value)) *
                100
              ).toFixed(0)}
              %)
            </Badge>
          </Flex>
          <Flex align="center">
            <Icon as={MdThumbDown} color="red.400" boxSize={5} />
            <Text ml={2}>Detractors (0-6)</Text>
            <Badge ml={1} colorScheme="red">
              {data[2].value} (
              {(
                (data[2].value /
                  (data[0].value + data[1].value + data[2].value)) *
                100
              ).toFixed(0)}
              %)
            </Badge>
          </Flex>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default NetPromoterScore;
