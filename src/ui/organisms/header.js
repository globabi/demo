import React from 'react'
import { Link } from '@chakra-ui/react'
import Login from '../molecules/login'

export default function Header() {
  return (
    <header className='App-header'>
      <Link m={2} href='/'>
        Home
      </Link>
      <Link m={2} href='/about'>
        About
      </Link>
      <Login />
    </header>
  )
}
