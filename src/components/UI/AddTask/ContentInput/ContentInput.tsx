import { useField } from "formik";
import React from "react";
import { TextareaPreview } from "../../TextareaPreview";

export interface ContentInputProps {
  ref?: any;
}

export const ContentInput: React.FC<ContentInputProps> = React.forwardRef(
  (_, ref) => {
    const [field, , helpers] = useField("content");
    return (
      <TextareaPreview
        value={field.value}
        onChange={helpers.setValue}
        ref={ref}
      />
    );
  }
);
