/*
Taken from: https://github.com/mustaphaturhan/chakra-ui-markdown-renderer/blob/53b6d2c1ff68effa870888855910235ec4ec4611/src/index.js
*/

import React, { ElementType } from "react";
import {
  Text,
  Code,
  Divider,
  Link,
  List,
  Checkbox,
  ListItem,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

function getCoreProps(props: any): any {
  return props["data-sourcepos"]
    ? { "data-sourcepos": props["data-sourcepos"] }
    : {};
}

export const defaults: { [nodeType: string]: ElementType } = {
  paragraph: (props) => {
    const { children } = props;
    return <Text mb={2}>{children}</Text>;
  },
  emphasis: (props) => {
    const { children } = props;
    return <Text as="em">{children}</Text>;
  },
  blockquote: (props) => {
    const { children } = props;
    return <Code p={2}>{children}</Code>;
  },
  code: ({ language, value }) =>
    value ? (
      <SyntaxHighlighter style={tomorrow} language={language} showLineNumbers>
        {value}
      </SyntaxHighlighter>
    ) : null,
  delete: (props) => {
    const { children } = props;
    return <Text as="del">{children}</Text>;
  },
  thematicBreak: (props) => <Divider my={4} {...props}/>,
  link: (props) => <Link {...props} color="primary.500" isExternal/>,
  img: Image,
  linkReference: Link,
  imageReference: Image,
  text: (props) => {
    const { children } = props;
    return (
      <Text as="span" mb={4}>
        {children}
      </Text>
    );
  },
  list: (props) => {
    const { start, ordered, children, depth } = props;
    const attrs = getCoreProps(props);
    if (start !== null && start !== 1 && start !== undefined) {
      attrs.start = start.toString();
    }
    let styleType = "disc";
    if (ordered) styleType = "decimal";
    if (depth === 1) styleType = "circle";
    return (
      <List
        spacing={1}
        as={ordered ? "ol" : "ul"}
        styleType={styleType}
        pl={4}
        mb={4}
        {...attrs}
      >
        {children}
      </List>
    );
  },
  listItem: (props) => {
    const { children, checked } = props;
    let checkbox = null;
    if (checked !== null && checked !== undefined) {
      checkbox = (
        <Checkbox isChecked={checked} isReadOnly>
          {children}
        </Checkbox>
      );
    }
    return (
      <ListItem
        {...getCoreProps(props)}
        listStyleType={checked !== null ? "none" : "inherit"}
      >
        {checkbox || children}
      </ListItem>
    );
  },
  definition: () => null,
  heading: (props) => {
    const { level, children } = props;
    const sizes = ["2xl", "xl", "lg", "md", "sm", "xs"];
    return (
      <Heading
        mb={4}
        as={`h${level}` as any}
        size={sizes[`${level - 1}` as any] as any}
        {...getCoreProps(props)}
      >
        {children}
      </Heading>
    );
  },
  inlineCode: (props) => {
    const { children } = props;
    return <Code {...getCoreProps(props)}>{children}</Code>;
  },
};

function ChakraUIRenderer(theme = defaults) {
  return {
    paragraph: theme.paragraph,
    emphasis: theme.emphasis,
    blockquote: theme.blockquote,
    code: theme.code,
    delete: theme.delete,
    thematicBreak: theme.thematicBreak,
    link: theme.link,
    img: theme.img,
    linkReference: theme.linkReference,
    imageReference: theme.imageReference,
    text: theme.text,
    list: theme.list,
    listItem: theme.listItem,
    definition: theme.definition,
    heading: theme.heading,
    inlineCode: theme.inlineCode,
  };
}

export default ChakraUIRenderer;

export const chakraUIRenderer = ChakraUIRenderer();
