import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import { MdOutlineDeleteForever } from "react-icons/md";

import Sidebar from "./Sidebar";
import TableComp from "./TableComp";
import Pagination from "./Pagination";

function ChatHistory() {
  return (
    <Box width="1163px" height="654px" fontFamily="Manrope">
      <Flex margin="20px" justify="space-between">
        <Flex justify="space-between" width="202px">
          <Text fontSize="17px" fontWeight="700">
            Chat History
          </Text>
          <div>
            <Icon as={MdOutlineDeleteForever} />
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


export default ChatHistory;
