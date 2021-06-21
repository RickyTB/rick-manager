import { Box, Text } from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import React from "react";
import ReactMarkdown from "react-markdown";
import es from "date-fns/locale/es";
import { CheckIcon, MinusIcon, TimeIcon } from "@chakra-ui/icons";
import { useItemColor } from "../../../hooks";

export interface TaskProps {
  content: string;
  dueDate: Date;
  finished: boolean;
  onClick: () => void;
  isActive: boolean;
}

export const Task: React.FC<TaskProps> = ({
  content,
  dueDate,
  finished,
  onClick,
  isActive,
}) => {
  const [bg, hoverBg] = useItemColor(isActive);
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
        bg: hoverBg,
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
