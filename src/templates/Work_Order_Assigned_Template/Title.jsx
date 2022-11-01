import React from 'react'

const Title = () => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>{`{{#if (equals locale "de")}}{{{ownerOrganizationName}}} lädt Sie zur Zusammenarbeit am Auftrag {{workOrderName}} ein!{{/if}}{{#if (equals locale "en")}}{{{ownerOrganizationName}}} shared work order draft {{workOrderName}} with you!{{/if}}`}</>
)

export default Title
