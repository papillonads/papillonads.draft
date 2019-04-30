import { string, shape } from 'prop-types'

export const linkDefaultProps = {
  className: '',
}

export const linkPropTypes = {
  className: string,
  item: shape({
    text: string.isRequired,
  }).isRequired,
}
