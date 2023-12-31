"use client";
import React, { useEffect } from 'react';
import { 
  Box, 
  FormControl, 
  FormLabel, 
  Grid, 
  Input, 
  // Button, 
  useToast, 
  GridItem, 
  Select, } from '@chakra-ui/react';

// import StatsCard from "@/components/dashboard/StatsCard"

const AdminProfile = () => {
 const toast = useToast();

 const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here, then call toast
    toast({
      title: 'Admin Profile Updated.',
      description: 'Your admin profile has been updated successfully.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
 };

 useEffect(() => {
    // Add your logic here
 }, []); // Add dependencies here

 return (
    <Box >
        <Box
          bg="white"
          pt={12}
          pb={3}
          px={12}
          boxShadow="md"
          borderRadius="10px"
          justifyContent="center"
          alignItems="start"
        >
        <FormControl onSubmit={handleSubmit} >
          <Grid templateColumns="repeat(3, 1fr)" gap={5} >
            <GridItem>
              <FormLabel htmlFor="firstName" fontWeight="bold">First Name</FormLabel>
              <Input type="text" id="firstName" placeholder="Maryann" />
            </GridItem>

            <GridItem>
              <FormLabel htmlFor="middleName" fontWeight="bold">Middle Name</FormLabel>
              <Input type="text" id="middleName" placeholder="" />
            </GridItem>

            <GridItem>
              <FormLabel htmlFor="lastName" fontWeight="bold">Last Name</FormLabel>
              <Input type="text" id="lastName" placeholder="McPhils" />
            </GridItem>
          </Grid>

          <Grid templateColumns="repeat(2, 1fr)" gap={5} marginTop={2}>
            <GridItem>
              <FormLabel htmlFor="email" fontWeight="bold">Email</FormLabel>
              <Input type="email" id="email" placeholder="maryann@megabliss.com" />
            </GridItem>

            <GridItem>
              <FormLabel htmlFor="phone" fontWeight="bold">Phone</FormLabel>
              <Input type="text" id="phone" placeholder="021 0264 3632" />
            </GridItem>
          </Grid>

          <Box marginTop="3">
              <FormLabel htmlFor="address" fontWeight="bold">Address</FormLabel>
              <Input type="text" id="address" placeholder="Block 20, Brook Avenue, Auckland District 2" />
          </Box>

          <Box marginTop="3">
              <FormLabel htmlFor="password" fontWeight="bold">Password</FormLabel>
              <Input type="password" id="password" placeholder="Create password" />
          </Box>

          <Box marginTop="3">
              <FormLabel htmlFor="confirmPassword" fontWeight="bold">Confirm Password</FormLabel>
              <Input type="password" id="confirmPassword" placeholder="Retype your password" />
          </Box>

          <Box marginTop="3">
          <FormLabel fontWeight="bold">Account</FormLabel>
              <Select placeholder='Choose account status' w="40%">
                  <option>Inactive</option>
                  <option>Active</option>
              </Select>
          </Box>
        </FormControl>
      </Box>
    </Box>
 );
};

export default AdminProfile;