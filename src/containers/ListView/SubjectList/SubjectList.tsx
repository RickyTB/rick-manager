import { useState } from "react";
import { AddIcon, RepeatIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { Subject } from "../../../components/UI";

const generateArray = () => new Array(50).fill(0);

const SubjectList = () => {
  const [subjects, setSubjects] = useState(generateArray);
  const bg = useColorModeValue("primary.200", "primary.500");
  const color = useColorModeValue("gray.800", "white");
  return (
    <Box overflowY="scroll" height="100%">
      <Flex
        justify="space-between"
        p={3}
        position="sticky"
        top="0"
        bg={bg}
        color={color}
        shadow="sm"
        zIndex="2"
        align="center"
      >
        <Heading size="sm">Materias</Heading>
        <Box>
          <IconButton
            variant="solid"
            colorScheme="accent"
            size="sm"
            mr={2}
            aria-label="Send email"
            icon={<RepeatIcon />}
          />
          <IconButton
            variant="solid"
            colorScheme="accent"
            aria-label="Send email"
            size="sm"
            icon={<AddIcon />}
          />
        </Box>
      </Flex>
      {subjects.map((_, index) => (
        <Subject
          name={`Materia ${index}`}
          color="#ff6d00"
          count={index}
          key={`subject-${index}`}
          isActive={index === 3}
        />
      ))}
    </Box>
  );
};

export default SubjectList;
