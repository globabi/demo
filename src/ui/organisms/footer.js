import React from 'react'

import PropTypes from 'prop-types'

Footer.propTypes = {
  language: PropTypes.any
}

export default function Footer({ language }) {
  return (
    <footer style={{ width: '98%', background: 'red', textAlign: 'center', padding: '1%', color: '#fff' }}>
      <div>{language.FOOTER}</div>
    </footer>
  )
}
