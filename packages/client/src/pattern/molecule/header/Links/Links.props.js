import { string, arrayOf } from 'prop-types'
import { linkPropTypes } from '../../../atom/header/Link/Link.propTypes'

export const linksDefaultProps = {
  className: '',
}

export const linksPropTypes = {
  className: string,
  data: arrayOf(linkPropTypes).isRequired,
}
