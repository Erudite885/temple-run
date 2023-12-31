import { Box, HStack,VStack, Text, Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";

const NotificationPause = () => {

  return (
    <Box
      bg="white"
      p={4}
      m={4}
      boxShadow="md"
      borderRadius="10px"
      py="20px"
      px="50px"
      display="flex"
      justifyContent="center"
      alignItems="start"
    >
      {/* Left side of the card */}
      <Box flex="1" pr={4}>
        <Text fontWeight="bold" fontSize="xl">
          Pause all notifications
        </Text>
        <Text mt={2} width="380px" fontSize="14px">
          Temporarily suspend all incoming notifications to enjoy uninterrupted focus or during specific times. Resume alerts when you're ready to stay informed again
        </Text>
      </Box>

      {/* Right side of the card */}
      <Box
        py="50px"
      px="80px"
      display="flex"
      justifyContent="center"
      alignItems="start"
      >
  <VStack direction="column" display='flex' pl="5" align="start"> {/* Add align="start" to VBox */}
    <HStack spacing={6}>
      <CheckboxGroup colorScheme="blue">
        <Stack direction="row">
          <Checkbox id="checkbox1" value="Checkbox 1">
            15 Minutes
          </Checkbox>
          <Checkbox id="checkbox2" value="Checkbox 2">
            30 Minutes
          </Checkbox>
        </Stack>
      </CheckboxGroup>
    </HStack>

    <HStack direction="column" spacing={4}>
      <CheckboxGroup colorScheme="blue">
        <Stack direction="row">
          <Checkbox id="checkbox3" value="Checkbox 3">
            1 Hour
          </Checkbox>
          <Checkbox id="checkbox4" ml="2rem" value="Checkbox 4">
            5 Hours
          </Checkbox>
          <Checkbox id="checkbox5" ml="1.5rem" value="Checkbox 5">
            12 Hours
          </Checkbox>
        </Stack>
      </CheckboxGroup>            
    </HStack>
            
    <HStack spacing={3}>
      <CheckboxGroup colorScheme="blue">
        <Stack direction="row">
          <Checkbox id="checkbox6" value="Checkbox 6">
            1 Day
          </Checkbox>
          <Checkbox id="checkbox7" ml="2.5rem" value="Checkbox 7">
            3 Days
          </Checkbox>
          <Checkbox id="checkbox8" ml="2rem" value="Checkbox 8">
            5 Days
          </Checkbox>
        </Stack>
      </CheckboxGroup>            
    </HStack>
  </VStack>
</Box>

  </Box>
  );
};

export default NotificationPause;
