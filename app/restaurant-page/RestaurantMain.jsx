"use client";
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import CustomerDetails from "@/app/restaurant-page/CustomerDetails";
import EmployeesDetails from "@/app/restaurant-page/EmployeesDetails";
// import RestaurantDetails from "@/app/restaurant-page/RestaurantDetails";
// import TotalbookingsVSTotalCancellationsLineChart from "@/app/restaurant-page/TotalBookingsVsTotalCancellations";
import SectionSwitcher from "./SectionSwitcher";
import Overview from "./Overview";

const RestaurantMain = () => {
  const [selectedSection, setSelectedSection] = useState("OVERVIEW");

  const renderSection = () => {
    switch (selectedSection) {
      case "OVERVIEW":
        return <Overview />;
      case "CUSTOMER":
        return <CustomerDetails />;
      case "RESTAURANT":
        return <EmployeesDetails />;
      default:
        return <Overview />;
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

export default RestaurantMain;