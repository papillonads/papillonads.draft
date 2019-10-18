/* eslint-disable no-underscore-dangle */
import React from 'react'
import cx from 'classnames'
import {
  _menu,
  messages,
  messagesIcon,
  messagesLabel,
  notifications,
  notificationsIcon,
  notificationsLabel,
  placeAd,
  placeAdIcon,
  placeAdButton,
} from './Menu.scss'
import { Badge } from '../Badge'
import { SvgIcon } from '../../../atom/header/Icon'
import { Label } from '../../../atom/header/Label'
import { Dropdown } from '../Dropdown'
import { Button } from '../../../atom/header/Button'
import { menuDefaultProps, menuPropTypes } from './Menu.props'

export const Menu = ({ className, data }) => (
  <div className={cx(className, _menu)}>
    <Badge className={messages}>
      <SvgIcon className={messagesIcon} fill="grey" name="bubbles4" width={15} height={15} />
      <Label className={messagesLabel} text="Berichten" />
    </Badge>
    <Badge className={notifications}>
      <SvgIcon className={notificationsIcon} fill="grey" name="bell" width={15} height={15} />
      <Label className={notificationsLabel} text="Meldingen" />
    </Badge>
    <Dropdown data={data} />
    <Badge className={placeAd}>
      <SvgIcon className={placeAdIcon} fill="white" name="pushpin" width={15} height={15} />
      <Button className={placeAdButton}>Plaats Advertentie</Button>
    </Badge>
  </div>
)

Menu.defaultProps = menuDefaultProps

Menu.propTypes = menuPropTypes
/* eslint-enable no-underscore-dangle */
