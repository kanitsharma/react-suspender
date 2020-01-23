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

import Suspender from 'react-suspender'

class SuspendExample extends Component {
  render () {
    return (
      <Suspense fallback={<div>Suspended</div>}>
        <Suspender />
      </Suspense>
    )
  }
}
```

Another example, you can suspend your component tree while data fetching.

```jsx
import React, { Component, Suspense } from 'react'

import Suspend from 'react-suspender'

function SuspendExample () {
  const [ dataLoaded, setDataLoaded ] = React.useState(false);

  // Fetch Data
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDataLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Suspender suspend={!dataLoaded} >
        API data loaded !!!
      </Suspender>
    </Suspense>
  )
}
```

## Props

- suspend : bool

## License

MIT © [kanitsharma](https://github.com/kanitsharma)
