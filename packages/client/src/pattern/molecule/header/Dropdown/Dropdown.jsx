import React from 'react'
import cn from 'classnames'
import ps from '@primer/css/core/index.scss'
import cs from './Dropdown.scss'
import Label from '../../../atom/header/Label'
import { SvgIcon } from '../../../atom/header/Icon'
import uuidv1 from 'uuid/v1'
import Badge from '../Badge'
import { dropdownDefaultProps, dropdownPropTypes } from './Dropdown.props'

const Dropdown = ({ className, items }) => {
  const dropdownClassList = cn(className, ps['details-reset'], cs.dropdown)

  return (
    <details className={dropdownClassList}>
      <summary aria-haspopup="true" className={cs.dropdownSummary}>
        <Badge className={cs.dropdownBadge}>
          <SvgIcon className={cs.dropdownSvgIcon1} fill="grey" name="user" width={20} height={20} />
          <Label className={cs.dropdownLabel} text="t" />
          <SvgIcon className={cs.dropdownSvgIcon2} fill="grey" name="ctrl" width={15} height={15} />
        </Badge>
      </summary>

      <ul className={cn(ps['dropdown-menu'], cs.dropdownList)}>
        {items.map(item => (
          <li key={uuidv1()}>
            <Label className={cn(ps['dropdown-item'], cs.dropdownListItem)} key={uuidv1()} text={item.text} />
          </li>
        ))}
      </ul>
    </details>
  )
}

Dropdown.defaultProps = dropdownDefaultProps

Dropdown.propTypes = dropdownPropTypes

export default Dropdown
