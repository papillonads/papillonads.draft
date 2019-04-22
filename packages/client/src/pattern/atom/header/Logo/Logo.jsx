import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import ps from '@primer/css/core/index.scss'
import cs from './Logo.scss'
import SvgIconGroup from '../Icon/SvgIconGroup'

const Logo = ({ className }) => {
  const logoClassList = cn(className, ps['p-2'], cs.logo)

  return (
    <div className={logoClassList}>
      <SvgIconGroup
        name="logo"
        width="143"
        height="26"
        viewBox="0 0 528 96"
        pathProps={[{ fill: '#2D3C4D' }, { fill: '#EEA566' }, { fill: '#2D3C4D' }]}
      />
    </div>
  )
}

Logo.defaultProps = {
  className: '',
}

Logo.propTypes = {
  className: string,
}.isRequired

export default Logo
