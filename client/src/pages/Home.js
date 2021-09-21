import React from 'react'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import Carousel from 'react-material-ui-carousel'
import './home.css'

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="homeSection">
        <Carousel>
          {cars.map((car) => (
            <Cards
              car_pic={car.car_pic}
              make={car.make}
              model={car.model}
              year={car.year}
            />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Home
