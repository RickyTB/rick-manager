import { Box, Text } from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import React from "react";
import ReactMarkdown from "react-markdown";
import es from "date-fns/locale/es";
import { CheckIcon, MinusIcon, TimeIcon } from "@chakra-ui/icons";

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
      <Text fontStyle="italic" color="accent.400" fontSize="sm" mb={1}>
        <TimeIcon /> Entrega{" "}
        {formatDistanceToNow(dueDate, { locale: es, addSuffix: true })}
      </Text>
      <Text
        fontStyle="italic"
        color={finished ? "green.600" : "gray.600"}
        fontSize="sm"
      >
        {finished ? <CheckIcon /> : <MinusIcon />}{" "}
        {finished ? "Finalizado" : "Pendiente"}
      </Text>
    </Box>
  );
};

export default Task;
