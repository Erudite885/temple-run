import SideBar from "@/components/Sidebar";
import NavBar from "@/components/NavBar";
import CustomersFeedBack from "@/components/CustomerFeedback";

import { Flex, Heading, VStack } from "@chakra-ui/react";

export default function Page() {
  return (
    <SideBar>
      <NavBar />
      <VStack align="start" px={8} py={4}>
        <Heading flex={1}>Customer's Feedback</Heading>
      </VStack>
      <Flex direction="column" m={5} mr={7}>
        {/* First row */}
        <Flex gap={5}>
          <CustomersFeedBack title="Overall App Performance" />
          <CustomersFeedBack title="Restaurants" />
        </Flex>
        {/* Second row */}
        <Flex gap={5}>
          <CustomersFeedBack title="Hotels" />
          <CustomersFeedBack title="Packages" />
        </Flex>
      </Flex>
    </SideBar>
  );
}
