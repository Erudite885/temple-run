import Navbar from "../../notification/Navbar";
import SideBar from "@/components/Sidebar";
import { Box } from "@chakra-ui/react";
import LiveBooking from "./LiveBooking";

export default function Page() {
  return (
    <SideBar>
      <Navbar />
      <LiveBooking />
    </SideBar>
  );
}