import { FC, useState } from "react";
import { AddIcon, RepeatIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Subject, AddSubject } from "../../../components/UI";
import db, { ISubject } from "../../../db";
import { useDB, TransactionState, useErrorEffect } from "../../../hooks";
import { useHeaderPanel } from "../../../hooks/use-header-panel";

export interface SubjectListProps {
  selectedId?: number;
  onSelect: (subject: ISubject) => void;
}

export const SubjectList: FC<SubjectListProps> = ({ selectedId, onSelect }) => {
  const [subjects, setSubjects] = useState<ISubject[]>([]);
  const [reload, setReload] = useState(false);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { bg, color } = useHeaderPanel();
  const toast = useToast();
  const [dbState, error] = useDB(
    async (db) => {
      const subjects = await db.subjects.orderBy("id").toArray();
      for (const subject of subjects) {
        subject.count = await db.tasks
          .where("subjectId")
          .equals(subject.id!)
          .and((subject) => subject.dueDate > new Date() && !subject.finished)
          .count();
      }
      setSubjects(subjects);
    },
    [db.subjects, db.tasks],
    [reload]
  );
  useErrorEffect(() => {
    toast({
      title: "Ocurrió un error.",
      description: error?.message,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }, error);
  const handleReloadClick = () => setReload((r) => !r);
  const handleAddSubject = async (subject: ISubject) => {
    await db.transaction("rw", db.subjects, async () => {
      const id = await db.subjects.add(subject);
      setSubjects((subjects) => [...subjects, { id, ...subject }]);
      onClose();
    });
  };

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
        <Heading size="sm">Materias</Heading>
        <Box>
          <IconButton
            variant="solid"
            colorScheme="accent"
            size="sm"
            mr={2}
            aria-label="Reload subjects"
            disabled={dbState === TransactionState.Loading}
            onClick={handleReloadClick}
            icon={<RepeatIcon />}
          />
          <IconButton
            variant="solid"
            colorScheme="accent"
            aria-label="Add subject"
            size="sm"
            isActive={isOpen}
            onClick={onToggle}
            icon={<AddIcon />}
          />
        </Box>
      </Flex>
      {isOpen && <AddSubject onSubmit={handleAddSubject} />}
      {subjects.map((subject) => (
        <Subject
          name={subject.name}
          color={subject.color}
          count={subject.count}
          key={subject.id}
          isActive={subject.id === selectedId}
          onClick={() => onSelect(subject)}
        />
      ))}
    </Box>
  );
};
