import { Box, Text, Flex } from "@chakra-ui/react";

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

export default Sidebar;