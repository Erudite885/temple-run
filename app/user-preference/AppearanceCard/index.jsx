import React from 'react';
import { Box, Text, Button, Flex, Image, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

const AppearanceCard = () => {
  return (
    <Box bg="white" p={4} m={4} boxShadow="md" borderRadius="10px">
      <Flex direction="column">
        {/* Top side of the card */}
        <Box mb={4}>
          <Text fontWeight="bold" fontSize="md" mb={2}>
            Appearance
          </Text>
          <Text fontSize="xs" mb={4}>
            Customize the visual layout and style of your dashboard to suit your preferences
          </Text>
        </Box>

        {/* Bottom side of the card */}
        <Flex justify="space-between">
          <Box flex="1" mr={4}>
            {/* Card 1 */}
            <Flex direction="column" align="center">
              <Box
                border="1px"
                borderColor="gray.300"
                borderRadius="10px"
                p={4}
                mb={4}
                textAlign="center"
              >
                <Image
                  src="/appearancecard-placeholder.png"
                  alt="Theme 1"
                  mb={2}
                  borderRadius="6.65px"
                  width="274px"
                  height="115px"
                />
                <Flex align="center" mt={3}>
                  <SkeletonCircle size="8" mr={2} />
                  <SkeletonText noOfLines={3} spacing='2' skeletonHeight='2' width="100%"  />
                </Flex>
              </Box>
              <Button size="sm" colorScheme="blue">
                Light Mode
              </Button>
            </Flex>
          </Box>

          {/* Similar modification for Card 2 and Card 3 */}
          <Box flex="1" mr={4}>
            {/* Card 2 */}
            <Flex direction="column" align="center">
              <Box
                border="1px"
                borderColor="gray.600"
                backgroundColor="gray.600"
                borderRadius="10px"
                p={4}
                mb={4}
                textAlign="center"
              >
                <Image
                  src="/appearancecard-placeholder.png"
                  alt="Theme 2"
                  mb={2}
                  borderRadius="6.65px"
                  width="274px"
                  height="115px"
                />
                <Flex align="center" mt={3}>
                  <SkeletonCircle size="8" mr={2} />
                  <SkeletonText backgroundColor="gray.600" noOfLines={3} spacing='2' skeletonHeight='2' width="100%"  color="white" />
                </Flex>
              </Box>
              <Button size="sm" colorScheme="blue">
                Dark Mode
              </Button>
            </Flex>
          </Box>

          <Box flex="1">
            {/* Card 3 */}
            <Flex direction="column" align="center">
              <Box
                border="1px"
                borderColor="gray.300"
                borderRadius="10px"
                p={4}
                mb={4}
                textAlign="center"
              >
                <Image
                  src="/appearancecard-placeholder.png"
                  alt="Theme 3"
                  mb={2}
                  borderRadius="6.65px"
                  width="274px"
                  height="115px"
                />
                <Flex align="center" mt={3}>
                  <SkeletonCircle size="8" mr={2} />
                  <SkeletonText noOfLines={3} spacing='2' skeletonHeight='2' width="100%" />
                </Flex>
              </Box>
              <Button size="sm" colorScheme="blue">
                System
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AppearanceCard;
