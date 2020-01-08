import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { PAGES } from '../../../graphql/query'
import { HomeTemplate } from '../../template/HomeTemplate'
import { homePageDefaultProps, homePagePropTypes } from './HomePage.props'

export function HomePage({ className }) {
  const { data } = useQuery(PAGES)

  if (data?.pages?.list) {
    return (
      <div className={className}>
        <HomeTemplate data={data.pages.list.find(page => page.info.id === 'home')} />
      </div>
    )
  }

  return null
}

HomePage.defaultProps = homePageDefaultProps

HomePage.propTypes = homePagePropTypes

// Default export is required to use with React.lazy()
export default HomePage
