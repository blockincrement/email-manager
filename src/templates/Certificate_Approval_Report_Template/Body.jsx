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
      title="{{{gcOrganizationName}}} hat Bescheinigungen freigegeben"
      ctaButtonTitle="Bescheinigungen einsehen"
      ctaButtonUrl="{{approvedCertificateProposals.[0].certificateProposalUrl}}"
    >
      <UnlessVariable name="messageTemplate">
        <Paragraph>
          Guten Tag,
          <br />
          <Variable name="gcOrganizationName" />
          hat einige Ihrer Bescheinigungen freigegeben.
        </Paragraph>
        <Paragraph title="Kürzlich freigegebene Bescheinigungen">
          <ul>
            <Each iterator="approvedCertificateProposals">
              <li>
                <a
                  href="{{this.certificateProposalUrl}}"
                  style={{
                    color: 'black',
                  }}
                >
                  <Variable name="this.filename" />
                </a>
              </li>
            </Each>
          </ul>
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
