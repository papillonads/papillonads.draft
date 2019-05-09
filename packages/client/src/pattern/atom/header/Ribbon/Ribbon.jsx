import React from 'react'
import { ribbonDefaultProps, ribbonPropTypes } from './Ribbon.props'

const Ribbon = ({ className }) => <div className={className} />

Ribbon.defaultProps = ribbonDefaultProps

Ribbon.propTypes = ribbonPropTypes

export default Ribbon
