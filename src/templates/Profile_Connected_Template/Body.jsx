import React from 'react'
import ButtonConfirm from '../../shared/ButtonConfirm'
import IfLocale from '../../helpers/IfLocale'
import Variable from '../../helpers/Variable'
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
                Hello
                <Variable prefixText=" " name="sharedWithUserFirstName" />
                <Variable prefixText=" " name="sharedWithUserLastName" />,
              </p>
              <p>
                You are now connected on Tenera with <Variable name="ownerOrganizationName" />.
              </p>
            </IfLocale>
            <IfLocale locale="de">
              <p>
                Hallo
                <Variable prefixText=" " name="sharedWithUserFirstName" />
                <Variable prefixText=" " name="sharedWithUserLastName" />,
              </p>
              <p>
                <Variable name="ownerOrganizationName" /> hat Ihre Einladung zur Zusammenarbeit auf der Tenera Plattform
                angenommen. Durch die Vernetzung wird Ihre Kommunikation und Zusammenarbeit in Projekten effizienter und
                transparenter. Indem Sie auf “Profil ansehen” klicken, gelangen Sie automatisch zum Profil von{' '}
                <Variable name="ownerOrganizationName" />.
              </p>
            </IfLocale>
            <ButtonConfirm
              titleLocaleDe="Profil ansehen"
              titleLocaleEn="View Company Profile"
              hrefValue="{{reviewContactURL}}"
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
