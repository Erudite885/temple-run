"use client"


import { VStack, Flex, Button, Text, Select, Input, InputGroup, InputLeftElement, Badge, Divider, Avatar, Progress, Box, Spacer, CloseButton } from '@chakra-ui/react';
import { SearchIcon, RepeatIcon } from '@chakra-ui/icons';
import { BsThreeDotsVertical } from 'react-icons/bs';
// BsThreeDotsVertical

const Newsletter = () => {
  const cardsData = [
  {
    status: 'IN PROGRESS',
    title: 'Discovery Luxury: Unveiling Our Newest Suite Collection',
    progress: 71,
    lastModified: 'Last Modified at 16 Dec 2023 22:00',
    avatarSrc: 'https://bit.ly/broken-link',
    senderName: 'Christy Baby',
  },
  {
    status: 'SCHEDULED',
    title: 'Taste the Extraordinary: Culinary Delights Await You!',
    progress: 50,
    lastModified: 'Last Modified at 17 Dec 2023 20:00',
    avatarSrc: 'https://bit.ly/broken-link',
    senderName: 'Jospin',
  },
  {
    status: 'IN PROGRESS',
    title: 'Celebrate Love: Romantic Packages for Memorable Getaways',
    progress: 25,
    lastModified: 'Last Modified at 18 Dec 2023 18:30',
    avatarSrc: 'https://bit.ly/broken-link',
    senderName: 'Serinah',
  },
  {
    status: 'IN PROGRESS',
    title: 'Savor Every Bite: A Culinary Journey at Our Renowned Restaurants',
    progress: 90,
    lastModified: 'Last Modified at 19 Dec 2023 15:45',
    avatarSrc: 'https://bit.ly/broken-link',
    senderName: 'John Doe',
  },
  {
    status: 'SCHEDULED',
    title: 'Explore Nature: Adventure Awaits in Our Eco-friendly Resorts',
    progress: 10,
    lastModified: 'Last Modified at 20 Dec 2023 12:00',
    avatarSrc: 'https://bit.ly/broken-link',
    senderName: 'Alice Smith',
  },
  {
    status: 'IN PROGRESS',
    title: 'Discover Wellness: Spa Retreats for Relaxation and Rejuvenation',
    progress: 60,
    lastModified: 'Last Modified at 21 Dec 2023 10:30',
    avatarSrc: 'https://bit.ly/broken-link',
    senderName: 'Bob Johnson',
  },
];


  return (
    <VStack align="stretch" p={5}>
      {/* Top Section */}
      <Flex justify="space-between" align="center" w="100%">
        {/* Left Side */}
        <Flex align="center" justify="space-between">
          <Button size="large" variant='solid' bg="#2D8CFF" color="white" p="14px">
            Create New Newsletter
          </Button>
          <Text ml={8} width="80%" >Filter</Text>
          <Select bg="white" ml={2}>
            <option>All Status</option>
          </Select>
          {/* <Box display="flex" alignItems="center" mb={4}> */}
            <Text ml={8} width="80%" >Sort by</Text>
            <Select bg="white" ml={2}>
    <option>All Status</option>
  </Select>
{/* </Box> */}
        </Flex>

        {/* Right Side */}
        <Flex align="center">
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
            <Input placeholder="Search email subject" bg="white" />
          </InputGroup>
        </Flex>
      </Flex>

      {/* Cards Section */}
      <VStack w="100%" mt={5}>
        {cardsData.map((card, index) => (
          <Box key={index} w="100%" bg="white" p={5} rounded="md">
            {/* Up Section */}
            <Flex justify="space-between" align="center">
              <Badge p={2} bg={card.status === 'SCHEDULED' ? '#FFCA64' : '#56CA00'} fontSize="1rem" color={card.status === 'SCHEDULED' ? 'black' : 'white'} borderRadius="10px">{card.status}</Badge>
              <Text as='b'>{card.title}</Text>
              {/* <Flex align="center"> Wrap Progress and Text in Flex */}
    <Progress
      value={card.progress}
      colorScheme="green"
      width="40%"
      maxWidth="135px"
      borderRadius="10px"
    />
    <Text ml={2}>{`${card.progress}% Completed`}</Text>
              {/* </Flex> */}
              <RepeatIcon />
            </Flex>
            <Divider my={3} />

            {/* Down Section */}
            <Flex justify="space-between" align="center">
              <Box>
                
                <Flex align="center" columnGap={5}>
                <Text>{card.lastModified}</Text>
                  <Avatar src={card.avatarSrc} mr={3} />
                  <Text>{card.senderName}</Text>
                </Flex>
              </Box>
              <Flex align="center">
               {card.status === 'IN PROGRESS' ? (
      <Box
        p={2}
        fontSize="1rem"
        color="black"
        border="1px solid"
        borderRadius="10px"
        borderColor="gray.300"
        display="inline-flex"
                    alignItems="center"
                    mr={4}
      >
        <CloseButton />
        <Badge  fontSize="0.9rem" textTransform='capitalize' bg="transparent" marginRight="2" paddingRight="2">
          Stop sending
        </Badge>
      </Box>
    ) : (
      <Badge  mr={4}
                      py={4}
                      px={8}
        bg="transparent"
        fontSize="0.9rem"
        // color="black"
        border="1px solid"
        borderRadius="10px"
                      borderColor="gray.300"
                      textTransform='capitalize'
      >
        Publish Now
      </Badge>
    )}
                <BsThreeDotsVertical />
              </Flex>
            </Flex>
          </Box>
        ))}
      </VStack>
    </VStack>
  );
};

export default Newsletter;
