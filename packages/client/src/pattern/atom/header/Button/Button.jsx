import React from 'react'
import cn from 'classnames'
import { buttonDefaultProps, buttonPropTypes } from './Button.props'

const Button = ({ className, children }) => {
  const buttonClassList = cn(className)

  return <div className={buttonClassList}>{children}</div>
}

Button.defaultProps = buttonDefaultProps

Button.propTypes = buttonPropTypes

export default Button
