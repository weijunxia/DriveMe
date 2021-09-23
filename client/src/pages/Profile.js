import React, { useEffect, useState } from 'react'
import { GetCarsById, DeleteCar } from '../services/CarServices'
import { GetProfile } from '../services/UserServices'
import { Avatar } from '@material-ui/core'
import Banner from '../images/model-s-main-hero-desktop.png'
import './profile.css'
import { withRouter } from 'react-router-dom'

function Profile(props) {
  const [userCars, setUserCars] = useState([])

  const mapThroughProps = async () => {
    if (!props.userInfo.Cars) return
    setUserCars(props.userInfo.Cars)
  }
  const onClick = async (id) => {
    const data = await DeleteCar(id)
    props.getUserProfile(props.userInfo.id)
  }

  useEffect(() => {
    mapThroughProps()
  }, [props])

  return (
    <div className="profile">
      <div className="user_profile">
        <img src={Banner} className="profile_banner"></img>
        <Avatar className="avatar" />
        <div className="user_profile_name">{props.userInfo.name}</div>
        <div className="user_profile"></div>
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

export default withRouter(Profile)
