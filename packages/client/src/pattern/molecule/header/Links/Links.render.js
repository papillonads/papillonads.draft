import React from 'react'
import Links from './Links'
import homePageData from '../../../../../../server/src/datasources/page/homePageData'

const defaultRender = <Links data={homePageData.header.navigationBar.links} />

export { defaultRender }
