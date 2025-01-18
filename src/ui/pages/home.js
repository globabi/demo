import React from 'react'
import { Box } from '@chakra-ui/react'
import LayoutDefault from '../templates/layoutdefault'

export default function Home() {
  return (
    <div>
      <LayoutDefault page={<Box m={2}>Home Page</Box>} />
    </div>
  )
}
