import React, { Component, Suspense } from 'react'

import Suspend from 'react-suspender'

export default class App extends Component {
  render () {
    return (
      <Suspense fallback={<div>Suspended</div>}>
        <Suspend>
          I am suspended.
        </Suspend>
      </Suspense>
    )
  }
}
