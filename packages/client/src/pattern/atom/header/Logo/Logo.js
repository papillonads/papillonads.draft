import React from 'react'
import { shape, string } from 'prop-types'
import cn from 'classnames'
import styles from './logo.scss'

const Logo = ({ className }) => {
  const logoClassList = cn(className, styles.logo)

  return <div className={logoClassList}>Logo</div>
}

Logo.defaultProps = {
  className: '',
}

Logo.propTypes = shape({
  className: string,
}).isRequired

export default Logo
