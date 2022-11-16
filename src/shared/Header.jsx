import React from 'react'

const Header = () => (
  <div
    style={{
      width: '100%',
      minWidth: '280px',
      maxWidth: '600px',
      backgroundColor: '#ffffff',
      margin: '0 auto',
    }}
  >
    <div
      className="section logo"
      style={{
        padding: '20px 0 10px 0',
      }}
    >
      <table width="100%">
        <tbody>
          <tr>
            <td align="center">
              <a href="https://www.tenera.io/">
                <img
                  align="center"
                  alt="tenera-logo"
                  border="{0}"
                  src="https://go.web.tenera.io/tenrea-logo-png"
                  style={{
                    width: '130px',
                    borderWidth: '0px',
                    borderStyle: 'solid',
                  }}
                  width="{130}"
                />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export default Header
