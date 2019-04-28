import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import cs from './NavigationBar.scss'
import Logo from '../../../atom/header/Logo'
import Links from '../Links'
import Menu from '../Menu'

const NavigationBar = ({ className }) => {
  const linkItems = [{ text: 'Help en info' }, { text: 'Voorwaarden' }, { text: 'Veilig handelen' }]

  const navigationBarClassList = cn(className, cs.navigationBar)

  return (
    <div className={navigationBarClassList}>
      <div className={cn(cs.navigationBar__left)}>
        <Logo className={cn(cs.navigationBar__leftLogo)} />
        <Links className={cn(cs.navigationBar__leftLinks)} items={linkItems} />
      </div>
      <Menu className={cn(cs.navigationBar__rightMenu)} />
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
