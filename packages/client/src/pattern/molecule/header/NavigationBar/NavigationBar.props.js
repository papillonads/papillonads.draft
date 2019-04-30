import { string, shape } from 'prop-types'
import { linksPropTypes } from '../Links/Links.props'

export const navigationBarDefaultProps = {
  className: '',
}

export const navigationBarPropTypes = {
  className: string,
  data: shape({
    links: linksPropTypes.data,
  }).isRequired,
}
