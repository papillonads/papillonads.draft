const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    pages(pageSize: Int, after: String): PageConnection!
    page(id: String!): Page
  }

  type PageConnection {
    cursor: String!
    hasMore: Boolean!
    pages: [Page]!
  }

  type Link {
    text: String!
  }

  type Category {
    value: String!
    label: String!
  }

  type Distance {
    value: String!
    label: String!
  }

  type NavigationBar {
    links: [Link]!
  }

  type SearchFieldsetAdvanced {
    categories: [Category]!
    distances: [Distance]!
  }

  type SearchBar {
    searchFieldsetAdvanced: SearchFieldsetAdvanced!
  }

  type Header {
    navigationBar: NavigationBar!
    searchBar: SearchBar!
  }

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

  type Info {
    id: String!
    name: String!
  }

  type Page {
    info: Info
    header: Header
    content: Content
  }
`

module.exports = typeDefs
