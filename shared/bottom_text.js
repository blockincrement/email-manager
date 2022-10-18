import { html } from 'htm/react/index.mjs'

export const bottomText = html`
  <div style=${{ width: '100%', minWidth: '280px', maxWidth: '600px', backgroundColor: '#ffffff', margin: '0 auto' }}>
    <div className="section text" style=${{ padding: '10px' }}>
      <table width="100%">
        <tbody>
          <tr>
            <td align="left" className>
              <p style=${{ msoLineHeightRule: 'exactly' }}>
                Leider können Sie auf diese E-Mail nicht antworten. Bei Fragen oder technischen Problemen&nbsp;wenden
                Sie sich bitte direkt an Ihre/n AnsprechpartnerIn oder an unser Service Team via service@tenera.io.<br />
                <br />
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
`
