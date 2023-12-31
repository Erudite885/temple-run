"use client";
import React from "react";
import { HStack } from "@chakra-ui/react";
import ServicesAnalyticsCard from "./ServicesAnalyticsCard";

const ServicesAnalyticsSection = () => {
  return (
    <HStack w="full" py={8} justify="space-evenly">
      <ServicesAnalyticsCard
        title="Hotels"
        percent={78}
        comments={5138}
        ratings={912}
      />
      <ServicesAnalyticsCard
        title="Restaurants"
        percent={85}
        comments={15138}
        ratings={256}
      />
      <ServicesAnalyticsCard
        title="Packages"
        percent={90}
        comments={955}
        ratings={522}
      />
    </HStack>
  );
};

export default ServicesAnalyticsSection;
