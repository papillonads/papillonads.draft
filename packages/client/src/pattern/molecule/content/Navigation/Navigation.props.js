import { string, shape, arrayOf } from 'prop-types'

export const navigationDefaultProps = {
  className: '',
}

export const navigationPropTypes = {
  className: string,
  data: shape({
    highlightsLinks: shape({
      heading: shape({
        title: string,
      }),
      links: arrayOf(
        shape({
          title: string,
          description: string,
        }),
      ),
    }),
    navigationBlock: shape({
      heading: shape({
        title: string,
      }),
      groups: arrayOf(
        shape({
          name: string,
        }),
      ),
    }),
  }).isRequired,
}
