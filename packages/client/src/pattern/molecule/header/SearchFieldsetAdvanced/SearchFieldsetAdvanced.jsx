import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import cs from './SearchFieldsetAdvanced.scss'

const SearchFieldsetAdvanced = ({ className }) => {
  const searchFieldsetAdvancedClassList = cn(className, cs.searchFieldsetAdvanced)

  return <div className={searchFieldsetAdvancedClassList}>SearchFieldsetAdvanced</div>
}

SearchFieldsetAdvanced.defaultProps = {
  className: '',
}

SearchFieldsetAdvanced.propTypes = {
  className: string,
}.isRequired

export default SearchFieldsetAdvanced
