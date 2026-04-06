import React from 'react'
import "./nav.css"
import logo from "../assets/logo.png"
import Login from "./Login"
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
            <NavLink to='/Login'>Login</NavLink>
            {/* <p onClick={LoginPage}>Login</p> */}
          <p id="Register">Register</p></div>
        </div>
    </nav>
  )
}


export default nav