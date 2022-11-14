import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ title, children, ctaButtonTitle, ctaButtonUrl }) => (
  <table
    border="0"
    cellPadding="0"
    cellSpacing="0"
    align="center"
    width="100%"
    // eslint-disable-next-line jsx-a11y/aria-role
    role="module"
    data-type="columns"
    style={{
      padding: '24px 24px 0px 24px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#E8E8E8',
      borderRadius: '4px',
      boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.03)',
    }}
    bgcolor="#FFFFFF"
    data-distribution="1"
  >
    <tbody>
      <tr
        // eslint-disable-next-line jsx-a11y/aria-role
        role="module-content"
      >
        <td height="100%" valign="top">
          <table
            width="552"
            style={{ width: '552px', borderSpacing: 0, borderCollapse: 'collapse', margin: '0px 0px 0px 0px' }}
            cellPadding="0"
            cellSpacing="0"
            align="left"
            border="0"
            bgcolor=""
            className="column column-0"
          >
            <tbody>
              <tr>
                <td style={{ padding: '0px', margin: '0px', borderSpacing: 0 }}>
                  {title && (
                    <table
                      className="module"
                      // eslint-disable-next-line jsx-a11y/aria-role
                      role="module"
                      data-type="text"
                      border="0"
                      cellPadding="0"
                      cellSpacing="0"
                      width="100%"
                      style={{ tableLayout: 'fixed' }}
                      data-muid="4b7fa1fa-477d-4be8-a05d-576cae0e2c64"
                      data-mc-module-version="2019-10-22"
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              padding: '0px 0px 24px 0px',
                              lineHeight: '22px',
                              textAlign: 'inherit',
                              backgroundColor: '#FFFFFF',
                            }}
                            height="100%"
                            valign="top"
                            bgcolor="#FFFFFF"
                            // eslint-disable-next-line jsx-a11y/aria-role
                            role="module-content"
                          >
                            <div>
                              <div style={{ fontFamily: 'Arial, Helvetica, sans-serif', textAlign: 'inherit' }}>
                                <span style={{ fontSize: '20px' }}>
                                  <strong>{title}</strong>
                                </span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                  {children && (
                    <table
                      className="module"
                      // eslint-disable-next-line jsx-a11y/aria-role
                      role="module"
                      data-type="code"
                      border="0"
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ tableLayout: 'fixed' }}
                      data-muid="d8ff7c75-b76d-49b5-a182-b5e551ace464"
                    >
                      <tbody>
                        <tr>
                          <td
                            height="100%"
                            valign="top"
                            // eslint-disable-next-line jsx-a11y/aria-role
                            role="module-content"
                            style={{ padding: '0 0 24px 0' }}
                          >
                            {children}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                  {ctaButtonTitle && (
                    <table
                      border="0"
                      cellPadding="0"
                      cellSpacing="0"
                      className="module"
                      data-role="module-button"
                      data-type="button"
                      // eslint-disable-next-line jsx-a11y/aria-role
                      role="module"
                      style={{ tableLayout: 'fixed' }}
                      width="100%"
                      data-muid="7112eed8-aedd-494b-b368-9075c22ee252"
                    >
                      <tbody>
                        <tr>
                          <td align="left" bgcolor="" className="outer-td" style={{ padding: '0px 0px 24px 0px' }}>
                            <table
                              border="0"
                              cellPadding="0"
                              cellSpacing="0"
                              className="wrapper-mobile"
                              style={{ textAlign: 'center' }}
                            >
                              <tbody>
                                <tr>
                                  <td
                                    align="center"
                                    bgcolor="#059E9B"
                                    className="inner-td"
                                    style={{
                                      borderRadius: '6px',
                                      fontSize: '16px',
                                      textAlign: 'left',
                                      backgroundColor: 'inherit',
                                    }}
                                  >
                                    <a
                                      // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                      href={ctaButtonUrl}
                                      style={{
                                        backgroundColor: '#059E9B',
                                        border: '1px solid #059E9B',
                                        borderColor: '#059E9B',
                                        borderRadius: '4px',
                                        borderWidth: '1px',
                                        color: '#ffffff',
                                        display: 'inline-block',
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        letterSpacing: '0px',
                                        lineHeight: 'normal',
                                        padding: '12px 18px 12px 18px',
                                        textAlign: 'center',
                                        textDecoration: 'none',
                                        borderStyle: 'solid',
                                        fontFamily: 'Arial, Helvetica, sans-serif',
                                      }}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {ctaButtonTitle}
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
)

export default Card

Card.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  ctaButtonTitle: PropTypes.string,
  ctaButtonUrl: PropTypes.string,
}

Card.defaultProps = {
  title: '',
  children: '',
  ctaButtonTitle: '',
  ctaButtonUrl: '',
}
