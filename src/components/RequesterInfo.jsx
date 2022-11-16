import React from 'react'
import IfVariable from '../helpers/IfVariable'
import Variable from '../helpers/Variable'
import Card from './Card'
import Paragraph from './Paragraph'
import Spacer from './Spacer'

const RequesterInfo = () => (
  <>
    <Card ghost>
      <Paragraph style={{ fontSize: '12px', color: '#262626', lineHeight: '18px', fontWeight: 'bold' }}>
        <Variable name="requesterName" />
      </Paragraph>
      <Paragraph style={{ fontSize: '12px', lineHeight: '18px' }}>
        <Variable name="requesterPosition" />
      </Paragraph>
    </Card>
    <Spacer size={24} />
    <Card ghost>
      <IfVariable name="requesterPhone">
        <Paragraph style={{ lineHeight: '18px' }}>
          <a
            href="tel:{{requesterPhone}}"
            style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: '12px',
              color: '#059E9B',
              textDecoration: 'none',
            }}
          >{`{{requesterPhone}}`}</a>
        </Paragraph>
      </IfVariable>

      <IfVariable name="requesterEmail">
        <Paragraph style={{ lineHeight: '18px' }}>
          <a
            href="mailto:{{requesterEmail}}"
            style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: '12px',
              color: '#059E9B',
              textDecoration: 'none',
              lineHeight: '18px',
            }}
          >{`{{requesterEmail}}`}</a>
        </Paragraph>
      </IfVariable>
    </Card>
  </>
)

export default RequesterInfo
