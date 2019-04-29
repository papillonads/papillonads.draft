import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import cs from './SearchFieldsetAdvanced.scss'
import Select from 'react-select'
import Input from '../../../atom/header/Input'
import { categories, distances } from './data'

const SearchFieldsetAdvanced = ({ className }) => {
  const searchFieldsetAdvancedClassList = cn(className, cs.searchFieldsetAdvanced)

  /* eslint-disable */
  const [category, setCategory] = React.useState('')
  const [distance, setDistance] = React.useState('')
  /* eslint-enable */

  return (
    <div className={searchFieldsetAdvancedClassList}>
      <Select
        className={cs.searchFieldsetAdvanced__group}
        options={categories}
        onChange={selectedOption => {
          setCategory(selectedOption.value)
        }}
        placeholder="Alle groepen..."
      />
      <Input className={cs.searchFieldsetAdvanced__postcode} placeholder="Postcode" />
      <Select
        className={cs.searchFieldsetAdvanced__distance}
        options={distances}
        onChange={selectedOption => {
          setDistance(selectedOption.value)
        }}
        placeholder="Alle afstanden..."
      />
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
