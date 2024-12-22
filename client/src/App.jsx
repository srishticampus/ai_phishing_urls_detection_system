import { Routes, Route } from "react-router";
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Pages/LandingPage/LandingPage";
import UserSignup from "./Pages/UserSignup/UserSignup";
import Footer from "./Components/Footer/Footer";
import UserLogin from "./Pages/UserLogin/UserLogin";
import UserForgotPassword from "./Pages/UserForgetPassword/UserForgotPassword";
import ContactUS from "./Pages/ContactUS/ContactUS";
import Services from "./Pages/Services/services";
import TermsOfConditions from "./Pages/TermsOfConditions/TermsOfConditions";
import PrivacyandPolicy from "./Pages/PrivacyPolicy/PrivacyandPolicy";
import FandQ from "./Pages/FandQ/FandQ";
import About from "./Pages/AboutUS/About";
import UserProfile from "./Pages/UserProfile/UserProfile";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";


function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        transition={Bounce}
      />
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
              <Navbar />
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
              <Navbar />
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
              <Navbar />
              <UserForgotPassword />
              <Footer />
            </>
          }
        ></Route>
        {/* contactus Route */}
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <ContactUS />

            </>
          }
        >
        </Route>
        {/* servcies Route */}
        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <Services />
              <Footer/>
            </>
          }></Route>
        {/* Terms of conditions */}
        <Route
          path="/terms-of-conditions"
          element={
            <>
              <Navbar />
              <TermsOfConditions />

            </>
          }
        >
        </Route>
        {/* privacy policy */}
        <Route
          path="/privacy-policy"
          element={
            <>
              <Navbar />
              <PrivacyandPolicy />
            </>
          }
        >
        </Route>

        {/* F&Q */}
        <Route
          path="/f&q"
          element={
            <>
              <Navbar />
              <FandQ />
              <Footer />
            </>
          }
        >

        </Route>

        {/* about*/}

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        >
        </Route>
        <Route
          path="/user-profile"
          element={
            <>
              <Navbar />
              <UserProfile />
            </>
          }
        >

        </Route>

        <Route
          path="/forget-password"
          element={
            <>
              <Navbar />
              <ForgetPassword />
            </>
          }
        >

        </Route>
      </Routes>
    </>
  );
}

export default App;
