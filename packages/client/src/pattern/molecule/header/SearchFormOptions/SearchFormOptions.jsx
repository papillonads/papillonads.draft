import React from 'react'
import cn from 'classnames'
import cs from './SearchFormOptions.scss'
import { searchFormOptionsDefaultProps, searchFormOptionsPropTypes } from './SearchFormOptions.props'

export const SearchFormOptions = ({ className }) => <div className={cn(className, cs.searchFormOptions)}>SearchFormOptions</div>

SearchFormOptions.defaultProps = searchFormOptionsDefaultProps

SearchFormOptions.propTypes = searchFormOptionsPropTypes
