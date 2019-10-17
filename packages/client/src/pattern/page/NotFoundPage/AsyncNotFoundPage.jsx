import React from 'react'
import { notFoundPageDefaultProps, notFoundPagePropTypes } from './NotFoundPage.props'

const LazyNotFoundPage = React.lazy(() => import('./NotFoundPage'))

const AsyncNotFoundPage = ({ location }) => (
  <React.Suspense fallback={null}>
    <LazyNotFoundPage location={location} />
  </React.Suspense>
)

AsyncNotFoundPage.defaultProps = notFoundPageDefaultProps

AsyncNotFoundPage.propTypes = notFoundPagePropTypes

export default AsyncNotFoundPage
