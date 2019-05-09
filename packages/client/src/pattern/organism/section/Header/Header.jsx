import React from 'react'
import cn from 'classnames'
import cs from './Header.scss'
import NavigationBar from '../../../molecule/header/NavigationBar'
import SearchBar from '../../../molecule/header/SearchBar'
import { headerDefaultProps, headerPropTypes } from './Header.props'

const Header = ({ className, data }) => (
  <div className={cn(className, cs.header)}>
    <NavigationBar data={data.navigationBar} />
    <SearchBar data={data.searchBar} />
  </div>
)

Header.defaultProps = headerDefaultProps

Header.propTypes = headerPropTypes

export default Header
