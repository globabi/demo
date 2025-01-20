import React from 'react'
import { render, screen } from '@testing-library/react'
import HeaderLink from '../../../ui/atoms/header_link'

describe('testing header link atom', () => {
  test('rendering header link', () => {
    render(<HeaderLink text='test text' link='test_link' />)
    expect(screen.getAllByText('test text'))
  })
})
