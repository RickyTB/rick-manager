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
import React, { FC } from "react";
import { useRef } from "react";
import { Form, Formik } from "formik";
import ContentInput from "./ContentInput";
import SubjectSelect from "./SubjectSelect";
import DueDatePicker from "./DueDatePicker";

const initialValues = {
  content: "",
  dueDate: new Date(),
  subjectId: 0,
};

export interface AddTaskProps extends Pick<ModalProps, "onClose" | "isOpen"> {}

const AddTask: FC<AddTaskProps> = ({ onClose, isOpen }) => {
  const initialRef = useRef<any>();
  const handleSubmit = (values: any) => console.log(values);
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
