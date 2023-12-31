import SideBar from "@/components/Sidebar/index";
import NavBar from "@/components/NavBar/index";
import { Flex, Box, Icon, Text } from "@chakra-ui/react";
import { FiSettings } from "react-icons/fi";
import AdminForm from "./AdminForm";
import AdminCard from "./AdminCard";
import Footer from "../notification/Footer";
// import Button from "./Button";
import AdminButton from "./Button";

export default function Page() {
  return (
    <SideBar>
        <NavBar title = "Admin Profile"/>
        <Flex justifyContent="flex-end" display="flex" mt={5} mr="20" gap={2}>
          <Box as={Icon} mt="0.5" fontSize="1.3rem">
            <FiSettings />
          </Box>
          <Text fontWeight="bold">Settings</Text>
        </Flex>
      <Flex flexDirection="column" align="center" p={5}>
        <Flex gap={5} m={5} mr={7}>
            <AdminCard />
            <AdminForm />
        </Flex>
      </Flex>
      <AdminButton />
      <Footer />
    </SideBar>
  );
}