import { Link, NavLink, withRouter } from 'react-router-dom'
import { SearchCars } from '../services/CarServices'
import React, { useState, useEffect } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import SearchResults from './SearchResults'
import { Avatar } from '@material-ui/core'
import logo from '../images/DriveMe.png'
import './navbar.css'

function NavBar({ authenticated, user, handleLogOut, props }) {
  const [input, setInput] = useState(null)
  const [searchCars, setSearchCars] = useState(null)

  const handleSearchSubmit = async (e) => {
    e.preventDefault()
    const res = await SearchCars(input)
    setSearchCars(res)
    console.log(props.location)
  }

  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav className="navBar_right">
        <h4>Welcome Friend!</h4>
        <NavLink to="/post-car">
          <button className="host_button">Become a Host</button>
        </NavLink>
        <NavLink
          className="signout"
          onClick={handleLogOut}
          to="/"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          Sign Out
        </NavLink>
        <NavLink to="/profile">
          <Avatar />
        </NavLink>
      </nav>
    )
  }

  const publicOptions = (
    <nav className="navBar_right">
      <NavLink to="/register">
        <button className="host_button">Become A Host</button>
      </NavLink>
      <NavLink
        to="/register"
        style={{ textDecoration: 'none', color: 'black' }}
      >
        Register
      </NavLink>
      <NavLink to="/login" style={{ textDecoration: 'none', color: 'black' }}>
        Sign In
      </NavLink>
      <NavLink to="/register">
        <Avatar />
      </NavLink>
    </nav>
  )
  return (
    <div className="navBar">
      <Link to="/">
        <img src={logo} alt="DriveMe logo" className="navBar_logo" />
      </Link>
      <div className="navBar_center">
        <form
          className="search_form"
          on
          onSubmit={(e) => handleSearchSubmit(e)}
        >
          <input
            type="text"
            className="search_input"
            name="search"
            onChange={(e) => setInput(e.target.value)}
            required
          ></input>
        </form>
        <NavLink to="/search">
          <SearchIcon onClick={(e) => handleSearchSubmit(e)} />
        </NavLink>
      </div>
      <div className="navBar_right">
        {authenticated && user ? authenticatedOptions : publicOptions}
        {searchCars && (
          <NavLink to={{ pathname: '/search', state: { searchCars } }} />
        )}
      </div>
    </div>
  )
}

export default withRouter(NavBar)
