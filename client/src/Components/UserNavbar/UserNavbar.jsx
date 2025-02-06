import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserNavbar.css";
import { checkLoginStatus, logout } from "../../Services/apiService";

function UserNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Get the navigate function from useNavigate

  // Check login status when the component mounts or when the login status changes
  useEffect(() => {
    const handleLoginStatusChange = () => {
      setIsLoggedIn(checkLoginStatus());
    };

    // Listen for the custom login status event
    window.addEventListener("loginStatusChanged", handleLoginStatusChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("loginStatusChanged", handleLoginStatusChange);
    };
  }, []);

  // Handle logout
  const handleLogout = () => {
    logout();  // Call logout function
    setIsLoggedIn(false); // Update the login state
    navigate("/login"); // Navigate to the login page
  };

  return (
    <>
      <nav className="navbar navbar-expand-md UserNavbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            <span className="UserNavbar_logo_Blog_Color">BLOG</span>&nbsp;
            <span className="UserNavbar_logo_color">SPHERE</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-light"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link user_navbar_links Navlitems_Margin" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link user_navbar_links Navlitems_Margin" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link user_navbar_links Navlitems_Margin" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link user_navbar_links Navlitems_Margin" to="/contact">
                  Contact
                </Link>
              </li>

              {/* Conditionally render Dropdown and Logout buttons */}
              {isLoggedIn && (
                <>
                  {/* Dropdown Button */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle user_navbar_links Navlitems_Margin"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Users
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <Link className="dropdown-item" to="/user-profile">
                          User Profile
                        </Link>
                      </li>
                      {/* <li>
                        <Link className="dropdown-item" to="/user-view-profile">
                        User View Profile
                        </Link>

                      </li>
                      <li>
                        <Link className="dropdown-item" to="/user-area-of-interest">
                          Area of Interest
                        </Link>
                      </li> */}
                      <li>
                        <Link className="dropdown-item" to="/user-view-advertisement-details">
                          Advertisement Details
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/user-homepage">
                          User HomePage
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/user-view-details">
                          User View Details
                        </Link>
                      </li>

                    </ul>
                  </li>

                  {/* Advertiser DropDown */}
                  {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle user_navbar_links Navlitems_Margin"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Advertisers
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <Link className="dropdown-item" to="/advertiser-login">
                          Advertiser Login
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/advertisers-dashboard">
                        Advertiser Dashboard
                        </Link>

                      </li>
                      <li>
                        <Link className="dropdown-item" to="/advertiser-edit-profile">
                          Advertiser Edit Profile
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/advertiser-view-user">
                          
                        </Link>
                      </li>
 

                    </ul>
                  </li> */}

                  {/* Logout Button */}
                  <li className="nav-item">
                    <button
                      className="nav-link user_navbar_links Navlitems_Margin"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}

              {/* Show Login button if not logged in */}
              {!isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link user_navbar_links Navlitems_Margin" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default UserNavbar;
