"use client"
import { Box, Flex, Text, VStack, HStack } from "@chakra-ui/react";
import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import StatsCard from "../dashboard/StatsCard";

const data = [
  { name: "Great", value: 800 },
  { name: "Good", value: 300 },
  { name: "Okay", value: 50 },
  { name: "Poor", value: 30 },
  { name: "Bad", value: 20 },
];

const COLORS = ["#32CD32", "#9ACD32", "#FFFF00", "#FF7F50", "#FF0000"];

class CustomersFeedBack extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj";

  render() {
    const { title } = this.props;

    return (
      <StatsCard title={title} titleSize="xx-large" flex = {1} m={5}>
        <Flex>
          {/* Left side - Pie Chart */}
          <Box flex={8} pr={5}>
            <VStack align="center">
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={160}
                    innerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    <Label 
                      value="90% Great"
                      fontSize= "30px"
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
            </VStack>
          </Box>

         {/* Right side - Categories */}
         <Box flex={2} pl={5}>
            <VStack spacing={10} align="flex-start">
              {data.map((entry, index) => (
                <HStack key={`category-${index}`} spacing={2}>
                  <Box width={5} height={5} borderRadius="50%" bg={COLORS[index]} />
                  <Text fontSize="lg">{entry.name}</Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        </Flex>

        {/* Bottom Boxes */}
        <Flex justify="space-between" mx= {20} mt={2}>
          <Box textAlign="center">
            <Text fontSize="m" style={{ opacity: 0.5 }}>Total Ratings</Text>
            <Text fontSize="3xl" fontWeight="bold">867</Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize="m" style={{ opacity: 0.5 }}>Comments</Text>
            <Text fontSize="3xl" fontWeight="bold">10</Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize="m" style={{ opacity: 0.5 }}>Positive</Text>
            <Text fontSize="3xl" fontWeight="bold"color="green">99%</Text>
          </Box>
        </Flex>
      </StatsCard>
    );
  }
}

export default CustomersFeedBack;
