"use client";
import React from "react";
import { Box, ButtonGroup, Button, useTheme } from "@chakra-ui/react";

const NameBar = ({ liveBookingNames, selectedNameIdx, onNameClick }) => {
  const theme = useTheme();
  return (
    <Box
      overflowX="auto"
      maxW="100%"
      borderRadius="lg"
      sx={{
        // Hiding scrollbar for Webkit browsers
        "&::-webkit-scrollbar": {
          display: "none",
        },
        // Hiding scrollbar for Firefox
        scrollbarWidth: "none",
        // Hiding scrollbar for IE and Edge
        "-ms-overflow-style": "none",
      }}
    >
      <ButtonGroup isAttached borderRadius="lg">
        {liveBookingNames.map((item, index) => (
          <Button
            key={index}
            p={7}
            onClick={() => {
              onNameClick(index);
            }}
            borderBottom={
              selectedNameIdx === index
                ? `2px solid ${theme.colors.blue[500]}`
                : "none"
            }
          >
            {item}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default NameBar;
