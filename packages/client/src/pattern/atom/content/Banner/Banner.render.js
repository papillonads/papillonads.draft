import React from 'react'
import Banner from './Banner'
import homePageData from '../../../../../../server/src/datasources/page/homePageData'

const topBannerRender = <Banner data={homePageData.content.topBanner.resources[0]} />
const marketingBannerRender = <Banner data={homePageData.content.marketingBanner.resources[0]} />

export { topBannerRender, marketingBannerRender }
