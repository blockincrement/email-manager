import React from 'react'
import ButtonConfirm from '../../shared/ButtonConfirm'
import IfLocale from '../../helpers/IfLocale'
import Variable from '../../helpers/Variable'
import AboutTenera from '../../shared/AboutTenera'
import BottomText from '../../shared/BottomText'
import IfVariable from '../../helpers/IfVariable'

const Body = () => (
  <>
    <div className="section intro" style={{ padding: '10px' }}>
      <table width="100%">
        <tbody>
          <div>
            <p>
              <IfLocale locale="de">Hallo</IfLocale>
              <IfLocale locale="en">Hello</IfLocale>
              <Variable prefixText=" " name="inviterFirstName" />
              <Variable prefixText=" " name="inviterLastName" />
              <IfVariable name="inviterCompanyName">
                <Variable prefixText=" " name="inviterPosition" />
              </IfVariable>
              ,
              <IfVariable name="inviterPosition">
                <Variable prefixText=" " name="inviterCompanyName" />
              </IfVariable>
            </p>
            <p>{`{{{message}}}`}</p>
            <ButtonConfirm
              titleLocaleDe="Einladung annehmen"
              titleLocaleEn="Accept invite"
              hrefValue="{{acceptInvitationURL}}"
            />
            <br />
            <br />
            <br />
          </div>
        </tbody>
      </table>
    </div>
    <AboutTenera />
    <BottomText />
  </>
)

export default Body
