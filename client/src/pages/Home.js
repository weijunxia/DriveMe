import React from 'react'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import './home.css'

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="homeSection">
        <Cards
          car_pic="https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/1_rangerover_tracking.jpg"
          make="Range Rover"
          model="L405"
          year="2021"
        />
        <Cards
          car_pic="https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/1_rangerover_tracking.jpg"
          make="Range Rover"
          model="L405"
          year="2021"
        />
        <Cards
          car_pic="https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/1_rangerover_tracking.jpg"
          make="Range Rover"
          model="L405"
          year="2021"
        />
      </div>
    </div>
  )
}

export default Home
