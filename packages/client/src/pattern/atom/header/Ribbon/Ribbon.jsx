import React from 'react'
import { ribbonDefaultProps, ribbonPropTypes } from './Ribbon.props'

export function Ribbon({ className }) {
  return <div className={className} />
}

Ribbon.defaultProps = ribbonDefaultProps

Ribbon.propTypes = ribbonPropTypes
