import React from 'react'
import SearchBar from './SearchBar'
import homePage from '../../../../../../server/src/datasources/page/homePage'

const defaultRender = <SearchBar data={homePage.header.searchBar} />

export { defaultRender }
