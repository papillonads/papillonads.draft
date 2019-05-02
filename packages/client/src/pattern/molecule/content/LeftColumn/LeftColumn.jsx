import React from 'react'
import cn from 'classnames'
import cs from './Header.scss'
import NavigationBar from '../../../molecule/header/NavigationBar'
import SearchBar from '../../../molecule/header/SearchBar'
import { headerDefaultProps, headerPropTypes } from './Header.props'

const Header = ({ className, data }) => {
  const headerClassList = cn(className, cs.header)

  return (
    <div className={headerClassList}>
      <NavigationBar data={data.navigationBar} className={cs.header__navigationBar} />
      <SearchBar data={data.searchBar} className={cs.header__searchBar} />
    </div>
  )
}

Header.defaultProps = headerDefaultProps

Header.propTypes = headerPropTypes

export default Header