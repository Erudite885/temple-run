"use client";
import { 
  Box,
    Flex,
    Text,
} from "@chakra-ui/react";

const Footer = () => {
  return (
      <Box
          as={Flex}
          alignItems="center"
          justify="center"
          bg='white' 
          w='100%' 
          px={8} 
          py={3}
          fontSize="medium"
      >
          <Flex>
              <Box
                  bg='#2D8CFF'
                  color='white'
                  px={9} 
                  py={4}
                  borderRadius='lg'
              >
                  <Text
                      fontWeight="bold"
                    //   alignItems="center"
                  >
                      Unifying Your Blissfull Experiences
                  </Text>
              </Box>
          </Flex>
          
      </Box>
  )
}

export default Footer