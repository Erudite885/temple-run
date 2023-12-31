"use client";

import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import SectionSwitcher from "./SectionSwitcher";

import Customer from "./Customer";
import ServiceDetails from "./Service/ServiceDetails";
import OverviewLiveBookings from "./LiveBookings";
import ChatHistory from "./ChatHistory/ChatHistory";
import OverviewMain from "./GeneralOverview/OverviewMain";

const HotelsMain = () => {
  const [selectedSection, setSelectedSection] = useState("OVERVIEW");

  const renderSection = () => {
    switch (selectedSection) {
      case "OVERVIEW":
        return <OverviewMain />;
      case "LIVE BOOKINGS":
        return <OverviewLiveBookings />;
      case "CUSTOMERS":
        return <Customer />;
      case "SERVICE PROVIDERS":
        return <ServiceDetails />;
      case "CHAT":
        return <ChatHistory />;
      
      default:
        return <mainOverview />;
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
