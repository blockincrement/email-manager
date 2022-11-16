import React from 'react'
import PropTypes from 'prop-types'

const Paragraph = ({ children, style }) => (
  <div
    style={{
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: '14px',
      color: '#595959',
      lineHeight: '22px',
      ...style,
    }}
  >
    {children}
  </div>
)

export default Paragraph

Paragraph.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
}

Paragraph.defaultProps = {
  children: '',
  style: {},
}
