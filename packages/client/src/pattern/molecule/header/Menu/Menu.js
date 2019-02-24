import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import styles from './Menu.scss'

const Menu = ({ className }) => {
  const menuClassList = cn(className, styles.menu)

  return <div className={menuClassList}>Menu</div>
}

Menu.defaultProps = {
  className: '',
}

Menu.propTypes = {
  className: string,
}.isRequired

export default Menu
