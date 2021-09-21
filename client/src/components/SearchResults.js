import React from 'react'
import './searchResults.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import StarIcon from '@material-ui/icons/Star'
function SearchResults({
  car_pic,
  make,
  model,
  year,
  description,
  star,
  price,
  total
}) {
  return (
    <div className="searchResults">
      <img src={car_pic} alt="" />
      <FavoriteBorderIcon className="searchResults_heart" />
      <div className="searchResults_info">
        <div className="searchResults_topInfo">
          <h3>{make}</h3>
          <h3>{model}</h3>
          <h3>{year}</h3>
          <p>{description}</p>
        </div>
        <div className="searchResults_bottomInfo">
          <div className="searchResults_stars">
            <StarIcon className="searchResults_star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResults_price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResults
