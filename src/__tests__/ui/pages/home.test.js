import React from 'react'
import { render } from '@testing-library/react'
import Home from '../../../ui/pages/home'

describe('testing home page', () => {
  test('rendering home page', () => {
    render(<Home />)
  })
})