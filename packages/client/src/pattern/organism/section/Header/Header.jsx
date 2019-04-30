import React from 'react'
import { bool } from 'prop-types'
import cn from 'classnames'
import cs from './Header.scss'
import NavigationBar from '../../../molecule/header/NavigationBar'
import SearchBar from '../../../molecule/header/SearchBar'
import { headerShape } from './Header.shape'

const Header = ({ className, data }) => {
  const headerClassList = cn(className, cs.header)

  return (
    <div className={headerClassList}>
      <NavigationBar data={data.navigationBar} className={cs.header__navigationBar} />
      <SearchBar data={data.searchBar} className={cs.header__searchBar} />
    </div>
  )
}

Header.defaultProps = {
  className: '',
}

Header.propTypes = {
  className: bool,
  data: headerShape.isRequired,
}.isRequired

export default Header
