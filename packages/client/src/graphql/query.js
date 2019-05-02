/* eslint import/prefer-default-export: 0 */
import gql from 'graphql-tag'
import { infoFragment } from '../../../server/src/datasources/page/home/info'
import { headerFragment } from '../../../server/src/datasources/page/home/header'
import { contentFragment } from '../../../server/src/datasources/page/home/content'

export const PAGES = gql`
  query GetPages {
    pages(pageSize: 10) {
      pages {
        ...info
        ...header
        ...content
    }
  }

  ${infoFragment}
  ${headerFragment}
  ${contentFragment}
`
