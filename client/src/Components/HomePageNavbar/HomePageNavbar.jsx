import "../../Components/HomePageNavbar/HomePageNavbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faArrowRightFromBracket,faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Switch } from "antd";
import { logout, checkLoginStatus } from "../../Services/apiService";
import Vector from "../../assets/Images/Vector.png";

function HomePageNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(checkLoginStatus());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false);
  const [isSafeMode, setIsSafeMode] = useState(false);
  const navigate = useNavigate();

  // Listen for login/logout changes globally
  useEffect(() => {
    const handleAuthChange = () => {
      setIsLoggedIn(checkLoginStatus());
    };

    window.addEventListener("loginStatusChanged", handleAuthChange);

    return () => {
      window.removeEventListener("loginStatusChanged", handleAuthChange);
    };
  }, []);

  // Check Safe Mode from localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem("safeMode") === "true";
    setIsSafeMode(savedMode);
  }, []);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const closeModal = () => setIsModalOpen(false);

  const handleLogoutClick = () => {
    setIsLogoutConfirmOpen(true); // Open logout confirmation modal
  };

  const confirmLogout = () => {
    logout(); // Call the logout function
    setIsLogoutConfirmOpen(false); // Close the confirmation modal
    navigate("/"); // Redirect to home page
  };

  const cancelLogout = () => {
    setIsLogoutConfirmOpen(false); // Close the confirmation modal
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.searchInput.value;
    alert(`Search term: ${searchTerm}`);
  };

  const handleSwitchChange = (checked) => {
    setIsSafeMode(checked);
    localStorage.setItem("safeMode", checked);
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-md ${isSafeMode ? "homepage-navbar-background-color" : "homepage-navbar-background-color-disabled"}`}>
        <div className="container-fluid">
          <Link className="navbar-brand logo" to="/">
            <span className="logo-blog-color-homepage">BLOG</span>&nbsp;
            <span className="logo-sphere-color-homepage">SPHERE</span>
          </Link>
          <button
            className="navbar-toggler navbar-toggler-background-color"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
            aria-controls="mynavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav navbar_list mx-auto">
              <li className="nav-item navbar_nav-item">
                <Link className="nav-link navbar-links-homepage" to="/">Home</Link>
              </li>
              <li className="nav-item navbar_nav-item">
                <Link className="nav-link navbar-links-homepage" to="/about">About</Link>
              </li>
              <li className="nav-item navbar_nav-item">
                <Link className="nav-link navbar-links-homepage" to="/services">Services</Link>
              </li>
              <li className="nav-item navbar_nav-item">
                <Link className="nav-link navbar-links-homepage" to="/contact">Contact</Link>
              </li>
            </ul>

            <form className="d-flex ms-auto" onSubmit={handleSearch}>
              <div className="input-group searchbar-grp">
                <input type="text" className="form-control search-input-field" name="searchInput" placeholder="Search..." />
                <button type="submit" className="btn searchbar-input-button" aria-label="Search">
                  <FontAwesomeIcon icon={faSearch} className="searchbar-input-icon" />
                </button>
              </div>
            </form>

            <div className="ms-5">
              <FontAwesomeIcon icon={faUser} onClick={toggleModal} style={{ cursor: "pointer" }} />
            </div>

            {isSafeMode && (
              <div className="ms-5 safeicon">
                <img src={Vector} alt="Safe Icon" />
                <span className="homepage-navbar-safe">Safe</span>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* User Menu Modal */}
      {isModalOpen && (
        <div className="modal homepage-navbar-modal">
          <div className="modal-dialog" id="modal-dialog-right">
            <div className="modal-content">
              <div className="modal-header homepage-modal-header">
                <FontAwesomeIcon icon={faUser} style={{ cursor: "pointer", color: "#f18c00" }} />
                <span className="ms-2">
                  <Link to="/user-view-profile" className="user-view-profile-color">Profile</Link>
                </span>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-header homepage-modal-header">
                <FontAwesomeIcon icon={faPencilRuler} style={{ cursor: "pointer", color: "#f18c00" }} />
                <span className="ms-2">
                  <Link to="/user-profile" className="user-view-profile-color">Edit Profile</Link>
                </span>
              </div>
              <div className="modal-body homepage-modal-body">
                Choose Mode
                <span>
                  <Switch checked={isSafeMode} checkedChildren="Safe" unCheckedChildren="Unsafe" onChange={handleSwitchChange} />
                </span>
              </div>
              <div className="modal-footer" style={{ display: "flex", justifyContent: "flex-start", width: "100%" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FontAwesomeIcon
                    icon={faArrowRightFromBracket}
                    style={{ color: "#f18c00", marginRight: "10px", cursor: "pointer" }}
                    onClick={handleLogoutClick}
                  />
                  <span style={{ cursor: "pointer", color: "#000" }} onClick={handleLogoutClick}>Logout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {isLogoutConfirmOpen && (
        <div className="modal homepage-navbar-modal-logout">
          <div className="modal-dialog">
            <div className="modal-content homepage-navbar-modal-content">
              <div className="modal-header homepage-modal-logout-header">
                <h5 className="modal-title">Are you sure you want to Logout?</h5>
              </div>
              <div className="modal-footer homepage-modal-logout-footer">
                <button className="btn btn-danger w-25" onClick={confirmLogout}>Yes</button>
                <button className="btn btn-secondary w-25" onClick={cancelLogout}>No</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePageNavbar;