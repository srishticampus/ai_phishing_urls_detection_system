import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/Styles/Components_Styles/Navbar.css';

function Navbar() {
    return (
        <>
            <nav class="navbar  navbar-expand-sm">
                <div class="container-fluid">
                    <a class="navbar-brand logo"><span className='logo_Blog_Color'>BLOG</span>&nbsp;<span className='logo_color'>SPHERE</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="mynavbar">
                        <ul class="navbar-nav navbar_list mx-auto ">
                            <li class="nav-item navbar_nav-item">
                                <a class="nav-link navbar_links" >Home</a>
                            </li>
                            <li class="nav-item navbar_nav-item">
                                <a class="nav-link navbar_links" >About</a>
                            </li>
                            <li class="nav-item navbar_nav-item">
                                <a class="nav-link navbar_links" >Services</a>
                            </li>
                            <li class="nav-item navbar_nav-item">
                                <a class="nav-link navbar_links" >Contact</a>
                            </li>
                        </ul>
                        <form class="d-flex ms-auto">
                            <button class="btn btn-outline navbar_login_button" type="button">Login</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
