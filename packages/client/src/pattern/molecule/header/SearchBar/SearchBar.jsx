import React from 'react'
import cn from 'classnames'
import cs from './SearchBar.scss'
import SearchFieldsetStandard from '../SearchFieldsetStandard'
import SearchFieldsetAdvanced from '../SearchFieldsetAdvanced'
import Button from '../../../atom/header/Button'
// import SearchFormOptions from '../SearchFormOptions'
import { searchBarDefaultProps, searchBarPropTypes } from './SearchBar.props'

const SearchBar = ({ className, data }) => {
  const searchBarClassList = cn(className, cs.searchBar)

  return (
    <div className={searchBarClassList}>
      <div className={cn(cs.searchBar__maxWidth)}>
        <SearchFieldsetStandard className={cs.searchBar__maxWidthSearchFieldsetStandard} />
        <SearchFieldsetAdvanced data={data.searchFieldsetAdvanced} className={cs.searchBar__maxWidthSearchFieldsetAdvanced} />
        <Button className={cs.searchBar__maxWidthButton}>Zoek</Button>
        {/* <SearchFormOptions className={cs.searchBar__maxWidthSearchFormOptions} /> */}
      </div>
    </div>
  )
}

SearchBar.defaultProps = searchBarDefaultProps

SearchBar.propTypes = searchBarPropTypes

export default SearchBar
