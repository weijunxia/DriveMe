import React, { useEffect, useState } from 'react'
import { GetCarsById, DeleteCar } from '../services/CarServices'
import { GetProfile } from '../services/UserServices'
import { GetAllReviewsByUser } from '../services/ReviewServices'
import { Avatar } from '@material-ui/core'
// import Banner from '../images/model-s-main-hero-desktop.png'
import './profile.css'
import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import logo from '../images/DriveMe.png'
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
      <div className="user_profile_top">
        {/* <img src={Banner} className="profile_banner"></img> */}
        <div className="whole1">
          <div className="top1">
            <div className="try1">
              <div className="line1">
                <h1 className="title1">DriveMe</h1>
                <img src={logo} />
              </div>
            </div>
          </div>
          <Avatar className="avatar" />
          <div className="user_profile_name">{props.userInfo.name}</div>
          <div className="user_profile"></div>
        </div>
        <div className="user_cars">
          <h1> YOUR Garage</h1>
          {userCars && (
            <div>
              {' '}
              {userCars.map((car) => (
                <div className="user_car_card" key={car.id}>
                  <button
                    className="remove"
                    onClick={() => {
                      onClick(car.id)
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    Remove Your Listing
                  </button>
                  <NavLink
                    className="edit"
                    to={`/profile/cars/${car.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <button>Edit Your Listing!</button>
                  </NavLink>
                  <h3>
                    {car.make} {car.year} {car.model}
                  </h3>
                  <img
                    src={car.car_pic}
                    alt={`${car.make}${car.model}${car.year}`}
                  />
                  <p>{car.description}</p>
                  <h3>${car.price}/day</h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default withRouter(Profile)
