import React from 'react'
import Nav from "./Nav"
import "./landing_page.css"
import video from "../assets/video1.mp4";
const landing_page = () => {
  return (
    <div className="container">  
        <video loop autoPlay muted >
        <source src={video} type="video/mp4" />
        </video>
        <Nav/>
    </div>
  )
}

export default landing_page