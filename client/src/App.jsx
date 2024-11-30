import { Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Pages/LandingPage/LandingPage";
import UserNavbar from "./Components/UserNavbar/UserNavbar";
import UserSignup from "./Pages/UserSignup/UserSignup";
import Footer from "./Components/Footer/Footer";
import UserLogin from "./Pages/UserLogin/UserLogin";
import UserForgotPassword from "./Pages/UserForgetPassword/UserForgotPassword";
import ContactUS from "./Pages/ContactUS/ContactUS";
import Services from "./Pages/Services/services";


function App() {
  return (
    <>
      <Routes>
        {/* Landing Page Route */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <LandingPage />
              <Footer />
            </>
          }
        />

        {/* Sign Up Route */}
        <Route
          path="/signup"
          element={
            <>
              <UserNavbar />
              <UserSignup />
              <Footer />
            </>
          }
        />

        {/* Login Route */}
        <Route
          path="/login"
          element={
            <>
              <UserNavbar />
              <UserLogin />
              <Footer />
            </>
          }
        />
        {/* forgetpassword Route */}
        <Route
         path="/forgetpassword"
         element={
          <>
          <UserNavbar/>
         <UserForgotPassword/>
          <Footer/>
          </>
         }
        >
        </Route>

        <Route
        path="/contactus"
        element={
          <>
          <Navbar/>
          <ContactUS/>
      
          </>
        }
        >
        </Route>
        <Route
        path="/services"
        element={
          <>
          <Navbar/>
          <Services/>
          </>
        }></Route>
      </Routes>
    </>
  );
}

export default App;
