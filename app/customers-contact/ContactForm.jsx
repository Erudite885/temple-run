"use client";
import React from "react";
import {
  VStack,
  FormControl,
  SimpleGrid,
  GridItem,
  Input,
  FormLabel,
  Divider,
  Textarea,
  Select,
  Button,
  Text,
  HStack,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const ContactForm = ({ flex }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack
      p={6}
      bg={colorMode === "light" ? "white" : "gray.800"}
      boxShadow="lg"
      flex={flex}
    >
      <Text fontSize="xl" w="100%">
        Contact
      </Text>
      <Divider />
      <SimpleGrid columns={6} columnGap={3} rowGap={4} w="100%">
        <GridItem colSpan={3}>
          {/** First row */}
          <FormControl>
            <FormLabel htmlFor="customernumber">Customer Number</FormLabel>
            <Input
              id="customernumber"
              placeholder="AB1234"
              borderColor="gray.400"
              borderRadius="sm"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={3}>
          <FormControl>
            <FormLabel htmlFor="contactnumber">Contact Number</FormLabel>
            <Input
              id="contactnumber"
              placeholder="AB1234"
              borderColor="gray.400"
              borderRadius="sm"
            />
          </FormControl>
        </GridItem>
        {/** Customer Name */}
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel htmlFor="firstname">First Name</FormLabel>
            <Input
              id='firstname'
              placeholder="AB1234"
              borderColor="gray.400"
              borderRadius="sm"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel htmlFor="middlename">Middle Name</FormLabel>
            <Input
              id="middlename"
              placeholder="AB1234"
              borderColor="gray.400"
              borderRadius="sm"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel htmlFor="lastname">Last Name</FormLabel>
            <Input
              id="lastname"
              placeholder="AB1234"
              borderColor="gray.400"
              borderRadius="sm"
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={6}>
          <FormControl>
            <FormLabel htmlFor='dob'>Date of birth</FormLabel>
            <Input
            id='dob'
              placeholder="23/11/1990"
              type="date"
              borderColor="gray.400"
              borderRadius="sm"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={6}>
          <FormControl>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input
            id="email"
              placeholder="AB1234@gmail.com"
              borderColor="gray.400"
              borderRadius="sm"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={6}>
          <FormControl>
            <FormLabel htmlFor='website'>Website</FormLabel>
            <Input
              id="website"
              placeholder="AB1234@gmail.com"
              borderColor="gray.400"
              borderRadius="sm"
            />
          </FormControl>
        </GridItem>

        {/** Payment Options, TODO: Add more options */}
        <GridItem colSpan={6}>
          <FormControl>
            <FormLabel htmlFor=''>Payment Options</FormLabel>
            <Select borderColor="gray.400" borderRadius="sm">
              <option value="option1">VISA</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={6}>
          <FormControl>
            <FormLabel htmlFor=''>Customer's Favorite</FormLabel>
            <Textarea
              placeholder="Customer's Favorite...."
              borderColor="gray.400"
              borderRadius="sm"
            />
          </FormControl>
        </GridItem>

        {/**TODO: Add button functionalities */}
        <GridItem colSpan={6}>
          <Button
            w="full"
            variant="outline"
            colorScheme="messenger"
            borderColor="gray.400"
            borderRadius="sm"
          >
            Change Password
          </Button>
        </GridItem>

        <GridItem colSpan={6}>
          <Button w="full" colorScheme="messenger" borderRadius="sm">
            Send Password Reset Link
          </Button>
        </GridItem>

        {/**TODO: Add icon click functionality */}
        <GridItem colSpan={6}>
          <HStack spacing={4}>
            <Icon as={FaFacebook} w={6} h={6} />
            <Icon as={FaTwitter} w={6} h={6} />
            <Icon as={FaLinkedin} w={6} h={6} />
          </HStack>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default ContactForm;
