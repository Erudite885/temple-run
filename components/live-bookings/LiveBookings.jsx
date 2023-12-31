"use client";
import React, { useState } from "react";
import {
  VStack,
  Heading,
  InputGroup,
  InputLeftElement,
  Input,
  HStack,
  FormControl,
  Select,
  Button,
  ButtonGroup,
  TableContainer,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import BookingOptions from "./BookingOptions";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import NameBar from "./NameBar";

// pass the following data as props:
// - live booking page title -> title
// - hotel/restaurant/package names -> liveBookingNames
// - num of pages the table data takes -> numPages
// - children should be the respective pages' table data
const LiveBookings = ({ title, liveBookingNames, numPages, children }) => {
  const pageButtons = Array.from({ length: numPages }, (_, i) => i + 1);

  const [selectedOption, setSelectedOption] = useState("TODAY");
  const [selectedNameIdx, setSelectedNameIdx] = useState(null);

  const onNameClick = (nameIdx) => {
    setSelectedNameIdx(nameIdx);
  };

  const onOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <VStack px={8} w="100%" minH="100%" py={4} spacing={6} align="start">
      <Heading w="100%">{title} Live Bookings</Heading>
      <BookingOptions
        selectedOption={selectedOption}
        onOptionClick={onOptionClick}
      />

      {/** Search bars */}
      <HStack spacing={6} w={selectedOption === "TODAY" ? "30%" : "50%"}>
        <FormControl flex={1}>
          <Select
            borderColor="gray.400"
            focusBorderColor="blue.600"
            _hover={{ borderColor: "blue.700" }}
          >
            {/** Additional Options + make more reusable / dynamic */}
            <option>Status</option>
          </Select>
        </FormControl>

        {/** only show calendar picker when viewing ALL bookings for hotel */}
        {selectedOption === "ALL" && (
          <HStack flex={1}>
            <Input type="date" borderColor="gray.400" />
            <FiChevronRight size={40} />

            <Input type="date" borderColor="gray.400" />
          </HStack>
        )}

        <InputGroup flex={2} borderColor="gray.400">
          <InputLeftElement pointerEvents="none">
            <FaSearch color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search by name"
            focusBorderColor="gray.100"
            _placeholder={{ color: "inherit" }}
          />
        </InputGroup>
      </HStack>

      {/** Hotel/Restaurant/Package names bar */}
      <NameBar
        liveBookingNames={liveBookingNames}
        selectedNameIdx={selectedNameIdx}
        onNameClick={onNameClick}
      />

      {/** PASS Hotel/Restaurant/Package info table as CHILD of this component (tables are slightly different) */}
      <TableContainer>{children}</TableContainer>

      {/** Table navigation */}
      {/** TODO: Add BUTTONS functionality  */}
      <HStack w="100%" justifyContent="space-between">
        <Button
          variant="outline"
          colorScheme="facebook"
          leftIcon={<FiChevronLeft />}
        >
          Previous
        </Button>
        <ButtonGroup variant="ghost" colorScheme="facebook">
          {pageButtons.map((num) => (
            <Button key={num}>{num}</Button>
          ))}
        </ButtonGroup>
        <Button
          variant="outline"
          colorScheme="facebook"
          rightIcon={<FiChevronRight />}
        >
          Next
        </Button>
      </HStack>
    </VStack>
  );
};

export default LiveBookings;
