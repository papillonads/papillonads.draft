import React from 'react'
import cn from 'classnames'
import cs from './SearchFieldsetStandard.scss'
import Input from '../../../atom/header/Input'
import { searchFieldsetStandardDefaultProps, searchFieldsetStandardPropTypes } from './SearchFieldsetStandard.props'

const SearchFieldsetStandard = ({ className }) => {
  const searchFieldsetStandardClassList = cn(className, cs.searchFieldsetStandard)

  return (
    <div className={searchFieldsetStandardClassList}>
      <Input className={cs.input} />
    </div>
  )
}

SearchFieldsetStandard.defaultProps = searchFieldsetStandardDefaultProps

SearchFieldsetStandard.propTypes = searchFieldsetStandardPropTypes

export default SearchFieldsetStandard
