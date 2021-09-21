import React from 'react'
import './navbar.css'
import SearchIcon from '@material-ui/icons/Search'
import logo from '../images/DriveMe.png'
// import LanguageIcon from '@material-ui/icons/Language'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'

function NavBar() {
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
        <p>Become a host</p>
        {/* <LanguageIcon /> */}
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  )
}

export default NavBar
