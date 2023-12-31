"use client";
import React, { useState } from "react";
import { Box, Flex, HStack } from "@chakra-ui/react";
import CustomerDetails from "./CustomerDetails";
import EmployeesDetails from "./EmployeesDetails";
import TotalCancellationsAndBookings from "./TotalCancellationsAndBookings";
import Wellbeing from "@/components/packages/Wellbeing";
import Adventures from "@/components/packages/Adventures";
import Entertainments from "@/components/packages/Entertainments";
import SectionSwitcher from "./SectionSwitcher";

import PackageStatsComponent from "./Statistics";
import ChartComponent from "./TotalCancellationsAndBookings";

const PackageMain = () => {
  const [selectedSection, setSelectedSection] = useState("OVERVIEW");

  const renderSection = () => {
    switch (selectedSection) {
      case "OVERVIEW":
        return (
            <>
            <HStack align="center" justify="center" h="100%" w="full" p={5} spacing={6}>
              <PackageStatsComponent />
              <ChartComponent />
             </HStack>
            <Flex gap={5} m={5} mr={7}>
              <Wellbeing />
              <Entertainments />
              <Adventures />
            </Flex></>
            );
      case "CUSTOMER":
        return <CustomerDetails />;
      case "PACKAGE":
        return <EmployeesDetails />;
      default:
        return <TotalCancellationsAndBookings />;
    }
  };

  return (
    <>
      <Box w="100%">
        <SectionSwitcher
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
      </Box>
      <Box w="100%">{renderSection()}</Box>
    </>
  );
};

export default PackageMain;