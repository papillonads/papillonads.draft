import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import ps from '@primer/css/core/index.scss'
import cs from './Menu.scss'
import Badge from '../Badge'
import { SvgIcon } from '../../../atom/header/Icon'
import Label from '../../../atom/header/Label'
import Dropdown from '..//Dropdown'
import Button from '../../../atom/header/Button'

const Menu = ({ className }) => {
  const dropdownItems = [
    { text: 'Mijn Advertenties' },
    { text: 'Mijn Favorieten' },
    { text: 'Mijn Zoekopdrachten' },
    { text: 'Mijn Verkopers' },
    { text: 'Mijn Profiel' },
    { text: 'Mijn Ervaringen' },
    { text: 'Uitloggen' },
  ]

  const menuClassList = cn(className, ps['d-flex'], ps['px-6'], ps['flex-justify-between'], cs._menu)

  return (
    <div className={menuClassList}>
      <Badge className={cn(ps['d-flex'], ps['p-2'], cs._menu__labelBadge)}>
        <SvgIcon className={ps['px-1']} fill={'grey'} name={'bubbles4'} width={15} height={15} />
        <Label className={cn(ps['px-2'], cs._menu__messagesLabel)} text="Berichten" />
      </Badge>
      <Badge className={cn(ps['d-flex'], ps['p-2'], cs._menu__labelBadge)}>
        <SvgIcon className={ps['px-1']} fill={'grey'} name={'bell'} width={15} height={15} />
        <Label className={cn(ps['px-2'], cs._menu__notificationsLabel)} text="Meldingen" />
      </Badge>
      <Dropdown items={dropdownItems} />
      <Badge className={cn(ps['d-flex'], ps['p-2'], cs._menu__buttonBadge)}>
        <SvgIcon className={cn(ps['px-2'], cs._menu__placeAdSvgIcon)} fill={'white'} name={'pushpin'} width={15} height={15} />
        <Button className={cn(ps['px-2'], cs._menu__placeAdButton)}>Plaats Advertentie</Button>
      </Badge>
    </div>
  )
}

Menu.defaultProps = {
  className: '',
}

Menu.propTypes = {
  className: string,
}.isRequired

export default Menu
