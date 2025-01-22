import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './ui/pages/home'
import About from './ui/pages/about'
import Pods from './ui/pages/pods'
import Header from './ui/organisms/header'
import Footer from './ui/organisms/footer'

import { EN } from './content/language/en'
import { ES } from './content/language/es'

export default function App() {
  const langages = {
    EN: EN,
    ES: ES
  }
  const [lang, setLang] = React.useState(langages['EN'])

  const handleChange = (e) => {
    setLang(langages[e.target.value])
  }

  return (
    <BrowserRouter>
      <Header lang={lang} func={handleChange} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='pods' element={<Pods />} />
      </Routes>
      <Footer lang={lang} />
    </BrowserRouter>
  )
}
