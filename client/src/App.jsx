import React from 'react'
import './App.css'
import { BrowserRouter ,Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Navbar from './Components/Navbar'

function App() {


  return (
    <>
      <BrowserRouter>
      <div>
      
        {/* Pages-Routes */}
        <Routes>
          <Route path='/' element={[<Navbar/>,<LandingPage/>]} ></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
