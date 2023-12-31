"use client";
import React, { useState } from "react";
import StatsCard from "../dashboard/StatsCard";
import { Flex, Button, Divider } from "@chakra-ui/react";
import PackagesTable from "./PackagesTable";

const NavButton = ({ active, setActive, Title }) => {
  console.log(active);
  return (
    <Button
      variant="ghost"
      borderBottom={active === Title ? "1px solid orange" : ""}
      borderRadius="0"
      transform={active == Title ? "translateY(-2px)" : ""}
      color={active === Title ? "orange" : ""}
      _hover={{ transform: "translateY(-2px)" }}
      onClick={() => setActive(Title)}
    >
      {Title}
    </Button>
  );
};

const PackagesDataTable = ({ ...rest }) => {
  const [active, setActive] = useState("WellBeing");
  return (
    <>
      <StatsCard flex = {1} {...rest} m="5">
        <Flex justify="center" gap={5}>
          <NavButton 
            setActive={setActive} 
            active={active} 
            Title="Wellbeing" 
          />
          <Divider h="4vh" bg="white" orientation="vertical" />
          <NavButton
            setActive={setActive}
            active={active}
            Title="Entertainments"
          />
          <Divider h="4vh" bg="white" orientation="vertical" />
          <NavButton 
            setActive={setActive} 
            active={active} 
            Title="Adventures" 
          />
        </Flex>
        <PackagesTable />
      </StatsCard>
    </>
  );
};

export default PackagesDataTable;
