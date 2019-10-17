import React from 'react'
import AsyncNotFoundPage from '../AsyncNotFoundPage'
import NotFoundPage from '../NotFoundPage'

const props = {
  location: {
    pathname: 'some-path-name',
  },
}

export const asyncRender = <AsyncNotFoundPage />
export const defaultRender = <NotFoundPage location={props.location} />
