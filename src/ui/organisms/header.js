import React from 'react'
import Login from '../molecules/login'
import Language from '../molecules/language'
import '../../styles/default/main.css'

import { EN } from '../../content/language/en'

export default function Header() {
  return (
    <header id='header'>
      <div id='header_pages'>
        <a className='header_link' href='/'>
          {EN.HOME}
        </a>
        <a className='header_link' href='/about'>
          {EN.ABOUT}
        </a>
        <a className='header_link' href='/pods'>
          {EN.PODS}
        </a>
      </div>
      <div>
        <Language />
        <Login />
      </div>
    </header>
  )
}
