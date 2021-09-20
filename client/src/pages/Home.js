import React from 'react'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import './home.css'

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="homeSection">
        <Cards></Cards>
      </div>
    </div>
  )
}

export default Home
