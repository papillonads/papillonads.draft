import { shape } from 'prop-types'
import { headerPropTypes } from '../../organism/section/Header/Header.propTypes'

export const homeTemplatePropTypes = shape({
  header: headerPropTypes,
}).isRequired
