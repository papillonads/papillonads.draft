import React from 'react'
import Links from './Links'
import homePage from '../../../../../../server/src/datasources/page/homePage'

const defaultRender = <Links data={homePage.header.navigationBar.links} />

export { defaultRender }
