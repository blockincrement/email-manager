import React from 'react'
import Variable from '../../helpers/Variable'
import ButtonConfirm from '../../shared/ButtonConfirm'
import IfVariable from '../../helpers/IfVariable'
import Paragraph from '../../shared/Paragraph'
import Each from '../../helpers/Each'
import BottomText from '../../shared/BottomText'
import MarketingLayout from '../../shared/MarketingLayout'
import MarketingHeader from '../../shared/MarketingHeader'
import MarketingFooter from '../../shared/MarketingFooter'

export const Layout = <MarketingLayout />
export const Header = <MarketingHeader />
export const Footer = <MarketingFooter />

const Body = () => (
  <>
    <div className="section intro" style={{ padding: '10px' }}>
      <table width="100%">
        <tbody>
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
            <ButtonConfirm
              title="Bescheinigungen einsehen"
              hrefValue="{{expiredCertificatesAndDurations.[0].platformUrl}}/contacts/{{expiredCertificatesAndDurations.[0].companyId}}/?contactCompanyActiveTab=certificates"
            />
            <br />
            <br />
            <br />
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
          </div>
        </tbody>
      </table>
    </div>
    <BottomText />
  </>
)

export default Body
