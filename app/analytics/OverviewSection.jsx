"use client";
import React from "react";
import { VStack, Box, HStack } from "@chakra-ui/react";
import OverallAppCard from "./OverallAppCard";
import NetPromoterScore from "./NetPromoterScore";
import CustomerRetention from "./CustomerRetention";
import CustomerEffortScore from "./CustomerEffortScore";

const OverviewSection = () => {
  return (
    <HStack w="full" align="center" justify="center" spacing={4} p={4}>
      {/** Overview section */}
      {/** Overall App Performance Card */}
      <OverallAppCard />
      {/** Net Promo, Customer Ret and Customer Effort */}
      <VStack flexGrow={2} spacing={2}>
        <NetPromoterScore />
        <CustomerRetention />
        <CustomerEffortScore />
      </VStack>
    </HStack>
  );
};

export default OverviewSection;
