import { Badge, Button, Heading } from "@chakra-ui/react";
import React, { FC } from "react";

interface SubjectProps {
  name: string;
  color: string;
  count: number;
  isActive?: boolean;
}

const Subject: FC<SubjectProps> = ({
  name,
  color,
  count,
  isActive = false,
}) => {
  const handleClick = (e: any) => {
    e.preventDefault();
  };

  return (
    <Button
      py={3}
      borderBottomWidth="1px"
      bg="white"
      borderLeft={`8px solid ${color}`}
      borderRadius="none"
      as="button"
      display="block"
      w="100%"
      onClick={handleClick}
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
      </Heading>
    </Button>
  );
};

export default Subject;
