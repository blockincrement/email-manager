import React from 'react'

const Title = () => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>
    {`{{#equals locale "de"}}Ihre Zusammenarbeit mit {{inviterCompanyName}} wird digitaler. {{/equals}}
{{#equals locale "en"}}{{inviterCompanyName}} is inviting you to collaborate on the Tenera platform. {{/equals}}`}
  </>
)

export default Title
