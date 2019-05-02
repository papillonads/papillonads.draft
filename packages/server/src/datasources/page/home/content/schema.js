const { gql } = require('apollo-server')

const contentTypeDef = gql`
  type Resource {
    url: String!
    maxWidth: String!
    height: String!
  }

  type Banner {
    resources: [Resource]!
  }

  type Content {
    topBanner: Banner!
    marketingBanner: Banner!
  }
`

module.exports = contentTypeDef
