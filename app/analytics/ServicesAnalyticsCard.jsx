"use client";
import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Icon,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { FaArrowRotateRight } from "react-icons/fa6";
import { AiOutlinePercentage } from "react-icons/ai";
import { IoMdArrowDropup } from "react-icons/io";
import { BiCommentDetail } from "react-icons/bi";
import { MdPlaylistAddCheck } from "react-icons/md";

const data = [
  { name: "Bad", value: 50 },
  { name: "Poor", value: 100 },
  { name: "Okay", value: 100 },
  { name: "Good", value: 300 },
  { name: "Great", value: 1500 },

  // Add other segments...
];

// Define the COLORS array
const COLORS = ["Red", "Orange", "Tomato", "Green", "Lime"];

const ServicesAnalyticsCard = ({ title, percent, comments, ratings }) => {
  const bg = useColorModeValue("white", "whiteAlpha.200");
  const iconBg = useColorModeValue("gray.200", "whiteAlpha.200");
  const statBorder = useColorModeValue("gray.300", "whiteAlpha.600");

  return (
    <VStack
      p={5}
      borderRadius="3xl"
      w="30%"
      bg={bg}
      align="stretch"
      spacing={4}
    >
      <HStack justifyContent="space-between">
        <Text fontSize="xl" fontWeight="semibold">
          {title}
        </Text>
        <Button
          rightIcon={<FaArrowRotateRight />}
          border="1px"
          borderColor="blue.400"
          bgColor={bg}
        >
          Refresh
        </Button>
      </HStack>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="80%"
            fill="#3182CE"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend iconType="circle" layout="horizontal" />
        </PieChart>
      </ResponsiveContainer>
      <VStack spacing={6}>
        <HStack
          border="1px"
          borderColor={statBorder}
          px={2}
          py={2}
          borderRadius="xl"
          minW="210px"
        >
          {/** ICON, STAT TITLE, STAT */}
          <Icon
            as={AiOutlinePercentage}
            bg={iconBg}
            p={2}
            w={10}
            h={10}
            borderRadius="3xl"
          />
          <Box pl={4}>
            <Text fontSize="sm">Positive Percentage</Text>
            <Heading size="lg">{percent}%</Heading>
          </Box>
        </HStack>
        <HStack
          border="1px"
          borderColor={statBorder}
          px={2}
          py={2}
          borderRadius="xl"
          minW="210px"
        >
          <Icon
            as={BiCommentDetail}
            bg={iconBg}
            p={2}
            w={10}
            h={10}
            borderRadius="3xl"
          />
          <Box pl={4}>
            <Text>Total Comments</Text>
            <Heading size="lg">{comments}</Heading>
          </Box>
        </HStack>
        <HStack
          border="1px"
          borderColor={statBorder}
          px={2}
          py={2}
          borderRadius="xl"
          minW="210px"
        >
          <Icon
            as={MdPlaylistAddCheck}
            bg={iconBg}
            p={2}
            w={10}
            h={10}
            borderRadius="3xl"
          />
          <Box pl={4}>
            <Text>Total Ratings</Text>
            <Heading size="lg">{ratings}</Heading>
          </Box>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default ServicesAnalyticsCard;
