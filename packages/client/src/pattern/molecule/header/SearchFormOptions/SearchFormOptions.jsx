import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import cs from './SearchFormOptions.scss'

const SearchFormOptions = ({ className }) => {
  const searchFormOptionsClassList = cn(className, cs.searchFormOptions)

  return <div className={searchFormOptionsClassList}>SearchFormOptions</div>
}

SearchFormOptions.defaultProps = {
  className: '',
}

SearchFormOptions.propTypes = {
  className: string,
}

export default SearchFormOptions
