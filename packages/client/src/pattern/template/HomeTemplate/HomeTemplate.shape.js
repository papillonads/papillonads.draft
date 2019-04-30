import { shape } from 'prop-types'
import { headerShape } from '../../organism/section/Header/Header.shape'

export const homeTemplateShape = shape({
  header: headerShape.isRequired,
})
