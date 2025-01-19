import React from 'react'
import LayoutDefault from '../templates/layoutdefault'

export default function Home() {
  return (
    <div>
      <LayoutDefault page={<a href='/'>Home Page</a>} />
    </div>
  )
}
