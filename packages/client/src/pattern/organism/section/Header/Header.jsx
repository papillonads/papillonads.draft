import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import cs from './Header.scss'
import NavigationBar from '../../../molecule/header/NavigationBar'
import SearchBar from '../../../molecule/header/SearchBar'

const Header = ({ className }) => {
  const headerClassList = cn(className, cs.header)

  return (
    <div className={headerClassList}>
      <NavigationBar className={cs.header__navigationBar} />
      {<SearchBar className={cs.header__searchBar} />}
    </div>
  )
}

Header.defaultProps = {
  className: '',
}

Header.propTypes = {
  className: string,
}.isRequired

export default Header
