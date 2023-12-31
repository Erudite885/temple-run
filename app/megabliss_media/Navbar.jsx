"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Flex,
  Button,
//   useColorMode,
  Icon,
  Input,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
// import { BellIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FiColumns, FiSettings } from "react-icons/fi";
import { FaSearch, FaBell } from "react-icons/fa";
import { LuPanelRight } from "react-icons/lu";
import { PiBellLight } from "react-icons/pi";

const Navbar = ({ title }) => {

  return (
    <Box
      as={Flex}
      alignItems="center"
      justify="space-between"
      px={8}
      py={3}
      bg="white"
      fontSize="medium"
    >
      <Flex align="center" gap={2} pl={2}>
        <Icon fontSize="medium" as={FiColumns} />
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" isCurrentPage>
              Master Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#" color="gray.400">
              Administrator
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Flex align="center" gap={3}>
        <InputGroup maxW="60vh" alignSelf="flex-end">
          <InputRightElement pointerEvents="none">
            <FaSearch color="green.500" />{" "}
          </InputRightElement>
          <Input placeholder="Search Settings" />
        </InputGroup>

        <Box
          fontSize="1.3rem"
        >
          <PiBellLight />{" "}
        </Box>
        <Box
          fontSize="1.3rem"
        >
            <LuPanelRight />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;