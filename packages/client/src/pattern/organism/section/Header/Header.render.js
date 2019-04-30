import React from 'react'
import Header from './Header'
import homePage from '../../../../../../server/src/datasources/page/homePage'

const defaultRender = <Header data={homePage.header} />

export { defaultRender }
