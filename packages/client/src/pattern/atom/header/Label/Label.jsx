import React from 'react'
import { labelDefaultProps, labelPropTypes } from './Label.props'

export function Label({ className, text }) {
  return <div className={className}>{text}</div>
}

Label.defaultProps = labelDefaultProps

Label.propTypes = labelPropTypes
