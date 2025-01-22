import React from 'react'
import Login from '../molecules/login'
import Language from '../molecules/language'
import '../../styles/default/main.css'
import HeaderLink from '../atoms/header_link'
import PropTypes from 'prop-types'

Header.propTypes = {
  lang: PropTypes.any,
  func: PropTypes.any
}

export default function Header({ lang, func }) {
  return (
    <header id='header'>
      <div id='header_pages'>
        <HeaderLink text={lang.HOME} link='' />
        <HeaderLink text={lang.ABOUT} link='about' />
        <HeaderLink text={lang.PODS} link='pods' />
      </div>
      <div>
        <Language func={func} />
        <Login text={lang.LOGIN} />
      </div>
    </header>
  )
}
