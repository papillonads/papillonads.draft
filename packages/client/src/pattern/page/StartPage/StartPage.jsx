import React from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import styles from './StartPage.scss'
import { Query } from 'react-apollo'
import { PAGES } from '../../../graphql/query'
import StartTemplate from '../../template/StartTemplate'

const StartPage = ({ className }) => {
  const startPageClassList = cn(className, styles.startPage)

  return (
    <div className={startPageClassList}>
      <Query query={PAGES}>
        {({ data }) =>
          data.pages && data.pages.pages ? <StartTemplate page={data.pages.pages.find(page => page.id === 'start')} /> : null
        }
      </Query>
    </div>
  )
}

StartPage.defaultProps = {
  className: '',
}

StartPage.propTypes = {
  className: string,
}

export default StartPage
