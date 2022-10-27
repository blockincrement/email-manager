import React from 'react'
import ButtonConfirm from '../../shared/ButtonConfirm'
import IfLocale from '../../helpers/IfLocale'
import Variable from '../../helpers/Variable'

const Body = () => (
  <div>
    <p>
      <IfLocale locale="de">Hallo</IfLocale>
      <IfLocale locale="en">Hello</IfLocale>
      <Variable name="inviterFirstName" />
      <Variable prefixText={' '} name="inviterLastName" />
      <Variable prefixText={' '} name="inviterPosition" />
      <Variable prefixText=", " name="inviterCompanyName" />
    </p>
    <p>{`{{{message}}}`}</p>
    <ButtonConfirm
      titleLocaleDe="Einladung annehmen"
      titleLocaleEn="Accept invite"
      hrefVariableName="acceptInvitationURL"
    />
    <br />
    <br />
    <br />
  </div>
)

export default Body
