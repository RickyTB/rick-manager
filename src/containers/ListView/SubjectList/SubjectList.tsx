import { FC, useState } from "react";
import { AddIcon, RepeatIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Subject } from "../../../components/UI";
import { AddSubject } from "../../../components/UI";
import { ISubject } from "../../../db/models";
import db from "../../../db";
import { useDB } from "../../../hooks";
import { TransactionState } from "../../../hooks/use-db";

interface SubjectListProps {
  selectedId?: number;
  onSelect: (subject: ISubject) => void;
}

const SubjectList: FC<SubjectListProps> = ({ selectedId, onSelect }) => {
  const [subjects, setSubjects] = useState<ISubject[]>([]);
  const [reload, setReload] = useState(false);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const bg = useColorModeValue("primary.200", "primary.500");
  const color = useColorModeValue("gray.800", "white");
  const [dbState, error] = useDB(
    async (db) => {
      const subjects = await db.subjects.orderBy("id").toArray();
      setSubjects(subjects);
    },
    [db.subjects],
    [reload]
  );
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
      {subjects.map((subject, index) => (
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

export default SubjectList;
