import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const BookingOptions = () => {
  //TODO: add interactivity depending on which button is clicked
  return (
    <ButtonGroup variant="outline" size="sm">
      <Button colorScheme="blue" borderRadius="xl">
        TODAY
      </Button>
      <Button colorScheme="facebook" borderRadius="xl">
        ALL
      </Button>
    </ButtonGroup>
  );
};

export default BookingOptions;