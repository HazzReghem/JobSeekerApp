import React from 'react'
import './nav.scss'

const Nav = () => {
  return (
    <div className="navBar">
      <div className="logoDiv">
        <h1 className="logo">
          <strong>Job</strong>search
        </h1>
      </div>

      <div className="menu">
        <li className="menuList">Jobs</li>
        <li className="menuList">Companies</li>
        <li className="menuList">About</li>
        <li className="menuList">Contact</li>
        <li className="menuList">Blog</li>
        <li className="menuList">Login</li>
        <li className="menuList">Register</li>
      </div>
    </div>
  )
}

export default Nav
