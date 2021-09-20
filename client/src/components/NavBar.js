import React from 'react'
import './navbar.css'
import SearchIcon from '@material-ui/icons/Search'
import logo from '../images/DriveMe.png'
import LanguageIcon from '@material-ui/icons/Language'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Avatar } from '@material-ui/core'

function NavBar() {
  return (
    <div className="navBar">
      <div className="navBar_search">
        <img src={logo} alt="DriveMe logo" className="navBar_logo" />
        <div className="navBar_center">
          <input type="text" />
          <SearchIcon />
        </div>
        <div className="navBar_right">
          <p>Become a host</p>
          <LanguageIcon />
          <ExpandMoreIcon />
          <Avatar />
        </div>
      </div>
    </div>
  )
}

export default NavBar
