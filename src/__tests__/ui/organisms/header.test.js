import React from 'react'
import { render } from '@testing-library/react'
import Header from '../../../ui/organisms/header'

describe('testing header', () => {
  test('rendering header', () => {
    render(<Header />)
  })
})
