import React from 'react'
import { render } from '@testing-library/react'
import Pods from '../../../ui/pages/pods'

describe('testing pods page', () => {
  test('rendering pods page', () => {
    render(<Pods />)
  })
})