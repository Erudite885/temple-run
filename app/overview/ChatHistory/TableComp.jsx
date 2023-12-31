import { Table, Thead, Tbody, Stack, Tr, Th, Td, TableContainer, Checkbox } from "@chakra-ui/react";
import TbodyComp from "./TbodyComp";

function TableComp() {
  return (
    <TableContainer>
      <Table variant="simple" width="981px">
        <Thead background="#F7F9FC">
          <Tr>
            <Th>
              <Stack spacing={5} direction="row">
                <Checkbox colorScheme="red" defaultChecked />
              </Stack>
            </Th>
            <Th textAlign="center">CASE ID</Th>
            <Th textAlign="center">NAME</Th>
            <Th textAlign="center">DOB</Th>
            <Th textAlign="center">TITLE</Th>
            <Th textAlign="center">STATUS</Th>
          </Tr>
        </Thead>

        <TbodyComp />
      </Table>
    </TableContainer>
  );
}

export default TableComp;