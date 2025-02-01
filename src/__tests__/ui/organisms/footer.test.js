import React from 'react'
import { render } from '@testing-library/react'
import Footer from '../../../ui/organisms/footer'
import { EN } from '../../../content/language/en'

describe('testing footer', () => {
  test('rendering footer', () => {
    render(<Footer language={EN} />)
  })
})
