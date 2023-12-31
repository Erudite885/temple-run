import { Box, Flex, Text, Radio, RadioGroup, FormControl, FormLabel, Switch } from "@chakra-ui/react";

const SettingsCustomizeOptions = () => {
  const notificationOptions = [
    "Customer Review",
    "Email",
    "Newsletters",
    "Reminders",
    "Service Providers Update",
    "Social Media Update",
    "Others"
  ];

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
          Customize Notification
        </Text>
        <Text mt={2} width="380px" fontSize="14px">
          Personalize your alert preferences by selecting specific notification types, frequencies, and delivery channels
        </Text>
      </Box>

      {/* Right side of the card */}
      <Box pl={4}>
        
        <RadioGroup>
          <Flex direction="column" >
            {notificationOptions.map((option, index) => (
              <FormControl key={index} display="flex" alignItems="center" mb={5}>
                <Switch id={`optionSwitch${index}`} mr={2} />
                <FormLabel htmlFor={`optionSwitch${index}`} ml={3} mb="0" fontSize="16px" >
                  {option}
                </FormLabel>
              </FormControl>
            ))}
          </Flex>
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default SettingsCustomizeOptions;
