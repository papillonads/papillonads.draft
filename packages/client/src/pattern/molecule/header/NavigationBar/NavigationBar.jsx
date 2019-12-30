import React from 'react'
import cx from 'classnames'
import { navigationBar, maxWidth, maxWidthLeft, maxWidthLeftLogo, maxWidthLeftLinks } from './NavigationBar.scss'
import { Logo } from '../../../atom/header/Logo'
import { Links } from '../Links'
import { Menu } from '../Menu'
import { navigationBarDefaultProps, navigationBarPropTypes } from './NavigationBar.props'

export function NavigationBar({ className, data }) {
  return (
    <div className={cx(className, navigationBar)}>
      <div className={maxWidth}>
        <div className={maxWidthLeft}>
          <Logo className={maxWidthLeftLogo} />
          <Links className={maxWidthLeftLinks} data={data.links} />
        </div>
        <Menu data={data.dropdown} />
      </div>
    </div>
  )
}

NavigationBar.defaultProps = navigationBarDefaultProps

NavigationBar.propTypes = navigationBarPropTypes
