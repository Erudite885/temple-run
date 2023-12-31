import React from 'react';
import {
  Box,
  Flex,
  Text,
  Select,
} from '@chakra-ui/react';

const FontSelectorCard = () => {
  // Sample font options for the dropdown menus
  const fontSizes = [10, 12, 14, 16, 18];
  const languages = ['English', 'Spanish', 'French', 'German', 'Japanese'];

  return (
    <Box
      bg="white"
      p={4}
      m={4}
      boxShadow="md"
      borderRadius="10px"
      display="flex"
      alignItems="center"
    >
      {/* Left side of the card */}
      <Box flex="1" pr={4}>
        <Text fontWeight="bold" fontSize="md" mb={2}>
          Font Size
        </Text>
        <Text fontSize="xs" mb={2}>
          Control the text size on your dashboard for improved readability.
        </Text>
        <Text fontWeight="bold" fontSize="md" mt={4} mb={2}>
          Language
        </Text>
        <Text fontSize="xs" mb={4}>
          Select the language for your dashboard.
        </Text>
      </Box>

      {/* Right side of the card */}
      <Flex flex="2" justify="flex-end" alignItems='center'>
        {/* Side one on the right */}
        <Flex direction="column" mr={4}>
          <Select placeholder="Choose font size" mb={4}>
            {fontSizes.map((size, index) => (
              <option key={index} value={size}>
                {size}px
              </option>
            ))}
          </Select>
          <Select placeholder="Choose Language">
            {languages.map((language, index) => (
              <option key={index} value={language}>
                {language}
              </option>
            ))}
          </Select>
        </Flex>

        {/* Side two on the right */}
        <Box w="246px" h="166px" border="1px" borderColor="gray.300" borderRadius="10px" textAlign="center" p="15px" gap="21px" display="flex"
      flexDir="column"
      align="center">
          <Text>Text Size Preview</Text>
          <Text fontFamily="Manrope" fontSize="12px" fontWeight="bold">
            Main text will look like this. <br/> 123456789
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default FontSelectorCard;
