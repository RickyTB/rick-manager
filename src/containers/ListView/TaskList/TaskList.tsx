import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useHeaderPanel, useDB } from "../../../hooks";
import db, { ISubject, ITask } from "../../../db";
import { useState, useEffect } from "react";
import { Task } from "../../../components/UI";
import { isFuture } from "date-fns";

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
  const [upcTasks, setUpcTasks] = useState<ITask[]>([]);
  const [pastTasks, setPastTasks] = useState<ITask[]>([]);
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
  useEffect(() => {
    if (!selectedTask) return;
    const index = tasks.indexOf(selectedTask);
    if (index === -1) {
      setTasks((tasks) =>
        tasks.map((task) => (task.id === selectedTask.id ? selectedTask : task))
      );
    }
    // eslint-disable-next-line
  }, [selectedTask]);
  useEffect(() => {
    let upcTasks = [];
    let pastTasks = [];
    for (const task of tasks) {
      if (isFuture(task.dueDate)) {
        upcTasks.push(task);
      } else {
        pastTasks.push(task);
      }
    }
    setUpcTasks(upcTasks);
    setPastTasks(pastTasks);
  }, [tasks]);
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
      {upcTasks.map((task) => (
        <Task
          key={task.id}
          content={task.content}
          dueDate={task.dueDate}
          finished={task.finished}
          onClick={() => onSelect(task)}
          isActive={selectedTask?.id === task.id}
        />
      ))}
      {pastTasks.length > 0 && (
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
          <Heading size="sm">Tareas pasadas</Heading>
        </Flex>
      )}
      {pastTasks.map((task) => (
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
