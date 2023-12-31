import { Tbody, Tr, Td, Stack, Checkbox } from "@chakra-ui/react";

function TbodyComp() {
  const tableRows = [
    {
      id: 1,
      name: 'Yasar',
      dob: 'DD/MM/YY',
      title: 'mohammad.yasar@megatransact.com',
      status: 'coming on monday',
    },
    {
      id: 2,
      name: 'Jospin',
      dob: 'DD/MM/YY',
      title: 'Jospin@megatransact.com',
      status: 'coming on monday',
    },
    {
      id: 3,
      name: 'J Aug',
      dob: 'DD/MM/YY',
      title: 'mohammad.yasar@megatransact.com',
      status: 'coming on monday',
    },
    {
      id: 4,
      name: 'Rehyan',
      dob: 'DD/MM/YY',
      title: 'mohammad.yasar@megatransact.com',
      status: 'coming on monday',
    },
    {
      id: 5,
      name: 'Nathan',
      dob: 'DD/MM/YY',
      title: 'mohammad.yasar@megatransact.com',
      status: 'coming on monday',
    },
    {
      id: 6,
      name: 'Christy',
      dob: 'DD/MM/YY',
      title: 'mohammad.yasar@megatransact.com',
      status: 'coming on monday',
    },
    {
      id: 7,
      name: 'Karim',
      dob: 'DD/MM/YY',
      title: 'mohammad.yasar@megatransact.com',
      status: 'coming on monday',
    },
    // Add more rows as needed
  ];

  return (
    <Tbody>
      {tableRows.map((row) => (
        <Tr key={row.id}>
          <Td>
            <Stack spacing={5} direction="row">
              <Checkbox colorScheme="red" defaultChecked />
            </Stack>
          </Td>
          <Td textAlign="center">{row.id}</Td>
          <Td textAlign="center">{row.name}</Td>
          <Td textAlign="center">{row.dob}</Td>
          <Td textAlign="center">{row.title}</Td>
          <Td textAlign="center">{row.status}</Td>
        </Tr>
      ))}
    </Tbody>
  );
}

export default TbodyComp;