import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
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
import TermsOfConditions from "./Pages/TermsOfConditions/TermsOfConditions";
import PrivacyandPolicy from "./Pages/PrivacyPolicy/PrivacyandPolicy";
import FandQ from "./Pages/FandQ/FandQ";
import About from "./Pages/AboutUS/About";
import UserProfile from "./Pages/UserProfile/UserProfile";
import UserEditProfile from "./Pages/UserEditProfile/UserEditProfile";
import HomePageNavbar from "./Components/HomePageNavbar/HomePageNavbar";
import UserViewProfile from "./Pages/UserViewProfile/UserViewProfile";
import AdminSidebar from "./Pages/AdminSidebar/AdminSidebar";
import AdminHome from "./Pages/AdminHome/AdminHome";
import AdminViewSidebar from "./Components/AdminViewSidebar/AdminViewSidebar";
import AdminAddBlog from "./Pages/AdminAddBlog/AdminAddBlog";
import AdminViewBlog from "./Pages/AdminViewBlog/AdminViewBlog";
import AdminDetailedView from "./Pages/AdminDetailedViewBlog/AdminDetailedView";
import AdminEditBlog from "./Pages/AdminEditBlog/AdminEditBlog";
import AdminLogin from "./Pages/AdminLogin/AdminLogin";
import AdminViewUsers from "./Pages/AdminViewUsers/AdminViewUsers";
import AdminViewAdvertisers from "./Pages/AdminViewAdvertisers/AdminViewAdvertisers";
import AdminViewDetails from "./Pages/AdminViewDetails/AdminViewDetails";
import AdminViewAdvertisement from "./Pages/AdminViewAdvertisement/AdminViewAdvertisement";
import AdminViewAdvertisementDetail from "./Pages/AdminViewAdvertisementDetail/AdminViewAdvertisementDetail";
import AdvertisersLogin from "./Pages/AdvertisersLogin/AdvertisersLogin";
import AdvertisersForgetPassword from "./Pages/AdvertisersForgetPassword/AdvertisersForgetPassword";
import AdvertisersResetPassword from "./Pages/AdvertisersResetPassword/AdvertisersResetPassword";
import AdvertisersSignup from "./Pages/AdvertisersSignup/AdvertisersSignup";
import AdvertiserSidebar from "./Pages/AdvertiserSidebar/AdvertiserSidebar";
import AdvertiserViewSidebar from "./Components/AdvertiserViewSidebar/AdvertiserViewSidebar";
import AdvertisersDashboard from "./Pages/AdvertisersDashboard/AdvertisersDashboard";
import AdvertiserViewProfile from "./Pages/AdvertiserViewProfile/AdvertiserViewProfile";
import AdvertiserEditProfile from "./Pages/AdvertiserEditProfile/AdvertiserEditProfile";
import AdvertisersViewUsers from "./Pages/AdvertisersViewUsers/AdvertisersViewUsers";
import AdvertisersAddAdvertisements from "./Pages/AdvertisersAddAdvertisements/AdvertisersAddAdvertisements";
import AdvertisersViewAdvertisements from "./Pages/AdvertisersViewAdvertisements/AdvertisersViewAdvertisements";
import AdvertisersViewAdvertisementDetails from "./Pages/AdvertisersViewAdvertisementDetails/AdvertisersViewAdvertisementDetails";
import AdvertisersEditAdvertisements from "./Pages/AdvertisersEditAdvertisements/AdvertisersEditAdvertisements";
import UserHomePage from "./Pages/UserHomePage/UserHomePage";
import UserViewDetails from "./Pages/UserViewDetails/UserViewDetails";
import UserResetPassword from "./Pages/UserResetPassword/UserResetPassword";
import UserAreaOfInterests from "./Pages/UserAreaOfInterests/UserAreaOfInterests";
import UserViewAdvertisementDetails from "./Pages/UserViewAdvertisementDetails/UserViewAdvertisementDetails";
import { checkLoginStatus } from "./Services/apiService";
import ProtectedRoute from "./Routes/ProtectedRoute"; // Import the ProtectedRoute component
import { AuthProvider } from "./Context/AuthContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(checkLoginStatus()); // Track login status

  // Listen for login status changes
  useEffect(() => {
    const handleLoginStatusChange = () => {
      setIsLoggedIn(checkLoginStatus()); 
    };

    // Add event listener for login status changes
    window.addEventListener("loginStatusChanged", handleLoginStatusChange);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("loginStatusChanged", handleLoginStatusChange);
    };
  }, []);

  return (
    <>
      <ToastContainer position="top-right" transition={Bounce} autoClose={3000} />
      <Routes>
        {/* Landing Page Route */}
        <Route
          path="/"
          element={
            <>
              {isLoggedIn ? <HomePageNavbar /> : <Navbar />}
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

        {/* Forget Password Route */}
        <Route
          path="/forgetpassword"
          element={
            <>
              <Navbar />
              <UserForgotPassword />
              <Footer />
            </>
          }
        />

        {/* User Reset Password Route */}
        <Route
          path="/user-reset-password"
          element={
            <>
              <Navbar />
              <UserResetPassword />
              <Footer />
            </>
          }
        />

        {/* Contact Us Route */}
        <Route
          path="/contact"
          element={
            <>
              {isLoggedIn ? <HomePageNavbar /> : <Navbar />}
              <ContactUS />
              <Footer />
            </>
          }
        />

        {/* Services Route */}
        <Route
          path="/services"
          element={
            <>
              {isLoggedIn ? <HomePageNavbar /> : <Navbar />}
              <Services />
              <Footer />
            </>
          }
        />

        {/* Terms of Conditions Route */}
        <Route
          path="/terms-of-conditions"
          element={
            <>
              <Navbar />
              <TermsOfConditions />
              <Footer />
            </>
          }
        />

        {/* Privacy Policy Route */}
        <Route
          path="/privacy-policy"
          element={
            <>
              <Navbar />
              <PrivacyandPolicy />
              <Footer />
            </>
          }
        />

        {/* F&Q Route */}
        <Route
          path="/f&q"
          element={
            <>
              <Navbar />
              <FandQ />
              <Footer />
            </>
          }
        />

        {/* About Route */}
        <Route
          path="/about"
          element={
            <>
              {isLoggedIn ? <HomePageNavbar /> : <Navbar />}
              <About />
              <Footer />
            </>
          }
        />

        {/* User Profile Route */}
        <Route
          path="/user-profile"
          element={
            <>
              {/* <HomePageNavbar /> */}
              <UserProfile />
              <Footer />
            </>
          }
        />

        {/* User Area of Interest Route */}
        <Route
          path="/user-area-of-interest"
          element={
            <>
              {/* <HomePageNavbar /> */}
              <UserAreaOfInterests />
              <Footer />
            </>
          }
        />

        {/* User Edit Profile Route */}
        <Route
          path="/user-edit-profile"
          element={
            <>
              <HomePageNavbar />
              <UserEditProfile />
              <Footer />
            </>
          }
        />

        {/* User Home Page Route */}
        <Route
          path="/user-home-page"
          element={
            <>
              <HomePageNavbar />
              <UserHomePage />
              <Footer />
            </>
          }
        />

        {/* User View Profile Route */}
        <Route
          path="/user-view-profile"
          element={
            <>
              <HomePageNavbar />
              <UserViewProfile />
              <Footer />
            </>
          }
        />

        {/* User View Advertisement Details Route */}
        <Route
          path="/user-view-advertisement-details"
          element={
            <>
              <HomePageNavbar />
              <UserViewAdvertisementDetails />
              <Footer />
            </>
          }
        />

        {/* Admin Login Route */}
        <Route
          path="/admin-login"
          element={
            <>
              <Navbar />
              <AdminLogin />
              <Footer />
            </>
          }
        />
        {/* Protected Admin Routes */}
        <Route element={<ProtectedRoute />}>
          <Route
            path="/dashboard"
            element={
              <>
                <AdminSidebar />
              </>
            }
          />

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
          />

          <Route
            path="/admin-view-blog"
            element={
              <>
                <AdminViewBlog />
                <AdminViewSidebar />
              </>
            }
          />

          <Route
            path="/admin-detailed-view-blog"
            element={
              <>
                <AdminDetailedView />
                <AdminViewSidebar />
              </>
            }
          />

          <Route
            path="/admin-edit-blog"
            element={
              <>
                <AdminEditBlog />
                <AdminViewSidebar />
              </>
            }
          />

          <Route
            path="/admin-view-users"
            element={
              <>
                <AdminViewSidebar />
                <AdminViewUsers />
              </>
            }
          />

          <Route
            path="/admin-view-advertisers"
            element={
              <>
                <AdminViewSidebar />
                <AdminViewAdvertisers />
              </>
            }
          />

          <Route
            path="/admin-view-details"
            element={
              <>
                <AdminViewSidebar />
                <AdminViewDetails />
              </>
            }
          />

          <Route
            path="/admin-view-advertisement"
            element={
              <>
                <AdminViewSidebar />
                <AdminViewAdvertisement />
              </>
            }
          />

          <Route
            path="/admin-view-advertisement-detail"
            element={
              <>
                <AdminViewSidebar />
                <AdminViewAdvertisementDetail />
              </>
            }
          />
        </Route>
        {/* Advertiser Login Route */}
        <Route
          path="/advertiser-login"
          element={
            <>
              <Navbar />
              <AdvertisersLogin />
              <Footer />
            </>
          }
        />

        {/* Advertisers Forget Password Route */}
        <Route
          path="/advertisers-forget-password"
          element={
            <>
              <Navbar />
              <AdvertisersForgetPassword />
              <Footer />
            </>
          }
        />

        {/* Advertisers Reset Password Route */}
        <Route
          path="/advertisers-reset-password"
          element={
            <>
              <Navbar />
              <AdvertisersResetPassword />
              <Footer />
            </>
          }
        />

        {/* Advertisers Signup Route */}
        <Route
          path="/advertisers-signup"
          element={
            <>
              <Navbar />
              <AdvertisersSignup />
              <Footer />
            </>
          }
        />

        {/* Advertiser Dashboard Route */}
        <Route
          path="/advertiser-dashboard"
          element={
            <>
              <AdvertiserSidebar />
            </>
          }
        />

        {/* Advertiser View Sidebar Route */}
        <Route
          path="/advertiser-view-sidebar"
          element={
            <>
              <AdvertiserViewSidebar />
            </>
          }
        />

        {/* Advertisers Dashboard Route */}
        <Route
          path="/advertisers-dashboard"
          element={
            <>
              <AdvertiserViewSidebar />
              <AdvertisersDashboard />
            </>
          }
        />

        {/* Advertiser View Profile Route */}
        <Route
          path="/advertiser-view-profile"
          element={
            <>
              <AdvertiserViewProfile />
            </>
          }
        />

        {/* Advertiser Edit Profile Route */}
        <Route
          path="/advertiser-edit-profile"
          element={
            <>
              <AdvertiserEditProfile />
            </>
          }
        />

        {/* Advertiser View Users Route */}
        <Route
          path="/advertiser-view-user"
          element={
            <>
              <AdvertiserViewSidebar />
              <AdvertisersViewUsers />
            </>
          }
        />

        {/* Advertisers Add Advertisements Route */}
        <Route
          path="/advertisers-add-advertisements"
          element={
            <>
              <AdvertiserViewSidebar />
              <AdvertisersAddAdvertisements />
            </>
          }
        />

        {/* Advertisers View Advertisements Route */}
        <Route
          path="/advertisers-view-advertisements"
          element={
            <>
              <AdvertiserViewSidebar />
              <AdvertisersViewAdvertisements />
            </>
          }
        />

        {/* Advertisers View Advertisement Details Route */}
        <Route
          path="/advertisers-view-advertisement-details/:id"
          element={
            <>
              <AdvertiserViewSidebar />
              <AdvertisersViewAdvertisementDetails />
            </>
          }
        />

        {/* Advertisers Edit Advertisements Route */}
        <Route
          path="/advertisers-edit-advertisement/:id"
          element={
            <>
              <AdvertiserViewSidebar />
              <AdvertisersEditAdvertisements />
            </>
          }
        />

        {/* User Homepage Route */}
        <Route
          path="/user-homepage"
          element={
            <>
              <HomePageNavbar />
              <UserHomePage />
              <Footer />
            </>
          }
        />

        {/* User View Details Route */}
        <Route
          path="/user-view-details"
          element={
            <>
              <HomePageNavbar />
              <UserViewDetails />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;