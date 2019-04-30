import { string, node } from 'prop-types'

export const buttonDefaultProps = {
  className: '',
}

export const buttonPropTypes = {
  className: string,
  children: node.isRequired,
}
