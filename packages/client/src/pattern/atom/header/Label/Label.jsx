import React from 'react'
import { labelDefaultProps, labelPropTypes } from './Label.props'

export const Label = ({ className, text }) => <div className={className}>{text}</div>

Label.defaultProps = labelDefaultProps

Label.propTypes = labelPropTypes
