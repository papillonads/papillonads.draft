import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import styles from './NavigationBar.scss'
import Logo from '../../../atom/header/Logo'
import Links from '../Links'

const NavigationBar = ({ className }) => {
  const linkItems = [{ text: 'Help en info' }, { text: 'Voorwaarden' }, { text: 'Veilig handelen' }]

  const navigationBarClassList = cn(className, styles.navigationBar)

  return (
    <div className={navigationBarClassList}>
      <Logo className={styles.logo} />
      <Links className={styles.links} items={linkItems} />
    </div>
  )
}

NavigationBar.defaultProps = {
  className: '',
}

NavigationBar.propTypes = {
  className: string,
}.isRequired

export default NavigationBar
