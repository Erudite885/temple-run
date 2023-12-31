"use client";
import React from "react";
import {
  Heading,
  VStack,
  Box,
  HStack,
  Button,
  Icon,
  Text,
  useColorModeValue,
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

const OverallAppCard = () => {
  const bg = useColorModeValue("white", "whiteAlpha.200");
  const iconBg = useColorModeValue("gray.200", "whiteAlpha.200");
  const statBorder = useColorModeValue("gray.300", "whiteAlpha.600");

  return (
    <VStack height="768px" p={5} bg={bg} borderRadius="3xl" flexGrow={1}>
      <HStack w="full" justify="space-between">
        <Heading fontSize="xl">Overall App Performance</Heading>
        <Button
          rightIcon={<FaArrowRotateRight />}
          border="1px"
          borderColor="blue.400"
          bgColor={bg}
        >
          Refresh
        </Button>
      </HStack>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </PieChart>
      </ResponsiveContainer>

      <HStack spacing={4} mb={2}>
        <HStack
          border="1px"
          borderColor={statBorder}
          px={2}
          py={4}
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
            <Heading size="lg">90%</Heading>
          </Box>
        </HStack>
        <HStack
          border="1px"
          borderColor={statBorder}
          px={2}
          py={4}
          borderRadius="xl"
          minW="210px"
        >
          {/** ICON, STAT TITLE, STAT */}
          <Icon
            as={IoMdArrowDropup}
            bg={iconBg}
            p={2}
            w={10}
            h={10}
            borderRadius="3xl"
          />
          <Box pl={4}>
            <Text>Since Oct 2023</Text>
            <Heading size="lg">12.5%</Heading>
          </Box>
        </HStack>
      </HStack>

      <HStack spacing={4} mt={2}>
        <HStack
          border="1px"
          borderColor={statBorder}
          px={2}
          py={4}
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
            <Heading size="lg">12303</Heading>
          </Box>
        </HStack>
        <HStack
          border="1px"
          borderColor={statBorder}
          px={2}
          py={4}
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
            <Heading size="lg">256</Heading>
          </Box>
        </HStack>
      </HStack>
    </VStack>
  );
};

export default OverallAppCard;
