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
// import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
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
import AdminLogin from "./Pages/AdminLogin/AdminLogin";
import AdminViewUsers from "./Pages/AdminViewUsers/AdminViewUsers";
import AdminViewAdvertisers from "./Pages/AdminViewAdvertisers/AdminViewAdvertisers"
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
import AdvertisersRegistration from "./Pages/AdvertisersRegistration/AdvertisersRegistration";


function App() {
  return (
    <>
      <ToastContainer position="top-right" transition={Bounce} autoClose={3000}/>
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

        <Route
        path="/user-reset-password"
        element={
          <>
          <Navbar />
          <UserResetPassword/>
          <Footer/>
          </>
        }
        >
        </Route>





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
              <Footer/>
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
              <Footer/>
            </>
          }
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
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/user-profile"
          element={
            <>
              <UserNavbar />
              <UserProfile />
              <Footer />
            </>
          }
        ></Route>

        <Route
        path="/user-area-of-interest"
        element={
          <>
          {/* <UserNavbar/> */}
          <UserAreaOfInterests />
          {/* <Footer/> */}
          </>
        }
        >

        </Route>

        {/* <Route
        {/* <Route
          path="/forget-password"
          element={
            <>
              <Navbar />
              <ForgetPassword />
            </>
          }
        >
        </Route> */}
        {/* </Route> */}

        <Route
          path="/user-edit-profile"
          element={
            <>
              <HomePageNavbar />
              <UserEditProfile />
              <Footer/>
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
        ></Route>

        <Route
          path="/user-view-profile"
          element={
            <>
              <HomePageNavbar />
              <UserViewProfile />
              <Footer/>
            </>
          }
        ></Route>

        <Route
        path="/user-view-advertisement-details"
        element={
          <>
          <Navbar/>
          <UserViewAdvertisementDetails/>
          <Footer/>
          </>
        }>
      
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
        ></Route>

        <Route
          path="/admin-view-blog"
          element={
            <>
              <AdminViewBlog />
              <AdminViewSidebar />
            </>
          }
        >

        </Route>

        <Route

          path="/admin-detailed-view-blog"
          element={
            <>
              <AdminDetailedView />
              <AdminViewSidebar />
            </>
          }
        >

        </Route>

        <Route
          path="/admin-edit-blog"
          element={
            <>
              <AdminEditBlog />
              <AdminViewSidebar />
            </>
          }
        >
        </Route>


        <Route
          path="/admin-login"
          element={
            <>
              <UserNavbar />
              <AdminLogin />
              <Footer />
            </>
          }
        >
        </Route>

        <Route
          path="/admin-view-users"
          element={
            <>
              <AdminViewSidebar />
              <AdminViewUsers />
            </>
          }
        >
        </Route>

        <Route
          path="/admin-view-advertisers"
          element={
            <>
              <AdminViewSidebar />
              <AdminViewAdvertisers />
            </>
          }
        >
        </Route>

        <Route
          path="/admin-view-details"
          element={
            <>
              <AdminViewSidebar />
              <AdminViewDetails />
            </>
          }
        >
        </Route>

        <Route
          path="/admin-view-advertisement"
          element={
            <>
              <AdminViewSidebar />
              <AdminViewAdvertisement />
            </>
          }
        >
        </Route>

        <Route
          path="/admin-view-advertisement-detail"
          element={
            <>
              <AdminViewSidebar />
              <AdminViewAdvertisementDetail />
            </>
          }
        >

        </Route>

        <Route
          path="/advertiser-login"
          element={
            <>
              <UserNavbar />
              <AdvertisersLogin />
              <Footer />
            </>
          }
        >
        </Route>

        <Route
          path="/advertisers-forget-password"
          element={
            <>
              <UserNavbar />
              <AdvertisersForgetPassword />
              <Footer />
            </>
          }
        >
        </Route>

        <Route
          path="/advertisers-reset-password"
          element={
            <>
              <UserNavbar />
              <AdvertisersResetPassword />
              <Footer />
            </>
          }
        >
        </Route>

        <Route
          path="/advertisers-signup"
          element={
            <>
              <UserNavbar />
              <AdvertisersSignup />
              <Footer />
            </>
          }
        >
        </Route>

        <Route
          path="/advertiser-dashboard"
          element={
            <>
              <AdvertiserSidebar />
            </>
          }
        >
        </Route>

        <Route
          path="/advertiser-view-sidebar"
          element={
            <>
              <AdvertiserViewSidebar />
            </>
          }
        >
        </Route>

        <Route
          path="/advertisers-dashboard"
          element={
            <>
              <AdvertiserViewSidebar />
              <AdvertisersDashboard />
            </>
          }
        >
        </Route>

        <Route
          path="/advertiser-view-profile"
          element={
            <>
              <AdvertiserViewProfile />
            </>
          }
        >
        </Route>

        <Route
          path="/advertiser-edit-profile"
          element={
            <>
              <AdvertiserEditProfile />
            </>
          }
        >
        </Route>

        <Route
        path="/advertiser-view-user"
        element={
          <>
          <AdvertiserViewSidebar />
         <AdvertisersViewUsers />
          </>
        }
        >

        </Route>

        <Route
        path="/advertisers-add-advertisements"
        element={
          <>
          <AdvertiserViewSidebar />
          <AdvertisersAddAdvertisements/>
          </>
        }
        >

        </Route>

        <Route
        path="/advertisers-view-advertisements"
        element={
          <>
           <AdvertiserViewSidebar />
          <AdvertisersViewAdvertisements/>
          </>
        }
        >
        </Route>

        <Route
        path="/advertisers-view-advertisement-details"
        element={
          <>
          <AdvertiserViewSidebar />
          <AdvertisersViewAdvertisementDetails/>
          </>
        }
        >

        </Route>

        <Route
        path="/advertisers-edit-advertisement"
        element={
          <>
          <AdvertiserViewSidebar />
          <AdvertisersEditAdvertisements/>
          </>
        }
        >
        </Route>


        <Route
        path="/user-homepage"
        element={
          <>
            <HomePageNavbar />
          <UserHomePage/>
          <Footer/>
          </>
        }
        >
        </Route>

        <Route
        path="/user-view-details"
        element={
          <>
          <HomePageNavbar />
          <UserViewDetails/>
          <Footer/>
          </>
        }
        >
        </Route>

        <Route
     
        path="/advertisers-registration"
        element={
          <>
          <UserNavbar/>
          <AdvertisersRegistration/>
          <Footer/>
          </>
        }
        >

        </Route>

      


      </Routes>
    </>
  );
}

export default App;
