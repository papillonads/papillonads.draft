import React from 'react'
import { svgIconGroupShape } from '../SvgIcon.shape'
import { getSvgIconGroupPaths } from '../../../../../utility/asset'
import uuidv1 from 'uuid/v1'

const SvgIconGroup = ({ className, name, width, height, viewBox, pathProps }) => {
  const paths = getSvgIconGroupPaths(name)

  if (!(paths && paths.length > 0)) {
    return null
  }

  return (
    <svg className={className} width={width} height={height} viewBox={viewBox}>
      <g fill="none" fillRule="evenodd">
        {paths.map((path, index) => {
          return <path key={uuidv1()} d={paths[index]} fill={pathProps[index].fill} />
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
