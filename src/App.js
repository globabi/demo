import React, { useCallback, useEffect, useState } from 'react'
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

  const DEFAULT_LANGAUGE = 'EN'

  const [language, setLanguage] = useState(localStorage.getItem('language') ? localStorage.getItem('language') : DEFAULT_LANGAUGE)

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const handleSetLanguage = useCallback(
    (newLanguage) => {
      setLanguage(newLanguage)
    },
    [language]
  )

  return (
    <BrowserRouter>
      <Header language={langages[language]} currentLanguage={language} handleOnClick={handleSetLanguage} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='pods' element={<Pods />} />
      </Routes>
      <Footer language={langages[language]} />
    </BrowserRouter>
  )
}
