import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Suspend = React.lazy(() => new Promise(resolve => {}))

export default class Suspender extends Component {
  static propTypes = {
    suspend: PropTypes.bool,
    children: PropTypes.node
  }

  render() {
    const {
      suspend, children
    } = this.props

    return suspend ? <Suspend /> : children
  }
}
