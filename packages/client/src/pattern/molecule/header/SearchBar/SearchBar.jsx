import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import cs from './SearchBar.scss'

const SearchBar = ({ className }) => {
  const searchBarClassList = cn(className, cs.searchBar)

  return <div className={searchBarClassList}>SearchBar</div>
}

SearchBar.defaultProps = {
  className: '',
}

SearchBar.propTypes = {
  className: string,
}.isRequired

export default SearchBar
