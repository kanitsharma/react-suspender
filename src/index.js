import React from 'react'
import PropTypes from 'prop-types'

const Suspend = React.lazy(() => new Promise(resolve => {}))

function Suspender({ suspend, children }) {
  return suspend ? <Suspend /> : children
}

Suspender.defaultProps = {
  suspend: true
}

Suspender.propTypes = {
  suspend: PropTypes.bool,
  children: PropTypes.node
}

export default Suspender
