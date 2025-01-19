import React from 'react'
import Login from '../molecules/login'
import Language from '../molecules/language'
import '../../styles/default/main.css'

export default function Header() {
  return (
    <header id='header'>
      <div id='header_pages'>
        <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/pods'>Pods</a>
      </div>
      <div>
        <Language />
        <Login />
      </div>
    </header>
  )
}
