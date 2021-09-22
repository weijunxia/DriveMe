import React, { useState } from 'react'

function PostCar(props) {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    car_pic: '',
    price: ''
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }
  let x = ''

  const addImageButton = (
    <input
      type="text"
      name="car_pic"
      onChange={handleChange}
      defaultValue="Upload Picutres of Your Car!"
    ></input>
  )

  const onClick = (e) => {
    x = addImageButton
  }

  return (
    <div>
      <form onSubmit={(e) => props.handleSubmit(e, formData)}>
        <label for="make">Select a make:</label>
        <select>
          <option value="Tesla">Tesla</option>
        </select>
        <label for="model">Select a model:</label>
        <select>
          <option value="Model S">Model S</option>
          <option value="Model 3">Model 3</option>
          <option value="Model X">Model X</option>
          <option value="Model Y">Model Y</option>
        </select>
        <label for="model">Select a Year:</label>
        <select>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
        </select>
        {x}
        <button
          onClick={(e) => {
            onClick()
          }}
        />
      </form>
    </div>
  )
}

export default PostCar
