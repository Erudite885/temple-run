"use client";

import { Button, ButtonGroup } from "@chakra-ui/react";

const AdminButton = () => {
  return (
    <ButtonGroup
      variant="outline"
      spacing="5"
      justifyContent="flex-end"
      pb="30px"
      width="100%"
      paddingRight="50px"
    >
      <Button variant="solid" colorScheme="blue">
        Save Changes
      </Button>
      <Button variant="outline" colorScheme="blue">
        Edit Profile
      </Button>
    </ButtonGroup>
  );
};

export default AdminButton;
