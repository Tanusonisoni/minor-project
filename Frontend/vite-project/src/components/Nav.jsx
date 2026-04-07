import React from 'react'
import "./nav.css"
import logo from "../assets/logo.png"
import {NavLink, useNavigate} from "react-router"

const nav = () => {
//   const navigate=useNavigate();
   
  return (
    <nav>
        <div className="nav">
          <div className="right">
            <img src={logo} alt="logo"></img>
          <h2>Dynamic Mail Transmission System</h2></div>
          <div className="left">
            <NavLink to='/Login' className="nav-link">Login</NavLink>
            <NavLink to='/Register' className="nav-link">Register</NavLink>

          </div>
        </div>
    </nav>
  )
}


export default nav