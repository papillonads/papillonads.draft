import { string, arrayOf } from 'prop-types'
import { linkPropTypes } from '../../../atom/header/Link/Link.props'

export const dropdownDefaultProps = {
  className: '',
}

export const dropdownPropTypes = {
  className: string,
  data: arrayOf(linkPropTypes.item).isRequired,
}
