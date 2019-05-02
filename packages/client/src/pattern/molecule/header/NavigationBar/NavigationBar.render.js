import React from 'react'
import NavigationBar from './NavigationBar'
import homePageData from '../../../../../../server/src/datasources/page/homePageData'

const defaultRender = <NavigationBar data={homePageData.header.navigationBar} />

export { defaultRender }
