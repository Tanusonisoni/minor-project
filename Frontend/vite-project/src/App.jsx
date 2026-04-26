import { useState } from 'react'
import LandingPage from "./components/landing_page"
import Login from "./components/Login/LoginPage"
import Nav from "./components/nav"
import './App.css'
import {Routes,Route,BrowserRouter} from "react-router"


function App() {
  

  return (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Nav />
    <div style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<LandingPage/>} />
      </Routes>
    </div>
  </div>
)
}

export default App
