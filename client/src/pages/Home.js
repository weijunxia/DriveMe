import React from 'react'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import Carousel from 'react-material-ui-carousel'
import './home.css'

function Home(props) {
  console.log(props.cars)

  return (
    <div className="home">
      <Banner />
      <div className="header"></div>
      <div className="homeSection">
        <p>Home</p>
        {props.cars ? (
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
        ) : null}
      </div>
    </div>
  )
}

export default Home
