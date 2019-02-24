import React from 'react'
import { svgIconShape } from '../SvgIcon.shape'
import cn from 'classnames'
import styles from './Logo.scss'
import { getSvgIconPath } from '../../../../../utility/asset'

const SvgIcon = ({ className, name, width, height, fill }) => {
  const svgIconClassList = cn(className, styles.svgIcon)

  return (
    <svg fill={fill} width={width} height={height} className={svgIconClassList} viewBox="0 0 1024 1024">
      <path d={getSvgIconPath(name)} />
    </svg>
  )
}

SvgIcon.defaultProps = {
  className: '',
  fill: '',
}

SvgIcon.propTypes = svgIconShape.isRequired

export default SvgIcon
