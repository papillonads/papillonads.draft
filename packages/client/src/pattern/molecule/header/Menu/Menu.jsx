import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import styles from './Menu.scss'
import Badge from '../Badge'
import { SvgIcon } from '../../../atom/header/Icon'
import Label from '../../../atom/header/Label'
import Dropdown from '..//Dropdown'

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

  const menuClassList = cn(className, styles.menu)

  return (
    <div className={menuClassList}>
      <Badge>
        <SvgIcon name={'bubbles2'} width={15} height={15} />
        <Label text="Berichten" />
      </Badge>
      <Badge>
        <SvgIcon name={'bell'} width={15} height={15} />
        <Label text="Meldingen" />
      </Badge>
      <Dropdown items={dropdownItems} />
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
