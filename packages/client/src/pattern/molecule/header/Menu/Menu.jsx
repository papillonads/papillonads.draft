import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import ps from '@primer/css/core/index.scss'
import cs from './Menu.scss'
import Badge from '../Badge'
import { SvgIcon } from '../../../atom/header/Icon'
import Label from '../../../atom/header/Label'
// import Dropdown from '..//Dropdown'

const Menu = ({ className }) => {
  // const dropdownItems = [
  //   { text: 'Mijn Advertenties' },
  //   { text: 'Mijn Favorieten' },
  //   { text: 'Mijn Zoekopdrachten' },
  //   { text: 'Mijn Verkopers' },
  //   { text: 'Mijn Profiel' },
  //   { text: 'Mijn Ervaringen' },
  //   { text: 'Uitloggen' },
  // ]

  const menuClassList = cn(className, ps['d-flex'], ps['px-6'], ps['flex-justify-between'], cs.menu)

  return (
    <div className={menuClassList}>
      <Badge className={ps['d-flex']}>
        <SvgIcon className={ps['px-2']} name={'bubbles2'} width={15} height={15} />
        <Label className={ps['px-2']} text="Berichten" />
      </Badge>
      <Badge className={ps['d-flex']}>
        <SvgIcon className={ps['px-2']} name={'bell'} width={15} height={15} />
        <Label className={ps['px-2']} text="Meldingen" />
      </Badge>
      {/* <Dropdown items={dropdownItems} /> */}
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
