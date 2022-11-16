import React from 'react'
import ButtonConfirm from '../../shared/ButtonConfirm'
import IfLocale from '../../helpers/IfLocale'
import Variable from '../../helpers/Variable'
import AboutTenera from '../../shared/AboutTenera'
import BottomText from '../../shared/BottomText'
import Paragraph from '../../shared/Paragraph'

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
              <IfLocale locale="de">
                Sie wurden von <Variable name="ownerOrganizationName" /> zur Zusammenarbeit am Auftrag{' '}
                <Variable name="workOrderName" /> ein. Indem Sie auf “Auftrag ansehen” klicken, gelangen Sie automatisch
                zur Tenera Plattform mit allen Informationen zum Auftrag. Eine Zusammenfassung der wichtigsten
                Informationen können Sie bereits am Ende dieser Email sehen. Die Nutzung der Plattform ist für Sie
                kostenlos.
              </IfLocale>
              <IfLocale locale="en">
                <Variable name="ownerOrganizationName" /> has assigned the work order <Variable name="workOrderName" />{' '}
                to you.
              </IfLocale>
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
                      {' - '}
                      <Variable name="constructionEndDate" />
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
