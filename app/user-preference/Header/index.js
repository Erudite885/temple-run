"useClient";

import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FiSettings } from "react-icons/fi";


const Header = () => {


  return (
    <Flex justifyContent="flex-end" mx="0px">
       <Flex
        py={2}
        my={4}
        width={{ base: "100%", sm: "48%", md: "30%", lg: "20%" }}
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box as={Icon} ml={2} fontSize="1.3rem">
          <FiSettings />
        </Box>
        <Text ml={3}
        >
          Settings
        </Text>
      </Flex>
    </Flex>
  );
};

export default Header;
