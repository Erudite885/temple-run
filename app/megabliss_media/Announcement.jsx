// Import necessary modules and components
import { Box, Flex, Text, Input, Textarea, Switch, Tag, Button } from '@chakra-ui/react';
import { BsArrowsAngleExpand } from 'react-icons/bs';
import { FiBold, FiItalic, FiMenu, FiLink2 } from 'react-icons/fi';

const Announcement = () => {
  return (
    <Box p={4} m={4} boxShadow="md" borderRadius="10px" bg="white">
      {/* Title */}
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        Announcement
      </Text>

      {/* Description Text */}
      <Text mb={4}>Fill in the subject and body of the announcement and press send. Users will receive notifications on their phones.</Text>

      {/* Subject Input */}
      <Input placeholder="Subject" size="md" mb={4} />

      {/* Announcement Body Textarea */}
      <Box position="relative" mb={4}>
        <Textarea placeholder="Enter the announcement body" height="450px" />

        {/* Formatting Icons and Expand Icon */}
        <Flex
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          bg="#F0F0F0"
          // borderTopRadius="md"
          borderBottomRadius="md"
          // border="1px solid gray"
        >
          <Box display="flex" flexDirection="row">
            {/* Each icon has a border right */}
            <Box p={6} px={12} borderRight="1px solid #ccc" >
              <FiBold size="20px" mx={2} />
            </Box>
            <Box py={6} px={12} borderRight="1px solid #ccc" >
              <FiItalic size="20px" mx={2} />
            </Box>
            <Box p={6} px={12} borderRight="1px solid #ccc" >
              <FiMenu size="20px" mx={2} />
            </Box>
            <Box p={6} px={12} borderRight="1px solid #ccc" >
              <FiLink2 size="20px" mx={2} />
            </Box>
          </Box>

          {/* <Box display="flex" flexDirection="row" ml="auto" borderLeft="1px solid gray">
            {/* Expand icon has no border right 
            <BsArrowsAngleExpand size="20px" mx={2} />
          </Box> */}
        </Flex>
      </Box>

      {/* Emergency Switch */}
      <Box display="flex" alignItems="center" mb={4}>
        <Switch id="emergency" />
        <Text ml={2}>Is this an emergency notification?</Text>
        <Tag ml={2} backgroundColor="red" color='white' borderRadius="full">
          ?
        </Tag>
      </Box>

      {/* Announce Button */}
      <Box display="flex" justifyContent="center">
        <Button px={8} py={4} bg="#2D8CFF" color="white" borderRadius="10px">
          Announce
        </Button>
      </Box>
    </Box>
  );
};

export default Announcement;
