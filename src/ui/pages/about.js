import React from 'react'
import LayoutDefault from '../templates/layoutdefault'

export default function About() {
  return (
    <div>
      <LayoutDefault page={<a href='/about'>About Page</a>} />
    </div>
  )
}
