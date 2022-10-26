import React from 'react'
import PropTypes from 'prop-types'

import IfLocale from '../helpers/IfLocale'

const ButtonConfirm = ({ titleLocaleEn, titleLocaleDe, hrefVariableName }) => (
  <a
    href={`{{${hrefVariableName}}}`}
    style={{
      borderRadius: '5px',
      backgroundColor: '#059E9B',
      msoLineHeightRule: 'exactly',
      fontSize: '16px',
      fontFamily: 'Lato,Tahoma,sans-serif',
      margin: 0,
      textTransform: 'none',
      textDecoration: 'none',
      padding: '12px 18px',
      display: 'block',
      float: 'left',
    }}
    target="_blank"
    rel="noreferrer"
  >
    <font color="#ffffff">
      <IfLocale locale="de">{titleLocaleDe}</IfLocale>
      <IfLocale locale="en">{titleLocaleEn}</IfLocale>
    </font>
  </a>
)

ButtonConfirm.propTypes = {
  titleLocaleEn: PropTypes.string,
  titleLocaleDe: PropTypes.string,
  hrefVariableName: PropTypes.string.isRequired,
}

ButtonConfirm.defaultProps = {
  titleLocaleEn: '',
  titleLocaleDe: '',
}

export default ButtonConfirm
