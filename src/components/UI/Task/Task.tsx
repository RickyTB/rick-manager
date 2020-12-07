import { Box, Text } from "@chakra-ui/react";
import { formatDistance } from "date-fns";
import React from "react";
import ReactMarkdown from "react-markdown";
import es from "date-fns/locale/es";
import { TimeIcon } from "@chakra-ui/icons";

export interface TaskProps {
  content: string;
  dueDate: Date;
  finished: boolean;
  onClick: () => void;
  isActive: boolean;
}

const Task: React.FC<TaskProps> = ({
  content,
  dueDate,
  finished,
  onClick,
  isActive,
}) => {
  const bg = !isActive ? "white" : "gray.100";
  return (
    <Box
      py={3}
      borderBottomWidth="1px"
      bg={bg}
      borderRadius="none"
      as="button"
      display="block"
      w="100%"
      p={4}
      onClick={onClick}
      textAlign="left"
      whiteSpace="normal"
      _hover={{
        bg: !isActive ? "gray.100" : "gray.200",
      }}
    >
      <Box maxH="8rem" overflow="hidden" mb={2}>
        <ReactMarkdown children={content} />
      </Box>
      <Text fontStyle="italic" color="accent.400" fontSize="sm">
        <TimeIcon /> Entrega en{" "}
        {formatDistance(dueDate, new Date(), { locale: es })}
      </Text>
    </Box>
  );
};

export default Task;
