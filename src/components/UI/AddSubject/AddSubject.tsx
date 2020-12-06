import { useState, useCallback, FC } from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { CirclePicker, ColorResult } from "react-color";
import { useInput } from "../../../hooks";
import { ISubject } from "../../../db/models";

interface AddSubjectProps {
  onSubmit: (subject: ISubject) => void;
}

const AddSubject: FC<AddSubjectProps> = ({ onSubmit }) => {
  const [name, setName] = useInput("");
  const [color, setColor] = useState<string>();
  const handleColorChange = useCallback(
    (newValue: ColorResult) => setColor(newValue.hex),
    []
  );
  const handleSubmit = () => onSubmit({ name, color: color || "white" });
  return (
    <Box bg="white" p={3} borderBottomWidth="1px">
      <FormControl id="form-name" isRequired mb={3}>
        <FormLabel>Nombre</FormLabel>
        <Input
          placeholder="Nombre de la materia"
          value={name}
          onChange={setName}
        />
      </FormControl>
      <FormLabel>Color</FormLabel>
      <Box py={1} mb={4}>
        <CirclePicker color={color} onChange={handleColorChange} width="100%" />
      </Box>
      <Button
        colorScheme="primary"
        type="button"
        disabled={!color || !name}
        onClick={handleSubmit}
      >
        Agregar
      </Button>
    </Box>
  );
};

export default AddSubject;
