import { Box, HStack, Textarea } from "@chakra-ui/react";
import React, { ChangeEvent } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { chakraUIRenderer } from "../../../lib/chakra-markdown-renderer";

export interface TextareaPreviewProps {
  value: string;
  onChange: (newValue: string) => void;
  ref?: any;
}

const MIN_HEIGHT = 16 * 10;

const TextareaPreview: React.FC<TextareaPreviewProps> = React.forwardRef(
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
      <HStack spacing={4} align="top" mb={4}>
        <Box flex="1">
          <Textarea
            placeholder="Comienza a escribir"
            ref={ref as any}
            isRequired
            focusBorderColor="none"
            rows={10}
            onChange={handleChange}
            value={value}
            fontFamily="monospace"
            bgColor="gray.50"
            onInput={handleInput}
          />
        </Box>
        <Box flex="1">
          <ReactMarkdown
            plugins={[gfm]}
            children={value}
            renderers={chakraUIRenderer}
          />
        </Box>
      </HStack>
    );
  }
);

export default TextareaPreview;
