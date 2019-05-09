const { gql } = require('apollo-server')

const headerTypeDef = gql`
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
    dropdown: [Link]!
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
`

module.exports = headerTypeDef
