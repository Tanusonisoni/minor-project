import { useState } from 'react'
import LandingPage from "./components/landing_page"
import './App.css'
import {Routes,Route,BrowserRouter} from "react-router"


function App() {
  

  return (

    <>
    <Routes>
      <Route path="/Login" element={<LandingPage/>}/>
      <Route path="/" element={<LandingPage/>}/>
       <Route path="/Register" element={<LandingPage/>}/>
    </Routes>
      
    </>
  )
}

export default App
