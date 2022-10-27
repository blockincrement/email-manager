import React from 'react'
import PropTypes from 'prop-types'

const IfVariable = ({ name, children }) => (
  <>
    {`{{#if ${name}}}`}
    {children}
    {`{{/if}}`}
  </>
)

IfVariable.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
}

IfVariable.defaultProps = {
  children: '',
}

export default IfVariable
