import React from 'react'
import cx from 'classnames'
import { searchFieldsetStandard, input } from './SearchFieldsetStandard.scss'
import { Input } from '../../../atom/header/Input'
import { searchFieldsetStandardDefaultProps, searchFieldsetStandardPropTypes } from './SearchFieldsetStandard.props'

export const SearchFieldsetStandard = ({ className }) => (
  <div className={cx(className, searchFieldsetStandard)}>
    <Input className={input} />
  </div>
)

SearchFieldsetStandard.defaultProps = searchFieldsetStandardDefaultProps

SearchFieldsetStandard.propTypes = searchFieldsetStandardPropTypes
