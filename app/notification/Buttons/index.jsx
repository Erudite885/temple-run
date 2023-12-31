"use client";

import { Button, ButtonGroup } from "@chakra-ui/react";

const Buttons = () => {
  return (
    <ButtonGroup
      variant="outline"
      spacing="5"
      justifyContent="flex-end"
      paddingY="30px"
      width="100%"
      paddingRight="50px"
    >
      <Button variant="solid" colorScheme="blue">
        Save Changes
      </Button>
      <Button variant="outline" colorScheme="blue">
        Reset Changes
      </Button>
    </ButtonGroup>
  );
};

export default Buttons;
