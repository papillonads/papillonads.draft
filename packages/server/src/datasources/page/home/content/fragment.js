import gql from 'graphql-tag'

export const contentFragment = gql`
  fragment content on Page {
    content {
      topBanner {
        resources {
          url
          maxWidth
          height
        }
      }
      marketingBanner {
        resources {
          url
          maxWidth
          height
        }
      }
    }
  }
`
