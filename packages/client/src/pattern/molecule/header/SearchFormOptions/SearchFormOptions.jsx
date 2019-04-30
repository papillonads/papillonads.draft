import React from 'react'
import cn from 'classnames'
import cs from './SearchFormOptions.scss'
import { searchFormOptionsDefaultProps, searchFormOptionsPropTypes } from './SearchFormOptions.props'

const SearchFormOptions = ({ className }) => {
  const searchFormOptionsClassList = cn(className, cs.searchFormOptions)

  return <div className={searchFormOptionsClassList}>SearchFormOptions</div>
}

SearchFormOptions.defaultProps = searchFormOptionsDefaultProps

SearchFormOptions.propTypes = searchFormOptionsPropTypes

export default SearchFormOptions
