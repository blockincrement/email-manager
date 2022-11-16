import React from 'react'
import Variable from '../../helpers/Variable'
import ButtonConfirm from '../../shared/ButtonConfirm'
import IfVariable from '../../helpers/IfVariable'
import Paragraph from '../../shared/Paragraph'
import Each from '../../helpers/Each'
import AboutTenera from '../../shared/AboutTenera'
import BottomText from '../../shared/BottomText'

const Body = () => (
  <>
    <div className="section intro" style={{ padding: '10px' }}>
      <table width="100%">
        <tbody>
          <div>
            <p>
              Guten Tag,
              <br />
              <Variable name="gcOrganizationName" />
              hat einige Ihrer Bescheinigungen freigegeben.
            </p>
            <IfVariable name="approvedCertificateProposals">
              <ButtonConfirm
                title="Bescheinigungen einsehen"
                hrefValue="{{approvedCertificateProposals.[0].certificateProposalUrl}}"
              />
            </IfVariable>
            <br />
            <br />
            <Paragraph title="Kürzlich freigegebene Bescheinigungen">
              <ul>
                <Each iterator="approvedCertificateProposals">
                  <li>
                    <a
                      href="{{this.certificateProposalUrl}}"
                      style={{
                        color: 'black',
                      }}
                    >
                      <Variable name="this.filename" />
                    </a>
                  </li>
                </Each>
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
