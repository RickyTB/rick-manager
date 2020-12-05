import { useState } from "react";
import Toolbar from "../Navigation/Toolbar";
import CalendarView from "../../containers/CalendarView";
import ListView from "../../containers/ListView";
import { ViewMode, VIEW_MODE_LS_KEY } from "../../util/constants";
import { useUpdateEffect } from "../../hooks";

const loadViewMode = (): ViewMode =>
  (localStorage.getItem(VIEW_MODE_LS_KEY) as ViewMode) || ViewMode.Calendar;

const Layout = () => {
  const [viewMode, setViewMode] = useState<ViewMode>(loadViewMode);
  const handleAddNote = () => console.log("xd");

  useUpdateEffect(() => {
    localStorage.setItem(VIEW_MODE_LS_KEY, viewMode);
  }, [viewMode]);

  return (
    <>
      <Toolbar
        viewMode={viewMode}
        onAddNote={handleAddNote}
        onChangeViewMode={setViewMode}
      />
      {viewMode === ViewMode.Calendar && <CalendarView />}
      {viewMode === ViewMode.List && <ListView />}
    </>
  );
};

export default Layout;
