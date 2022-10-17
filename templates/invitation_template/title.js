import { html } from 'htm/react/index.mjs'

export const title = 'Ihre Zusammenarbeit mit [GC name] wird digitaler.'

export default html`
  <div>
    Hallo {'{'}{'{'}Recipient.Salutation{'}'}{'}'}&nbsp;{'{'}{'{'}Recipient.LastName{'}'}{'}'},
    <p>
      [GC name] lädt Sie zur Zusammenarbeit auf der Tenera Plattform ein. Dadurch wird die Kommunikation und
      Zusammenarbeit in Projekten effizienter und transparenter.<br />
      Indem Sie auf "Einladung annehmen" klicken, gelangen Sie automatisch zur Plattform.<br />
      &nbsp;
    </p>
    <a
      href
      style=${{
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
      ><font color="#ffffff"><b>Einladung annehmen</b></font></a
    ><br />
    <br />
    <br />
    &nbsp;
  </div>
`
