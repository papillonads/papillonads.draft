import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import { Query } from 'react-apollo'
import { PAGES } from '../../../graphql/query'
import HomeTemplate from '../../template/HomeTemplate'

const HomePage = ({ className }) => {
  const homePageClassList = cn(className)

  return (
    <div className={homePageClassList}>
      <Query query={PAGES}>
        {({ data }) => (data.pages && data.pages.pages ? <HomeTemplate data={data.pages.pages.find(page => page.id === 'home')} /> : null)}
      </Query>
    </div>
  )
}

HomePage.defaultProps = {
  className: '',
}

HomePage.propTypes = {
  className: string,
}

export default HomePage
