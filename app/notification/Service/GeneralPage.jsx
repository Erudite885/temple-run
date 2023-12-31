// components/GeneralPage.js
import React from 'react';
import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import GeneralNotification from './GeneralNotification';

const GeneralPage = ({ notificationsData }) => {
  const pageSize = 6; // Number of notifications per page
  const [currentPage, setCurrentPage] = React.useState(1);

  const totalPages = Math.ceil(notificationsData.length / pageSize);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const visibleNotifications = notificationsData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const isDisabledPrev = currentPage === 1;
  const isDisabledNext = currentPage === totalPages;

  return (
    <Box w="80%" mx="auto" mt={8}>
      {visibleNotifications.map((notification, index) => (
        <GeneralNotification
          key={index}
          {...notification}
          borderBottom={index < visibleNotifications.length - 1}
        />
      ))}
      <Flex mt={4} justify="space-between" align="center">
        <IconButton
          icon={<ArrowBackIcon />}
          onClick={handlePrevPage}
          isDisabled={isDisabledPrev}
          bgColor={isDisabledPrev ? 'gray.900' : '#2D8CFF'}
          color="whitesmoke"
          _hover={!isDisabledPrev ? { bgColor: '#2D8CFF' } : { bgColor: 'gray.200' }}
        />
        <Flex>
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
        </Flex>
        <IconButton
          icon={<ArrowForwardIcon />}
          onClick={handleNextPage}
          isDisabled={isDisabledNext}
          bgColor={isDisabledNext ? 'gray.800' : '#2D8CFF'}
          color="whitesmoke"
          _hover={!isDisabledNext ? { bgColor: '#2D8CFF' } : { bgColor: 'gray.200' }}
        />
      </Flex>
    </Box>
  );
};

export default GeneralPage;
