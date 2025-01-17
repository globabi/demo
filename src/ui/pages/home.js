import React from "react";
import { 
    Box
} from "@chakra-ui/react"
import Header from "../molecules/header";

export default function Home() {
    return (
        <div className="App">
            <Header />
            <Box m={2}>
                Home Page
            </Box>
        </div>
    );
}
