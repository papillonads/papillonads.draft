import { string, arrayOf } from 'prop-types'
import { linkPropTypes } from '../../../atom/header/Link/Link.props'

export const menuDefaultProps = {
  className: '',
}

export const menuPropTypes = {
  className: string,
  data: arrayOf(linkPropTypes.item).isRequired,
}
