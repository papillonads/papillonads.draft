import { string, node } from 'prop-types'

export const badgeDefaultProps = {
  className: '',
}

export const badgePropTypes = {
  className: string,
  children: node.isRequired,
}
