import React from 'react'
import Login from '../molecules/login'

export default function Header() {
  return (
    <header className='App-header'>
      <a href='/'>Home</a>
      <a href='/about'>About</a>
      <Login />
    </header>
  )
}
