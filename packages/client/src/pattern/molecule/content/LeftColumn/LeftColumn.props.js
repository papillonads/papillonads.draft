import { string, shape } from 'prop-types'
import { navigationPropTypes } from '../Navigation/Navigation.props'
import { usefulLinksPropTypes } from '../UsefulLinks/UsefulLinks.props'

export const leftColumnDefaultProps = {
  className: '',
}

export const leftColumnPropTypes = {
  className: string,
  data: shape({
    navigation: navigationPropTypes.data,
    usefulLinks: usefulLinksPropTypes.data,
  }).isRequired,
}
