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

  return (
    <div className={cn(className, cs._menu)}>
      <Badge className={cs.messages}>
        <SvgIcon className={cs.messagesIcon} fill="grey" name="bubbles4" width={15} height={15} />
        <Label className={cs.messagesLabel} text="Berichten" />
      </Badge>
      <Badge className={cs.notifications}>
        <SvgIcon className={cs.notificationsIcon} fill="grey" name="bell" width={15} height={15} />
        <Label className={cs.notificationsLabel} text="Meldingen" />
      </Badge>
      <Dropdown items={dropdownItems} />
      <Badge className={cs.placeAd}>
        <SvgIcon className={cs.placeAdIcon} fill="white" name="pushpin" width={15} height={15} />
        <Button className={cs.placeAdButton}>Plaats Advertentie</Button>
      </Badge>
    </div>
  )
}

Menu.defaultProps = menuDefaultProps

Menu.propTypes = menuPropTypes

export default Menu
