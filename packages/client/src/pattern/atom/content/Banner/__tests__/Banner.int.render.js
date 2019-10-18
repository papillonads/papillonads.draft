import React from 'react'
import { Banner } from '../Banner'
import homePageData from '../../../../../../../server/src/data/page/home'

export const topBannerRender = <Banner data={homePageData.content.topBanner} />
export const marketingBannerRender = <Banner data={homePageData.content.marketingBanner} />
