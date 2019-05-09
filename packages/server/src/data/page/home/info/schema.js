const { gql } = require('apollo-server')

const infoTypeDef = gql`
  type Info {
    id: String!
    name: String!
  }
`

module.exports = infoTypeDef
