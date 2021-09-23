import React from 'react'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import Carousel from 'react-material-ui-carousel'
import './home.css'

function Home(props) {
  return (
    <div className="home">
      <Banner />
      <div className="header"></div>
      <div className="homeSection">
        <p>Home</p>
        <Carousel>
          {props.cars.map((car) => (
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
