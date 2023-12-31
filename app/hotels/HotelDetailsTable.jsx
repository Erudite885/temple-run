"use client";
import React from "react";
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

const data = [
  {
    id: "CH81281",
    firstName: "James",
    lastName: "Lee",
    address: "High Street",
    phone: "02738237",
    email: "randaom@email.com",
    position: "Hotel Manager",
  },
  {
    id: "CH81281",
    firstName: "James",
    lastName: "Lee",
    address: "High Street",
    phone: "02738237",
    email: "randaom@email.com",
    position: "Hotel Manager",
  },
  {
    id: "CH81281",
    firstName: "James",
    lastName: "Lee",
    address: "High Street",
    phone: "02738237",
    email: "randaom@email.com",
    position: "Hotel Manager",
  },
  {
    id: "CH81281",
    firstName: "James",
    lastName: "Lee",
    address: "High Street",
    phone: "02738237",
    email: "randaom@email.com",
    position: "Hotel Manager",
  },
  {
    id: "CH81281",
    firstName: "James",
    lastName: "Lee",
    address: "High Street",
    phone: "02738237",
    email: "randaom@email.com",
    position: "Hotel Manager",
  },
  {
    id: "CH81281",
    firstName: "James",
    lastName: "Lee",
    address: "High Street",
    phone: "02738237",
    email: "randaom@email.com",
    position: "Hotel Manager",
  },
  {
    id: "CH81281",
    firstName: "James",
    lastName: "Lee",
    address: "High Street",
    phone: "02738237",
    email: "randaom@email.com",
    position: "Hotel Manager",
  },
  {
    id: "CH81281",
    firstName: "James",
    lastName: "Lee",
    address: "High Street",
    phone: "02738237",
    email: "randaom@email.com",
    position: "Hotel Manager",
  },
];

const HotelDetailsTable = () => {
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
          Employee Details
        </Heading>
        <Select w="25%">
          <option>Cordis Hotel</option>
          <option>Ibis Hotel</option>
          <option>Eight</option>
        </Select>
      </HStack>
      <Table>
        <Thead>
          <Tr>
            <Th textAlign="center">EMPLOYEE ID</Th>
            <Th textAlign="center">FIRST NAME</Th>
            <Th textAlign="center">LAST NAME</Th>
            <Th textAlign="center">ADDRESS</Th>
            <Th textAlign="center">PHONE</Th>
            <Th textAlign="center">EMAIL</Th>
            <Th textAlign="center">POSITION</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item.id}>
              <Td textAlign="center">{item.id}</Td>
              <Td textAlign="center">{item.firstName}</Td>
              <Td textAlign="center">{item.lastName}</Td>
              <Td textAlign="center">{item.address}</Td>
              <Td textAlign="center">{item.phone}</Td>
              <Td textAlign="center">{item.email}</Td>
              <Td textAlign="center">{item.position}</Td>
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

export default HotelDetailsTable;
