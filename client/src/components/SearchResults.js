import React, { useState, useEffect } from 'react'
import './searchResults.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import StarIcon from '@material-ui/icons/Star'
import { GetCars } from '../services/CarServices'

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
  const [cars, setCars] = useState([])

  const getCars = async () => {
    const data = await GetCars()
    setCars(data)
  }

  useEffect(() => {
    getCars()
  }, [])

  return (
    <div className="searchResults">
      <div className="searchResultCard">
        {cars.map((car) => (
          <div className="searchResultCars" key={car.id}>
            <FavoriteBorderIcon className="searchResults_heart" />
            <div className="searchResults_info">
              <div className="searchResults_topInfo">
                <h3>{car.make}</h3>
                <h3>{car.model}</h3>
                <h3>{car.year}</h3>
                <p>{car.description}</p>
              </div>
              <div className="searchResults_bottomInfo">
                <div className="searchResults_stars">
                  <StarIcon className="searchResults_star" />
                  <p>
                    <strong>{star}</strong>
                  </p>
                </div>
                <div className="searchResults_price">
                  <h2>{car.price}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src={car_pic} alt="" />
    </div>
  )
}

export default SearchResults
