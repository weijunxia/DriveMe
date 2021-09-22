import React from 'react'

function PostCar(props) {
  const [carData, setCarData] = useState({
    make: '',
    model: '',
    year: '',
    car_pic: '',
    price: ''
  })

  const handleChange = (event) => {
    setCarData({ ...carData, [event.target.name]: event.target.value })
  }

  return (
    <div>
      <form onSubmit={(e) => props.handleSubmit(e, carData)}>
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
          <option value="2014">Model X</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
        </select>
      </form>
    </div>
  )
}

export default PostCar
