// components/Pagination.js
import { Flex, Button, Icon } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon, ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";


function Pagination() {
  return (
    <Flex justify="space-between" margin="20px">
      <Button padding="0px 10px" background="#707070" color="white">
        <Icon as={ArrowBackIcon} />
      </Button>
      <div>
        <Button padding="0px 10px" background="#2D8CFF" color="white">
          1
        </Button>
        <Button
          padding="0px 10px"
          background="transparent"
          color="#2D8CFF"
          border="1px solid #2D8CFF"
        >
          2
        </Button>
      </div>
      <Button padding="0px 10px" background="#2D8CFF" color="white">
        <Icon as={ArrowForwardIcon} />
      </Button>
    </Flex>
  );
}

export default Pagination;