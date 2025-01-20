import React from 'react'
import Login from '../molecules/login'
import Language from '../molecules/language'
import '../../styles/default/main.css'
import HeaderLink from '../atoms/header_link'

import { EN } from '../../content/language/en'

export default function Header() {
  return (
    <header id='header'>
      <div id='header_pages'>
        <HeaderLink text={EN.HOME} link='' />
        <HeaderLink text={EN.ABOUT} link='about' />
        <HeaderLink text={EN.PODS} link='pods' />
      </div>
      <div>
        <Language />
        <Login />
      </div>
    </header>
  )
}
