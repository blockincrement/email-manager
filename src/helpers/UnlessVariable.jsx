import React from 'react'
import PropTypes from 'prop-types'

const UnlessVariable = ({ name, children }) => (
  <>
    {`{{#unless ${name}}}`}
    {children}
    {`{{/unless}}`}
  </>
)

UnlessVariable.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
}

UnlessVariable.defaultProps = {
  children: '',
}

export default UnlessVariable
