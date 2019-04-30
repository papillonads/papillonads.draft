import { string, shape } from 'prop-types'
import { headerPropTypes } from '../../organism/section/Header/Header.propTypes'

export const homeTemplateDefaultProps = {
  className: '',
}

export const homeTemplatePropTypes = {
  className: string,
  data: shape({
    header: headerPropTypes,
  }).isRequired,
}
