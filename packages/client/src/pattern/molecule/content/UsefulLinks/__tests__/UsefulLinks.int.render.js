import React from 'react'
import { UsefulLinks } from '../UsefulLinks'
import { homePageData } from '../../../../../../../server/src/data/page/home'

export const defaultRender = <UsefulLinks data={homePageData.content.leftColumn.usefulLinks} />
