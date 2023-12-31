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
  InputGroup, InputLeftElement, InputRightElement, Input
} from "@chakra-ui/react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import {CalendarIcon} from "@chakra-ui/icons";
import React from "react";

const data = [
  {
    id: "HB8769",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    upcoming: "Huka Lodge",
    date: "DD/MM/YYYY",
    lastBookings: "Sky Tower Bungee"
  },
  {
    id: "HB8769",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    upcoming: "Huka Lodge",
    date: "DD/MM/YYYY",
    lastBookings: "Sky Tower Bungee"
  },
  {
    id: "HB8769",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    upcoming: "Huka Lodge",
    date: "DD/MM/YYYY",
    lastBookings: "Sky Tower Bungee"
  },
  {
    id: "HB8769",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    upcoming: "Huka Lodge",
    date: "DD/MM/YYYY",
    lastBookings: "Sky Tower Bungee"
  },
  {
    id: "HB8769",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    upcoming: "Huka Lodge",
    date: "DD/MM/YYYY",
    lastBookings: "Sky Tower Bungee"
  },
  {
    id: "HB8769",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    upcoming: "Huka Lodge",
    date: "DD/MM/YYYY",
    lastBookings: "Sky Tower Bungee"
  },
  {
    id: "HB8769",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    upcoming: "Huka Lodge",
    date: "DD/MM/YYYY",
    lastBookings: "Sky Tower Bungee"
  },
  {
    id: "HB8769",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    upcoming: "Huka Lodge",
    date: "DD/MM/YYYY",
    lastBookings: "Sky Tower Bungee"
  },
  {
    id: "HB8769",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    upcoming: "Huka Lodge",
    date: "DD/MM/YYYY",
    lastBookings: "Sky Tower Bungee"
  },
  {
    id: "HB8769",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    upcoming: "Huka Lodge",
    date: "DD/MM/YYYY",
    lastBookings: "Sky Tower Bungee"
  },
  {
    id: "HB8769",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    upcoming: "Huka Lodge",
    date: "DD/MM/YYYY",
    lastBookings: "Sky Tower Bungee"
  },
  {
    id: "HB8769",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    upcoming: "Huka Lodge",
    date: "DD/MM/YYYY",
    lastBookings: "Sky Tower Bungee"
  },
  {
    id: "HB8769",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    upcoming: "Huka Lodge",
    date: "DD/MM/YYYY",
    lastBookings: "Sky Tower Bungee"
  },
  {
    id: "HB8769",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    upcoming: "Huka Lodge",
    date: "DD/MM/YYYY",
    lastBookings: "Sky Tower Bungee"
  },
  {
    id: "HB8769",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    upcoming: "Huka Lodge",
    date: "DD/MM/YYYY",
    lastBookings: "Sky Tower Bungee"
  },
  {
    id: "HB8769",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    upcoming: "Huka Lodge",
    date: "DD/MM/YYYY",
    lastBookings: "Sky Tower Bungee"
  },
  {
    id: "HB8769",
    name: "James Lee",
    phone: "021 888 999",
    email: "name@email.com",
    upcoming: "Huka Lodge",
    date: "DD/MM/YYYY",
    lastBookings: "Sky Tower Bungee"
  },
];

const Customer = () => {
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
        <InputGroup w="25%">
            <Input placeholder="From: DD/MM/YY"/>
            <InputRightElement pointerEvents="none" children={<CalendarIcon color="gray.300" />} />
        </InputGroup>
        <InputGroup w="25%">
            <Input placeholder="To: DD/MM/YY"/>
            <InputRightElement pointerEvents="none" children={<CalendarIcon color="gray.300" />} />
        </InputGroup>
        <Select placeholder="Status" w="25%">
          <option>Filter</option>
          <option>Customer No.</option>
          <option>Customer Name</option>
          <option>Customer Phone No.</option>
          <option>Customer Email</option>
          <option>Upcoming Booking</option>
          <option>Date</option>
        </Select>
      </HStack>
      <Table>
        <Thead>
          <Tr>
            <Th textAlign="center">BOOKING ID</Th>
            <Th textAlign="center">NAME</Th>
            <Th textAlign="center">PHONE</Th>
            <Th textAlign="center">EMAIL</Th>
            <Th textAlign="center">UPCOMING BOOKING</Th>
            <Th textAlign="center">DATE</Th>
            <Th textAlign="center">LAST BOOKING</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item.id}>
              <Td textAlign="center">{item.id}</Td>
              <Td textAlign="center">{item.name}</Td>
              <Td textAlign="center">{item.phone}</Td>
              <Td textAlign="center">{item.email}</Td>
              <Td textAlign="center">{item.upcoming}</Td>
              <Td textAlign="center">{item.date}</Td>
              <Td textAlign="center">{item.lastBookings}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <HStack w="100%" justifyContent="space-between" p={4}>
        <IconButton colorScheme="gray" icon={<FiChevronLeft />} />
        <ButtonGroup variant="outline" colorScheme="blue" spacing={8}>
          <Button variant="solid">1</Button>
          <Button>2</Button>
          <Button>3</Button>
        </ButtonGroup>
        <IconButton colorScheme="blue" icon={<FiChevronRight />} />
      </HStack>
    </VStack>
  );
};

export default Customer;