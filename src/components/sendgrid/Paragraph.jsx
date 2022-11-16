import React from 'react'
import PropTypes from 'prop-types'

const Paragraph = ({ children, style }) => (
  <div style={{ fontFamily: 'Arial, Helvetica, sans-serif', textAlign: 'inherit', lineHeight: '22px' }}>
    <span style={{ color: '#595959', fontFamily: 'Arial, Helvetica, sans-serif', ...style }}>{children}</span>
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
