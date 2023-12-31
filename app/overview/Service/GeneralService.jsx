import {
    Td,
    Tr,
  } from "@chakra-ui/react";

const GeneralService = ({ id, name, phone, email, current, rating}) => (
    <Tr>
        <Td textAlign="center">{id}</Td>
        <Td textAlign="center">{name}</Td>
        <Td textAlign="center">{phone}</Td>
        <Td textAlign="center">{email}</Td>
        <Td textAlign="center">{current}</Td>
        <Td textAlign="center">{rating}</Td> 
    </Tr>
);

export default GeneralService;
