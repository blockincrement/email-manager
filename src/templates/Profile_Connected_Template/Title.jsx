import React from 'react'

const Title = () => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>{`{{#if (equals locale "de")}}{{ownerOrganizationName}} hat Ihre Einladung zur Vernetzung angenommen.{{/if}}{{#if (equals locale "en")}}{{ownerOrganizationName}} has accepted your invitation.{{/if}}`}</>
)

export default Title
