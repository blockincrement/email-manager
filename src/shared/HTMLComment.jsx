import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/no-danger
const HTMLComment = ({ text }) => <div dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }} />

HTMLComment.propTypes = {
  text: PropTypes.node,
}

HTMLComment.defaultProps = {
  text: '',
}
export default HTMLComment
