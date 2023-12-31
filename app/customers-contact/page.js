import NavBar from "@/components/NavBar";
import SideBar from "@/components/Sidebar";
import { Heading, VStack, HStack, Text, Flex } from "@chakra-ui/react";
import ContactForm from "./ContactForm";
import ChatBox from "./ChatBox";

export default function Page() {
  //TODO: Add form functionality
  //TODO: Add Link to 'Message' text
  //TODO: Chat Box Implementation
  return (
    <SideBar>
      <NavBar w="100%" />
      <VStack p={8}>
        {/** Header section */}
        <HStack
          w="100%"
          justifyContent="space-between"
          alignItems="flex-end"
          py={2}
        >
          <Heading>Customers</Heading>
          {/** TODO: Add Link */}
          <Text fontSize="lg">Dashboard / Message</Text>
        </HStack>

        {/** Body section */}
        <Flex w="100%" gap={4}>
          {/** Contact Form */}
          <ContactForm flex={1} />

          {/** Chat Box */}
          <ChatBox flex={1} />
        </Flex>
      </VStack>
    </SideBar>
  );
}
