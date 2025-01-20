import React from 'react'
import PropTypes from 'prop-types'

HeaderLink.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default function HeaderLink({ text, link }) {
  return (
    <a className='header_link' href={'/' + link}>
      {text}
    </a>
  )
}
