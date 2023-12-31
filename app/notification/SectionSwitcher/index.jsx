"use client";
import React from "react";
import { HStack, Button, Text, useTheme, useColorMode, Flex, Box, Icon } from "@chakra-ui/react";
import { FiSettings } from "react-icons/fi";

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
          onClick={() => setSelectedSection("GENERAL")}
        >
          General
        </Button>
        <Button
          bgColor={colorMode === "light" ? "white" : ""}
          _focus={{ boxShadow: `0 0 0 2px ${theme.colors.blue[300]}` }}
          p={8}
          borderRadius="lg"
          onClick={() => setSelectedSection("CUSTOMERS")}
        >
          Customers
        </Button>
        <Button
          bgColor={colorMode === "light" ? "white" : ""}
          _focus={{ boxShadow: `0 0 0 2px ${theme.colors.blue[300]}` }}
          p={8}
          borderRadius="lg"
          onClick={() => setSelectedSection("SERVICE")}
        >
          Service Providers
              </Button>
              <Button
          bgColor={colorMode === "light" ? "white" : ""}
          _focus={{ boxShadow: `0 0 0 2px ${theme.colors.blue[300]}` }}
          p={8}
          borderRadius="lg"
          onClick={() => setSelectedSection("SOCIAL")}
        >
          Social Media
              </Button>
              <Button
          bgColor={colorMode === "light" ? "white" : ""}
          _focus={{ boxShadow: `0 0 0 2px ${theme.colors.blue[300]}` }}
          p={8}
          borderRadius="lg"
          onClick={() => setSelectedSection("EMAIL")}
        >
          Email
              </Button>
              <Button
          bgColor={colorMode === "light" ? "white" : ""}
          _focus={{ boxShadow: `0 0 0 2px ${theme.colors.blue[300]}` }}
          p={8}
          borderRadius="lg"
          onClick={() => setSelectedSection("OTHERS")}
        >
          Others
        </Button>
      </HStack>
      <Flex alignItems="center">
         <Box as={Icon} ml={4} fontSize="1.3rem">
          <FiSettings />
        </Box>
      <Text fontSize="lg">Settings</Text>
     </Flex>
    </HStack>
  );
};

export default SectionSwitcher;
