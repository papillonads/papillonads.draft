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

  type Page {
    id: String!
    name: String!
    header: Header
  }
`

module.exports = typeDefs
