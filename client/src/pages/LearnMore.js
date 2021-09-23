import React, { useState } from 'react'
import './learnmore.css'
import { NavLink } from 'react-router-dom'
import SearchResults from '../components/SearchResults'
import Search from './Search'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router'
function LearnMore() {
  const history = useHistory()
  const [showSearch, setShowSearch] = useState(false)

  return (
    <div className="body">
      <div className="up"></div>
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
      <div className="container1">
        <div className="text0">
          <h2>How DriveMe works</h2>
          <div className="img">
            <img
              src="https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/09/2018-Tesla-Model-3-103-1-626x383.jpg?resize=480:*"
              alt=""
            />
          </div>
        </div>
        <div className="text1">
          <ul>
            <li>Find a car</li>
            <li>Book your trip</li>
            <li>Get your car</li>
          </ul>
        </div>
      </div>
      <Button onClick={() => history.push('/search')} variant="outlined">
        Book a car
      </Button>
    </div>
  )
}

export default LearnMore
