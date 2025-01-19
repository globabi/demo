import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './ui/pages/home'
import About from './ui/pages/about'
import LayoutDefault from './ui/templates/layoutdefault'
import Header from './ui/organisms/header'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='about' element={<About />} />
      <Route path='layout_default' element={<LayoutDefault header={<Header />} />} />
    </Routes>
  </BrowserRouter>
)
