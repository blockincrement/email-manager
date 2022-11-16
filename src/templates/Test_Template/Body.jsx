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

const Body = () => (
  <>
    <Card
      title={`{{requesterOrganizationName}} fragt {{#if (equals requestCount "1")}}einen{{else}} {{@root.requestCount}} {{/if}} Bescheinigungen vor`}
      ctaButtonTitle="Bescheinigungen hochladen"
      ctaButtonUrl="{{certificateSubmissionUrl}}"
    >
      <UnlessVariable name="messageTemplate">
        <Paragraph>
          Guten Tag, <br />
          bitte reichen Sie dringend {`{{#if (equals requestCount "1")}}`}den aufgelisteten Bescheinigung
          {`{{else}}`}die aufgelisteten Bescheinigungen{`{{/if}}`} ein. Vielen Dank!
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
