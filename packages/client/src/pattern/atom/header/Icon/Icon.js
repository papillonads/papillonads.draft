import React from 'react'
import { iconShape } from './Icon.shape'
import { getSvgIconPath } from '../../../../utility/asset'

const Icon = ({ className, name, width, height, fill }) => (
  <svg fill={fill} width={width} height={height} className={className} viewBox="0 0 1024 1024">
    <path d={getSvgIconPath(name)} />
  </svg>
)

Icon.defaultProps = {
  className: '',
  fill: '',
}

Icon.propTypes = iconShape.isRequired

export default Icon
