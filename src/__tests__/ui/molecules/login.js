import React from 'react'
import { render } from '@testing-library/react'
import Login from '../../../ui/molecules/login'

describe('testing molecule login', () => {
  test('rendering login', () => {
    render(<Login />)
  })
})
