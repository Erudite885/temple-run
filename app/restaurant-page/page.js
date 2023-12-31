import SideBar from "@/components/Sidebar";
import { VStack, Box } from "@chakra-ui/react";
import NavBar from "@/components/NavBar";
import SectionSwitcher from "./SectionSwitcher";
import RestaurantMain from "./RestaurantMain";
import Footer from "../notification/Footer";
export default function Page() {
  return (
    <SideBar>
      <VStack>
        <Box w="100%">
          <NavBar />
        </Box>
        <RestaurantMain />
        <Footer />
      </VStack>
    </SideBar>
  );
}