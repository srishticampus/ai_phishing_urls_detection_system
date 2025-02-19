import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { logout, checkLoginStatus } from "../../Services/apiService";
import { useAuth } from '../../Context/AuthContext';
import adminimg from "../../assets/Images/Admin_dashboard_img.png";
import "../../Pages/AdminSidebar/AdminSidebar.css";

function AdminSidebar() {
    const [isLoggedIn, setIsLoggedIn] = useState(checkLoginStatus());
    const [showModal, setShowModal] = useState(false);
    const { setIsAuthenticated } = useAuth();
    const navigate = useNavigate(); 

    useEffect(() => {
        setIsLoggedIn(checkLoginStatus());
    }, []);

    const handleLogoutClick = () => {
        console.log("Logout clicked");
        setShowModal(prevState => !prevState);
        console.log("showModal", showModal);
    };

    const handleLogoutConfirm = () => {
        logout(); // Remove tokens
        setIsLoggedIn(false);
        setShowModal(false);
        setIsAuthenticated(false);
        navigate("/admin-login"); // Redirect to admin login page after logout
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <div className="admin-dashboard">
                <div className="admin-dashboard-img">
                    <img src={adminimg} alt="Admin Dashboard" />
                    <p className="admin-dashboard-text-color">Admin</p>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn admin-dashboard-btn">
                        <Link to="/admin-dashboard" className="btn admin-dashboard-btn-border">Dashboard</Link>
                    </button>
                </div>

                <div className="d-flex justify-content-center">
                    <ul>
                        <li className="mb-4 mt-5">
                            <Link to="/admin-add-blog" className="btn admin-dashboard-btn-color admin-dashboard-listdecor">Add Blogs</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/admin-view-blog" className="btn admin-dashboard-btn-color admin-dashboard-listdecor">View Blogs</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/admin-view-users" className="btn admin-dashboard-btn-color admin-dashboard-listdecor">View Users</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/admin-view-advertisers" className="btn admin-dashboard-btn-color admin-dashboard-listdecor">Advertisers</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/admin-view-advertisement" className="btn admin-dashboard-btn-color admin-dashboard-listdecor">Advertisement</Link>
                        </li>
                        
                        
                        {isLoggedIn ? (
                            <li>
                                <button className="btn admin-dashboard-btn-color admin-dashboard-listdecor" onClick={handleLogoutClick}>Logout</button>
                            </li>
                        ) : (
                            <li>
                                <Link to="/admin-login" className="btn admin-dashboard-btn-color admin-dashboard-listdecor">Login</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="navbar-component">
                <p className="admin-dashboard-navbar-head-color">BLOG <span className="admin-dashboard-navbar-span-color">SPHERE</span></p>
            </div>

           
            {showModal && (
                <div className="modal-overlay admin-logout-modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="admin-logout-modal-title">Are you sure you want to Logout?</h5>
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

export default AdminSidebar;
