import React from 'react'
import './App.css'
import { BrowserRouter ,Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Navbar from './Components/Navbar'
import User_Navbar from './Components/User_Navbar'
import User_SignUp from './Pages/User/User_SignUP'
import Footer from './Components/Footer'
import User_login from './Pages/User/User_login'


function App() {


  return (
    <>
      <BrowserRouter>
      <div>
      
        {/* Pages-Routes */}
        <Routes>
          <Route path='/' element={[<Navbar/>,<LandingPage/>]} ></Route>
          <Route path='/SignUP' element={[<User_Navbar/>,<User_SignUp/>,<Footer/>]}/>
          <Route path='/Login' element={[<User_Navbar/>,<User_login/>,<Footer/>]}/>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
