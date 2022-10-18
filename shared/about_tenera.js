import { html } from 'htm/react/index.mjs'

export const aboutTenera = html`
  <div style=${{ width: '100%', minWidth: '280px', maxWidth: '600px', backgroundColor: '#ffffff', margin: '0 auto' }}>
    <div className="section text" style=${{ padding: '10px' }}>
      <table width="100%">
        <tbody>
          <tr>
            <td align="left" className>
              <h4>Was ist Tenera?</h4>
              Tenera verbindet ausschreibende Auftraggeber mit Auftragnehmern. Alle notwendigen Informationen zu
              Ausschreibungen und Aufträgen sind an einem Ort verfügbar. Subunternehmer können auf Tenera mit
              Generalunternehmern an Projekten in einem zentralisierten System zusammenarbeiten und kommunizieren.<br />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
`
