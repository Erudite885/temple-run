import React from "react";
import StatsCard from "./StatsCard";
import LineChartData from "./charts/LineChart";

const Revenues = () => {
  return (
    <StatsCard
      borderRadius="xl"
      title="Revenues"
      titleSize="x-large"
      m={5}
      mt={10}
      mr={7}
      withSelect={true}
      withLegend={true}
    >
      <LineChartData />
    </StatsCard>
  );
};

export default Revenues;
