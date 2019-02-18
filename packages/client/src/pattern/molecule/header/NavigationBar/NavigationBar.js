import React from 'react'
import { shape, string } from 'prop-types'
import cn from 'classnames'
import styles from './NavigationBar.scss'
import Logo from '../../../atom/header/Logo'
import Links from '../Links'

const NavigationBar = ({ className }) => {
  const navigationBarClassList = cn(className, styles.navigationBar)

  return (
    <div className={navigationBarClassList}>
      <Logo className={styles.logo} />
      <Links className={styles.links} />
    </div>
  )
}

NavigationBar.defaultProps = {
  className: '',
}

NavigationBar.propTypes = shape({
  className: string,
}).isRequired

export default NavigationBar
