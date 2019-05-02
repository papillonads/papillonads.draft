import gql from 'graphql-tag'
import { infoFragment } from '../../../server/src/datasources/page/home/info/fragment.graphql'
import { headerFragment } from '../../../server/src/datasources/page/home/header/fragment.graphql'
import { contentFragment } from '../../../server/src/datasources/page/home/content/fragment.graphql'

export const PAGES = gql`
  query GetPages {
    pages(pageSize: 10) {
      pages {
        ...info
        ...header
        ...content
      }
    }
  }

  ${infoFragment}
  ${headerFragment}
  ${contentFragment}
`
