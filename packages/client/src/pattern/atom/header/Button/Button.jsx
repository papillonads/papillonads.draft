import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import styles from './Button.scss'

const Button = ({ className }) => {
  const buttonClassList = cn(className, styles.button)

  return <div className={buttonClassList}>Button</div>
}

Button.defaultProps = {
  className: '',
}

Button.propTypes = {
  className: string,
}.isRequired

export default Button
