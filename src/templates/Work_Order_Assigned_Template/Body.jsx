import React from 'react'
import ButtonConfirm from '../../shared/ButtonConfirm'
import IfLocale from '../../helpers/IfLocale'
import Variable from '../../helpers/Variable'
import AboutTenera from '../../shared/AboutTenera'
import BottomText from '../../shared/BottomText'
import Paragraph from '../../shared/Paragraph'
import IfVariable from '../../helpers/IfVariable'
import Each from '../../helpers/Each'

const Body = () => (
  <>
    <div className="section intro" style={{ padding: '10px' }}>
      <table width="100%">
        <tbody>
          <div>
            <p>
              <IfLocale locale="en">Hello</IfLocale>
              <IfLocale locale="de">Hallo</IfLocale>
              <Variable prefixText=" " name="sharedWithUserFirstName" />
              <Variable prefixText=" " name="sharedWithUserLastName" />,
            </p>
            <p>
              <Variable name="ownerOrganizationName" /> hat Ihre Einladung zur Zusammenarbeit auf der Tenera Plattform
              angenommen. Durch die Vernetzung wird Ihre Kommunikation und Zusammenarbeit in Projekten effizienter und
              transparenter. Indem Sie auf “Profil ansehen” klicken, gelangen Sie automatisch zum Profil von{' '}
              <Variable name="ownerOrganizationName" />.
            </p>
            <ButtonConfirm
              titleLocaleDe="Auftrag ansehen"
              titleLocaleEn="See Work Order"
              hrefValue="{{reviewWorkOrderURL}}"
            />
            <br />
            <br />
            <br />
            <Paragraph title="{{workOrderName}}">
              <ul style={{ listStyleType: 'none', paddingInlineStart: 0 }}>
                <li>
                  <IfLocale locale="en">Commissioned by</IfLocale>
                  <IfLocale locale="de">Beauftragt von</IfLocale>
                  <p style={{ marginBlockStart: 0 }}>
                    <strong>
                      <Variable name="ownerOrganizationName" />
                    </strong>
                  </p>
                </li>
                <li>
                  <IfLocale locale="en">Project address</IfLocale>
                  <IfLocale locale="de">Adresse</IfLocale>
                  <p style={{ marginBlockStart: 0 }}>
                    <strong>
                      <Variable name="siteAddressLine1" />
                      <br />
                      <Variable name="siteAddressLine2" />,
                      <br />
                      <Variable name="siteAddressPostalCode" />
                      <br />
                      <Variable name="siteAddressCity" />
                      <br />
                    </strong>
                  </p>
                </li>
                <li>
                  <IfLocale locale="en">Construction time frame</IfLocale>
                  <IfLocale locale="de">Geplanter Ausführungszeitraum </IfLocale>
                  <p style={{ marginBlockStart: 0 }}>
                    <strong>
                      <Variable name="constructionStartDate" />
                      <Variable name="constructionEndDate" />,
                    </strong>
                  </p>
                </li>
                <li>
                  <IfLocale locale="en">Description</IfLocale>
                  <IfLocale locale="de">Beschreibung</IfLocale>
                  <p style={{ marginBlockStart: 0 }}>
                    <Variable name="description" />
                  </p>
                </li>
              </ul>
            </Paragraph>
          </div>
        </tbody>
      </table>
    </div>
    <AboutTenera />
    <BottomText />
  </>
)

export default Body
