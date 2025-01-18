import React from 'react'
import { Box } from '@chakra-ui/react'
import LayoutDefault from '../templates/layoutdefault'

export default function About() {
  return (
    <div>
      <LayoutDefault page={<Box m={2}>About Page</Box>} />
    </div>
  )
}
