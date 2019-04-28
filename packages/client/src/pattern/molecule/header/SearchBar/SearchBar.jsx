import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import cs from './SearchBar.scss'
import SearchFieldsetStandard from '../SearchFieldsetStandard'
import SearchFieldsetAdvanced from '../SearchFieldsetAdvanced'
import Button from '../../../atom/header/Button'
// import SearchFormOptions from '../SearchFormOptions'

const SearchBar = ({ className }) => {
  const searchBarClassList = cn(className, cs.searchBar)

  return (
    <div className={searchBarClassList}>
      <SearchFieldsetStandard className={cs.searchBar__searchFieldsetStandard} />
      <SearchFieldsetAdvanced className={cs.searchBar__searchFieldsetAdvanced} />
      <Button className={cs.searchBar__button}>Zoek</Button>
      {/* <SearchFormOptions className={cs.searchBar__searchFormOptions} /> */}
    </div>
  )
}

SearchBar.defaultProps = {
  className: '',
}

SearchBar.propTypes = {
  className: string,
}.isRequired

export default SearchBar
