import React from 'react'
import PropTypes from 'prop-types'

const Spacer = ({ size }) => (
  <tr>
    <td style={{ padding: `0 0 ${size}px 0` }} />
  </tr>
)

Spacer.propTypes = {
  size: PropTypes.number,
}

Spacer.defaultProps = {
  size: 30,
}

export default Spacer
