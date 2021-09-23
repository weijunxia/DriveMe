import { Checkbox } from '@material-ui/core'
import React, { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import './register-signin.css'
const iState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  is_owner: false
}

export default function Register(props) {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    is_owner: false
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      is_owner: formValues.is_owner
    })
    setFormValues(iState)
    props.history.push('/login')
  }

  return (
    <div className="register col">
      <h2 className="title_register">Register to Find Your Next Ride</h2>
      <form className="col" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            name="name"
            type="name"
            placeholder="Your full name"
            value={formValues.name}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="example@example.com"
            value={formValues.email}
            required
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={formValues.password}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            value={formValues.confirmPassword}
            required
          />
          <div className="check_box">
            <p className="host_blurb">
              Do you own a car and want to rent said your car and make
            </p>
            <p>
              passive income? Check this box to get started today!
              <input
                className="box"
                type="checkbox"
                defaultChecked={false}
                value={!formValues.is_owner}
              />
            </p>
          </div>
        </div>
        <button
          className="register_button"
          disabled={
            !formValues.email ||
            (!formValues.password &&
              formValues.confirmPassword === formValues.password)
          }
        >
          Register
        </button>
      </form>
    </div>
  )
}
