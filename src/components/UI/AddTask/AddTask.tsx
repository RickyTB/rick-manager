import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  ModalProps,
  Stack,
} from "@chakra-ui/react";
import React, { FC, useRef } from "react";
import { Form, Formik } from "formik";
import ContentInput from "./ContentInput";
import SubjectSelect from "./SubjectSelect";
import DueDatePicker from "./DueDatePicker";
import db, { ITask } from "../../../db";

interface TaskFormValues {
  content: string;
  dueDate: Date;
  subjectId: number;
}

const initialValues: TaskFormValues = {
  content: "",
  dueDate: new Date(),
  subjectId: 0,
};

export interface AddTaskProps extends Pick<ModalProps, "onClose" | "isOpen"> {
  onTaskAdded: (newTask: ITask) => void;
}

const AddTask: FC<AddTaskProps> = ({ onClose, isOpen, onTaskAdded }) => {
  const initialRef = useRef<any>();
  const handleSubmit = async (values: TaskFormValues) => {
    await db.transaction("rw", db.tasks, async () => {
      const newTask = { ...values, createdAt: new Date(), finished: false };
      const id = await db.tasks.add(newTask);
      onTaskAdded({ id, ...newTask });
    });
  };
  return (
    <Modal
      onClose={onClose}
      size="xl"
      isOpen={isOpen}
      closeOnOverlayClick={false}
      initialFocusRef={initialRef}
      scrollBehavior="outside"
    >
      <ModalOverlay />
      <ModalContent maxW="72rem">
        <ModalHeader>Nueva Tarea</ModalHeader>
        <ModalCloseButton />
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {() => (
            <Form>
              <ModalBody>
                <ContentInput ref={initialRef} />
                <Stack direction={["column", "row"]} spacing={4}>
                  <SubjectSelect />
                  <DueDatePicker />
                </Stack>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="primary" type="submit">
                  Guardar
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
};

export default AddTask;
