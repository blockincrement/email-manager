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
      title={`{{#if (equals locale "de")}}{{{ownerOrganizationName}}} lädt Sie zur Zusammenarbeit am Auftrag {{workOrderName}} ein!{{/if}}{{#if (equals locale "en")}}{{{ownerOrganizationName}}} shared work order draft {{workOrderName}} with you!{{/if}}`}
      ctaButtonTitle="Auftrag ansehen"
      ctaButtonUrl="{{reviewWorkOrderURL}}"
    >
      <UnlessVariable name="messageTemplate">
        <Paragraph>
          <p>
            <IfLocale locale="en">Hello</IfLocale>
            <IfLocale locale="de">Hallo</IfLocale>
            <Variable prefixText=" " name="sharedWithUserFirstName" />
            <Variable prefixText=" " name="sharedWithUserLastName" />,
          </p>
          <p>
            <IfLocale locale="de">
              Sie wurden von <Variable name="ownerOrganizationName" /> zur Zusammenarbeit am Auftrag{' '}
              <Variable name="workOrderName" /> ein. Indem Sie auf “Auftrag ansehen” klicken, gelangen Sie automatisch
              zur Tenera Plattform mit allen Informationen zum Auftrag. Eine Zusammenfassung der wichtigsten
              Informationen können Sie bereits am Ende dieser Email sehen. Die Nutzung der Plattform ist für Sie
              kostenlos.
            </IfLocale>
            <IfLocale locale="en">
              <Variable name="ownerOrganizationName" /> has assigned the work order <Variable name="workOrderName" /> to
              you.
            </IfLocale>
          </p>
          <Paragraph title="{{workOrderName}}">
            <ul style={{ listStyleType: 'none', paddingInlineStart: 0 }}>
              <li>
                <IfLocale locale="en">Commissioned by</IfLocale>
                <IfLocale locale="de">Beauftragt von</IfLocale>
                <p style={{ marginBlockStart: 0 }}>
                  <strong>
                    <Variable name="ownerOrganizationName" />
                  </strong>
                </p>
              </li>
              <li>
                <IfLocale locale="en">Project address</IfLocale>
                <IfLocale locale="de">Adresse</IfLocale>
                <p style={{ marginBlockStart: 0 }}>
                  <strong>
                    <Variable name="siteAddressLine1" />
                    <br />
                    <Variable name="siteAddressLine2" />,
                    <br />
                    <Variable name="siteAddressPostalCode" />
                    <br />
                    <Variable name="siteAddressCity" />
                    <br />
                  </strong>
                </p>
              </li>
              <li>
                <IfLocale locale="en">Construction time frame</IfLocale>
                <IfLocale locale="de">Geplanter Ausführungszeitraum </IfLocale>
                <p style={{ marginBlockStart: 0 }}>
                  <strong>
                    <Variable name="constructionStartDate" />
                    {' - '}
                    <Variable name="constructionEndDate" />
                  </strong>
                </p>
              </li>
              <li>
                <IfLocale locale="en">Description</IfLocale>
                <IfLocale locale="de">Beschreibung</IfLocale>
                <p style={{ marginBlockStart: 0 }}>
                  <Variable name="description" />
                </p>
              </li>
            </ul>
          </Paragraph>
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
