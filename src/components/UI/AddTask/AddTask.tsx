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
} from "@chakra-ui/react";
import React, { FC } from "react";
import { useRef, useState } from "react";
import TextareaPreview from "../TextareaPreview";

export interface AddTaskProps extends Pick<ModalProps, "onClose" | "isOpen"> {}

const AddTask: FC<AddTaskProps> = ({ onClose, isOpen }) => {
  const initialRef = useRef<any>();
  const [textValue, setTextValue] = useState("");
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
        <ModalBody>
          <TextareaPreview
            value={textValue}
            onChange={setTextValue}
            ref={initialRef}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="primary" onClick={onClose}>
            Guardar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddTask;
