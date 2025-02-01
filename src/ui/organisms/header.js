import React from 'react'
import Login from '../molecules/login'
import Language from '../molecules/language'
import '../../styles/default/main.css'
import HeaderLink from '../atoms/header_link'
import PropTypes from 'prop-types'

Header.propTypes = {
  language: PropTypes.any,
  handleOnClick: PropTypes.any,
  currentLanguage: PropTypes.string.isRequired
}

export default function Header({ language, handleOnClick, currentLanguage }) {
  return (
    <header id='header'>
      <div id='header_pages'>
        <HeaderLink text={language.HOME} link='' />
        <HeaderLink text={language.ABOUT} link='about' />
        <HeaderLink text={language.PODS} link='pods' />
      </div>
      <div>
        <Language handleOnClick={handleOnClick} currentLanguage={currentLanguage} />
        <Login text={language.LOGIN} />
      </div>
    </header>
  )
}
