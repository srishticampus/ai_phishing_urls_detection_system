import { Routes, Route } from "react-router";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Pages/LandingPage/LandingPage";
import UserSignup from "./Pages/UserSignup/UserSignup";
import Footer from "./Components/Footer/Footer";
import UserLogin from "./Pages/UserLogin/UserLogin";
import UserForgotPassword from "./Pages/UserForgetPassword/UserForgotPassword";
import ContactUS from "./Pages/ContactUS/ContactUS";
import Services from "./Pages/Services/Services";
import Services from "./Pages/Services/Services";
import TermsOfConditions from "./Pages/TermsOfConditions/TermsOfConditions";
import PrivacyandPolicy from "./Pages/PrivacyPolicy/PrivacyandPolicy";
import FandQ from "./Pages/FandQ/FandQ";
import About from "./Pages/AboutUS/About";
import UserProfile from "./Pages/UserProfile/UserProfile";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import UserEditProfile from "./Pages/UserEditProfile/UserEditProfile";
import UserNavbar from "./Components/UserNavbar/UserNavbar";
import HomePageNavbar from "./Components/HomePageNavbar/HomePageNavbar";
import UserViewProfile from "./Pages/UserViewProfile/UserViewProfile";
import AdminSidebar from "./Pages/AdminSidebar/AdminSidebar";
import AdminHome from "./Pages/AdminHome/AdminHome";
import AdminViewSidebar from "./Components/AdminViewSidebar/AdminViewSidebar";
import AdminAddBlog from "./Pages/AdminAddBlog/AdminAddBlog";
import AdminViewBlog from "./Pages/AdminViewBlog/AdminViewBlog";
import AdminDetailedView from "./Pages/AdminDetailedViewBlog/AdminDetailedView";
import AdminEditBlog from "./Pages/AdminEditBlog/AdminEditBlog";




function App() {
  return (
    <>
      <ToastContainer position="top-right" transition={Bounce} />
      <ToastContainer position="top-right" transition={Bounce} />
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
        ></Route>
        ></Route>
        {/* servcies Route */}
        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <Services />
              <Footer />
            </>
          }
        ></Route>
        {/* Terms of conditions */}
        <Route
          path="/terms-of-conditions"
          element={
            <>
              <Navbar />
              <TermsOfConditions />
            </>
          }
        ></Route>
        {/* privacy policy */}
        <Route
          path="/privacy-policy"
          element={
            <>
              <Navbar />
              <PrivacyandPolicy />
            </>
          }
        ></Route>
        ></Route>

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
        ></Route>

        {/* about*/}

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        ></Route>
        <Route
          path="/user-profile"
          element={
            <>
              <Navbar />
              <UserProfile />
              <Footer />
            </>
          }
        ></Route>

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

        <Route
          path="/user-edit-profile"
          element={
            <>
              <HomePageNavbar />
              <UserEditProfile />
            </>
          }
        >

        </Route>

        <Route
          path="/user-home-page"
          element={
            <>
              <HomePageNavbar />
            </>
          }
        >

        </Route>

        <Route
          path="/user-view-profile"
          element={
            <>
              <HomePageNavbar />
              <UserViewProfile />
            </>
          }
        >

        </Route>

        <Route
          path="/dashboard"
          element={
            <>
              <AdminSidebar />
            </>
          }
        >

        </Route>

        <Route
          path="/admin-dashboard"
          element={
            <>
              <AdminHome />
              <AdminViewSidebar />
            </>
          }
        />

        <Route
          path="/admin-add-blog"
          element={
            <>
              <AdminAddBlog />
              <AdminViewSidebar />
            </>
          }
        >
        </Route>

        <Route
        path="/admin-view-blog"
        element={
          <>
          <AdminViewBlog/>
          <AdminViewSidebar/>
          </>
        }
        >

        </Route>
  
        <Route
        
        path="/admin-detailed-view-blog"
        element={
          <>
          <AdminDetailedView/>
          <AdminViewSidebar/>
          </>
        }
        >

        </Route>

        <Route
        path="/admin-edit-blog"
        element={
          <>
          <AdminEditBlog/>
          <AdminViewSidebar/>
          </>
        }
        >
        </Route>




      </Routes>
    </>
  );
}

export default App;
