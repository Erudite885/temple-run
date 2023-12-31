"use client";
import React from "react";
import { Card, CardBody, Flex, Select } from "@chakra-ui/react";

const Settings = () => {
  return (
    <Flex direction="column" mx="5" gap={3} mt="10px">
      <Card boxShadow="2xl">
        <CardBody>
          <Flex gap={3}>
            <Flex direction="column" gap={2} flex={1}>
              <Select placeholder="Dashboard Overview">
                <option value="option1"> Total Bookings : 1234</option>
                <option value="option2"> Total Cancellation : 1234</option>
                <option value="option3">Total Revenues : $XXXX</option>
              </Select>
            </Flex>
            <Flex direction="column" flex={1} gap={2}>
              <Select placeholder="Hotels Overview">
                <option value="option1">Booked Rooms : 1234</option>
                <option value="option2"> Canceled Bookings : XX</option>
                <option value="option3">Hotels Details</option>
              </Select>
            </Flex>
            <Flex direction="column" flex={1} gap={2}>
              <Select placeholder="Restaurants Overview">
                <option value="option1">Table Reservations : 1234</option>
                <option value="option2">Food Orders : XX</option>
                <option value="option3"> Cancelled Orders</option>
                <option value="option3"> Restaurant Details</option>
              </Select>
            </Flex>
            <Flex direction="column" flex={1} gap={2}>
              <Select placeholder="Packages Overview">
                <option value="option1">Activities Booked : 1234</option>
                <option value="option2"> Cancelled Activities : XX</option>
                <option value="option3"> Package Details</option>
              </Select>
            </Flex>
            <Flex direction="column" flex={1}>
              <Select placeholder="Reports Overview">
                <option value="option1">Monthly Summaries</option>
                <option value="option2">Hotels Performance</option>
                <option value="option3"> Restaurant Performance</option>
              </Select>
            </Flex>
            <Flex direction="column" flex={1}>
              <Select placeholder="Settings">
                <option value="option1">User Preferences</option>
                <option value="option2">Notifications</option>
              </Select>
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default Settings;
