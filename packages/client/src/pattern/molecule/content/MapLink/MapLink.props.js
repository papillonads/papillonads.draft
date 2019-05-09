import { string, shape } from 'prop-types'

export const mapLinkDefaultProps = {
  className: '',
}

export const mapLinkPropTypes = {
  className: string,
  data: shape({}).isRequired,
}
