import { string, shape, arrayOf } from 'prop-types'

export const bannerDefaultProps = {
  className: '',
}

export const bannerPropTypes = {
  className: string,
  data: shape({
    resources: arrayOf(
      shape({
        url: string,
        maxWidth: string,
        height: string,
      }),
    ),
  }).isRequired,
}
