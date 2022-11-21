import React from 'react'
import Card from '../../components/Card'
import UnlessVariable from '../../helpers/UnlessVariable'
import Variable from '../../helpers/Variable'
import Paragraph from '../../components/Paragraph'
import RequesterInfo from '../../components/RequesterInfo'
import Spacer from '../../components/Spacer'
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
      title={`{{#if (equals locale "de")}} Ihre Zusammenarbeit mit {{{inviterCompanyName}}}wird digitaler.{{/if}}
      {{#if (equals locale "en")}}{{{inviterCompanyName}}} is inviting you to collaborate on the Tenera platform.{{/if}}`}
      ctaButtonTitle="Einladung annehmen"
      ctaButtonUrl="{{acceptInvitationURL}}"
    >
      <UnlessVariable name="messageTemplate">
        <Paragraph>
          <p>
            <IfLocale locale="de">Hallo</IfLocale>
            <IfLocale locale="en">Hello</IfLocale>
            <Variable prefixText=" " name="inviterFirstName" />
            <Variable prefixText=" " name="inviterLastName" />
            <IfVariable name="inviterCompanyName">
              <Variable prefixText=" " name="inviterPosition" />
            </IfVariable>
            ,
            <IfVariable name="inviterPosition">
              <Variable prefixText=" " name="inviterCompanyName" />
            </IfVariable>
          </p>
          <p>{`{{{message}}}`}</p>
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
