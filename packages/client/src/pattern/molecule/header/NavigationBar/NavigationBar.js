import React from 'react'
import { shape, string } from 'prop-types'
import cn from 'classnames'
import styles from './NavigationBar.scss'

const NavigationBar = ({ className }) => {
  const navigationBarClassList = cn(className, styles.navigationBar)

  return <div className={navigationBarClassList}>NavigationBar</div>
}

NavigationBar.defaultProps = {
  className: '',
}

NavigationBar.propTypes = shape({
  className: string,
}).isRequired

export default NavigationBar
