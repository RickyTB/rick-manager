import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import React, { ChangeEvent } from "react";
import { useField } from "formik";
import { useDB } from "../../../../hooks";
import db, { ISubject } from "../../../../db";
import { useState } from "react";

export interface SubjectSelectProps {}

const SubjectSelect: React.FC<SubjectSelectProps> = () => {
  const [field, , helpers] = useField("subjectId");
  const [subjects, setSubjects] = useState<ISubject[]>([]);

  useDB(
    async (db) => {
      const subjects = await db.subjects.orderBy("id").toArray();
      setSubjects(subjects);
    },
    [db.subjects],
    []
  );

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) =>
    helpers.setValue(+e.target.value);

  return (
    <FormControl id="form-subject" flex="1">
      <FormLabel>Materia</FormLabel>
      <Select
        placeholder="Selecciona la materia"
        required
        {...field}
        onChange={handleChange}
      >
        {subjects.map((subject) => (
          <option value={subject.id} key={subject.id}>
            {subject.name}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default SubjectSelect;
