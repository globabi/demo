import React from 'react'
import { render } from '@testing-library/react'
import About from '../../../ui/pages/about'

describe('testing about page', () => {
  test('rendering about page', () => {
    render(<About />)
  })
})