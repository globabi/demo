import React from 'react'
import PropTypes from 'prop-types'
import { SUPPORTED_LANGUAGES } from '../../content/language/supported_languages'

Language.propTypes = {
  handleOnClick: PropTypes.any,
  currentLanguage: PropTypes.string.isRequired
}

export default function Language({ handleOnClick, currentLanguage }) {
  return (
    <select defaultValue={currentLanguage} type='text' onChange={(e) => handleOnClick(e.target.value)}>
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
