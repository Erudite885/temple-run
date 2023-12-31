import React from "react";
import {
  Center,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const PackagesTable = ({ title }) => {
  return (
    <TableContainer mt={10}>
      <Table variant="striped" colorScheme="white">
        <Thead>
          <Tr>
            <Th>Booking No</Th>
            <Th>Time</Th>
            <Th>Date</Th>
            <Th>Name</Th>
            <Th>Address</Th>
            <Th>Phone No</Th>
            <Th>No of People</Th>
            <Th>Type of Package</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
          <Tbody>
            <Tr>
              <Td>MB 10214</Td>
              <Td>09:00</Td>
              <Td>12/12/23</Td>
              <Td>John</Td>
              <Td>Auckland</Td>
              <Td>0211223445</Td>
              <Td>4</Td>
              <Td>Adventure</Td>
              <Td>Booked</Td>
            </Tr>
            <Tr>
              <Td>MB 10214</Td>
              <Td>09:00</Td>
              <Td>12/12/23</Td>
              <Td>John</Td>
              <Td>Auckland</Td>
              <Td>0211223445</Td>
              <Td>4</Td>
              <Td>Adventure</Td>
              <Td>Booked</Td>
            </Tr>
            <Tr>
              <Td>MB 10214</Td>
              <Td>09:00</Td>
              <Td>12/12/23</Td>
              <Td>John</Td>
              <Td>Auckland</Td>
              <Td>0211223445</Td>
              <Td>4</Td>
              <Td>Adventure</Td>
              <Td>Booked</Td>
            </Tr>
            <Tr>
              <Td>MB 10214</Td>
              <Td>09:00</Td>
              <Td>12/12/23</Td>
              <Td>John</Td>
              <Td>Auckland</Td>
              <Td>0211223445</Td>
              <Td>4</Td>
              <Td>Adventure</Td>
              <Td>Booked</Td>
            </Tr>
            <Tr>
              <Td>MB 10214</Td>
              <Td>09:00</Td>
              <Td>12/12/23</Td>
              <Td>John</Td>
              <Td>Auckland</Td>
              <Td>0211223445</Td>
              <Td>4</Td>
              <Td>Adventure</Td>
              <Td>Booked</Td>
            </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PackagesTable;