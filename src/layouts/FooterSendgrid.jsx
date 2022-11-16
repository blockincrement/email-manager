import React from 'react'
import IfLocale from '../helpers/IfLocale'

const Footer = () => (
  <>
    <table
      className="module"
      // eslint-disable-next-line jsx-a11y/aria-role
      role="module"
      data-type="spacer"
      border="0"
      width="100%"
      cellPadding="0"
      cellSpacing="0"
      style={{ tableLayout: 'fixed' }}
      data-muid="29f74708-eb6b-4034-87d5-662070b4301c.1.1"
    >
      <tbody>
        <tr>
          <td
            style={{ padding: '0px 0px 30px 0px' }}
            // eslint-disable-next-line prettier/prettier, jsx-a11y/aria-role
            role="module-content"
            bgcolor=""
          />
        </tr>
      </tbody>
    </table>
    <table
      className="module"
      // eslint-disable-next-line jsx-a11y/aria-role
      role="module"
      data-type="divider"
      border="0"
      width="100%"
      cellPadding="0"
      cellSpacing="0"
      style={{ tableLayout: 'fixed' }}
      data-muid="fbb0357c-2e5e-47ee-90cd-337d9af3c860"
    >
      <tbody>
        <tr>
          <td
            style={{ padding: '0px 0px 0px 0px' }}
            // eslint-disable-next-line jsx-a11y/aria-role
            role="module-content"
            height="100%"
            valign="top"
            bgcolor=""
          >
            <table
              border="0"
              align="center"
              width="100%"
              height="1px"
              cellPadding="0"
              cellSpacing="0"
              style={{ lineHeight: '1px', fontSize: '1px' }}
            >
              <tbody>
                <tr>
                  <td style={{ padding: '0px 0px 1px 0px' }} bgcolor="#E8E8E8" />
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>

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
      data-muid="1e42b48e-5574-461c-aadf-374da197d989"
    >
      <tbody>
        <tr>
          <td
            height="100%"
            valign="top"
            // eslint-disable-next-line jsx-a11y/aria-role
            role="module-content"
          >
            <div
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                margin: '10px 0',
                textAlign: 'center',
                lineHeight: '18px',
              }}
            >
              <span
                style={{
                  color: '#8c8c8c',
                  fontSize: '10px',
                  textDecorationLine: 'none',
                  textDecorationThickness: 'initial',
                  textDecorationStyle: 'initial',
                  textDecorationColor: 'initial',
                }}
              >
                <IfLocale locale="en">
                  You cannot reply to this email. Please reach out to your contact directly or in case of technical
                  issues please reach out to our service team via{' '}
                  <a href="mailto:service@tenera.io" style={{ color: '#059E9B', textDecoration: 'none' }}>
                    service@tenera.io
                  </a>
                  This communication takes place via the platform provided by Digital Rocks GmbH for this purpose at
                  <a
                    href="https://platform.tenera.app"
                    target="_blank"
                    style={{ color: '#059E9B', textDecoration: 'none' }}
                    rel="noreferrer"
                  >
                    platform.tenera.app
                  </a>
                  . By accessing the platform or reaching out to the service team, you agree to Digital Rocks GmbH’s
                  applicable terms and conditions.
                  <br /> © 2022 Digital Rocks GmbH Schönhauser Allee 148, 10435 Berlin, Germany
                </IfLocale>
                <IfLocale locale="de">
                  Leider können Sie auf diese E-Mail nicht antworten. Bitte wenden Sie sich direkt an Ihre/n
                  AnsprechpartnerIn oder bei technischen Problem an unser Service Team via{' '}
                  <a href="mailto:service@tenera.io" style={{ color: '#059E9B', textDecoration: 'none' }}>
                    service@tenera.io
                  </a>
                  . Diese Kommunikation erfolgt über die von Digital Rocks GmbH hierfür unter{' '}
                  <a
                    href="https://platform.tenera.app"
                    target="_blank"
                    style={{ color: '#059E9B', textDecoration: 'none' }}
                    rel="noreferrer"
                  >
                    platform.tenera.app
                  </a>{' '}
                  bereitgestellte Plattform. Mit Ihrem Zugang zur Plattform oder Ihrer Kontaktaufnahme mit dem Service
                  Team stimmen Sie gegenüber Digital Rocks GmbH den hierfür geltenden allgemeinen Geschäftsbedingungen
                  zu. <br /> © 2022 Digital Rocks GmbH Schönhauser Allee 148, 10435 Berlin, Germany
                </IfLocale>
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
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
      data-muid="f05474da-3919-4f6e-aae6-097f946cc391"
    >
      <tbody>
        <tr>
          <td
            height="100%"
            valign="top"
            // eslint-disable-next-line jsx-a11y/aria-role
            role="module-content"
          >
            <table align="center">
              <tbody>
                <tr>
                  <td style={{ width: '112px', textAlign: 'center' }}>
                    <a href="https://www.tenera.io/legal/imprint" target="_blank" rel="noreferrer">
                      <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '10px' }}>
                        <IfLocale locale="en">Imprint</IfLocale>
                        <IfLocale locale="de">Impressum</IfLocale>
                      </span>
                    </a>
                  </td>
                  <td style={{ width: '12px' }} />
                  <td style={{ width: '112px', textAlign: 'center' }}>
                    <a href="https://en.tenera.io/agb" target="_blank" rel="noreferrer">
                      <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '10px' }}>
                        <IfLocale locale="en">Terms and Conditions</IfLocale>
                        <IfLocale locale="de">Nutzungsbedingungen</IfLocale>
                      </span>
                    </a>
                  </td>
                  <td style={{ width: '12px' }} />
                  <td style={{ width: '112px', textAlign: 'center' }}>
                    <a href="https://www.tenera.io/legal/datenschutzerklaerung" target="_blank" rel="noreferrer">
                      <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '10px' }}>
                        <IfLocale locale="en">Data Policy</IfLocale>
                        <IfLocale locale="de">Datenschutzerklärung</IfLocale>
                      </span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* <div style={{ fontFamily: 'Arial, Helvetica, sans-serif', textAlign: 'center' }}>
              <a href="https://www.tenera.io/legal/imprint" target="_blank" rel="noreferrer">
                <span style={{ fontSize: '10px' }}>
                  <IfLocale locale="en">Imprint</IfLocale>
                  <IfLocale locale="de">Impressum</IfLocale>
                </span>
              </a>
              <span style={{ fontSize: '10px' }}> </span>
              <a href="https://en.tenera.io/agb" target="_blank" rel="noreferrer">
                <span style={{ fontSize: '10px' }}>
                  <IfLocale locale="en">Terms and Conditions</IfLocale>
                  <IfLocale locale="de">Nutzungsbedingungen</IfLocale>
                </span>
              </a>
              <span style={{ fontSize: '10px' }}> </span>
              <a href="https://www.tenera.io/legal/datenschutzerklaerung" target="_blank" rel="noreferrer">
                <span style={{ fontSize: '10px' }}>
                  <IfLocale locale="en">Data Policy</IfLocale>
                  <IfLocale locale="de">Datenschutzerklärung</IfLocale>
                </span>
              </a>
            </div> */}
          </td>
        </tr>
      </tbody>
    </table>
    <table
      className="module"
      // eslint-disable-next-line jsx-a11y/aria-role
      role="module"
      data-type="spacer"
      border="0"
      width="100%"
      cellPadding="0"
      cellSpacing="0"
      style={{ tableLayout: 'fixed' }}
      data-muid="29f74708-eb6b-4034-87d5-662070b4301c.1.1.1"
    >
      <tbody>
        <tr>
          <td
            style={{ padding: '0px 0px 30px 0px' }}
            // eslint-disable-next-line prettier/prettier, jsx-a11y/aria-role
            role="module-content"
            bgcolor=""
          />
        </tr>
      </tbody>
    </table>
  </>
)

export default Footer
