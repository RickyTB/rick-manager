import { Flex, Box } from "@chakra-ui/react";
import SubjectList from "./SubjectList";
import { useState, useEffect } from "react";
import { ISubject, ITask } from "../../db";
import TaskList from "./TaskList";
import TaskView from "./TaskView";

export default function ListView() {
  const [selectedSubject, setSelectedSubject] = useState<ISubject>();
  const [selectedTask, setSelectedTask] = useState<ITask>();

  useEffect(() => {
    setSelectedTask(undefined);
  }, [selectedSubject]);

  return (
    <Flex h="100vh" paddingTop="56px">
      <Box flex="2">
        <SubjectList
          onSelect={setSelectedSubject}
          selectedId={selectedSubject?.id}
        />
      </Box>
      <Box flex="2">
        <TaskList
          subject={selectedSubject}
          onSelect={setSelectedTask}
          selectedTask={selectedTask}
        />
      </Box>
      <Box flex="5">
        <TaskView task={selectedTask} />
      </Box>
    </Flex>
  );
}
