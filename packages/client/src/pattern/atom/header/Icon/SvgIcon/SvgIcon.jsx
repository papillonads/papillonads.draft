import React from 'react'
import cn from 'classnames'
import { getSvgIconPath } from '../../../../../utility/asset'
import { svgIconDefaultProps, svgIconPropTypes } from '../SvgIcon.props'

const SvgIcon = ({ className, name, width, height, fill }) => {
  const svgIconClassList = cn(className)

  return (
    <div className={svgIconClassList}>
      <svg fill={fill} width={width} height={height} viewBox="0 0 1024 1024">
        <path d={getSvgIconPath(name)} />
      </svg>
    </div>
  )
}

SvgIcon.defaultProps = svgIconDefaultProps

SvgIcon.propTypes = svgIconPropTypes

export default SvgIcon
