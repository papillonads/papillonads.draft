import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import styles from './Logo.scss'

const Logo = ({ className }) => {
  const logoClassList = cn(className, styles.logo)

  return <div className={logoClassList}>Logo</div>
}

Logo.defaultProps = {
  className: '',
}

Logo.propTypes = {
  className: string,
}.isRequired

export default Logo
