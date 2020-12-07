import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { chakraUIRenderer } from "../../../lib/chakra-markdown-renderer";
import ExpandableTextarea from "../ExpandableTextarea";

export interface TextareaPreviewProps {
  value: string;
  onChange: (newValue: string) => void;
  ref?: any;
}

const TextareaPreview: React.FC<TextareaPreviewProps> = React.forwardRef(
  ({ value, onChange }, ref: any) => {
    return (
      <HStack spacing={4} align="top" mb={4}>
        <Box flex="1">
          <ExpandableTextarea value={value} onChange={onChange} ref={ref} />
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
