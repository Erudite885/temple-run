import React from "react";
import StatsCard from "../../components/dashboard/StatsCard";
import {
  Flex,
  Text,
  Image,
  AspectRatio,
  Divider,
  Heading,
} from "@chakra-ui/react";
import { FiPhone, FiStar } from "react-icons/fi";

const RestaurantDetails = () => {
  //TODO: State Required
  return (
    <StatsCard title="Hotel Details" m={5}>
      <Flex w="100%" alignItems="center" gap={5} justify="space-between">
        <StatsCard flex={1} title="Address :" titleSize="2xl">
          <Text>Random Adress, 54213, Somewhere In The World</Text>
        </StatsCard>
        <Divider orientation="vertical" />
        <StatsCard flex={1} title="Contact Us :" titleSize="2xl">
          <Flex alignItems="center" gap={1}>
            <FiPhone />
            <Text>+214654312645</Text>
          </Flex>{" "}
          <Flex alignItems="center" mt={1} gap={1}>
            <FiPhone />
            <Text>+214654312645</Text>
          </Flex>
        </StatsCard>
        <Divider orientation="vertical" />
        <StatsCard flex={1} title="Ratings :" titleSize="2xl">
          <Flex alignItems="center" justify="space-between" fontSize="x-large">
            <Text>55423 Ratings</Text>
            <Flex>
              <FiStar color="yellow" fill="yellow" />
              <FiStar color="yellow" fill="yellow" />
              <FiStar color="yellow" fill="yellow" />
              <FiStar color="yellow" fill="yellow" />
              <FiStar color="yellow" />
            </Flex>
          </Flex>
        </StatsCard>
        <Divider orientation="vertical" />
      </Flex>
      <Heading mt={5} fontSize="xx-large">
        Location :{" "}
      </Heading>
      <Flex mt={5} gap={10}>
        <Flex
          justify="space-between"
          fontSize="large"
          direction="column"
          flex={1}
        >
          <AspectRatio flex={1} ratio={5 / 3}>
            <Image
              src="./map.jpeg"
              alt="naruto"
              borderRadius="lg"
              objectFit="cover"
            />
          </AspectRatio>
        </Flex>
        <AspectRatio flex={1} ratio={5 / 3}>
          <Image
            src="./download.jpeg"
            alt="naruto"
            borderRadius="lg"
            objectFit="cover"
          />
        </AspectRatio>
      </Flex>
      {/* <EmployeesDetails /> */}
    </StatsCard>
  );
};

export default RestaurantDetails;