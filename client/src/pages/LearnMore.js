import React from 'react'
import './learnmore.css'
// import Search from './Search'
// import SearchResults from '../components/SearchResults'

function LearnMore() {
  return (
    <div className="body">
      <div className="up"></div>
      {/* <Search /> */}
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
      {/* <SearchResults /> */}
    </div>
  )
}

export default LearnMore
