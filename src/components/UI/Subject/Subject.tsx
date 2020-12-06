import { Badge, Button, Heading } from "@chakra-ui/react";
import React, { FC } from "react";

interface SubjectProps {
  name: string;
  color: string;
  count?: number;
  isActive?: boolean;
  onClick: () => void;
}

const Subject: FC<SubjectProps> = ({
  name,
  color,
  count = 0,
  isActive = false,
  onClick,
}) => (
  <Button
    py={3}
    borderBottomWidth="1px"
    bg="white"
    borderLeft={`8px solid ${color}`}
    borderRadius="none"
    as="button"
    display="block"
    w="100%"
    onClick={onClick}
    textAlign="left"
    _hover={{
      bg: "gray.50",
    }}
    _active={{
      bg: "gray.100",
    }}
    isActive={isActive}
  >
    <Heading fontSize="lg" px={2}>
      {name}
      {count > 0 && (
        <Badge
          colorScheme="accent"
          ml="1"
          borderRadius="full"
          py={1}
          px={2}
          float="right"
        >
          {count}
        </Badge>
      )}
    </Heading>
  </Button>
);

export default Subject;
