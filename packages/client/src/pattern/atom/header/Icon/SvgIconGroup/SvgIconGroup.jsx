import React from 'react'
import cn from 'classnames'
import { getSvgIconGroupPaths, getFill } from '../../../../../utility/asset'
import uuidv1 from 'uuid/v1'
import { svgIconGroupDefaultProps, svgIconGroupPropTypes } from '../SvgIcon.props'

const SvgIconGroup = ({ className, name, width, height, viewBox, fill, pathProps }) => {
  const svgIconGroupClassList = cn(className)
  const paths = getSvgIconGroupPaths(name)

  if (!(paths && paths.length > 0)) {
    return null
  }

  return (
    <svg className={svgIconGroupClassList} width={width} height={height} viewBox={viewBox}>
      <g fill={fill} fillRule="evenodd">
        {paths.map((path, index) => {
          return <path key={uuidv1()} d={paths[index]} fill={getFill(pathProps[index])} />
        })}
      </g>
    </svg>
  )
}

SvgIconGroup.defaultProps = svgIconGroupDefaultProps

SvgIconGroup.propTypes = svgIconGroupPropTypes

export default SvgIconGroup
