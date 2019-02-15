import React from 'react'
import NoMatch from './NoMatch'

const props = {
  location: {
    pathname: 'some-path-name',
  },
}

const defaultRender = <NoMatch {...props} />

export { defaultRender }
