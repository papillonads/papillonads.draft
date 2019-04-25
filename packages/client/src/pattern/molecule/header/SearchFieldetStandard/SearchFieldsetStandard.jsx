import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import cs from './SearchFieldsetStandard.scss'

const SearchFieldsetStandard = ({ className }) => {
  const searchFieldsetStandardClassList = cn(className, cs.searchFieldsetStandard)

  return <div className={searchFieldsetStandardClassList}>SearchFieldsetStandard</div>
}

SearchFieldsetStandard.defaultProps = {
  className: '',
}

SearchFieldsetStandard.propTypes = {
  className: string,
}.isRequired

export default SearchFieldsetStandard
