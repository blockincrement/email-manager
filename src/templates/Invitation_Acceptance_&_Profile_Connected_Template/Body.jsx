import React from 'react'
import IfLocale from '../../helpers/IfLocale'
import Variable from '../../helpers/Variable'
import ButtonConfirm from '../../shared/ButtonConfirm'
import AboutTenera from '../../shared/AboutTenera'
import BottomText from '../../shared/BottomText'
import MarketingLayout from '../../shared/MarketingLayout'
import MarketingHeader from '../../shared/MarketingHeader'
import MarketingFooter from '../../shared/MarketingFooter'

export const Layout = <MarketingLayout />
export const Header = <MarketingHeader />
export const Footer = <MarketingFooter />

const Body = () => (
  <>
    <div className="section intro" style={{ padding: '10px' }}>
      <table width="100%">
        <tbody>
          <div>
            <IfLocale locale="en">
              <p>
                Hello <Variable name="sharedWithUserFirstName" /> <Variable name="sharedWithUserLastName" />,
              </p>
              <p>
                you are now connected on Tenera with <Variable name="ownerOrganizationName" />.
              </p>
            </IfLocale>
            <IfLocale locale="de">
              <p>
                Hallo <Variable name="sharedWithUserFirstName" /> <Variable name="sharedWithUserLastName" />,
              </p>
              <p>
                Sie sind jetzt auf Tenera mit <Variable name="ownerOrganizationName" /> vernetzt.
                <Variable name="ownerOrganizationName" /> hat Ihre Einladung zur Zusammenarbeit auf der Tenera Plattform
                angenommen. Durch die Vernetzung wird Ihre Kommunikation und Zusammenarbeit in Projekten effizienter und
                transparenter. Indem Sie auf “Profil ansehen” klicken, gelangen Sie automatisch zum Profil von{' '}
                <Variable name="ownerOrganizationName" />.
              </p>
            </IfLocale>
            <ButtonConfirm
              titleLocaleDe="Profil ansehen"
              titleLocaleEn="Review company profile"
              hrefValue="{{reviewContactURL}}"
            />
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
