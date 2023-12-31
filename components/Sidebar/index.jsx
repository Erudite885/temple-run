"use client";

import {
  IconButton,
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Avatar,
  Collapse,
  Link,
} from "@chakra-ui/react";

import {
  FiMenu,
  FiChevronRight,
  FiInbox,
  FiChevronDown,
} from "react-icons/fi";
import { FaChartLine } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

export default function SideBar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <Box
        height="full"
        width="2vh"
        zIndex={50}
        right={0}
        position="fixed"
        bgColor="#2D8CFF"
      />
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: "200px" }}>{children}</Box>
      <Box height="2vh" width="full" zIndex={50} bgColor="#2D8CFF" />
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isOverviewOpen, onToggle: onOverviewToggle } = useDisclosure();
  const { isOpen: isSettingsOpen, onToggle: onSettingsToggle } = useDisclosure();
  const {  onToggle: onAnalyticsToggle } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue("#2D8CFF", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: "200px" }}
      pos="fixed"
      h="full"
      {...rest}
      zIndex={100}
      overflowY="auto"
    >
      <Flex justifyContent="center" mt={5} align="center" gap={3}>
        <Avatar
          size="sm"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
        <Text color="white" fontSize="small" fontWeight="bold">
          Angel Greens
        </Text>
      </Flex>


      <Flex fontSize="small" px="4" mx="4" mt={4}>
        {/* <Box w="7px" h="7px" borderRadius="50%" bg="white" /> */}

        <Flex
          gap={2}
          color="white"
          cursor="pointer"
          bg={isOverviewOpen ? "#7F2CD3" : "transparent"}
          _hover={{
            bg: "#7F2CD3",
          }}
          borderRadius="xl"
          p={3} 
          align="center"
          onClick={onOverviewToggle}
        >
          <Icon as={GoDotFill} />
          <Icon as={FaChartLine} />
          <Link
            href="/overview"
            color="white"
            cursor="pointer"
            borderRadius="xl"
            ml={3}
            _hover={{
              textDecoration: "none",  // Add this to remove the underline on hover
              color: "white",
            }}
          >
            Overview
          </Link>
        </Flex>

      </Flex>

      <Text px="4" mx="4" my={4} fontSize="medium" color="#E1E1E1">
        Menu
      </Text>


      <Flex direction="column" fontSize="small" gap={2}>
        <Flex
          onClick={onToggle}
          gap={2}
          // bg="#7F2CD3"
          color="white"
          cursor="pointer"
          _hover={{
            bg: "#7F2CD3",
          }}
          borderRadius="xl"
          mx={6}
          p={3}
          align="center"
        >
           <Icon as={isOpen ? FiChevronDown : FiChevronRight} />
          <Icon as={FiInbox} />
          <Text pl={2}>Services</Text>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <Flex gap={2} direction="column" mt={2}>
            <Link
              href="/hotels"
              color={isOpen && "white"}
              cursor="pointer"
              _hover={{
                bg: isOpen ? "#C5E4FF" : "#7F2CD3",
                color: "#2D8CFF",
              }}
              borderRadius="xl"
              mx={6}
              p={3}
              pl={10}
            >
              Hotels
            </Link>
            <Link
              href="/restaurant-page"
              color="white"
              cursor="pointer"
              _hover={{
                bg: "#C5E4FF",
                color: "#2D8CFF",
              }}
              borderRadius="xl"
              mx={6}
              p={3}
              pl={10}
            >
              Restaurants
            </Link>
            <Link
              href="/package-page"
              color="white"
              cursor="pointer"
              _hover={{
                bg: "#C5E4FF",
                color: "#2D8CFF",
              }}
              borderRadius="xl"
              mx={6}
              p={3}
              pl={10}
            >
              Packages
            </Link>
          </Flex>
        </Collapse>
        <Flex
          gap={2}
          color="white"
          cursor="pointer"
          bg={onAnalyticsToggle.isOpen ? "#7F2CD3" : "transparent"}
          _hover={{
            bg: "#7F2CD3",
          }}
          borderRadius="xl"
          mx={6}
          p={3} 
          align="center"
          justifyContent="center"
          onClick={onAnalyticsToggle}
        >
          <Icon as={FaChartLine} />
          <Link
            href="/analytics"
            color="white"
            cursor="pointer"
            borderRadius="xl"
            ml={3}
            _hover={{
              textDecoration: "none",  // Add this to remove the underline on hover
              color: "white",
              
            }}
          >
            Analytics
          </Link>
        </Flex>
      </Flex>

      <Text fontSize="medium" px="4" mx="4" my={4} color="#E1E1E1">
        Other
      </Text>

      <Flex direction="column" fontSize="small" gap={2}>
        <Flex
          onClick={onSettingsToggle}
          gap={2}
          bg={isSettingsOpen && "#7F2CD3"}
          color="white"
          cursor="pointer"
          _hover={{
            bg: "#7F2CD3",
          }}
          borderRadius="xl"
          mx={6}
          p={3}
          align="center"
        >
          <Icon as={isSettingsOpen ? FiChevronDown : FiChevronRight} />
          <Icon as={FaChartLine} />
          <Text pl={2}>Settings</Text>
        </Flex>
        <Collapse in={isSettingsOpen} animateOpacity>
          <Flex gap={2} direction="column" mt={2}>
            <Link
              href="/notification"
              color={isSettingsOpen && "white"}
              cursor="pointer"
              _hover={{
                bg: isSettingsOpen ? "#C5E4FF" : "#7F2CD3",
                color: "#2D8CFF",
              }}
              borderRadius="xl"
              mx={6}
              p={3}
              pl={10}
            >
              Notifications
            </Link>
            <Link
              href="/user-preference"
              // bg="#C5E4FF"
              color={isSettingsOpen && "white"}
              cursor="pointer"
              _hover={{
                bg: isSettingsOpen ? "#C5E4FF" : "#7F2CD3",
                color: "#2D8CFF",
              }}
              borderRadius="xl"
              mx={6}
              p={3}
              pl={10}
            >
              User Preferences
            </Link>
            <Link
              href="/admin-profile"
              // bg="#C5E4FF"
              color={isSettingsOpen && "white"}
              cursor="pointer"
              _hover={{
                bg: isSettingsOpen ? "#C5E4FF" : "#7F2CD3",
                color: "#2D8CFF",
              }}
              borderRadius="xl"
              mx={6}
              p={3}
              pl={10}
            >
              Admin Profile
            </Link>
            <Link
              href="/megabliss_media"
              // bg="#C5E4FF"
              color={isSettingsOpen && "white"}
              cursor="pointer"
              _hover={{
                bg: isSettingsOpen ? "#C5E4FF" : "#7F2CD3",
                color: "#2D8CFF",
              }}
              borderRadius="xl"
              mx={6}
              p={3}
              pl={10}
            >
              MegaBliss Media
            </Link>
          </Flex>
        </Collapse>
      </Flex>
    </Box>

  );
};


const MobileNav = ({ onOpen, onClose, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
        </Flex>
        
  );
};
