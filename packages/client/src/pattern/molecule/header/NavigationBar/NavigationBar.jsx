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

  const navigationBarClassList = cn(className, ps['d-flex'], ps['flex-justify-between'], cs.navigationBar)

  return (
    <div className={navigationBarClassList}>
      <div className={cn(ps['d-flex'], ps['p-3'])}>
        <Logo className={cn(ps['pl-3'], ps['pr-6'], cs.logo)} />
        <Links className={cn(ps['d-flex'], cs.links)} items={linkItems} />
      </div>
      <div className={ps['p-3']}>
        <Menu className={cs.menu} />
      </div>
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
