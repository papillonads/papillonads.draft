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

  type NavigationBar {
    links: [Link]!
  }

  type Header {
    navigationBar: NavigationBar!
  }

  type Page {
    id: String!
    name: String!
    header: Header
  }
`

module.exports = typeDefs
