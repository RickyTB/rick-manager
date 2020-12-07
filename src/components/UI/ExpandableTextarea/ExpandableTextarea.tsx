import { Textarea } from "@chakra-ui/react";
import React, { ChangeEvent } from "react";

export interface ExpandableTextareaProps {
  value: string;
  onChange: (newValue: string) => void;
  ref?: any;
}

const MIN_HEIGHT = 16 * 10;

const ExpandableTextarea: React.FC<ExpandableTextareaProps> = React.forwardRef(
  ({ value, onChange }, ref: any) => {
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
      onChange(e.target.value);
    const handleInput = () => {
      if (!ref?.current) return;
      ref.current.style.height = "";
      ref.current.style.height =
        Math.max(ref.current.scrollHeight, MIN_HEIGHT) + 8 + "px";
    };
    return (
      <Textarea
        placeholder="Comienza a escribir"
        ref={ref}
        isRequired
        focusBorderColor="none"
        rows={10}
        onChange={handleChange}
        value={value}
        fontFamily="monospace"
        bgColor="gray.50"
        onInput={handleInput}
      />
    );
  }
);

export default ExpandableTextarea;
