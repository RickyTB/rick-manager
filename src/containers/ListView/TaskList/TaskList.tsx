import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useHeaderPanel, useDB } from "../../../hooks";
import db, { ISubject, ITask } from "../../../db";
import { useState } from "react";
import { Task } from "../../../components/UI";

export interface TaskListProps {
  subject?: ISubject;
  selectedTask?: ITask;
  onSelect: (task: ITask) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  subject,
  selectedTask,
  onSelect,
}) => {
  const { bg, color } = useHeaderPanel();
  const [tasks, setTasks] = useState<ITask[]>([]);
  useDB(
    async (db) => {
      if (!subject) return;
      const tasks = await db.tasks
        .where("subjectId")
        .equals(subject.id!)
        .sortBy("dueDate");
      setTasks(tasks);
    },
    [db.tasks],
    [subject]
  );
  if (!subject) return <Text>Selecciona una materia</Text>;
  return (
    <Box overflowY="scroll" height="100%">
      <Flex
        justify="space-between"
        p={3}
        position="sticky"
        top="0"
        bg={bg}
        color={color}
        shadow="sm"
        zIndex="2"
        align="center"
      >
        <Heading size="sm">Tareas de {subject.name}</Heading>
      </Flex>
      {tasks.map((task) => (
        <Task
          key={task.id}
          content={task.content}
          dueDate={task.dueDate}
          finished={task.finished}
          onClick={() => onSelect(task)}
          isActive={selectedTask?.id === task.id}
        />
      ))}
    </Box>
  );
};

export default TaskList;
