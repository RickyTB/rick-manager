import { Text, Box } from "@chakra-ui/react";
import { ITask } from "../../../db";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { chakraUIRenderer } from "../../../lib/chakra-markdown-renderer";
import { format } from "date-fns";
import es from "date-fns/locale/es";

export interface TaskViewProps {
  task?: ITask;
}

const TaskView: React.FC<TaskViewProps> = ({ task }) => {
  if (!task) return <Text>Selecciona una tarea</Text>;
  return (
    <Box p={6} overflowY="scroll" height="100%">
      <ReactMarkdown
        plugins={[gfm]}
        children={task.content}
        renderers={chakraUIRenderer}
      />
      <Text mt={4} mb={2}>
        <strong>Fecha de entrega:</strong>{" "}
        {format(task.dueDate, "iiii Pp", { locale: es })}
      </Text>
      <Text mb={4}>
        <strong>Anotado:</strong>{" "}
        {format(task.createdAt, "iiii Pp", { locale: es })}
      </Text>
    </Box>
  );
};

export default TaskView;
