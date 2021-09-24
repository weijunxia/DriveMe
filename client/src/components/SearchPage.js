import SearchResults from '../components/SearchResults'
import Filter from '@material-ui/icons/Filter'
import { withRouter } from 'react-router-dom'
import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import './searchpage.css'

function SearchPage(props) {
  const [input, setInput] = useState(null)
  const [searchCars, setSearchCars] = useState(null)

  return (
    <div className="searchPage">
      <div className="search-bar">
        <form className="search-form"></form>
      </div>
      <div className="searchPageInfo">
        <Button variant="outline">Sort By</Button>
        <Button variant="outline">Price</Button>
        <Button variant="outline">
          <Filter />
          More filters
        </Button>
        <SearchResults {...props} />
      </div>
    </div>
  )
}

export default withRouter(SearchPage)
