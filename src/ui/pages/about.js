import React from "react";
import { Box } from "@chakra-ui/react"
import Header from "../molecules/header";

export default function About() {
  return (
    <div className="App">
        <Header />
        <Box m={2}>
            About Page
        </Box>
    </div>
  );
}