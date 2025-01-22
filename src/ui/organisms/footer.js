import React from 'react'

import PropTypes from 'prop-types'

Footer.propTypes = {
  lang: PropTypes.any
}

export default function Footer({ lang }) {
  return (
    <footer style={{ width: '98%', background: 'red', textAlign: 'center', padding: '1%', color: '#fff' }}>
      <div>{lang.FOOTER}</div>
    </footer>
  )
}
