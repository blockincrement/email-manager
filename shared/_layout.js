import { html } from 'htm/react/index.mjs'

const layout = data => html`
  <html>
    <title>${data.title}</title>
    <head> </head>
    <body>
      ${data.header}
      <div
        style=${{ width: '100%', minWidth: '280px', maxWidth: '600px', backgroundColor: '#ffffff', margin: '0 auto' }}
      >
        <div className="section menu">
          <table width="100%">
            <tbody>
              <tr>
                <td align="center">
                  <p
                    style=${{
                      fontSize: '16px',
                      fontFamily: 'Lato, Tahoma, sans-serif',
                      lineHeight: '175%',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}
                  >
                    ${data.title}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div
        style=${{
          width: '100%',
          minWidth: '280px',
          maxWidth: '600px',
          backgroundColor: '#ffffff',
          margin: '0 auto',
          padding: '20px 0 0 0',
        }}
      >
        <div className="section intro" style=${{ padding: '10px' }}>
          <table width="100%">
            <tbody>
              ${data.body}
            </tbody>
          </table>
        </div>

        ${data.wasIstTenera}
        <div
          style=${{ width: '100%', minWidth: '280px', maxWidth: '600px', backgroundColor: '#ffffff', margin: '0 auto' }}
        >
          <div className="section text" style=${{ padding: '10px' }}>
            <table width="100%">
              <tbody>
                <tr>
                  <td align="left" className>
                    <p style=${{ msoLineHeightRule: 'exactly' }}>
                      Leider können Sie auf diese E-Mail nicht antworten. Bei Fragen oder technischen
                      Problemen&nbsp;wenden Sie sich bitte direkt an Ihre/n AnsprechpartnerIn oder an unser Service Team
                      via service@tenera.io.<br />
                      <br />
                      <br />
                      Viele Grüße aus Berlin
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="hse-section" id="section_1616761784046" style=${{ paddingLeft: '10px', paddingRight: '10px' }}>
          <!--[if !((mso)|(IE))]> -->
          <div
            bgcolor="#FFFFFF"
            className="hse-column-container"
            style=${{
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
            <!--<![endif]-->[endif]--><!--[if (mso)|(IE)]>
            <div class="hse-column-container"
                 style=${{
              minWidth: '280px',
              maxWidth: '600px',
              width: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
              borderCollapse: 'collapse',
              borderSpacing: 0,
            }}>
              <table align="center"
                     style=${{
              borderCollapse: 'collapse',
              msoTableLspace: '0pt',
              msoTableRspace: '0pt',
              width: '600px',
            }}
                     cellpadding="0" cellspacing="0" role="presentation" width="600" bgcolor="#FFFFFF">
                <tr style=${{ backgroundColor: '#FFFFFF' }}>
          <!
            [endif]-->[endif]--><!--[if (mso)|(IE)]>
                  <td valign="top" style=${{ width: '200px', paddingBottom: '40px', paddingTop: '0px' }}>
          <!
            [endif]-->[endif]--><!--[if gte mso 9]>
                    <table role="presentation" width="200" cellpadding="0" cellspacing="0"
                           style=${{
              borderCollapse: 'collapse',
              msoTableLspace: '0pt',
              msoTableRspace: '0pt',
              width: '200px',
            }}>
          <![endif]-->
            <div class="hse-column hse-size-4" id="column_1616761784046_0">
              <!--[if gte mso 9]></table><!
              [endif]-->[endif]--><!--[if (mso)|(IE)]></td><!
              [endif]-->[endif]--><!--[if (mso)|(IE)]></tr></table>
            <![endif]-->
            </div>
          </div>
          <div className="hse-column hse-size-8" id="column_1616761784046_1">
            <table
              cellpadding="{0}"
              cellspacing="{0}"
              role="presentation"
              style=${{
                borderSpacing: '0 !important',
                borderCollapse: 'collapse',
                msoTableLspace: '0pt',
                msoTableRspace: '0pt',
              }}
              width="100%"
            >
              <tbody></tbody>
            </table>
          </div>
          <!--[if gte mso 9]></table><!
          [endif]-->[endif]--><!--[if (mso)|(IE)]></td><!
          [endif]-->[endif]--><!--[if (mso)|(IE)]></tr></table>
      <![endif]-->
        </div>

        ${data.footer}
      </div>
    </body>
  </html>
`

export default layout
