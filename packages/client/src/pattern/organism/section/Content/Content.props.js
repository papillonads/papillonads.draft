import { string, shape } from 'prop-types'
import { bannerPropTypes } from '../../../atom/content/Banner/Banner.props'
import { leftColumnPropTypes } from '../../../molecule/content/LeftColumn/LeftColumn.props'

export const contentDefaultProps = {
  className: '',
}

export const contentPropTypes = {
  className: string,
  data: shape({
    topBanner: bannerPropTypes.data,
    leftColumn: leftColumnPropTypes.data,
    marketingBanner: bannerPropTypes.data,
  }).isRequired,
}
