"use client";
import React from "react";
import { Table, Thead, Th, Tr, Td, Tbody } from "@chakra-ui/react";

const HotelLiveBookingTable = ({ tableData }) => {
  return (
    <>
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
          {tableData.map((item) => (
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
    </>
  );
};

export default HotelLiveBookingTable;
