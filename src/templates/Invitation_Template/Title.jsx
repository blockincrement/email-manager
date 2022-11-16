import React from 'react'
import IfLocale from '../../helpers/IfLocale'
import Variable from '../../helpers/Variable'

const Title = () => (
  <>
    <IfLocale locale="de">
      Ihre Zusammenarbeit mit <Variable name="inviterCompanyName" /> wird digitaler.
    </IfLocale>
    <IfLocale locale="en">
      <Variable name="inviterCompanyName" /> is inviting you to collaborate on the Tenera platform.
    </IfLocale>
  </>
)

export default Title
