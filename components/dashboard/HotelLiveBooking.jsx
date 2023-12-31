"use client";
import React, { useState } from "react";
import {
  Center,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  Spacer,
  InputRightElement,
  Select,
  Container,
  chakra,
  Box,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import SearchableSelect from "@/components/SearchableSelect";
import StatsCard from "@/components/dashboard/StatsCard";

const HotelLiveBooking = () => {
  const [selectedOption, setSelectedOption] = useState("Hilton");

  const handleChange = (value) => {
    setSelectedOption(value);
  };

  const options = [
    { value: "Hilton", label: "Hilton" },
    { value: "Hotel Name", label: "Hotel Name" },
    { value: "Fanc Hotel", label: "Fancy Hotel" },
    { value: "Some Hotel", label: "Some Hotel" },
    // Add more options as needed
  ];
  return (
    <StatsCard title="Hotels Live Bookings" mx={5}>
      <Flex w="full" alignContent="center" justify="space-between" px={3}>
        <Heading flex={1}>{selectedOption}</Heading>
        <Box flex={1}>
          <SearchableSelect
            options={options}
            onChange={handleChange}
            value={selectedOption}
            placeholder="Hilton Hotel"
          />
        </Box>
      </Flex>

      <InputGroup maxW="60vh" mt={10} flex={1}>
        <InputRightElement pointerEvents="none">
          <FaSearch color="gray.300" />
        </InputRightElement>
        <Input type="text" placeholder="Search.." />
      </InputGroup>
      <TableContainer mt={5}>
        <Table variant="striped" colorScheme="white">
          <Thead>
            <Tr>
              <Th>Booking Number</Th>
              <Th>CheckIn Time / Date</Th>
              <Th>Checkout Time / Date</Th>
              <Th>Name</Th>
              <Th isNumeric>NO Of Adults</Th>
              <Th isNumeric>NO Of Kids</Th>
              <Th>Allocated RO</Th>
              <Th>Status</Th>
              <Th>Notes</Th>
              <Th>Contact Number</Th>
              <Th>Email</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>MB 10214</Td>
              <Td>9AM - 21 November 20</Td>
              <Td>2PM - 24 November 20</Td>
              <Td>Jospin Uwachi</Td>
              <Td>4</Td>
              <Td>1</Td>
              <Td>Studio 1001</Td>
              <Td>Arrived</Td>
              <Td>Breakfast Included</Td>
              <Td>12345648946</Td>
              <Td>Jospin@megatransact.com</Td>
            </Tr>
            <Tr>
              <Td>MB 10214</Td>
              <Td>9AM - 21 November 20</Td>
              <Td>2PM - 24 November 20</Td>
              <Td>Jospin Uwachi</Td>
              <Td>4</Td>
              <Td>1</Td>
              <Td>Studio 1001</Td>
              <Td>Arrived</Td>
              <Td>Breakfast Included</Td>
              <Td>12345648946</Td>
              <Td>Jospin@megatransact.com</Td>
            </Tr>{" "}
            <Tr>
              <Td>MB 10214</Td>
              <Td>9AM - 21 November 20</Td>
              <Td>2PM - 24 November 20</Td>
              <Td>Jospin Uwachi</Td>
              <Td>4</Td>
              <Td>1</Td>
              <Td>Studio 1001</Td>
              <Td>Arrived</Td>
              <Td>Breakfast Included</Td>
              <Td>12345648946</Td>
              <Td>Jospin@megatransact.com</Td>
            </Tr>{" "}
            <Tr>
              <Td>MB 10214</Td>
              <Td>9AM - 21 November 20</Td>
              <Td>2PM - 24 November 20</Td>
              <Td>Jospin Uwachi</Td>
              <Td>4</Td>
              <Td>1</Td>
              <Td>Studio 1001</Td>
              <Td>Arrived</Td>
              <Td>Breakfast Included</Td>
              <Td>12345648946</Td>
              <Td>Jospin@megatransact.com</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </StatsCard>
  );
};

export default HotelLiveBooking;
