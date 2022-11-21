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
      title="{{companyName}} hat Bescheinigungen hochgeladen."
      ctaButtonTitle="Bescheinigungen prüfen"
      ctaButtonUrl="{{certificateProposalUrl}}"
    >
      <UnlessVariable name="messageTemplate">
        <p>Hallo,</p>
        <p>
          <Variable name="companyName" /> hat neue Bescheinigungen hochgeladen. Indem Sie auf “Bescheinigungen einsehen”
          klicken, können Sie alle Bescheinigungen ansehen und überprüfen.
        </p>

        <Paragraph title="Kürzlich eingereicht Bescheinigungen">
          <ul>
            <IfVariable name="certificateProposals">
              <Each iterator="certificateProposals">
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
            </IfVariable>
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
