import React, { useState } from 'react'
import cx from 'classnames'
import Select from 'react-select'
import { searchFieldsetAdvanced, group, postcode, _distance } from './SearchFieldsetAdvanced.scss'
import { Input } from '../../../atom/header/Input'
import { searchFieldsetAdvancedDefaultProps, searchFieldsetAdvancedPropTypes } from './SearchFieldsetAdvanced.props'

export function SearchFieldsetAdvanced({ className, data }) {
  /* eslint-disable */
  const [category, setCategory] = useState('')
  const [distance, setDistance] = useState('')
  /* eslint-enable */

  const { categories, distances } = data

  return (
    <div className={cx(className, searchFieldsetAdvanced)}>
      <Select
        className={group}
        options={categories}
        onChange={selectedOption => {
          setCategory(selectedOption.value)
        }}
        placeholder="Alle groepen..."
      />
      <Input className={postcode} placeholder="Postcode" />
      <Select
        className={_distance}
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
