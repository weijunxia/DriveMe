import React, { useEffect, useState } from 'react'
import { GetCarsById } from '../services/CarServices'
import Cards from '../components/Cards'
import './car.css'
import { withRouter } from 'react-router-dom'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import StarIcon from '@material-ui/icons/Star'
import PostReview from './PostReview'

function Car({ userInfo, ...props }) {
  const [carProfile, setCarProfile] = useState({})

  const getCar = async () => {
    const res = await GetCarsById(props.match.params.id)
    setCarProfile(res)
  }
  useEffect(() => {
    getCar()
  }, [props])

  return (
    <div className="carprofile">
      <div className="contain">
        <div className="heading">
          <h1>Vehicle Details</h1>
        </div>
        <div className="try">
          <div className="carcard">
            <Cards
              car_pic={carProfile.car_pic}
              make={carProfile.make}
              model={carProfile.model}
              year={carProfile.year}
            />
          </div>
        </div>
        <div className="form">
          <PostReview {...props} carProfile={carProfile} userInfo={userInfo} />
        </div>
      </div>
      {carProfile.Reviews ? (
        <div className="search_results">
          <div className="search_results_card">
            {carProfile.Reviews.map((review) => (
              <div className="search_result_cars" key={review.id}>
                <img
                  src="https://img.freepik.com/free-icon/important-person_318-10744.jpg?size=338&ext=jpg"
                  alt={`${review.name}`}
                />
                <FavoriteBorderIcon className="search_result_heart" />

                <div className="search_result_info">
                  <div className="search_result_top_info">
                    <h2>{review.name}</h2>

                    <p>{review.comment}</p>
                  </div>

                  <div className="search_result_bottom_info">
                    <div className="search_result_stars">
                      <StarIcon className="search_result_star" />
                      <p>
                        <strong>{review.rating}Stars</strong>
                      </p>
                    </div>

                    <div className="search_result_price">
                      <h2>{review.createdAt}</h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default withRouter(Car)
