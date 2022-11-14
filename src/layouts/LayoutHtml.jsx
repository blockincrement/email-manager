import React from 'react'
import PropTypes from 'prop-types'
import Spacer from '../components/Spacer'
import Logo from '../components/Logo'

const docType = `<!doctype html>`

const headMSO = `<!--[if !mso]><!-->
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<!--<![endif]-->
<!--[if (gte mso 9)|(IE)]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG />
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  <![endif]-->
<!--[if (gte mso 9)|(IE)]>
    <style type="text/css">
      body {
        width: 600px;
        Margin: 0 auto;
      }
      table {
        border-collapse: collapse;
      }
      table,
      td {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      img {
        -ms-interpolation-mode: bicubic;
      }
    </style>
  <![endif]-->`

const mainTableMSOStart = `<!--[if mso]>
<center>
<table><tr><td width="600">
<![endif]-->`

const mainTableMSOEnd = `<!--[if mso]>
                                  </td>
                                </tr>
                              </table>
                            </center>
                            <![endif]-->`

const LayoutHtml = ({ content, footer }) => (
  <>
    {docType}
    <html>
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
        <meta name="x-apple-disable-message-reformatting" />
        {headMSO}
      </head>
      <body>
        <table
          cellPadding="0"
          cellSpacing="0"
          border="0"
          width="100%"
          bgcolor="#FAFAFA"
          style={{
            fontFamily: 'Arial, Helvetica, sans-serif',
            color: '#595959',
            fontSize: '14px',
            backgroundColor: '#FAFAFA',
          }}
        >
          <tr>
            <td valign="top" bgcolor="#FAFAFA" width="100%" style={{ backgroundColor: '#FAFAFA' }}>
              <table width="100%" align="center" cellPadding="0" cellSpacing="0" border="0">
                <tr>
                  <td width="100%">
                    <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                      <tr>
                        <td>
                          {mainTableMSOStart}
                          <table
                            width="100%"
                            cellPadding="0"
                            cellSpacing="0"
                            border="0"
                            style={{ width: '100%', maxWidth: '600px' }}
                            align="center"
                          >
                            <Spacer />
                            <Logo />
                            <Spacer />
                            {content}
                            <Spacer />
                            {footer}
                            <Spacer />
                          </table>
                          {mainTableMSOEnd}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  </>
)

LayoutHtml.propTypes = {
  content: PropTypes.node,
  footer: PropTypes.node,
}

LayoutHtml.defaultProps = {
  content: '',
  footer: '',
}

export default LayoutHtml
