import { FC } from "react";
import {
  Flex,
  Box,
  Heading,
  Button,
  ButtonGroup,
  IconButton,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { BsCalendarFill, BsListTask } from "react-icons/bs";
import ColorModeSwitcher from "../../UI/ColorModeSwitcher";
import { ViewMode } from "../../../util/constants";

export interface ToolbarProps {
  viewMode: ViewMode;
  onChangeViewMode: (mode: ViewMode) => void;
  onAddNote: () => void;
}

export const Toolbar: FC<ToolbarProps> = ({
  viewMode,
  onChangeViewMode,
  onAddNote,
}) => {
  const bg = useColorModeValue("primary.500", "primary.300");
  const color = useColorModeValue("white", "gray.800");
  return (
    <Flex
      as="nav"
      p={2}
      justify="space-between"
      bg={bg}
      color={color}
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1"
      boxShadow="sm"
    >
      <Box>
        <ButtonGroup isAttached variant="solid" colorScheme="accent">
          <IconButton
            borderRadius="md"
            isActive={viewMode === ViewMode.Calendar}
            aria-label="Show calendar"
            icon={<Icon as={BsCalendarFill} />}
            onClick={() => onChangeViewMode(ViewMode.Calendar)}
          />
          <IconButton
            borderRadius="md"
            isActive={viewMode === ViewMode.List}
            aria-label="Show list"
            icon={<Icon as={BsListTask} />}
            onClick={() => onChangeViewMode(ViewMode.List)}
          />
        </ButtonGroup>
      </Box>
      <Box p="2">
        <Heading size="md">Rick Manager</Heading>
      </Box>
      <Box>
        <ColorModeSwitcher mr="2" />
        <Button leftIcon={<AddIcon />} colorScheme="accent" onClick={onAddNote}>
          Tarea
        </Button>
      </Box>
    </Flex>
  );
};
