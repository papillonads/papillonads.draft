import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import ps from '@primer/css/core/index.scss'
import cs from './SearchFieldsetStandard.scss'
import Input from '../../../atom/header/Input'

const SearchFieldsetStandard = ({ className }) => {
  const searchFieldsetStandardClassList = cn(className, ps['p-2'], cs.searchFieldsetStandard)

  return (
    <div className={searchFieldsetStandardClassList}>
      <Input />
    </div>
  )
}

SearchFieldsetStandard.defaultProps = {
  className: '',
}

SearchFieldsetStandard.propTypes = {
  className: string,
}.isRequired

export default SearchFieldsetStandard
