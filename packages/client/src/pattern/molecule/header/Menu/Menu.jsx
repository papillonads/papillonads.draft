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

  const menuClassList = cn(className, cs._)

  return (
    <div className={menuClassList}>
      <Badge className={cs._Messages}>
        <SvgIcon className={cs._MessagesIcon} fill="grey" name="bubbles4" width={15} height={15} />
        <Label className={cs._MessagesLabel} text="Berichten" />
      </Badge>
      <Badge className={cs._Notifications}>
        <SvgIcon className={cs._NotificationsIcon} fill="grey" name="bell" width={15} height={15} />
        <Label className={cs._NotificationsLabel} text="Meldingen" />
      </Badge>
      <Dropdown items={dropdownItems} />
      <Badge className={cs._PlaceAd}>
        <SvgIcon className={cs._PlaceAdIcon} fill="white" name="pushpin" width={15} height={15} />
        <Button className={cs._PlaceAdButton}>Plaats Advertentie</Button>
      </Badge>
    </div>
  )
}

Menu.defaultProps = menuDefaultProps

Menu.propTypes = menuPropTypes

export default Menu
