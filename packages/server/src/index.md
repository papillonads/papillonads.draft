```graphql
query GetPages {
  pages(pageSize: 10) {
    pages {
      info {
        id
        name
      }
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
        leftColumn {
          navigation {
            highlightsLinks {
              heading {
                title
              }
              links {
                title
                description
              }
            }
            navigationBlock {
              heading {
                title
              }
              groups {
                name
              }
            }
          }
          usefulLinks {
            buyersLinks {
              heading {
                title
              }
              links {
                title
                description
              }
            }
            sellersLinks {
              heading {
                title
              }
              links {
                title
                description
              }
            }
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
```
