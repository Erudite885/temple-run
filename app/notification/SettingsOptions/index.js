"use client";

import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import SectionSwitcher from "../SectionSwitcher/index";

import General from "../Customers/General";
import Overview from "../Overview";
import ServiceGeneral from "../Service/ServiceGeneral";
import SocialGeneral from "../Social/SocialGeneral";
import EmailGeneral from "../Email/EmailGeneral";
import Others from "../Others/Others";

const HotelsMain = () => {
  const [selectedSection, setSelectedSection] = useState("OVERVIEW");

  const renderSection = () => {
    switch (selectedSection) {
      case "GENERAL":
        return <Overview />;
      case "CUSTOMERS":
        return <General />;
      case "SERVICE":
        return <ServiceGeneral />;
      case "SOCIAL":
        return <SocialGeneral />;
      case "EMAIL":
        return <EmailGeneral />;
      case "OTHERS":
        return <Others />;
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
