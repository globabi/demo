import React from 'react'
import PropTypes from 'prop-types'
import Header from '../organisms/header'
import Footer from '../organisms/footer'

LayoutDefault.propTypes = {
  page: PropTypes.any
}

export default function LayoutDefault({ page }) {
  return (
    <div>
      <Header />
      {page}
      <Footer />
    </div>
  )
}
