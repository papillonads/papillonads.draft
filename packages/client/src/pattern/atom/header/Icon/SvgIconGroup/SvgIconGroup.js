import React from 'react'
import { svgIconGroupShape } from '../SvgIcon.shape'
import { getSvgIconGroupPaths, getFill } from '../../../../../utility/asset'
import uuidv1 from 'uuid/v1'

const SvgIconGroup = ({ className, name, width, height, viewBox, fill, pathProps }) => {
  const paths = getSvgIconGroupPaths(name)

  if (!(paths && paths.length > 0)) {
    return null
  }

  return (
    <svg className={className} width={width} height={height} viewBox={viewBox}>
      <g fill={fill} fillRule="evenodd">
        {paths.map((path, index) => {
          return <path key={uuidv1()} d={paths[index]} fill={getFill(pathProps[index])} />
        })}
      </g>
    </svg>
  )
}

SvgIconGroup.defaultProps = {
  className: '',
}

SvgIconGroup.propTypes = svgIconGroupShape.isRequired

export default SvgIconGroup
