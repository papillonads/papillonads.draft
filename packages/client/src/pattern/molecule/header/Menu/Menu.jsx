import React from 'react'
import cn from 'classnames'
import cs from './Menu.scss'
import Badge from '../Badge'
import { SvgIcon } from '../../../atom/header/Icon'
import Label from '../../../atom/header/Label'
import Dropdown from '..//Dropdown'
import Button from '../../../atom/header/Button'
import { menuDefaultProps, menuPropTypes } from './Menu.props'

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

  const menuClassList = cn(className, cs._menu)

  return (
    <div className={menuClassList}>
      <Badge className={cs._menuMessages}>
        <SvgIcon className={cs._menuMessagesIcon} fill="grey" name="bubbles4" width={15} height={15} />
        <Label className={cs._menuMessagesLabel} text="Berichten" />
      </Badge>
      <Badge className={cs._menuNotifications}>
        <SvgIcon className={cs._menuNotificationsIcon} fill="grey" name="bell" width={15} height={15} />
        <Label className={cs._menuNotificationsLabel} text="Meldingen" />
      </Badge>
      <Dropdown items={dropdownItems} />
      <Badge className={cs._menuPlaceAd}>
        <SvgIcon className={cs._menuPlaceAdIcon} fill="white" name="pushpin" width={15} height={15} />
        <Button className={cs._menuPlaceAdButton}>Plaats Advertentie</Button>
      </Badge>
    </div>
  )
}

Menu.defaultProps = menuDefaultProps

Menu.propTypes = menuPropTypes

export default Menu
