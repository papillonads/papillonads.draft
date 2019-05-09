import React from 'react'
import Menu from './Menu'
import homePageData from '../../../../../../server/src/data/page/home'

const defaultRender = <Menu data={homePageData.header.navigationBar.dropdown} />

export { defaultRender }
