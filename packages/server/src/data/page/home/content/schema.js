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

  type Heading {
    title: String!
  }

  type Group {
    name: String!
  }

  type NavigationBlock {
    heading: Heading!
    groups: [Group]!
  }

  type HandyLink {
    title: String!
    description: String!
  }

  type HandyLinks {
    heading: Heading!
    links: [HandyLink]!
  }

  type Navigation {
    highlightsLinks: HandyLinks!
    navigationBlock: NavigationBlock!
  }

  type UsefulLinks {
    buyersLinks: HandyLinks!
    sellersLinks: HandyLinks!
  }

  type LeftColumn {
    navigation: Navigation!
    usefulLinks: UsefulLinks!
  }

  type Content {
    topBanner: Banner!
    leftColumn: LeftColumn!
    marketingBanner: Banner!
  }
`

module.exports = contentTypeDef
