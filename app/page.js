import TotalbookingsVSTotalCancellations from "@/components/dashboard/TotalbookingsVSTotalCancellations";
import UserStatus from "@/components/dashboard/UserStatus";
import NewCustomers from "@/components/dashboard/NewCustomers";
import HotelsPerformanceCard from "@/components/dashboard/HotelsPerformanceCard";
import RestaurantPerformanceCard from "@/components/dashboard/RestaurantPerformanceCard";
import PackagesPerformanceCard from "@/components/dashboard/PackagesPerformanceCard";
import LiveBookings from "@/components/dashboard/LiveBookings";
import Revenues from "@/components/dashboard/Revenues";
import SideBar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import NavBar from "@/components/NavBar";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <SideBar>
      <NavBar />
      <PageHeader />
      <Revenues />
      <TotalbookingsVSTotalCancellations />
      <Flex gap={5} m={5} mr={7}>
        <UserStatus />
        <NewCustomers />
      </Flex>
      <Flex m={5} mt={16} gap={3}>
        <HotelsPerformanceCard flex={1} />
        <RestaurantPerformanceCard flex={1} />
      </Flex>
      <PackagesPerformanceCard m={5} mt={16} flex={1} />
      <LiveBookings m={5} mr={7} />
    </SideBar>
  );
}
