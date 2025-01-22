import React from 'react'
import PropTypes from 'prop-types'

LayoutDefault.propTypes = {
  page: PropTypes.any
}

export default function LayoutDefault({ page }) {
  return <div>{page}</div>
}
