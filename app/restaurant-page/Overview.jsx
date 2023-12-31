"use client";
import React from "react";
import { HStack } from "@chakra-ui/react";
// // import ChartComponent from "./ChartComponent";
// import StatsComponent from "./StatsComponent";
import TotalbookingsVSTotalCancellations from "./TotalbookingsVSTotalCancellations";
import RestuarantStatsComponent from "./RestuarantStatsComponent";

const Overview = () => {
  //TODO: State Required
  return (
    <HStack align="center" justify="center" h="100%" w="full" p={5} spacing={6}>
      {/** Stats Box */}
      <RestuarantStatsComponent />
      {/** Graph */}
      <TotalbookingsVSTotalCancellations />
    </HStack>
  );
};

export default Overview;
