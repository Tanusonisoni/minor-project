import { useState } from 'react'
import LandingPage from "./components/landing_page"
import './App.css'
import {Routes,Route,BrowserRouter} from "react-router"
import Nav from "./components/Nav"

function App() {
  

  return (

    <>
    <Routes>
      <Route path="/Login" element={<Nav/>}/>
    </Routes>
      <LandingPage/>
    </>
  )
}

export default App
