import React from 'react'
import { useState } from 'react'
import { SUPPORTED_LANGUAGES } from '../../content/language/supported_languages'

export default function Language() {
  let [language, setLanguage] = useState('EN')

  const handleChange = (e) => {
    setLanguage(e.target.value)
    alert(e.target.value)
  }

  return (
    <select type='text' onChange={handleChange} value={language}>
      {(() => {
        const arr = []
        for (let i = 0; i < SUPPORTED_LANGUAGES.length; i++) {
          arr.push(<option key={i}>{SUPPORTED_LANGUAGES[i]}</option>)
        }
        return arr
      })()}
    </select>
  )
}
