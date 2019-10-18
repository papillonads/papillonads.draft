import React from 'react'
import { ribbonDefaultProps, ribbonPropTypes } from './Ribbon.props'

export const Ribbon = ({ className }) => <div className={className} />

Ribbon.defaultProps = ribbonDefaultProps

Ribbon.propTypes = ribbonPropTypes
