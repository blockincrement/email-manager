import React from 'react'
import Variable from '../../helpers/Variable'
import ButtonConfirm from '../../shared/ButtonConfirm'
import IfVariable from '../../helpers/IfVariable'
import Paragraph from '../../shared/Paragraph'
import Each from '../../helpers/Each'
import BottomText from '../../shared/BottomText'

const Body = () => (
  <>
    <div className="section intro" style={{ padding: '10px' }}>
      <table width="100%">
        <tbody>
          <div>
            <p>Hallo,</p>
            <p>
              <Variable name="companyName" /> hat neue Bescheinigungen hochgeladen. Indem Sie auf “Bescheinigungen
              einsehen” klicken, können Sie alle Bescheinigungen ansehen und überprüfen.
            </p>
            <ButtonConfirm title="Bescheinigungen prüfen" hrefValue="{{certificateProposalUrl}}" />
            <br />
            <br />
            <br />
            <Paragraph title="Kürzlich eingereicht Bescheinigungen">
              <ul>
                <IfVariable name="certificateProposals">
                  <Each iterator="certificateProposals">
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
                </IfVariable>
              </ul>
            </Paragraph>
          </div>
        </tbody>
      </table>
    </div>
    <BottomText />
  </>
)

export default Body
