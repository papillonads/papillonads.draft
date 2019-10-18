import React from 'react'
import { buttonDefaultProps, buttonPropTypes } from './Button.props'

export const Button = ({ className, children }) => <div className={className}>{children}</div>

Button.defaultProps = buttonDefaultProps

Button.propTypes = buttonPropTypes
