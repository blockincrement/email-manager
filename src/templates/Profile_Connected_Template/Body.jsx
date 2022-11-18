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
      title={`{{#if (equals locale "de")}}{{ownerOrganizationName}} hat Ihre Einladung zur Vernetzung angenommen.{{/if}}{{#if (equals locale "en")}}{{ownerOrganizationName}} has accepted your invitation.{{/if}}`}
      ctaButtonTitle="Profil ansehen"
      ctaButtonUrl="{{reviewContactURL}}"
    >
      <UnlessVariable name="messageTemplate">
        <Paragraph>
          <IfLocale locale="en">
            <p>
              Hello
              <Variable prefixText=" " name="sharedWithUserFirstName" />
              <Variable prefixText=" " name="sharedWithUserLastName" />,
            </p>
            <p>
              You are now connected on Tenera with <Variable name="ownerOrganizationName" />.
            </p>
          </IfLocale>
          <IfLocale locale="de">
            <p>
              Hallo
              <Variable prefixText=" " name="sharedWithUserFirstName" />
              <Variable prefixText=" " name="sharedWithUserLastName" />,
            </p>
            <p>
              <Variable name="ownerOrganizationName" /> hat Ihre Einladung zur Zusammenarbeit auf der Tenera Plattform
              angenommen. Durch die Vernetzung wird Ihre Kommunikation und Zusammenarbeit in Projekten effizienter und
              transparenter. Indem Sie auf “Profil ansehen” klicken, gelangen Sie automatisch zum Profil von{' '}
              <Variable name="ownerOrganizationName" />.
            </p>
          </IfLocale>
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
