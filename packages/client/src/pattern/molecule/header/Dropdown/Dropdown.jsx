import React from 'react'
import { shape, arrayOf, string } from 'prop-types'
import cn from 'classnames'
import ps from '@primer/css/core/index.scss'
import cs from './Dropdown.scss'
import Label from '../../../atom/header/Label'
import { SvgIcon } from '../../../atom/header/Icon'
import uuidv1 from 'uuid/v1'
import Badge from '../Badge'

const Dropdown = ({ className, items }) => {
  const dropdownClassList = cn(className, ps['dropdown'], ps['details-reset'], cs.dropdown)

  return (
    <details className={dropdownClassList}>
      <summary aria-haspopup="true" className={cs.dropdown__summary}>
        <Badge className={cn(ps['d-flex'], ps['p-2'], cs.dropdown__label)}>
          <SvgIcon className={ps['px-1']} fill={'grey'} name={'user'} width={15} height={15} />
          <Label className={ps['px-1']} text="t" />
          <SvgIcon className={ps['px-1']} fill={'grey'} name={'ctrl'} width={15} height={15} />
        </Badge>
      </summary>

      <ul className={cn(ps['dropdown-menu'], cs.dropdown__list)}>
        {items.map(item => (
          <li key={uuidv1()}>
            <Label className={cn(ps['dropdown-item'], cs.dropdown__listItem)} key={uuidv1()} text={item.text} />
          </li>
        ))}
      </ul>
    </details>
  )
}

Dropdown.defaultProps = {
  className: '',
}

Dropdown.propTypes = {
  className: string,
  items: arrayOf(
    shape({
      text: string.isRequired,
    }),
  ).isRequired,
}.isRequired

export default Dropdown
