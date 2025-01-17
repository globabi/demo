import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './ui/pages/home';
import About from './ui/pages/about';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);

