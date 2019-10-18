import React from 'react'
import cx from 'classnames'
import { header } from './Header.scss'
import { NavigationBar } from '../../../molecule/header/NavigationBar'
import { SearchBar } from '../../../molecule/header/SearchBar'
import { headerDefaultProps, headerPropTypes } from './Header.props'

export const Header = ({ className, data }) => (
  <div className={cx(className, header)}>
    <NavigationBar data={data.navigationBar} />
    <SearchBar data={data.searchBar} />
  </div>
)

Header.defaultProps = headerDefaultProps

Header.propTypes = headerPropTypes
