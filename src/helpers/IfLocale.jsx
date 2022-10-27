import React from 'react'
import PropTypes from 'prop-types'

const IfLocale = ({ locale, children }) => (
  <>
    {`{{#if (equals locale "${locale}")}}`}
    {children}
    {`{{/if}}`}
  </>
)

IfLocale.propTypes = {
  children: PropTypes.node,
  locale: PropTypes.string,
}

IfLocale.defaultProps = {
  locale: '',
  children: '',
}

export default IfLocale
