import React from 'react'
import cn from 'classnames'
import cs from './SearchFieldsetStandard.scss'
import Input from '../../../atom/header/Input'
import { searchFieldsetStandardDefaultProps, searchFieldsetStandardPropTypes } from './SearchFieldsetStandard.props'

export const SearchFieldsetStandard = ({ className }) => (
  <div className={cn(className, cs.searchFieldsetStandard)}>
    <Input className={cs.input} />
  </div>
)

SearchFieldsetStandard.defaultProps = searchFieldsetStandardDefaultProps

SearchFieldsetStandard.propTypes = searchFieldsetStandardPropTypes
