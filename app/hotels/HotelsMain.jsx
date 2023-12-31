"use client";
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import Overview from "@/app/hotels/Overview";
import SectionSwitcher from "./SectionSwitcher";
import CustomerDetailsTable from "./CustomerDetailsTable";
import HotelDetailsTable from "./HotelDetailsTable";

const HotelsMain = () => {
  const [selectedSection, setSelectedSection] = useState("OVERVIEW");

  const renderSection = () => {
    switch (selectedSection) {
      case "OVERVIEW":
        return <Overview />;
      case "CUSTOMER":
        return <CustomerDetailsTable />;
      case "HOTEL":
        return <HotelDetailsTable />;
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

export default HotelsMain;
