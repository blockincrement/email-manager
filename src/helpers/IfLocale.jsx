import React from 'react'
import PropTypes from 'prop-types'

const IfLocale = ({ locale, children }) => {
  // if locale is not defined return "de" version
  if (locale === 'de') {
    return (
      <>
        {`{{#if (equals locale "${locale}")}}`}
        {children}
        {`{{/if}}`}
        {`{{#unless locale}}`}
        {children}
        {`{{/unless}}`}
      </>
    )
  }
  return (
    <>
      {`{{#if (equals locale "${locale}")}}`}
      {children}
      {`{{/if}}`}
    </>
  )
}

IfLocale.propTypes = {
  children: PropTypes.node,
  locale: PropTypes.string,
}

IfLocale.defaultProps = {
  locale: '',
  children: '',
}

export default IfLocale
