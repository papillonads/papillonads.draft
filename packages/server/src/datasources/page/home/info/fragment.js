import gql from 'graphql-tag'

export const infoFragment = gql`
  fragment info on Page {
    info {
      id
      name
    }
  }
`
