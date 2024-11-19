import React from 'react'
import '../assets/Styles/Components_Styles/User_Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function User_Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-dark UserNavbar">
                <div class="container-fluid">
                    <a class="navbar-brand"><span className='UserNavbar_logo_Blog_Color'>BLOG</span>&nbsp;<span className='UserNavbar_logo_color'>SPHERE</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="mynavbar">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item navbar_nav-item">
                              <button className='btn'><a class="nav-link user_navbar_links" >Home</a></button>
                            </li>
                            <li class="nav-item navbar_nav-item">
                               <button className='btn'><a class="nav-link user_navbar_links" >About</a></button>
                            </li>
                            <li class="nav-item navbar_nav-item">
                                <button className='btn'><a class="nav-link user_navbar_links" >Services</a></button>
                            </li>
                            <li class="nav-item navbar_nav-item">
                                <button className='btn'><a class="nav-link user_navbar_links" >Contact</a></button>
                            </li>
                        </ul>
  
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default User_Navbar
