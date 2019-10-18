import { string, shape, arrayOf } from 'prop-types'

export const usefulLinksDefaultProps = {
  className: '',
}

export const usefulLinksPropTypes = {
  className: string,
  data: shape({
    buyersLinks: shape({
      heading: shape({
        title: string,
      }),
      links: arrayOf(
        shape({
          title: string,
          description: string,
          icon: string,
        }),
      ),
    }),
    sellersLinks: shape({
      heading: shape({
        title: string,
      }),
      links: arrayOf(
        shape({
          title: string,
          description: string,
          icon: string,
        }),
      ),
    }),
  }).isRequired,
}
