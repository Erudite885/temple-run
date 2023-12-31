import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const BookingOptions = ({ selectedOption, onOptionClick }) => {
  return (
    <ButtonGroup variant="outline" size="sm">
      <Button
        colorScheme={selectedOption === "TODAY" ? "blue" : "facebook"}
        borderRadius="xl"
        onClick={() => onOptionClick("TODAY")}
      >
        TODAY
      </Button>
      <Button
        colorScheme={selectedOption === "ALL" ? "blue" : "facebook"}
        borderRadius="xl"
        onClick={() => onOptionClick("ALL")}
      >
        ALL
      </Button>
    </ButtonGroup>
  );
};

export default BookingOptions;
