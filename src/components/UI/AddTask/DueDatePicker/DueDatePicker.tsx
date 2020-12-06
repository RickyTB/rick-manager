import { FormControl, FormLabel } from "@chakra-ui/react";
import React from "react";
import ReactDatePicker from "react-datepicker";
import { useField } from "formik";

export interface DueDatePickerProps {}

const DueDatePicker: React.FC<DueDatePickerProps> = () => {
  const [field, , helpers] = useField("dueDate");
  return (
    <FormControl flex="1">
      <FormLabel htmlFor="form-due-date">Fecha de entrega</FormLabel>
      <ReactDatePicker
        id="form-due-date"
        selected={field.value}
        onChange={helpers.setValue as any}
        showPopperArrow={true}
        locale="es"
        showTimeSelect
        timeFormat="p"
        timeIntervals={15}
        dateFormat="Pp"
      />
    </FormControl>
  );
};

export default DueDatePicker;
