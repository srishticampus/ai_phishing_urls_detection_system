import React from 'react'
import './App.css'
import { BrowserRouter ,Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Navbar from './Components/Navbar'
import User_SignUp from './Pages/User/User_SignUp'

function App() {


  return (
    <>
      <BrowserRouter>
      <div>
      
        {/* Pages-Routes */}
        <Routes>
          <Route path='/' element={[<Navbar/>,<LandingPage/>]} ></Route>
          <Route path='/SignUP' element={[<Navbar/>,<User_SignUp/>]}/>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
