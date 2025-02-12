import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";  // Ensure you're using `react-router-dom` here
import "./Navbar.css";
import { logout, checkLoginStatus } from "../../Services/apiService";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(checkLoginStatus());
  const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setIsLogoutConfirmOpen(true); // Open the confirmation modal
  };

  const confirmLogout = () => {
    logout();
    setIsLoggedIn(false);
    setIsLogoutConfirmOpen(false);
    navigate("/"); // Navigate to home after logout
  };

  const cancelLogout = () => {
    setIsLogoutConfirmOpen(false); // Close the confirmation modal
  };

  useEffect(() => {
    setIsLoggedIn(checkLoginStatus());
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <Link className="navbar-brand logo" to="/">
            <span className="logo_Blog_Color">BLOG</span>&nbsp;
            <span className="logo_color">SPHERE</span>
          </Link>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon bg-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav navbar_list mx-auto">
              <li className="nav-item navbar_nav-item">
                <Link className="nav-link navbar_links" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item navbar_nav-item">
                <Link className="nav-link navbar_links" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item navbar_nav-item">
                <Link className="nav-link navbar_links" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item navbar_nav-item">
                <Link className="nav-link navbar_links" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex ms-auto">
              {isLoggedIn ? (
                <button
                  type="button"
                  className="btn btn-outline navbar_login_button"
                  onClick={handleLogoutClick}
                >
                  Logout
                </button>
              ) : (
                <div className="dropdown">
                  <button
                    className="btn btn-outline navbar_login_button dropdown-toggle"
                    type="button"
                    id="dropdownLoginButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Login
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownLoginButton"
                  >
                    <li>
                      <Link className="dropdown-item" to="/login">
                        User
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/advertiser-login">
                        Advertiser
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </form>
          </div>
        </div>
      </nav>

      {/* Logout Confirmation Modal */}
      {isLogoutConfirmOpen && (
        <div className="modal homepage-navbar-modal-logout">
          <div className="modal-dialog">
            <div className="modal-content homepage-navbar-modal-content">
              <div className="modal-header homepage-modal-logout-header">
                <h5 className="modal-title">
                  Are you sure you want to Logout?
                </h5>
              </div>
              <div className="modal-footer homepage-modal-logout-footer">
                <button className="btn btn-danger w-25" onClick={confirmLogout}>
                  Yes
                </button>
                <button
                  className="btn btn-secondary w-25"
                  onClick={cancelLogout}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
