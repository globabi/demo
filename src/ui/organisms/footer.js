import React from 'react'

import PropTypes from 'prop-types'

Footer.propTypes = {
  language: PropTypes.any
}

export default function Footer({ language }) {
  return (
    <footer>
      <div>{language.FOOTER}</div>
    </footer>
  )
}
