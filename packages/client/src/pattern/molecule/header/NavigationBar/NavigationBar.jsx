import React from 'react'
import cn from 'classnames'
import cs from './NavigationBar.scss'
import Logo from '../../../atom/header/Logo'
import Links from '../Links'
import Menu from '../Menu'
import { navigationBarDefaultProps, navigationBarPropTypes } from './NavigationBar.props'

const NavigationBar = ({ className, data }) => {
  const navigationBarClassList = cn(className, cs.navigationBar)

  return (
    <div className={navigationBarClassList}>
      <div className={cn(cs.navigationBarMaxWidth)}>
        <div className={cn(cs.navigationBarMaxWidthLeft)}>
          <Logo className={cn(cs.navigationBarMaxWidthLeftLogo)} />
          <Links className={cn(cs.navigationBarMaxWidthLeftLinks)} data={data.links} />
        </div>
        <Menu />
      </div>
    </div>
  )
}

NavigationBar.defaultProps = navigationBarDefaultProps

NavigationBar.propTypes = navigationBarPropTypes

export default NavigationBar
