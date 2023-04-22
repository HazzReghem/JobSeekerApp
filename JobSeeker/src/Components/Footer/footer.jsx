import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="logoDiv">
          <h1 className="logo">
            <strong>Job</strong>Search
          </h1>
        </div>
        <p className="footerP">
          We always make our seekers find the best jobs, and our companies the
          best candidates
        </p>
      </div>

      <div className="footerInfo">
        <span>Company</span>
        <ul>
          <li>About us</li>
          <li>Features</li>
          <li>News</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div className="footerInfo">
        <span>Ressources</span>
        <ul>
          <li>Account</li>
          <li>Support Center</li>
          <li>Feedback</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="footerInfo">
        <span>Support</span>
        <ul>
          <li>Events</li>
          <li>Promo</li>
          <li>Req Demo</li>
          <li>Careers</li>
        </ul>
      </div>

      <div className="infoPerso">
        <span className="contactInfo">Contact Info</span>
        <div className="mailDiv">
          <small>thibault.roussel@gmx.com</small>
        </div>
      </div>
    </div>
  )
}

export default Footer
