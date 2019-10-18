import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { PAGES } from '../../../graphql/query'
import HomeTemplate from '../../template/HomeTemplate'
import { homePageDefaultProps, homePagePropTypes } from './HomePage.props'

export const HomePage = ({ className }) => {
  const { data } = useQuery(PAGES)

  if (data?.pages?.pages) {
    return (
      <div className={className}>
        <HomeTemplate data={data.pages.pages.find(page => page.info.id === 'home')} />
      </div>
    )
  }

  return null
}

HomePage.defaultProps = homePageDefaultProps

HomePage.propTypes = homePagePropTypes
