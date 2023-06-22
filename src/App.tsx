import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

import { Router } from "../src/router/Router";

export default function App() {
  return (
    // <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    // </ChakraProvider>
  );
}
