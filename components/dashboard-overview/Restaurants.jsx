"use client";
import React from "react";
import StatsCard from "../dashboard/StatsCard";
import { Text, Box, Center, Flex } from "@chakra-ui/react";
import LineChartData from "../dashboard/charts/LineChart";

const Restaurants = () => {
  return (
    <StatsCard mx={5} title="Restaurants">
      <Center mt={10} justifyContent="flex-end" as={Flex} gap={3} mb={1} mr={7}>
        <Box w="10vh" border="1px solid #FFFFFF" textAlign="center">
          Day
        </Box>
        <Box w="10vh" border="1px solid #FFFFFF" textAlign="center">
          Week
        </Box>
        <Box w="10vh" border="1px solid #FFFFFF" textAlign="center">
          Month
        </Box>
        <Box w="10vh" border="1px solid #FFFFFF" textAlign="center">
          Year
        </Box>
      </Center>
      <Flex mt={1}>
        <Text
          alignSelf="center"
          transform="rotate(90deg)"
          fontWeight="bold"
          fontSize="xl"
          ml={-10}
        >
          Number
        </Text>
        <Box w="100%" flex={1}>
          <LineChartData />
        </Box>
      </Flex>
    </StatsCard>
  );
};

export default Restaurants;
