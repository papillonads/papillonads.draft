import React from 'react'
import { buttonDefaultProps, buttonPropTypes } from './Button.props'

export function Button({ className, children }) {
  return <div className={className}>{children}</div>
}

Button.defaultProps = buttonDefaultProps

Button.propTypes = buttonPropTypes
