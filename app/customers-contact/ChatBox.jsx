"use client";
import {
  Box,
  Input,
  HStack,
  Text,
  IconButton,
  useColorMode,
  Flex,
} from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const ChatBox = ({ flex }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      boxShadow="md"
      borderRadius="sm"
      flexGrow={1}
      bg={colorMode === "light" ? "white" : "gray.800"}
      flex={flex}
      direction="column"
    >
      <Box p={5} borderBottom="1px solid gray">
        Header goes here
      </Box>

      {/* Reciever's chat */}
      <Flex h="full" flex={1} mt={5} p={5} direction="column">
        <Flex direction="column">
          <Text fontSize="small" color="gray" pl={4}>
            Adrin Thomas
          </Text>
          <Box
            mx={4}
            my={1}
            p={4}
            fontSize="small"
            bgColor="#EFF4FB"
            maxW="70%"
            borderBottomRadius="xl"
            borderTopRightRadius="xl"
          >
            Some long message goes here some long text some long text some long
            text some long text some long text
          </Box>
          <Text fontSize="small" color="gray" pl={4}>
            12:30 PM
          </Text>
        </Flex>

        {/* User's chat */}
        <Flex direction="column" align="flex-end">
          <Box
            my={1}
            p={4}
            fontSize="small"
            bgColor="#2D8CFF"
            maxW="70%"
            borderTopRadius="xl"
            borderBottomLeftRadius="xl"
            color="white"
          >
            Hello, I will check the schedule and get back to you !
          </Box>
          <Text fontSize="small" color="gray" pl={4}>
            12:30 PM
          </Text>
        </Flex>
      </Flex>
      {/** Input box */}
      <HStack w="100%">
        <Input placeholder="Type a message..." />
        <IconButton icon={<FaPaperPlane />} aria-label="Send message" />
      </HStack>
    </Flex>
  );
};

export default ChatBox;
