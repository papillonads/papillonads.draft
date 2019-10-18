import React from 'react'
import cn from 'classnames'
import cs from './SearchBar.scss'
import { SearchFieldsetStandard } from '../SearchFieldsetStandard'
import { SearchFieldsetAdvanced } from '../SearchFieldsetAdvanced'
import { Button } from '../../../atom/header/Button'
// import SearchFormOptions from '../SearchFormOptions'
import { searchBarDefaultProps, searchBarPropTypes } from './SearchBar.props'

export const SearchBar = ({ className, data }) => (
  <div className={cn(className, cs.searchBar)}>
    <div className={cn(cs.maxWidth)}>
      <SearchFieldsetStandard className={cs.maxWidthSearchFieldsetStandard} />
      <SearchFieldsetAdvanced data={data.searchFieldsetAdvanced} className={cs.maxWidthSearchFieldsetAdvanced} />
      <Button className={cs.maxWidthButton}>Zoek</Button>
      {/* <SearchFormOptions className={cs.maxWidthSearchFormOptions} /> */}
    </div>
  </div>
)

SearchBar.defaultProps = searchBarDefaultProps

SearchBar.propTypes = searchBarPropTypes
