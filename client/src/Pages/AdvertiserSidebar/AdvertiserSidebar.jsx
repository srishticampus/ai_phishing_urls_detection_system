import  { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { logout, checkLoginStatus } from "../../Services/apiService";
import advimg from "../../assets/Images/Admin_dashboard_img.png";
import "../../Pages/AdvertiserSidebar/AdvertiserSidebar.css";

function AdvertiserSidebar() {
    const [isLoggedIn, setIsLoggedIn] = useState(checkLoginStatus());
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate(); 


    useEffect(() => {
        setIsLoggedIn(checkLoginStatus());
    }, []);

    
    const handleLogoutClick = () => {
        setShowModal(true);
    };

    
    const handleLogoutConfirm = () => {
        logout(); // Remove tokens
        setIsLoggedIn(false); 
        setShowModal(false); 
        navigate("/advertiser-login"); 
    };

    
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="advertiser-dashboard">
            <div className="advertiser-dashboard-img">
                <img className="mb-2" src={advimg} alt="Advertiser Dashboard" />
                <p className="advertiser-dashboard-head">Advertisers</p>
            </div>
            <div className="d-flex justify-content-center flex-column mt-5">
                <Link to="/advertisers-dashboard">
                    <button className="btn text-light mb-3">Dashboard</button>
                </Link>
                <Link to="/advertisers-add-advertisements">
                    <button className="btn text-light mb-3">Add Advertisements</button>
                </Link>
                <Link to="/advertisers-view-advertisements">
                    <button className="btn text-light mb-3">View Advertisements</button>
                </Link>
                {/* <Link to="/advertiser-view-user">
                    <button className="btn text-light mb-3">View Users</button>
                </Link> */}
                {/* <Link to="/advertisers-reset-password">
                    <button className="btn text-light mb-3">Reset Password</button>
                </Link> */}
                {/* Display logout button only if the user is logged in */}
                {isLoggedIn ? (
                    <button className="btn text-light advertiser-logout-login-button mb-3" onClick={handleLogoutClick}>
                        Logout
                    </button>
                ) : (
                    <Link to="/advertiser-login">
                        <button className="btn text-light mb-3 advertiser-logout-login-button">Login</button>
                    </Link>
                )}
            </div>
            <div className="adv-navbar-component">
                <p className="adv-dashboard-navbar-head-color">BLOG <span className="adv-dashboard-navbar-span-color">SPHERE</span></p>
            </div>

            {/* Custom Modal for logout confirmation */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="advertiser-logout-modal-title">Are you sure you want to Logout?</h5>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-danger w-25" onClick={handleLogoutConfirm}>
                                Yes
                            </button>
                            <button className="btn btn-secondary w-25" onClick={handleCloseModal}>
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdvertiserSidebar;
