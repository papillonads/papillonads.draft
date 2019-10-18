import React from 'react'
import cn from 'classnames'
import ps from '@primer/css/core/index.scss'
import uuidv1 from 'uuid/v1'
import cs from './Dropdown.scss'
import { Label } from '../../../atom/header/Label'
import { SvgIcon } from '../../../atom/header/Icon'
import { Badge } from '../Badge'
import { dropdownDefaultProps, dropdownPropTypes } from './Dropdown.props'

export const Dropdown = ({ className, data }) => (
  <details className={cn(className, ps['details-reset'], cs.dropdown)}>
    <summary aria-haspopup="true" className={cs.summary}>
      <Badge className={cs.badge}>
        <SvgIcon className={cs.svgIcon1} fill="grey" name="user" width={20} height={20} />
        <Label className={cs.label} text="t" />
        <SvgIcon className={cs.svgIcon2} fill="grey" name="ctrl" width={15} height={15} />
      </Badge>
    </summary>

    <ul className={cn(ps['dropdown-menu'], cs.list)}>
      {data.map(item => (
        <li key={uuidv1()}>
          <Label className={cn(ps['dropdown-item'], cs.listItem)} key={uuidv1()} text={item.text} />
        </li>
      ))}
    </ul>
  </details>
)

Dropdown.defaultProps = dropdownDefaultProps

Dropdown.propTypes = dropdownPropTypes
