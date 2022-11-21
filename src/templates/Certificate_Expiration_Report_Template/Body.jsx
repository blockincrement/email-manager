import React from 'react'
import Card from '../../components/Card'
import UnlessVariable from '../../helpers/UnlessVariable'
import Variable from '../../helpers/Variable'
import Paragraph from '../../components/Paragraph'
import RequesterInfo from '../../components/RequesterInfo'
import Spacer from '../../components/Spacer'
import Each from '../../helpers/Each'
import IfLocale from '../../helpers/IfLocale'
import IfVariable from '../../helpers/IfVariable'
import AboutTenera from '../../components/AboutTenera'
import LayoutHtml from '../../layouts/LayoutHtml'
import FooterClassic from '../../layouts/FooterClassic'

export const Layout = LayoutHtml
export const Footer = FooterClassic

const Body = () => (
  <>
    <Card
      title="Abgelaufene oder bald ablaufende Bescheinigungen von {{{scCompanyName}}}"
      ctaButtonTitle="Bescheinigungen einsehen"
      ctaButtonUrl="{{expiredCertificatesAndDurations.[0].platformUrl}}/contacts/{{expiredCertificatesAndDurations.[0].companyId}}/?contactCompanyActiveTab=certificates"
    >
      <UnlessVariable name="messageTemplate">
        <Paragraph>
          <div>
            <p>
              Hallo <Variable name="gcOrganizationName" />,
            </p>
            <p>
              einige Bescheinigungen von <Variable name="scCompanyName" /> laufen demnächst ab oder sind bereits
              abgelaufen.
              <br />
              Eine Übersicht über den Status aller Bescheingungen können Sie direkt im Profil von{' '}
              <Variable name="scCompanyName" /> einsehen, indem Sie auf “Bescheingungen einsehen” klicken. Unten sehen
              Sie bereits eine Liste der betroffenen Bescheinigungen.
            </p>
          </div>
        </Paragraph>
        <Paragraph title="Abgelaufene Bescheinigungen">
          <Each iterator="expiredCertificatesAndDurations">
            <ul style={{ listStyleType: 'none' }}>
              <li>
                Lief <Variable name="this.duration" /> ab
                <ul>
                  <IfVariable name="this.certificateTypeName">
                    <li>
                      <Variable name="this.certificateTypeName" />
                      <ul>
                        <li>
                          <a
                            href="{{ this.platformUrl }}/contacts/{{this.companyId}}/?certificateId={{this.certificateId}}&contactCompanyActiveTab=certificates"
                            style={{
                              color: 'black',
                            }}
                          >
                            <Variable name="this.name" />
                          </a>
                        </li>
                      </ul>
                    </li>
                  </IfVariable>
                </ul>
              </li>
            </ul>
          </Each>
        </Paragraph>
        <Paragraph title="Abgelaufene Bescheinigungen">
          <Each iterator="expiringCertificatesAndDurations">
            <ul style={{ listStyleType: 'none' }}>
              <li>
                Läuft <Variable name="this.duration" /> ab
                <ul>
                  <IfVariable name="this.certificateTypeName">
                    <li>
                      <Variable name="this.certificateTypeName" />
                      <ul>
                        <li>
                          <a
                            href="{{ this.platformUrl }}/contacts/{{this.companyId}}/?certificateId={{this.certificateId}}&contactCompanyActiveTab=certificates"
                            style={{
                              color: 'black',
                            }}
                          >
                            <Variable name="this.name" />
                          </a>
                        </li>
                      </ul>
                    </li>
                  </IfVariable>
                </ul>
              </li>
            </ul>
          </Each>
        </Paragraph>
      </UnlessVariable>
      <Variable name="messageTemplate" />
    </Card>
    <Spacer size={32} />
    <Card title={<IfLocale locale="de">Angefragte Bescheinigungen</IfLocale>}>
      <IfVariable name="certificateTypeName">
        <Paragraph>
          <strong>{`{{certificateTypeName}}`}</strong>
        </Paragraph>
      </IfVariable>
      <Variable name="messageTemplate" />
    </Card>
    <Spacer size={32} />
    <RequesterInfo />
    <Spacer size={32} />
    <AboutTenera />
  </>
)

export default Body
