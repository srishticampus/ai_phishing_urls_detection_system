import { Link } from "react-router";
import "./UserNavbar.css";

function UserNavbar() {
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
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link
                  className="nav-link user_navbar_links Navlitems_Margin"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link user_navbar_links Navlitems_Margin"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link user_navbar_links Navlitems_Margin"
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link user_navbar_links Navlitems_Margin"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link user_navbar_links Navlitems_Margin"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default UserNavbar;
