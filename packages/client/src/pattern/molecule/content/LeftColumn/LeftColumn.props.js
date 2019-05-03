import { string, shape } from 'prop-types'
import { navigationPropTypes } from '../../../molecule/content/Navigation/Navigation.props'
import { mapLinkPropTypes } from '../../../molecule/content/MapLink/MapLink.props'
import { usefulLinksPropTypes } from '../../../molecule/content/UsefulLinks/UsefulLinks.props'

export const leftColumnDefaultProps = {
  className: '',
}

export const leftColumnPropTypes = {
  className: string,
  data: shape({
    navigation: navigationPropTypes.data,
    mapLink: mapLinkPropTypes.data,
    usefulLinks: usefulLinksPropTypes.data,
  }).isRequired,
}
