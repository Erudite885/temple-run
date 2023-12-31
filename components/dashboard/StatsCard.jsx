import React from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Text,
  Heading,
  Select,
} from "@chakra-ui/react";

const StatsCard = ({
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
        <Flex mx={10} align="center" justify="space-between">
          <Heading flex={1} fontSize={titleSize}>
            {title}
          </Heading>
          <Flex align="center">
            {withLegend && (
              <Flex fontSize="medium" gap={5} mr={10}>
                <Flex align="center" gap={2}>
                  <Box borderRadius="50%" bg="green" w="2vh" height="2vh" />
                  <Text>Hotels</Text>
                </Flex>
                <Flex align="center" gap={2}>
                  <Box borderRadius="50%" bg="blue.400" w="2vh" height="2vh" />
                  <Text>Restaurants</Text>
                </Flex>
                <Flex align="center" gap={2}>
                  <Box borderRadius="50%" bg="red" w="2vh" height="2vh" />
                  <Text>Packages</Text>
                </Flex>
              </Flex>
            )}
            {withSelect && (
              <Select fontWeight="bold" fontSize="small" maxW="15vh">
                <option>Yearly</option>
              </Select>
            )}
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default StatsCard;
