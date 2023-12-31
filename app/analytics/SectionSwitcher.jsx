"use client";
import React from "react";
import { HStack, Button, Text, useTheme, useColorMode } from "@chakra-ui/react";

const SectionSwitcher = ({ selectedSection, setSelectedSection }) => {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  return (
    <HStack justify="space-between" m={5} mb={0}>
      <HStack spacing={4}>
        <Button
          bgColor={colorMode === "light" ? "white" : ""}
          _focus={{ boxShadow: `0 0 0 2px ${theme.colors.blue[300]}` }}
          p={8}
          borderRadius="lg"
          onClick={() => setSelectedSection("OVERVIEW")}
        >
          Overview
        </Button>
        <Button
          bgColor={colorMode === "light" ? "white" : ""}
          _focus={{ boxShadow: `0 0 0 2px ${theme.colors.blue[300]}` }}
          p={8}
          borderRadius="lg"
          onClick={() => setSelectedSection("SERVICES")}
        >
          Services Analytics
        </Button>
      </HStack>
      <Text pr="20px" fontSize="lg">Packages</Text>
    </HStack>
  );
};

export default SectionSwitcher;
