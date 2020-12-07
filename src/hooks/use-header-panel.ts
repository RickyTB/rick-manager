import { useColorModeValue } from "@chakra-ui/react";

export function useHeaderPanel() {
  const bg = useColorModeValue("primary.200", "primary.500");
  const color = useColorModeValue("gray.800", "white");
  return { bg, color };
}
