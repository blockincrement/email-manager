import React from 'react'
import PropTypes from 'prop-types'

import IfLocale from '../helpers/IfLocale'

const ButtonConfirm = ({ title, titleLocaleEn, titleLocaleDe, hrefValue }) => (
  <a
    href={`${hrefValue}`}
    style={{
      borderRadius: '5px',
      backgroundColor: '#059E9B',
      msoLineHeightRule: 'exactly',
      fontSize: '18px',
      fontFamily: 'Gilroy, Lato,Tahoma,sans-serif',
      fontWeight: 600,
      lineHeight: '30px',
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
      {title || (
        <>
          <IfLocale locale="de">{titleLocaleDe}</IfLocale>
          <IfLocale locale="en">{titleLocaleEn}</IfLocale>
        </>
      )}
    </font>
  </a>
)

ButtonConfirm.propTypes = {
  title: PropTypes.string,
  titleLocaleEn: PropTypes.string,
  titleLocaleDe: PropTypes.string,
  hrefValue: PropTypes.string.isRequired,
}

ButtonConfirm.defaultProps = {
  title: '',
  titleLocaleEn: '',
  titleLocaleDe: '',
}

export default ButtonConfirm
