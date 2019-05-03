import React from 'react'
import Navigation from './Navigation'
import homePageData from '../../../../../../server/src/data/page/home'

const defaultRender = <Navigation data={homePageData.content.leftColumn.navigation} />

export { defaultRender }
