import React from 'react'
import UsefulLinks from './UsefulLinks'
import homePageData from '../../../../../../server/src/data/page/home'

const defaultRender = <UsefulLinks data={homePageData.content.leftColumn.usefulLinks} />

export { defaultRender }
