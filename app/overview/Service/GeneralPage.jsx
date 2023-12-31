// components/GeneralPage.js
import React from 'react';
import { 
    Box, 
    Flex, 
    IconButton, 
    Text, 
    HStack, 
    VStack,
    Select,
    Heading,
    Table,
    Tr,
    Thead,
    Th,
    Tbody,
    useColorMode,
} from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import GeneralService from './GeneralService';

const GeneralPage = ({ serviceData }) => {
  const pageSize = 10; // Number of service details per page
  const [currentPage, setCurrentPage] = React.useState(1);

  const totalPages = Math.ceil(serviceData.length / pageSize);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const visibleDetails = serviceData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const isDisabledPrev = currentPage === 1;
  const isDisabledNext = currentPage === totalPages;

  const { colorMode } = useColorMode();

  return (
    <VStack
        m={5}
        pt={4}
        borderRadius="lg"
        flex ={1}
        bg={colorMode === "light" ? "white" : "whiteAlpha.200"}
     >
        <HStack w="100%" justifyContent="space-evenly" p={4}>
            <Heading w="100%" pl={4} size="md">
                Service Provider Details
            </Heading>
        <Select placeholder="Filter" w="25%">
          <option>Service Provider No.</option>
          <option>Businuss Name</option>
          <option>Service Provider Phone No.</option>
          <option>Service Provider Email</option>
          <option>Current Booking</option>
          <option>Rating</option>
        </Select>
      </HStack>

      <Table>
        <Thead>
          <Tr>
            <Th textAlign="center">SERVICE PROVIDER NO.</Th>
            <Th textAlign="center">BUSINESS NAME</Th>
            <Th textAlign="center">PHONE</Th>
            <Th textAlign="center">EMAIL</Th>
            <Th textAlign="center">CURRENT BOOKINGS</Th>
            <Th textAlign="center">RATINGS</Th>
          </Tr>
        </Thead>
        <Tbody>
            {visibleDetails.map((overview, index) => (
                <GeneralService
                    key={index}
                    {...overview}
                />
            ))}
        </Tbody>
      </Table>
     
      <HStack w="100%" justifyContent="space-between" p={4}>
        <IconButton
          icon={<ArrowBackIcon />}
          onClick={handlePrevPage}
          isDisabled={isDisabledPrev}
          bgColor={isDisabledPrev ? 'gray.900' : '#2D8CFF'}
          color="whitesmoke"
          _hover={!isDisabledPrev ? { bgColor: '#2D8CFF' } : { bgColor: 'gray.200' }}
        />
        <HStack>
          {Array.from({ length: totalPages }, (_, index) => (
            <IconButton
              key={index}
              icon={<Text>{index + 1}</Text>}
              onClick={() => setCurrentPage(index + 1)}
              bgColor={currentPage === index + 1 ? '#2D8CFF' : 'gray.400'}
              color="whitesmoke"
              _hover={{ bgColor: '#2D8CFF' }}
              ml={2}
            />
          ))}
        </HStack>
        <IconButton
          icon={<ArrowForwardIcon />}
          onClick={handleNextPage}
          isDisabled={isDisabledNext}
          bgColor={isDisabledNext ? 'gray.800' : '#2D8CFF'}
          color="whitesmoke"
          _hover={!isDisabledNext ? { bgColor: '#2D8CFF' } : { bgColor: 'gray.200' }}
        />
      </HStack>
    </VStack>
  );
};

export default GeneralPage;
