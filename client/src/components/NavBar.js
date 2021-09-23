import React from 'react'
import { useState } from 'react'
import './navbar.css'
import SearchIcon from '@material-ui/icons/Search'
import logo from '../images/DriveMe.png'
import { Avatar } from '@material-ui/core'
import { Link, NavLink } from 'react-router-dom'
import { GetProfile } from '../services/UserServices'

function NavBar({ authenticated, user, handleLogOut }) {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav className="navBar_right">
        <h3>Welcome {user.email}!</h3>
        <NavLink to="/post-car">
          <button>Become A Host</button>
        </NavLink>
        <NavLink
          onClick={handleLogOut}
          to="/"
          style={{
            textDecoration: 'none',
            color: 'black',
            border: '1px black solid'
          }}
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
        <button>Become A Host</button>
      </NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Sign In</NavLink>
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
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="navBar_right">
        {authenticated && user ? authenticatedOptions : publicOptions}
      </div>
    </div>
  )
}

export default NavBar
