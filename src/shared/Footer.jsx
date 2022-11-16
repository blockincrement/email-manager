import React from 'react'
import IfLocale from '../helpers/IfLocale'
import HTMLComment from './HTMLComment'

const LOC_FOOTER_TEXT_DE = `Diese Kommunikation erfolgt über die von Digital Rocks GmbH hierfür unter platform.tenera.app bereitgestellte Plattform. Mit Ihrem Zugang zur Plattform oder Ihrer Kontaktaufnahme mit dem Service Team stimmen Sie gegenüber Digital Rocks GmbH den hierfür geltenden allgemeinen Geschäftsbedingungen zu.`
const LOC_FOOTER_TEXT_EN = `You cannot reply to this email. Please reach out to your contact directly or in case of technical issues please reach out to our service team via service@tenera.io. This communication takes place via the platform provided by Digital Rocks GmbH for this purpose at platform.tenera.app. By accessing the platform or reaching out to the service team, you agree to Digital Rocks GmbH’s applicable terms and conditions.`
const LOC_TENERA_ADDRESS_DE = `Tenera / Digital Rocks GmbH, Schönhauser Allee 148, Berlin 10435, Deutschland`
const LOC_TENERA_ADDRESS_EN = `Tenera / Digital Rocks GmbH, Schönhauser Allee 148, Berlin 10435, Germany`
const LOC_IMPRINT_DE = `Impressum`
const LOC_IMPRINT_EN = `Imprint`
const LOC_TAC_DE = `Allgmeine Geschäftsbedingungen`
const LOC_TAC_EN = `Terms and Conditions`
const LOC_DATA_POLICY_DE = `Datenschutzerklärung`
const LOC_DATA_POLICY_EN = `Data Policy`

