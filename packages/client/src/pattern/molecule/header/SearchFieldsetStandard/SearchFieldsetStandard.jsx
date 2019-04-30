import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import cs from './SearchFieldsetStandard.scss'
import Input from '../../../atom/header/Input'

const SearchFieldsetStandard = ({ className }) => {
  const searchFieldsetStandardClassList = cn(className, cs.searchFieldsetStandard)

  return (
    <div className={searchFieldsetStandardClassList}>
      <Input className={cs.searchFieldsetStandard__input} />
    </div>
  )
}

SearchFieldsetStandard.defaultProps = {
  className: '',
}

SearchFieldsetStandard.propTypes = {
  className: string,
}

export default SearchFieldsetStandard
