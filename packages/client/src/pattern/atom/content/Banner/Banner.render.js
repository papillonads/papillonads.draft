import React from 'react'
import Banner from './Banner'
import homePageData from '../../../../../../server/src/data/page/home'

const topBannerRender = <Banner data={homePageData.content.topBanner} />
const marketingBannerRender = <Banner data={homePageData.content.marketingBanner} />

export { topBannerRender, marketingBannerRender }
