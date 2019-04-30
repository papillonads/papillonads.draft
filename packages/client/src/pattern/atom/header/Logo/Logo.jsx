import React from 'react'
import cn from 'classnames'
import SvgIconGroup from '../Icon/SvgIconGroup'
import { logoDefaultProps, logoPropTypes } from './Logo.props'

const Logo = ({ className }) => {
  const logoClassList = cn(className)

  return (
    <div className={logoClassList}>
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

export default Logo
