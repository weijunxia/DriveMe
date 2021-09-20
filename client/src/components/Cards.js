import React from 'react'

function Cards({ car_pic, make, model, year, description, price }) {
  return (
    <div className="cards">
      <div>
        <img src={car_pic} alt="" />
        <div className="cards_info">
          <h2>{make}</h2>
          <h2>{model}</h2>
          <h2>{year}</h2>
          <h4>{description}</h4>
          <h3>{price}</h3>
        </div>
      </div>
    </div>
  )
}

export default Cards
