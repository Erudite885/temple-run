// Import necessary dependencies
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem, Table, Thead, Tbody, Tr, Th, Td 
} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon, AddIcon } from '@chakra-ui/icons';
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlinePeopleOutline } from 'react-icons/md';
import { RiDeleteBin6Line } from "react-icons/ri";

// Faq component
const Faq = () => {
  return (
    <Container maxW="1200px" mx={2} py={4}>
      <Heading as="h6" fontSize='17px' mb={6} textAlign="start">
        Categories
      </Heading>

      {/* Section 1 */}
      <Flex justify="space-between" direction={{ base: 'column', md: 'row' }} align="start" mb={8}>
        {/* Left side with buttons */}
        <Flex direction="row" mb={{ base: 4, md: 0 }} >
          <Button py={6} colorScheme="blue" mr={3} leftIcon={<AddIcon />}>
            New Category
          </Button>
          <Button py={6} bg="white" color="#707070" mr={3} leftIcon={<MdOutlinePeopleOutline />}>
            Make Public
          </Button>
          <Button py={6} bg="white" color="#707070" mr={3} leftIcon={<IoPersonOutline />}>
            Make Internal
          </Button>
          <Button py={6} bg="white" color="#707070" leftIcon={<RiDeleteBin6Line />}>
            Delete
          </Button>
        </Flex>

        {/* Right side with dropdown and search input */}
        <Flex direction="row" align="center">
          {/* Dropdown menu */}
          <Menu>
            <MenuButton py={6} bg="white" color="#707070" as={Button} rightIcon={<ChevronDownIcon />} variant="outline">
              Options
            </MenuButton>
            <MenuList>
              <MenuItem>Action 1</MenuItem>
              <MenuItem>Action 2</MenuItem>
              <MenuItem>Action 3</MenuItem>
            </MenuList>
          </Menu>

          {/* Search input */}
          <InputGroup bg="white" color="#707070" ml={4} width={{ base: '100%', md: 'auto' }}>
            <Input py={6} placeholder="Search..." />
            <InputRightElement pt={2}>
              <IconButton
                icon={<SearchIcon />}
                variant="ghost"
                aria-label="Search"
                size="sm"
              />
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Flex>

      {/* Section 2 */}
      <Flex justify="space-between" p={4} height="599px">
        {/* Left side */}
        <Box bg="white" borderRadius='10px' p={8} width="301px" mr='24px' >
          {/* Up part */}
          <Box borderBottom="1px" borderColor="#2D8CFF" textAlign="center" pb={4}>
            <Heading as="h3"  fontSize="xl">
              Users
            </Heading>
            
          </Box>

          {/* Down part */}
          <Box>
            {/* List of users */}
            <Flex direction="column">
              {/* User 1 */}
              <Flex justify="space-between" borderBottom="1px" borderColor="#E2E8F0" p={4}>
                {/* Left section with rounded profile image */}
                <Box borderRadius="full" overflow="hidden" boxSize="40px" bg="gray.300">
                  {/* Add image or icon here */}
                </Box>

                {/* Right section with name, available, and date */}
                <Flex direction="column" ml={4}>
                                  <Text fontWeight="bold">User 1</Text>
                                  <Text fontSize="13px">
              Text centered goes here.
            </Text>
                                  <Flex gap={3}>
                                       <Text>Available</Text>
                  <Text>Date</Text>
                 </Flex>
                </Flex>
              </Flex>

              {/* User 2 (similar structure as User 1) */}
                          {/* ... */}
                 <Flex justify="space-between" borderBottom="1px" borderColor="#E2E8F0" p={4}>
                {/* Left section with rounded profile image */}
                <Box borderRadius="full" overflow="hidden" boxSize="40px" bg="gray.300">
                  {/* Add image or icon here */}
                </Box>

                {/* Right section with name, available, and date */}
                <Flex direction="column" ml={4}>
                                  <Text fontWeight="bold">User 2</Text>
                                  <Text fontSize="13px">
              Text centered goes here.
            </Text>
                                  <Flex gap={3}>
                                       <Text>Available</Text>
                  <Text>Date</Text>
                 </Flex>
                </Flex>
              </Flex>
              {/* User 3 (similar structure as User 1) */}
                          {/* ... */}
             <Flex justify="space-between" borderBottom="1px" borderColor="#E2E8F0" p={4}>
                {/* Left section with rounded profile image */}
                <Box borderRadius="full" overflow="hidden" boxSize="40px" bg="gray.300">
                  {/* Add image or icon here */}
                </Box>

                {/* Right section with name, available, and date */}
                <Flex direction="column" ml={4}>
                                  <Text fontWeight="bold">User 3</Text>
                                  <Text fontSize="13px">
              Text centered goes here.
            </Text>
                                  <Flex gap={3}>
                                       <Text>Available</Text>
                  <Text>Date</Text>
                 </Flex>
                </Flex>
              </Flex>

              {/* User 4 (similar structure as User 1) */}
                          {/* ... */}
                       <Flex justify="space-between" borderBottom="1px" borderColor="#E2E8F0" p={4}>
                {/* Left section with rounded profile image */}
                <Box borderRadius="full" overflow="hidden" boxSize="40px" bg="gray.300">
                  {/* Add image or icon here */}
                </Box>

                {/* Right section with name, available, and date */}
                <Flex direction="column" ml={4}>
                                  <Text fontWeight="bold">User 4</Text>
                                  <Text fontSize="13px">
              Text centered goes here.
            </Text>
                                  <Flex gap={3}>
                                       <Text>Available</Text>
                  <Text>Date</Text>
                 </Flex>
                </Flex>
              </Flex>
                          
            </Flex>
          </Box>
        </Box>

        {/* Right side */}
        <Box bg="white" borderRadius='10px' p={8} width="837px" ml="24px">
          {/* Up part */}
          <Flex mb={4}>
            <Button border='0px' borderLeftRadius="12px" borderRightRadius="0px" colorScheme="blue">Copy</Button>
            <Button border='0px' borderRadius="0" colorScheme="blue">PDF</Button>
            <Button border='0px' borderRadius="0" colorScheme="blue">Excel</Button>
            <Button border='0px' borderRadius="0" colorScheme="blue">CSV</Button>
            <Button borderRightRadius="12px" borderLeftRadius="0px" colorScheme="blue">Print</Button>
          </Flex>

          {/* Down part */}
          <Box overflowY="scroll" maxHeight="450px">
            <Table variant="striped" colorScheme="gray">
            <Thead>
              <Tr>
                <Th>DATE</Th>
                <Th>QUERY</Th>
                <Th>ANSWER</Th>
                <Th>LAST UPDATED</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* Row 1 */}
              <Tr>
                <Td>Row 1, Column 1</Td>
                <Td>Row 1, Column 2</Td>
                <Td>Row 1, Column 3</Td>
                <Td>Row 1, Column 4</Td>
              </Tr>

              {/* Row 2 */}
              <Tr>
                <Td>Row 2, Column 1</Td>
                <Td>Row 2, Column 2</Td>
                <Td>Row 2, Column 3</Td>
                <Td>Row 2, Column 4</Td>
              </Tr>

                          {/* ... Repeat for Rows 3 to 10 */}
                          
                          <Tr>
                <Td>Row 2, Column 1</Td>
                <Td>Row 2, Column 2</Td>
                <Td>Row 2, Column 3</Td>
                <Td>Row 2, Column 4</Td>
                          </Tr>
                          
                          <Tr>
                <Td>Row 2, Column 1</Td>
                <Td>Row 2, Column 2</Td>
                <Td>Row 2, Column 3</Td>
                <Td>Row 2, Column 4</Td>
              </Tr>
              
                          <Tr>
                <Td>Row 2, Column 1</Td>
                <Td>Row 2, Column 2</Td>
                <Td>Row 2, Column 3</Td>
                <Td>Row 2, Column 4</Td>
              </Tr><Tr>
                <Td>Row 2, Column 1</Td>
                <Td>Row 2, Column 2</Td>
                <Td>Row 2, Column 3</Td>
                <Td>Row 2, Column 4</Td>
              </Tr><Tr>
                <Td>Row 2, Column 1</Td>
                <Td>Row 2, Column 2</Td>
                <Td>Row 2, Column 3</Td>
                <Td>Row 2, Column 4</Td>
              </Tr><Tr>
                <Td>Row 2, Column 1</Td>
                <Td>Row 2, Column 2</Td>
                <Td>Row 2, Column 3</Td>
                <Td>Row 2, Column 4</Td>
              </Tr>
            </Tbody>
          </Table>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Faq;
