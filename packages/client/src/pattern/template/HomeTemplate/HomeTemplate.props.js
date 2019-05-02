import { string, shape } from 'prop-types'
import { headerPropTypes } from '../../organism/section/Header/Header.props'
import { contentPropTypes } from '../../organism/section/Content/Content.props'

export const homeTemplateDefaultProps = {
  className: '',
}

export const homeTemplatePropTypes = {
  className: string,
  data: shape({
    header: headerPropTypes.data,
    content: contentPropTypes.data,
  }).isRequired,
}
