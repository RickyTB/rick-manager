import { Flex, Box, Text } from "@chakra-ui/react";
import SubjectList from "./SubjectList";
import { useState } from "react";
import { ISubject } from "../../db/models";

export default function ListView() {
  const [selectedSubject, setSelectedSubject] = useState<ISubject>();

  return (
    <Flex h="100vh" paddingTop="56px">
      <Box flex="2">
        <SubjectList
          onSelect={setSelectedSubject}
          selectedId={selectedSubject?.id}
        />
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
