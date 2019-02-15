import React from 'react'
import ErrorBoundary from './ErrorBoundary'

const SomeComponent = () => <div />

const defaultRender = (
  <ErrorBoundary>
    <SomeComponent />
  </ErrorBoundary>
)

export { defaultRender }
