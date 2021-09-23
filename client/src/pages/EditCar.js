import React, { useState, useEffect } from 'react'
import { GetCarsById, UpdateCar } from '../services/CarServices'
import { withRouter } from 'react-router-dom'

function EditCar(props) {
  const [updatedCar, setUpdatedCar] = useState({
    // make: props.userInfo.make,
    // model: props.userInfo.model,
    // year: props.userInfo.year,
    // description: props.userInfo.description,
    // car_pic: props.userInfo.car_pic,
    // price: props.userInfo.price,
    // userId: props.userInfo.id
    make: '',
    model: '',
    year: '',
    description: '',
    car_pic: '',
    price: '',
    userId: ''
  })

  useEffect(() => {
    const car = GetCarsById(props.match.params.id)
    setUpdatedCar(car)
    console.log(props)
  }, [])

  const handleCarChange = async (e) => {
    await setUpdatedCar({ ...updatedCar, [e.target.name]: e.target.value })
  }

  const handleUpdateSubmit = async (e) => {
    e.preventDefault()
    const newUpdatedCar = {
      make: updatedCar.make,
      model: updatedCar.model,
      year: updatedCar.year,
      description: updatedCar.description,
      car_pic: updatedCar.car_pic,
      price: updatedCar.price,
      userId: updatedCar.userId
    }
    const res = await UpdateCar(updatedCar.userId, newUpdatedCar)
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
              <select
                name="make"
                onChange={handleCarChange}
                value={updatedCar.make}
              >
                <option>Tesla</option>
              </select>
              <label for="model">Select a model:</label>
              <select
                name="model"
                onChange={handleCarChange}
                value={updatedCar.model}
              >
                <option>Model S</option>
                <option>Model 3</option>
                <option>Model X</option>
                <option>Model Y</option>
              </select>
              <label for="year">Select a Year:</label>
              <select
                name="year"
                onChange={handleCarChange}
                value={updatedCar.year}
              >
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
                contentEditable="true"
                onChange={handleCarChange}
                value={updatedCar.car_pic}
              ></input>
              <label>Describe Your Car</label>
              <input
                type="text"
                name="description"
                onChange={handleCarChange}
                contentEditable="true"
                value={updatedCar.description}
              ></input>
              <label>Price Per Day:</label>
              <input
                type="number"
                name="price"
                onChange={handleCarChange}
                contentEditable="true"
                value={updatedCar.price}
              ></input>
              <br></br>
              <button type="submit">Update Your Car</button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default EditCar
