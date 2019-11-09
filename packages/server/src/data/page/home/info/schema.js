const { gql } = require('apollo-server')

module.exports.infoTypeDef = gql`
  type Info {
    id: String!
    name: String!
  }
`
