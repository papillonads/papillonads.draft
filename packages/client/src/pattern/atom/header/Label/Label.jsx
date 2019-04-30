import React from 'react'
import cn from 'classnames'
import { labelDefaultProps, labelPropTypes } from './Label.props'

const Label = ({ className, text }) => {
  const labelClassList = cn(className)

  return <div className={labelClassList}>{text}</div>
}

Label.defaultProps = labelDefaultProps

Label.propTypes = labelPropTypes

export default Label
