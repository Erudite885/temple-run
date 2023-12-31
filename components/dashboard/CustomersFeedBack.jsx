"use client";
import {
  Box,
  Center,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Customized,
  Label,
} from "recharts";
import StatsCard from "./StatsCard";

const data = [
  { name: "Group A", value: 800 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 50 },
  { name: "Group D", value: 30 },
  { name: "Group D", value: 20 },
];

const COLORS = ["#32CD32", "#9ACD32", "#FFFF00", "#FF7F50", "#FF0000"];

const RADIAN = Math.PI / 180;

export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj";

  render() {
    return (
      <StatsCard title="Customers FeedBack" m={5}>
        <Flex>
          <Box flex={1} as={Flex} direction="column" gap={2}>
            <Center fontSize="x-large" fontWeight="bold">
              Customers FeedBack
            </Center>
            <ResponsiveContainer minHeight={300}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={140}
                  innerRadius={90}
                  fill="#8884d8"
                  dataKey="value"
                >
                  <Label
                    value="90% Great"
                    fontWeight="bold"
                    position="center"
                  />

                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <Flex justify="space-between" mx={15} mt={5}>
              <HStack>
                <Box width={5} height={5} borderRadius="50%" bg="#32CD32" />{" "}
                <Text>Great</Text>
              </HStack>
              <HStack>
                <Box width={5} height={5} borderRadius="50%" bg="#9ACD32" />{" "}
                <Text>Good</Text>
              </HStack>{" "}
              <HStack>
                <Box width={5} height={5} borderRadius="50%" bg="#FFFF00" />{" "}
                <Text>Okay</Text>
              </HStack>{" "}
              <HStack>
                <Box width={5} height={5} borderRadius="50%" bg="#FF7F50" />{" "}
                <Text>Poor</Text>
              </HStack>{" "}
              <HStack>
                <Box width={5} height={5} borderRadius="50%" bg="#FF0000" />{" "}
                <Text>Bad</Text>
              </HStack>
            </Flex>
          </Box>
          <Flex
            direction="column"
            justify="space-between"
            flex={1}
            pl={10}
            py={10}
          >
            <Heading>867 Total Ratings</Heading>
            <Heading>10 Comments</Heading>
            <Heading as={Flex} gap={2}>
              99% <Heading color="green">Positive</Heading>
            </Heading>
          </Flex>
        </Flex>
      </StatsCard>
    );
  }
}
