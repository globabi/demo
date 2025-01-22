import React from 'react'
import PropTypes from 'prop-types'
import { SUPPORTED_LANGUAGES } from '../../content/language/supported_languages'

Language.propTypes = {
  func: PropTypes.any
}

export default function Language({ func }) {
  return (
    <select type='text' onChange={func}>
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
