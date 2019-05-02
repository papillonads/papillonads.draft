const gql = require('graphql-tag')

const infoFragment = gql`
  fragment info on Page {
    id
    name
  }
`

module.exports = infoFragment
