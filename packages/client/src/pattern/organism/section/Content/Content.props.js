import { string, shape } from 'prop-types'
import { bannerPropTypes } from '../../../atom/content/Banner/Banner.props'

export const contentDefaultProps = {
  className: '',
}

export const contentPropTypes = {
  className: string,
  data: shape({
    topBanner: bannerPropTypes.data,
    marketingBanner: bannerPropTypes.data,
  }).isRequired,
}
