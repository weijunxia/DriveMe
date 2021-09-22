import React from 'react'
import { useState } from 'react'
import './navbar.css'
import SearchIcon from '@material-ui/icons/Search'
import logo from '../images/DriveMe.png'
import { Avatar } from '@material-ui/core'
import { Link, NavLink } from 'react-router-dom'

function NavBar({ authenticated, user, handleLogOut }) {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav>
        <NavLink>
          <button>Become A Host</button>
        </NavLink>
        <h3>Welcome {user.name}!</h3>
        <NavLink onClick={handleLogOut} to="/">
          Sign Out
        </NavLink>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <NavLink to="/post-car">
        <button>Become A Host</button>
      </NavLink>
      <NavLink to="/api/auth/register">Register</NavLink>
      <NavLink to="/api/auth/login">Sign In</NavLink>
    </nav>
  )
  return (
    <div className="navBar">
      <Link to="/">
        <img src={logo} alt="DriveMe logo" className="navBar_logo" />
      </Link>
      <div className="navBar_center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="navBar_right">
        {authenticated && user ? authenticatedOptions : publicOptions}
        <Avatar />
      </div>
    </div>
  )
}

export default NavBar
