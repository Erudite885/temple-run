import SideBar from "@/components/Sidebar";
import { VStack, Box } from "@chakra-ui/react";
import NavBar from "@/components/NavBar";
import SectionSwitcher from "./SectionSwitcher";
import HotelsMain from "./HotelsMain.jsx";
export default function Page() {
  //TODO: Add States
  return (
    <SideBar>
      <VStack>
        <Box w="100%">
          <NavBar />
        </Box>
        <HotelsMain />
      </VStack>
    </SideBar>
  );
}
