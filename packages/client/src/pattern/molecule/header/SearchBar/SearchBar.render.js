import React from 'react'
import SearchBar from './SearchBar'
import homePageData from '../../../../../../server/src/datasources/page/home'

const defaultRender = <SearchBar data={homePageData.header.searchBar} />

export { defaultRender }
