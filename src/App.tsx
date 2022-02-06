import { ChakraProvider, CSSReset, Box,  } from "@chakra-ui/react";
import React from "react";
import { Form } from "./components/Form";
import "react-datepicker/dist/react-datepicker.css"
import theme from "./theme/theme"

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box p={4}>
        <Form />
      </Box>
    </ChakraProvider>
  );
}
//TODO
// Check field data
//  move to component
