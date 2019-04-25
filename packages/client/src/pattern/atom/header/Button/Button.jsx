import React from 'react'
import { string, node } from 'prop-types'
import cn from 'classnames'
import styles from './Button.scss'

const Button = ({ className, children }) => {
  const buttonClassList = cn(className, styles.button)

  return <div className={buttonClassList}>{children}</div>
}

Button.defaultProps = {
  className: '',
}

Button.propTypes = {
  className: string,
  children: node.isRequired,
}.isRequired

export default Button
