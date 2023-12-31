import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FiMoreHorizontal } from "react-icons/fi";

const LiveBookings = ({
  withSelect,
  withLegend,
  title,
  titleSize,
  children,
  ...rest
}) => {
  return (
    <Card shadow="2xl" {...rest}>
      <CardHeader>
        <Flex
          borderBottom="1px solid #808080"
          px={10}
          py={2}
          pb={5}
          align="center"
          justify="space-between"
        >
          <Heading flex={1} fontSize="x-large">
            Live Bookings
          </Heading>
          <Button variant="ghost">
            <FiMoreHorizontal />
          </Button>
        </Flex>

        <Flex
          borderBottom="1px solid #808080"
          align="center"
          fontSize="x-large"
          color="gray.600"
          mt={5}
          px={10}
          pb={5}
        >
          <Text flex={2}>Services</Text>
          <Text textAlign="center" flex={1}>
            Today
          </Text>
          <Text textAlign="center" flex={1}>
            Tomrrow
          </Text>
          <Text textAlign="center" flex={1}>
            Week
          </Text>
        </Flex>
        <Flex
          borderBottom="1px solid #808080"
          align="center"
          fontSize="xx-large"
          mt={5}
          px={10}
          pb={5}
        >
          <Text fontSize="large" flex={2}>
            Hotels Live Bookings
          </Text>
          <Text textAlign="center" flex={1}>
            6
          </Text>
          <Text textAlign="center" flex={1}>
            3
          </Text>
          <Text textAlign="center" flex={1}>
            9
          </Text>
        </Flex>
        <Flex
          borderBottom="1px solid #808080"
          align="center"
          fontSize="xx-large"
          mt={5}
          px={10}
          pb={5}
        >
          <Text fontSize="large" flex={2}>
            Restaurants Live Bookings
          </Text>
          <Text textAlign="center" flex={1}>
            6
          </Text>
          <Text textAlign="center" flex={1}>
            4
          </Text>
          <Text textAlign="center" flex={1}>
            14
          </Text>
        </Flex>
        <Flex align="center" fontSize="xx-large" mt={5} px={10} pb={5}>
          <Text fontSize="large" flex={2}>
            Packages Live Bookings
          </Text>
          <Text textAlign="center" flex={1}>
            4
          </Text>
          <Text textAlign="center" flex={1}>
            3
          </Text>
          <Text textAlign="center" flex={1}>
            9
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default LiveBookings;
