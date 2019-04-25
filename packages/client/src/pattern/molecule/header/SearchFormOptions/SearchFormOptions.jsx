import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import ps from '@primer/css/core/index.scss'
import cs from './SearchFormOptions.scss'

const SearchFormOptions = ({ className }) => {
  const searchFormOptionsClassList = cn(className, ps['p-2'], cs.searchFormOptions)

  return <div className={searchFormOptionsClassList}>SearchFormOptions</div>
}

SearchFormOptions.defaultProps = {
  className: '',
}

SearchFormOptions.propTypes = {
  className: string,
}.isRequired

export default SearchFormOptions
