import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import cs from './SearchFieldsetAdvanced.scss'
import Select from '../../../atom/header/Select'
import Input from '../../../atom/header/Input'
import { categories, distances } from './data'

const SearchFieldsetAdvanced = ({ className }) => {
  const searchFieldsetAdvancedClassList = cn(className, cs.searchFieldsetAdvanced)

  return (
    <div className={searchFieldsetAdvancedClassList}>
      <Select className={cs.searchFieldsetAdvanced__group} items={categories} placeholder="Alle groepen..." />
      <Input className={cs.searchFieldsetAdvanced__postcode} placeholder="Postcode" />
      <Select className={cs.searchFieldsetAdvanced__distance} items={distances} placeholder="Alle afstanden..." />
    </div>
  )
}

SearchFieldsetAdvanced.defaultProps = {
  className: '',
}

SearchFieldsetAdvanced.propTypes = {
  className: string,
}.isRequired

export default SearchFieldsetAdvanced
