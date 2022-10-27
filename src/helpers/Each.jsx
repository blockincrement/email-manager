import React from 'react'
import PropTypes from 'prop-types'

const Each = ({ iterator, children }) => (
  <>
    {`{{#each ${iterator}}}`}
    {children}
    {`{{/each}}`}
  </>
)

Each.propTypes = {
  iterator: PropTypes.string.isRequired,
  children: PropTypes.node,
}

Each.defaultProps = {
  children: '',
}

export default Each
