import React from 'react'
import PropTypes from 'prop-types'

const style = `
  body,
    p,
    div {
      font-family: arial, helvetica, sans-serif;
      font-size: 14px;
    }

    body {
      color: #000000;
    }

    body a {
      color: #059E9B;
      text-decoration: none;
    }

    p {
      margin: 0;
      padding: 0;
    }

    table.wrapper {
      width: 100% !important;
      table-layout: fixed;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    img.max-width {
      max-width: 100% !important;
    }

    .column.of-2 {
      width: 50%;
    }

    .column.of-3 {
      width: 33.333%;
    }

    .column.of-4 {
      width: 25%;
    }

    ul ul ul ul {
      list-style-type: disc !important;
    }

    ol ol {
      list-style-type: lower-roman !important;
    }

    ol ol ol {
      list-style-type: lower-latin !important;
    }

    ol ol ol ol {
      list-style-type: decimal !important;
    }

    @media screen and (max-width:480px) {

      .preheader .rightColumnContent,
      .footer .rightColumnContent {
        text-align: left !important;
      }

      .preheader .rightColumnContent div,
      .preheader .rightColumnContent span,
      .footer .rightColumnContent div,
      .footer .rightColumnContent span {
        text-align: left !important;
      }

      .preheader .rightColumnContent,
      .preheader .leftColumnContent {
        font-size: 80% !important;
        padding: 5px 0;
      }

      table.wrapper-mobile {
        width: 100% !important;
        table-layout: fixed;
      }

      img.max-width {
        height: auto !important;
        max-width: 100% !important;
      }

      a.bulletproof-button {
        display: block !important;
        width: auto !important;
        font-size: 80%;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }

      .columns {
        width: 100% !important;
      }

      .column {
        display: block !important;
        width: 100% !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }

      .social-icon-column {
        display: inline-block !important;
      }
    }

    @media screen and (max-width:480px) {
      table {
        width: 480px !important;
      }
    }
`

const docType = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">`

const headMSO = `<!--[if !mso]><!-->
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<!--<![endif]-->
<!--[if (gte mso 9)|(IE)]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
<!--[if (gte mso 9)|(IE)]>
<style type="text/css">
  body { width: 600px;margin: 0 auto; }
  table { border-collapse: collapse; }
  table, td { mso-table-lspace: 0pt;mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; }
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

const LayoutSendgrid = ({ content, footer }) => (
  <>
    {docType}
    <html data-editor-version="2" className="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
        {headMSO}
        <style type="text/css">{style}</style>
      </head>
      <body>
        <center
          className="wrapper"
          data-link-color="#059E9B"
          data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#FAFAFA;"
        >
          <div className="webkit">
            <table border="0" width="100%" cellPadding="0" cellSpacing="0" className="wrapper" bgcolor="#FAFAFA">
              <tr>
                <td valign="top" bgcolor="#FAFAFA" width="100%">
                  <table
                    width="100%"
                    // eslint-disable-next-line jsx-a11y/aria-role
                    role="content-container"
                    className="outer"
                    align="center"
                    border="0"
                    cellPadding="0"
                    cellSpacing="0"
                  >
                    <tr>
                      <td width="100%">
                        <table width="100%" border="0" cellPadding="0" cellSpacing="0">
                          <tr>
                            <td>
                              {mainTableMSOStart}
                              <table
                                width="100%"
                                border="0"
                                cellPadding="0"
                                cellSpacing="0"
                                style={{ width: '100%', maxWidth: '600px' }}
                                align="center"
                              >
                                <tr>
                                  <td
                                    // eslint-disable-next-line jsx-a11y/aria-role
                                    role="modules-container"
                                    style={{ padding: '0px 0px 0px 0px', color: '#000000', textAlign: 'left' }}
                                    bgcolor="#FAFAFA"
                                    width="100%"
                                    align="left"
                                  >
                                    <table
                                      className="module preheader preheader-hide"
                                      // eslint-disable-next-line jsx-a11y/aria-role
                                      role="module"
                                      data-type="preheader"
                                      border="0"
                                      width="100%"
                                      cellPadding="0"
                                      cellSpacing="0"
                                      style={{
                                        display: 'none !important',
                                        msoHide: 'all',
                                        visibility: 'hidden',
                                        opacity: 0,
                                        color: 'transparent',
                                        height: '0',
                                        width: 0,
                                      }}
                                    >
                                      <tr>
                                        <td
                                          // eslint-disable-next-line jsx-a11y/aria-role
                                          role="module-content"
                                        >
                                          <p />
                                        </td>
                                      </tr>
                                    </table>
                                    <table
                                      border="0"
                                      align="center"
                                      width="100%"
                                      // eslint-disable-next-line jsx-a11y/aria-role
                                      role="module"
                                      data-type="columns"
                                      cellPadding="0"
                                      cellSpacing="0"
                                      style={{ padding: '20px 0px 40px 0px' }}
                                      bgcolor=""
                                      data-distribution="1"
                                    >
                                      <tbody>
                                        <tr
                                          // eslint-disable-next-line jsx-a11y/aria-role
                                          role="module-content"
                                        >
                                          <td height="100%" valign="top">
                                            <table
                                              width="600"
                                              cellPadding="0"
                                              cellSpacing="0"
                                              style={{
                                                width: '600px',
                                                borderSpacing: 0,
                                                borderCollapse: 'collapse',
                                                margin: '0px 0px 0px 0px',
                                              }}
                                              align="left"
                                              border="0"
                                              bgcolor=""
                                              className="column column-0"
                                            >
                                              <tbody>
                                                <tr>
                                                  <td style={{ padding: '0px', margin: '0px', borderSpacing: 0 }}>
                                                    <table
                                                      className="wrapper"
                                                      // eslint-disable-next-line jsx-a11y/aria-role
                                                      role="module"
                                                      data-type="image"
                                                      border="0"
                                                      width="100%"
                                                      cellPadding="0"
                                                      cellSpacing="0"
                                                      style={{ tableLayout: 'fixed' }}
                                                      data-muid="de9f69e2-d17b-45d7-aa70-b76d014aec5a"
                                                    >
                                                      <tbody>
                                                        <tr>
                                                          <td
                                                            style={{ padding: '0px 0px 0px 0px' }}
                                                            valign="top"
                                                            align="center"
                                                          >
                                                            <img
                                                              className="max-width"
                                                              border="0"
                                                              style={{
                                                                display: 'block',
                                                                color: '#000000',
                                                                textDecoration: 'none',
                                                                fontFamily: 'Helvetica, arial, sans-serif',
                                                                fontSize: '16px',
                                                              }}
                                                              width="100"
                                                              alt="Tenera"
                                                              data-proportionally-constrained="true"
                                                              data-responsive="false"
                                                              src="http://cdn.mcauto-images-production.sendgrid.net/3ae20078dba65f6c/895d8de6-20b4-4407-abaf-8aca6307e5fe/200x40.png"
                                                              height="20"
                                                            />
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    {content}
                                    {footer}
                                  </td>
                                </tr>
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
          </div>
        </center>
      </body>
    </html>
  </>
)

LayoutSendgrid.propTypes = {
  content: PropTypes.node,
  footer: PropTypes.node,
}

LayoutSendgrid.defaultProps = {
  content: '',
  footer: '',
}

export default LayoutSendgrid
