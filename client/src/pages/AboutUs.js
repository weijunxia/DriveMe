import React from 'react'
import './aboutus.css'
import logo from '../images/DriveMe.png'

function AboutUs() {
  return (
    <div className="whole">
      <div className="top">
        <div className="line">
          <h1 className="title">About DriveMe</h1>
          <img src={logo} />
        </div>
      </div>
      <div className="container">
        <div className="text">
          <h3 className="blurb">
            DriveMe is not just a futuristic no hassle car rental service. It’s
            not just the frictionless and easy to use application that drives
            our growth. It is the commitment to being on the right side of the
            climate fight that makes our company truly unique. DriveMe is the
            first car rental service exclusively for electric vehicles. DriveMe
            hopes to set an example to the rest of the corporate world and
            everyday citizens that everyone has a role to pay. Our company goes
            way beyond just servicing our customer’s needs. We align with their
            values and that is why every customer feels like a partner. You can
            become one by becoming a DriveMe host and posting your electric
            vehicle for rent on our App today. Coverage is limited to the NYC
            area but will be expanding around the state and country very soon.
          </h3>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
