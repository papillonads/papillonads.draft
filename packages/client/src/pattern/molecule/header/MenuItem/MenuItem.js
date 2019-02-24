import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import styles from './MenuItem.scss'

const MenuItem = ({ className }) => {
  const menuItemClassList = cn(className, styles.menuItem)

  return <div className={menuItemClassList}>MenuItem</div>
}

MenuItem.defaultProps = {
  className: '',
}

MenuItem.propTypes = {
  className: string,
}.isRequired

export default MenuItem
