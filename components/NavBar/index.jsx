"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Flex,
  Button,
  useColorMode,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { BellIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FiColumns } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

const NavBar = ({ title }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as={Flex}
      alignItems="center"
      justify="space-between"
      px={8}
      py={3}
      bg={colorMode === "light" ? "white" : "gray.900"}
      fontSize="medium"
    >
      <Flex align="center" gap={2} pl={2}>
        <Icon fontSize="medium" as={FiColumns} />
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" isCurrentPage>
              Dashboard
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
          <InputLeftElement pointerEvents="none">
            <FaSearch color="green.500" />{" "}
          </InputLeftElement>
          <Input placeholder="Search..." />
        </InputGroup>
        <Button
          onClick={toggleColorMode}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
            bg: "cyan.400",
            color: "white",
          }}
        >
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
        <Button
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
            bg: "cyan.400",
            color: "white",
          }}
        >
          <BellIcon />{" "}
        </Button>
      </Flex>
    </Box>
  );
};

export default NavBar;
