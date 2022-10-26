import React from 'react'
import IfLocale from '../../helpers/IfLocale'
import Variable from '../../helpers/Variable'

const Title = () => (
  <>
    <IfLocale locale="de">
      <Variable name="ownerOrganizationName" /> hat Ihre Einladung zur Vernetzung angenommen.
    </IfLocale>
    <IfLocale locale="en">
      <Variable name="ownerOrganizationName" /> has accepted your invitation.
    </IfLocale>
  </>
)

export default Title
