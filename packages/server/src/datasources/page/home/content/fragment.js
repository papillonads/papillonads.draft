const gql = require('graphql-tag')

const contentFragment = gql`
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

module.exports = contentFragment
