import React from 'react'
import Variable from '../../helpers/Variable'
import ButtonConfirm from '../../shared/ButtonConfirm'
import IfVariable from '../../helpers/IfVariable'
import Paragraph from '../../shared/Paragraph'
import Each from '../../helpers/Each'

const Body = () => (
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
        hrefVariableName="approvedCertificateProposals.[0].certificateProposalUrl"
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
)

export default Body
