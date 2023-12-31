"use client";
import React from "react";
import {
  VStack,
  Heading,
  HStack,
  Box,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiExit } from "react-icons/bi";
import { IoMdArrowDropup } from "react-icons/io";

const RestuarantStatsComponent = () => {
  const bgColor = useColorModeValue("white", "whiteAlpha.200");

  return (
    <VStack
      bgColor={bgColor}
      p={5}
      py={10}
      borderRadius="2xl"
      spacing={8}
      align="start"
    >
      <Heading size="lg">Statistics</Heading>
      <HStack
        bgColor="blue.400"
        py={4}
        pl={3}
        borderRadius="2xl"
        spacing={6}
        w="full"
      >
        {/** icon */}
        <Box bgColor="blue.300" borderRadius="3xl" p={2}>
          <Icon as={BiExit} w={8} h={8} color="white" />
        </Box>
        {/** stat number & name */}
        <Box color="white">
          <Heading size="lg">9850</Heading>
          <Text whiteSpace="nowrap">Total Bookings</Text>
        </Box>
      </HStack>
      <HStack
        border="1px"
        borderColor="gray.300"
        py={4}
        pl={3}
        pr="50px"
        borderRadius="2xl"
        w="full"
        spacing={6}
      >
        {/** icon */}
        <Box bgColor="gray.300" borderRadius="3xl" p={1}>
          <Icon as={IoMdArrowDropup} w={10} h={10} color="green.400" />
        </Box>
        {/** stat number & name */}
        <Box>
          <Heading size="lg">20%</Heading>
          <Text whiteSpace="nowrap">Since Oct 2023</Text>
        </Box>
      </HStack>
    </VStack>
  );
};

export default RestuarantStatsComponent;
