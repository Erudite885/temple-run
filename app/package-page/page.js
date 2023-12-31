import SideBar from "@/components/Sidebar";
import NavBar from "@/components/NavBar/index";
import { VStack, Box } from "@chakra-ui/react";
import PackageMain from "./PackageMain";
import Footer from "../notification/Footer";


export default function Page() {
  return (
    <SideBar>
      <VStack>
        <Box w="100%">
          <NavBar />
        </Box>
        <PackageMain />
        <Footer />
      </VStack>
    </SideBar>
  );
}