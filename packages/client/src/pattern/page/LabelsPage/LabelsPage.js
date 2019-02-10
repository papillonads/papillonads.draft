import React from 'react'
import { Query } from 'react-apollo'
import { PAGES } from '../../../graphql/query'
import LabelsTemplate from '../../template/LabelsTemplate'

const LabelsPage = () => {
  return (
    <Query query={PAGES}>
      {({ data }) =>
        data.pages && data.pages.pages ? <LabelsTemplate page={data.pages.pages.find(page => page.id === 'labels')} /> : null
      }
    </Query>
  )
}

export default LabelsPage
