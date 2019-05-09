import React from 'react'
import LeftColumn from './LeftColumn'
import homePageData from '../../../../../../server/src/data/page/home'

const defaultRender = <LeftColumn data={homePageData.content.leftColumn} />

export { defaultRender }
