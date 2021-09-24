import React, { useState, useEffect } from 'react'
import { GetCarsById, UpdateCar } from '../services/CarServices'
import { withRouter } from 'react-router-dom'
import './editcar.css'
function EditCar(props) {
  const [updatedCar, setUpdatedCar] = useState({})

  useEffect(() => {
    const car = GetCarsById(props.match.params.id)
    setUpdatedCar(car)
  }, [])

  const handleCarChange = (e) => {
    setUpdatedCar({ ...updatedCar, [e.target.name]: e.target.value })
  }

  const handleUpdateSubmit = async (e) => {
    e.preventDefault()
    const newUpdatedCar = {
      make: 'Tesla',
      model: updatedCar.model,
      year: parseInt(updatedCar.year),
      description: updatedCar.description,
      car_pic: updatedCar.car_pic,
      price: parseInt(updatedCar.price)
    }
    console.log('newUpdatedCar', newUpdatedCar)
    const res = await UpdateCar(props.match.params.id, newUpdatedCar)
    if (res.status === 200) {
      props.history.push('/profile')
    }
    console.log(res)
  }

  return (
    <div className="edit_car">
      <div className="car_form1">
        <div className="form_wrapper3">
          {updatedCar && (
            <div>
              <h3>{updatedCar.make}</h3>
              <h3>{updatedCar.model}</h3>
              <h3>{updatedCar.year}</h3>
              <form className="edit_car_form" onSubmit={handleUpdateSubmit}>
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
                <button className="edit_button" type="submit">
                  Update Your Car
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EditCar
