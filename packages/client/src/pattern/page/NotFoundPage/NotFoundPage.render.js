import React from 'react'
import NotFoundPage from './NotFoundPage'

const props = {
  location: {
    pathname: 'some-path-name',
  },
}

const defaultRender = <NotFoundPage {...props} />

export { defaultRender }
