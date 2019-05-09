import React from 'react'
import { Query } from 'react-apollo'
import { PAGES } from '../../../graphql/query'
import NotFoundTemplate from '../../template/NotFoundTemplate'
import { notFoundPageDefaultProps, notFoundPagePropTypes } from './NotFoundPage.props'

const NotFoundPage = ({ className, location }) => (
  <div className={className}>
    <Query query={PAGES}>
      {({ data }) =>
        data.pages && data.pages.pages ? (
          <NotFoundTemplate page={data.pages.pages.find(page => page.info.id === 'not-found')} location={location} />
        ) : null
      }
    </Query>
  </div>
)

NotFoundPage.defaultProps = notFoundPageDefaultProps

NotFoundPage.propTypes = notFoundPagePropTypes

export default NotFoundPage
