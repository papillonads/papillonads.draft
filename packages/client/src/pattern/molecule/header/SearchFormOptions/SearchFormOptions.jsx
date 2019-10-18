import React from 'react'
import cx from 'classnames'
import { searchFormOptions } from './SearchFormOptions.scss'
import { searchFormOptionsDefaultProps, searchFormOptionsPropTypes } from './SearchFormOptions.props'

export const SearchFormOptions = ({ className }) => <div className={cx(className, searchFormOptions)}>SearchFormOptions</div>

SearchFormOptions.defaultProps = searchFormOptionsDefaultProps

SearchFormOptions.propTypes = searchFormOptionsPropTypes
