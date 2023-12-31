import { Box, Text, Flex, Button, Icon } from "@chakra-ui/react";
import { DeleteIcon, ArrowForwardIcon, ArrowBackIcon } from "react-icons/md";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Stack,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
function ChatHistory() {
  return (
    <Box width="1163px" height="654px" fontFamily="Manrope">
      <Flex margin="20px" justify="space-between">
        <Flex justify="space-between" width="202px">
          <Text fontSize="17px" fontWeight="700">
            Chat History
          </Text>
          <div>
            <Icon as={DeleteIcon} />
          </div>
        </Flex>

        <Box border="1px solid black">
          <input type="search" placeholder="search..." />
        </Box>
      </Flex>
      <Flex>
        <Sidebar />
        <TableComp />
      </Flex>
      <Pagination />
    </Box>
  );
}

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

function TbodyComp() {
  return (
    <Tbody>
      <Tr>
        <Td>
          <Stack spacing={5} direction="row">
            <Checkbox colorScheme="red" defaultChecked />
          </Stack>
        </Td>
        <Td textAlign="center">66528</Td>
        <Td textAlign="center">Yasar</Td>
        <Td textAlign="center">DD/MM/YY</Td>
        <Td textAlign="center">mohammad.yasar@megatransact.com</Td>
        <Td textAlign="center">coming on monday</Td>
      </Tr>
      <Tr>
        <Td>
          <Stack spacing={5} direction="row">
            <Checkbox colorScheme="red" defaultChecked />
          </Stack>
        </Td>
        <Td textAlign="center">8228373</Td>
        <Td textAlign="center">Jospin</Td>
        <Td textAlign="center">DD/MM/YY</Td>
        <Td textAlign="center">Jospin@megatransact.com</Td>
        <Td textAlign="center">coming on monday</Td>
      </Tr>
      <Tr>
        <Td>
          <Stack spacing={5} direction="row">
            <Checkbox colorScheme="red" defaultChecked />
          </Stack>
        </Td>
        <Td textAlign="center">88393</Td>
        <Td textAlign="center">J Aug</Td>
        <Td textAlign="center">DD/MM/YY</Td>
        <Td textAlign="center">mohammad.yasar@megatransact.com</Td>
        <Td textAlign="center">coming on monday</Td>
      </Tr>
      <Tr>
        <Td>
          <Stack spacing={5} direction="row">
            <Checkbox colorScheme="red" defaultChecked />
          </Stack>
        </Td>
        <Td textAlign="center">88922</Td>
        <Td textAlign="center">Rehyan</Td>
        <Td textAlign="center">DD/MM/YY</Td>
        <Td textAlign="center">mohammad.yasar@megatransact.com</Td>
        <Td textAlign="center">coming on monday</Td>
      </Tr>
      <Tr>
        <Td>
          <Stack spacing={5} direction="row">
            <Checkbox colorScheme="red" defaultChecked />
          </Stack>
        </Td>
        <Td textAlign="center">993383</Td>
        <Td textAlign="center">Nathan</Td>
        <Td textAlign="center">DD/MM/YY</Td>
        <Td textAlign="center">mohammad.yasar@megatransact.com</Td>
        <Td textAlign="center">coming on monday</Td>
      </Tr>
      <Tr>
        <Td>
          <Stack spacing={5} direction="row">
            <Checkbox colorScheme="red" defaultChecked />
          </Stack>
        </Td>
        <Td textAlign="center">88933</Td>
        <Td textAlign="center">Christy</Td>
        <Td textAlign="center">DD/MM/YY</Td>
        <Td textAlign="center">mohammad.yasar@megatransact.com</Td>
        <Td textAlign="center">coming on monday</Td>
      </Tr>
      <Tr>
        <Td>
          <Stack spacing={5} direction="row">
            <Checkbox colorScheme="red" defaultChecked />
          </Stack>
        </Td>
        <Td textAlign="center">773836</Td>
        <Td textAlign="center">Karim</Td>
        <Td textAlign="center">DD/MM/YY</Td>
        <Td textAlign="center">mohammad.yasar@megatransact.com</Td>
        <Td textAlign="center">coming on monday</Td>
      </Tr>
    </Tbody>
  );
}

function Pagination() {
  return (
    <Flex justify="space-between" margin="20px">
      <Button padding="0px 10px" background="#707070" color="white">
        <Icon as={ArrowForwardIcon} />
      </Button>
      <div>
        <Button
          padding="0px 10px"
          background="#2D8CFF"
          color="white"
          marginRight="10px"
        >
          1
        </Button>
        <Button
          padding="0px 10px"
          background="transparent"
          color="#2D8CFF"
          border="1px solid #2D8CFF"
          marginLeft="10px"
        >
          2
        </Button>
      </div>
      <Button padding="0px 10px" background="#2D8CFF" color="white">
        <Icon as={ArrowBackIcon} />
      </Button>
    </Flex>
  );
}

function Sidebar() {
  return (
    <Flex flexDirection="column" alignItems="flex-start">
      <Box width="182px">
        <Text
          background="#F7F9FC"
          padding=" 8.98px 21.553px 8.98px 25px"
          color="#F7F9FC"
        >
          ----
        </Text>
        <Text padding="8.98px 25px">All</Text>
        <Text padding="8.98px 25px">Customers</Text>
        <Text padding="8.98px 25px">Service Providers</Text>
        <Text padding="8.98px 25px">Deleted Chats</Text>
      </Box>
    </Flex>
  );
}

export default ChatHistory;
