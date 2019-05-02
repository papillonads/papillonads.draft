/* eslint import/prefer-default-export: 0 */
import gql from 'graphql-tag'

export const PAGES = gql`
  query GetPages {
    pages(pageSize: 10) {
      pages {
        id
        name
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
        content {
          topBanner {
            resources {
              url
              maxWidth
              height
            }
          }
          marketingBanner {
            resources {
              url
              maxWidth
              height
            }
          }
        }
      }
    }
  }
`
