import React from 'react'
import { render } from '@testing-library/react'
import Header from '../../../ui/organisms/header'
import { EN } from '../../../content/language/en'

describe('testing header', () => {
  test('rendering header', () => {
    render(<Header language={EN} currentLanguage={'EN'} />)
  })
})
