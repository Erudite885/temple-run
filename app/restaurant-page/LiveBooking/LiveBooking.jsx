"use client";
import React, { useState } from "react";
import {
  VStack,
  Box,
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
  Tr,
  Th,
  Td,
  Table,
  Thead,
  Tbody,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import BookingOptions from "./BookingOptions";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const restaurantNames = [
  "Hilton Hotel",
  "Ramada",
  "Hilton Hotel",
  "Ibis",
  "Travelodge",
  "Hilton Hotel",
  "Ramada",
  "Hilton Hotel",
  "Ibis",
  "Hilton Hotel",
  "Ramada",
  "Hilton Hotel",
  "Ibis",
  "Travelodge",
  "Hilton Hotel",
  "Ramada",
  "Hilton Hotel",
  "Ibis",
  "Hilton Hotel",
  "Ramada",
  "Hilton Hotel",
  "Ibis",
  "Travelodge",
  "Hilton Hotel",
  "Ramada",
  "Hilton Hotel",
  "Ibis",
  "Hilton Hotel",
  "Ramada",
  "Hilton Hotel",
  "Ibis",
  "Travelodge",
  "Hilton Hotel",
  "Ramada",
  "Hilton Hotel",
  "Ibis",
];

const tableInfo = [
  {
    id: "#5644",
    name: "Vishal UmaShank",
    checkIn: "9:30 AM - 21 Nov 2023",
    checkOut: "9:30 AM - 21 Nov 2023",
    allocatedRoom: "A647",
    contact: "0234434422",
    email: "vishal@megatransact.com",
    adults: 4,
    children: 3,
    status: "available",
    notes: "early booking",
  },
  {
    id: "#5644",
    name: "Vishal UmaShank",
    checkIn: "9:30 AM - 21 Nov 2023",
    checkOut: "9:30 AM - 21 Nov 2023",
    allocatedRoom: "A647",
    contact: "0234434422",
    email: "vishal@megatransact.com",
    adults: 4,
    children: 3,
    status: "available",
    notes: "early booking",
  },
  {
    id: "#5644",
    name: "Vishal UmaShank",
    checkIn: "9:30 AM - 21 Nov 2023",
    checkOut: "9:30 AM - 21 Nov 2023",
    allocatedRoom: "A647",
    contact: "0234434422",
    email: "vishal@megatransact.com",
    adults: 4,
    children: 3,
    status: "available",
    notes: "early booking",
  },
  {
    id: "#5644",
    name: "Vishal UmaShank",
    checkIn: "9:30 AM - 21 Nov 2023",
    checkOut: "9:30 AM - 21 Nov 2023",
    allocatedRoom: "A647",
    contact: "0234434422",
    email: "vishal@megatransact.com",
    adults: 4,
    children: 3,
    status: "available",
    notes: "early booking",
  },
  {
    id: "#5644",
    name: "Vishal UmaShank",
    checkIn: "9:30 AM - 21 Nov 2023",
    checkOut: "9:30 AM - 21 Nov 2023",
    allocatedRoom: "A647",
    contact: "0234434422",
    email: "vishal@megatransact.com",
    adults: 4,
    children: 3,
    status: "available",
    notes: "early booking",
  },
  {
    id: "#5644",
    name: "Vishal UmaShank",
    checkIn: "9:30 AM - 21 Nov 2023",
    checkOut: "9:30 AM - 21 Nov 2023",
    allocatedRoom: "A647",
    contact: "0234434422",
    email: "vishal@megatransact.com",
    adults: 4,
    children: 3,
    status: "available",
    notes: "early booking",
  },
  {
    id: "#5644",
    name: "Vishal UmaShank",
    checkIn: "9:30 AM - 21 Nov 2023",
    checkOut: "9:30 AM - 21 Nov 2023",
    allocatedRoom: "A647",
    contact: "0234434422",
    email: "vishal@megatransact.com",
    adults: 4,
    children: 3,
    status: "available",
    notes: "early booking",
  },
  {
    id: "#5644",
    name: "Vishal UmaShank",
    checkIn: "9:30 AM - 21 Nov 2023",
    checkOut: "9:30 AM - 21 Nov 2023",
    allocatedRoom: "A647",
    contact: "0234434422",
    email: "vishal@megatransact.com",
    adults: 4,
    children: 3,
    status: "available",
    notes: "early booking",
  },
];

const LiveBooking = () => {
  //TODO: Refactor into smaller components
  //TODO: Add relevant interactivity for buttons
  //TODO: Make table controls more dynamic
  //TODO: styling touch ups
  return (
    <VStack px={8} w="100%" minH="100%" py={4} spacing={6} align="start">
      <Heading w="100%">Restaurants Live Bookings</Heading>
      <BookingOptions />

      {/** Search bars */}
      <HStack spacing={6} w="50%">
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
        <HStack flex={1}>
          <Input type="date" borderColor="gray.400" />
          <FiChevronRight size={40} />

          <Input type="date" borderColor="gray.400" />
        </HStack>

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

      {/** Hotel names bar */}
      {/**TODO: add interactivity on which hotel is selected */}
      {/**TODO: Decide whether better to have scrollbar or no */}
      <Box
        overflowX="auto"
        maxW="100%"
        borderRadius="lg"
        sx={{
          // Hiding scrollbar for Webkit browsers
          "&::-webkit-scrollbar": {
            display: "none",
          },
          // Hiding scrollbar for Firefox
          scrollbarWidth: "none",
          // Hiding scrollbar for IE and Edge
          "-ms-overflow-style": "none",
        }}
      >
        <ButtonGroup isAttached borderRadius="lg">
          {restaurantNames.map((hotel) => (
            <Button key={hotel} p={7} borderRadius={0}>
              {hotel}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
      {/** Hotel info table */}
      <TableContainer>
        <Table size="lg">
          <Thead>
            <Tr>
              <Th textAlign="center">ID NUMBER</Th>
              <Th textAlign="center">NAME</Th>
              <Th textAlign="center">CHECK-IN</Th>
              <Th textAlign="center">Check-OUT</Th>
              <Th textAlign="center">ALLOCATED ROOM</Th>
              <Th textAlign="center">CONTACT</Th>
              <Th textAlign="center">EMAIL</Th>
              <Th textAlign="center" isNumeric>
                NO. OF ADULTS
              </Th>
              <Th textAlign="center" isNumeric>
                NO. OF CHILDREN
              </Th>
              <Th textAlign="center">STATUS</Th>
              <Th textAlign="center">NOTES</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableInfo.map((item) => (
              <Tr key={item.id}>
                <Td textAlign="center">{item.id}</Td>
                <Td>{item.name}</Td>
                <Td textAlign="center">{item.checkIn}</Td>
                <Td textAlign="center">{item.checkOut}</Td>
                <Td textAlign="center">{item.allocatedRoom}</Td>
                <Td>{item.contact}</Td>
                <Td>{item.email}</Td>
                <Td textAlign="center">{item.adults}</Td>
                <Td textAlign="center">{item.children}</Td>
                <Td>{item.status}</Td>
                <Td>{item.notes}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {/** Table navigation */}
      <HStack w="100%" justifyContent="space-between">
        <Button
          variant="outline"
          colorScheme="facebook"
          leftIcon={<FiChevronLeft />}
        >
          Previous
        </Button>
        <ButtonGroup variant="ghost" colorScheme="facebook">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
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

export default LiveBooking;