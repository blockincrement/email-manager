import React from 'react'
import PropTypes from 'prop-types'

const Paragraph = ({ title, children }) => (
  <div style={{ width: '100%', minWidth: '280px', maxWidth: '600px', backgroundColor: '#ffffff', margin: '0 auto' }}>
    <div className="section text" style={{ padding: '10px' }}>
      <table width="100%">
        <tbody>
          <tr>
            <td align="left">
              <h4>{title}</h4>
              {children}
              <br />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

Paragraph.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

Paragraph.defaultProps = {
  title: '',
  children: '',
}

export default Paragraph
