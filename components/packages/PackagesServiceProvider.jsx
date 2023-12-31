"use client";
import React from "react";
import StatsCard from "../dashboard/StatsCard";
import {
  Box,
  Flex,
  Text,
  Image,
  AspectRatio,
  Divider,
  Center,
  Heading,
} from "@chakra-ui/react";
import { FiPhone, FiStar } from "react-icons/fi";
import { ResponsiveContainer } from "recharts";
import LineChartData from "../dashboard/charts/LineChart";
import EmployeesDetails from "../../app/restaurant-page/EmployeesDetails";

const PackagesServiceProvider = () => {
  return (
    <StatsCard title="Packages Service Provider Details" m={5}>
      <Heading fontSize="xx-large">Name Of Provider</Heading>
      <Flex mt={8} w="100%" alignItems="center" gap={5} justify="space-between">
        <StatsCard flex={1} title="Address :" titleSize="2xl">
          <Text>Random Adress, 54213, Somewhere In The World</Text>
        </StatsCard>
        <Divider orientation="vertical" />
        <StatsCard flex={1} title="Contact Us :" titleSize="2xl">
          <Flex alignItems="center" gap={1}>
            <FiPhone />
            <Text>+214654312645</Text>
          </Flex>{" "}
          <Flex alignItems="center" mt={1} gap={1}>
            <FiPhone />
            <Text>+214654312645</Text>
          </Flex>
        </StatsCard>
        <Divider orientation="vertical" />
        <StatsCard flex={1} title="Ratings :" titleSize="2xl">
          <Flex alignItems="center" justify="space-between" fontSize="x-large">
            <Text>55423 Ratings</Text>
            <Flex>
              <FiStar color="yellow" fill="yellow" />
              <FiStar color="yellow" fill="yellow" />
              <FiStar color="yellow" fill="yellow" />
              <FiStar color="yellow" fill="yellow" />
              <FiStar color="yellow" />
            </Flex>
          </Flex>
        </StatsCard>
        <Divider orientation="vertical" />
      </Flex>
      <Heading mt={5} fontSize="xx-large">
        Location :{" "}
      </Heading>
      <Flex mt={5} gap={10}>
        <Flex
          justify="space-between"
          fontSize="large"
          direction="column"
          flex={1}
        >
          <AspectRatio flex={1} ratio={5 / 3}>
            <Image
              src="./map.jpeg"
              alt="naruto"
              borderRadius="lg"
              objectFit="cover"
            />
          </AspectRatio>
        </Flex>
        <AspectRatio flex={1} ratio={5 / 3}>
          <Image
            src="./download.jpeg"
            alt="naruto"
            borderRadius="lg"
            objectFit="cover"
          />
        </AspectRatio>
      </Flex>

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
          ml="-14"
        >
          Percentage
        </Text>
        <Box w="100%" flex={1}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChartData />
          </ResponsiveContainer>
        </Box>
      </Flex>
      <EmployeesDetails />
    </StatsCard>
  );
};

export default PackagesServiceProvider;
