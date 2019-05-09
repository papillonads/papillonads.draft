import React from 'react'
import { Query } from 'react-apollo'
import { PAGES } from '../../../graphql/query'
import HomeTemplate from '../../template/HomeTemplate'
import { homePageDefaultProps, homePagePropTypes } from './HomePage.props'

const HomePage = ({ className }) => (
  <div className={className}>
    <Query query={PAGES}>
      {({ data }) =>
        data.pages && data.pages.pages ? <HomeTemplate data={data.pages.pages.find(page => page.info.id === 'home')} /> : null
      }
    </Query>
  </div>
)

HomePage.defaultProps = homePageDefaultProps

HomePage.propTypes = homePagePropTypes

export default HomePage
