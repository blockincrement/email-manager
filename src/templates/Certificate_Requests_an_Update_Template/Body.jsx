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
            <p>
              <Variable name="message" />
            </p>
            <IfVariable name="certificateSubmissionUrl">
              <ButtonConfirm title="Bescheinigungen hochladen" hrefValue="{{certificateSubmissionUrl}}" />
            </IfVariable>
            <br />
            <br />
            <Paragraph title="Zu aktualisierende Bescheinigungen">
              <ul>
                <Each iterator="certificateCountAndNames">
                  <li>
                    <Variable name="this.certificateTypeName" />
                    <ul>
                      <li>
                        <Variable name="this.certificateName" />
                      </li>
                    </ul>
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
    <BottomText />
  </>
)

export default Body
