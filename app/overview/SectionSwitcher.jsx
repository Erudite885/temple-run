"use client";
import React from "react";
import { HStack, Button, Text, useTheme, useColorMode, Box, Icon, Flex } from "@chakra-ui/react";
import { MdOutlineViewAgenda } from "react-icons/md";

const SectionSwitcher = ({ selectedSection, setSelectedSection }) => {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  return (
    <HStack justify="space-between" m={5}>
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
          onClick={() => setSelectedSection("LIVE BOOKINGS")}
        >
          Live Bookings
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
          onClick={() => setSelectedSection("SERVICE PROVIDERS")}
        >
          Service Providers
        </Button>
        <Button
          bgColor={colorMode === "light" ? "white" : ""}
          _focus={{ boxShadow: `0 0 0 2px ${theme.colors.blue[300]}` }}
          p={8}
          borderRadius="lg"
          onClick={() => setSelectedSection("CHAT")}
        >
          Chat History
        </Button>
      </HStack>
      <Flex
        py={2}
        px={2}
        my={4}
        width={{ base: "100%", sm: "48%", md: "30%", lg: "20%" }}
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box as={Icon} ml={2} fontSize="1.3rem">
          <MdOutlineViewAgenda />
        </Box>
        <Text ml={3}
        >
          Overview
        </Text>
      </Flex>
    </HStack>
  );
};

export default SectionSwitcher;