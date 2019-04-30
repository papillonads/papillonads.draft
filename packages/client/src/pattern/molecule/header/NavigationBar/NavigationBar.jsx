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
      <div className={cn(cs.navigationBar__maxWidth)}>
        <div className={cn(cs.navigationBar__maxWidthLeft)}>
          <Logo className={cn(cs.navigationBar__maxWidthLeftLogo)} />
          <Links className={cn(cs.navigationBar__maxWidthLeftLinks)} data={data.links} />
        </div>
        <Menu />
      </div>
    </div>
  )
}

NavigationBar.defaultProps = navigationBarDefaultProps

NavigationBar.propTypes = navigationBarPropTypes

export default NavigationBar
