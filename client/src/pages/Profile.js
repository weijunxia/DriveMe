import React, { useEffect, useState } from 'react'
import { GetCarsById, DeleteCar } from '../services/CarServices'

function Profile(props) {
  const [userCars, setUserCars] = useState([])

  const handleCars = async () => {
    const data = await GetCarsById(props.user.id)
    setUserCars(data)
  }

  const onClick = async (e) => {
    const data = await DeleteCar(e)
  }

  useEffect(() => {
    handleCars()
  }, [])

  return (
    <div className="profile">
      <div className="user_profile">
        {props.user.map((info) => (
          <div className="profile_card" key={info.id}>
            <div className="profile_picture">
              <img src={info.picture} />
            </div>
            <div>{info.name}</div>
          </div>
        ))}
      </div>

      <div className="user_cars">
        <h1> Your Garage </h1>
        {userCars.map((car) => (
          <div className="car_card" key={car.id}>
            <button
              onClick={(e) => {
                onClick()
              }}
            >
              X
            </button>
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
