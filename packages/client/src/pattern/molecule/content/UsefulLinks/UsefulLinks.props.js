import { string, shape } from 'prop-types'

export const usefulLinksDefaultProps = {
  className: '',
}

export const usefulLinksPropTypes = {
  className: string,
  data: shape({}).isRequired,
}
