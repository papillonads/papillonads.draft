import React from 'react'
import { string, object } from 'prop-types'
import cn from 'classnames'
import cs from './NotFoundPage.scss'
import { Query } from 'react-apollo'
import { PAGES } from '../../../graphql/query'
import NotFoundTemplate from '../../template/NotFoundTemplate'

const NotFoundPage = ({ className, location }) => {
  const notFoundPageClassList = cn(className, cs.notFoundPage)

  return (
    <div className={notFoundPageClassList}>
      <Query query={PAGES}>
        {({ data }) =>
          data.pages && data.pages.pages ? (
            <NotFoundTemplate page={data.pages.pages.find(page => page.id === 'not-found')} location={location} />
          ) : null
        }
      </Query>
    </div>
  )
}

NotFoundPage.defaultProps = {
  className: '',
}

NotFoundPage.propTypes = {
  className: string,
  location: object.isRequired,
}

export default NotFoundPage
