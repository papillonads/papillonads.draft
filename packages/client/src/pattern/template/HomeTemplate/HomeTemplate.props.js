import { string, shape } from 'prop-types'
import { headerPropTypes } from '../../organism/section/Header/Header.props'

export const homeTemplateDefaultProps = {
  className: '',
}

export const homeTemplatePropTypes = {
  className: string,
  data: shape({
    header: headerPropTypes.data,
  }).isRequired,
}
