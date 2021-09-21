import React, { useState, useEffect } from 'react'
import './searchResults.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import StarIcon from '@material-ui/icons/Star'
import { GetCars } from '../services/CarServices'

function SearchResults() {
  const [cars, setCars] = useState([])

  const getCars = async () => {
    const data = await GetCars()
    setCars(data)
  }

  useEffect(() => {
    getCars()
  }, [])

  return (
    <div className="search_results">
      <div className="search_results_card">
        {cars.map((car) => (
          <div className="search_result_cars" key={car.id}>
            <img
              src={car.car_pic}
              alt={`${car.make} ${car.model} ${car.year}`}
            />
            <FavoriteBorderIcon className="search_result_heart" />

            <div className="search_result_info">
              <div className="search_result_top_info">
                <h3>{car.make}</h3>
                <h3>{car.model}</h3>
                <h3>{car.year}</h3>
                <p>{car.description}</p>
              </div>

              <div className="search_result_bottom_info">
                <div className="search_result_stars">
                  <StarIcon className="search_result_star" />
                  <p>
                    <strong>Stars</strong>
                  </p>
                </div>

                <div className="search_result_price">
                  <h2>${car.price}/day</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchResults
