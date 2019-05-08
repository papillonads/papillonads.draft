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
      <div className={cn(cs.searchBarMaxWidth)}>
        <SearchFieldsetStandard className={cs.searchBarMaxWidthSearchFieldsetStandard} />
        <SearchFieldsetAdvanced data={data.searchFieldsetAdvanced} className={cs.searchBarMaxWidthSearchFieldsetAdvanced} />
        <Button className={cs.searchBarMaxWidthButton}>Zoek</Button>
        {/* <SearchFormOptions className={cs.searchBarMaxWidthSearchFormOptions} /> */}
      </div>
    </div>
  )
}

SearchBar.defaultProps = searchBarDefaultProps

SearchBar.propTypes = searchBarPropTypes

export default SearchBar