const Footer = () => (
  <div className="hse-section hse-section-last" id="section-6">
    <HTMLComment text="[if !((mso)|(IE))]>" />
    {/* <!--    [if !((mso)|(IE))]>--> */}
    <div
      bgcolor="#00282b"
      className="hse-column-container"
      style={{
        minWidth: '280px',
        maxWidth: '600px',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderCollapse: 'collapse',
        borderSpacing: 0,
        backgroundColor: '#00282b',
        paddingTop: '10px',
      }}
    >
      <HTMLComment text="<![endif][if (mso)|(IE)]>" />
      {/* <!--    <![endif][if (mso)|(IE)]>--> */}
      <div
        className="hse-column-container"
        style={{
          minWidth: '280px',
          maxWidth: '600px',
          width: '100%',
          MarginLeft: 'auto',
          MarginRight: 'auto',
          borderCollapse: 'collapse',
          borderSpacing: '0',
        }}
      >
        <table
          align="center"
          style={{ borderCollapse: 'collapse', msoTableLspace: '0pt', msoTableRspace: '0pt', width: '600px' }}
          cellPadding="0"
          cellSpacing="0"
          role="presentation"
          width="600"
          bgcolor="#00282b"
        >
          <tr style={{ backgroundColor: '#00282b' }}>
            <HTMLComment text="<![endif][if (mso)|(IE)]>" />

            {/* <!--          <![endif][if (mso)|(IE)]>--> */}
            <td valign="top" style={{ width: '600px', paddingTop: '30px' }}>
              <HTMLComment text="<![endif][if gte mso 9]>" />

              {/* <!--            <![endif][if gte mso 9]>--> */}
              <table
                role="presentation"
                width="600"
                cellPadding="0"
                cellSpacing="0"
                style={{
                  borderCollapse: 'collapse',
                  msoTableLspace: '0pt',
                  msoTableRspace: '0pt',
                  width: '600px',
                }}
              >
                <HTMLComment text="<![endif]" />

                {/* <!--              <![endif]--> */}
                <div className="hse-column hse-size-12" id="column-6-0">
                  <div
                    className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"
                    data-hs-cos-general-type="widget"
                    data-hs-cos-type="module"
                    id="hs_cos_wrapper_module-6-0-0"
                    style={{ color: 'inherit', fontSize: 'inherit', lineHeight: 'inherit' }}
                  >
                    <table
                      cellPadding="{0}"
                      cellSpacing="{0}"
                      className="hse-footer hse-secondary"
                      role="presentation"
                      style={{
                        borderSpacing: '0 !important',
                        borderCollapse: 'collapse',
                        msoTableLspace: '0pt',
                        msoTableRspace: '0pt',
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '12px',
                        lineHeight: '135%',
                        color: '#23496d',
                        marginBottom: 0,
                        padding: 0,
                      }}
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td
                            align="left"
                            style={{
                              borderCollapse: 'collapse',
                              msoLineHeightRule: 'exactly',
                              fontFamily: 'Lato, Tahoma, sans-serif',
                              fontSize: '16px',
                              color: '#00282b',
                              wordBreak: 'break-word',
                              textAlign: 'left',
                              marginBottom: 0,
                              lineHeight: '135%',
                              padding: '10px 20px',
                            }}
                            valign="top"
                          >
                            <p
                              key="p1"
                              dir="ltr"
                              style={{
                                msoLineHeightRule: 'exactly',
                                fontFamily: 'Lato,Tahoma,sans-serif',
                                fontSize: '13px',
                                fontWeight: 'normal',
                                textDecoration: 'none',
                                fontStyle: 'normal',
                                color: '#ffffff',
                                direction: 'ltr',
                              }}
                            >
                              <IfLocale locale="de">{LOC_FOOTER_TEXT_DE}</IfLocale>
                              <IfLocale locale="en">{LOC_FOOTER_TEXT_EN}</IfLocale>
                              <br />
                              <br />
                              <IfLocale locale="de">{LOC_TENERA_ADDRESS_DE}</IfLocale>
                              <IfLocale locale="en">{LOC_TENERA_ADDRESS_EN}</IfLocale>
                            </p>
                            <p
                              key="p2"
                              style={{
                                msoLineHeightRule: 'exactly',
                                fontFamily: 'Lato,Tahoma,sans-serif',
                                fontSize: '13px',
                                fontWeight: 'normal',
                                textDecoration: 'none',
                                fontStyle: 'normal',
                              }}
                            >
                              <a key="p2a1" href="https://www.tenera.io/legal/imprint" style={{ color: '#059e9b' }}>
                                <IfLocale locale="de">{LOC_IMPRINT_DE}</IfLocale>
                                <IfLocale locale="en">{LOC_IMPRINT_EN}</IfLocale>
                              </a>
                              <span style={{ color: '#059e9b', margin: '0 6px' }}>|</span>
                              <a key="p2a2" href="https://en.tenera.io/agb" style={{ color: '#059e9b' }}>
                                <IfLocale locale="de">{LOC_TAC_DE}</IfLocale>
                                <IfLocale locale="en">{LOC_TAC_EN}</IfLocale>
                              </a>
                              <span style={{ color: '#059e9b', margin: '0 6px' }}>|</span>
                              <a
                                key="p2a3"
                                href="https://www.tenera.io/legal/datenschutzerklaerung"
                                style={{ color: '#059e9b' }}
                              >
                                <IfLocale locale="de">{LOC_DATA_POLICY_DE}</IfLocale>
                                <IfLocale locale="en">{LOC_DATA_POLICY_EN}</IfLocale>
                              </a>
                              <br />
                              &nbsp;
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <HTMLComment text="[if gte mso 9]>" />

                {/* <!-- [if gte mso 9]>--> */}
              </table>
              <HTMLComment text="<![endif][if (mso)|(IE)]>" />

              {/* <!-- <![endif][if (mso)|(IE)]>--> */}
            </td>
            <HTMLComment text="<![endif][if (mso)|(IE)]>" />

            {/* <!--<![endif][if (mso)|(IE)]>--> */}
          </tr>
        </table>
        <HTMLComment text="<![endif]</div>" />

        {/* <!--  <![endif]</div>--> */}
      </div>
    </div>
  </div>
)

export default Footer
