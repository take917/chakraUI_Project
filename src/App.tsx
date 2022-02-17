import { Button, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import "./styles.css";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">ボタン</Button>
    </ChakraProvider>
  );
}
