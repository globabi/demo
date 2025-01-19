import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './ui/pages/home'
import About from './ui/pages/about'
import Pods from './ui/pages/pods'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='pods' element={<Pods />} />
    </Routes>
  </BrowserRouter>
)
