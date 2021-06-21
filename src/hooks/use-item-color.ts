import { useColorModeValue } from "@chakra-ui/react";

export const useItemColor = (isActive: boolean): [string, string] => {
  const bg = useColorModeValue(
    !isActive ? "white" : "gray.100",
    !isActive ? "gray.700" : "gray.800"
  );
  const hoverBg = useColorModeValue("gray.50", "gray.800");
  return [bg, hoverBg];
};
