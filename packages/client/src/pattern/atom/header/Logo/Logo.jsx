import React from 'react'
import { SvgIconGroup } from '../Icon'
import { logoDefaultProps, logoPropTypes } from './Logo.props'

export function Logo({ className }) {
  return (
    <div className={className}>
      <SvgIconGroup
        name="logo"
        width={143}
        height={26}
        viewBox="0 0 528 96"
        pathProps={[{ fill: '#2D3C4D' }, { fill: '#EEA566' }, { fill: '#2D3C4D' }]}
      />
    </div>
  )
}

Logo.defaultProps = logoDefaultProps

Logo.propTypes = logoPropTypes
