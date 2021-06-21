import { Badge, Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useItemColor } from "../../../hooks";

export interface SubjectProps {
  name: string;
  color: string;
  count?: number;
  isActive?: boolean;
  onClick: () => void;
}

export const Subject: React.FC<SubjectProps> = ({
  name,
  color,
  count = 0,
  isActive = false,
  onClick,
}) => {
  const [bg, hoverBg] = useItemColor(isActive);
  return (
    <Box
      py={3}
      borderBottomWidth="1px"
      bg={bg}
      borderLeft={`8px solid ${color}`}
      borderRadius="none"
      as="button"
      display="block"
      w="100%"
      onClick={onClick}
      textAlign="left"
      whiteSpace="normal"
      _hover={{
        bg: hoverBg,
      }}
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
    </Box>
  );
};
