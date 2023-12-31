"use client";
import React from 'react';
import {
 Box,
 Flex,
 Avatar,
 IconButton,
 Text,
 Stack,
} from '@chakra-ui/react';
import { FiCamera } from "react-icons/fi";
import { StarIcon } from '@chakra-ui/icons';

function AdminCard() {
 return (
    <Box
      h="552px"
      w="30%"
      borderRadius="20px"
      bg="linear-gradient(180deg, purple 50%, white 50%)"
    >
      <Flex align="center" justify="center" mt="52">
        <Avatar size="2xl" name="Dan Abrahmov" src="https://bit.ly/sage-adebayo"/>
        <IconButton
          icon={<FiCamera />}
          isRound
          size="l"
          boxSize={8}
          bg="blue.200"
          ml="90px"
          mt="20"
          position="absolute"
          _hover={{ bg: 'white' }}
        />
      </Flex>
      <Stack spacing="1" align="center" justify="center">
        <Text fontWeight="bold" fontSize="2xl">
          MaryAnn McPhils
        </Text>
        <Text>Sales Director - MegaBliss</Text>
        <Flex gap={5}>
            <StarIcon color='yellow'/>
            <StarIcon color='yellow'/>
            <StarIcon color='yellow'/>
            <StarIcon color='yellow'/>
            <StarIcon color='yellow'/>
        </Flex>
      </Stack>
    </Box>
 );
}

export default AdminCard;