```graphql
query GetPages {
  pages(pageSize: 10) {
    list {
      info {
        id
        name
      }
    }
  }
}
```

```graphql
query GetPages {
  pages(pageSize: 10) {
    list {
      info {
        id
        name
      }
      header {
        navigationBar {
          links {
            text
          }
          dropdown {
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
                icon
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
                icon
              }
            }
            sellersLinks {
              heading {
                title
              }
              links {
                title
                description
                icon
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
