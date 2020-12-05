import { FC } from "react";
import {
  Flex,
  Box,
  Heading,
  Button,
  ButtonGroup,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { BsCalendarFill, BsListTask } from "react-icons/bs";
import ColorModeSwitcher from "../../UI/ColorModeSwitcher";
import { ViewMode } from "../../../util/constants";

interface ToolbarProps {
  viewMode: ViewMode;
  onChangeViewMode: (mode: ViewMode) => void;
  onAddNote: () => void;
}

const Toolbar: FC<ToolbarProps> = ({
  viewMode,
  onChangeViewMode,
  onAddNote,
}) => {
  return (
    <Flex
      as="nav"
      p={2}
      justify="space-between"
      bgColor="tomato"
      position="sticky"
      top="0"
      zIndex="1"
    >
      <Box>
        <ButtonGroup isAttached variant="solid">
          <IconButton
            isActive={viewMode === ViewMode.Calendar}
            aria-label="Show calendar"
            icon={<Icon as={BsCalendarFill} />}
            onClick={() => onChangeViewMode(ViewMode.Calendar)}
          />
          <IconButton
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
        <Button leftIcon={<AddIcon />} colorScheme="blue" onClick={onAddNote}>
          Tarea
        </Button>
      </Box>
    </Flex>
  );
};

export default Toolbar;
