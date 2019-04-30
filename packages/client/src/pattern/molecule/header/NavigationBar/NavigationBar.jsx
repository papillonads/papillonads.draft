import React from 'react'
import { string, object } from 'prop-types'
import cn from 'classnames'
import cs from './NavigationBar.scss'
import Logo from '../../../atom/header/Logo'
import Links from '../Links'
import Menu from '../Menu'

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

NavigationBar.defaultProps = {
  className: '',
}

NavigationBar.propTypes = {
  className: string,
  data: object.isRequired,
}.isRequired

export default NavigationBar
