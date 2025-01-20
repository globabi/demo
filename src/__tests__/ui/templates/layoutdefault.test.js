import React from 'react'
import { render } from '@testing-library/react'
import LayoutDefault from '../../../ui/templates/layoutdefault'
import About from '../../../ui/pages/about'

describe('testing templage layout default', () => {
  test('rendering layout default', () => {
    render(<LayoutDefault page={<About />} />)
  })
})
