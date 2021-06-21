import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/Layout";
import theme from "./theme";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layout />
    </ChakraProvider>
  );
};
