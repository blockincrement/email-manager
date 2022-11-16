import React from 'react'
import PropTypes from 'prop-types'

const Card = ({
  title,
  titleSize,
  titleOffsetBottom,
  children,
  ctaButtonTitle,
  ctaButtonUrl,
  ghost,
  loopedChildren,
}) => {
  const cardStyle = ghost
    ? { padding: '0 24px 0 24px' }
    : {
        padding: '24px 24px 0 24px',
        backgroundColor: '#ffffff',
        border: '1px solid #E8E8E8',
        borderRadius: '4px',
      }
  const cardBgColor = ghost ? null : { bgcolor: '#ffffff' }
  const titleOffset = ghost && !children && !ctaButtonTitle ? '0' : `${titleOffsetBottom}px`
  const childrenOffset = (ghost && !ctaButtonTitle) || loopedChildren ? '0' : '24px'
  const ctaButtonOffset = ghost ? '0' : '24px'
  return (
    <tr>
      <td
        // eslint-disable-next-line prettier/prettier, react/jsx-props-no-spreading
        {...cardBgColor}
        style={cardStyle}
      >
        <table cellPadding="0" cellSpacing="0" border="0" width="100%">
          <tbody>
            {title && (
              <tr>
                <td style={{ padding: `0 0 ${titleOffset} 0` }}>
                  <div
                    style={{
                      fontFamily: 'Arial, Helvetica, sans-serif',
                      fontSize: `${titleSize}px`,
                      fontWeight: 'bold',
                      color: '#262626',
                    }}
                  >
                    {title}
                  </div>
                </td>
              </tr>
            )}
            {children && (
              <tr>
                <td style={{ padding: `0 0 ${childrenOffset} 0` }}>{children}</td>
              </tr>
            )}
            {ctaButtonTitle && (
              <tr>
                <td style={{ padding: `0 0 ${ctaButtonOffset} 0` }}>
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
                          style={{
                            borderRadius: '6px',
                            fontSize: '16px',
                            textAlign: 'left',
                            backgroundColor: '#059E9B',
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
            )}
          </tbody>
        </table>
      </td>
    </tr>
  )
}

export default Card

Card.propTypes = {
  title: PropTypes.node,
  titleSize: PropTypes.number,
  titleOffsetBottom: PropTypes.number,
  children: PropTypes.node,
  ctaButtonTitle: PropTypes.string,
  ctaButtonUrl: PropTypes.string,
  ghost: PropTypes.bool,
  loopedChildren: PropTypes.bool,
}

Card.defaultProps = {
  title: '',
  titleSize: 20,
  titleOffsetBottom: 24,
  children: '',
  ctaButtonTitle: '',
  ctaButtonUrl: '',
  ghost: false,
  loopedChildren: false,
}
