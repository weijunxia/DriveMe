import { Button } from '@material-ui/core'
import { useHistory } from 'react-router'
import React, { useState } from 'react'
import Search from '../pages/Search'
import './banner.css'

function Banner() {
  const history = useHistory()
  const [showSearch, setShowSearch] = useState(false)

  return (
    <div className="banner">
      <div className="bannerSearch">
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="searchButton"
          variant="outlined"
        >
          {showSearch ? 'Hide' : 'Search Dates'}
        </Button>
        {showSearch && <Search />}
      </div>
      <div className="bannerInfo">
        <h1>Find Your Drive</h1>
        <h5>Explore the world's largest car sharing marketplace</h5>
        <Button onClick={() => history.push('/search')} variant="outlined">
          Explore Luxury
        </Button>
      </div>
    </div>
  )
}

export default Banner
