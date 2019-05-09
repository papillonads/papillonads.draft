import { string, shape } from 'prop-types'
import { linksPropTypes } from '../Links/Links.props'
import { dropdownPropTypes } from '../Dropdown/Dropdown.props'

export const navigationBarDefaultProps = {
  className: '',
}

export const navigationBarPropTypes = {
  className: string,
  data: shape({
    links: linksPropTypes.data,
    dropdown: dropdownPropTypes.data,
  }).isRequired,
}
