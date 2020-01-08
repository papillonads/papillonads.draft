import React from 'react'
import cx from 'classnames'
import { searchBar, maxWidth, maxWidthSearchFieldsetStandard, maxWidthSearchFieldsetAdvanced, maxWidthButton } from './SearchBar.scss'
import { SearchFieldsetStandard } from '../SearchFieldsetStandard'
import { SearchFieldsetAdvanced } from '../SearchFieldsetAdvanced'
import { Button } from '../../../atom/header/Button'
// import SearchFormOptions from '../SearchFormOptions'
import { searchBarDefaultProps, searchBarPropTypes } from './SearchBar.props'

export function SearchBar({ className, data }) {
  return (
    <div className={cx(className, searchBar)}>
      <div className={cx(maxWidth)}>
        <SearchFieldsetStandard className={maxWidthSearchFieldsetStandard} />
        <SearchFieldsetAdvanced data={data.searchFieldsetAdvanced} className={maxWidthSearchFieldsetAdvanced} />
        <Button className={maxWidthButton}>Zoek</Button>
        {/* <SearchFormOptions className={maxWidthSearchFormOptions} /> */}
      </div>
    </div>
  )
}

SearchBar.defaultProps = searchBarDefaultProps

SearchBar.propTypes = searchBarPropTypes
