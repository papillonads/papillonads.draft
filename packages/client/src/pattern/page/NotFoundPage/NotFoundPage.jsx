import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { PAGES } from '../../../graphql/query'
import { NotFoundTemplate } from '../../template/NotFoundTemplate'
import { notFoundPageDefaultProps, notFoundPagePropTypes } from './NotFoundPage.props'

export function NotFoundPage({ className, location }) {
  const { data } = useQuery(PAGES)

  if (data?.pages?.list) {
    return (
      <div className={className}>
        <NotFoundTemplate data={data.pages.list.find(page => page.info.id === 'not-found')} location={location} />
      </div>
    )
  }
}

NotFoundPage.defaultProps = notFoundPageDefaultProps

NotFoundPage.propTypes = notFoundPagePropTypes

// Default export is required to use with React.lazy()
export default NotFoundPage
