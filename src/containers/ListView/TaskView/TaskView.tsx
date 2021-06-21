import {
  Text,
  Box,
  Checkbox,
  HStack,
  IconButton,
  Icon,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import db, { ITask } from "../../../db";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { chakraUIRenderer } from "../../../lib";
import { format } from "date-fns";
import es from "date-fns/locale/es";
import { EditIcon } from "@chakra-ui/icons";
import { DeleteButton, ExpandableTextarea } from "../../../components/UI";
import { IoSaveOutline } from "react-icons/io5";
import React, { useState, useRef } from "react";
import ReactDatePicker from "react-datepicker";

export interface TaskViewProps {
  task?: ITask;
  onUpdate: (task: ITask) => void;
  onDelete: (id: number) => void;
}

export const TaskView: React.FC<TaskViewProps> = ({
  task,
  onUpdate,
  onDelete,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [updatedContent, setUpdatedContent] = useState("");
  const [updatedDate, setUpdatedDate] = useState<Date>();
  const textRef = useRef<any>();
  const handleUpdate = async (props: Partial<ITask>) => {
    await db.transaction("rw", db.tasks, async () => {
      await db.tasks.update(task!.id!, props);
      onUpdate({ ...task, ...props } as ITask);
    });
  };
  const handleCheckbox = (e: any) =>
    handleUpdate({ finished: e.target.checked });
  const handleDelete = async () => {
    await db.transaction("rw", db.tasks, async () => {
      await db.tasks.delete(task!.id!);
      onDelete(task!.id!);
    });
  };
  const handleTurnEdit = () => {
    setUpdatedContent(task!.content);
    setUpdatedDate(task!.dueDate);
    setIsEdit(true);
  };
  const handleCloseEdit = async () => {
    await handleUpdate({ content: updatedContent, dueDate: updatedDate });
    setIsEdit(false);
  };
  if (!task) return <Text>Selecciona una tarea</Text>;
  return (
    <Box p={6} overflowY="scroll" height="100%" position="relative">
      <HStack
        position="absolute"
        top="1rem"
        right="1rem"
        spacing={2}
        zIndex="2"
      >
        <IconButton
          aria-label="Turn edit mode"
          icon={isEdit ? <Icon as={IoSaveOutline} /> : <EditIcon />}
          colorScheme={isEdit ? "accent" : "primary"}
          variant="outline"
          onClick={isEdit ? handleCloseEdit : handleTurnEdit}
        />
        <DeleteButton
          title="Eliminar tarea"
          text="¿Está seguro de querer eliminar la tarea? Esta acción no se puede deshacer."
          onClick={handleDelete}
        />
      </HStack>
      {isEdit ? (
        <ExpandableTextarea
          value={updatedContent}
          onChange={setUpdatedContent}
          ref={textRef}
        />
      ) : (
        <ReactMarkdown
          plugins={[gfm]}
          children={task.content}
          components={chakraUIRenderer}
        />
      )}
      {isEdit ? (
        <FormControl mt={4} mb={2}>
          <FormLabel htmlFor="form-due-date">Fecha de entrega</FormLabel>
          <ReactDatePicker
            id="form-due-date"
            selected={updatedDate}
            onChange={setUpdatedDate as any}
            showPopperArrow={true}
            locale="es"
            showTimeSelect
            timeFormat="p"
            timeIntervals={15}
            dateFormat="Pp"
          />
        </FormControl>
      ) : (
        <Text mt={4} mb={2}>
          <strong>Fecha de entrega:</strong>{" "}
          {format(task.dueDate, "iiii Pp", { locale: es })}
        </Text>
      )}
      <Text mb={4}>
        <strong>Anotado:</strong>{" "}
        {format(task.createdAt, "iiii Pp", { locale: es })}
      </Text>
      <Checkbox
        size="lg"
        colorScheme="green"
        isChecked={task.finished}
        onChange={handleCheckbox}
      >
        Finalizado
      </Checkbox>
    </Box>
  );
};
