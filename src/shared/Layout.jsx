import React from 'react'
import PropTypes from 'prop-types'

const fontStyle = {
  fontFamily: 'Gilroy, Lato, Tahoma, sans-serif',
}
const ReactComment = ({ text }) => <div dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }} />

const Layout = ({ title, header, body, footer }) => (
  <html>
    <title>{title}</title>
    <head />
    <body
      style={{
        ...fontStyle,
      }}
    >
      {header}
      <div
        style={{
          width: '100%',
          minWidth: '280px',
          maxWidth: '600px',
          backgroundColor: '#ffffff',
          margin: '0 auto',
        }}
      >
        <div className="section menu">
          <table width="100%">
            <tbody>
              <tr>
                <td align="center">
                  <p
                    style={{
                      fontFamily: 'Gilroy, Lato,Tahoma,sans-serif',
                      fontSize: '20px',
                      lineHeight: '175%',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      ...fontStyle,
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
        {body}
        <div className="hse-section" id="section_1616761784046" style={{ paddingLeft: '10px', paddingRight: '10px' }}>
          <ReactComment text={'[if !((mso)|(IE))]>'} />
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
            <ReactComment text={' <![endif]'} /> {/* <![endif] */}
            <ReactComment
              text={` [if (mso)|(IE)]>
        <div class="hse-column-container"
             style="min-width:280px;max-width:600px;width:100%;Margin-left:auto;Margin-right:auto;border-collapse:collapse;border-spacing:0;">
          <table align="center" style="border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;width:600px;"
                 cellpadding="0" cellspacing="0" role="presentation" width="600" bgcolor="#FFFFFF">
            <tr style="background-color:#FFFFFF;">
        <![endif]`}
            />
            <ReactComment
              text={` [if (mso)|(IE)]>
        <td valign="top" style="width:200px;padding-bottom:40px; padding-top:0px;">
        <![endif]`}
            />
            <ReactComment
              text={` [if gte mso 9]>
        <table role="presentation" width="200" cellpadding="0" cellspacing="0"
               style="border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;width:200px">
        <![endif]`}
            />
            <div className="hse-column hse-size-4" id="column_1616761784046_0">

              <ReactComment text={` [if gte mso 9]></table><![endif]`} />
              <ReactComment text={` [if (mso)|(IE)]></td><![endif]`} />
              <ReactComment
                text={` [if (mso)|(IE)]></tr></table>
          <![endif]`}
              />
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
          <ReactComment text={` [if gte mso 9]></table><![endif]`} />
          <ReactComment text={` [if (mso)|(IE)]></td><![endif]`} />
          <ReactComment text={` [if (mso)|(IE)]></tr></table>
      <![endif]`}
          />
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
  footer: PropTypes.node,
}

Layout.defaultProps = {
  title: '',
  header: '',
  body: '',
  footer: '',
}

export default Layout
