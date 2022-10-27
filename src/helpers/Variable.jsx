import React from 'react'
import PropTypes from 'prop-types'
import IfVariable from './IfVariable'

const Variable = ({ name, prefixText, unSafe }) => {
  if (unSafe) {
    return `${prefixText}{{${name}}}`
  }

  return <IfVariable name={name}>{`${prefixText}{{${name}}}`}</IfVariable>
}

Variable.propTypes = {
  name: PropTypes.string.isRequired,
  unSafe: PropTypes.bool,
  prefixText: PropTypes.string,
}

Variable.defaultProps = {
  unSafe: false,
  prefixText: '',
}

export default Variable
