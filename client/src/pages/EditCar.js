import React, { useState, useEffect } from 'react'
import { GetCarsById, UpdateCar } from '../services/CarServices'
import { withRouter } from 'react-router-dom'

function EditCar(props) {
  const [updatedCar, setUpdatedCar] = useState({
    make: 'Tesla',
    model: '',
    year: '',
    description: '',
    price: '',
    userId: props.userInfo.id
  })
  useEffect(() => {
    const newCar = await GetCarsById(props.match.params.car_id)
    setUpdatedCar(newCar)
  }, [])

  const handleUpdateSubmit = async (e) => {
    e.preventDefault()
    const newCar = {
      make: make,
      model: model,
      year: year,
      description: description,
      price: price
    }
    const res = await UpdateCar(updatedCar.id, newCar)
    if (res.status === 200) {
      props.history.push('/profile')
    }
    console.log(res)
  }

  return (
    <div>
      <div>
        {updatedCar && (
          <div>
            <h3>{updatedCar.make}</h3>
            <h3>{updatedCar.model}</h3>
            <h3>{updatedCar.year}</h3>
            <form onSubmit={handleUpdateSubmit}>
              <label for="make">Select a make:</label>
              <select name="make" onChange={handleChange} value={formData.make}>
                <option>Tesla</option>
              </select>
              <label for="model">Select a model:</label>
              <select
                name="model"
                onChange={handleChange}
                value={formData.model}
              >
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
              <label>Upload a Picture of Your Car!</label>
              <input
                type="text"
                name="car_pic"
                onChange={handleChange}
                value={formData.car_pic}
              ></input>
              <label>Describe Your Car</label>
              <input
                type="text"
                name="description"
                onChange={handleChange}
                value={formData.description}
              ></input>
              <label>Price Per Day:</label>
              <input
                type="number"
                name="price"
                onChange={handleChange}
                value={formData.price}
              ></input>
              <br></br>
              <button type="submit">Post Your Car</button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default EditCar
