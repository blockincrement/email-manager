import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ title, header, body, aboutTenera, bottomText, footer }) => (
  <html>
    <title>{title}</title>
    <head />
    <body>
      {header}
      <div
        style={{ width: '100%', minWidth: '280px', maxWidth: '600px', backgroundColor: '#ffffff', margin: '0 auto' }}
      >
        <div className="section menu">
          <table width="100%">
            <tbody>
              <tr>
                <td align="center">
                  <p
                    style={{
                      fontSize: '16px',
                      fontFamily: 'Lato, Tahoma, sans-serif',
                      lineHeight: '175%',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}
                  >
                    {title}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div
        style={{
          width: '100%',
          minWidth: '280px',
          maxWidth: '600px',
          backgroundColor: '#ffffff',
          margin: '0 auto',
          padding: '20px 0 0 0',
        }}
      >
        <div className="section intro" style={{ padding: '10px' }}>
          <table width="100%">
            <tbody>{body}</tbody>
          </table>
        </div>
        {aboutTenera} {bottomText}
        <div className="hse-section" id="section_1616761784046" style={{ paddingLeft: '10px', paddingRight: '10px' }}>
          {/* [if !((mso)|(IE))]> */}
          <div
            bgcolor="#FFFFFF"
            className="hse-column-container"
            style={{
              minWidth: '280px',
              maxWidth: '600px',
              width: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
              borderCollapse: 'collapse',
              borderSpacing: 0,
              backgroundColor: '#FFFFFF',
              paddingBottom: '40px',
              paddingTop: '0px',
            }}
          >
            {/* <![endif] */}
            {/* [if (mso)|(IE)]>
        <div class="hse-column-container"
             style="min-width:280px;max-width:600px;width:100%;Margin-left:auto;Margin-right:auto;border-collapse:collapse;border-spacing:0;">
          <table align="center" style="border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;width:600px;"
                 cellpadding="0" cellspacing="0" role="presentation" width="600" bgcolor="#FFFFFF">
            <tr style="background-color:#FFFFFF;">
        <![endif] */}
            {/* [if (mso)|(IE)]>
        <td valign="top" style="width:200px;padding-bottom:40px; padding-top:0px;">
        <![endif] */}
            {/* [if gte mso 9]>
        <table role="presentation" width="200" cellpadding="0" cellspacing="0"
               style="border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;width:200px">
        <![endif] */}
            <div className="hse-column hse-size-4" id="column_1616761784046_0">
              {/* [if gte mso 9]></table><![endif] */}
              {/* [if (mso)|(IE)]></td><![endif] */}
              {/* [if (mso)|(IE)]></tr></table>
          <![endif] */}
            </div>
          </div>
          <div className="hse-column hse-size-8" id="column_1616761784046_1">
            <table
              cellPadding={0}
              cellSpacing={0}
              role="presentation"
              style={{
                borderSpacing: '0 !important',
                borderCollapse: 'collapse',
                msoTableLspace: '0pt',
                msoTableRspace: '0pt',
              }}
              width="100%"
            >
              <tbody />
            </table>
          </div>
          {/* [if gte mso 9]></table><![endif] */}
          {/* [if (mso)|(IE)]></td><![endif] */}
          {/* [if (mso)|(IE)]></tr></table>
      <![endif] */}
        </div>
        {footer}
      </div>
    </body>
  </html>
)

Layout.propTypes = {
  title: PropTypes.node,
  header: PropTypes.node,
  body: PropTypes.node,
  aboutTenera: PropTypes.node,
  bottomText: PropTypes.node,
  footer: PropTypes.node,
}

Layout.defaultProps = {
  title: '',
  header: '',
  body: '',
  aboutTenera: '',
  bottomText: '',
  footer: '',
}

export default Layout
