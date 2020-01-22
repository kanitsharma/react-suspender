# react-suspender

React component that forcefully suspends the component tree.

> 

[![NPM](https://img.shields.io/npm/v/react-suspender.svg)](https://www.npmjs.com/package/react-suspender) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-suspender
```

## Usage

```jsx
import React, { Component, Suspense } from 'react'

import Suspend from 'react-suspender'

class SuspendExample extends Component {
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
```

## Props

- suspend : bool

## License

MIT © [kanitsharma](https://github.com/kanitsharma)
