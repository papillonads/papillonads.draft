import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import ps from '@primer/css/core/index.scss'
import cs from './NavigationBar.scss'
import Logo from '../../../atom/header/Logo'
import Links from '../Links'
import Menu from '../Menu'

const NavigationBar = ({ className }) => {
  const linkItems = [{ text: 'Help en info' }, { text: 'Voorwaarden' }, { text: 'Veilig handelen' }]

  const navigationBarClassList = cn(className, ps['d-flex'], ps['flex-justify-between'], ps['p-1'], cs.navigationBar)

  return (
    <div className={navigationBarClassList}>
      <div className={cn(ps['d-flex'])}>
        <Logo className={cn(ps['pr-4'], cs.navigationBar__logo)} />
        <Links className={cn(ps['pt-1'], cs.navigationBar__links)} items={linkItems} />
      </div>
      <Menu className={cn(ps['pt-1'], cs.navigationBar__menu)} />
    </div>
  )
}

NavigationBar.defaultProps = {
  className: '',
}

NavigationBar.propTypes = {
  className: string,
}.isRequired

export default NavigationBar
