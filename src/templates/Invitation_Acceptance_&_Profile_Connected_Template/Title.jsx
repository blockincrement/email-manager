import React from 'react'

const Title = () => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>{`{{#equals locale "de"}}{{{ownerOrganizationName}}} hat Ihre Einladung zur Vernetzung angenommen{{/equals}}
{{#equals locale "en"}}{{{ownerOrganizationName}}} has accepted your invitation{{/equals}}`}</>
)

export default Title
