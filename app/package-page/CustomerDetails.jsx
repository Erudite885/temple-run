"use client";
import {
  VStack,
  HStack,
  Table,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
  Heading,
  Select,
  useColorMode,
  Button,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import React from "react";

const data = [
  {
    id: "PB87267",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    type: "Wellbeing Package",
    time: "9:00 am 26th December 2023",
    people: 4,
    status: "Booked",
  },
  {
    id: "PB87267",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    type: "Wellbeing Package",
    time: "9:00 am 26th December 2023",
    people: 4,
    status: "Booked",
  },
  {
    id: "PB87267",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    type: "Wellbeing Package",
    time: "9:00 am 26th December 2023",
    people: 4,
    status: "Booked",
  },
  {
    id: "PB87267",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    type: "Wellbeing Package",
    time: "9:00 am 26th December 2023",
    people: 4,
    status: "Booked",
  },
  {
    id: "PB87267",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    type: "Wellbeing Package",
    time: "9:00 am 26th December 2023",
    people: 4,
    status: "Booked",
  },
  {
    id: "PB87267",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    type: "Wellbeing Package",
    time: "9:00 am 26th December 2023",
    people: 4,
    status: "Booked",
  },
  {
    id: "PB87267",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    type: "Wellbeing Package",
    time: "9:00 am 26th December 2023",
    people: 4,
    status: "Booked",
  },
  {
    id: "PB87267",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    type: "Wellbeing Package",
    time: "9:00 am 26th December 2023",
    people: 4,
    status: "Booked",
  },
  {
    id: "PB87267",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    type: "Wellbeing Package",
    time: "9:00 am 26th December 2023",
    people: 4,
    status: "Booked",
  },

  {
    id: "PB87267",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    type: "Wellbeing Package",
    time: "9:00 am 26th December 2023",
    people: 4,
    status: "Booked",
  },
  {
    id: "PB87267",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    type: "Wellbeing Package",
    time: "9:00 am 26th December 2023",
    people: 4,
    status: "Booked",
  },

];

const CustomerDetails = () => {
  const { colorMode } = useColorMode();

  return (
    <VStack
      m={5}
      pt={4}
      bg={colorMode === "light" ? "white" : "whiteAlpha.200"}
      borderRadius="lg"
    >
      <HStack w="100%" justifyContent="space-evenly" p={4}>
        <Heading w="100%" pl={4} size="md">
          Customer Details
        </Heading>
        <Select placeholder="Type" w="25%">
          <option>All</option>
          <option>Adventure</option>
          <option>Entertainment</option>
          <option>Wellbeing</option>
        </Select>
      </HStack>
      <Table>
        <Thead>
          <Tr>
            <Th textAlign="center">BOOKING ID</Th>
            <Th textAlign="center">NAME</Th>
            <Th textAlign="center">PHONE</Th>
            <Th textAlign="center">EMAIL</Th>
            <Th textAlign="center">TYPE OF PACKAGE</Th>
            <Th textAlign="center">TIME/DATE</Th>
            <Th textAlign="center">NO. OF PEOPLE</Th>
            <Th textAlign="center">STATUS</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item.id}>
              <Td textAlign="center">{item.id}</Td>
              <Td textAlign="center">{item.name}</Td>
              <Td textAlign="center">{item.phone}</Td>
              <Td textAlign="center">{item.email}</Td>
              <Td textAlign="center">{item.type}</Td>
              <Td textAlign="center">{item.time}</Td>
              <Td textAlign="center">{item.people}</Td>
              <Td textAlign="center">{item.status}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {/**TODO: Make interactive */}
      <HStack w="100%" justifyContent="space-between" p={4}>
        <IconButton colorScheme="gray" icon={<FiChevronLeft />} />
        <ButtonGroup variant="outline" colorScheme="blue" spacing={8}>
          <Button variant="solid">1</Button>
          <Button>2</Button>
        </ButtonGroup>
        <IconButton colorScheme="blue" icon={<FiChevronRight />} />
      </HStack>
    </VStack>
  );
};

export default CustomerDetails;