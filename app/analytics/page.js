"use client";
import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/Sidebar";
import { VStack, Box } from "@chakra-ui/react";
import SectionSwitcher from "./SectionSwitcher";
import OverviewSection from "./OverviewSection";
import ServicesAnalyticsSection from "./ServicesAnalyticsSection";

//TODO: add navigation to page in sidebar
export default function Page() {
  const [currSection, setCurrSection] = useState("OVERVIEW");

  const renderSection = () => {
    switch (currSection) {
      case "OVERVIEW":
        return <OverviewSection />;
      case "SERVICES":
        return <ServicesAnalyticsSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <SideBar>
      <VStack>
        <Box w="100%">
          <NavBar />
        </Box>
        <Box w="100%">
          <SectionSwitcher
            selectedSection={currSection}
            setSelectedSection={setCurrSection}
          />
        </Box>
        {renderSection()}
      </VStack>
    </SideBar>
  );
}
