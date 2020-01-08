import React from 'react'
import { getSvgIconPath } from '../../../../../library/asset'
import { svgIconDefaultProps, svgIconPropTypes } from '../SvgIcon.props'

export function SvgIcon({ className, name, width, height, fill }) {
  return (
    <div className={className}>
      <svg fill={fill} width={width} height={height} viewBox="0 0 1024 1024">
        <path d={getSvgIconPath(name)} />
      </svg>
    </div>
  )
}

SvgIcon.defaultProps = svgIconDefaultProps

SvgIcon.propTypes = svgIconPropTypes
