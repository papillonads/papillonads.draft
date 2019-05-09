const { gql } = require('apollo-server')

const queryTypeDef = gql`
  type Query {
    pages(pageSize: Int, after: String): PageConnection!
    page(id: String!): Page
  }
`

const pageTypeDef = gql`
  type Page {
    info: Info
    header: Header
    content: Content
  }
`

const pageConnectionTypeDef = gql`
  type PageConnection {
    cursor: String!
    hasMore: Boolean!
    pages: [Page]!
  }
`

module.exports = {
  queryTypeDef,
  pageTypeDef,
  pageConnectionTypeDef,
}
