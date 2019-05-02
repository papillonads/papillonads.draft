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
