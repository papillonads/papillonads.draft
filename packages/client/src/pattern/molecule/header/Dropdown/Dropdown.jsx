import React from 'react'
import cx from 'classnames'
import ps from '@primer/css/core/index.scss'
import uuidv1 from 'uuid/v1'
import { dropdown, summary, badge, svgIcon1, label, svgIcon2, list, listItem } from './Dropdown.scss'
import { Label } from '../../../atom/header/Label'
import { SvgIcon } from '../../../atom/header/Icon'
import { Badge } from '../Badge'
import { dropdownDefaultProps, dropdownPropTypes } from './Dropdown.props'

export const Dropdown = ({ className, data }) => (
  <details className={cx(className, ps['details-reset'], dropdown)}>
    <summary aria-haspopup="true" className={summary}>
      <Badge className={badge}>
        <SvgIcon className={svgIcon1} fill="grey" name="user" width={20} height={20} />
        <Label className={label} text="t" />
        <SvgIcon className={svgIcon2} fill="grey" name="ctrl" width={15} height={15} />
      </Badge>
    </summary>

    <ul className={cx(ps['dropdown-menu'], list)}>
      {data.map(item => (
        <li key={uuidv1()}>
          <Label className={cx(ps['dropdown-item'], listItem)} key={uuidv1()} text={item.text} />
        </li>
      ))}
    </ul>
  </details>
)

Dropdown.defaultProps = dropdownDefaultProps

Dropdown.propTypes = dropdownPropTypes
