import { Link } from "react-router";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar  navbar-expand-sm">
        <div className="container-fluid">
          <Link className="navbar-brand logo" to="/">
            <span className="logo_Blog_Color">BLOG</span>&nbsp;
            <span className="logo_color">SPHERE</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav navbar_list mx-auto ">
              <li className="nav-item navbar_nav-item">
                <Link className="nav-link navbar_links" to="">
                  Home
                </Link>
              </li>
              <li className="nav-item navbar_nav-item">
                <Link className="nav-link navbar_links" to="">
                  About
                </Link>
              </li>
              <li className="nav-item navbar_nav-item">
                <Link className="nav-link navbar_links" to="">
                  Services
                </Link>
              </li>
              <li className="nav-item navbar_nav-item">
                <Link className="nav-link navbar_links" to="">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex ms-auto">
              <button
                className="btn btn-outline navbar_login_button"
                type="button"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
