import React from 'react'
import Card from '../../components/sendgrid/Card'
import UnlessVariable from '../../helpers/UnlessVariable'
import Variable from '../../helpers/Variable'
import Paragraph from '../../components/sendgrid/Paragraph'

const BodySendgrid = () => (
  <Card
    title={`{{requesterOrganizationName}} fragt {{#if (equals requestCount "1")}}einen{{else}} {{@root.requestCount}} {{/if}} Bescheinigungen vor`}
    ctaButtonTitle="Bescheinigungen hochladen"
    ctaButtonUrl="{{certificateSubmissionUrl}}"
  >
    <UnlessVariable name="messageTemplate">
      <Paragraph>Guten Tag,</Paragraph>
      <Paragraph>
        bitte reichen Sie dringend {`{{#if (equals requestCount "1")}}`}den aufgelisteten Bescheinigung
        {`{{else}}`}die aufgelisteten Bescheinigungen{`{{/if}}`} ein. Vielen Dank!
      </Paragraph>
    </UnlessVariable>
    <Variable name="messageTemplate" />
  </Card>
)

export default BodySendgrid
