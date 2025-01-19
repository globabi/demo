import React from 'react'
import { render } from '@testing-library/react'
import Language from '../../../ui/molecules/language'

describe('testing molecule language', () => {
  test('rendering language', () => {
    render(<Language />)
  })
})
