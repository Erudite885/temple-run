// components/Notification.js
import { Box, Flex, Checkbox, Text } from '@chakra-ui/react';

const GeneralNotification = ({ title, paragraph, date, borderBottom }) => (
  <Flex
    direction="row"
    justify="space-between"
    align="center"
    borderBottom={borderBottom ? '1px solid' : 'none'}
    borderColor="gray.200"
    p={4}
  >
    <Checkbox />
    <Box flex="1" ml={4}>
      <Text fontWeight="bold">{title}</Text>
      <Text>{paragraph}</Text>
    </Box>
    <Text>{date}</Text>
  </Flex>
);

export default GeneralNotification;
