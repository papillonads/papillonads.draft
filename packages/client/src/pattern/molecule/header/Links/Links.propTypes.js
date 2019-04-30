import { arrayOf } from 'prop-types'
import { linkPropTypes } from '../../../atom/header/Link/Link.propTypes'

export const linksPropTypes = arrayOf(linkPropTypes).isRequired
