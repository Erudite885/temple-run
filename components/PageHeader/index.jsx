"use client";
import React, { useState } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";

const PageHeader = () => {
  return (
    <Flex justify="space-between" pr={4} mt={10} mx={5}>
      <Heading flex={1} fontSize="x-large">
        Master Dashboard
      </Heading>
      <Flex
        direction="row"
        align="center"
        p={2}
        gap={3}
        borderRadius="lg"
        bgColor="white"
        _hover={{ cursor: "pointer" }}
      >
        <CalendarIcon />
        <Text fontSize="small">Dec 29, 2023 - Jan 4, 2024</Text>
      </Flex>
    </Flex>
  );
};

export default PageHeader;
