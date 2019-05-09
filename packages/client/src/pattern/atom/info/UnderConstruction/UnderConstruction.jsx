import React from 'react'
import { underConstructionDefaultProps, underConstructionPropTypes } from './UnderConstruction.props'

const UnderConstruction = ({ className }) => (
  <div className={className}>
    Under construction{' '}
    <span role="img" aria-label="emoji">
      🙂
    </span>
  </div>
)

UnderConstruction.defaultProps = underConstructionDefaultProps

UnderConstruction.propTypes = underConstructionPropTypes

export default UnderConstruction
