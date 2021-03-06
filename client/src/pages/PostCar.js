import UploadImageToS3WithReactS3 from '../components/UploadImageToS3WithReactS3'
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import './postcar.css'

function PostCar(props) {
  const [formData, setFormData] = useState({
    make: 'Tesla',
    model: 'Model S',
    year: '2012',
    car_pic: '',
    description: '',
    price: '',
    userId: props.userInfo.id
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  return (
    <div className="post_car">
      <div>
        <div className="form_wrapper2">
          <h2 className="title_post_car">Add Your Vehicle Info:</h2>
          <form
            onSubmit={(e) => props.handleSubmit(e, formData)}
            className="post_car_form"
          >
            <label for="make">Select a make:</label>
            <select name="make" onChange={handleChange} value={formData.make}>
              <option>Tesla</option>
            </select>
            <label for="model">Select a model:</label>
            <select name="model" onChange={handleChange} value={formData.model}>
              <option>Model S</option>
              <option>Model 3</option>
              <option>Model X</option>
              <option>Model Y</option>
            </select>
            <label for="year">Select a Year:</label>
            <select name="year" onChange={handleChange} value={formData.year}>
              <option>2012</option>
              <option>2013</option>
              <option>2014</option>
              <option>2015</option>
              <option>2016</option>
              <option>2017</option>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
            </select>
            <UploadImageToS3WithReactS3 />
            <label>Upload a Picture of Your Car!</label>
            <input
              className="car_description"
              type="text"
              name="car_pic"
              onChange={handleChange}
              value={formData.car_pic}
            ></input>
            <label>Describe Your Car</label>
            <input
              className="car_description"
              type="text"
              name="description"
              onChange={handleChange}
              value={formData.description}
            ></input>
            <label>Price Per Day:</label>
            <input
              className="car_description"
              type="number"
              name="price"
              onChange={handleChange}
              value={formData.price}
            ></input>
            <br></br>
            <button className="post_button" type="submit">
              Post Your Car
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default withRouter(PostCar)
