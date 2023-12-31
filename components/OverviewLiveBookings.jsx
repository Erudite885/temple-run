"use client";
import {
  VStack,
  HStack,
  Heading,
  Button,
  useColorModeValue,
  Table,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
  Select,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { FaArrowRotateRight } from "react-icons/fa6";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const sampleData = [
  { services: "Hotels", today: 7, tomorrow: 2, week: 9 },
  { services: "Restaurants", today: 2, tomorrow: 12, week: 26 },
  { services: "Packages", today: 6, tomorrow: 2, week: 15 },
];

const tableInfo = [
  {
    bookingNumber: "MB87267",
    name: "Vishal UmaShank",
    phone: "021 1384 9922",
    email: "vishal@megatransact.com",
    checkIn: "9:30 AM - 21 Nov 2023",
    checkOut: "9:30 AM - 21 Nov 2023",
    adults: 4,
    children: 3,
    room: "Twin Room 422",
    notes: "early booking",
    status: "Checked in",
  },
  {
    bookingNumber: "MB87267",
    name: "Vishal UmaShank",
    phone: "021 1384 9922",
    email: "vishal@megatransact.com",
    checkIn: "9:30 AM - 21 Nov 2023",
    checkOut: "9:30 AM - 21 Nov 2023",
    adults: 4,
    children: 3,
    room: "Queen Room",
    notes: "-",
    status: "Cancel Request",
  },
  {
    bookingNumber: "MB87267",
    name: "Vishal UmaShank",
    phone: "021 1384 9922",
    email: "vishal@megatransact.com",
    checkIn: "9:30 AM - 21 Nov 2023",
    checkOut: "9:30 AM - 21 Nov 2023",
    adults: 4,
    children: 0,
    room: "Twin Room 422",
    notes: "Extra Matress",
    status: "Checked in",
  },
  {
    bookingNumber: "MB87267",
    name: "Vishal UmaShank",
    phone: "021 1384 9922",
    email: "vishal@megatransact.com",
    checkIn: "9:30 AM - 21 Nov 2023",
    checkOut: "9:30 AM - 21 Nov 2023",
    adults: 4,
    children: 3,
    room: "Twin Room 422",
    notes: "early booking",
    status: "Checked in",
  },
];

const OverviewLiveBookings = () => {
  const bg = useColorModeValue("white", "whiteAlpha.200");

  return (
    <VStack w="full" p={5} spacing={6}>
      {/** Summary card */}
      <VStack w="100%" bg={bg} borderRadius="xl" px={8} py={6} spacing={4}>
        {/** Section Header */}
        <HStack w="full" justify="space-between">
          <Heading size="md">Live Bookings</Heading>
          <Button
            rightIcon={<FaArrowRotateRight />}
            border="1px"
            borderColor="blue.400"
            bgColor={bg}
          >
            Refresh
          </Button>
        </HStack>
        {/** Table Info */}
        <Table>
          <Thead>
            <Tr>
              <Th>SERVICES</Th>
              <Th textAlign="center">TODAY</Th>
              <Th textAlign="center">TOMORROW</Th>
              <Th textAlign="center">WEEK</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sampleData.map((item) => (
              <Tr key={item.services}>
                <Td>{item.services} Live Booking</Td>
                <Td textAlign="center">{item.today}</Td>
                <Td textAlign="center">{item.tomorrow}</Td>
                <Td textAlign="center">{item.week}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
      {/** Specific card */}
      <VStack w="100%" bg={bg} borderRadius="xl" px={8} pt={6} spacing={5}>
        {/** Section header */}
        <HStack w="100%" justify="space-between">
          <Heading size="md">Pullman Hotel Live Bookings</Heading>
          <HStack w="25%">
            <Select>
              <option>Pullman Hotel</option>
            </Select>
            <Select>
              <option>Filter</option>
            </Select>
          </HStack>
        </HStack>

        {/** Table */}
        <Table size="sm">
          <Thead>
            <Tr>
              <Th textAlign="center">BOOKING NO.</Th>
              <Th textAlign="center">NAME</Th>
              <Th textAlign="center">PHONE</Th>
              <Th textAlign="center">EMAIL</Th>
              <Th textAlign="center">CHECK-IN TIME/DATE</Th>
              <Th textAlign="center">CHECK-OUT TIME/DATE</Th>
              <Th textAlign="center">ADULT(S)</Th>
              <Th textAlign="center">CHILDREN(S)</Th>
              <Th textAlign="center">ROOM</Th>
              <Th textAlign="center">NOTES</Th>
              <Th textAlign="center">STATUS</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableInfo.map((item) => (
              <Tr key={item.bookingNumber}>
                <Td textAlign="center">{item.bookingNumber}</Td>
                <Td textAlign="center">{item.name}</Td>
                <Td textAlign="center">{item.phone}</Td>
                <Td textAlign="center">{item.email}</Td>
                <Td textAlign="center">{item.checkIn}</Td>
                <Td textAlign="center">{item.checkOut}</Td>
                <Td textAlign="center">{item.adults}</Td>
                <Td textAlign="center">{item.children}</Td>
                <Td textAlign="center">{item.room}</Td>
                <Td textAlign="center">{item.notes}</Td>
                <Td textAlign="center">{item.status}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
      {/** Table controls */}
      {/**TODO: Make interactive */}
      <HStack w="100%" justifyContent="space-between" p={4}>
        <IconButton bgColor="gray.600" icon={<FiChevronLeft />} color="white" />
        <ButtonGroup variant="outline" colorScheme="blue" spacing={8}>
          <Button variant="solid">1</Button>
          <Button>2</Button>
        </ButtonGroup>
        <IconButton colorScheme="blue" icon={<FiChevronRight />} />
      </HStack>
    </VStack>
  );
};

export default OverviewLiveBookings;
