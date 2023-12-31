"use client";
import React from "react";
import { Table, Thead, Th, Tr, Td, Tbody } from "@chakra-ui/react";

const PackageLiveBookingTable = ({ tableData }) => {
  return (
    <>
      <Table size="lg">
        <Thead>
          <Tr>
            <Th textAlign="center">NUMBER</Th>
            <Th textAlign="center">NAME</Th>
            <Th textAlign="center">RESERVATION TIME</Th>
            <Th textAlign="center">PACKAGE BOOKED</Th>
            <Th textAlign="center">NO OF GUESTS</Th>
            <Th textAlign="center">CONTACT</Th>
            <Th textAlign="center">EMAIL</Th>
            <Th textAlign="center">STATUS</Th>
            <Th textAlign="center">NOTES</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((item) => (
            <Tr key={item.id}>
              <Td textAlign="center">{item.id}</Td>
              <Td>{item.name}</Td>
              <Td textAlign="center">{item.time}</Td>
              <Td textAlign="center">{item.packageBooked}</Td>
              <Td textAlign="center">{item.noGuest}</Td>
              <Td>{item.contact}</Td>
              <Td>{item.email}</Td>
              <Td>{item.status}</Td>
              <Td>{item.notes}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default PackageLiveBookingTable;