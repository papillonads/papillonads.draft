import React from 'react'
import NavigationBar from './NavigationBar'
import homePage from '../../../../../../server/src/datasources/page/homePage'

const defaultRender = <NavigationBar data={homePage.header.navigationBar} />

export { defaultRender }
