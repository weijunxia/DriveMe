import React, { useEffect, useState } from 'react'
import { GetCarById } from '../services/CarServices'

function Profile(props) {
  const [userCars, setUserCars] = useState([])

  const handleCars = async () => {
    const data = await GetCarById(props.user.id)
    setUserCars(data)
  }

  useEffect(() => {
    handleCars()
  }, [])
  // test
  return (
    <div className="profile">
      <div className="userCars">
        {userCars.map((car) => (
          <div className="carCard" key={car.id}>
            <h3>
              {car.make}
              {car.model}
              {car.year}
            </h3>
            <img src={car.car_pic} alt={`${car.make}${car.model}${car.year}`} />
            <p>{car.description}</p>
            <h3>{car.price}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile
