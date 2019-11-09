const { gql } = require('apollo-server')

module.exports.queryTypeDef = gql`
  type Query {
    pages(pageSize: Int, after: String): PageConnection!
    page(id: String!): Page
  }
`

module.exports.pageTypeDef = gql`
  type Page {
    info: Info
    header: Header
    content: Content
  }
`

module.exports.pageConnectionTypeDef = gql`
  type PageConnection {
    cursor: String!
    hasMore: Boolean!
    list: [Page]!
  }
`
