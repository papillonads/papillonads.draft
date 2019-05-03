import { string, shape } from 'prop-types'

export const navigationDefaultProps = {
  className: '',
}

export const navigationPropTypes = {
  className: string,
  data: shape({}).isRequired,
}
