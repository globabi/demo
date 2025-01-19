import React from 'react'
import { render } from '@testing-library/react'
import Footer from '../../../ui/organisms/footer'

describe('testing footer', () => {
  test('rendering footer', () => {
    render(<Footer />)
  })
})
