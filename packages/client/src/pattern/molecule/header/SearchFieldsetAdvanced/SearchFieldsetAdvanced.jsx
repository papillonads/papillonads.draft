import React from 'react'
import cn from 'classnames'
import cs from './SearchFieldsetAdvanced.scss'
import Select from 'react-select'
import Input from '../../../atom/header/Input'
import { searchFieldsetAdvancedDefaultProps, searchFieldsetAdvancedPropTypes } from './SearchFieldsetAdvanced.props'

const SearchFieldsetAdvanced = ({ className, data }) => {
  const searchFieldsetAdvancedClassList = cn(className, cs.searchFieldsetAdvanced)

  /* eslint-disable */
  const [category, setCategory] = React.useState('')
  const [distance, setDistance] = React.useState('')
  /* eslint-enable */

  const { categories, distances } = data

  return (
    <div className={searchFieldsetAdvancedClassList}>
      <Select
        className={cs.searchFieldsetAdvancedGroup}
        options={categories}
        onChange={selectedOption => {
          setCategory(selectedOption.value)
        }}
        placeholder="Alle groepen..."
      />
      <Input className={cs.searchFieldsetAdvancedPostcode} placeholder="Postcode" />
      <Select
        className={cs.searchFieldsetAdvancedDistance}
        options={distances}
        onChange={selectedOption => {
          setDistance(selectedOption.value)
        }}
        placeholder="Alle afstanden..."
      />
    </div>
  )
}

SearchFieldsetAdvanced.defaultProps = searchFieldsetAdvancedDefaultProps

SearchFieldsetAdvanced.propTypes = searchFieldsetAdvancedPropTypes

export default SearchFieldsetAdvanced
