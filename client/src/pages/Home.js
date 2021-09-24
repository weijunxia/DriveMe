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
      <div className="home_section">
        <div className="carousel_wrapper">
          <h1 className="title_carousel">Featured Cars</h1>
          {props.cars ? (
            <Carousel>
              {props.cars.map((car) => (
                <Cards
                  className="carousel_cards1"
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
    </div>
  )
}

export default Home
