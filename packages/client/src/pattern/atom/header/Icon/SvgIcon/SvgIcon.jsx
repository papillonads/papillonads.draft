import React from 'react'
import { svgIconShape } from '../SvgIcon.shape'
import cn from 'classnames'
import cs from './SvgIcon.scss'
import { getSvgIconPath } from '../../../../../utility/asset'

const SvgIcon = ({ className, name, width, height, fill }) => {
  const svgIconClassList = cn(className, cs.svgIcon)

  return (
    <div className={svgIconClassList}>
      <svg fill={fill} width={width} height={height} viewBox="0 0 1024 1024">
        <path d={getSvgIconPath(name)} />
      </svg>
    </div>
  )
}

SvgIcon.defaultProps = {
  className: '',
  fill: '',
}

SvgIcon.propTypes = svgIconShape.isRequired

export default SvgIcon
