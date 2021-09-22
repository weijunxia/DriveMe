import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin
} from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <p className="footerP">About Us</p>
        </Link>
        <Link to="/learn" style={{ textDecoration: 'none' }}>
          <p className="footerP">Learn More</p>
        </Link>
        <Link to="/privacy" style={{ textDecoration: 'none' }}>
          <p className="footerP">Privacy</p>
        </Link>
      </div>
      <div className="footer_right">
        <FaFacebook size={42} className="socialImg" />
        <FaInstagram size={42} className="socialImg" />
        <FaTwitter size={42} className="socialImg" />
        <FaYoutube size={42} className="socialImg" />
        <FaLinkedin size={42} className="socialImg" />
      </div>
    </div>
  )
}

export default Footer
