import React from 'react'

const Body = () => (
  <div>
    <p>
      {`{{#if inviterFirstName}} {{#if inviterLastName}} {{#if inviterPosition}} {{#if inviterCompanyName}} {{#equals
                locale "de"}}Hallo{{/equals}} {{#equals locale "en"}}Hello{{/equals}} {{inviterFirstName}} {{inviterLastName}}
                {{inviterPosition}} , {{inviterCompanyName}} {{/if}} {{/if}} {{/if}} {{/if}} `}
    </p>
    <p>{`{{{message}}}`}</p>
    <a
      href
      style={{
        borderRadius: '5px',
        backgroundColor: '#059E9B',
        msoLineHeightRule: 'exactly',
        fontSize: '16px',
        fontFamily: 'Lato,Tahoma,sans-serif',
        margin: 0,
        textTransform: 'none',
        textDecoration: 'none',
        padding: '12px 18px',
        display: 'block',
        float: 'left',
      }}
      target="_blank"
    >
      <font color="#ffffff">
        <b>{`{{#equals locale &quot;de&quot;}}Einladung annehmen{{/equals}} {{#equals locale  "en"}}Accept invite{{/equals}} `}</b>
      </font>
    </a>
    <br />
    <br />
    <br />
  </div>
)

export default Body
