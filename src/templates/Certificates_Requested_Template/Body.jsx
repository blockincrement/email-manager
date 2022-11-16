import React from 'react'
import Variable from '../../helpers/Variable'
import ButtonConfirm from '../../shared/ButtonConfirm'
import Paragraph from '../../shared/Paragraph'
import Each from '../../helpers/Each'
import AboutTenera from '../../shared/AboutTenera'
import BottomText from '../../shared/BottomText'
import MarketingLayout from '../../shared/MarketingLayout'
import MarketingHeader from '../../shared/MarketingHeader'
import MarketingFooter from '../../shared/MarketingFooter'

export const Layout = MarketingLayout
export const Header = MarketingHeader
export const Footer = MarketingFooter

const Body = () => (
  <>
    <div className="section intro" style={{ padding: '10px' }}>
      <table width="100%">
        <tbody>
          <div>
            <p>
              <Variable name="message" />
            </p>

            <ButtonConfirm title="Bescheinigungen hochladen" hrefValue="{{certificateSubmissionUrl}}" />
            <br />
            <br />
            <Paragraph title="Angefragte Bescheinigungen">
              <ul>
                <Each iterator="certificateCountAndTypes">
                  <li>
                    <Variable name="this.name" />
                  </li>
                </Each>
              </ul>
            </Paragraph>
            <Paragraph>
              <Variable name="requesterName" />
              <br />
              <Variable name="requesterPosition" />
              <br />
              <Variable name="requesterPhone" />
              <br />
              <Variable name="requesterEmail" />
              <br />
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
