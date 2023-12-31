import React from "react";
import StatsCard from "@/app/package-page/StatsCard";
import { Center, Box, Flex } from "@chakra-ui/react";
import DoubleLineChart from "../dashboard/charts/DoubleLineChart";

const Entertainments = ({ ...rest }) => {
  return (
    <StatsCard flex = {1} title="Entertainments" titleSize="x-large" withSelect {...rest}>
      <DoubleLineChart />
    </StatsCard>
  );
};

export default Entertainments;
