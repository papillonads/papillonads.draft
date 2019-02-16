import React from 'react'
import { svgIconShape } from '../SvgIcon.shape'
import { getSvgIconPath } from '../../../../../utility/asset'

const SvgIcon = ({ className, name, width, height, fill }) => (
  <svg fill={fill} width={width} height={height} className={className} viewBox="0 0 1024 1024">
    <path d={getSvgIconPath(name)} />
  </svg>
)

SvgIcon.defaultProps = {
  className: '',
  fill: '',
}

SvgIcon.propTypes = svgIconShape.isRequired

export default SvgIcon
