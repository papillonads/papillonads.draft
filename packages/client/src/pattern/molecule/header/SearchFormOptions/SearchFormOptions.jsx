import React from 'react'
import cx from 'classnames'
import { searchFormOptions } from './SearchFormOptions.scss'
import { searchFormOptionsDefaultProps, searchFormOptionsPropTypes } from './SearchFormOptions.props'

export function SearchFormOptions({ className }) {
  return <div className={cx(className, searchFormOptions)}>SearchFormOptions</div>
}

SearchFormOptions.defaultProps = searchFormOptionsDefaultProps

SearchFormOptions.propTypes = searchFormOptionsPropTypes
