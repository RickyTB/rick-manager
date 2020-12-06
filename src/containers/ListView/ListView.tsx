import { Flex, Box, Text } from "@chakra-ui/react";
import SubjectList from "./SubjectList";

export default function ListView() {
  return (
    <Flex h="100vh" paddingTop="56px">
      <Box flex="2">
        <SubjectList />
      </Box>
      <Box flex="2">
        <Text>Box 2</Text>
      </Box>
      <Box flex="5">
        <Text>Box 3</Text>
      </Box>
    </Flex>
  );
}
