import React from 'react'

const LazyHomePage = React.lazy(() => import('./HomePage'))

const AsyncHomePage = () => (
  <React.Suspense fallback={null}>
    <LazyHomePage />
  </React.Suspense>
)

export default AsyncHomePage
