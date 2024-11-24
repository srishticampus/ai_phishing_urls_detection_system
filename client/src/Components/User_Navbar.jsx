import React from 'react';
import '../assets/Styles/Components_Styles/User_Navbar.css'; // Your custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS (this includes Popper.js which is necessary for the toggle)

function User_Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md UserNavbar">
        <div className="container-fluid">
          <a className="navbar-brand">
            <span className="UserNavbar_logo_Blog_Color">BLOG</span>&nbsp;
            <span className="UserNavbar_logo_color">SPHERE</span>
          </a>
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-light"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a className="nav-link user_navbar_links Navlitems_Margin" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link user_navbar_links Navlitems_Margin" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link user_navbar_links Navlitems_Margin" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link user_navbar_links Navlitems_Margin" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default User_Navbar;
