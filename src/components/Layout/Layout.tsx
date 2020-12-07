import { useState } from "react";
import Toolbar from "../Navigation/Toolbar";
import CalendarView from "../../containers/CalendarView";
import ListView from "../../containers/ListView";
import { ViewMode, VIEW_MODE_LS_KEY } from "../../util/constants";
import { useUpdateEffect } from "../../hooks";
import { AddTask } from "../UI";
import { useDisclosure } from "@chakra-ui/react";

const loadViewMode = (): ViewMode =>
  (localStorage.getItem(VIEW_MODE_LS_KEY) as ViewMode) || ViewMode.List;

const Layout = () => {
  const [viewMode, setViewMode] = useState<ViewMode>(loadViewMode);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [resetting, setResetting] = useState(false);

  useUpdateEffect(() => {
    localStorage.setItem(VIEW_MODE_LS_KEY, viewMode);
  }, [viewMode]);

  const handleTaskAdded = () => {
    onClose();
    setResetting(true);
    setTimeout(() => {
      setResetting(false);
    }, 100);
  };

  return (
    <>
      <Toolbar
        viewMode={viewMode}
        onAddNote={onOpen}
        onChangeViewMode={setViewMode}
      />
      {!resetting && viewMode === ViewMode.Calendar && <CalendarView />}
      {!resetting && viewMode === ViewMode.List && <ListView />}
      <AddTask
        isOpen={isOpen}
        onClose={onClose}
        onTaskAdded={handleTaskAdded}
      />
    </>
  );
};

export default Layout;
