import React from 'react'
import Card from '../components/Card'
import Divider from '../components/Divider'
import Paragraph from '../components/Paragraph'
import Spacer from '../components/Spacer'
import IfLocale from '../helpers/IfLocale'

const FooterClassic = () => (
  <>
    <Divider />
    <Spacer size={24} />
    <Card ghost>
      <Paragraph style={{ fontSize: '10px', color: '#8C8C8C', lineHeight: '18px', textAlign: 'center' }}>
        <IfLocale locale="en">
          You cannot reply to this email. Please reach out to your contact directly or in case of technical issues
          please reach out to our service team via
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
          . By accessing the platform or reaching out to the service team, you agree to Digital Rocks GmbH’s applicable
          terms and conditions.
          <br /> © 2022 Digital Rocks GmbH Schönhauser Allee 148, 10435 Berlin, Germany
        </IfLocale>
        <IfLocale locale="de">
          Leider können Sie auf diese E-Mail nicht antworten. Bitte wenden Sie sich direkt an Ihre/n AnsprechpartnerIn
          oder bei technischen Problem an unser Service Team via{' '}
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
          bereitgestellte Plattform. Mit Ihrem Zugang zur Plattform oder Ihrer Kontaktaufnahme mit dem Service Team
          stimmen Sie gegenüber Digital Rocks GmbH den hierfür geltenden allgemeinen Geschäftsbedingungen zu. <br /> ©
          2022 Digital Rocks GmbH Schönhauser Allee 148, 10435 Berlin, Germany
        </IfLocale>
      </Paragraph>
    </Card>

    <Spacer size={24} />

    <Card ghost>
      <table cellPadding="0" cellSpacing="0" border="0" align="center">
        <tbody>
          <tr>
            <td style={{ width: '112px', textAlign: 'center' }}>
              <a
                href="https://www.tenera.io/legal/imprint"
                style={{
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: '10px',
                  lineHeight: '22px',
                  color: '#059E9B',
                  textDecoration: 'none',
                }}
                target="_blank"
                rel="noreferrer"
              >
                <IfLocale locale="en">Imprint</IfLocale>
                <IfLocale locale="de">Impressum</IfLocale>
              </a>
            </td>
            <td style={{ width: '12px' }} />
            <td style={{ width: '112px', textAlign: 'center' }}>
              <a
                href="https://en.tenera.io/agb"
                style={{
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: '10px',
                  lineHeight: '22px',
                  color: '#059E9B',
                  textDecoration: 'none',
                }}
                target="_blank"
                rel="noreferrer"
              >
                <IfLocale locale="en">Terms and Conditions</IfLocale>
                <IfLocale locale="de">Nutzungsbedingungen</IfLocale>
              </a>
            </td>
            <td style={{ width: '12px' }} />
            <td style={{ width: '112px', textAlign: 'center' }}>
              <a
                href="https://www.tenera.io/legal/datenschutzerklaerung"
                style={{
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: '10px',
                  lineHeight: '22px',
                  color: '#059E9B',
                  textDecoration: 'none',
                }}
                target="_blank"
                rel="noreferrer"
              >
                <IfLocale locale="en">Data Policy</IfLocale>
                <IfLocale locale="de">Datenschutzerklärung</IfLocale>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  </>
)

export default FooterClassic
