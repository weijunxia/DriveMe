import React, { useEffect, useState } from 'react'
import { GetCarsById, DeleteCar } from '../services/CarServices'
import { GetProfile } from '../services/UserServices'

function Profile(props) {
  const [userCars, setUserCars] = useState([])

  const onClick = async (id) => {
    const data = await DeleteCar(id)
  }

  const mapThroughProps = async () => {
    // props.userInfo.Cars.map((car)=>(
    //   <div></div>
    // ))
    if (!props.userInfo.Cars) return
    await setUserCars(props.userInfo.Cars)
  }

  useEffect(() => {
    mapThroughProps()
    console.log('it worked!')
  }, [props])

  return (
    <div className="profile">
      <div className="user_profile">
        <div className="user_profile_name">{props.userInfo.name}</div>
      </div>

      <div className="user_cars">
        <h1> YOUR garage</h1>

        {userCars && (
          <div>
            {' '}
            {userCars.map((car) => (
              <div className="car_card" key={car.id}>
                <button
                  onClick={() => {
                    onClick(car.id)
                  }}
                >
                  X
                </button>
                <h3>
                  {car.make}
                  {car.model}
                  {car.year}
                </h3>
                <img
                  src={car.car_pic}
                  alt={`${car.make}${car.model}${car.year}`}
                />
                <p>{car.description}</p>
                <h3>{car.price}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
