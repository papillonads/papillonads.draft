import gql from 'graphql-tag'

export const headerFragment = gql`
  fragment header on Page {
    header {
      navigationBar {
        links {
          text
        }
      }
      searchBar {
        searchFieldsetAdvanced {
          categories {
            value
            label
          }
          distances {
            value
            label
          }
        }
      }
    }
  }
`
