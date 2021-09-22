import React, { useState } from 'react'

function PostCar(props) {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    car_pic: '',
    price: ''
  })
  // const [pics, setPics] = useState({})

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  // const addImageButton = (
  //   <input
  //     type="text"
  //     name="car_pic"
  //     onChange={handleChange}
  //     defaultValue="Upload Picutres of Your Car!"
  //   ></input>
  // )

  // const onClick = (e) => {
  //   setPics({ ...pics })
  // }

  return (
    <div>
      <form onSubmit={(e) => props.handleSubmit(e, formData)}>
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

        {/* <button
          onClick={(e) => {
            onClick()
          }}
        >
          Add More Photos
        </button> */}
        <input
          type="text"
          name="car_pic"
          onChange={handleChange}
          defaultValue="Upload Picutres of Your Car!"
        ></input>
        <h3>Price Per Night</h3>
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
  )
}

export default PostCar
