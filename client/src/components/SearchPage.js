import React from 'react'
import { Button } from '@material-ui/core'
import Filter from '@material-ui/icons/Filter'
import './SearchPage.css'
import SearchResults from './SearchResult'

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPageInfo">
        <Button variant="outline">Sort By</Button>
        <Button variant="outline">Price</Button>
        <Button variant="outline">
          <Filter />
          More filters
        </Button>
        <SearchResults />
      </div>
    </div>
  )
}

export default SearchPage
